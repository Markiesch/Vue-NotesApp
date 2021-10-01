<template>
  <div>
    <v-list flat>
      <v-list-item-group color="primary">
        <v-list-item v-for="(item, i) in items" :key="i" :to="item.route">
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

<script lang="ts">
import { Getter, Action } from "vuex-class";
import { Component, Vue } from "vue-property-decorator";
import store from "@/store";

@Component
export default class Navigation extends Vue {
  selectedItem = 0;
  items = [
    { text: "Dashboard", icon: "mdi-home", route: { name: "Dashboard" } },
    { text: "Editor", icon: "mdi-file-cad", route: { name: "Editor", params: { id: "0" } } },
    { text: "Settings", icon: "mdi-cog", route: { name: "Settings" } },
  ];
  snackbar = false;

  @Getter("getRecentNotes") recentNotes: any;
  @Getter("getNotes") notes: any;
  @Getter("getCurrentNote") note: any;
  @Action("createNote") createNote: any;
  @Action("fetchNotes") fetchNotes: any;

  createFile() {
    this.snackbar = true;
    store.dispatch("createNote");
  }
}
</script>
