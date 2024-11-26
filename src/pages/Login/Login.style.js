import styled from "styled-components"
import {device} from "../../constants/index"

export const ContainerBody = styled.main`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    height: 100vh;
`;

export const Title = styled.div`
    width: 100%;
    font-size: 28px;
    margin-bottom: 60px;

    > p {
        font-size: 14px;
        color: #A1A1A1;
        font-weight: 400;
    }
`;

export const FormContainer = styled.div`
    display: flex;
    flex: 1;
    height: 100vh;
    min-width: 50%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 90px 130px;
    box-sizing: border-box;
    
    > form {
        display: flex;
        flex-direction: column;
        gap:50px;
        width: 100%;
        max-width: 400px;

        > div:first-child {
            width: 100%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            gap: 20px;

            > label {
                font-size: 16px;
                margin-bottom: -10px;
            }

        }

        > div:last-child{
            width: 100%;
            display: flex;
            flex-direction: column;
            gap: 26px;
        }

    }
        @media ${device.xs}{
            width: 100%;
            padding: 0 46px;
        }
 `;