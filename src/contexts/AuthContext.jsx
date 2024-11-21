import { createContext, useContext, useState, useEffect } from "react";
import { api } from "../services/api";

export const AuthContext = createContext({});

function AuthProvider ({children}) {
    const [data, setData] = useState({});

    async function signIn (data) {
        try { 
            const response = await api.post("/users/login", data);

            const {acessToken, refreshToken, userId, email: emailUser} = response.data;

            localStorage.setItem("@Notes:token", JSON.stringify(acessToken));
            localStorage.setItem("@Notes:refreshToken", JSON.stringify(refreshToken));
            localStorage.setItem("@Notes:userId", JSON.stringify(userId));

            api.defaults.headers.common['authorization'] = `Bearer ${acessToken}`;

            setData({acessToken, refreshToken, userId, emailUser});

            return response.data;
            
        } catch (error) {
            throw error;
        }
    }

    async function signUp (data){
        try {
            const response = await api.post("/users/", data)

            return response.data;

        } catch (error) {
            throw error;
        }
    }

    useEffect (()=> {
        const acessToken = localStorage.getItem("@Notes:token");
        const refreshToken = localStorage.getItem("@Notes:refreshToken");
        const userId = localStorage.getItem("@Notes:userId");

        if(acessToken && refreshToken) {
            api.defaults.headers.common['authorization'] = `Bearer ${JSON.parse(acessToken)}`;
            setData({
                acessToken: JSON.parse(acessToken),
                refreshToken: JSON.parse(refreshToken),
                userId: JSON.parse(userId),
            });
        };

    }, []);

    const contexto = {
        signIn,
        signUp,
        emailUser: data.email,
        acessToken: data.acessToken,
        refreshToken: data.refreshToken,
        userId: data.userId,
    };

    return (
        <AuthContext.Provider value={contexto}>
            {children}
        </AuthContext.Provider>
    );
}

function useAuth(){
    const context = useContext(AuthContext);
    return context;
};

export { AuthProvider, useAuth };