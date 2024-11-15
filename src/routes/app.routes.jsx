import { Route, Routes } from "react-router-dom";
import NovaNota from "../pages/NovaNota/NovaNota";
import Home from "../pages/Home/Home";
import Perfil from "../pages/Perfil/Perfil";
import Error404 from "../pages/Error404/Error404"

export function AppRoutes() {
	return (
		<Routes>
			<Route path="/home" element={<Home />} />
			<Route path="/novanota" element={<NovaNota />} />
			<Route path="/perfil" element={<Perfil />} />
            <Route path="*" element = {<Error404/>} />
		</Routes>
	);
}

