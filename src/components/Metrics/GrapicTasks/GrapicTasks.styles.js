import styled from "styled-components";

export const ContentGraphicsOne = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    grid-area: MonthsCompletedTasks;
    border: 1px solid #979797;
    border-radius:10px;
    min-width: 100%;

    > p {
        padding: 20px;
        font-size:16px;
        color: #afafaf;
        font-weight:300;
    }
`;