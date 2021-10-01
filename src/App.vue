<template>
  <v-app>
    <v-navigation-drawer class="nav fill-height" fixed app v-model="drawer">
      <Navigation />
    </v-navigation-drawer>
    <v-main class="background">
      <transition name="fade" mode="out-in">
        <router-view />
      </transition>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import Navigation from "@/components/Navigation.vue";
import Component from "vue-class-component";

@Component({
  components: {
    Navigation,
  },
})
export default class App extends Vue {
  drawer = true;
}
</script>

<style>
.pointer {
  cursor: pointer;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.125s ease-out;
}
</style>
