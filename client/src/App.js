import React from 'react';
import YoutubePlayerContainer from './containers/YoutubePlayerContainer';
import GlobalStyle from './styles/GlobalStyles';

function App() {
  return (
    <React.Fragment>
      <GlobalStyle></GlobalStyle>
      <div className="App">
        <YoutubePlayerContainer></YoutubePlayerContainer>
      </div>
    </React.Fragment>
  );
}

export default App;
