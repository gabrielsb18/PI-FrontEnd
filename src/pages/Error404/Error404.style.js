import styled from "styled-components";

export const ContainerBody = styled.div`
	height: 100vh;
    background-color: #2a2a2a;
`;

export const Main = styled.main`
    width: 44%;
    height: 100vh;
    margin: 0 auto;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	gap: 32px;
`;

export const Paragraph = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 600px;
`;

export const Title=styled.h1`
	color: white;
	text-align: center;
	font-size: 3em;
`;

export const Subtitle=styled.h3`
	color: white;
	text-align: center;
	font-size: 2em;
`;

export const Text=styled.p`
	color: white;
	text-align: center;
	font-size: 1em;
`;