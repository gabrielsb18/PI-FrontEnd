import { api } from "./api";

function getNotes() {
    return api.get("/notes")
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

function postNote(data) {
    return api.post("/notes/", data)
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

function putNote(noteId, updatedNote) {
    return api.put(`/notes/${noteId}`, updatedNote)
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

function deleteNote(noteId) {
    return api.delete(`/notes/${noteId}`)
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

function searchNotes(searchTerm) {
    return api.get("/notes/search", {
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