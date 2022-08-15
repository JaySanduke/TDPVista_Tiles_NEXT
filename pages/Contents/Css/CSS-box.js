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

import CSS_img32 from "../../../assets/img/css/css_img32.jpg"
import CSS_img33 from "../../../assets/img/css/css_img33.jpg"
import CSS_img34 from "../../../assets/img/css/css_img34.jpg"
import CSS_img35 from "../../../assets/img/css/css_img35.jpg"

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
                      <h2 className="text-white mb-0">CSS Box Model</h2>
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
                    <p>All HTML elements can be considered as boxes. The CSS box model represents the design and layout of the site. It consists of <strong>margins, borders, paddings</strong>, and the actual <strong>content</strong>.</p>
                    <p><br/></p>
                    <p>The properties work in the same order: top, right, bottom, and left.</p>
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
Total Width of an Element
                  </Button>
                  <Button outline
                    color="warning"
                    href="#tdp"
                    className="d-block w-100 text-left my-1 mx-0"
                    size="sm"
                  >
Total Height of an Element
                  </Button>
                  
                  </CardBody>
              </Card>
            </Col>
          </Row>
          <Row className="mt-5">
            <Col md="9">
              <p>The image below illustrates the box model:</p>

              <Card className="imgclasss w-50">
                <img src={CSS_img32}></img>
              </Card>

              <p>The term &quot;box model&quot; is used when talking about design and layout.</p>
              <p>Every element of the webpage is a <strong>box</strong>.</p>
              <p><br/></p>
              <p>CSS uses the box model to determine how big the boxes are and how to place them.</p>
              <p>The box model is also used to calculate the actual width and height of the HTML elements.</p>
              <p><br/></p>

              <h1><strong>Total Width of an Element</strong></h1>
              <p><br/></p>
              <p>When working with boxes, it is important to understand how the total width of an element is calculated.</p>
              <p>For example, the total width of the box with paddings will be the sum of <strong>width</strong> plus <strong>padding left</strong> and <strong>padding right</strong>.</p>

              <Card className="imgclasss w-50">
                <img src={CSS_img33}></img>
              </Card>

              <p>Here is another box with margins, border, and paddings.</p>
              <p>The total width is the sum of <strong>left and right margins, left and right borders, left and right paddings</strong>, and the <strong>actual width</strong> of the content.</p>

              <Card className="imgclasss w-50">
                <img src={CSS_img34}></img>
              </Card>

              <p>When you set the width and height properties of an element with CSS, you set the width and height of the content area.</p>
              <p>When setting a background-color to a box, it covers the content area, as well as the padding.</p>
              <p><br/></p>

              <h1><strong>Total Height of an Element</strong></h1>
              <p><br/></p>
              <p>The total height of an element is calculated the same way as the width.</p>
              <p>The example below is the same box from the previous lesson with padding, border and margin.</p>

              <Card className="imgclasss w-50">
                <img src={CSS_img35}></img>
              </Card>

              <p>To summarize, Total element height = height + top padding + bottom padding + top border + bottom border + top margin + bottom margin</p>
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