import { ButtonProfile } from "../ButtonProfile/ButtonProfile";
import { Header } from "./Header.style";
import { SearchBar } from "../SearchBar/SearchBar";

export default function HeaderNav({showSearchBar = true}) {
	return (
		<Header>
			<img src="/IconLogo.svg" alt="Logo Notes" />
			{showSearchBar && <SearchBar placeholder="Pesquisar notas" />}
			<ButtonProfile />
		</Header>
	);
}
