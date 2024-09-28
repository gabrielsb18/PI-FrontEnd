import {ContainerBody, Title, FormContainer } from '../Cadastro/Cadastro.style'
import { PanelLogo } from '../../components/PaneLogo/panelLogo'
import Input from "../../components/Input/Input"
import Button from '../../components/Button/Button'

export default function Cadastro (){
    return (
        <ContainerBody>
            <FormContainer>
                <Title>
                    <h1>Bem vindo ao Notes</h1>
                    <p>Cadastre- se para aproveitar ao máximo  o Notes</p>
                </Title>

                <form>
                    <div>
                        <Input nome="Email" />
                        <Input nome="Senha" />
                    </div>
                    <div>
                        <Button estilo="flat" name="Cadastre-se"/>
                    </div>
                </form>
            </FormContainer>

            <PanelLogo />
        </ContainerBody>
    );
}