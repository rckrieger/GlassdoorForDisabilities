import React, { Component } from 'react';
import { Navbar, NavItem, Nav, Grid, Row, Col } from "react-bootstrap";
import Form from "react-jsonschema-form";

const schema = {
  title: "Todo",
  type: "object",
  required: ["title"],
  properties: {
    title: {type: "string", title: "Title", default: "A new task"},
    done: {type: "boolean", title: "Done?", default: false}
  }
};

const log = (type) => console.log.bind(console, type);


class Addemployeereview extends Component {

  constructor(reviewid) {
    super(reviewid);
    //cal api here
    this.props = {
      detailsjson: props.person,
    };
  }

  render() {
    return (
      <div>
      (
        <Form schema={schema}
              onChange={log("changed")}
              onSubmit={log("submitted")}
              onError={log("errors")} />
        ), document.getElementById("app"));
      <div>

    );
  }
}
