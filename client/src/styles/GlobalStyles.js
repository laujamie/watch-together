import { createGlobalStyle } from 'styled-components';
import { createMuiTheme } from '@material-ui/core/styles';

const GlobalStyle = createGlobalStyle`
  html {
    -webkit-box-sizing: border-box;
            box-sizing: border-box;
  }
  *, *:before, *:after {
    -webkit-box-sizing: inherit;
            box-sizing: inherit;
  }
  body {
    margin: 0;
    padding: 0;
    font-size: 16px;
    font-family: 'Open Sans', sans-serif;
  }

  label {
    font-family: inherit
  }
`;

export const watchTogetherTheme = createMuiTheme({
  palette: {
    primary: {
      main: '#272343'
    }
  }
});

export default GlobalStyle;
