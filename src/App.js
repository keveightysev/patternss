import React from 'react';
import './App.css';
import GlobalStyle from './GlobalStyles';
import Stripes from './components/Stripes/Stripes'

class App extends React.Component {
  render() {
    return (
      <>
      <GlobalStyle />
      <header>
        Patternss
      </header>
      <Stripes />
      </>
    );
  }
}

export default App;
