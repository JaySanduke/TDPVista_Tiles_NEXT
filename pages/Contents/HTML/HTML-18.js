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
import Html_img26 from "../../../assets/img/html/Html_img26.jpeg";

class Header extends React.Component {
  render() {
    return (

      <div className="header bg-gradient-info pb-8 pt-5 pt-md-8">
        <Container fluid>
          <div className="header-body">
            <Row>
              <Col xl="6">
              <h1 style={{fontSize:"200%",color:"#fff",fontFamily:"Roboto"}}>HTML Geolocation</h1>
              
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
                      <h2 className="text-white mb-0">What is the Geolocation API?</h2>
                    </div>
                    <div className="col">
                      
                    </div>
                  </Row>
                </CardHeader>
                <CardBody className="text-white " style={{  textAlign: "left" }}>
                In HTML5, the Geolocation API is used to obtain the user's geographical location.<br />
                  Since this can compromise user privacy, the option is not available unless the user approves it.<br /><br />
            Geolocation is much more accurate for devices with GPS, like smartphones and the like.
              

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
   Using HTML Geolocation
                  </Button>
                  <Button outline
                    color="warning"
                    href="#tdp"
                    className="d-block w-100 text-left my-1 mx-0"
                    size="sm"
                  >
         Presenting Data
                  </Button>
                 
                  
                  </CardBody>
              </Card>
            </Col>
          </Row>
          <Row className="mt-5">
            <Col className="mb-5 mb-xl-0" xl="9" >
         
            <h1><strong>Using HTML Geolocation</strong></h1><br />
                  The Geolocation API’s main method is getCurrentPosition, which retrieves the current geographic <br />
                  location of the user's device.navigator.geolocation.getCurrentPosition();<br />
                  Parameters:<br />
          <strong>showLocation (mandatory) </strong>: Defines the callback method that retrieves location information.<br />
          <strong>ErrorHandler(optional) </strong>: Defines the callback method that is invoked when an error occurs in processing the asynchronous call.<br />
          <strong>Options (optional) </strong>: Defines a set of options for retrieving the location information.<br /><br />
          <Card className="text-white w-50 bg-info">
            You need to be familiar with basic JavaScript in order to understand and use the API.
                  </Card><br />


 
             <h1><strong>Presenting Data</strong></h1><br />
                  User location can be presented in two ways: Geodetic and Civic.<br /><br />

                  1. The geodetic way to describe position refers directly to latitude and longitude.<br />
                  2. The civic representation of location data is presented in a format that is more easily read <br />
                  and understood by the average person.<br /><br />

                  Each parameter has both a geodetic and a civic representation:<br /><br />
          <Card className="imgclasss w-50">
            <img src={Html_img26}></img>
          </Card><br /><br />
          <Card className="text-white w-50 bg-info">
            The getCurrentPosition() method returns an object if it is successful.<br />
            The latitude, longitude, and accuracy properties are always returned.
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
