import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import bootstrap from 'bootstrap/dist/js/bootstrap.min';
import bootstrapCss from 'bootstrap/dist/css/bootstrap.css';
import LedDotMatrix from './components/LedDotMatrix';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {bannerDigit: 'A', blinkInterval: 3};
  }
  change = (e) => {
    this.setState({bannerDigit: e.target.value ? e.target.value.toUpperCase() : 'a'});
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Digital Signage Playground</h1>
        </header>
        <div style={{fontSize: '6em'}} className="banner-Transform">
          {this.state.bannerDigit}
        </div>
        <LedDotMatrix letter={this.state.bannerDigit} />
        <form className="center container">
          <div className="row">
          <input className="form-control" type="text" placeholder="Type in banner text" onChange={this.change}/>
          </div>
        </form>
      </div>
    );
  }
}

export default App;
