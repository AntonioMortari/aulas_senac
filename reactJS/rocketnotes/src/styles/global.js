
import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    body{
        background-color: ${({theme}) => theme.COLORS.background_900};
        color:${({theme}) => theme.COLORS.white};
        font-family: 'Roboto', sans-serif;

        -webkit-font-smoothing:antialiased;
    }

    button{
        cursor: pointer;

        >svg{
            cursor: pointer;
        }
    }

    a{
        text-decoration: none;
        color: black;
    }
    
    button, a{
        transition: all.2s;
    }

    button:hover, a:hover{
        filter: brightness(.9);
    }
`