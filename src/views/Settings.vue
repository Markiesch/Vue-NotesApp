<template>
  <v-container>
    <v-list three-line subheader>
      <v-subheader>Dashboard Settings</v-subheader>
      <v-list-item>
        <v-list-item-action>
          <v-checkbox v-model="settings.showRecents"></v-checkbox>
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title>Show recent notes</v-list-item-title>
          <v-list-item-subtitle>Show recently opened files on the dashboard page</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
      <v-list-item>
        <v-list-item-action>
          <v-checkbox v-model="settings.showFavorites"></v-checkbox>
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title>Show favorite notes</v-list-item-title>
          <v-list-item-subtitle>Show files marked as favorite on the dashboard page</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </v-list>
    <v-divider></v-divider>
    <v-list three-line subheader>
      <v-subheader>Editor Settings</v-subheader>
      <v-list-item>
        <v-list-item-action>
          <v-checkbox v-model="settings.autoSave"></v-checkbox>
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title>Autosave Files</v-list-item-title>
          <v-list-item-subtitle>Automaticly save files</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </v-list>
    <v-btn color="primary" @click="saveSettings">save settings</v-btn>
  </v-container>
</template>

<script>
import { Component, Vue } from "vue-property-decorator";
import { Getter, Action } from "vuex-class";
import store from "@/store"

@Component({})
export default class Editor extends Vue {
  settings = store.getters.getSettings;

  saveSettings() {
    localStorage.setItem("settings", JSON.stringify(this.settings))
  }
}
</script>

<style scoped>

</style>