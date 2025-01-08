import { toast } from "sonner";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";

import { HeaderNav } from "../../components/Header/Header";
import { Input } from "../../components/Input/Input";
import { useForm } from "react-hook-form";
import { createNoteschema } from "../../utils/notesSchema";
import { postNote } from "../../services/notesService";
import { TextArea } from "../../components/TextArea/TextArea";

import {
	ContainerBody,
	HeaderTitle,
	MainContent,
	InputWrapper,
	ButtonSaveNote,
	ButtonCancel,
	ContainerActionButtons,
} from "../NovaNota/NovaNota.styles";


export default function NovaNota() {

	const navigate = useNavigate();
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		resolver: zodResolver(createNoteschema),
	});

	async function onSubmit(data) {
		try {
			const response = await postNote({
				...data,
				status: "pendente",
			});

			if(!response.sucess){
                toast.error(response.msg);
            }

            if(response.sucess){
                toast.success(response.data.msg, {
                    style: {
                        borderColor: "green",
                    },
                });

				navigate("/home");
            }
		} catch (error) {
			toast.error(error.message);
		}
	}

	return (
		<ContainerBody>
			<HeaderNav showSearchBar={false} />
			<MainContent onSubmit={handleSubmit(onSubmit)}>
				<HeaderTitle>
					<h1>Nova Tarefa</h1>
				</HeaderTitle>
				<InputWrapper>
					<Input
						variant="black"
						nome="Titulo"
						placeholder="Digite o título"
						{...register("titulo")}
						error={errors.titulo?.message}
					/>
				</InputWrapper>
				<InputWrapper>
					<TextArea
						variant="black"
						nome="Descrição"
						placeholder="Digite o conteúdo"
						{...register("descricao")}
						error={errors.descricao?.message}
					/>
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
