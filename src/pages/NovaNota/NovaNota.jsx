import { ContainerBody, HeaderTitle, MainContent, InputWrapper, ButtonSaveNote, ButtonCancel, ContainerActionButtons} from '../NovaNota/NovaNota.styles';
import Header from '../../components/Header/Header';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { createNoteschema } from "../../utils/notesSchema";
import { api } from '../../services/api';
import { toast } from 'sonner';
import { zodResolver } from '@hookform/resolvers/zod';

export default function NovaNota() {
    const navigate = useNavigate();
    const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		resolver: zodResolver(createNoteschema),
	});

    async function onSubmit (data) {
        try {
            const sendData = {
                ...data,
                status:"pendente"
            }
            const response = await api.post("/notes", sendData);
            toast.success(response.msg, {
				style: {
					borderColor: "green",
				},
			});
        } catch (error) {
            toast.error(error.response.data.msg)
        }
    }

    return (
		<ContainerBody>
			<Header showSearchBar={false} />
			<MainContent onSubmit={handleSubmit(onSubmit)}>
				<HeaderTitle>
					<h1>Nova Tarefa</h1>
				</HeaderTitle>
				<InputWrapper>
					<label>Título</label>
					<input
						placeholder="Digite o título"
						{...register("titulo")}
					/>
					<span>{errors.titulo?.message}</span>
				</InputWrapper>
				<InputWrapper>
					<label>Conteúdo</label>
					<textarea
						placeholder="Digite o conteúdo"
						{...register("descricao")}
					/>
					<span>{errors.descricao?.message}</span>
				</InputWrapper>
				<ContainerActionButtons>
					<ButtonSaveNote type="submit">Salvar</ButtonSaveNote>
					<ButtonCancel onClick={() => navigate("/home")}>
						Cancelar
					</ButtonCancel>
				</ContainerActionButtons>
			</MainContent>
		</ContainerBody>
	);
}