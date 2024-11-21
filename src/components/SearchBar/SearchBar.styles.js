import styled from "styled-components";
import { device } from "../../constants/index";

export const ContainerInput = styled.div`
	width: 18rem;
	height: 2.8rem;
	display: flex;
	justify-content: flex-start;
	align-items: center;
	border-radius: 8px;
	border: 1px solid #666;
	background-color: #2e2e2e;

	> img {
		margin-right: 20px;
		width: 1.75rem;
		height: 1.75rem;
	}
   
    @media ${device.xs}{
        display: none;
    }
`;

export const Input = styled.input`
	width: 100%;
	height: 54px;
	padding: 0 26px;
	border-radius: 10px;
	background-color: transparent;
	font-size: 16px;
	border: none;
	font-weight: 400;
	color: white; 

	&::placeholder {
		color: #777;
	}
`;
