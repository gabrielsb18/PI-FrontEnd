import styled from "styled-components";

export const InputWrap = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 8px;
    background: #E4E4E4;

    > svg {
        margin-left: 14px;
    }

    >input{
        height: 54px;
        width: 100%;
        background:none;
        border:none;
        padding: 20px;
        font-size: 14px;
    }

    ${({ variant }) => variant === "black" && `
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 8px;
        background: #414141;
        color: #fff;

        > input {
            color: white;
            height: 54px;
            width: 100%;
            background:none;
            border:none;
            padding: 20px;
            font-size: 14px;
        }
    `}
`;

export const ErrorMessage = styled.span`
    color:red;
    font-size: 14px;
`;