<template>
  <v-container color="primary">
    <v-container v-if="recentNotes.length > 0">
      <h1>Recent Notes</h1>
      <v-row>
        <v-col v-for="note in recentNotes" :key="note.id" lg="3" class="pointer" @click="openNote(note.id)">
          <v-hover v-slot="{ hover }">
            <v-card class="backgroundAccent" :class="{ 'backgroundAccent2': hover}" outlined>
              <v-card-title>{{ note.title }}</v-card-title>
              <v-card-subtitle>{{ note.text }}</v-card-subtitle>
            </v-card>
          </v-hover>
        </v-col>
      </v-row>
    </v-container>

    <v-container>
      <h1 class="primaryText">All notes</h1>
      <p v-if="note.length < 1">It looks like you do not have any files yet!</p>
      <v-row>
        <v-col v-for="note in note.notes" :key="note.id" lg="3" class="pointer" @click="openNote(note.id)">
          <v-hover v-slot="{ hover }">
            <v-card class="backgroundAccent" :class="{ 'backgroundAccent2': hover}" outlined>
              <v-card-title>{{ note.title }}</v-card-title>
              <v-card-subtitle>{{ note.text }}</v-card-subtitle>
            </v-card>
          </v-hover>
        </v-col>
      </v-row>
    </v-container>
  </v-container>
</template>

<script>
import { Component, Vue } from "vue-property-decorator";
import { State, Getter } from "vuex-class";
import store from "@/store"
import NProgress from "nprogress";

@Component({
  components: {},
  beforeRouteEnter(to, from, next) {
    NProgress.start();
    const page = parseInt(to.query.page) || 1;

    store.dispatch("getRecentNotes");
    store.dispatch("fetchNotes", { page }).then(() => {
      NProgress.done();
      next()
    });
  },
})

export default class Home extends Vue {
  // === vuex ===
  @Getter("getRecentNotes") recentNotes;
  @State("note") note;

  // === functions ===
  openNote(note) {
    this.$router.push("edit/" + note);
  }
};
</script>
