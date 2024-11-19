import {ContainerBody, Title, FormContainer } from '../Cadastro/Cadastro.style'
import { PanelLogo } from '../../components/PaneLogo/panelLogo'
import { Input } from "../../components/Input/Input"
import Button from '../../components/Button/Button'
import { MdOutlineEmail,MdOutlineLock } from "react-icons/md";
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver} from '@hookform/resolvers/zod';
import { createUserFormSchema } from '../../utils/schemavalidation';
import { useState } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { toast } from 'sonner';
import { ToastPopUp } from "../../components/Toast/Toast";

export default function Cadastro (){
	const { signUp } = useAuth();
	const navigate= useNavigate();

	const [ email, setEmail] = useState("");
	const [ senha, setSenha] = useState("");

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		resolver: zodResolver(createUserFormSchema),
	});

	async function onSignup (){
		try {
			const response = await signUp({email, senha});
			toast.success(response.msg, {
				style:{
					borderColor:"green"
				}
			});

			setTimeout(()=>{
				navigate("/login")
			},6000)

		} catch (error) {
			toast.error(error.response.data.erros)			
		}
	};

    return (
		<ContainerBody>
			<FormContainer>
				<Title>
					<h1>
						Bem vindo ao <br />
						<strong>Notes</strong>
					</h1>
					<p>Cadastre- se para aproveitar ao máximo o Notes</p>
				</Title>

				<form onSubmit={handleSubmit(onSignup)}>
					<div>
						<Input
							type="email"
							icon={MdOutlineEmail}
							nome="Email"
							placeholder="Digite seu email"
							onChange={(e) => setEmail(e.target.value)}
							{...register("email")}
							error={errors.email?.message}
						/>
						<Input
							type="password"
							icon={MdOutlineLock}
							nome="Senha"
							placeholder="Digite sua senha"
							onChange={(e) => setSenha(e.target.value)}
							{...register("senha")}
							error={errors.senha?.message}
						/>

						<Link to="/login">
							Já tem uma conta? <strong>Entrar</strong>
						</Link>
					</div>
					<div>
						<Button type="submit" estilo="flat" name="Cadastre-se" />
					</div>
				</form>
			</FormContainer>

			<PanelLogo />
			<ToastPopUp/>
		</ContainerBody>
	);
}