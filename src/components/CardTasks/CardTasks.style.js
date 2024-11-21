import styled from 'styled-components';

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
    
    background-color: ${({status}) => {
        if (status === 'pendente') return '#E0B73A';
        if(status === 'concluida') return '#2F704C';
        return 'gray'
    }};


    &:hover{
        filter: brightness(0.7);
        border: 1.2px solid #1a3a29;
    }

    > h1 {
        font-size: 16px;
        font-weight: 700;
        color: #fff;

        overflow: hidden;
        text-overflow: ellipsis;
        white-space: normal;

        color: ${({status}) => {
            if (status === 'pendente') return '#363530';
            return '#fff'
        }};
    }

    > p {
        color: #fff;
        font-size: 14px;
        font-weight: 300;

        overflow: hidden;
        text-overflow: ellipsis;
        white-space: normal;

        color: ${({status}) => {
            if (status === 'pendente') return '#363530';
            return '#fff'
        }};
    }
`;