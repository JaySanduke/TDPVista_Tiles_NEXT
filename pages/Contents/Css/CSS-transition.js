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

import CSS_img111 from "../../../assets/img/css/css_img111.jpg"

class Header extends React.Component {
  render() {
    return (

      <div className="header bg-gradient-info pb-8 pt-5 pt-md-8">
        <Container fluid>
          <div className="header-body">
            <Row>
              <Col xl="6">
              <h1 style={{fontSize:"200%",color:"#fff",fontFamily:"Roboto"}}>CSS</h1>
              
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
                      <h2 className="text-white mb-0">CSS3 Transitions</h2>
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
                    <p>CSS3 transitions allow us to change from one property value to another over a given duration.</p>
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
               
                  <Button outline
                    color="warning"
                    href="#tdp"
                    className="d-block w-100 text-left my-1 mx-0"
                    size="sm"
                  >
The Transition Property
                  </Button>
                  <Button outline
                    color="warning"
                    href="#tdp"
                    className="d-block w-100 text-left my-1 mx-0"
                    size="sm"
                  >
transition-timing-function
                  </Button>
                  
                </CardBody>
              </Card>
            </Col>
          </Row>
          <Row className="mt-5">
            <Col md="9">
              <p><strong>transition-property</strong> - specifies the property to be transitioned</p>
              <p><strong>transition-duration</strong> - specifies the duration over which transitions should occur</p>
              <p><strong>transition-timing-function</strong> - specifies how the pace of the transition changes over its duration</p>
              <p><strong>transition-delay</strong> - specifies a delay (in seconds) for the transition effect</p>
              <p><br/></p>
              <p>In the example below, we set the transition property to <strong>transform</strong>, with a <strong>duration</strong> of 5 seconds, and with an <strong>ease-in</strong> timing function that specifies a transition effect with a slow start.transition: transform 5s ease-in;</p>
              <p>Transition effects can be applied to a wide variety of CSS properties, including <strong>background-color, width, height, opacity</strong>, and many more.</p>
              <p><br/></p>
              
              <h1><strong>The Transition Property</strong></h1>
              <p>In the example below, the div element has width and height of 50px, with a green background. We specified a transition effect for the width property, with a duration of 3 seconds:</p>
              <p><br/></p>
              <p>The CSS will look like this:</p>

              <Card className="text-primary w-50" style={{ backgroundColor: "#EEEEEE", textAlign: "left" }}>
                <strong>
                  <p>div &#123;</p>
                  <p>width: 50px;</p>
                  <p>height: 50px;</p>
                  <p>background: #32CD32;</p>
                  <p><strong>transition: width 3s;</strong></p>
                  <p>&#125;</p>
                  <p>div:hover &#123;</p>
                  <p><strong>width: 250px;</strong></p>
                  <p>&#125;</p>
                </strong>
              </Card>
              
              <p><br/></p>
              <p>If you hover over the div element, it will move from left to right.</p>

              <Card className="imgclasss w-50">
                <img src={CSS_img111}></img>
              </Card>

              <p>When the cursor is moused out of the element, it will gradually change back to its original style.</p>
              <p><br/></p>
              
              <h1><strong>transition-timing-function</strong></h1>
              <p>The <strong>transition-timing-function</strong> property specifies the speed curve of the transition effect.</p>
              <p>It can have the following values:</p>
              <p><strong>ease</strong> - the animation starts slowly, then accelerates quickly.</p>
              <p><strong>ease-in</strong> - starts slowly, then accelerates, and stops abruptly.</p>
              <p><strong>ease-out</strong> - starts quickly, but decelerates to a stop.</p>
              <p><strong>ease-in-out</strong> - similar to ease, but with more subtle acceleration and deceleration.</p>
              <p><strong>linear</strong> - constant speed throughout the animation; often best for color or opacity changes.</p>
              <p><br/></p>
              <p>Finally, we have <strong>cubic-bezier()</strong>, which allows you to define <strong>your own values in the cubic-bezier function</strong>. Possible values are numeric values from 0 to 1.</p>
              <p>transition-timing-function: <strong>cubic-bezier(0,0,1,1);</strong></p>
              <p><br/></p>
              <p>If no timing function is specified, the <strong>default</strong> value is <strong>ease</strong>.</p>
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