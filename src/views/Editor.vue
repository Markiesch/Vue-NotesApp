<template>
  <v-container>
    <v-toolbar flat fixed>
      <v-btn @click="editor.chain().toggleBold().run()" :color="editor.isActive('bold') ? 'primary' : ''" icon><v-icon>mdi-format-bold</v-icon></v-btn>
      <v-btn @click="editor.chain().toggleItalic().run()" :color="editor.isActive('italic') ? 'primary' : ''" icon><v-icon>mdi-format-italic</v-icon></v-btn>
      <v-btn @click="editor.chain().toggleStrike().run()" :color="editor.isActive('strike') ? 'primary' : ''" icon><v-icon>mdi-format-strikethrough</v-icon></v-btn>
      <v-btn @click="editor.chain().toggleCode().run()" :color="editor.isActive('code') ? 'primary' : ''" icon><v-icon>mdi-code-tags</v-icon></v-btn>
      <v-btn @click="editor.chain().unsetAllMarks().run()" icon><v-icon>mdi-eraser-variant</v-icon></v-btn>
      <v-btn @click="editor.chain().setParagraph().run()" :color="editor.isActive('paragraph') ? 'primary' : ''" icon><v-icon>mdi-format-paragraph</v-icon></v-btn>
      <v-btn @click="editor.chain().toggleHeading({ level: 1 }).run()"  :color="editor.isActive('heading', { level: 1 }) ? 'primary' : ''" icon><v-icon>mdi-format-header-1</v-icon></v-btn>
      <v-btn @click="editor.chain().toggleHeading({ level: 2 }).run()"  :color="editor.isActive('heading', { level: 2 }) ? 'primary' : ''" icon><v-icon>mdi-format-header-2</v-icon></v-btn>
      <v-btn @click="editor.chain().toggleHeading({ level: 3 }).run()"  :color="editor.isActive('heading', { level: 3 }) ? 'primary' : ''" icon><v-icon>mdi-format-header-3</v-icon></v-btn>
      <v-btn @click="editor.chain().toggleHeading({ level: 4 }).run()"  :color="editor.isActive('heading', { level: 4 }) ? 'primary' : ''" icon><v-icon>mdi-format-header-4</v-icon></v-btn>
      <v-btn @click="editor.chain().toggleHeading({ level: 5 }).run()"  :color="editor.isActive('heading', { level: 5 }) ? 'primary' : ''" icon><v-icon>mdi-format-header-5</v-icon></v-btn>
      <v-btn @click="editor.chain().toggleHeading({ level: 6 }).run()"  :color="editor.isActive('heading', { level: 6 }) ? 'primary' : ''" icon><v-icon>mdi-format-header-6</v-icon></v-btn>
      <v-btn @click="editor.chain().toggleBulletList().run()" :color="editor.isActive('bulletList') ? 'primary' : ''" icon><v-icon>mdi-format-list-bulleted</v-icon></v-btn>
      <v-btn @click="editor.chain().toggleOrderedList().run()" :color="editor.isActive('orderedList') ? 'primary' : ''" icon><v-icon>mdi-format-list-numbered</v-icon></v-btn>
      <v-btn @click="editor.chain().toggleCodeBlock().run()" :color="editor.isActive('codeBlock') ? 'primary' : ''" icon><v-icon>mdi-file-code-outline</v-icon></v-btn>
      <v-btn @click="editor.chain().toggleBlockquote().run()" :color="editor.isActive('blockQuote') ? 'primary' : ''" icon><v-icon>mdi-format-quote-close</v-icon></v-btn>
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
      <editor-content :editor="editor" />
      <v-btn v-if="!settings.autoSave" :disabled="!unsavedChanges" :loading="loading" color="primary" @click="saveNote">Save</v-btn>
    </v-container>
  </v-container>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { Getter, Action } from "vuex-class";
import { Editor, EditorContent } from "@tiptap/vue-2";
import StarterKit from "@tiptap/starter-kit";
import store from "@/store";

@Component({
  components: {
    EditorContent,
  },
  beforeRouteEnter(to, from, next) {
    store.dispatch("fetchNote", to.params.id);
    next();
  },
})
export default class VueEditor extends Vue {
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
  editor: any = null;
  editContent: string = "fafafa";

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

    this.editor = new Editor({
      content: this.note.text,
      extensions: [StarterKit],
      onUpdate: () => {
        this.note.text = this.editor.getHTML();
        this.setUnsavedChanges()
      },
      editorProps: {
        attributes: {
          class: "elevation-2 pa-3 mb-4 rounded",
        },
      },
    });
  }

  beforeDestroy() {
    this.editor.destroy();
  }
}
</script>

<style>
.ProseMirror {
  outline: none;
  line-height: 1;
}

code {
  background-color: rgba(#616161, 0.1);
  color: #616161;
}

pre {
  background: #eeeeee;
  color: #000;
  font-family: 'JetBrainsMono', monospace;
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
