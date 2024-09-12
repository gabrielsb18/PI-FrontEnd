import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    //RESETANDO ESTILOS PADRÕES DO NAVEGADOR
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        background-color: ${({ theme }) => theme.COLORS.WHITE};
        color: ${({ theme }) => theme.COLORS.BLACK};

        //FONTE SUAVE
        -webkit-font-smoothing: antialiased;
    }

    //DEFININDO FONTE PADRÃO
    body, input, button, textarea, select, option{
        font-family: "Inter", sans-serif;
        outline: none;
    }

    //OUTROS ESTILOS
    button {
        cursor: pointer;
        transition: filter 0.2s;
    }

    a {
        text-decoration: none;
    }

    strong{
        font-weight: 700;
        color: ${({ theme }) => theme.COLORS.YELLOW_DEFAULT};
    }

`;