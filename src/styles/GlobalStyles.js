import { createGlobalStyle } from "styled-components";
import "@fontsource/dancing-script";

const GlobalStyles = createGlobalStyle`
  /* 1. Reset básico e controle de caixa (Essencial) */
  *, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  /* 2. Rolagem suave para âncoras na página */
  html {
    scroll-behavior: smooth;
  }

  /* 3. Configurações do corpo do documento */
  body {
    font-family: "Dancing Script", cursive;
    overflow-x: hidden;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    
    /* Cores de fundo e texto padrão evitam bugs de contraste do navegador */
    background-color: #ffffff;
    color: #1a1a1a;
  }

  /* 4. Reset de tipografia */
  h1, h2, h3, h4, h5, h6 {
    margin: 0;
    padding: 0;
  }

  /* 5. Reset de links */
  a {
    color: inherit;
    text-decoration: none;
  }

  /* 6. Reset de listas */
  ul, ol {
    list-style: none;
  }

  /* 7. Herança de fonte para formulários e botões */
  input, button, textarea, select {
    font: inherit;
  }

  /* 8. Reset de mídia responsiva */
  img, picture, video, canvas, svg {
    display: block;
    max-width: 100%;
  }

  /* 9. Evita que o texto quebre ou fique estranho em botões */
  button {
    cursor: pointer;
    background: transparent;
    border: none;
  }
`;

export default GlobalStyles;
