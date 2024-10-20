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