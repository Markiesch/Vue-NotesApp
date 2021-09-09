<template>
  <v-app>
    <v-navigation-drawer class="nav fill-height" fixed app v-model="drawer">
      <Navigation />
    </v-navigation-drawer>
    <v-main class="background">
      <transition name="fade" mode="out-in">
        <router-view v-slot="{ Component }" />
      </transition>
    </v-main>
  </v-app>
</template>

<script>
import Vue from 'vue';
import Navigation from "@/components/Navigation.vue"

export default Vue.extend({
  name: 'App',

  components: {
    Navigation,
  },

  data: () => ({
    drawer: true
  }),
});
</script>

<style>
*,
*::before,
*::after {
  font-family: "Poppins", Arial, sans-serif;
}

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