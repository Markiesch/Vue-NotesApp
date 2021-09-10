<template>
  <div>
    <v-list flat>
      <v-list-item-group v-model="selectedItem" color="primary">
        <v-list-item v-for="(item, i) in items" :key="i" @click="navigate(item, i)">
          <v-list-item-icon>
            <v-icon v-text="item.icon"></v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title v-text="item.text"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item @click="createFile">
          <v-list-item-icon>
            <v-icon>mdi-plus</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>Create File</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>
    <v-snackbar v-model="snackbar">
      Successfully created a new Note!
      <template>
        <v-btn @click="snackbar = false">Close</v-btn>
      </template>
    </v-snackbar>
  </div>
</template>

<script>
import { Getter, Action } from "vuex-class";
import { Component, Vue } from "vue-property-decorator";
import store from "@/store"

@Component({})

export default class Navigation extends Vue {
  selectedItem = 0;
  items = [
    { text: "Dashboard", icon: "mdi-home", route: { name: 'Dashboard' } },
    { text: "Editor", icon: "mdi-file-cad", route: { name: 'Editor', params: { id: "0" } } },
  ];
  snackbar = false;

  @Getter("getRecentNotes") recentNotes;
  @Getter("getNotes") notes;
  @Getter("getCurrentNote") note;
  @Action("createNote") createNote;
  @Action("fetchNotes") fetchNotes;

  createFile() {
    this.snackbar = true;
    store.dispatch("createNote");
  };

  navigate(item, i) {
    // Return if the user is already on the selected page and resetting the selectedItem variable to keep the highlight
    if (this.$route.name.match(item.route.name)) return setTimeout(() => this.selectedItem = i);
    // Param Handling for "editor" route
    if (item.route.name === "Editor") {
      let param = null;
      if (this.notes.length > 0) param = this.notes[0].id
      if (this.recentNotes.length > 0) param = this.recentNotes[0].id
      if (this.note.id) param = this.note.id
      if (!param) {
        this.createNote().then(() => {
          this.fetchNotes().then(() => {
            return this.navigate(item, i)
          });
        });
      } else {
        this.$router.push({ name: "Editor", params: { id: param } })
      }
    } else {
    this.$router.push(item.route);
    }
  }
}
</script>
