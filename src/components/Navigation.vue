<template>
  <v-navigation-drawer class="nav fill-height" fixed app>
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
        <v-list-item @click="createNote">
          <v-list-item-icon>
            <v-icon>mdi-plus</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>Create File</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </v-navigation-drawer>
</template>

<script lang="ts">
import { Getter, Action } from "vuex-class";
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Navigation extends Vue {
  drawer = false;
  items = [
    { text: "Dashboard", icon: "mdi-home", route: { name: "Dashboard" } },
    { text: "Editor", icon: "mdi-file-cad", route: { name: "Editor", params: { id: "0" } } },
    { text: "Settings", icon: "mdi-cog", route: { name: "Settings" } },
  ];

  @Getter("getRecentNotes") recentNotes: any;
  @Getter("getNotes") notes: any;
  @Getter("getCurrentNote") note: any;
  @Action("createNote") createNote: any;
  @Action("fetchNotes") fetchNotes: any;
}
</script>
