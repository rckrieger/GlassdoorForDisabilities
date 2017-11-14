import starRatings from 'star-ratings'
import StarRatingComponent from 'react-star-rating-component';
import "bootstrap/dist/css/bootstrap.css";
import React, { Component } from 'react';
import { Navbar, NavItem, Nav, Grid, Row, Col } from "react-bootstrap";
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';


class CompanyTable extends Component {

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
          <th>{companyName}</th>
          <th>{teamEnviorment}</th>
          <th>{careerGrowth}</th>
          <th>{accessibilityAttitudes}</th>
          <th>{overAllScore}</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>John</td>
            <td>Doe</td>
            <td>john@example.com</td>
          </tr>
        </div>
      );
    }
}

export default CompanyTable;
