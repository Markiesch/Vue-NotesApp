<template>
  <v-container v-if="editor">
    <Toolbar :editor="editor" :note="note" :setUnsavedChanges="setUnsavedChanges"></Toolbar>
    <v-container>
      <v-text-field v-model="note.title" @input="setUnsavedChanges()" autocomplete="off" label="Title" solo />
      <editor-content :editor="editor" />
      <v-btn v-if="!settings.autoSave" :disabled="!unsavedChanges" color="primary" @click="saveNote">Save</v-btn>
    </v-container>
  </v-container>
</template>

<script lang="ts">
import store from "@/store";
import StarterKit from "@tiptap/starter-kit";
import { Editor, EditorContent } from "@tiptap/vue-2";
import { Component, Prop, Vue } from "vue-property-decorator";
import { Getter } from "vuex-class";
import Toolbar from "../components/Toolbar.vue";

@Component({
  components: {
    EditorContent,
    Toolbar,
  },
  beforeRouteEnter(to, from, next) {
    store.dispatch("fetchNote", to.params.id);
    next();
  },
})
export default class VueEditor extends Vue {
  @Prop() id: any;

  note = { title: "", text: "", favorite: false, deleted: false, id: 0 };
  startingNote = { title: "", text: "", favorite: false };
  unsavedChanges = false;
  editor: Editor | null = null;
  editContent = "";

  @Getter("getNoteById") getNoteById: any;
  @Getter("getSettings") settings: any;

  saveNote() {
    const note = this.note;
    const { id } = this.note;
    store.dispatch("saveNote", { note, id }).then(() => {
      this.unsavedChanges = false;
      this.startingNote.title = note.title;
      this.startingNote.text = note.text;
      this.startingNote.favorite = note.favorite;
    });
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

    const note = this.getNoteById(parseInt(this.id));
    if (!note) return;
    this.note = note;
    // Workaround to make "StartingNote" not reactive
    this.startingNote.title = note.title;
    this.startingNote.text = note.text;
    this.startingNote.favorite = note.favorite;

    this.editor = new Editor({
      content: this.note.text,
      extensions: [StarterKit],
      onUpdate: () => {
        if (!this.editor) return;
        this.note.text = this.editor.getHTML();
        this.setUnsavedChanges();
      },
      editorProps: {
        attributes: {
          class: "elevation-1 pa-3 mb-4 rounded",
        },
      },
    });
  }

  beforeDestroy() {
    if (this.editor) this.editor.destroy();
  }
}
</script>

<style>
.ProseMirror {
  outline: none;
  line-height: 1;
}

.ProseMirror p {
  margin: 0;
}

code {
  background-color: rgba(#616161, 0.1);
  color: #616161;
}

pre {
  background: #eeeeee;
  color: #000;
  font-family: "JetBrainsMono", monospace;
  padding: 0.75rem;
  border-radius: 0.5rem;
}

pre code {
  color: inherit;
  padding: 0;
  background: none !important;
  font-size: 0.8rem;
}
</style>
