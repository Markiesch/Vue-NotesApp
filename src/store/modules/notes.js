import router from "@/router";

export const state = {
    notes: [],
    recentNotes: [],
    note: {},
}

export const mutations = {
    SET_NOTES(state, notes) {
        state.notes = notes;
    },
    SET_NOTE(state, note) {
        state.note = note;
    },
}

export const actions = {
    createNote({ commit }) {
        const savedNotes = JSON.parse(localStorage.getItem("notes")) || [];
        let id = 0;
        if (savedNotes.length > 0) {
            for (const savedNote of savedNotes)
                if (savedNote.id >= id) id = savedNote.id + 1;
        }
        const note = {title: "New Note", text: "Description", favorite: false, deleted: false, id: id};
        savedNotes.push(note);
        localStorage.setItem("notes", JSON.stringify(savedNotes))
        commit("SET_NOTES", savedNotes);
        router.push({name: "Editor", params: {id: id.toString()}}).then(r => {})
    },
    fetchNotes({ commit }) {
        const notes = JSON.parse(localStorage.getItem("notes")) || [];
         commit("SET_NOTES", notes);
    },
    getRecentNotes({ state }) {
        state.recentNotes = JSON.parse(localStorage.getItem("recentNotes")) || [];
    },
    addRecent({ state, commit }, id) {
        let recentNotes = JSON.parse(localStorage.getItem("recentNotes")) || [];
        const index = recentNotes.indexOf(id);
        if (index > -1) recentNotes.splice(index, 1);
        recentNotes.push(id)
        state.recentNotes = recentNotes;
        localStorage.setItem("recentNotes", JSON.stringify(recentNotes));
    },
    fetchNote({ commit, getters }, id) {
        const note = getters.getNoteById(+id);
        if (note) return commit("SET_NOTE", note);
    },
    saveNote({ commit }, {note, id}) {
        const currentNotes = JSON.parse(localStorage.getItem("notes"));
        for (let i = 0; i < currentNotes.length; i++)
            if (currentNotes[i].id === id) currentNotes[i] = note;
        localStorage.setItem("notes", JSON.stringify(currentNotes))
    },
    deleteNote({ dispatch }, id ) {
        const savedNotes = JSON.parse(localStorage.getItem("notes")) || [];
        if (savedNotes.length < 1) return;

        for (let i = 0; i < savedNotes.length; i++){
            const savedNote = savedNotes[i];
            if (savedNote.id === id) savedNotes.splice(i, 1);
        }
        localStorage.setItem("notes", JSON.stringify(savedNotes));
        dispatch("fixRecentNotes")
        if (router.history.current.name === "Dashboard") return router.go();
        router.push("/").then(() => {});
    },
    fixRecentNotes() {
        const recentNotes = JSON.parse(localStorage.getItem("recentNotes")) || [];
        const savedNotes = JSON.parse(localStorage.getItem("notes")) || [];

        if (recentNotes.length < 1) return;

        for (let i = 0; i < recentNotes.length; i++) {
            const recentNote = recentNotes[i];
            for (const savedNote of savedNotes)
                if (recentNote !== savedNote.id) recentNotes.splice(i, 1)
        }

        localStorage.setItem("recentNotes", JSON.stringify(recentNotes))
    }
}

export const getters = {
    getNotes: (state) => state.notes,
    getCurrentNote: (state) => state.note,
    getNoteById: state => id => state.notes.find(note => note.id === id),
    getRecentNotes(state) {
        const recentNotesIds = state.recentNotes;
        let recentNotes = [];
        for (const note of state.notes) if (recentNotesIds.includes(note.id)) recentNotes.push(note);
        return recentNotes;
    }
}