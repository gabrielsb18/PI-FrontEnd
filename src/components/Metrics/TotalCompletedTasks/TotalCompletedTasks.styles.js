import styled from "styled-components";

export const ContentGraphicTree = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    grid-area: ContentGraphicTree;
    border: 1px solid #979797;
    padding:20px;
    border-radius:10px;

    > p {
        font-size:16px;
        color: #35FF89;
        font-weight:300;

        > strong {
        margin-top: 20px;
        color: #35FF89;
        }
    }

    > h1 {
        margin-top: 20px;
        color: #35FF89;
        font-size:64px;
        
    }
`;