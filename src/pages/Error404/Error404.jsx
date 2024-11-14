import HeaderNav from "../../components/Header/Header.jsx";
import GoBack from "../../components/GoBack/GoBack.jsx";

import {
	ContainerBody,
	Main,
	Title,
	Subtitle,
	Text,
} from "./Error404.style.js";

export default function Error404() {
	return (
		<ContainerBody>
			<HeaderNav />
			<Main>
				<Title>Erro 404</Title>
				<Subtitle>Página não encontrada</Subtitle>
				<Text>
					A página que você procura não existe ou está indisponível no
					momento
				</Text>
				<GoBack />
			</Main>
		</ContainerBody>
	);
}

