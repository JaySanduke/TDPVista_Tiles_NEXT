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

import CSS_img40 from "../../../assets/img/css/css_img40.jpg"
import CSS_img41 from "../../../assets/img/css/css_img41.jpg"
import CSS_img42 from "../../../assets/img/css/css_img42.jpg"

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
                      <h2 className="text-white mb-0">CSS Width and Height</h2>
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
                    <p>To style a <strong>&lt;div&gt;</strong> element to have a total width and height of <strong>100px</strong>:</p>
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
Width and Height Measurement
                  </Button>
                  <Button outline
                    color="warning"
                    href="#tdp"
                    className="d-block w-100 text-left my-1 mx-0"
                    size="sm"
                  >
The Minimum and Maximum Sizes
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
                  <p>&lt;div&gt;The total width and height of this element is 100px.&lt;/div&gt;</p>
                  <p><strong>The CSS:</strong></p>
                  <p>div &#123;</p>
                  <p>border: 5px solid green;</p>
                  <p>width: 90px;</p>
                  <p>height: 90px;</p>
                  <p>&#125;</p>
                </strong>
              </Card>
              
              <p><br/></p>
              <p><strong>Result:</strong></p>
              <p><br/></p>

              <Card className="imgclasss w-50">
                <img src={CSS_img40}></img>
              </Card>

              <p>The total width and height of the box will be the 90px+5px (border)+5px(border) = 100px;</p>
              
              <h1><strong>Width and Height Measurement</strong></h1>
              <p><br/></p>
              <p>The width and height of an element can be also assigned using <strong>percents</strong>.</p>
              <p>In the example below the width of an element is assigned in percentages, the height is in pixels.</p>
              <p><br/></p>

              <Card className="text-primary w-50" style={{ backgroundColor: "#EEEEEE", textAlign: "left" }}>
                <strong>
                  <p><strong>The HTML:</strong></p>
                  <p>&lt;div&gt;The total width of this element is &lt;strong&gt;100%&lt;/strong&gt; and the total height is &lt;strong&gt;100px&lt;/strong&gt; .&lt;/div&gt;</p>
                  <p><strong>The CSS:</strong></p>
                  <p>div &#123;</p>
                  <p>border: 5px solid green;</p>
                  <p>width: <strong>100%</strong>;</p>
                  <p>height: <strong>90px</strong>;</p>
                  <p>&#125;</p>
                </strong>
              </Card>
              
              <p><br/></p>
              <p><strong>Result:</strong></p>
              <p><br/></p>

              <Card className="imgclasss w-50">
                <img src={CSS_img41}></img>
              </Card>

              <h1><strong>The Minimum and Maximum Sizes</strong></h1>
              <p><br/></p>
              <p>To set the minimum and maximum height and width of an element, you can use the following properties:</p>
              <p><br/></p>
              <p><strong>min-width</strong> - the minimum width of an element</p>
              <p><strong>min-height</strong> - the minimum height of an element</p>
              <p><strong>max-width</strong> - the maximum width of an element</p>
              <p><strong>max-height</strong> - the maximum height of an element</p>
              <p><br/></p>
              <p>In the example below, we set the minimum height and maximum width of different paragraphs to 100px.</p>
              <p><br/></p>

              <Card className="text-primary w-50" style={{ backgroundColor: "#EEEEEE", textAlign: "left" }}>
                <strong>
                  <p><strong>The HTML:</strong></p>
                  <p>&lt;p class=&quot;first&quot;&gt;The &lt;strong&gt;minimum height &lt;/strong&gt; of this paragraph is set to 100px.&lt;/p&gt;</p>
                  <p>&lt;p class=&quot;second&quot;&gt;The&lt;strong&gt; maximum width &lt;/strong&gt; of this paragraph is set to 100px.&lt;/p&gt;</p>
                  <p><strong>The CSS:</strong></p>
                  <p>p.first &#123;</p>
                  <p>border: 5px solid green;</p>
                  <p><strong>min-height: 100px;</strong></p>
                  <p>&#125;</p>
                  <p>p.second &#123;</p>
                  <p>border: 5px solid green;</p>
                  <p><strong>max-width: 100px;</strong></p>
                  <p>&#125;</p>
                </strong>
              </Card>
              
              <p><br/></p>
              <p><strong>Result:</strong></p>

              <Card className="imgclasss w-50">
                <img src={CSS_img42}></img>
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