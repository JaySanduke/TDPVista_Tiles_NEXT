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
import Html_img44 from "../../../assets/img/html/Html_img44.jpeg";
import Html_img45 from "../../../assets/img/html/Html_img45.jpeg";



class Header extends React.Component {
  render() {
    return (

      <div className="header bg-gradient-info pb-8 pt-5 pt-md-8">
        <Container fluid>
          <div className="header-body">
            <Row>
              <Col xl="6">
              <h1 style={{fontSize:"200%",color:"#fff",fontFamily:"Roboto"}}>HTML search box</h1>
              
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
                      <h2 className="text-white mb-0">Creating a Search Box</h2>
                    </div>
                    <div className="col">
                     
                    </div>
                  </Row>
                </CardHeader>
                <CardBody className="text-white " style={{  textAlign: "left" }}>
                The new <strong>search </strong> input type can be used to create a search box:<br />
               &lt;input id="mysearch" name="searchitem" type= <strong>"search" </strong> /&gt;<br />
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
Creating a Search Box
                  </Button>
                  <Button outline
                    color="warning"
                    href="#tdp"
                    className="d-block w-100 text-left my-1 mx-0"
                    size="sm"
                  >
  Search Options
                  </Button>
                 
                  </CardBody>
              </Card>
            </Col>
          </Row>
          <Row className="mt-5">
            <Col className="mb-5 mb-xl-0" xl="9" >
           
           
            <h2><strong>Result:</strong></h2><br />
          <Card className="imgclasss w-50">
            <img src={Html_img44}></img>
          </Card><br />
          <Card className="text-white w-50 bg-info">
            You must remember to set a name for your input; otherwise, nothing will be submitted.
                </Card><br />


          <h1><strong>Search Options</strong></h1>
                The <span className="text-info"><strong> &lt;datalist&gt;</strong></span> tag can be used to define a list of pre-defined options for the search field:<br /><br />
                <Card className="text-primary w-50 p-2" style={{ backgroundColor: "#EEEEEE", textAlign: "left" }}> 
                &lt;input id="car" type="text" <strong>list</strong>="colors" /&gt;<br />
                &lt;<strong>datalist id </strong>="colors"&gt;<br />
                &lt;option value="Red"&gt;<br />
                &lt;option value="Green"&gt;<br />
                &lt;option value="Yellow"&gt;<br />
                &lt;/datalist&gt;<br />
                </Card><br />
          <h2><strong>Result:</strong></h2><br />
          <Card className="imgclasss w-50">
            <img src={Html_img45}></img>
          </Card><br />
          <span className="text-info"><strong> &lt;option&gt; </strong></span> defines the options in a drop-down list for the user to select.<br /><br />
          <Card className="text-white w-50 bg-info">
            The ID of the datalist element must match with the list attribute of the input box.
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
