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

        </div>
      );
    }
}

export default CompanyTable;
