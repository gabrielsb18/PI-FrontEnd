import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        background-color: ${({ theme }) => theme.COLORS.WHITE};
        color: ${({ theme }) => theme.COLORS.BLACK};

        -webkit-font-smoothing: antialiased;
    }

    body, input, button, textarea, select, option{
        font-family: "Inter", sans-serif;
        outline: none;
    }

    button, a {
        cursor: pointer;
        transition: filter 0.2s;
    }

    button:hover a:hover {
        filter: brightness(0.8);
    }


    a {
        text-decoration: none;
    }

    a:visited{
        color:black;
        text-decoration: none;
    }

    strong{
        font-weight: 700;
        color: ${({ theme }) => theme.COLORS.YELLOW_DEFAULT};
    }

`;