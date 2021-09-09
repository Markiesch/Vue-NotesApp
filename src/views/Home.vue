<template>
  <v-container color="primary">
    <v-container v-if="recentNotes.length > 0">
      <h1>Recent Notes</h1>
      <v-row>
        <v-col v-for="note in recentNotes" :key="note.id" lg="3" class="pointer" @click="openNote(note.id)">
          <v-hover v-slot="{ hover }">
            <v-card class="backgroundAccent" :class="{ 'backgroundAccent2': hover}" outlined>
              <v-card-title>{{ note.title }}</v-card-title>
              <v-card-subtitle>{{ note.text }}</v-card-subtitle>
            </v-card>
          </v-hover>
        </v-col>
      </v-row>
    </v-container>

    <v-container class="mt-6">
      <v-badge :content="note.notes.length">
        <h1 class="primaryText">All notes</h1>
      </v-badge>
      <p v-if="note.length < 1">It looks like you do not have any files yet!</p>
      <v-row>
        <v-col v-for="note in note.notes" :key="note.id" lg="3" class="pointer" @click="openNote(note.id)">
          <v-hover v-slot="{ hover }">
            <v-card class="backgroundAccent" :class="{ 'backgroundAccent2': hover}" outlined>
              <v-card-title>{{ note.title }}</v-card-title>
              <v-card-subtitle>{{ note.text }}</v-card-subtitle>
            </v-card>
          </v-hover>
        </v-col>
        <v-col lg="3" class="pointer" @click="createNote">
          <v-card outlined>
            <v-card-title>
              <v-icon>mdi-plus</v-icon>Create a new Note</v-card-title>
            <v-card-subtitle>Click to create a new note</v-card-subtitle>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-container>
</template>

<script>
import { Component, Vue } from "vue-property-decorator";
import { State, Getter, Action } from "vuex-class";
import store from "@/store"
import NProgress from "nprogress";

@Component({
  components: {},
  beforeRouteEnter(to, from, next) {
    NProgress.start();
    store.dispatch("getRecentNotes");
    store.dispatch("fetchNotes").then(() => {
      NProgress.done();
      next()
    });
  },
})

export default class Home extends Vue {
  // === vuex ===
  @Getter("getRecentNotes") recentNotes;
  @State("note") note;
  @Action("createNote") createNote;

  // === functions ===
  openNote(note) {
    this.$router.push("edit/" + note);
  }
};
</script>
