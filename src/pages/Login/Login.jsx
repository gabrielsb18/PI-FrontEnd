import {ContainerBody, Title, FormContainer } from '../Login/Login.style'
import { PanelLogo } from '../../components/PaneLogo/panelLogo'
import Input from "../../components/Input/Input"

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
                </div>
            </form>
        </FormContainer>

        <PanelLogo/>
    </ContainerBody>
    )
}