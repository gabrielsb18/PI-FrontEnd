import { Main, ContainerCardsTasks, TitleNoNote } from "./SearchNotes.styles";
import { CardTask } from "../CardTasks/CardTasks";
import { CardTaskModal } from "../Modal/CardTaskModal";
import { BackgroundModal } from "../../pages/Home/Home.style";

export function SearchNotes({
	notes,
	modalOpen,
	setModalOpen,
	currentNote,
	setCurrentNote,
    updateNote,
    deleteNote,
}) {
	const handleCardClick = (note) => {
		setCurrentNote(note);
		setModalOpen(true);
	};

	const handleCloseModal = () => {
		setCurrentNote(null);
		setModalOpen(false);
	};

	return (
		<Main>
			<ContainerCardsTasks>
				{notes.length > 0 ? (
					notes.map((note) => (
						<CardTask
							title={note.titulo}
							description={note.descricao}
							status={note.status}
							onClick={() => handleCardClick(note)}
							key={note._id}
						/>
					))
				) : (
					<TitleNoNote>Nenhuma nota encontrada</TitleNoNote>
				)}
			</ContainerCardsTasks>

			{modalOpen && currentNote && (
				<>
					<BackgroundModal onClick={handleCloseModal} />
					<CardTaskModal
						noteId={currentNote._id}
                        onUpdate={updateNote}
                        onDelete={deleteNote}
						isOpen={modalOpen}
						onClose={handleCloseModal}
						title={currentNote.titulo}
						content={currentNote.descricao}
					/>
				</>
			)}
		</Main>
	);
}
