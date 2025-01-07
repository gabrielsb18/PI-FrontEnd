import HeaderNav from "../../components/Header/Header";
import { GrapicTasks } from "../../components/Metrics/GrapicTasks/GrapicTasks";
import { SearchBar } from "../../components/SearchBar/SearchBar";
import SelectButton from "../../components/Select/Select";
import {
	ContainerBody,
	ApresentationSection,
	WrapperTitle,
	ButtonSignUp,
	CardsSection,
	MetricsSection,
	WrapperGrid,
	ContentText,
	TotalCompletedTasks,
	TotalPendingTasks,
	GrapicCompletedTasks,
	SearchSection,
	WrapperComponents,
	Footer,
	BGimage,
	WrapperContent,
	Main,
} from "./Lpage.styles";
import { useNavigate } from "react-router-dom";

export default function Lgpage() {
	const navigate = useNavigate();

	return (
		<ContainerBody>
			<HeaderNav showSearchBar={false} />
			<Main>
				<ApresentationSection>
					<WrapperTitle>
						<h1>
							<strong>Simples</strong>, rápido e intuitivo
						</h1>
						<ButtonSignUp onClick={() => navigate("/cadastro")}>
							Cadastre-se
						</ButtonSignUp>
					</WrapperTitle>
					<img src="/Logo-No-SpotLight.svg" alt="Logo Notes" />
				</ApresentationSection>

				<CardsSection>
					<BGimage
						src="BG-Section-Cards.svg"
						alt="Scrools de cards horizontal"
					/>
					<WrapperContent>
						<h1>
							Controle suas <strong>tarefas e atividades</strong>
						</h1>
						<img
							src="BG-Exe-Cards.svg"
							alt="Imagem ilustrativa de cards de tarefas"
						/>
					</WrapperContent>
				</CardsSection>

				<MetricsSection>
					<WrapperGrid>
						<GrapicTasks />
						<ContentText>
							<h1>Acompanhe seu desempenho</h1>
						</ContentText>
						<TotalCompletedTasks>
							<p>
								Tarefas <strong>concluidas</strong>
							</p>
							<h1>+80</h1>
						</TotalCompletedTasks>
						<TotalPendingTasks>
							<p>
								Tarefas <strong>pendentes</strong>
							</p>
							<h1>15</h1>
						</TotalPendingTasks>
					</WrapperGrid>
				</MetricsSection>

				<SearchSection>
					<h1>Encontre suas <strong>ideias</strong> e anotações sem burocracia</h1>
					<WrapperComponents>
						<SearchBar placeholder="Encontrar tarefas" />
						<SelectButton />
					</WrapperComponents>
				</SearchSection>
			</Main>
			<Footer />
		</ContainerBody>
	);
}
