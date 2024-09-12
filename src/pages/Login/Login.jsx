import {ContainerBody, Title, FormContainer } from '../Login/Login.style'
import { PanelLogo } from '../../components/PaneLogo/panelLogo'
import Input from "../../components/Input/Input"
import Button from '../../components/Button/Button'

export default function Login (){
    return (
        <ContainerBody>
            <FormContainer>
                <Title>
                    <h1>Login</h1>
                    <p>Faça login para continuar</p>
                </Title>

                <form>
                    <div>
                        <Input nome="Email" />
                        <Input nome="Senha" />
                    </div>
                    <div>
                        <Button estilo="flat" name="Entrar"/>
                        <Button estilo="outlined" name="Cadastre-se"/>
                    </div>
                </form>
            </FormContainer>

            <PanelLogo />
        </ContainerBody>
    );
}