<template>
  <v-app>
      <Navigation v-if="!$vuetify.breakpoint.mobile" />
    <MobileNavigation v-else />
    <v-main>
      <transition name="fade" mode="out-in">
        <router-view />
      </transition>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import Navigation from "@/components/Navigation.vue";
import MobileNavigation from "@/components/MobileNavigation.vue";
import Component from "vue-class-component";

@Component({
  components: {
    Navigation,
    MobileNavigation,
  },
})
export default class App extends Vue {
  drawer = false;
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
