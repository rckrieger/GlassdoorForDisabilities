import React, { Component } from 'react';
import { Navbar, NavItem, Nav, Grid, Row, Col } from "react-bootstrap";
import $ from 'jquery'

class CompanyLandingPage extends Component {

  componentDidMount() {
    const URL = "http://api.glassdoor.com/api/api.htm?t.p=225506&t.k=qyQd59zEqE&userip=0.0.0.0&useragent=&format=json&v=1&action=employers&pn=1&ps=1&q=microsoft";
    const NICKURL = "/api/company/all";
    fetch(NICKURL, {mode: 'no-cors'}).then(response => response.json());
  }
  //this.setState({companyName: fetch(URL, {mode: 'no-cors'}).then(response => response.json())});
  //    this.setState({companyName: companyJson['response'][0]['employers'][0].name});
  // const companyJson = fetch(URL, {mode: 'no-cors'}).then(res => res.json()).then(json => {
  //   this.setState({ companyName: json['response'][0]['employers'][0].name });
  // });;
//  const companyName = companyJson['response'][0]['employers'][0].name;

  //  fetch(URL).then(res => console.log(res.json()));

  //companyName = JSON.parse()


  constructor(companyid){
    super(companyid);
    //cal api here

    this.state = {
      companyName: null,
      companyDescription: null,
      reviewArray:[],
      jobPostings:[],
      overAllScore: 0,
      teamEnvironment:0,
      careerGrowth:0,
      accessibilityAttitudes:0,

    };
  }
  //    {console.log(this.state.companyName)}

  render() {
    return (
      <div id="layout-content" className="layout-content-wrapper">
        <StarRatingComponent
          name="rate2"
          editing={false}
          starCount={5}
          value={4.5}
        />
>
      <a href='https://www.glassdoor.com/index.htm'>powered by <img src='https://www.glassdoor.com/static/img/api/glassdoor_logo_80.png' title='Job Search' /></a>
      </div>
    );

  }
}
export default Company;
