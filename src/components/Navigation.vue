<template>
  <div>
    <v-list flat>
      <v-list-item-group v-model="selectedItem" color="primary">
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

<script>
import store from "@/store"
export default {
  data() {
    return {
      selectedItem: 1,
      items: [
        { text: "Dashboard", icon: "mdi-home", route: { name: 'Dashboard' } },
        { text: "Editor", icon: "mdi-file-cad", route: { name: 'Editor', params: { id: 1 }}},
      ],
      snackbar: false,
    }
  },

  methods: {
    createFile() {
      this.snackbar = true;
      store.dispatch("createNote");
    }
  },
}
</script>
