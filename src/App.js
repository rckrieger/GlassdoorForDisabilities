import React, { Component } from 'react';
import logo from './fulllogo.png';
import './App.css';
import Addemployeereview from './Addemployeereview';
import Company from './Company';
//import Search from './Search'
import SearchBar from 'react-search-bar';
import Search from 'react-search-box';
import { Navbar, NavItem, Nav, Grid, Row, Col } from "react-bootstrap";
import Home from './Home';
import MainTable from './MainTable'



class App extends Component {
  constructor()
  {
    super();
    //
    this.state = {
      activePlace: 0,

    };
  }
  render() {
    const TABS = ["Home"," Companies", "Add Review"];
    const activePlace = this.state.activePlace;
    return (
      <div className="App">
        <header className="App-header" id = "head" >

          <img src={logo} className="App-logo" alt="logo" />

        </header>
        <Nav
          bsStyle="tabs"
          activeKey={activePlace}
          onSelect={index => {
            this.setState({ activePlace: index });
          }}
        >

        {TABS.map((tab, index) => (
          <NavItem key={index} eventKey={index}>{tab}</NavItem>
        ))}
        </Nav>
        {(() => {
        switch (this.state.activePlace) {
          case 0:   return <Home/>;
          case 1: return <MainTable/>;
          case 2: return <Addemployeereview/>;
          default:      return <Home/>;
        }
      })()}
      </div>
    );
  }
}

export default App;
