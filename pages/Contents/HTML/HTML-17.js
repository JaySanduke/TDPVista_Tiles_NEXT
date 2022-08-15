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
import Content from "layouts/Content.js";

// core components
import {
  chartOptions,
  parseOptions,
  chartExample1,
  chartExample2
} from "variables/charts.js";



import './index.css';
import Html_img24 from "../../../assets/img/html/Html_img24.jpeg";

class Header extends React.Component {
  render() {
    return (

      <div className="header bg-gradient-info pb-8 pt-5 pt-md-8">
        <Container fluid>
          <div className="header-body">
            <Row>
              <Col xl="6">
              <h1 style={{fontSize:"200%",color:"#fff",fontFamily:"Roboto"}}>HTML5 Web Storage</h1>
              
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
                      <h2 className="text-white mb-0">HTML5 Web Storage</h2>
                    </div>
                    <div className="col">
                     
                    </div>
                  </Row>
                </CardHeader>
                <CardBody className="text-white " style={{  textAlign: "left" }}>
                With HTML5 web storage, websites can store data on a user's local computer.<br />
                  Before HTML5, we had to use <strong> JavaScript cookies</strong> to achieve this functionality.<br /><br />
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
   Types of Web Storage Objects
                  </Button>
                  <Button outline
                    color="warning"
                    href="#tdp"
                    className="d-block w-100 text-left my-1 mx-0"
                    size="sm"
                  >
          Working with Values
                  </Button>
                 
                  
                  </CardBody>
              </Card>
            </Col>
          </Row>
          <Row className="mt-5">
            <Col className="mb-5 mb-xl-0" xl="9" >
            <strong> The Advantages of Web Storage</strong><br /><br />
                  - More secure<br />
                  - Faster<br />
                  - Stores a larger amount of data<br />
                  - Stored data is not sent with every server request<br /><br />
          <Card  className="text-white w-50 bg-info">
            Local storage is per domain. All pages from one domain can store and access the same data.
                  </Card><br />



          <h1><strong>Types of Web Storage Objects</strong></h1><br />


                  There are two types of web storage objects:<br /><br />
                  - <strong> sessionStorage()</strong><br />
                  - <strong> localStorage()</strong><br /><br />

          <strong> Local </strong>vs. <strong> Session</strong><br /><br />
                  - Session Storage is destroyed once the user closes the browser<br />
                  - Local Storage stores data with no expiration date<br /><br />
          <Card className="text-white w-50 bg-info" >
            You need to be familiar with basic JavaScript in order to understand and use the API.
                  </Card><br />


          <h1><strong>Working with Values</strong></h1><br />

                  The syntax for web storage for both local and session storage is very simple and similar.<br />
                  The data is stored as key/value pairs.<br /><br />

          <strong> Storing a Value:</strong>localStorage.<strong>setItem </strong>("key1", "value1");<br />
          <strong> Getting a Value:</strong>//this will print the value<br />
                  alert(localStorage.<strong>getItem </strong>("key1")); <br />
          <strong> Removing a Value:</strong>localStorage.<strong> removeItem</strong>("key1");<br />
          <strong> Removing All Values:</strong>localStorage.<strong>clear() </strong>;<br /><br />

          <Card className="text-white w-50 bg-info">
            The same syntax applies to the session storage, with one difference: Instead of localStorage, sessionStorage is used.
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
