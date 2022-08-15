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

import Html_img22 from "../../../assets/img/html/Html_img22.jpeg";

class Header extends React.Component {
  render() {
    return (

      <div className="header bg-gradient-info pb-8 pt-5 pt-md-8">
        <Container fluid>
          <div className="header-body">
            <Row>
              <Col xl="6">
              <h1 style={{fontSize:"200%",color:"#fff",fontFamily:"Roboto"}}>Header and Footer</h1>
              
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
                      <h2 className="text-white mb-0">The &lt;header&gt; Element</h2>
                    </div>
                    <div className="col">
                      
                    </div>
                  </Row>
                </CardHeader>
                <CardBody className="text-white " style={{  textAlign: "left" }}>
                In HTML4, we would define a header like this:&lt;div id="header"&gt;<br />
              In HTML5, a simple <span className="text-info"><strong>&lt;header&gt;</strong></span> tag is used, instead.<br /><br />
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
     The &lt;header&gt; Element
                  </Button>
                  <Button outline
                    color="warning"
                    href="#tdp"
                    className="d-block w-100 text-left my-1 mx-0"
                    size="sm"
                  >
            The &lt;footer&gt; Element
                  </Button>
                 
                  
                  </CardBody>
              </Card>
            </Col>
          </Row>
          <Row className="mt-5">
            <Col className="mb-5 mb-xl-0" xl="9" >
            The <span className="text-info"><strong>&lt;header&gt;</strong></span> element is appropriate for use inside the body tag.<br /><br />
            <Card className="text-primary w-50 p-2" style={{ backgroundColor: "#EEEEEE", textAlign: "left" }}>  
              &lt;!DOCTYPE html&gt;<br />
              &lt;html&gt;<br />
              &lt;head&gt;&lt;/head&gt;<br />
              &lt;body&gt;<br />
          <strong>&lt;header&gt;</strong><br />
              &lt;h1&gt; Most important heading &lt;/h1&gt;<br />
              &lt;h3&gt; Less important heading &lt;/h3&gt;<br />
          <strong>&lt;/header&gt;</strong><br />
              &lt;/body&gt;<br />
              &lt;/html&gt; <br />
</Card><br />
              <Card className="imgclasss w-50">
            <img src={Html_img22}></img>
          </Card><br />

          <h1><strong>The &lt;footer&gt; Element</strong></h1>
              The footer element is also widely used. Generally we refer to a section located at the very bottom of the web page as the footer.<br />
          <strong>&lt;footer&gt;…&lt;/footer&gt;</strong>  <br /><br />
          <Card  className="text-white w-50 bg-info p-2">
            The following information is usually provided between these tags:<br />
              - Contact Information<br />
              - Privacy Policy<br />
              - Social Media Icons<br />
              - Terms of Service<br />
              - Copyright Information<br />
              - Sitemap and Related Documents<br /><br />
          </Card>

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
