import styled from "styled-components";
import { device } from "../../constants/index";

export const Main = styled.main`
    display: flex;
    flex-direction: column;
    gap: 32px;
    height: auto;
    margin: 0 auto;
    width:70%;
    min-height: 100vh;
    padding: 36px 0;
`;

export const TitleNoNote = styled.h1`
    display: flex;
    justify-content: center;
    align-items: center;

    background: linear-gradient(90deg, #F0F0F0, #414141 60%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-size: 2rem;
`;

export const ContainerCardsTasks = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(272px, 1fr));
	grid-template-rows: minmax(168px, auto);
	grid-template-areas: "Task Task Task Task";
	gap: 1.25rem;
	width: 100%;

	@media ${device.lg} {
		grid-template-areas:
			"Task"
			"Task"
			"Task"
			"Task";
	}

	@media ${device.md} {
		grid-template-areas:
			"Task Task"
			"Task Task";
	}

	@media ${device.sm} {
		grid-template-areas:
			"Task"
			"Task"
			"Task"
			"Task";
	}

	@media ${device.xs} {
		grid-template-areas:
			"Task"
			"Task"
			"Task"
			"Task";
	}
`;
