import React from 'react';
import { StylesProvider } from '@material-ui/core/styles';
import YoutubePlayerContainer from './containers/YoutubePlayerContainer';
import GlobalStyle from './styles/GlobalStyles';

function App() {
  return (
    <StylesProvider injectFirst>
      <GlobalStyle></GlobalStyle>
      <div className="App">
        <YoutubePlayerContainer></YoutubePlayerContainer>
      </div>
    </StylesProvider>
  );
}

export default App;
