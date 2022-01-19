<template>
  <v-bottom-navigation fixed color="primary">
    <template v-for="(item, index) in items">
      <v-btn :key="index" icon :to="item.route">
        <span>{{ item.text }}</span>
        <v-icon>{{ item.icon }}</v-icon>
      </v-btn>
    </template>
    <v-btn icon @click="createNote">
      <span>New File</span>
      <v-icon>mdi-plus</v-icon>
    </v-btn>
  </v-bottom-navigation>
</template>

<script lang="ts">
import { Action } from "vuex-class";
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Navigation extends Vue {
  drawer = false;
  items = [
    { text: "Dashboard", icon: "mdi-home", route: { name: "Dashboard" } },
    { text: "Editor", icon: "mdi-file-cad", route: { name: "Editor", params: { id: "0" } } },
    { text: "Settings", icon: "mdi-cog", route: { name: "Settings" } },
  ];

  @Action("createNote") createNote: any;
}
</script>
