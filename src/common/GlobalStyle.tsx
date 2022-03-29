import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html {
    display: block;
    margin: 0;
    padding: 0;
    border: 0;
  }
  body {
    margin: 0;
    color: #545e6f;
  }
  html, body, #root {
    height: 100%;
    width: 100%;
  }
  * {
    box-sizing: border-box;
  }
`;

export default GlobalStyle;
