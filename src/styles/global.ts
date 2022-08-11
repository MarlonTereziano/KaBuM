import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin:0;
    padding: 0;
    box-sizing:border-box;
    outline:0;
    box-sizing: border-box;
    font-family: 'Poppins','Roboto', Arial, Helvetica, sans-serif;
    text-decoration: none; 
  }

  :root{
    --color-white: #fff;
    --color-white-200: #D7DFEF;
    --color-white-300: #FAFAFB;
    --color-black: #000;
    --color-blue: #0060B1;
    --color-blue-200: #022145;
    --color-blue-300: #347BBE;
    --color-orange:#F26D1E;
    --color-orange-200:#FF6500;
;
  }

body::-webkit-scrollbar {
  width: 0; 
}

`;
