import styled from "styled-components";

export const FooterContainer = styled.footer`
    background-color: transparent;
    border-top: 1px solid gray;
    height: 172px;
    bottom: 0;

    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    padding: 22px;
`;

export const ContainerLinks = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 28px;

    > h1  {
        color: #ffff;
        font-size: 1.5em;
    }

    > a {
        > img {
            transition: ease-in-out 0.2s;

            &:hover {
                filter: brightness(2);
            }
        }
    }
`;

export const ContainerSupportLinks = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-end;
    height: 48px;

    > p {
        font-size: 1em;
        color: #ffff;
        text-align: end;
    }
`;