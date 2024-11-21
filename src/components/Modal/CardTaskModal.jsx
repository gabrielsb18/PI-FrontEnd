import { useEffect, useState } from "react";
import {ModalTask, ContainerModal, TitleTask, ContentTask, ButtonTrash, ButtonCloseNote, ContainerButtons, ActionsButtons, ButtonChecked } from "./CardTaskModal.style.js";
import { toast } from "sonner";

import { ToastPopUp } from "../../components/Toast/Toast.jsx";
import { api } from "../../services/api.js";
import { useAuth } from "../../contexts/AuthContext.jsx";

export function CardTaskModal ({title:initialTitle, content:initialContent, noteId, onClose, isOpen, onUpdate, onDelete}) {
    const { userId } = useAuth();

    const [title, setTitle] = useState(initialTitle);
    const [content, setContent] = useState(initialContent);
    const [status, setStatus] = useState('pendente');
  
    useEffect(() => {
        if (isOpen) {
          document.body.style.overflow = 'hidden';
        } else {
          document.body.style.overflow = 'unset';
        }
        return () => {
          document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    const handleTitleChange = (e) => {
        setTitle(e.target.value);
      };
    
      const handleContentChange = (e) => {
        setContent(e.target.value);
      };

    async function handleRemove() {

        try {
            const response = await api.delete(`/notes/${noteId}`);
            onDelete(noteId);
            
            onClose();
          
            setTimeout(() => {
                toast.success(response.data.msg, {
                    style: {
                        borderColor: "green",
                    }
                })
            }, 200);

        } catch (error) {
            toast.error(error.response.data.msg)
        }
    }

    async function handleUpdate(){

        if (title === initialTitle && content === initialContent) {
            onClose();
            return;
        }

        try {
            const updatedNote = {
                _id: noteId,
                titulo: title,
                descricao: content,
                status: status,
                usuario: userId
            }

            await api.put(`notes/${noteId}`, updatedNote);

            onUpdate(updatedNote);

            onClose();

            setTimeout(() => {
                toast.success('Nota atualizada com sucesso', {
                    style: {
                        borderColor: "green",
                    }
                });
            }, 200);
        } catch (error){
            toast.error('Erro ao atualizar nota');
        }
    }

    async function handleComplete(){
        try {
            const updatedNote = {
                _id: noteId,
                titulo: title,
                descricao: content,
                status: 'concluida',
                usuario: userId
            }

            await api.put(`notes/${noteId}`, updatedNote);

            onUpdate(updatedNote);
            setStatus('concluída');

            onClose();

            setTimeout(() => {
                toast.success('Tarefa marcada como concluída!', {
                    style: {
                        borderColor: "green",
                    }
                });
            }, 200);
        } catch (error){
            toast.error('Erro ao atualizar nota');
        }
    }

    if(!isOpen) return null;

    return(
        <ContainerModal>
            <ModalTask onClick={e => e.stopPropagation()}>
                <TitleTask
                    maxRows={6}
                    placeholder="Titulo"
                    value={title}
                    onChange={handleTitleChange}
                />
                <ContentTask
                    minRows={3}
                    maxRows={20}
                    placeholder="Conteudo"
                    value={content}
                    onChange={handleContentChange}
                />
            </ModalTask>
            <ContainerButtons>
                <ActionsButtons>
                    <ButtonTrash onClick={handleRemove}>
                        <img src="/trash-icon.svg" alt="Excluir anotação"/>
                    </ButtonTrash>
                    <ButtonChecked onClick={handleComplete}>
                        <img src="/check-icon.svg" alt="Salvar anotação"/>
                    </ButtonChecked>
                </ActionsButtons>
                    <ButtonCloseNote
                        onClick={handleUpdate}>
                            Fechar
                    </ButtonCloseNote>
            </ContainerButtons>
            <ToastPopUp/>
        </ContainerModal>
    )
}