import styled from "styled-components";
import { device } from "../../constants";
import TextareaAutosize from 'react-textarea-autosize';

export const ContainerModal =styled.div`
    padding: 40px;
    width: 33.25rem;
    min-height: 364px;
    position: fixed;
    left:0;
    right: 0;
    top: 16%;
    margin: 0 auto;
    background-color: #2B2B2B;
    border-radius: 10px;
    animation: fade-up 0.2s;

    @keyframes fade-up {
        0% {
            opacity: 0.5;
            transform: scale(0.8);
        }

        100% {
            opacity: 1;
            transform: scale(1);
        }
    }
    
    @media ${device.xs} {
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-direction: column;
        border-radius: 0px;

        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        padding: 40px 20px;
        border: none;
    }
`;

export const ModalTask =styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction: column;
    gap: 16px;

    @media ${device.xs} {
        width: 100%;
    }

    @media ${device.sm} {
        max-height: 368px;
    }

    @media ${device.md} {
        max-height: 368px;
    }
`;

export const TitleTask = styled(TextareaAutosize)`
    text-align: flex-start;
    padding: 0px 16px;
    width: 100%;
    background-color: transparent;
    font-style: none;
    border: none;
    font-size: 20px;
    font-weight: 600;
    color:#F0F0F0;
    resize: none;
`;

export const ContentTask = styled(TextareaAutosize)`
    text-align: flex-start;
    padding: 16px;
    width: 100%;
    background-color: transparent;
    border: none;
    border-radius: 10px;
    font-size: 18px;
    color:#F0F0F0;
    min-height: 300px;
    resize: none;

    @media ${device.xs}{
        min-height: 150px;
    }
`;

export const ContainerButtons = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
    margin-top: 16px;
`;

export const ActionsButtons = styled.div`
    display:Flex;
    justify-content: center;
    gap: 12px;
`;

export const ButtonCloseNote = styled.button`
    width:92px;
    height: 42px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 8px;
    border: 1px solid transparent;
    border-radius: 10px;
    background-color: #414141;
    cursor:pointer;

    font-size: 16px;
    color: #F0F0F0;

    &:hover{
        background-color: #313131;
    }
`;

export const ButtonTrash = styled.button`
    width: 46px;
    height: 46px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 8px;
    border: 1px solid transparent;
    border-radius: 10px;
    background-color: #414141;
    cursor:pointer;
    
    &:hover{
        filter: brightness(0.5);
    }
`;

export const ButtonChecked = styled.button`
    width: 46px;
    height: 46px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 8px;
    border: 1px solid transparent;
    border-radius: 10px;
    background-color: #25573d;
    cursor:pointer;
    
    &:hover{
        filter: brightness(0.5);
    }
`;