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

import CSS_img68 from "../../../assets/img/css/css_img68.jpg"
import CSS_img69 from "../../../assets/img/css/css_img69.jpg"
import CSS_img70 from "../../../assets/img/css/css_img70.jpg"

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
                      <h2 className="text-white mb-0">The overflow Property</h2>
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
                    <p>As discussed earlier, every element on the page is a <strong>box</strong>. If the height of the box is not set, the height of that box will grow as large as necessary to accommodate the content.</p>
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
The overflow Property Values
                  </Button>
                  <Button outline
                    color="warning"
                    href="#tdp"
                    className="d-block w-100 text-left my-1 mx-0"
                    size="sm"
                  >
auto and hidden
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
                  <p>&lt;div&gt;</p>
                  <p>This text is inside the div element, which has a blue&nbsp;</p>
                  <p>background color and is floated to the left. We set a specific&nbsp;</p>
                  <p>height and width for the div element, and as you can see,&nbsp;</p>
                  <p>the content cannot fit.&nbsp;</p>
                  <p>&lt;/div&gt;</p>
                  <p><strong>The CSS:</strong></p>
                  <p>div &#123;</p>
                  <p><strong>width</strong>: 150px;</p>
                  <p><strong>height</strong>: 150px;</p>
                  <p>background-color: LightBlue;</p>
                  <p>float: left;</p>
                  <p>&#125;</p>
                </strong>
              </Card>
              
              <p><br/></p>
              <p><strong>Result:</strong></p>
              <p><br/></p>

              <Card className="imgclasss w-50">
              <img src={CSS_img68}></img>
              </Card>

              <p>The CSS <strong>overflow</strong> property specifies the behavior that occurs when an element&apos;s content overflows the element&apos;s box.</p>
              <p><br/></p>
              
              <h1><strong>The overflow Property Values</strong></h1>
              <p><br/></p>
              <p>There are four values for the overflow property: <strong>visible</strong> (the default value), sc<strong>roll, hidden, and auto</strong>.</p>
              <p><br/></p>
              <p>The value <strong>scroll</strong> results in clipped overflow, but a scrollbar is added, so the rest of the content may be seen.</p>
              <p><br/></p>

              <Card className="text-primary w-50" style={{ backgroundColor: "#EEEEEE", textAlign: "left" }}>
                <strong>
                    <p><strong>The CSS:</strong></p>
                    <p>div &#123;</p>
                    <p>width: 150px;</p>
                    <p>height: 150px;</p>
                    <p>background-color: LightBlue;</p>
                    <p>float: left;</p>
                    <p><strong>overflow: scroll</strong>;</p>
                    <p>&#125;</p>
                </strong>
              </Card>
              
              <p><br/></p>
              <p>The code above will produce both <strong>horizontal and vertical</strong> scrollbars:</p>
              <p><br/></p>

              <Card className="imgclasss w-50">
              <img src={CSS_img69}></img>
              </Card>

              <h1><strong>auto and hidden</strong></h1>
              <p><br/></p>
              <p><strong>auto</strong> - If overflow is clipped, a scroll-bar should be added to make it possible to see the rest of the content.</p>
              <p><strong>hidden</strong> - The overflow is clipped, and the rest of the content will be invisible.</p>
              <p><br/></p>
              
              <Card className="text-primary w-50" style={{ backgroundColor: "#EEEEEE", textAlign: "left" }}>
                <strong>
                  <p><strong>The CSS:</strong></p>
                  <p>div &#123;</p>
                  <p>width: 150px;</p>
                  <p>height: 150px;</p>
                  <p>background-color: LightBlue;</p>
                  <p>float: left;</p>
                  <p><strong>overflow: hidden</strong>;</p>
                  <p>&#125;</p>
                </strong>
              </Card>
              
              <p><br/></p>
              <p><strong>Result:</strong></p>
              <p><br/></p>

              <Card className="imgclasss w-50">
              <img src={CSS_img70}></img>
              </Card>

              <p>The default value for the overflow property is <strong>visible</strong>.</p>
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