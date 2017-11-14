import starRatings from 'star-ratings'
import StarRatingComponent from 'react-star-rating-component';
import "bootstrap/dist/css/bootstrap.css";
import React, { Component } from 'react';
import { Navbar, NavItem, Nav, Grid, Row, Col } from "react-bootstrap";
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';


class MainTable extends Component {
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
      console.log("table json",json);
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
        <div className="table">
        <thead>
        <tr>
          <th>Company</th>
          <th>Team Enviorment</th>
          <th>Career Growth</th>
          <th>Accessibility Attitudes</th>
          <th>Over-All Score</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>companyName</td>
            <td>teamEnviorment</td>
            <td>careerGrowth</td>
            <td>accessibilityAttitudes</td>
            <td>overAllScore</td>
          </tr>
          </tbody>
        </div>
      );
    }
}

export default MainTable;
