<template>
  <v-container color="primary">
    <v-container v-if="recentNotes.length && settings.showRecents">
      <h1>Recent Notes</h1>
      <v-row>
        <v-col v-for="note in recentNotes" :key="note.id" lg="3" class="pointer" @click="openNote(note.id)">
          <Card :note="note" :context="show"></Card>
        </v-col>
      </v-row>
    </v-container>

    <v-container v-if="favoriteNotes.length && settings.showFavorites">
      <h1>Favorite Notes</h1>
      <v-row>
        <v-col v-for="note in favoriteNotes" :key="note.id" lg="3" class="pointer" @click="openNote(note.id)">
          <Card :note="note" :context="show"></Card>
        </v-col>
      </v-row>
    </v-container>

    <v-container class="mt-6">
      <v-badge :content="notes.length">
        <h1 class="primaryText">All notes</h1>
      </v-badge>
      <p v-if="notes.length < 1">It looks like you do not have any files yet!</p>
      <v-row>
        <v-col v-for="note in notes" :key="note.id" lg="3" class="pointer" @click="openNote(note.id)">
          <Card :note="note" :context="show"></Card>
        </v-col>
        <v-col lg="3" class="pointer" @click="createNote">
          <v-card outlined>
            <v-card-title> <v-icon>mdi-plus</v-icon>Create a new Note</v-card-title>
            <v-card-subtitle>Click to create a new note</v-card-subtitle>
          </v-card>
        </v-col>
      </v-row>
    </v-container>

    <v-menu v-model="showMenu" :position-x="x" :position-y="y" absolute offset-y>
      <v-list dense nav>
        <v-list-item link @click="openNote(clickedNote.id)">
          <v-list-item-icon>
            <v-icon>mdi-pen</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>Edit</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link @click="toggleFavorite">
          <v-list-item-icon>
            <v-icon :color="clickedNote.favorite ? 'error' : ''">{{ clickedNote.favorite ? "mdi-heart" : "mdi-heart-plus" }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>Toggle Favorite</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link @click="deleteNote">
          <v-list-item-icon>
            <v-icon>mdi-trash-can</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>Delete Note</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-menu>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { Getter, Action } from "vuex-class";
import store from "@/store";
import { Note } from "@/store/utils";
import Card from "../components/Card.vue"

@Component({
  components: {
    Card
  }
})
export default class Home extends Vue {
  showMenu = false;
  x = 0;
  y = 0;
  clickedNote = {
    title: "",
    text: "",
    favorite: false,
    deleted: false,
    id: 1,
  };

  @Getter("getNotes") notes!: Note[];
  @Getter("getRecentNotes") recentNotes: any;
  @Getter("getFavoriteNotes") favoriteNotes: any;
  @Getter("getSettings") settings: any;
  @Action("createNote") createNote: any;

  openNote(note: any) {
    this.$router.push("edit/" + note);
  }

  show(event: any, note: any) {
    event.preventDefault();
    this.clickedNote = note;
    this.showMenu = false;
    this.x = event.clientX;
    this.y = event.clientY;
    this.$nextTick(() => (this.showMenu = true));
  }

  toggleFavorite() {
    const note = this.clickedNote;
    const { id } = note;
    this.clickedNote.favorite = !note.favorite;
    store.dispatch("saveNote", { note, id });
  }

  deleteNote() {
    const { id } = this.clickedNote;
    store.dispatch("deleteNote", id);
  }
}
</script>

<style scoped>
.card {
  max-height: 150px;
  overflow-y: scroll;
}



/* width */
.card::-webkit-scrollbar {
  width: 10px;
}

/* Track */
.card::-webkit-scrollbar-track {
  background: #fbfbfb;
}

/* Handle */
.card::-webkit-scrollbar-thumb {
  background: #eeeeee;
}

/* Handle on hover */
.card::-webkit-scrollbar-thumb:hover {
  background: #555;
}
</style>