export const CardTasks = styled.div`
    min-height: 168px;
    min-width: 272px;

    cursor: pointer;
    display: flex;
    flex-direction: column;
    gap: 12px;

    border: 1.2px solid transparent;
    border-radius: 10px;
    padding: 20px;

    background-color: #2F704C;
    transition: ease-out 0.2s;

    &:hover{
        border: 1.2px solid #1a3a29;
        background-color: #25573d;
    }

    > h1 {
        font-size: 16px;
        font-weight: 700;
        color: #fff;

        overflow: hidden;
        text-overflow: ellipsis;
        white-space: normal;
    }

    > p {
        color: #fff;
        font-size: 14px;
        font-weight: 300;

        overflow: hidden;
        text-overflow: ellipsis;
        white-space: normal;
    }
`;