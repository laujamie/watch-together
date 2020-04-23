import { createGlobalStyle } from 'styled-components';
import createBreakpoints from '@material-ui/core/styles/createBreakpoints';
import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';

const GlobalStyle = createGlobalStyle`
  html {
    -webkit-box-sizing: border-box;
            box-sizing: border-box;
            line-height: 1.15;
            -webkit-text-size-adjust: 100%;
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

const breakpoints = createBreakpoints({});

export const watchTogetherTheme = responsiveFontSizes(
  createMuiTheme({
    palette: {
      primary: {
        main: '#222831'
      },
      secondary: {
        main: '#00adb5',
        contrastText: '#eeeeee'
      },
      background: {
        default: '#393e46'
      }
    },
    typography: {
      fontFamily: ['"Open Sans"', 'sans-serif'].join(','),
      fontSize: 16
    },
    overrides: {
      MuiToolbar: {
        gutters: {
          paddingLeft: '2em',
          paddingRight: '2em',
          [breakpoints.up('sm')]: {
            paddingLeft: '4em',
            paddingRight: '4em'
          }
        }
      }
    }
  })
);

export default GlobalStyle;
