import styled from "styled-components"

export const ContainerBody = styled.div`
    display: flex;
    justify-content: center;
    align-items: start;
    flex-direction: row;
    height: 100vh;
    background-color: #2B2B2B;
    color: #F0F0F0;
    padding: 74px 46px;
`;

export const Title = styled.div`
    display: flex;
    width:100%;
    justify-content:space-between;
    height:42px;
`;

export const DeleteButton = styled.button`
    background-color: #414141;
    border-radius: 10px;
    width:46px;
    height:100%;
    border:none;
`;

export const MainContent = styled.div`
    display: flex;
    flex-direction: column;
    gap:44px;
    width:700px;
`;

export const InputWrapper = styled.div`
    display:flex;
    justify-content:center;
    gap:15px;
    flex-direction:column;
    > label {
        font-size:18px;
    }
    > input {
        width:100%;
        height:46px;
        border:none;
        border-radius:10px;
        background-color:#414141;
        padding:12px;
        color:#ffffff;
        font-size:16px;
    }
    > textarea{
        width:100%;
        height:176px;
        text-align:flex-start; 
        border:none;
        resize:none;
        border-radius:10px;
        background-color:#414141;
        padding:16px;
        color:#ffffff;
        font-size:16px;
    }
    > button {
        
    }
`;

export const Salvar = styled.div`
align-items:center;
display:flex;
justify-content:end;
margin-top:40px         ;
> button {
        background-color: #414141;
        color:#ffffff;
        border-radius: 10px;
        width:50%;
        height:48px;
        border:none;
    }
`;
