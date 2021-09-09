import axios from "axios";

const apiClient = axios.create({
    baseURL: "http://localhost:3000",
    withCredentials: false,
    headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
    },
    timeout: 5000,
});

export default {
    getNotes() {
        return apiClient.get("/notes");
    },
    getNote(id: number) {
        return apiClient.get("/notes/" + id);
    },
    postNote(note: object) {
        return apiClient.post("/notes", note)
    },
    saveNote(note: object, id: number) {
        return apiClient.put("/notes/" + id, note)
    }
}