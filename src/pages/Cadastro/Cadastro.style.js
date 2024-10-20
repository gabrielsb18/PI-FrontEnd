import styled from "styled-components"

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
    margin-bottom: 90px;

    > p {
        font-size: 14px;
        color: #A1A1A1;
        font-weight: 400;
    }
`;

export const FormContainer = styled.div`
    display: flex;
    width:50%;
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
        padding: 32px;
        min-width: 400px;

        > div:first-child {
            display: flex;
            flex-direction: column;
            justify-content: center;
            gap: 20px;

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
        }
    }
`;