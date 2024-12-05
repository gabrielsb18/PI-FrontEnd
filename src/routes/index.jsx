import { useAuth } from "../contexts/AuthContext";
import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./app.routes";
import { AuthRoutes } from "./auth.routes";

export function Routes (){
    const { acessToken } = useAuth();
    
    return(
        <BrowserRouter>
            {acessToken ? <AppRoutes /> : <AuthRoutes />}
        </BrowserRouter>
    )
}