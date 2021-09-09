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
      <v-btn :color="note.favorite ? 'error' : ''" @click="note.favorite = !note.favorite" icon>
        <v-icon>{{ note.favorite ? "mdi-heart" : "mdi-heart-plus" }}</v-icon>
      </v-btn>
    </v-toolbar>
    <v-container>
      <v-text-field @input="unsavedChanges = true" autocomplete="off" label="Title" v-model="note.title" solo contenteditable="true" />
      <v-textarea @input="unsavedChanges = true" label="Text" v-model="note.text" solo />
      <v-btn :disabled="!unsavedChanges" :loading="loading" color="primary" @click="saveNote">Save</v-btn>
    </v-container>
  </v-container>
</template>

<script>
import { Component, Vue } from "vue-property-decorator";
import { Getter } from "vuex-class";
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
    title: null,
    text: null,
    favorite: false,
    deleted: false,
  }
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

  created() {
    try {
      const id = parseInt(this.id);

      this.note.title = this.getNoteById(id).title;
      this.note.text = this.getNoteById(id).text;
      this.noteId = id;

      store.dispatch("addRecent", id);
    } catch (err) {
      this.$router.push("/not-found");
      console.warn(err)
    }
  }
}
</script>
