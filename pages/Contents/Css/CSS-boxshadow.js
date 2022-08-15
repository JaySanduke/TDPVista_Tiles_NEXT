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

import CSS_img78 from "../../../assets/img/css/css_img78.jpg"
import CSS_img79 from "../../../assets/img/css/css_img79.jpg"
import CSS_img80 from "../../../assets/img/css/css_img80.jpg"
import CSS_img81 from "../../../assets/img/css/css_img81.jpg"
import CSS_img82 from "../../../assets/img/css/css_img82.jpg"

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
                      <h2 className="text-white mb-0">The box-shadow Property</h2>
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
                        <p>The CSS3 <strong>box-shadow </strong>property applies shadow to elements.</p>
                    <p>Components of the box-shadow property are decoded by browsers in the following manner:</p>
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
Negative Values
                  </Button>
                  <Button outline
                    color="warning"
                    href="#tdp"
                    className="d-block w-100 text-left my-1 mx-0"
                    size="sm"
                  >
Creating an Inner Shadow
                  </Button>
                  <Button outline
                    color="warning"
                    href="#tdp"
                    className="d-block w-100 text-left my-1 mx-0"
                    size="sm"
                  >
Layering Multiple Shadows
                  </Button>
                  
                </CardBody>
              </Card>
            </Col>
          </Row>
          <Row className="mt-5">
            <Col md="9">
              <p>- The first length for the <strong>horizontal offset</strong> will cast the shadow to the right of the box (required)</p>
              <p>- The second length is for the <strong>vertical offset</strong> that will cast the shadow to below the box (required)</p>
              <p>- The <strong>color</strong> of the shadow (optional)</p>
              <p><br/></p>
              <p>In the example below, the horizontal and vertical offsets have been set to 10px:</p>
              
              <Card className="text-primary w-50" style={{ backgroundColor: "#EEEEEE", textAlign: "left" }}>
                <strong>
                  <p>div &#123;</p>
                  <p>width: 300px;</p>
                  <p>height: 100px;</p>
                  <p>background-color: #9ACD32;</p>
                  <p><strong>box-shadow: 10px 10px #888888;</strong></p>
                  <p>&#125;</p>
                </strong>
              </Card>
              
              <p><br/></p>
              <p><strong>Result:</strong></p>
              <p><br/></p>

              <Card className="imgclasss w-50">
                <img src={CSS_img78}></img>
              </Card>

              <h1><strong>Negative Values</strong></h1>
              <p><br/></p>
              <p><strong>Negative values</strong> can also be used for the box-shadow property.</p>
              <p><br/></p>
              <p><strong>horizontal offset</strong> - the shadow will be to the <strong>left</strong> of the box</p>
              <p><strong>vertical offset</strong> - the shadow will be <strong>above</strong> the box</p>
              <p><strong>blur radius</strong> - negative values are <strong>not allowed</strong></p>
              <p><strong>spread radius</strong> - negative values will cause the shadow to <strong>shrink</strong></p>
              <p><br/></p>
              <p><strong>For example:</strong></p>

              <Card className="text-primary w-50" style={{ backgroundColor: "#EEEEEE", textAlign: "left" }}>
                <strong>
                  <p>box-shadow: <strong>-10px -10px 5px -5px</strong> #888888;</p>
                </strong>
              </Card>

              <p><br/></p>
              <p><strong>Result:</strong></p>
              <p><br/></p>

              <Card className="imgclasss w-50">
                <img src={CSS_img79}></img>
              </Card>

              <h1><strong>Creating an Inner Shadow</strong></h1>
              <p><br/></p>
              <p>The <strong>&quot;inset&quot;</strong> keyword allows to draw an inner shadow in the box. To show an inset shadow, just add the inset keyword:</p>
              
              <Card className="text-primary w-50" style={{ backgroundColor: "#EEEEEE", textAlign: "left" }}>
                <strong>
                  <p>box-shadow: <strong>inset</strong> 10px 10px 5px #888888;</p>
                </strong>
              </Card>

              <p><br/></p>
              <p><strong>Result:</strong></p>
              <p><br/></p>

              <Card className="imgclasss w-50">
                <img src={CSS_img80}></img>
              </Card>

              <p>You can simultaneously create <strong>inner</strong> and <strong>outer</strong> shadows by separating each shadow with a <strong>comma</strong>.</p>
              <p><br/></p>

              <h1><strong>Layering Multiple Shadows</strong></h1>
              <p>You can define as many shadows for the same box as you want by writing all of them <strong>comma-separated</strong> in the same rule.</p>
              <p><br/></p>
              <p>In the example below, two <strong>inner</strong> shadows have been created by separating each shadow with a <strong>comma</strong>.</p>
              
              <Card className="text-primary w-50" style={{ backgroundColor: "#EEEEEE", textAlign: "left" }}>
                <strong>
                  <p>box-shadow:&nbsp;</p>
                  <p><strong>inset</strong> 10px 10px 5px #888888,&nbsp;</p>
                  <p><strong>inset</strong> -10px -10px 5px #888888;</p>
                </strong>
              </Card>

              <p><br/></p>
              <p><strong>Result:</strong></p>
              <p><br/></p>

              <Card className="imgclasss w-50">
                <img src={CSS_img81}></img>
              </Card>

              <p>In case we specify more than one value, the one which comes last will be positioned at the back of all shadows.</p>
              <p>Here is an example:</p>
              
              <Card className="text-primary w-50" style={{ backgroundColor: "#EEEEEE", textAlign: "left" }}>
                <strong>
                  <p>box-shadow: 0 0 10px 4px #FF6347,&nbsp;</p>
                  <p>0 0 10px 30px #FFDAB9,&nbsp;</p>
                  <p>30px 0 20px 30px #B0E0E6;</p>
                </strong>
              </Card>
              
              <p><br/></p>
              <p><strong>Result:</strong></p>
              <p><br/></p>

              <Card className="imgclasss w-50">
                <img src={CSS_img82}></img>
              </Card>

              <p>As expected, the blue shadow (<strong>#B0E0E6</strong>) comes last.</p>
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