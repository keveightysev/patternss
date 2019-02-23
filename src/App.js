import React from 'react';
import './App.css';
import GlobalStyle from './GlobalStyles';
import Stripes from './components/Stripes/Stripes'

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      cssString: `background: linear-gradient(
        45deg,
        rgba(152, 205, 141, 1) 25%, 
        rgba(246, 240, 207, 1) 25%, 
        rgba(246, 240, 207, 1) 50%, 
        rgba(152, 205, 141, 1) 50%, 
        rgba(152, 205, 141, 1) 75%, 
        rgba(246, 240, 207, 1) 75%, 
        rgba(246, 240, 207, 1) 100%
        );
    background-size: 100px 100px;`,
    }
  }

  updateCSS = css => {
    this.setState({
      cssString: css,
    })
  }

  render() {
    return (
      <>
      <GlobalStyle pattern={this.state.cssString}/>
      <header>
        Patternss
      </header>
      <Stripes updateCSS={this.updateCSS} />
      </>
    );
  }
}

export default App;
