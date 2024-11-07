import { Route, Routes } from 'react-router-dom';
import NovaNota from '../pages/NovaNota/NovaNota';
import Home from '../pages/Home/Home';
import Perfil from '../pages/Perfil/Perfil';

export function AppRoutes() {
    return(
        <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/novanota" element={<NovaNota />} />
            <Route path="/perfil" element={<Perfil />} />
        </Routes >
        )
}