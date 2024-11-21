import { createContext, useContext, useState, useEffect } from "react";
import { api } from "../services/api";

export const AuthContext = createContext({});

function AuthProvider({ children }) {
	const [data, setData] = useState({});

	useEffect(() => {
		const acessToken = localStorage.getItem("@Notes:token");
		
        if (acessToken) {
			const fetchUserData = async () => {
				try {
					const response = await api.get("/users", {
						headers: {
							authorization: `Bearer ${JSON.parse(acessToken)}`,
						},
					});
                    const { email: emailUser, nome, userId }= response.data;

                    setData(prevstate => ({
                        ...prevstate, 
                        emailUser,
                        nome,
                        userId, 
                    }))
				} catch (error) {
					throw error;
				}
			};
            fetchUserData();
        } ;

    },[]);

	async function signIn(data) {
		try {
			const response = await api.post("/users/login", data);

			const {
				acessToken,
				refreshToken,
				userId,
				email: emailUser,
			} = response.data;

			localStorage.setItem("@Notes:token", JSON.stringify(acessToken));
			localStorage.setItem("@Notes:refreshToken", JSON.stringify(refreshToken));

			api.defaults.headers.common["authorization"] = `Bearer ${acessToken}`;

			setData({ acessToken, refreshToken, userId, emailUser });

			return response.data;
		} catch (error) {
			throw error;
		}
	}

	async function signUp(data) {
		try {
			const response = await api.post("/users/", data);

			return response.data;
		} catch (error) {
			throw error;
		}
	}

	async function signOut() {
		localStorage.removeItem("@Notes:token");
		localStorage.removeItem("@Notes:refreshToken");
		setData({});
	}

	useEffect(() => {
		const acessToken = localStorage.getItem("@Notes:token");
		const refreshToken = localStorage.getItem("@Notes:refreshToken");

		if (acessToken && refreshToken) {
			api.defaults.headers.common["authorization"] = `Bearer ${JSON.parse(acessToken)}`;
			setData({
				acessToken: JSON.parse(acessToken),
				refreshToken: JSON.parse(refreshToken),
			});
		};

	}, []);

	const contexto = {
		signIn,
		signUp,
		signOut,
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

function useAuth() {
	const context = useContext(AuthContext);
	return context;
}

export { AuthProvider, useAuth };
