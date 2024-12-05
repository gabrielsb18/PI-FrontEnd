import styled from "styled-components"
import { device } from "../../constants";

export const ContainerBody = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row-reverse;
    height: 100vh;
`;

export const Title = styled.div`
    width: 100%;
    font-size: 28px;
    margin-bottom: 48px;

    > p {
        font-size: 14px;
        color: #A1A1A1;
        font-weight: 400;
    }

    @media ${device.xs} {
        font-size: 1em;
        margin-bottom: 1.5rem;
    }

    @media ${device.sm}{
        font-size: 14px;
        margin-bottom: 24px;
    }

    @media ${device.md}{
        font-size: 18px;
    }

`;

export const FormContainer = styled.div`
    display: flex;
    height: 100vh;
    flex: 1;
    min-width:50%;
    box-sizing: border-box;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    overflow: hidden;

    padding: 90px 130px;

    > form {
        display: flex;
        flex-direction: column;
        gap:50px;
        max-width: 400px;
        width: 100%;

        > div:first-child {
            display: flex;
            flex-direction: column;
            justify-content: center;
            gap: 20px;
            width: 100%;

            > label {
                font-size: 16px;
                margin-bottom: -10px;
            }

            > a {
                font-weight: 400;
                font-size: 15px;
                text-decoration:none;
                color: ${({ theme }) => theme.COLORS.BLACK};
            }

            > a:hover{
                transition: ease-in 0.2s;
                opacity: 0.4;
            }
        }

        > div:last-child{
            display: flex;
            flex-direction: column;
            gap: 26px;
            width: 100%;
        }

        @media ${device.xs} {
            padding: 0px 40px;
        }
    }
`;