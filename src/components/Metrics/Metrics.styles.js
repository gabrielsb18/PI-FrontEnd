import styled from "styled-components";
import { device } from "../../constants/index";

export const ContainerGraphics = styled.div`
	display: grid;
	grid-template-columns: minmax(280px, 3fr) minmax(160px, 2fr) minmax(200px, 2fr);
	grid-template-rows: minmax(200px, 200px);
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