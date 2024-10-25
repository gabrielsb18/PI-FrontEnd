import { ButtonProfile } from "../ButtonProfile/ButtonProfile";
import { Header } from "./Header.style";
import { SearchBar } from "../SearchBar/SearchBar";

export default function HeaderNav() {
	return (
		<Header>
			<img src="/IconLogo.svg" alt="Logo Notes" />
			<SearchBar placeholder="Pesquisar notas" />
			<ButtonProfile />
		</Header>
	);
}
