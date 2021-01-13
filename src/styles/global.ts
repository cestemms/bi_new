import { createGlobalStyle } from 'styled-components';
import colors from './colors';

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  body{
    background-color: ${colors.background_color_01};
    color: ${colors.neutral_color_06};
    --webkit-font-smoothing: antialiased;
  }

  body, input, button{
    font-family: 'Open Sans', sans-serif;
    font-size: 16px;

  }

  h1, h2, h3, h4, h5, h6, strong{
    font-weight: 500;
  }

  button{
    cursor: pointer;
    outline: none;
    border: none;

  }

  a {
    color: ${colors.neutral_color_05};
  }
`;
