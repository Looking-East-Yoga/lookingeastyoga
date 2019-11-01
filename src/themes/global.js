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
  p a{
    color:${props => props.theme.colors.black};
    border-bottom:1px solid ${props => props.theme.colors.orange};
    text-decoration:none;
    transition: all 0.05s linear;
    &:hover{
      border-width:0 0 3px;
    }
  }
`;