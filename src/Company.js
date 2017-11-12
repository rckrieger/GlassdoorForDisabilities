import React, { Component } from 'react';
import { Navbar, NavItem, Nav, Grid, Row, Col } from "react-bootstrap";
import $ from 'jquery'

class Company extends Component {


  componentDidMount() {
    const URL = "http://api.glassdoor.com/api/api.htm?t.p=225506&t.k=qyQd59zEqE&userip=0.0.0.0&useragent=&format=json&v=1&action=employers&pn=1&ps=1&q=microsoft";
    const NICKURL = "/api/company/all";
    var myHeaders = new Headers();
    var jayson;
    console.log("first this", this);
    var myInit = { method: 'GET',
                   headers: myHeaders,
                   mode: 'no-cors',
                   cache: 'default' };

    fetch(NICKURL, myInit).then(res => res.json()).then(json => {
      console.log("second this",json);
      this.setState({reviewArray: json[0].reviews,
      companyName: json[0].name,
      overAllScore: this.reviewSums(json[0].reviews),
      });
    });
  };

  qualitysum(str, reviewarr)
  {
    var total = 0;
    if (reviewarr.length = 0){
      return 0;
    }
    else{
      reviewarr.forEach(function(review) {
        review.ratings.forEach(function(rating){
           if (str.valueOf() == rating.name.valueOf()){
            total = total + rating.score;
          }
        })
      })
      return total/reviewarr.length;
    }
  }

  tesums(arr){
    if (arr.length = 0){
      return 0;
    }
    else{
      return (this.qualitysum("Sufficient Accommodations", arr) + this.qualitysum("Supportive Team", arr)
       + this.qualitysum("Accepting manager", arr) + this.qualitysum("Good HR resources", arr))/4.0;
    }
  }
  cgsums(arr){
    if (arr.length = 0){
      return 0;
    }
    else{
      return (this.qualitysum("Career Counseling", arr) + this.qualitysum("Opportunities for career advancement", arr)
       + this.qualitysum("Learning Opportunities", arr) + this.qualitysum("Mentorship opportunities for employees with disabilities", arr))/4.0;
    }
  }
  aasums(arr){
    if (arr.length = 0){
      return 0;
    }
    else{
      return (this.qualitysum("Company Leadership supportive of people with disabilities", arr) + this.qualitysum("Accessibility of Company’s products/services", arr)
       + this.qualitysum("Company values accessibility", arr) + this.qualitysum("General diversity & inclusion in the company", arr))/4.0;
    }
  }

  reviewSums(arr){
    return  (this.aasums(arr) + this.cgsums(arr) + this.tesums(arr))/3;
  }

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
  //render() {
    // return (
    //   <div id="layout-content" className="layout-content-wrapper">
    //   <h3>{this.state.companyName}</h3>
    //     <h3>{this.state.teamEnvironment}</h3>
    //     <h3>{this.state.careerGrowth}</h3>
    //     <h3>{this.state.accessibilityAttitudes}</h3>
    //     <h3>{this.state.overAllScore}</h3>
    //
    //   <a href='https://www.glassdoor.com/index.htm'>powered by <img src='https://www.glassdoor.com/static/img/api/glassdoor_logo_80.png' title='Job Search' /></a>
    //   </div>
    // );
//  }
}
export default Company;
