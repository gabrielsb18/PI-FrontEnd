import { api } from "./api";

async function getNotes() {
    return await api.get("/notes")
        .then((response) => {
            return { sucess: true, data: response.data }
        })
        .catch((error) => {
            if (error.response) {
                return { sucess: false, msg: error.response.data.msg }
            } else {
                return { sucess: false, msg: "Erro ao buscar notas" }
            }
        })
}

async function postNote(data) {
    return await api.post("/notes/", data)
        .then((response) => {
            return { sucess: true, data: response.data }
        })
        .catch((error) => {
            if (error.response) {
                return { sucess: false, msg: error.response.data.msg }
            } else {
                return { sucess: false, msg: "Erro ao criar nota" }
            }
        })
}

async function putNote(noteId, updatedNote) {
    return await api.put(`/notes/${noteId}`, updatedNote)
        .then((response) => {
            return { sucess: true, data: response.data }
        })
        .catch((error) => {
            if (error.response) {
                return { sucess: false, msg: error.response.data.msg }
            } else {
                return { sucess: false, msg: "Erro ao atualizar nota" }
            }
        })
}

async function deleteNote(noteId) {
    return await api.delete(`/notes/${noteId}`)
        .then((response) => {
            return { sucess: true, data: response.data }
        })
        .catch((error) => {
            if (error.response) {
                return { sucess: false, msg: error.response.data.msg }
            } else {
                return { sucess: false, msg: "Erro ao deletar nota" }
            }
        })
}

async function searchNotes(searchTerm) {
    return await api.get("/notes/search", {
        params: {
            term: searchTerm
        }
    })
        .then((response) => {
            return { sucess: true, data: response.data }
        })
        .catch((error) => {
            if (error.response) {
                return { sucess: false, msg: error.response.data.msg }
            } else {
                return { sucess: false, msg: "Erro ao buscar notas" }
            }
        })
}


export { getNotes, postNote, putNote, deleteNote, searchNotes };