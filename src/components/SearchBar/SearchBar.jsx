import { ContainerInput, Input } from "./SearchBar.styles";

const SearchBar = ({ ...rest }) => {
	return (
		<ContainerInput>
			<Input {...rest} />

			<img src="/" alt="Ícone de busca" />
		</ContainerInput>
	);
};

export { SearchBar };
