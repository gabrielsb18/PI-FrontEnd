import {Route, Routes} from 'react-dom'
import Login from '../pages/Login/Login'
import Cadastro from '../pages/Cadastro/Cadastro'

export function AuthRoutes(){
    return(
    <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
    </Routes >
    )
}