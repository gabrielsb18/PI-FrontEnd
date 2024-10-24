import AddTask from "../../components/AddTask/AddTask";
import HeaderNav from "../../components/Header/Header";

import { ContainerBody, Main, ContainerGraphics, ContentGraphicsOne, ContentGraphicTwo, HeaderTitle, ContentGraphicTree, HeaderTasks, Tasks } from "./home.style";

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
                <ContentGraphicsOne>
                    <p>Seu Desempenho</p>
                </ContentGraphicsOne>
                <ContentGraphicTwo>
                    <p>Tarefas <br /> <strong>Pendentes</strong></p>
                    <h1>15</h1>
                </ContentGraphicTwo>
                <ContentGraphicTree>
                    <p>Tarefas <br /> <strong>Concluídas</strong></p>
                    <h1>+80</h1>
                </ContentGraphicTree>
                <HeaderTasks>
                    <Tasks>
                        <h1>Suas Tarefas</h1>
                        <AddTask/>
                    </Tasks>
                </HeaderTasks>
            </ContainerGraphics>
            </Main>
        </ContainerBody>
    );
};