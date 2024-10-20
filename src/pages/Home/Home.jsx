import HeaderNav from "../../components/Header/Header";
import { ContainerBody, Main, ContainerGraphics, ContentGraphicTwo, HeaderTitle } from "./home.style";


export default function Home (){
    return(
        <ContainerBody>
            <HeaderNav/>
            <Main>
                <HeaderTitle>
                    <h1>Olá <strong>Fulano</strong> 👋</h1>
                    <p>Adicione uma nova tarefa</p>
                </HeaderTitle>
            <ContainerGraphics>
                <ContentGraphicTwo>
                    <p>Tarefas <br /> <strong>Pendentes</strong></p>
                    <h1>15</h1>
                </ContentGraphicTwo>
            </ContainerGraphics>
            </Main>
        </ContainerBody>
    );
};