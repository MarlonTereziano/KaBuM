import { createGlobalStyle } from 'styled-components';

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
    --color-white-200: #CCCCCC;
    --color-black: #000;
    --color-blue: #0060B1;
  }

`