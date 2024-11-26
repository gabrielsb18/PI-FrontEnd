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

    @media ${device.xs}{
        margin-bottom: 0;
        padding: 0 6%;
    }
`;

export const FormContainer = styled.div`
    display: flex;
    flex: 1;
    height: 100vh;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    padding: 90px 130px;

    > form {
        display: flex;
        flex-direction: column;
        gap:50px;
        width: 100%;

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

        @media ${device.xs}{
            width: 100%;
            padding: 46px;
        }

        @media ${device.md}{
            width: 100%;
        }
        
        @media ${device.lg}{
            min-width: 400px;
        }

    }
        @media ${device.xs}{
            width: 100%;
            padding: 0;
        }       

        @media ${device.lg}{
            min-width: 400px;
        }
 `;