import { useNavigate } from "react-router-dom";
import GoBack from "../../components/GoBack/GoBack.jsx";

import {
	Main,
    Paragraph,
	Title,
	Subtitle,
	Text,
    ContainerBody
    
} from "./Error404.style.js";

export default function Error404({redirect}) {
    const navigate = useNavigate();

	return (
        <ContainerBody>
		<Main>
			<Title>Erro 404</Title>'

            <Paragraph>
                <Subtitle>Página não encontrada</Subtitle>
                <Text>
                    A página que você procura não existe ou está indisponível no
                    momento
                </Text>
            </Paragraph>

			<GoBack onClick={()=> navigate(redirect)} />
		</Main>
        </ContainerBody>
	);
}
