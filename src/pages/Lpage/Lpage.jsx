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

				<CardsSection></CardsSection>

				<MetricsSection></MetricsSection>

				<SearchSection></SearchSection>
			</Main>
			<Footer />
		</ContainerBody>
	);
}
