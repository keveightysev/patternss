import React from 'react';
import './App.css';
import GlobalStyle, { Main, Heading, Footer } from './GlobalStyles';
import Stripes from './components/Stripes/Stripes'

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      cssString: `background: linear-gradient(
        45deg,
        #A50002 25%, 
        #243B75 25%, 
        #243B75 50%, 
        #A50002 50%, 
        #A50002 75%, 
        #243B75 75%, 
        #243B75 100%
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
      <Main>
        <Heading>
          Patternss
        </Heading>
        <Stripes updateCSS={this.updateCSS} />
        <Footer>Made by <a href='http://iridigital.com' target='_blank' rel='noopener noreferrer'>Kevin Smith</a> - <a href='https://github.com/keveightysev/patternss' target='_blank' rel='noopener noreferrer'>Git Repo</a></Footer>
      </Main>
      </>
    );
  }
}

export default App;
