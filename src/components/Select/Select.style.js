import styled from "styled-components";
import { device } from "../../constants/index";

export const ButtonSelect = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    border:1px solid #979797;
    border-radius: 10px;
    padding: 0 5px;
    
    background-color: transparent;
    font-size:16px;
    font-weight:500;
    color:white;

    > img {
        position: relative;
        margin-right: 10px;
        width: 14px;
        height: 14px;
    }
    
    > select {
        cursor: pointer;
        height: 52px;
        width: 100%;
        
        padding: 18px;
        border: none;
        appearance: none;

        background-color: transparent;
        
        &:focus {
            outline: none;
        }

        background-color: #2B2B2B;
        color: #fff;
        font-size: 16px;
        
        > option {
            border: none;
            background-color: #2B2B2B;
            color: #fff;
            font-size: 14px;
        }
    }

    @media ${device.xs}{
        width: 50%;
    } 
`;