import { useEffect, useState } from "react";
import { toast } from "sonner";
import { useAuth } from "../../contexts/AuthContext.jsx";

import AddTask from "../../components/AddTask/AddTask";
import { HeaderNav } from "../../components/Header/Header";
import { SelectButton } from "../../components/Select/Select";
import { CardTask } from "../../components/CardTasks/CardTasks.jsx";
import { ToastPopUp } from "../../components/Toast/Toast.jsx";
import { SearchNotes } from "../../components/SearchNotes/SearchNotes.jsx";
import { CardTaskModal } from "../../components/Modal/CardTaskModal.jsx";
import { Metrics } from "../../components/Metrics/index.jsx";

import { getNotes, searchNotes } from "../../services/notesService.js";
import { useDebounce } from "../../hooks/useDebounce.js";

import {
	ContainerBody,
	Main,
	HeaderTitle,
	HeaderTasks,
    ActionsButtons,
	ContainerTitle,
	ContainerCardsTasks,
    ContainerTasks,
    BackgroundModal,
	NoContent,
} from "./Home.style";
import { SkeletonCards } from "../../components/Skeletons/SkeletonCards/SkeletonCards.jsx";

export default function Home() {
    const { nome } = useAuth();

    const [modalOpen, setModalOpen] = useState(false);
    const [currentNote, setCurrentNote] = useState(null);
    const [notes, setNotes] = useState([]);
	const [filter, setFilter] = useState("todas");
    const [searchTerm, setSearchTerm] = useState("");
    const [isSearching, setIsSearching] = useState(false);
	const [loading,setLoading] = useState(false)
	
    const debouncedSearch = useDebounce(searchTerm, 500);

	const applyFilter = () => {
        if (filter === "todas") {
            return notes;
        }
        return notes.filter((note) => note.status === filter);
    };

    const fetchNotes = async (searchTerm = "") => {
		setLoading(true)
		try {
            if (searchTerm.trim() !== "") {
                const response = await searchNotes(searchTerm);

				if(!response.sucess){
					toast.error(response.msg);
				}

				if(response.sucess){
					setNotes(response.data);
				}

            } else {
                const response = await getNotes();
				
				if(!response.sucess){
					toast.error(response.msg);
				}

				if(response.sucess){
					setNotes(response.data);
				}

            }
        } catch (error) {
           toast.error(error.message)
        } finally {
			setLoading(false)
		}
    };

    useEffect(() => {
        fetchNotes(debouncedSearch);
    }, [debouncedSearch]);

    const handleSearch = (term) => {
        setSearchTerm(term);
        setIsSearching(term.trim() !== "");
    };

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
			<HeaderNav onSearch={handleSearch} />
			{isSearching ? (
				<SearchNotes
					updateNote={updateNote}
					deleteNote={deleteNote}
					notes={notes}
					modalOpen={modalOpen}
					currentNote={currentNote}
					setModalOpen={setModalOpen}
					setCurrentNote={setCurrentNote}
				/>
			) : (
				<Main>
					<HeaderTitle>
						<h1>
							Olá <strong>{nome}</strong> 👋
						</h1>
						<p>Adicione uma nova tarefa</p>
					</HeaderTitle>
					<Metrics />
					<HeaderTasks>
						<ContainerTitle>
							<h1>Suas Tarefas</h1>
							<ActionsButtons>
								<AddTask />
								<SelectButton
									filter={filter}
									setFilter={setFilter}
								/>
							</ActionsButtons>
						</ContainerTitle>
					</HeaderTasks>

					<ContainerTasks>
						<ContainerCardsTasks>
							{loading ? (
								<SkeletonCards count={20} />
							) : (
								applyFilter().map((note) => (
									<CardTask
										key={note._id}
										title={note.titulo}
										description={note.descricao}
										status={note.status}
										onClick={() => handleCardClick(note)}
									/>
								))
							)}
						</ContainerCardsTasks>

						{currentNote && modalOpen && (
							<>
								<BackgroundModal onClick={handleCloseModal} />
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

						{notes.length === 0 && (
							<NoContent>
								<img
									src="/NoContent.png"
									alt="Nenhuma tarefa encontrada"
								/>
								<h2>Adicione uma tarefa nova</h2>
							</NoContent>
						)}
					</ContainerTasks>
				</Main>
			)}
			<ToastPopUp />
		</ContainerBody>
	);
}
