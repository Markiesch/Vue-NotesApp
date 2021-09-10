import Vue from "vue";
import Vuex from "vuex";
// @ts-ignore
import * as note from "@/store/modules/notes.js";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: { note },
});
