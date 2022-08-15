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

import CSS_img93 from "../../../assets/img/css/css_img93.jpg"
import CSS_img94 from "../../../assets/img/css/css_img94.jpg"
import CSS_img95 from "../../../assets/img/css/css_img95.jpg"
import CSS_img96 from "../../../assets/img/css/css_img96.jpg"
import CSS_img97 from "../../../assets/img/css/css_img97.jpg"
import CSS_img98 from "../../../assets/img/css/css_img98.jpg"

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
                      <h2 className="text-white mb-0">Creating Linear Gradients</h2>
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
                    <p>CSS3 gradients enable you to display smooth transitions between two or more specified colors. CSS3 defines two types of gradients: <strong>Linear</strong> and <strong>Radial</strong>.</p>
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
Color Stops
                  </Button>
                  <Button outline
                    color="warning"
                    href="#tdp"
                    className="d-block w-100 text-left my-1 mx-0"
                    size="sm"
                  >
Direction of the Gradient
                  </Button>
                  <Button outline
                    color="warning"
                    href="#tdp"
                    className="d-block w-100 text-left my-1 mx-0"
                    size="sm"
                  >
Angle of the Gradient
                  </Button>
                  <Button outline
                    color="warning"
                    href="#tdp"
                    className="d-block w-100 text-left my-1 mx-0"
                    size="sm"
                  >
Repeating a Linear-Gradient
                  </Button>
                  
                </CardBody>
              </Card>
            </Col>
          </Row>
          <Row className="mt-5">
            <Col md="9">
              <p>To create a linear gradient, you must define at least two color stops. Color stops are the colors among which you want to render smooth transitions. You can also set a starting point and a direction - or an angle - along with the gradient effect.</p>
              <p>In the example below, the colors blue and black are used to create a linear gradient from top to bottom.</p>
              
              <Card className="text-primary w-50" style={{ backgroundColor: "#EEEEEE", textAlign: "left" }}>
                <strong>
                  <p>div &#123;</p>
                  <p>float: left;</p>
                  <p>width: 300px;&nbsp;</p>
                  <p>height: 100px;</p>
                  <p>margin: 4px;</p>
                  <p>color: #FFF;&nbsp;</p>
                  <p><strong>background:-moz-linear-gradient</strong>(DeepSkyBlue, Black);</p>
                  <p>&#125;</p>
                </strong>
              </Card>
              
              <p><br/></p>
              <p>This syntax works in Mozilla (-moz). If you work with a different browser, add the corresponding prefix, so that the browser understands the gradient.</p>
              <p><br/></p>
              <p><strong>Result:</strong></p>
              <p><br/></p>

              <Card className="imgclasss w-50">
                <img src={CSS_img93}></img>
              </Card>

              <p>You can use <strong>color names, Hex values, RGB, or HSL</strong> colors to define the gradient color.</p>
              <p><br/></p>
              
              <h1><strong>Color Stops</strong></h1>
              <p><br/></p>
              <p>Colors can be added one after the other, separated with a comma. The browser will then determine each color stop position.</p>
              <p>In the example below, the linear gradient has multiple color stops and runs from top to bottom.</p>
              
              <Card className="text-primary w-50" style={{ backgroundColor: "#EEEEEE", textAlign: "left" }}>
                <strong>
                  <p>background:-moz-linear-gradient(<strong>blue, yellow, green, pink, white</strong>);</p>
                </strong>
              </Card>

              <p><br/></p>
              <p><strong>Result:</strong></p>
              <p><br/></p>

              <Card className="imgclasss w-50">
                <img src={CSS_img94}></img>
              </Card>

              <p>Color stop positions can be specified for each color.</p>
              
              <Card className="text-primary w-50" style={{ backgroundColor: "#EEEEEE", textAlign: "left" }}>
                <strong>
                  <p>background:-moz-linear-gradient(<strong>blue 20%, yellow 30%, green 85%</strong>);</p>
                </strong>
              </Card>

              <p><br/></p>
              <p><strong>Result:</strong></p>
              <p><br/></p>

              <Card className="imgclasss w-50">
                <img src={CSS_img95}></img>
              </Card>

              <p>In addition to percentages, you can also use <strong>px, em</strong>, and so on, to specify the color stops.</p>
              <p>If you use the same color stop position for two colors, a sharp line will be created between them.</p>
              <p><br/></p>

              <h1><strong>Direction of the Gradient</strong></h1>
              <p><br/></p>
              <p>The direction of the gradient can be changed.</p>
              <p>In the example below, the first gradient starts at <strong>left</strong>, moving <strong>right</strong>; the second one runs from <strong>bottom</strong> to <strong>top</strong>.</p>
              
              <Card className="text-primary w-50" style={{ backgroundColor: "#EEEEEE", textAlign: "left" }}>
                <strong>
                  <p>div.first &#123;</p>
                  <p>float: left;</p>
                  <p>width: 300px;&nbsp;</p>
                  <p>height: 100px;</p>
                  <p>margin: 4px;</p>
                  <p>color: #FFF;&nbsp;</p>
                  <p>background:-moz-linear-gradient(<strong>left</strong>, blue, green, white);</p>
                  <p>&#125;&nbsp;</p>
                  <p>div.second &#123;&nbsp;</p>
                  <p>float: left;</p>
                  <p>width: 300px;&nbsp;</p>
                  <p>height: 100px;</p>
                  <p>margin: 4px;</p>
                  <p>background:-moz-linear-gradient(<strong>bottom</strong>, blue, green, white);</p>
                  <p>&#125;</p>
                </strong>
              </Card>
              
              <p><br/></p>
              <p><strong>Result:</strong></p>

              <Card className="imgclasss w-50">
                <img src={CSS_img96}></img>
              </Card>

              <p><strong>left, right, top, and bottom</strong> are supported values for the gradient direction. You can also use their various combinations to specify direction (e.g., <strong>bottom right</strong>)</p>
              <p><br/></p>
              
              <h1><strong>Angle of the Gradient</strong></h1>
              <p>As an alternative to predefined directions (bottom, top, right, left, bottom right, etc.), you can control the gradient&apos;s direction by specifying an angle.</p>
              <p><br/></p>
              <p>The angle is specified as an angle extending between a horizontal line and the gradient line. In other words, 0deg creates a left-to right-gradient, while 90deg generates a bottom-to-top gradient.</p>
              
              <Card className="text-primary w-50" style={{ backgroundColor: "#EEEEEE", textAlign: "left" }}>
                <strong>
                  <p>div.first &#123;</p>
                  <p>float: left;</p>
                  <p>width: 300px;&nbsp;</p>
                  <p>height: 100px;</p>
                  <p>margin: 4px;</p>
                  <p>color: #FFF;</p>
                  <p>background:-moz-linear-gradient(<strong>bottom left</strong>, blue, green, white);</p>
                  <p>&#125;</p>
                  <p>div.second &#123;</p>
                  <p>float: left;</p>
                  <p>width: 300px;&nbsp;</p>
                  <p>height: 100px;</p>
                  <p>margin: 4px;</p>
                  <p>background:-moz-linear-gradient(<strong>100deg</strong>, blue, green, white);</p>
                  <p>&#125;</p>
                </strong>
              </Card>
              
              <p><br/></p>
              <p><strong>Result:</strong></p>
              <p><br/></p>

              <Card className="imgclasss w-50">
                <img src={CSS_img97}></img>
              </Card>

              <h1><strong>Repeating a Linear-Gradient</strong></h1>
              <p><br/></p>
              <p>The <strong>repeating-linear-gradient()</strong> function is used to repeat a linear gradient:</p>
              
              <Card className="text-primary w-50" style={{ backgroundColor: "#EEEEEE", textAlign: "left" }}>
                <strong>
                  <p>background:-moz-<strong>repeating-linear-gradient</strong>(blue, green 20px);</p>
                </strong>
              </Card>

              <p><br/></p>
              <p><strong>Result:</strong></p>
              <p><br/></p>

              <Card className="imgclasss w-50">
                <img src={CSS_img98}></img>
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