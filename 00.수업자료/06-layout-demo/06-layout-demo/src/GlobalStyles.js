
import { createGlobalStyle } from "styled-components";
import reset from 'styled-reset';

const GlobalStyles = createGlobalStyle`
    ${reset}

    * {
        font-family: 'Noto Sans KR';
    }

    body {
        margin: 0;
        padding: 0;
    }
`

export default GlobalStyles;