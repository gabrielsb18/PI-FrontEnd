import styled from "styled-components";

export const ContainerBody = styled.div`
    background-color: #2a2a2a;
    height: 100vh;
`;

export const Main = styled.main`
    display:flex;
    flex-direction: column;
    gap: 32px;
    height: auto;
    margin: 0 auto;
    width:70%;
`;

export const HeaderTitle = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:flex-start;
    align-items:start;
    margin-top:52px;

    > h1 {
        color:white;
        font-size:32px;
        font-weight:600;
        
        > strong{
        font-weight:800;
        }
    }

    > p {
        color:white;
        font-size:16px
    }
`;

export const ContainerGraphics = styled.div`
    display:grid;
    grid-template-columns: minmax(280px,3fr) minmax(160px, 2fr) minmax(200px, 2fr);
    grid-template-rows: minmax(200px, auto);
    grid-template-areas: "MonthsCompletedTasks ContentGraphicTwo ContentGraphicTree";
    gap:18px;
    justify-content:flex-start;
    width:100%;
`;

export const ContentGraphicsOne = styled.div`
    display:flex;
    flex-direction:column;
    justify-content: space-around;
    grid-area: MonthsCompletedTasks;
    border: 1px solid #979797;
    padding:20px;
    border-radius:10px;

    > p {
        font-size:16px;
        color: #afafaf;
        font-weight:300;
    }

    > h1 {
        margin-top: 20px;
        color: #35FF89;
        font-size:64px;
        
    }
`;

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

export const ContentGraphicTree = styled.div`
    display:flex;
    flex-direction:column;
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

export const HeaderTasks = styled.div`
    display:flex;
    justify-content: space-between;
    align-items:center;
    width: 100%;
`;

export const Tasks = styled.div`
    display:flex;
    gap: 25px;
    > h1{
        color: #666;
        font-size: 32px;
        font-weight:400;
    }

`;

export const ContainerTasks = styled.div`
    display:grid;
    grid-template-columns: minmax(280px,3fr) minmax(160px, 2fr) minmax(200px, 2fr);
    grid-template-rows: minmax(200px, auto);
    grid-template-areas: "MonthsCompletedTasks ContentGraphicTwo ContentGraphicTree";
    gap:18px;
    justify-content:flex-start;
    width:100%;
`;
