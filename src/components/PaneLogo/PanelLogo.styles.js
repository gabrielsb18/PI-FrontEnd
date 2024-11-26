import styled from "styled-components";
import {device} from "../../constants/index"

export const Container = styled.div`
    display: flex;
    flex:2;
    width:50%;
    height: 100vh;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    background-color: #FFD735;

    @media ${device.xs}{
        display: none;
    }

    @media ${device.sm}{
        display: none;
    }
`;