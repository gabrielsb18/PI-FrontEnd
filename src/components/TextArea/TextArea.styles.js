import styled from "styled-components";

export const InputWrap = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 8px;

    >textarea  {
        background-color:#414141;
        width:100%;
        height:176px;
        text-align:flex-start; 
        border:none;
        resize:none;
        border-radius:10px;
        padding:16px;
        color:#ffffff;
        font-size:16px;
    }

    ${({ variant }) => variant === "black" && `
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 8px;
        background: #414141;
        color: #fff;

        > textarea {
            width:100%;
            height:176px;
            text-align:flex-start; 
            border:none;
            resize:none;
            border-radius:10px;
            padding:16px;
            font-size:16px;
        }
    `}
`;

export const ErrorMessage = styled.span`
    color: #FF0130;
    font-size: 16px;
    font-weight: 350;
`;