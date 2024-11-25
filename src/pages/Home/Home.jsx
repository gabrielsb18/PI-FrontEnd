import AddTask from "../../components/AddTask/AddTask";
import HeaderNav from "../../components/Header/Header";
import Select from "../../components/Select/Select";
import { CardTask } from "../../components/CardTasks/CardTasks.jsx";
import { ToastPopUp } from "../../components/Toast/Toast.jsx";
import { useEffect, useState } from "react";
import { useAuth } from "../../contexts/AuthContext.jsx";
import { api } from "../../services/api.js";
import { CardTaskModal } from "../../components/Modal/CardTaskModal.jsx";

import {
	ContainerBody,
	Main,
	ContainerGraphics,
	ContentGraphicsOne,
	ContentGraphicTwo,
	HeaderTitle,
	ContentGraphicTree,
	HeaderTasks,
    ActionsButtons,
	ContainerTitle,
	ContainerCardsTasks,
    ContainerTasks,
    BackgroundModal,
} from "./Home.style";


export default function Home() {
    const { userId, nome } = useAuth();

    const [modalOpen, setModalOpen] = useState(false);
    const [currentNote, setCurrentNote] = useState(null);
    const [notes, setNotes] = useState([]);

    useEffect(()=> {
        async function getNotes(){
            const response = await api.get(`/notes/${userId}`)
            setNotes(response.data)
        }

        getNotes();
    }, [])

    const updateNote = (updateNote) => {
        setNotes((prevNotes) => 
            prevNotes.map((note) =>
                note._id === updateNote._id ? updateNote : note
            ) 
        )
    };

    const deleteNote = (noteId) => {
        setNotes((prevNotes) => prevNotes.filter((note) => note._id !== noteId));
    };

    const handleCardClick = (note) => {
        setCurrentNote(note);
        setModalOpen(true);
    }

    const handleCloseModal = () => {
        setCurrentNote(null);
        setModalOpen(false);
    }

	return (
		<ContainerBody>
			<HeaderNav />
			<Main>
				<HeaderTitle>
					<h1>
						Olá <strong>{nome}</strong> 👋
					</h1>
					<p>Adicione uma nova tarefa</p>
				</HeaderTitle>
				<ContainerGraphics>
					<ContentGraphicsOne>
						<p>Seu Desempenho</p>
					</ContentGraphicsOne>
					<ContentGraphicTwo>
						<p>
							Tarefas <br /> <strong>Pendentes</strong>
						</p>
						<h1>15</h1>
					</ContentGraphicTwo>
					<ContentGraphicTree>
						<p>
							Tarefas <br /> <strong>Concluídas</strong>
						</p>
						<h1>+80</h1>
					</ContentGraphicTree>
				</ContainerGraphics>
				<HeaderTasks>
					<ContainerTitle>
						<h1>Suas Tarefas</h1>
                        <ActionsButtons>
                            <AddTask />
                            <Select />
                        </ActionsButtons>
					</ContainerTitle>
				</HeaderTasks>

                <ContainerTasks>
                    <ContainerCardsTasks>
                        {notes.map((note => (
                            <CardTask
                                title={note.titulo}
                                description={note.descricao}
                                status={note.status}
                                onClick={()=>handleCardClick(note)}
                                key={note._id}
                            />
                        )))}
                    </ContainerCardsTasks>
                        {currentNote && modalOpen && (
                            <>
                                <BackgroundModal onClick={handleCloseModal}/>
                                <CardTaskModal
                                    onUpdate={updateNote}
                                    onDelete={deleteNote}
                                    noteId={currentNote._id}
                                    isOpen={modalOpen}
                                    onClose={handleCloseModal}
                                    key={currentNote._id}
                                    title={currentNote.titulo}
                                    content={currentNote.descricao}
                                />
                            </>
                        )}
                </ContainerTasks>
			</Main>
			<ToastPopUp />
		</ContainerBody>
	);
}
