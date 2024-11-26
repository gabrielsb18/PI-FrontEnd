import axios from "axios";

export const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    headers: {
        'Content-Type': 'application/json',
    }
});

api.interceptors.response.use(
    response => {
        return response;
    },
    async error => {
        if(error.response && error.response.status === 401){
            try{
                const refreshToken = JSON.parse(localStorage.getItem("@Notes:refreshToken"))

                if(!refreshToken){
                    return Promise.reject(error);
                }
                const response = await api.post("/users/renovar", {refreshToken})
                const {acessToken} = response.data;

                localStorage.setItem("@Notes:token", JSON.stringify(acessToken))

                api.defaults.headers.common["authorization"]= `Bearer ${acessToken}`; 

                if(error.config){
                    error.config.headers["authorization"]= `Bearer ${acessToken}`; 
                    return api(error.comfig);          
                } 

            }catch(err){
                localStorage.clear();
                return Promise.reject(err);
            }
        }
        return Promise.reject(error);
    }
);
