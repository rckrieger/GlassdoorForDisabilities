import React, { Component } from 'react';
import { Navbar, NavItem, Nav, Grid, Row, Col } from "react-bootstrap";
import Form from "react-jsonschema-form";
import Modal from 'react-awesome-modal';


const schema = {
  type: "object",
  title: "Add Employee Review",
  properties: {
    multipleChoicesList: {
      type: "array",
      title: "Which disabilities affect you?",
      items: {
        type: "string",
        enum: [
          "Visual (I.E Blindness/ loss of vision)",
          "Auditory (I.E Deafness/ hard of hearing)",
          "Physical (I.E Mobility)",
          "Speech (I.E. Stutter, lisp)",
          "Cognitive/Learning (IE ADHD, Depression, Dyslexia, Anxiety)",
          "Neurological (IE Epilepsy, Alzheimers)"
        ]
      },
      "uniqueItems": true
    },
    sufficientAccommodations: {
      type: "number",
      title: "Sufficient Accommodations",
      enum: [
        1,
        2,
        3,
        4,
        5,
      ]
    },
    supportiveTeam: {
      type: "number",
      title: "Supportive Team",
      enum: [
        1,
        2,
        3,
        4,
        5,
      ]
    },
    acceptingManager: {
      type: "number",
      title: "Accepting manager",
      enum: [
        1,
        2,
        3,
        4,
        5,
      ]
    },
    goodHRResources: {
      type: "number",
      title: "Good HR resources",
      enum: [
        1,
        2,
        3,
        4,
        5,
      ]
    },
    careerCounseling: {
      type: "number",
      title: "Career Counseling",
      enum: [
        1,
        2,
        3,
        4,
        5,
      ]
    },
    careerAdvancement: {
      type: "number",
      title: "Opportunities for career advancement",
      enum: [
        1,
        2,
        3,
        4,
        5,
      ]
    },
    learningOpportunities: {
      type: "number",
      title: "Learning Opportunities",
      enum: [
        1,
        2,
        3,
        4,
        5,
      ]
    },
    mentorshipOpportunities: {
      type: "number",
      title: "Mentorship opportunities for employees with disabilities",
      enum: [
        1,
        2,
        3,
        4,
        5,
      ]
    },
    companyLeadership: {
      type: "number",
      title: "Company Leadership supportive of people with disabilities ",
      enum: [
        1,
        2,
        3,
        4,
        5,
      ]
    },
    accessibilityOfProducts: {
      type: "number",
      title: "Accessibility of Company’s products/services ",
      enum: [
        1,
        2,
        3,
        4,
        5,
      ]
    },
    companyValues: {
      type: "number",
      title: "Company values accessibility",
      enum: [
        1,
        2,
        3,
        4,
        5,
      ]
    },
    dAndI: {
      type: "number",
      title: "General diversity & inclusion in the company",
      enum: [
        1,
        2,
        3,
        4,
        5,
      ]
    },
    comment: {
      type: "string",
      title: "Any Comments"
    },

  }
}

const uiSchema = {
  multipleChoicesList: {
    "ui:widget": "checkboxes"
  },
  sufficientAccommodations: {
    "ui:widget": "radio",
    "ui:options": {
      "inline": true
    }
  },
  supportiveTeam: {
    "ui:widget": "radio",
    "ui:options": {
      "inline": true
    }
  },
  sufficientAccommodations: {
    "ui:widget": "radio",
    "ui:options": {
      "inline": true
    }
  },
  acceptingManager: {
    "ui:widget": "radio",
    "ui:options": {
      "inline": true
    }
  },
  goodHRResources: {
    "ui:widget": "radio",
    "ui:options": {
      "inline": true
    }
  },
  careerCounseling: {
    "ui:widget": "radio",
    "ui:options": {
      "inline": true
    }
  },
  careerAdvancement: {
    "ui:widget": "radio",
    "ui:options": {
      "inline": true
    }
  },
  learningOpportunities: {
    "ui:widget": "radio",
    "ui:options": {
      "inline": true
    }
  },
  mentorshipOpportunities: {
    "ui:widget": "radio",
    "ui:options": {
      "inline": true
    }
  },
  companyLeadership: {
    "ui:widget": "radio",
    "ui:options": {
      "inline": true
    }
  },
  accessibilityOfProducts: {
    "ui:widget": "radio",
    "ui:options": {
      "inline": true
    }
  },
  companyValues: {
    "ui:widget": "radio",
    "ui:options": {
      "inline": true
    }
  },
  dAndI: {
    "ui:widget": "radio",
    "ui:options": {
      "inline": true
    }
  },
  comment: {
    "ui:emptyValue": "",
    "ui:widget": "textarea",
    "ui:options": {
      "inline": true
    }
  }
}

const log = (type) => console.log.bind(console, type);

class Addemployeereview extends Component {


  constructor(props) {
          super(props);
          this.state = {
              visible : false
          }
      }

  render() {
    var myHeaders = new Headers();
    const NICKURL = "/api/review/add";
    var reviewArray = [];

    var mySentInit = { method: 'Post',
                   headers: myHeaders,
                   mode: 'no-cors',
                   cache: 'default' };

    return (
      <div className="form" margin="100px">
            <Form schema={schema}
                  onChange={log("changed")}
                  uiSchema={uiSchema}
                  onSubmit={log("submitted")}
                  onError={log("errors")} />
      </div>
    );
  }
}
export default Addemployeereview;
