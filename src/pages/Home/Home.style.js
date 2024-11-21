import styled from "styled-components";
import {device} from "../../constants/index";

export const ContainerBody = styled.div`
    background-color: #2a2a2a;
    min-height: 100vh;
`;

export const Main = styled.main`
    display: flex;
    flex-direction: column;
    gap: 32px;
    height: auto;
    margin: 0 auto;
    width:70%;
    min-height: 100vh;
`;

export const HeaderTitle = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: start;
    margin-top:52px;

    > h1 {
        color:white;
        font-size:32px;
        font-weight:600;
        
        > strong{
        font-weight:800;
        }
    }

    > p {
        color:white;
        font-size:16px
    }
`;

export const ContainerGraphics = styled.div`
	display: grid;
	grid-template-columns: minmax(280px, 3fr) minmax(160px, 2fr) minmax(200px, 2fr);
	grid-template-rows: minmax(200px, auto);
	grid-template-areas: "MonthsCompletedTasks ContentGraphicTwo ContentGraphicTree";
	gap: 18px;
	justify-content: flex-start;
	width: 100%;

	@media ${device.lg} {
		grid-template-areas: "MonthsCompletedTasks ContentGraphicTwo ContentGraphicTree";
	}

	@media ${device.md} {
		grid-template-areas:
			"MonthsCompletedTasks MonthsCompletedTasks"
			"ContentGraphicTwo"
			"ContentGraphicTree";
	}

	@media ${device.sm} {
		grid-template-columns: 1fr 1fr;
		grid-template-areas:
			"ContentGraphicTree ContentGraphicTwo"
			"MonthsCompletedTasks MonthsCompletedTasks";
	}

	@media ${device.xs} {
		grid-template-columns: 1fr;
		grid-template-areas:
			"MonthsCompletedTasks"
			"ContentGraphicTwo"
			"ContentGraphicTree";
	}
`;

export const ContentGraphicsOne = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    grid-area: MonthsCompletedTasks;
    border: 1px solid #979797;
    padding:20px;
    border-radius:10px;

    > p {
        font-size:16px;
        color: #afafaf;
        font-weight:300;
    }

    > h1 {
        margin-top: 20px;
        color: #35FF89;
        font-size:64px;
        
    }
`;

export const ContentGraphicTwo = styled.div`
    display:flex;
    flex-direction:column;
    justify-content: space-around;
    grid-area: ContentGraphicTwo;
    border: 1px solid #979797;
    padding:20px;
    border-radius:10px;

    > p {
        font-size:16px;
        color: #ffd735;
        font-weight:300;

    }

    > h1 {
        margin-top: 20px;
        color: #ffd735;
        font-size:64px
    }
`;

export const ContentGraphicTree = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    grid-area: ContentGraphicTree;
    border: 1px solid #979797;
    padding:20px;
    border-radius:10px;

    > p {
        font-size:16px;
        color: #35FF89;
        font-weight:300;

        > strong {
        margin-top: 20px;
        color: #35FF89;
        }
    }

    > h1 {
        margin-top: 20px;
        color: #35FF89;
        font-size:64px;
        
    }
`;

export const HeaderTasks = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: end;
    width: 100%;
`;

export const ContainerTitle = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    gap: 25px;
    
    > h1{
        color: #666;
        font-size: 32px;
        font-weight:400;
    }
    
    @media ${device.xs} {
        align-items: flex-start;
        flex-direction: column;
    }
`;

export const ActionsButtons = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: end;
    width: 80%;
    gap: 25px;

    @media ${device.xs} {
        width: 100%;
    }
`;

export const ContainerTasks = styled.div`
    display:grid;
    grid-template-columns: minmax(280px,3fr) minmax(160px, 2fr) minmax(200px, 2fr);
    grid-template-rows: minmax(200px, auto);
    grid-template-areas: "MonthsCompletedTasks ContentGraphicTwo ContentGraphicTree";
    gap:18px;
    justify-content:flex-start;
    width:100%;
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