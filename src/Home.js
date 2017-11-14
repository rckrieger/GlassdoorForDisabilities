import starRatings from 'star-ratings'
import StarRatingComponent from 'react-star-rating-component';
import "bootstrap/dist/css/bootstrap.css";
import React, { Component } from 'react';
import { Navbar, NavItem, Nav, Grid, Row, Col } from "react-bootstrap";
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import Search from 'react-search-box';


class Home extends Component {
  componentDidMount() {
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
    constructor()
    {
      super();
      this.state = {
        activePlace: 0,
        companyArray:[]
      };
    }
    render() {


      return (
        <div className="Search">
        <Search/>
        <img src = "https://www.childbirthinjuries.com/wp-content/uploads/disability-equality-index.jpg"/>
          <p>
          Why hire through RampedUp? <br/>
          </p>
          <ul>
          <li> - 80% of high performance companies reported a positive experience working with Intellectual or Developmental Disabilities individuals.</li>
          <li> - Actively share your company's perspective that workers of all abilities bring different strengths to the company's mission.</li>
          </ul>


          <p>
Why should you use RampedUp during your job search? </p>
<ul>
  <li>-Discover companies that understand the experiences of disabled employees and harvest a culture where they feel safe to openly discuss their needs.</li>
  <li>-Learn which accommodations for your specific disability you can expect to receive at a company.</li>
          </ul>

<p>If we had more time we would add...</p>
<ul>
<li>-A platform for companies to respond about comments on their treatment of disabled employees. Allow this to become a platform where employees and employers can discuss the needs.</li>
<li>-The ability to filter out jobs based on specific needs. (Example: Minimum Travel, Low Stress, Minimal Physical Demand)</li>
</ul>
        </div>
      );
    }
}

export default Home;
