import styled from "styled-components";

export const ContentGraphicTwo = styled.div`
    display:flex;
    flex-direction:column;
    justify-content: space-around;
    grid-area: ContentGraphicTwo;
    border: 1px solid #979797;
    padding:20px;
    border-radius:10px;

    > p {
        font-size:16px;
        color: #ffd735;
        font-weight:300;

    }

    > h1 {
        margin-top: 20px;
        color: #ffd735;
        font-size:64px
    }
`;