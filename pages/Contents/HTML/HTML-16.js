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

import Html_img25 from "../../../assets/img/html/Html_img25.jpeg";


class Header extends React.Component {
  render() {
    return (

      <div className="header bg-gradient-info pb-8 pt-5 pt-md-8">
        <Container fluid>
          <div className="header-body">
            <Row>
              <Col xl="6">
              <h1 style={{fontSize:"200%",color:"#fff",fontFamily:"Roboto"}}>Progress Bar</h1>
              
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
                      <h2 className="text-white mb-0">Progress Bar</h2>
                    </div>
                    <div className="col">
                      
                    </div>
                  </Row>
                </CardHeader>
                <CardBody className="text-white " style={{  textAlign: "left" }}>
                The <span className="text-info"><strong> &lt;progress&gt;</strong></span> element provides the ability to create progress bars on the web.<br />
                The progress element can be used within headings, paragraphs, or anywhere else in the body.<br /><br />
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
  Progress Element Attributes
                  </Button>
                 
                  
                  </CardBody>
              </Card>
            </Col>
          </Row>
          <Row className="mt-5">
            <Col className="mb-5 mb-xl-0" xl="9" >
         
           <h1> <strong>  Progress Element Attributes</strong></h1><br /><br />
          <strong> Value</strong>: Specifies how much of the task has been completed.<br />
          <strong> Max</strong>: Specifies how much work the task requires in total.<br /><br />

          <strong> Example:</strong><br /><br />
                Status:<br />
                 &lt;progress min="0" <strong> max</strong>="100" <strong> value</strong>="35"&gt;<br />
          <strong> &lt;/progress&gt;</strong><br /><br />

          <h2><strong>Result:</strong></h2><br />
          <Card className="imgclasss w-50">
            <img src={Html_img25}></img>
          </Card><br />
          <Card  className="text-white w-50 bg-info">
            Use the &lt;progress&gt; tag in conjunction with JavaScript to dynamically display a task's progress.
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
