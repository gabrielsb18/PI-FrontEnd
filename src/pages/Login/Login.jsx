import {ContainerBody, Title, FormContainer } from '../Login/Login.style'
import { PanelLogo } from '../../components/PaneLogo/panelLogo'
import { Input } from "../../components/Input/Input"
import Button from '../../components/Button/Button'
import { useNavigate } from 'react-router-dom';
import { MdOutlineEmail,MdOutlineLock } from "react-icons/md";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { createUserFormSchema } from "../../utils/schemavalidation";
import { useState } from 'react';

export default function Login (){
    const [senha, setSenha] = useState();
	const [email, setEmail] = useState();
    const navigate = useNavigate();
    
    const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		resolver: zodResolver(createUserFormSchema),
	});

    return (
		<ContainerBody>
			<FormContainer>
				<Title>
					<h1>Login</h1>
					<p>Faça login para continuar</p>
				</Title>

				<form onSubmit={handleSubmit ()}>
					<div>
						<Input
                            ref
							error={errors.email?.message}
							{...register("email")}
							icon={MdOutlineEmail}
							nome="Email"
							placeholder="Digite seu email"
							onChange={e => setEmail(e.target.value)}
						/>
						<Input
                            ref
                            type="password"
							error={errors.senha?.message}
							{...register("senha")}
							icon={MdOutlineLock}
							nome="Senha"
							placeholder="Digite sua senha"
							onChange={e => setSenha(e.target.value)}
						/>
					</div>
					<div>
						<Button estilo="flat" name="Entrar" type="submit" />
						<Button
							estilo="outlined"
							name="Cadastre-se"
							onClick={() => navigate("/cadastro")}
						/>
					</div>
				</form>
			</FormContainer>

			<PanelLogo />
		</ContainerBody>
	);
}