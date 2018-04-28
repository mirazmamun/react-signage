import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import bootstrap from 'bootstrap/dist/js/bootstrap.min';
import bootstrapCss from 'bootstrap/dist/css/bootstrap.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {bannerDigit: 'A'};

  }
  keyUp = (e) => {
    console.log(e.target.value);
    this.setState({bannerDigit: 'B'});
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <div style={{fontSize: '6em'}}>
          {this.state.bannerDigit}
        </div>
        <input type="text" placeholder="Type in banner text" onKeyUp={this.keyUp}/>
      </div>
    );
  }
}

export default App;
