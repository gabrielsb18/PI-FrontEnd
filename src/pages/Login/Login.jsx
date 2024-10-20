import {ContainerBody, Title, FormContainer } from '../Login/Login.style'
import { PanelLogo } from '../../components/PaneLogo/panelLogo'
import Input from "../../components/Input/Input"
import Button from '../../components/Button/Button'
import { useNavigate } from 'react-router-dom';
import { MdOutlineEmail,MdOutlineLock } from "react-icons/md";

export default function Login (){
    const navigate = useNavigate();

    return (
        <ContainerBody>
            <FormContainer>
                <Title>
                    <h1>Login</h1>
                    <p>Faça login para continuar</p>
                </Title>

                <form>
                    <div>
                        <Input
                            icon={MdOutlineEmail} 
                            nome="Email"
                            placeholder="Digite seu email"
                        />
                        <Input 
                            icon={MdOutlineLock}
                            nome="Senha"
                            placeholder="Digite sua senha"
                        />
                    </div>
                    <div>
                        <Button estilo="flat" name="Entrar"/>
                        <Button estilo="outlined" name="Cadastre-se" onClick={() => navigate('/cadastro')}/>
                    </div>
                </form>
            </FormContainer>

            <PanelLogo />
        </ContainerBody>
    );
}