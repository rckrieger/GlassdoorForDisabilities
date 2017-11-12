import React, { Component } from 'react';
import { Navbar, NavItem, Nav, Grid, Row, Col } from "react-bootstrap";
import $ from 'jquery'

class Company extends Component {

  componentDidMount() {
    this.Company();
  }

  Company() {
    $.getJSON('http://api.glassdoor.com/api/api.htm?t.p=225506&t.k=qyQd59zEqE&userip=0.0.0.0&useragent=&format=json&v=1&action=employers')
      .then(({ results }) => console.log({results}));
  }

  constructor(jobid) {
    super(jobid);
    //cal api here
    this.props = {
    //jobjson: props.person,
    };
    this.state = {
      person: []
    }
  }

  render() {
    const persons = this.state.person.map((item, i) => (
      <div>
        <h1>{item}</h1>
        <span>{ item.cell }, { item.email }</span>
      </div>
    ));

    return (
      <div id="layout-content" className="layout-content-wrapper">
        <div className="panel-list">{ persons }</div>
      </div>
    );
  }
}
export default Company;
