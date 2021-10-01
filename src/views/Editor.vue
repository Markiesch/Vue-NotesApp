<template>
  <v-container>
    <v-toolbar flat fixed>
      <v-spacer></v-spacer>
      <v-btn @click="deleteNote" icon>
        <v-icon>mdi-trash-can</v-icon>
      </v-btn>
      <v-btn :color="note.favorite ? 'error' : ''" @click="toggleFavorite" icon>
        <v-icon>{{ note.favorite ? "mdi-heart" : "mdi-heart-plus" }}</v-icon>
      </v-btn>
    </v-toolbar>
    <v-container>
      <v-text-field v-model="note.title" @input="setUnsavedChanges()" autocomplete="off" label="Title" solo />
      <v-textarea v-model="note.text" @input="setUnsavedChanges()" autocomplete="off" label="Text" solo />
      <v-btn v-if="!settings.autoSave" :disabled="!unsavedChanges" :loading="loading" color="primary" @click="saveNote">Save</v-btn>
    </v-container>
  </v-container>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { Getter, Action } from "vuex-class";
import store from "@/store";

@Component({
  beforeRouteEnter(to, from, next) {
    store.dispatch("fetchNote", to.params.id);
    next();
  },
})
export default class Editor extends Vue {
  @Prop() id: any;

  note = {
    title: "",
    text: "",
    favorite: false,
    deleted: false,
    id: 0,
  };
  startingNote = { title: "", text: "", favorite: false };
  unsavedChanges = false;
  loading = false;

  @Getter("getNoteById") getNoteById: any;
  @Getter("getSettings") settings: any;
  @Action("deleteNote") delNote: any;

  deleteNote() {
    this.delNote(+this.id);
  }

  saveNote() {
    this.loading = true;
    const note = this.note;
    const { id } = this.note;
    store.dispatch("saveNote", { note, id }).then(() => {
      this.loading = false;
      this.unsavedChanges = false;
      this.startingNote.title = note.title;
      this.startingNote.text = note.text;
      this.startingNote.favorite = note.favorite;
    });
  }

  toggleFavorite() {
    this.note.favorite = !this.note.favorite;
    this.setUnsavedChanges();
  }

  setUnsavedChanges() {
    if (this.settings.autoSave) return this.saveNote();

    this.unsavedChanges = this.note.title !== this.startingNote.title || this.note.text !== this.startingNote.text || this.note.favorite !== this.startingNote.favorite;
  }

  mounted() {
    window.addEventListener("keydown", (e) => {
      if (e.key.toLowerCase() === "s" && e.ctrlKey === true) {
        e.preventDefault();
        if (this.unsavedChanges) this.saveNote();
      }
    });

    try {
      const id = parseInt(this.id);
      const note = this.getNoteById(id);
      if (!note) return;
      this.note = note;
      // Workaround to make "StartingNote" not reactive
      this.startingNote.title = note.title;
      this.startingNote.text = note.text;
      this.startingNote.favorite = note.favorite;

      store.dispatch("addRecent", id);
    } catch (err) {
      this.$router.push("/not-found");
      console.warn(err);
    }
  }
}
</script>
