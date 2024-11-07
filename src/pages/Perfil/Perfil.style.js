import styled from "styled-components";

export const ContainerBody = styled.div`
	background-color: #2a2a2a;
    height: 100vh;
`;

export const Main = styled.main`
	display: flex;
	justify-content: flex-start;
	align-items: center;
	flex-direction: column;
	gap: 32px;
	margin: 0 auto;
    margin-top: 4%;
	width: 33%;
`;

export const InputWrapper = styled.div`
	display: flex;
	justify-content: center;
	gap: 15px;
	align-items: center;
	width: 100%;
	> label {
		font-size: 18px;
	}
	> input {
		width: 25rem;
		height: 46px;
		border: none;
		border-radius: 10px;
		background-color: #414141;
		padding: 12px;
		color: #ffffff;
		font-size: 16px;
	}
	> textarea {
		width: 100%;
		height: 176px;
		text-align: flex-start;
		border: none;
		resize: none;
		border-radius: 10px;
		background-color: #414141;
		padding: 16px;
		color: #ffffff;
		font-size: 16px;
	}
`;

export const Salvar = styled.div`
	align-items: center;
	display: flex;
	justify-content: center;
	margin-top: 40px;
	width: 25rem;
	> button {
		background-color: #414141;
		color: #ffffff;
		border-radius: 10px;
		width: 100%;
		height: 45px;
		border: none;
	}
`;

export const Image = styled.img`
	max-width: 225px;
	width: 200px;
`;
