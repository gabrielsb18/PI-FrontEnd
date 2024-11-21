import styled from "styled-components";
import { device } from "../../constants/index";

export const Button = styled.button`
    width: 100%;
    height: 52px;
    
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 16px;

    border: 2px solid #979797;
    border-radius: 10px;
    background-color: transparent ;
    
    font-size:16px;
    font-weight:540;
    color:white;

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
