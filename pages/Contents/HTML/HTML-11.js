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



import './index.css';
import Content from "layouts/Content.js";


class Header extends React.Component {
  render() {
    return (

      <div className="header bg-gradient-info pb-8 pt-5 pt-md-8">
        <Container fluid>
          <div className="header-body">
            <Row>
              <Col xl="6">
              <h1 style={{fontSize:"200%",color:"#fff",fontFamily:"Roboto"}}>HTML5</h1>
              
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
                      <h2 className="text-white mb-0">HTML5</h2>
                    </div>
                    <div className="col">
                      
                    </div>
                  </Row>
                </CardHeader>
                <CardBody className="text-white " style={{  textAlign: "left" }}>
                When writing HTML5 documents, one of the first new features that you'll notice is the doc type declaration:<br />
          <strong>&lt;!DOCTYPE HTML&gt; </strong><br />
                The character encoding (charset) declaration is also simplified:&lt;<strong>meta charset="UTF-8"</strong>&gt;<br />
          <strong>New Elements in HTML5</strong><br />
          <span className="text-info"><strong>  &lt;article&gt;, &lt;aside&gt;, &lt;audio&gt;, &lt;canvas&gt;, &lt;datalist&gt;,</strong></span>
          <strong>&lt;details&gt;,</strong>
          <span className="text-info"><strong> &lt;embed&gt;, &lt;footer&gt;, &lt;header&gt;, <br />&lt;nav&gt;, </strong></span>
          <strong>&lt;output&gt;,</strong>
          <span className="text-info"><strong> &lt;progress&gt;,&lt;section&gt;, &lt;video&gt;,</strong></span> and even more!<br />
                The default character encoding in HTML5 is UTF-8.<br /><br />
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
          HTML5
                  </Button>
                  <Button outline
                    color="warning"
                    href="#tdp"
                    className="d-block w-100 text-left my-1 mx-0"
                    size="sm"
                  >
                Forms
                  </Button>
                  <Button outline
                    color="warning"
                    href="#tdp"
                    className="d-block w-100 text-left my-1 mx-0"
                    size="sm"
                  >
           Integrated API 
                  </Button>
                  
                  </CardBody>
              </Card>
            </Col>
          </Row>
          <Row className="mt-5">
            <Col className="mb-5 mb-xl-0" xl="9" >
            <h1><strong>New in HTML5</strong></h1><br />

<strong>Forms</strong><br />
      - The Web Forms 2.0 specification allows for creation of more powerful forms and more compelling user experiences.<br />
      - Date pickers, color pickers, and numeric stepper controls have been added.<br />
      - Input field types now include email, search, and URL.<br />
      - PUT and DELETE form methods are now supported.<br /><br />

<strong>Integrated API</strong> (Application Programming Interfaces)<br />
      - Drag and Drop<br />
      - Audio and Video<br />
      - Offline Web Applications<br />
      - History<br />
      - Local Storage<br />
      - Geolocation<br />
      - Web Messaging<br />
      You will learn more about these new features in the upcoming lessons.<br />
      Tap the <strong>Continue </strong>button to begin!<br /><br />




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
