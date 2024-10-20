import { Route, Routes } from 'react-router-dom';
import NovaNota from '../pages/NovaNota/NovaNota';
import Home from '../pages/Home/Home';

export function AppRoutes() {
    return(
        <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/novanota" element={<NovaNota />} />
        </Routes >
        )
}