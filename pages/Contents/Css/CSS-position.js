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

import CSS_img61 from "../../../assets/img/css/css_img61.jpg"
import CSS_img62 from "../../../assets/img/css/css_img62.jpg"
import CSS_img63 from "../../../assets/img/css/css_img63.jpg"

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
                      <h2 className="text-white mb-0">Positioning Elements</h2>
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
                      <p>The CSS positioning properties allow you to position an element. It can also place an element behind another, and specify what should happen when an element&apos;s content is too big.</p>
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
Fixed Positioning
                  </Button>
                  <Button outline
                    color="warning"
                    href="#tdp"
                    className="d-block w-100 text-left my-1 mx-0"
                    size="sm"
                  >
Relative Positioning
                  </Button>
                  <Button outline
                    color="warning"
                    href="#tdp"
                    className="d-block w-100 text-left my-1 mx-0"
                    size="sm"
                  >
Absolute Positioning
                  </Button>
                  
                </CardBody>
              </Card>
            </Col>
          </Row>
          <Row className="mt-5">
            <Col md="9">
            <p>Elements can be positioned using the top, bottom, left, and right properties. However, these properties will not work unless the <strong>position</strong> property is set first. They also work differently depending on the positioning method.</p>
              <p><br/></p>

              <h1><strong>Static Positioning</strong></h1>
              <p>HTML elements are positioned <strong>static</strong> by default. A static positioned element is always positioned according to the normal flow of the page.</p>
              <p><br/></p>

              <Card className="text-primary w-50" style={{ backgroundColor: "#EEEEEE", textAlign: "left" }}>
                <strong>
                  <p><strong>The HTML:</strong></p>
                  <p>&lt;p&gt;Paragraph with no position.&lt;/p&gt;</p>
                  <p>&lt;p&gt;Paragraph with no position.&lt;/p&gt;</p>
                  <p>&lt;p&gt;Paragraph with no position.&lt;/p&gt;</p>
                  <p>&lt;p&gt;Paragraph with no position.&lt;/p&gt;</p>
                  <p>&lt;p&gt;Paragraph with no position.&lt;/p&gt;</p>
                  <p>&lt;p class=&quot;position_static&quot;&gt;This paragraph has a static position.&lt;/p&gt;</p>
                  <p><strong>The CSS:</strong></p>
                  <p>p.position_static &#123;</p>
                  <p><strong>position:static</strong>;</p>
                  <p>top: 30px;</p>
                  <p>right: 5px;</p>
                  <p>color: red;</p>
                  <p>&#125;</p>
                </strong>
              </Card>
              
              <p><br/></p>
              <p><strong>Result:</strong></p>
              <p><br/></p>

              <Card className="imgclasss w-50">
              <img src={CSS_img61}></img>
              </Card>

              <div  style={{ backgroundColor: "#EAEA00", textAlign: "left" }}>
                <p>Static positioned elements are not affected by the top, bottom, left, and right properties.</p>
              </div>

              <h1><strong>Fixed Positioning</strong></h1>
              <p><br/></p>
              <p>An element with a fixed position is positioned relative to the browser window, and will not move even if the window is scrolled.</p>
              <p>The position can be specified using one or more of the properties <strong>top, right, bottom, and left</strong>.</p>
              <p>In the example below, the paragraph is fixed to 30px from the top and 5px from the right.</p>
              <p><br/></p>
              
              <Card className="text-primary w-50" style={{ backgroundColor: "#EEEEEE", textAlign: "left" }}>
                <strong>
                  <p><strong>The CSS:</strong></p>
                  <p>p.position_fixed &#123;</p>
                  <p><strong>position: fixed;</strong></p>
                  <p>top: 30px;</p>
                  <p>right: 5px;</p>
                  <p>color: red;</p>
                  <p>&#125;</p>
                </strong>
              </Card>
              
              <p><br/></p>
              <p><strong>Result:</strong></p>
              <p><br/></p>

              <Card className="imgclasss w-50">
              <img src={CSS_img62}></img>
              </Card>

              <p>Fixed positioned elements are removed from the normal flow. The document and other elements behave like the fixed positioned element does not exist.</p>
              <p>Fixed positioned elements can overlap other elements.</p>
              
              <h1><strong>Relative Positioning</strong></h1>
              <p><br/></p>
              <p>A relative positioned element is positioned relative to its normal position.</p>
              <p>The properties <strong>top, right, bottom, and left</strong> can be used to specify how the rendered box will be shifted.</p>
              <p><br/></p>

              <Card className="text-primary w-50" style={{ backgroundColor: "#EEEEEE", textAlign: "left" }}>
                <strong>
                  <p><strong>The CSS:</strong></p>
                  <p>p &#123;</p>
                  <p>width: 350px;</p>
                  <p>border: 1px black solid;</p>
                  <p><strong>position: fixed</strong>;</p>
                  <p>&#125;</p>
                  <p>span &#123;</p>
                  <p>background: green;</p>
                  <p>color:white;</p>
                  <p><strong>position: relative</strong>;</p>
                  <p><strong>top</strong>: 150px;</p>
                  <p><strong>left</strong>: 50px;</p>
                  <p>&#125;</p>
                </strong>
              </Card>
              
              <p><br/></p>
              <p><strong>Result:</strong></p>
              <p><br/></p>

              <Card className="imgclasss w-50">
              <img src={CSS_img63}></img>
              </Card>

              <p>The content of relatively positioned elements can be moved and overlap other elements, but the reserved space for the element is still preserved in the normal flow.</p>
              <p>This value cannot be used for <strong>table cells, columns, column groups, rows, row groups, or captions</strong>.</p>
              <p><br/></p>

              <h1><strong>Absolute Positioning</strong></h1>
              <p><br/></p>
              <p>An absolute position element is positioned relative to the first parent element that has a position other than static. If no such element is found, the containing block is &lt;html&gt;.</p>
              <p><br/></p>
              <p>Absolutely positioned elements are removed from the normal flow. The document and other elements behave like the absolutely positioned element does not exist.</p>
              <p>Absolutely positioned elements can overlap other elements.</p>
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