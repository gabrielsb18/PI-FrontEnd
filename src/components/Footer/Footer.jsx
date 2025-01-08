import { FooterContainer, ContainerLinks, ContainerSupportLinks } from "./Footer.styles";

function Footer() {
	return (
		<FooterContainer>
			<ContainerLinks>
				<h1>Notes</h1>
				<a href="">
					<img src="/Icon-github.svg" alt="Icone do GitHub" />
				</a>
			</ContainerLinks>
            <ContainerSupportLinks>
                <p>©todos os direitos reservados</p>
            </ContainerSupportLinks>
		</FooterContainer>
	);
}

export { Footer };
