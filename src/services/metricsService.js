import { api } from "./api";

async function getMetrics() {
    const acessToken = localStorage.getItem("@Notes:token");

    return await api.get("/notes/totals", {
        headers: {
            authorization: `Bearer ${JSON.parse(acessToken)}`,
        },
    })
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