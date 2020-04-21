import React from 'react';
import { StylesProvider } from '@material-ui/core/styles';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/styles';
import { ThemeProvider } from 'styled-components';
import { Home } from './pages';
import YoutubePlayerContainer from './containers/YoutubePlayerContainer';
import GlobalStyle, { watchTogetherTheme } from './styles/GlobalStyles';
import MainAppBar from './components/AppBar';

function App() {
  return (
    <StylesProvider injectFirst>
      <MuiThemeProvider theme={watchTogetherTheme}>
        <ThemeProvider theme={watchTogetherTheme}>
          <GlobalStyle></GlobalStyle>
          <Router>
            <header>
              <MainAppBar></MainAppBar>
            </header>
            <main>
              <Switch>
                <Route path="/app">
                  <YoutubePlayerContainer />
                </Route>
                <Route path="/">
                  <Home />
                </Route>
              </Switch>
            </main>
          </Router>
        </ThemeProvider>
      </MuiThemeProvider>
    </StylesProvider>
  );
}

export default App;
