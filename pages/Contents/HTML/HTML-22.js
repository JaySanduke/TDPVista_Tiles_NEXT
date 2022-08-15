import React from "react";
// node.js library that concatenates classes (strings)
import classnames from "classnames";
// javascipt plugin for creating charts
import Chart from "chart.js";
// react plugin used to create charts
import { Line, Bar } from "react-chartjs-2";
// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  NavItem,
  NavLink,
  Nav,
  Progress,
  Table,
  Container,
  Row,
  Col
} from "reactstrap";

// core components
import {
  chartOptions,
  parseOptions,
  chartExample1,
  chartExample2
} from "variables/charts.js";


import Content from "layouts/Content.js";

import './index.css';
import Html_img41 from "../../../assets/img/html/Html_img41.jpeg";
import Html_img42 from "../../../assets/img/html/Html_img42.jpeg";
import Html_img43 from "../../../assets/img/html/Html_img43.jpeg";



class Header extends React.Component {
  render() {
    return (

      <div className="header bg-gradient-info pb-8 pt-5 pt-md-8">
        <Container fluid>
          <div className="header-body">
            <Row>
              <Col xl="6">
              <h1 style={{fontSize:"200%",color:"#fff",fontFamily:"Roboto"}}>HTML5 Forms</h1>
              
              </Col>
             
             
            </Row>
           
          </div>
        </Container>
      </div>
    )
  }
}


class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeNav: 1,
      chartExample1Data: "data1"
    };
    if (window.Chart) {
      parseOptions(Chart, chartOptions());
    }
  }
  toggleNavs = (e, index) => {
    e.preventDefault();
    this.setState({
      activeNav: index,
      chartExample1Data:
        this.state.chartExample1Data === "data1" ? "data2" : "data1"
    });
  };
  render() {
    return (
      <>
        <Header />
        {/* Page content */}
        <Container className="mt--7" fluid>
          <Row>
            <Col className="mb-5 mb-xl-0" xl="8">
              <Card className="bg-gradient-default shadow">
                <CardHeader className="bg-transparent">
                  <Row className="align-items-center">
                    <div className="col">
                      <h6 className="text-uppercase text-light ls-1 mb-1">
                        Overview
                      </h6>
                      <h2 className="text-white mb-0">HTML5 Forms</h2>
                    </div>
                    <div className="col">
                     
                    </div>
                  </Row>
                </CardHeader>
                <CardBody className="text-white " style={{  textAlign: "left" }}>
                HTML5 brings many features and improvements to web form creation. <br />
                  There are new attributes and input types that were introduced to help create better experiences for web users.<br /><br />

                  Form creation is done in HTML5 the same way as it was in HTML4:<br />
                  &lt;form&gt;<br />
                  &lt;label&gt;Your name:&lt;/label&gt;<br />
                  &lt;input id="user" name="username" type="text" /&gt;<br />
                  &lt;/form&gt;

                </CardBody>
              </Card>
            </Col>
            <Col xl="4">
              <Card className="shadow">
                <CardHeader className="bg-transparent">
                  <Row className="align-items-center">
                    <div className="col">
                      <h6 className="text-uppercase text-muted ls-1 mb-1">
                        Course
                      </h6>
                      <h2 className="mb-0">Modern Web Design</h2>
                    </div>
                  </Row>
                </CardHeader>
                <CardBody>
                  <Button outline
                    color="warning"
                    href="#tdp"
                    className="d-block w-100 text-left my-1 mx-0"
                    size="sm"
                  >
New Attributes
                  </Button>
                  <Button outline
                    color="warning"
                    href="#tdp"
                    className="d-block w-100 text-left my-1 mx-0"
                    size="sm"
                  >
   Forms with Required Fields
                  </Button>
                  <Button outline
                    color="warning"
                    href="#tdp"
                    className="d-block w-100 text-left my-1 mx-0"
                    size="sm"
                  >
  HTML5 added several new input types:
                  </Button>
                  <Button outline
                    color="warning"
                    href="#tdp"
                    className="d-block w-100 text-left my-1 mx-0"
                    size="sm"
                  >
  New input attributes in HTML5
                  </Button>
                  </CardBody>
              </Card>
            </Col>
          </Row>
          <Row className="mt-5">
            <Col className="mb-5 mb-xl-0" xl="9" >
           
            <Card className="text-white w-50 bg-info">
            Use the novalidate attribute to avoid form validation on submissions.
                  </Card><br />
                  Use the novalidate attribute to avoid form validation on submissions.<br /><br />

                  <h1><strong>New Attributes</strong></h1><br />

                  HTML5 has introduced a new attribute called <strong>placeholder. </strong><br />
                   On <span className="text-info"><strong> &lt;input&gt;</strong></span>
                   and <span className="text-info"><strong>&lt;textarea&gt;</strong></span> elements, this attribute provides a hint <br />
                   to the user of what information can be entered into the field.<br /><br />
                   <Card className="text-primary w-50 p-2" style={{ backgroundColor: "#EEEEEE", textAlign: "left" }}>  
                  &lt;form&gt;<br />
                  &lt;label for="email"&gt;Your e-mail address: &lt;/label&gt; <br />
                  &lt;input type="text" name="email" <strong>placeholder </strong>="email@example.com" /&gt; <br />
                  &lt;/form&gt;
                  </Card>
                  <br />

          <h2><strong>Result:</strong></h2>
          <Card className="imgclasss w-50">
            <img src={Html_img41}></img>
          </Card><br />
          The <strong>autofocus </strong> attribute makes the desired input focus when the form loads:<br /><br />
          <Card className="text-primary w-50 p-2" style={{ backgroundColor: "#EEEEEE", textAlign: "left" }}>  
            
                &lt;form&gt; <br />
                &lt;label for="email"&gt;Your e-mail address: &lt;/label&gt; <br />
                &lt;input type="text" name="email" <strong>autofocus </strong>/&gt; <br />
                &lt;/form&gt; <br />
</Card> <br />
                <h2><strong>Result:</strong></h2>
          <Card className="imgclasss w-50">
            <img src={Html_img42}></img>
          </Card><br />
          <Card className="text-white w-50 bg-info">
            The required attribute tells the browser that the input is required.
                  </Card><br />

          <h1><strong>Forms with Required Fields</strong></h1>

                  The <strong> </strong>"required" attribute is used to make the input elements required.<br /><br />
                  <Card className="text-primary w-50 p-2" style={{ backgroundColor: "#EEEEEE", textAlign: "left" }}>  
                  &lt;form <strong>autocomplete </strong>="off"&gt;<br />
                  &lt;label for="e-mail"&gt;Your e-mail address: &lt;/label&gt;<br />
                  &lt;input name="Email" type="text" required /&gt;<br />
                  &lt;input type="submit" value="Submit"/&gt;<br />
                  &lt;/form&gt;<br />
                  </Card><br />
                  The form will not be submitted without filling in the required fields.<br /><br />
          <h2><strong>Result:</strong></h2><br />
          <Card className="imgclasss w-50">
            <img src={Html_img43}></img>
          </Card><br /><br />
          <Card className="text-white w-50 bg-info">
            The <strong>autocomplete  </strong>attribute specifies whether a form or input field should have <br />
                autocomplete turned on or off.When autocomplete is on, the browser automatically complete<br />
                 values based on values that the user has entered before.<br />
          </Card><br /><br />

          <h1><strong><u>HTML5 added several new input types:</u></strong></h1>
                - color<br />
                - date<br />
                - datetime<br />
                - datetime-local<br />
                - email<br />
                - month<br />
                - number<br />
                - range<br />
                - search<br />
                - tel<br />
                - time<br />
                - url<br />
                - week<br /><br />

          <h1><strong><u>New input attributes in HTML5:</u></strong></h1>
                - autofocus<br />
                - form<br />
                - formaction<br />
                - formenctype<br />
                - formmethod<br />
                - formnovalidate<br />
                - formtarget<br />
                - height and width<br />
                - list<br />
                - min and max<br />
                - multiple<br />
                - pattern (regexp)<br />
                - placeholder<br />
                - required<br />
                - step<br /><br />
          <Card className="text-white w-50 bg-info">
            Input types that are not supported by old web browsers, will behave as input type text.
                </Card><br />
 
                </Col>
            <Col xl="3">
            </Col>
          </Row><br /><br />
          <div className="col">
                     
                    </div>
        </Container>
      </>
    );
  }
}
Index.layout = Content;

export default Index;
