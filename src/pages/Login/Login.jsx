import {ContainerBody, Title, FormContainer } from '../Login/Login.style'
import { PanelLogo } from '../../components/PaneLogo/panelLogo'

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
                    <label>Email</label>


                    <label>Senha</label>
                </div>
                <div>
                </div>
            </form>
        </FormContainer>

        <PanelLogo/>
    </ContainerBody>
    )
}