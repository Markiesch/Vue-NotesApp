<template>
  <v-card max-height="100" style="overflowY: scroll" :ripple="false" @contextmenu="context($event, note)" class="backgroundAccent card" outlined>
    <v-card-title>{{ note.title }}</v-card-title>
    <v-card-subtitle class="subtitle pt-2" v-html="note.text">{{ note.text }}</v-card-subtitle>
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
  max-height: 150px;
  overflow-y: scroll;
}

.card::-webkit-scrollbar {
  width: 10px;
}

.card::-webkit-scrollbar-track {
  background: #fbfbfb;
}
.card::-webkit-scrollbar-thumb {
  background: #eeeeee;
}

.card::-webkit-scrollbar-thumb:hover {
  background: #555;
}

.subtitle {
  font-size: 14px !important;
  opacity: 0.7;
}

.subtitle * {
  font-size: 16px !important;
  font-weight: 400;
  background: none !important;
  padding: 0;
  margin: 0;
  line-height: 1.1;
}
</style>
