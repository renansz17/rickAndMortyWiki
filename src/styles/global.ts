import { createGlobalStyle } from "styled-components";
import "../assets/fonts/get_schwifty.ttf";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Poppins', sans-serif;
        scroll-behavior: smooth;
    }
`;