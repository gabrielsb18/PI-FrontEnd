import styled from "styled-components";
import { device } from "../../constants/index";

export const ContainerBody = styled.div`
    background-color: #2a2a2a;
    min-height: 100vh;
    overflow-x: hidden;
`;

export const Main = styled.main`
    height: 100%;
    width:70%;
    margin: 0 auto;
`;

export const ApresentationSection = styled.section`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 4rem;
    flex-wrap: wrap;
    padding-top: 120px;
    padding-bottom: 120px;

    @media ${device.xs} {
        gap: 0;
    }

    @media ${device.sm} {        
        > img {
            display: none;
        }
    }
`;

export const ButtonSignUp = styled.button`
    width: 168px;
    height: 54px;
    
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 16px;

    border: 1px solid #979797;
    border-radius: 8px;
    background-color: transparent ;
    
    font-size: 16px;
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
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 1.8rem;
    
    > h1 {
        color: #ffff;
        font-size: 48px;
    }

    @media ${device.xs} {
        > h1 {
            font-size: 24px;
        }
    }
`;

export const CardsSection = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    box-sizing: border-box;
`;

export const BGimage = styled.img`
    width: 100vw;
    position: relative;
    max-height: 640px;
`;

export const WrapperContent = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    padding-right: 160px;
    padding-left: 160px;

    > h1 {
        color: #ffff;
        font-size: 48px;

        > strong {
            color: #1CAF5D;
        }
    }

    @media ${device.xs} {
        > img {
            display: none;
        }
    }

    @media ${device.sm} {
        padding: 60px;

        > h1 {
            font-size: 24px;
        }

        > img {
            width: 25%;
        }   
    }

    @media ${device.md} {
        > img {
            width: 50%;
        }
    }
`;

export const MetricsSection = styled.section`
`;

export const SearchSection = styled.section`
`;

export const Footer = styled.footer`
`;