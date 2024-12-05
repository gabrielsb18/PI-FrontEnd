import { api } from "./api";

async function getMetrics() {
    return await api.get("/notes/totals")
        .then((response) => {
            return response.data;
        }).catch((error) => {
            if (error.response) {
                return error.response.data.msg;
            } else {
                throw new Error('Erro ao buscar o total de notas');
            }
        });
}

export { getMetrics };