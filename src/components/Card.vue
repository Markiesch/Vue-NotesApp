<template>
  <v-card :ripple="false" @contextmenu="context($event, note)" class="backgroundAccent card" outlined>
    <v-card-title class="pa-3">{{ note.title }}</v-card-title>
    <v-card-subtitle class="subtitle pa-3 pt-2" v-html="note.text">{{ note.text }}</v-card-subtitle>
  </v-card>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class Home extends Vue {
  @Prop() note: any;
  @Prop() context: any;
}
</script>

<style>
.card {
  height: 88px;
  overflow-y: scroll;
}

.card::-webkit-scrollbar {
  width: 5px;
}

.card:hover::-webkit-scrollbar-thumb {
  background-color: #eee;
}

.card::-webkit-scrollbar-thumb:hover {
  background-color: #ddd;
}

.subtitle {
  font-size: 14px !important;
  opacity: 0.9;
}

.subtitle * {
  font-size: 1rem !important;
  font-weight: 400;
  background: none !important;
  padding: 0;
  margin: 0 !important;
  line-height: 1.1;
}
</style>
