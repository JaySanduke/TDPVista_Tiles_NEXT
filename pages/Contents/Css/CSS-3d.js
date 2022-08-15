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

import CSS_img121 from "../../../assets/img/css/css_img121.jpg"
import CSS_img122 from "../../../assets/img/css/css_img122.jpg"
import CSS_img123 from "../../../assets/img/css/css_img123.jpg"
import CSS_img124 from "../../../assets/img/css/css_img124.jpg"

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
                      <h2 className="text-white mb-0">3D Transforms</h2>
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
                    <p>Along with the x and y axes, 3D Transforms introduce the <strong>Z-axis</strong>, which enables 3D manipulations.</p>
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
Translations
                  </Button>
                  <Button outline
                    color="warning"
                    href="#tdp"
                    className="d-block w-100 text-left my-1 mx-0"
                    size="sm"
                  >
Perspective
                  </Button>
                  
                </CardBody>
              </Card>
            </Col>
          </Row>
          <Row className="mt-5">
            <Col md="9">
              <p>3D Transforms are quite similar to 2D Transforms:</p>
              <p>rotateX(), rotateY() and rotateZ() rotate an element in 3D space around the corresponding axis at a given degree.</p>
              <p><br/></p>

              <Card className="text-primary w-50" style={{ backgroundColor: "#EEEEEE", textAlign: "left" }}>
                <strong>
                  <p><strong>The CSS:</strong></p>
                  <p>div.X &#123;</p>
                  <p>transform: <strong>rotateX(150deg)</strong>;</p>
                  <p>&#125;</p>
                  <p>div.Y &#123;</p>
                  <p>transform: <strong>rotateY(150deg)</strong>;</p>
                  <p>&#125;</p>
                  <p>div.Z &#123;</p>
                  <p>transform: <strong>rotateZ(150deg)</strong>;</p>
                  <p>&#125;</p>
                </strong>
              </Card>
              
              <p><br/></p>
              <p><strong>Result:</strong></p>
              <p><br/></p>

              <Card className="imgclasss w-50">
                <img src={CSS_img121}></img>
              </Card>

              <p>You can switch off all transformations applied to an element using the none function: <strong>transform: none</strong>;</p>
              <p><br/></p>
              
              <h1><strong>Translations</strong></h1>
              <p>3D translate methods allow you to move the element <strong>horizontally</strong> (translateX), <strong>vertically</strong> (translateY) and <strong>into or out of the screen</strong> (translateZ), using any CSS length units (px, em, %, etc.). Positive values moves the element toward the viewer, negative values away.</p>
              <p><br/></p>

              <Card className="text-primary w-50" style={{ backgroundColor: "#EEEEEE", textAlign: "left" }}>
                <strong>
                  <p><strong>The CSS:</strong></p>
                  <p>#mybox1 &#123;</p>
                  <p>transform: translateX(29px)&nbsp;</p>
                  <p>translateY(5em)&nbsp;</p>
                  <p>translateZ(-13px);</p>
                  <p>&#125;</p>
                </strong>
              </Card>
              
              <p><br/></p>
              <p><strong>Result</strong> (Before translation):</p>

              <Card className="imgclasss w-50">
                <img src={CSS_img122}></img>
              </Card>

              <p><strong>Result</strong> (After translation):</p>
              <p><br/></p>

              <Card className="imgclasss w-50">
                <img src={CSS_img123}></img>
              </Card>

              <p>The <strong>translate3d()</strong> method allows us to pass the x, y, and z offsets, all at once and in the following order:</p>
              
              <Card className="text-primary w-50" style={{ backgroundColor: "#EEEEEE", textAlign: "left" }}>
                <strong>
                  <p>#mybox1 &#123;</p>
                  <p>transform: translate3d(-20px, 4em, 10px);</p>
                  <p>&#125;</p>
                </strong>
              </Card>
              
              <p><br/></p>
              <p>Like the translate3d() method, there are also <strong>scale3d()</strong> and <strong>rotate3d()</strong>, which are applicable for scaling and rotating elements in 3D.</p>
              <p>Translation of an element is similar to relative positioning - it doesn&apos;t affect the document&apos;s flow. The translated element will keep its position in the flow and will only appear to have moved.</p>
              <p><br/></p>
              
              <h1><strong>Perspective</strong></h1>
              <p><br/></p>
              <p>Perspective defines how the depth of the 3D scene is rendered. Think of perspective as a distance from the viewer to the object. The greater the value, the further the distance, so the less intense the visual effect.</p>
              <p>When defining the perspective property for an element, it is the <strong>child</strong> elements that get the perspective view, <strong>not</strong> the element itself.</p>
              <p><br/></p>

              <Card className="text-primary w-50" style={{ backgroundColor: "#EEEEEE", textAlign: "left" }}>
                <strong>
                  <p><strong>The CSS:</strong></p>
                  <p>div.empty-div &#123;</p>
                  <p><strong>perspective: 100px;</strong></p>
                  <p>&#125;</p>
                  <p>div.green-div &#123;</p>
                  <p><strong>transform: rotateX(45deg);</strong></p>
                  <p>&#125;</p>
                </strong>
              </Card>
              
              <p><br/></p>
              <p><strong>Result:</strong></p>
              <p><br/></p>

              <Card className="imgclasss w-50">
                <img src={CSS_img124}></img>
              </Card>

              <p>The perspective property only affects 3D transformed elements.</p>
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