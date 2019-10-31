import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }
  html{
    font-size:16px;
	  line-height: 24px;
  }
  html,body{
    margin:0;
    padding:0;
  }
  body {
    background: ${props => props.theme.body.background};
    color: ${props => props.theme.body.color};
    font-family: 'Open Sans', BlinkMacSystemFont, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
    transition: all 0.25s linear;
  }
`;