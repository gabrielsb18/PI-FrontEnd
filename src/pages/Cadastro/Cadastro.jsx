import {ContainerBody, Title, FormContainer } from '../Cadastro/Cadastro.style'
import { PanelLogo } from '../../components/PaneLogo/panelLogo'
import Input from "../../components/Input/Input"
import Button from '../../components/Button/Button'
import { MdOutlineEmail,MdOutlineLock } from "react-icons/md";
import { Link } from 'react-router-dom';

export default function Cadastro (){
    return (
        <ContainerBody>
            <FormContainer>
                <Title>
                    <h1>Bem vindo ao <br/><strong>Notes</strong></h1>
                    <p>Cadastre- se para aproveitar ao máximo o Notes</p>
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

                        <Link to="/">Já tem uma conta? <strong>Entrar</strong></Link>
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