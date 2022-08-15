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

import CSS_img99 from "../../../assets/img/css/css_img99.jpg"
import CSS_img100 from "../../../assets/img/css/css_img100.jpg"
import CSS_img101 from "../../../assets/img/css/css_img101.jpg"

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
                      <h2 className="text-white mb-0">Radial Gradients</h2>
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
                    <p>To create a radial gradient, you must define at least <strong>two color stops</strong>.</p>
                    <p>The radial gradient is defined by its <strong>center</strong>.</p>
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
Setting the Shapes
                  </Button>
                  <Button outline
                    color="warning"
                    href="#tdp"
                    className="d-block w-100 text-left my-1 mx-0"
                    size="sm"
                  >
Radial Gradient Position
                  </Button>
                  <Button outline
                    color="warning"
                    href="#tdp"
                    className="d-block w-100 text-left my-1 mx-0"
                    size="sm"
                  >
Setting the Color Stops
                  </Button>
                  
                </CardBody>
              </Card>
            </Col>
          </Row>
          <Row className="mt-5">
            <Col md="9">
              <p>The CSS syntax of the radial gradient looks like this:background: radial-gradient(<strong>position, shape or size, color-stops</strong>);</p>
              <p>The <strong>first value</strong> defines the gradient position. We can use a descriptive keyword, such as top, bottom, center, or left; or we can specify, for example, 50% 50% to set the gradient at the center or 0% 0% to set the gradient to start at top left.</p>
              <p><br/></p>
              <p>The <strong>second value</strong> defines the shape and the gradient size. There are two arguments to shape gradients: The first is the <strong>ellipse, which is the default</strong>; and the second is the <strong>circle</strong>.</p>
              <p>Lastly, the <strong>third value</strong> defines the color combination.</p>
              <p><br/></p>
              <p><br/></p>

              <h1><strong>Setting the Shapes</strong></h1>
              <p><br/></p>
              <p>The shape parameter defines the shape. If you do not define the shape of the radial gradient, it will take the ellipse value by default.</p>
              <p><br/></p>
              <p>In the example below, we didn&apos;t specify the shape of the first div&rsquo;s radial gradient, but for the second, we set the value to circle.</p>
              <p>Here is what happened:</p>
              <p><br/></p>

              <Card className="text-primary w-50" style={{ backgroundColor: "#EEEEEE", textAlign: "left" }}>
                <strong>
                  <p><strong>The CSS:</strong></p>
                  <p>div.first &#123;</p>
                  <p>height: 150px;</p>
                  <p>width: 200px;</p>
                  <p>color: #FFF;</p>
                  <p>background: -moz-radial-gradient(<strong>green, yellow, blue</strong>);&nbsp;</p>
                  <p>&#125;</p>
                  <p>div.second &#123;</p>
                  <p>height: 150px;</p>
                  <p>width: 200px;</p>
                  <p>color: #FFF;</p>
                  <p>background: -moz-radial-gradient(<strong>circle, green, yellow, blue</strong>);&nbsp;</p>
                  <p>&#125;</p>
                </strong>
              </Card>
              
              <p><br/></p>
              <p><strong>Result:</strong></p>
              <p><br/></p>

              <Card className="imgclasss w-50">
                <img src={CSS_img99}></img>
              </Card>

              <h1><strong>Radial Gradient Position</strong></h1>
              <p><br/></p>
              <p>Essentially, we can use the same method used to specify the location of a background image with the background-position CSS property to specify the location of the ellipse&rsquo;s center. We specify the horizontal position of the background, and - optionally - the vertical position using either keywords (left, center right, or top, center, bottom), length values, percentage values, or some combination of these.</p>
              <p><br/></p>
              <p>In the example below, the first gradient starts from the top left corner; in the second, we set 5% to the green, 15 % to the yellow and 60% to the blue.</p>
              
              <Card className="text-primary w-50" style={{ backgroundColor: "#EEEEEE", textAlign: "left" }}>
                <strong>
                  <p>div.first &#123;</p>
                  <p>height: 150px;</p>
                  <p>width: 200px;</p>
                  <p>color: #FFF;</p>
                  <p>background: -moz-radial-gradient(<strong>top left</strong>, green, yellow, blue);&nbsp;</p>
                  <p>&#125;</p>
                  <p>div.second &#123;</p>
                  <p>height: 150px;</p>
                  <p>width: 200px;</p>
                  <p>color: #FFF;</p>
                  <p>background: -moz-radial-gradient(<strong>green 5%, yellow 15%, blue 60%</strong>);&nbsp;</p>
                  <p>&#125;</p>
                </strong>
              </Card>
              
              <p><br/></p>
              <p><strong>Result:</strong></p>
              <p><br/></p>

              <Card className="imgclasss w-50">
                <img src={CSS_img100}></img>
              </Card>

              <p>In addition to percentages, you can use <strong>pixels or ems</strong>.</p>
              <p><br/></p>
              
              <h1><strong>Setting the Color Stops</strong></h1>
              <p>As with linear gradients, a color stop is specified with a color, plus an optional stop position, which is a length or percentage value.</p>
              <p><br/></p>
              <p>Here&apos;s a simple circular gradient with color stops:</p>
              
              <Card className="text-primary w-50" style={{ backgroundColor: "#EEEEEE", textAlign: "left" }}>
                <strong>
                  <p>background: -moz-radial-gradient(circle, green 40%, yellow 50%, blue 70%); </p>
                </strong>
              </Card>

              <p><br/></p>
              <p><strong>Result:</strong></p>
              <p><br/></p>

              <Card className="imgclasss w-50">
                <img src={CSS_img101}></img>
              </Card>
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