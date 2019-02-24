import React from 'react';
import './App.css';
import GlobalStyle, { Main, Heading, Footer, Choose } from './GlobalStyles';
import Stripes from './components/Stripes/Stripes';
import ZigZag from './components/ZigZag/ZigZag';
import PolkaDots from './components/PolkaDots/PolkaDots';
import Gingham from './components/Gingham/Gingham';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      pattern: 'Stripes',
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

  renderSwitch = state => {
    switch(state) {
      case 'Stripes': return <Stripes updateCSS={this.updateCSS} />;
      case 'ZigZag': return <ZigZag updateCSS={this.updateCSS} />;
      case 'PolkaDots': return <PolkaDots updateCSS={this.updateCSS} />;
      case 'Gingham': return <Gingham updateCSS={this.updateCSS} />;
      default: return null;
    }
  }

  updateCSS = css => {
    this.setState({
      cssString: css,
    })
  }

  changePattern = e => {
    this.setState({
      pattern: e.target.value,
    })
  }

  render() {
    return (
      <>
      <GlobalStyle pattern={this.state.cssString}/>
      <Main>
        <Heading>
          <h1>Patternss</h1>
          <p>Generate CSS code for background patterns while live previewing</p>
        </Heading>
        <Choose>
          <h2>Choose a Pattern</h2>
          <select name="pattern" value={this.state.value} onChange={this.changePattern}>
            <option value="Stripes">Stripes</option>
            <option value="ZigZag">Zig Zag</option>
            <option value="PolkaDots">Polka Dots</option>
            <option value="Gingham">Gingham</option>
          </select>
        </Choose>
        {this.renderSwitch(this.state.pattern)}
        <Footer>Made by <a href='https://twitter.com/keveightysev' target='_blank' rel='noopener noreferrer'>Kevin Smith</a> - <a href='https://github.com/keveightysev/patternss' target='_blank' rel='noopener noreferrer'>Git Repo</a></Footer>
      </Main>
      </>
    );
  }
}

export default App;
