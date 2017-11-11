import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Addemployeereview from './Addemployeereview'



class App extends Component {
  constructor()
  {
    super();
    this.state = {
      activePlace: 0,
    };
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">RampedUP</h1>
        </header>
          <Addemployeereview/>
      </div>
    );
  }
}

export default App;
