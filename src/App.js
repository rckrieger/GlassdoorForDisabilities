import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Addemployeereview from './Addemployeereview';
import Company from './Company';
import Search from './Search'


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
        <Search/>
          <Company/>
      </div>
    );
  }
}

export default App;
