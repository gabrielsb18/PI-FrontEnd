import { ButtonProfile } from "../ButtonProfile/ButtonProfile";
import { Header, LoginButton, WrapperTitle } from "./Header.style";
import { SearchBar } from "../SearchBar/SearchBar";
import { Link } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";

export default function HeaderNav({ showSearchBar = true, onSearch }) {
	const { acessToken } = useAuth();

	return (
		<Header>
			<Link to="/home">
				{acessToken ? (
					<img src="/IconLogo.svg" alt="Logo Notes" />
				) : (
					<WrapperTitle>
						<h1>Notes</h1>
					</WrapperTitle>
				)}
			</Link>

			{showSearchBar && (
				<SearchBar
					onChange={(e) => onSearch(e.target.value)}
					placeholder="Pesquisar notas"
				/>
			)}

			{acessToken ? (
				<ButtonProfile />
			) : (
				<Link to="/login">
					<LoginButton>
						Login
					</LoginButton>
				</Link>
			)}
		</Header>
	);
}
