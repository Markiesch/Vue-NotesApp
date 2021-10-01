import Vue from "vue";
import Vuex from "vuex";
import router from "../router";
import { saveStatePlugin, State, Note, defaultSettings } from "./utils";

Vue.use(Vuex);

const notes = JSON.parse(localStorage.getItem("notes") || "[]");

let settings;
const localeSettings = localStorage.getItem("settings");
if (localeSettings !== null) {
  settings = JSON.parse(localeSettings);
} else {
  settings = defaultSettings;
}

export default new Vuex.Store({
  plugins: [saveStatePlugin],
  state: {
    notes,
    note: {},
    settings,
  },
  mutations: {
    SET_NOTES(state: State, newNotes: any) {
      state.notes = newNotes;
    },
    SET_NOTE(state: State, note: any) {
      state.note = note;
    },
  },
  actions: {
    createNote({ commit, state }: any) {
      let noteList = state.notes;
      let id = 0;
      if (noteList.length) {
        for (const item of noteList) {
          if (item.id >= id) id = item.id + 1;
        }
      }
      const note = { title: "Untilted", text: "Description", favorite: false, deleted: false, id: id };
      noteList.push(note);
      commit("SET_NOTES", noteList);

      // Send user to editor page with created note
      router.push({ name: "Editor", params: { id: id + "" } });
    },

    fetchNote({ commit, getters }: any, id: number) {
      const note = getters.getNoteById(+id);
      if (note) commit("SET_NOTE", note);
    },

    saveNote({ commit }: any, { note, id }: any) {
      const currentNotes = JSON.parse(localStorage.getItem("notes") || "[]");
      for (let i = 0; i < currentNotes.length; i++) {
        if (currentNotes[i].id === id) currentNotes[i] = note;
      }

      commit("SET_NOTES", currentNotes);
    },

    deleteNote({ commit }: any, id: number) {
      const savedNotes = JSON.parse(localStorage.getItem("notes") || "[]");
      if (savedNotes.length < 1) return;

      for (let i = 0; i < savedNotes.length; i++) {
        const savedNote = savedNotes[i];
        if (savedNote.id === id) savedNotes.splice(i, 1);
      }

      commit("SET_NOTES", savedNotes);
      if ((router as any).history.current.name !== "Dashboard") router.push({ name: "Dashboard" });
    },
  },
  getters: {
    getNotes: (state: State): Note[] => state.notes,
    getCurrentNote: (state: State) => state.note,
    getNoteById: (state: State) => (id: number) => state.notes.find((note: any) => note.id === id),
    getFavoriteNotes: (state: State) => state.notes.filter((note: any) => note.favorite),
    getSettings: (state: State) => state.settings,
  },
});
