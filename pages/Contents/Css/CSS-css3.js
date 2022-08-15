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

import CSS_img73 from "../../../assets/img/css/css_img73.jpg"
import CSS_img74 from "../../../assets/img/css/css_img74.jpg"

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
                      <h2 className="text-white mb-0">CSS3</h2>
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
                      <p>CSS3 is the latest standard for CSS.</p>
                      <p>CSS3 is completely backwards-compatible with earlier CSS versions.</p>
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
CSS3: New Features
                  </Button>
                  <Button outline
                    color="warning"
                    href="#tdp"
                    className="d-block w-100 text-left my-1 mx-0"
                    size="sm"
                  >
CSS Vendor Prefixes
                  </Button>
                  <Button outline
                    color="warning"
                    href="#tdp"
                    className="d-block w-100 text-left my-1 mx-0"
                    size="sm"
                  >
Browser Prefixes
                  </Button>
                  
                </CardBody>
              </Card>
            </Col>
          </Row>
          <Row className="mt-5">
            <Col md="9">
              <p>Some of the most significant new features are:</p>
              <p><strong>Border radius</strong> - allows us to create rounded corners for elements.</p>
              <p><strong>Border images</strong> - allows us to specify an image as the border around an element.</p>
              <p><strong>Multiple backgrounds</strong> - applies multiple backgrounds to elements.</p>
              <p><strong>Animations and effects,</strong> and much more!</p>
              <p>There are lots of other great features that will be discussed in upcoming lessons.</p>
              <p><br/></p>
              
              <h1><strong>CSS3: New Features</strong></h1>
              <p>To make web development easier and faster, CSS3 introduces additional new features, including the following:</p>
              <p><br/></p>
              <p><strong>Box Shadow</strong></p>
              <p>With the box-shadow property, you can attach one or more shadows to an element by specifying values for color, size, blur, and offset.</p>
              <p><br/></p>
              <p><strong>Gradients</strong></p>
              <p>CSS3 gradients allow us to set the background color of the element to a gradient. Two types of gradients are available: <strong>Linear</strong> and <strong>Radial</strong>.</p>
              <p>Most of the new features have been implemented by major web browsers, so you can already enjoy the power of CSS3.</p>
              <p><br/></p>
              <p><strong>Transforms</strong> allow you to <strong>rotate, scale, move,</strong> and <strong>skew</strong> elements.</p>
              <p><br/></p>
              <p>Another popular feature is <strong>Transitions</strong> which allows you to animate from one CSS property value to another. You can combine it with transforms and animate the element&apos;s position, rotation, or scale.</p>
              <p><br/></p>
              <p>The property attracting the most attention is <strong>Animations</strong>.</p>
              <p>CSS Animations have their own specifications, and they allow you to create <strong>keyframes</strong>, set duration, easing, and more.</p>
              <p>Most of the new features have been implemented by major web browsers, so you can already enjoy the power of CSS3.</p>
              <p><br/></p>
              
              <h1><strong>CSS Vendor Prefixes</strong></h1>
              <p>CSS vendor prefixes or CSS browser prefixes are a way for browser makers to add support for new CSS features during periods of testing and experimentation. Browser prefixes are used to add new features that may not be part of the final and formal CSS specification.</p>
              <p><br/></p>
              <p>For example, the prefix for Safari and Chrome is <strong>-webkit</strong>. The <strong>border-radius</strong> property is currently supported in Chrome, Safari, and Mozilla, as long as it is accompanied by the browser prefix.</p>
              <p>To specify the <strong>border-radius</strong> in Chrome and Safari, the following syntax is used:</p>
              <p>-<strong>webkit</strong>-border-radius: 24px;</p>
              <p><br/></p>
              <p><strong>Result:</strong></p>
              <p><br/></p>

              <Card className="imgclasss w-50">
              <img src={CSS_img73}></img>
              </Card>

              <p>The prefix is added to the property to make it work in the unsupported browsers. So, you might end up with multiple definitions of the same property, each with the specific browser prefix.</p>
              <p>While most browsers today will work without prefixes, it is essential to know these for backwards capability and understanding older codes.</p>
              <p><br/></p>

              <h1><strong>Browser Prefixes</strong></h1>
              <p>Here is the list of vendor prefixes for each browser:</p>

              <Card className="imgclasss w-50">
              <img src={CSS_img74}></img>
              </Card>

              <p>It might feel annoying and repetitive to have to write the properties two to five times to get them to work in all browsers, but it&apos;s temporary. As browsers improve, they add support for the standards based version of the properties, and you can remove the prefixed versions.</p>
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