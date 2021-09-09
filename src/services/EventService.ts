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
    getNotes(perPage: number, page: number) {
        return apiClient.get("/notes?_limit=" + perPage + "&_page=" + page);
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