import HeaderNav from "../../components/Header/Header";
import { Input } from "../../components/Input/Input.jsx";
import { MdOutlineEmail, MdOutlineLock } from "react-icons/md";
import { FiCamera, FiUser } from "react-icons/fi";
import { ToastPopUp } from "../../components/Toast/Toast.jsx"
import placeholderImageUser from "../../../public/placeHolder.webp"

import {
	ContainerBody,
	Main,
	FormContainer,
	ButtonSave,
    Avatar,
    InputsWrapper,
} from "./Perfil.style.js";

import { toast } from "sonner";
import { api } from "../../services/api.js";
import { updateUserSchema } from "../../utils/updateUserSchema.js"
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAuth } from "../../contexts/AuthContext.jsx";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Perfil() {

    const {} = useParams();

    const {register, handleSubmit, formState: {errors}, value} = useForm({
        resolver: zodResolver(updateUserSchema)
    });

    const onUpdate = async (data) => {
        e.event.preventDefault();

        try {
            const response = await api.put("/users/", data);

            toast.sucess(response.msg, {
                style: {
                    borderColor: "green",
                    position: "top-right",
                },
            })
            
        }catch (error) {
            toast.error(error.response.msg)
        }
    }

	return (
		<ContainerBody>
			<HeaderNav
                showSearchBar={false}
            />
			<Main>
                <Avatar>
				    <img src="/IconProfile.svg" alt="Profile Image" />

                    <label htmlFor="avatar">
                        <FiCamera />

                        <input
                            id="avatar"
                            type="file"
                        />
                    </label>
                </Avatar>

                <FormContainer onSubmit={handleSubmit(onUpdate)}>

                    <InputsWrapper>
                        <Input
                            variant="black"
                            placeholder="nome"
                            icon={FiUser}
                            {...register("nome")}
                            error={errors.nome?.message}
                        />

                        <Input
                            variant="black"
                            placeholder="email"
                            icon={MdOutlineEmail}
                            {...register("email")}
                            error={errors.email?.message}
                        />
                    </InputsWrapper>
                    <InputsWrapper>
                        <Input
                            variant="black"
                            type="password"
                            placeholder="senha"
                            icon={MdOutlineLock}
                            {...register("senha")}
                            error={errors.senha?.message}
                        />

                        <Input
                            variant="black"
                            type="password"
                            placeholder="senha antiga"
                            icon={MdOutlineLock}
                            {...register("senhaAntiga")}
                            error={errors.senhaAntiga?.message}
                        />
                    </InputsWrapper>

                    <ButtonSave type="submit">Salvar</ButtonSave>
                </FormContainer>

			</Main>
		</ContainerBody>
	);
}
