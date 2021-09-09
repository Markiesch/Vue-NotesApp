import EventService from "../../services/EventService";
import router from "@/router";

export const state = {
    notes: [],
    count: 0,
    recentNotes: [],
    note: {},
    perPage: 8
}

export const mutations = {
    ADD_NOTE(state: any, note: any) {
        state.notes.push(note);
    },
    SET_NOTES(state: any, notes: any) {
        state.notes = notes;
    },
    SET_TOTAL(state: any, count: any) {
      state.count = parseInt(count)
    },
    SET_NOTE(state: any, note: any) {
        state.note = note;
    },
}

export const actions = {
    createNote({ state, commit } : any) {
        const note = { title: "New Note", text: "Description", favorite: false, deleted: false}
        return EventService.postNote(note).then((response) => {
            commit("ADD_NOTE", response.data);
            commit("SET_NOTE", response.data);

            router.push({name: "Editor", params: { id: response.data.id }})
         });
    },
    fetchNotes({ commit, dispatch }: any) {
        return EventService.getNotes().then((response) => {
            commit("SET_TOTAL", parseInt(response.headers["x-total-count"]));
            commit("SET_NOTES", response.data);
        }).catch(error => {
            console.log("an error accrued " + error.message);
        })
    },
    getRecentNotes({ state }: any) {
        // @ts-ignore
        state.recentNotes = JSON.parse(localStorage.getItem("recentNotes")) || [];
    },
    addRecent({ state, commit }: any, id: number) {
        // @ts-ignore
        let recentNotes = JSON.parse(localStorage.getItem("recentNotes")) || [];
        const index = recentNotes.indexOf(id);
        if (index > -1) recentNotes.splice(index, 1);
        recentNotes.push(id)
        state.recentNotes = recentNotes;
        localStorage.setItem("recentNotes", JSON.stringify(recentNotes));
    },
    fetchNote({ commit, getters, dispatch }: any, id: any) {
        const note = getters.getNoteById(id);
        if (note) {
            commit("SET_NOTE", note);
        } else {
            EventService.getNote(id).then((response) => {
                commit("SET_NOTE", response.data);
            }).catch(error => {
                console.log("An error accrued " + error.message);
            })
        }
    },
    saveNote({ commit, dispatch }: any, {note, id}: any) {
        return EventService.saveNote(note, id).catch(error => {
            console.log("An error accrued " + error.message)
        });
    }
}

export const getters = {
    getNotes: (state: any) => state.notes,
    getCurrentNote: (state: any) => state.note,
    getNoteById: (state: any) => (id: number) => state.notes.find((note: any) => note.id === id),
    // For later when implementing pagination on dashboard page!
    getTodoLength(state: any) {
        return (maxPerPage: number) : number => {
            const length: number = state.notes.length;
            let btnLength: number = length / maxPerPage;
            if (length % maxPerPage > 0) btnLength++;
            return btnLength;
        }
    },
    getRecentNotes(state: any) {
        const recentNotesIds = state.recentNotes;
        let recentNotes = [];
        for (const note of state.notes) if (recentNotesIds.includes(note.id)) recentNotes.push(note);
        return recentNotes;
    }
}