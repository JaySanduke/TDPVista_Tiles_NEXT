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

import CSS_img29 from "../../../assets/img/css/css_img29.jpg"
import CSS_img30 from "../../../assets/img/css/css_img30.jpg"
import CSS_img31 from "../../../assets/img/css/css_img31.jpg"

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
                      <h2 className="text-white mb-0">Measurement Units</h2>
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
                    <p>To define an extra space between words, you can use positive measurement values like <strong>px, pt, pc, cm, mm, inches, em, and ex</strong>.</p>
                    <p>Negative values are also permitted. Here is an example to show the difference.</p>
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
The white-space Property
                  </Button>
                  <Button outline
                    color="warning"
                    href="#tdp"
                    className="d-block w-100 text-left my-1 mx-0"
                    size="sm"
                  >
The white-space Values
                  </Button>
                  
                  </CardBody>
              </Card>
            </Col>
          </Row>
          <Row className="mt-5">
            <Col md="9">
              <Card className="text-primary w-50" style={{ backgroundColor: "#EEEEEE", textAlign: "left" }}>
                <strong>
                  <p><strong>The HTML:</strong></p>
                  <p>&lt;p class=&quot;positive&quot;&gt;This paragraph is word-spaced at 20px.&lt;/p&gt;</p>
                  <p>&lt;p class=&quot;negative&quot;&gt;This paragraph is word-spaced at -5px.&lt;/p&gt;</p>
                  <p><strong>The CSS:</strong></p>
                  <p>p.positive &#123;</p>
                  <p><strong>word-spacing: 20px;</strong></p>
                  <p>&#125;</p>
                  <p>p.negative &#123;</p>
                  <p><strong>word-spacing: -5px;</strong></p>
                  <p>&#125;</p>
                </strong>
              </Card>
              
              <p><br/></p>
              <p><strong>Result:</strong></p>
              <p><br/></p>

              <Card className="imgclasss w-50">
                <img src={CSS_img29}></img>
              </Card>

              <h1><strong>The white-space Property</strong></h1>
              <p><br/></p>
              <p>The white-space property specifies how white-space inside an element is handled. The values can be set as <strong>normal, inherit, nowrap</strong>, etc.</p>
              <p><br/></p>
              <p>The <strong>nowrap</strong> value makes the text continue on the same line until a &lt;br&gt; tag is encountered, and also collapses all sequences of whitespace into a single whitespace.</p>
              <p><br/></p>

              <Card className="text-primary w-50" style={{ backgroundColor: "#EEEEEE", textAlign: "left" }}>
                <strong>
                  <p><strong>The HTML:</strong>&lt;p&gt;</p>
                  <p>This paragraph has multiple spaces and</p>
                  <p>a line break, but it will be ignored, as we used the nowrap value.</p>
                  <p>&lt;/p&gt;</p>
                  <p><strong>The CSS:</strong></p>
                  <p>p &#123;</p>
                  <p>white-space: nowrap;</p>
                  <p>&#125;</p>
                </strong>
              </Card>
              
              <p><br/></p>
              <p><strong>Result:</strong></p>
              <p><br/></p>

              <Card className="imgclasss w-50">
                <img src={CSS_img30}></img>
              </Card>

              <p>The text will continue on the same line until a &lt;br /&gt; tag is encountered.</p>

              <h1><strong>The white-space Values</strong></h1>
              <p><br/></p>
              <p>The white-space property also supports other values:</p>
              <p><strong>pre</strong> - text will only wrap on line breaks and white space</p>
              <p><strong>pre-line </strong>- text will wrap where there is a break in code, but extra white space is still ignored</p>
              <p><strong>pre-wrap</strong> - text will wrap when necessary, and on line breaks</p>
              <p><br/></p>
              <p>Here is an example in which all three values are used:</p>
              <p><br/></p>

              <Card className="text-primary w-50" style={{ backgroundColor: "#EEEEEE", textAlign: "left" }}>
                <strong>
                  <p><strong>The HTML:</strong></p>
                  <p>&lt;p class=&quot;pre&quot;&gt;</p>
                  <p>In the markup we have multiple spaces</p>
                  <p>and a line break.</p>
                  <p>&lt;/p&gt;</p>
                  <p>&lt;p class=&quot;preline&quot;&gt;</p>
                  <p>In the markup we have multiple spaces</p>
                  <p>and a line break, but in the result multiple spaces are ignored.</p>
                  <p>&lt;/p&gt;</p>
                  <p>&lt;p class=&quot;prewrap&quot;&gt;</p>
                  <p>In the markup we have multiple</p>
                  <p>spaces and a line break.</p>
                  <p>&lt;/p&gt;</p>
                  <p><strong>The CSS:</strong></p>
                  <p>p.pre &#123;</p>
                  <p><strong>white-space: pre;</strong></p>
                  <p>&#125;</p>
                  <p>p.preline &#123;</p>
                  <p><strong>white-space: pre-line;</strong></p>
                  <p>&#125;</p>
                  <p>p.prewrap &#123;</p>
                  <p><strong>white-space: pre-wrap;</strong></p>
                  <p>&#125;</p>
                </strong>
              </Card>
              
              <p><br/></p>
              <p><strong>Result:</strong></p>
              <p><br/></p>

              <Card className="imgclasss w-50">
                <img src={CSS_img31}></img>
              </Card>

              <p><strong>Pre-wrap</strong> value behaves as the <strong>pre</strong> value, except that it adds extra line breaks to prevent the text breaking out of the element&apos;s box.</p>
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