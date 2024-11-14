import AddTask from "../../components/AddTask/AddTask";
import HeaderNav from "../../components/Header/Header";
import Select from "../../components/Select/Select";
import Logout from "../../components/Logout/Logout"
import {CardTask} from "../../components/CardTasks/CardTasks.jsx";

import { ContainerBody, Main, ContainerGraphics, ContentGraphicsOne, ContentGraphicTwo, HeaderTitle, ContentGraphicTree, HeaderTasks, Tasks, ContainerCardsTasks } from "./Home.style";
import { ToastPopUp } from "../../components/Toast/Toast.jsx";

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
            </ContainerGraphics>
            <HeaderTasks>
                <Tasks>
                    <h1>Suas Tarefas</h1>
                    <AddTask/>
                </Tasks>
                    <Select />
            </HeaderTasks>
            <ContainerCardsTasks>
                <CardTask
                    title="teste"
                    description="teste"
                />
                <CardTask
                    title="teste"
                    description="teste"
                />
                <CardTask
                    title="teste"
                    description="teste"
                />
            </ContainerCardsTasks>
            <Logout/>
            </Main>
            <ToastPopUp />
        </ContainerBody>
    );
};