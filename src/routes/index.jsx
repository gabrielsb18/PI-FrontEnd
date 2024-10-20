import { AppRoutes } from "./app.routes";
import { AuthRoutes } from "./auth.routes";
import { BrowserRouter } from "react-router-dom";

export function Routes (){
    return(
        <BrowserRouter>
            <AppRoutes />
            {/* <AuthRoutes /> */}
        </BrowserRouter>
    )
}