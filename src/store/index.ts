import Vue from "vue";
import Vuex from "vuex";
import * as note from "@/store/modules/notes.ts";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: { note },
});
