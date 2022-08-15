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


import JS_img12 from "../../../assets/img/js/js_img12.jpg"

class Header extends React.Component {
  render() {
    return (

      <div className="header bg-gradient-info pb-8 pt-5 pt-md-8">
        <Container fluid>
          <div className="header-body">
            <Row>
              <Col xl="6">
              <h1 style={{fontSize:"200%",color:"#fff",fontFamily:"Roboto"}}>JavaScript</h1>
              
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
                      <h2 className="text-white mb-0">The if Statement</h2>
                    </div>
                    <div className="col">
                      <Nav className="justify-content-end" pills>
                        <NavItem>
                          <NavLink
                            className={classnames("py-2 px-3", {
                              active: this.state.activeNav === 1
                            })}
                            href="#pablo"
                            onClick={e => this.toggleNavs(e, 1)}
                          >
                            <span className="d-none d-md-block">Prev</span>
                            <span className="d-md-none">P</span>
                          </NavLink>
                        </NavItem>
                        <NavItem>
                          <NavLink
                            className={classnames("py-2 px-3", {
                              active: this.state.activeNav === 2
                            })}
                            data-toggle="tab"
                            href="#pablo"
                            onClick={e => this.toggleNavs(e, 2)}
                          >
                            <span className="d-none d-md-block">Next</span>
                            <span className="d-md-none">N</span>
                          </NavLink>
                        </NavItem>
                      </Nav>
                    </div>
                  </Row>
                </CardHeader>
                <CardBody className="text-white" style={{  textAlign: "left" }}>
                <div className="text-light">
                    <p>Very often when you write code, you want to perform different actions based on different conditions.</p>
                  <p>You can do this by using <strong>conditional statements</strong> in your code.</p>
                  <p><br/></p>
                  </div>
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
                                 
                  </CardBody>
              </Card>
            </Col>
          </Row>
          <Row className="mt-5">
            <Col md="9">
            <p>Use <strong>if</strong> to specify a block of code that will be executed if a specified condition is true.if (condition) &#123;</p>
              <p>statements</p>
              <p>&#125;</p>
              <p>The statements will be executed only if the specified condition is <strong>true</strong>.</p>
              <p><br/></p>
              <p><strong>Example:</strong></p>

              <Card className="text-primary w-50" style={{ backgroundColor: "#EEEEEE", textAlign: "left" }}>
                <strong>
                  <p>var myNum1 = 7;</p>
                  <p>var myNum2 = 10;</p>
                  <p>if (myNum1 &lt; myNum2) &#123;</p>
                  <p>alert(&quot;JavaScript is easy to learn.&quot;);</p>
                  <p>&#125;</p>
                  <p><br/></p>
                </strong>
              </Card>
              
              <p><strong>Result:</strong></p>

              <Card className="imgclasss w-50">
                <img src={JS_img12}></img>
              </Card>

              <p>As seen in the picture above, the JavaScript <strong>alert()</strong> method is used to generate a popup alert box that contains the information provided in parentheses.</p>
              <p>This is another example of a <strong>false</strong> conditional statement.</p>

              <Card className="text-primary w-50" style={{ backgroundColor: "#EEEEEE", textAlign: "left" }}>
                <strong>
                  <p>var myNum1 = 7;</p>
                  <p>var myNum2 = 10;</p>
                  <p>if (myNum1 <strong>&gt;</strong> myNum2) &#123;</p>
                  <p>alert(&quot;JavaScript is easy to learn.&quot;);</p>
                  <p>&#125;</p>
                  <p><br/></p>
                </strong>
              </Card>
              
              <p>As the condition evaluates to false, the alert statement is skipped and the program continues with the line after the if statement&apos;s closing curly brace.</p>
              <p>Note that if is in lowercase letters. Uppercase letters (If or IF) will generate an error.</p>
              <p><br/></p>
            </Col>
            <Col xl="3">
              
            </Col>
          </Row>
          <div className="col">
            <Nav className="justify-content-center" pills>
              <NavItem>
                <NavLink
                  className={classnames("py-2 px-3", {
                    active: this.state.activeNav === 1
                  })}
                  href="#pablo"
                  onClick={e => this.toggleNavs(e, 1)}
                >
                  <span className="d-none d-md-block">Prev</span>
                  <span className="d-md-none">P</span>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className={classnames("py-2 px-3", {
                    active: this.state.activeNav === 2
                  })}
                  data-toggle="tab"
                  href="#pablo"
                  onClick={e => this.toggleNavs(e, 2)}
                >
                  <span className="d-none d-md-block">Next</span>
                  <span className="d-md-none">N</span>
                </NavLink>
              </NavItem>
            </Nav>
          </div>
        </Container>
      </>
    );
  }
}
Index.layout = Content;
export default Index;