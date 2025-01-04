import HeaderNav from "../../components/Header/Header";
import {
	ContainerBody,
	ApresentationSection,
    WrapperTitle,
    ButtonSignUp,
	CardsSection,
	MetricsSection,
	SearchSection,
	Footer,
	BGimage,
	WrapperContent,
    Main
} from "./Lpage.styles";
import {useNavigate} from "react-router-dom";

export default function Lgpage() {
    const navigate = useNavigate();

	return (
		<ContainerBody>
			<HeaderNav showSearchBar={false} />
			<Main>
				<ApresentationSection>
                    <WrapperTitle>
                        <h1><strong>Simples</strong>,rápido e intuitivo</h1>
                        <ButtonSignUp onClick={() => navigate("/cadastro")}>Cadastre-se</ButtonSignUp>
                    </WrapperTitle>
                    <img src ="/Logo.svg" alt="Logo Notes"/>
                </ApresentationSection>

				<CardsSection>
					<BGimage src="BG-Section3.svg" alt="Scrools de cards horizontal"/>
					<WrapperContent>
						<h1>Controle suas <strong>tarefas e atividades</strong></h1>
						<img src="BG-Exe-Cards.svg" alt="Imagem ilustrativa de cards de tarefas"/>
					</WrapperContent>
				</CardsSection>

				<MetricsSection></MetricsSection>

				<SearchSection></SearchSection>
			</Main>
			<Footer />
		</ContainerBody>
	);
}
