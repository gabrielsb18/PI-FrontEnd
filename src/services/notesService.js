import { api } from "./api";

async function getNotes() {
    return await api.get("/notes")
        .then((response) => {
            return response.data
        })
        .catch((error) => {
            if (error.response) {
                return error.response.data.msg
            } else {
                throw new Error('Erro ao buscar notas');
            }
        })
}

async function putNote(noteId, updatedNote) {
    return await api.put(`/notes/${noteId}`, updatedNote)
        .then((response) => {
            return response.data
        })
        .catch((error) => {
            if (error.response) {
                return error.response.data.msg
            } else {
                throw new Error('Erro ao atualizar nota');
            }
        })
}

async function deleteNote(noteId) {
    return await api.delete(`/notes/${noteId}`)
        .then((response) => {
            return response.data
        })
        .catch((error) => {
            if (error.response) {
                return error.response.data.msg
            } else {
                throw new Error("Erro ao deletar nota")
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
            return response.data
        })
        .catch((error) => {
            if (error.response) {
                return error.response.data.msg
            } else {
                throw new Error("Erro ao pesquisar entre as notas")
           }
        })
}


export { getNotes, putNote, deleteNote, searchNotes };