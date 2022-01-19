<template>
  <v-container class="toolbar">
    <div>
      <v-btn icon @click="editor.chain().focus().toggleBold().run()" :color="editor.isActive('bold') ? 'primary' : ''"><v-icon>mdi-format-bold</v-icon></v-btn>
      <v-btn icon @click="editor.chain().focus().toggleItalic().run()" :color="editor.isActive('italic') ? 'primary' : ''"><v-icon>mdi-format-italic</v-icon></v-btn>
      <v-btn icon @click="editor.chain().focus().toggleStrike().run()" :color="editor.isActive('strike') ? 'primary' : ''"><v-icon>mdi-format-strikethrough</v-icon></v-btn>
      <v-btn icon @click="editor.chain().focus().toggleCode().run()" :color="editor.isActive('code') ? 'primary' : ''"><v-icon>mdi-code-tags</v-icon></v-btn>
      <v-btn icon @click="editor.chain().focus().unsetAllMarks().run()"><v-icon>mdi-eraser-variant</v-icon></v-btn>
      <v-btn icon @click="editor.chain().focus().setParagraph().run()" :color="editor.isActive('paragraph') ? 'primary' : ''"><v-icon>mdi-format-paragraph</v-icon></v-btn>
      <v-btn icon @click="editor.chain().focus().toggleHeading({ level: 1 }).run()"  :color="editor.isActive('heading', { level: 1 }) ? 'primary' : ''"><v-icon>mdi-format-header-1</v-icon></v-btn>
      <v-btn icon @click="editor.chain().focus().toggleHeading({ level: 2 }).run()"  :color="editor.isActive('heading', { level: 2 }) ? 'primary' : ''"><v-icon>mdi-format-header-2</v-icon></v-btn>
      <v-btn icon @click="editor.chain().focus().toggleHeading({ level: 3 }).run()"  :color="editor.isActive('heading', { level: 3 }) ? 'primary' : ''"><v-icon>mdi-format-header-3</v-icon></v-btn>
      <v-btn icon @click="editor.chain().focus().toggleHeading({ level: 4 }).run()"  :color="editor.isActive('heading', { level: 4 }) ? 'primary' : ''"><v-icon>mdi-format-header-4</v-icon></v-btn>
      <v-btn icon @click="editor.chain().focus().toggleHeading({ level: 5 }).run()"  :color="editor.isActive('heading', { level: 5 }) ? 'primary' : ''"><v-icon>mdi-format-header-5</v-icon></v-btn>
      <v-btn icon @click="editor.chain().focus().toggleHeading({ level: 6 }).run()"  :color="editor.isActive('heading', { level: 6 }) ? 'primary' : ''"><v-icon>mdi-format-header-6</v-icon></v-btn>
      <v-btn icon @click="editor.chain().focus().toggleBulletList().run()" :color="editor.isActive('bulletList') ? 'primary' : ''"><v-icon>mdi-format-list-bulleted</v-icon></v-btn>
      <v-btn icon @click="editor.chain().focus().toggleOrderedList().run()" :color="editor.isActive('orderedList') ? 'primary' : ''"><v-icon>mdi-format-list-numbered</v-icon></v-btn>
      <v-btn icon @click="editor.chain().focus().toggleCodeBlock().run()" :color="editor.isActive('codeBlock') ? 'primary' : ''"><v-icon>mdi-file-code-outline</v-icon></v-btn>
      <v-btn icon @click="editor.chain().focus().toggleBlockquote().run()" :color="editor.isActive('blockQuote') ? 'primary' : ''"><v-icon>mdi-format-quote-close</v-icon></v-btn>
    </div>
    <div v-if="note">
      <v-btn icon @click="deleteNote(+note.id)"><v-icon>mdi-trash-can</v-icon></v-btn>
      <v-btn icon :color="note.favorite ? 'error' : ''" @click="toggleFavorite"><v-icon>{{ note.favorite ? "mdi-heart" : "mdi-heart-plus" }}</v-icon></v-btn>
    </div>
  </v-container>
</template>


<script lang="ts">
import { Note } from "@/interfaces";
import { Editor } from "@tiptap/vue-2";
import { Component, Prop, Vue } from "vue-property-decorator";
import { Action } from "vuex-class";

@Component
export default class VueEditor extends Vue {
    @Action("deleteNote") deleteNote!: (id: number) => void;
    @Prop() editor!: Editor;
    @Prop() note!: Note;
    @Prop() setUnsavedChanges!: () => void;

    toggleFavorite() {
      this.note.favorite = !this.note.favorite;
      this.setUnsavedChanges();
    }
}
</script>

<style scoped>
.toolbar {
  display: flex;
  justify-content: space-between;
}
</style>