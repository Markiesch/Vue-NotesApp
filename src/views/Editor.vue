<template>
  <v-container>
    <v-toolbar fixed>
      <v-toolbar-title>Title</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon><v-icon>mdi-format-align-left</v-icon></v-btn>
      <v-btn icon><v-icon>mdi-format-align-center</v-icon></v-btn>
      <v-btn icon><v-icon>mdi-format-align-justify</v-icon></v-btn>
      <v-btn icon><v-icon>mdi-format-align-right</v-icon></v-btn>
      <v-btn icon><v-icon>mdi-palette</v-icon></v-btn>
      <v-spacer></v-spacer>
      <v-btn :color="note.favorite ? 'error' : ''" @click="toggleFavorite" icon>
        <v-icon>{{ note.favorite ? "mdi-heart" : "mdi-heart-plus" }}</v-icon>
      </v-btn>
    </v-toolbar>
    <v-container>
      <v-text-field @input="setUnsavedChanges()" autocomplete="off" label="Title" v-model="note.title" solo contenteditable="true" />
      <v-textarea @input="setUnsavedChanges()" label="Text" v-model="note.text" solo />
      <v-btn :disabled="!unsavedChanges" :loading="loading" color="primary" @click="saveNote">Save</v-btn>
    </v-container>
  </v-container>
</template>

<script>
import {Component, Vue} from "vue-property-decorator";
import {Getter} from "vuex-class";
import store from "@/store"

@Component({
  props: {
    id: {
      default: 1
    }
  },
  beforeRouteLeave (to, from, next) {
    if (!this.unsavedChanges) return next();
    const answer = window.confirm("Do you really want to leave?  You have unsaved changes!");
    if (answer) return next();
    next(false)
  },
})

export default class Editor extends Vue {
  note = {
    title: "",
    text: "",
    favorite: false,
    deleted: false,
  }
  startingNote = { title: "", text: "", favorite: false };
  noteId = null;
  unsavedChanges = false;
  loading = false;

  @Getter("getNoteById") getNoteById;

  saveNote() {
    this.loading = true;
    const note = this.note;
    const id = this.noteId;
    store.dispatch("saveNote", {note, id}).then(() => {
      this.loading = false;
      this.unsavedChanges = false;
    });
  }

  toggleFavorite() {
    this.note.favorite = !this.note.favorite;
    this.setUnsavedChanges();
  }

  setUnsavedChanges() {
    this.unsavedChanges = this.note.title !== this.startingNote.title ||
                          this.note.text !== this.startingNote.text ||
                          this.note.favorite !== this.startingNote.favorite
  }

  created() {
    try {
      const id = parseInt(this.id);
      const note = this.getNoteById(id);
      this.note = note;
      this.startingNote.title = note.title;
      this.startingNote.text = note.text;
      this.startingNote.favorite = note.favorite;

      store.dispatch("addRecent", id);
    } catch (err) {
      this.$router.push("/not-found");
      console.warn(err)
    }
  }
}
</script>
