import styled from "styled-components";
import { device } from "../../constants/index";

export const Header = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 100%;
    
    width: 100vw;
    height: 4rem;
    padding: 12px 60px;

    background-color: transparent;

    border-bottom: 1px solid #8A8A8A;
    box-shadow: -35px 6px 107.8px -21px rgba(95, 95, 95, 0.25);
`;

export const LoginButton = styled.button`
    width: 100%;
    height: 22px;
    
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 16px;

    border: 1px solid #979797;
    border-radius: 8px;
    background-color: transparent ;
    
    font-size: 14px;
    font-weight:540;
    color:white;
    transition: ease-in-out 2s;

    &:hover{
        transition: ease-in-out 0.2s;
        border: 2px solid white;
        background-color: #3B3B3B;
        box-shadow: 0px 0px 4px 0px #979797;
    }

    &:active{
        transition: ease-in-out 0.2s;
        opacity: 0.4;
    }

    @media ${device.xs}{
        max-width: 150px;
        font-size: 1em;
    } 
`;

export const WrapperTitle = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 12px;

    > h1 {
        font-size: 24px;
        color: #ffff
    }
`;