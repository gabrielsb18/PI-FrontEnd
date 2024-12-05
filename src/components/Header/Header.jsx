import { ButtonProfile } from "../ButtonProfile/ButtonProfile";
import { Header } from "./Header.style";
import { SearchBar } from "../SearchBar/SearchBar";
import { Link } from "react-router-dom";

export default function HeaderNav({ showSearchBar = true, onSearch }) {
	
    const handleInputChange = (e) => {
		onSearch(e.target.value);
	};

	return (
		<Header>
			<Link to="/home">
				<img src="/IconLogo.svg" alt="Logo Notes" />
			</Link>

			{showSearchBar && (
				<SearchBar
					onChange={handleInputChange}
					placeholder="Pesquisar notas"
				/>
			)}
			<ButtonProfile />
		</Header>
	);
}
