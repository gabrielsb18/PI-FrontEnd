import HeaderNav from "../../components/Header/Header";

import {
	ContainerBody,
	Main,
	InputWrapper,
	Salvar,
	Image,
} from "./Perfil.style.js";

export default function Perfil() {
	return (
		<ContainerBody>
			<HeaderNav />
			<Main>
				<Image src="/IconProfile.svg" alt="Profile Image" />
				<InputWrapper>
					<input placeholder="Nome" />
				</InputWrapper>
				<InputWrapper>
					<input placeholder="Email" />
				</InputWrapper>
				<Salvar>
					<button>Salvar</button>
				</Salvar>
			</Main>
		</ContainerBody>
	);
}

