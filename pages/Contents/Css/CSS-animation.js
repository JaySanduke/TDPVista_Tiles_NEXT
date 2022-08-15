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

import CSS_img120 from "../../../assets/img/css/css_img120.jpg"

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
                      <h2 className="text-white mb-0">CSS3 Animations and Keyframes</h2>
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
                    <p>An animation lets an element gradually change from one style to another.</p>
                    <p>You can change as many CSS properties as you want to, as many times you want to.</p>
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
The @keyframes Rule
                  </Button>
                  
                </CardBody>
              </Card>
            </Col>
          </Row>
          <Row className="mt-5">
            <Col md="9">
              <p><strong>Keyframes</strong> hold the styles the element will have at certain times</p>
              <p><br/></p>
              <p>The @keyframes Rule</p>
              <p><br/></p>
              <p>When you specify CSS styles inside the @keyframes rule, the animation will gradually change from the current style to the new style at certain times.</p>
              <p>To get an animation to work, you must bind the animation to an element.</p>
              <p><br/></p>
              <p>The following example will change the background color of an element three times: when the animation is 50% complete, 70% complete, and when the animation is 100% complete.</p>
              <p><br/></p>

              <Card className="text-primary w-50" style={{ backgroundColor: "#EEEEEE", textAlign: "left" }}>
                <strong>
                  <p><strong>The CSS:</strong></p>
                  <p>@keyframes example &#123;</p>
                  <p><strong>0%</strong> &#123;background-color: red;&#125;</p>
                  <p><strong>50%</strong> &#123;background-color: yellow;&#125;</p>
                  <p><strong>70%</strong> &#123;background-color: blue;&#125;</p>
                  <p><strong>100%</strong> &#123;background-color: green;&#125;</p>
                  <p>&#125;</p>
                </strong>
              </Card>
              
              <p>As an alternative to using percentages, you can use <strong>from</strong> and <strong>to</strong> keywords, where:</p>
              <p><strong>from</strong> is a starting offset of <strong>0%</strong></p>
              <p><strong>to</strong> is an ending offset of <strong>100%</strong>.</p>
              <p><br/></p>
              <p>The two examples below are equivalent, and produce the same result:</p>
              
              <Card className="text-primary w-50" style={{ backgroundColor: "#EEEEEE", textAlign: "left" }}>
                <strong>
                  <p>@keyframes colorchange &#123;</p>
                  <p><strong>0%</strong> &#123;background-color: red;&#125;</p>
                  <p><strong>100%</strong> &#123;background-color: green;&#125;</p>
                  <p>&#125;</p>
                  <p>@keyframes colorchange &#123;</p>
                  <p><strong>from</strong> &#123;background-color: red;&#125;</p>
                  <p><strong>to</strong> &#123;background-color: green;&#125;</p>
                  <p>&#125;</p>
                </strong>
              </Card>
              
              <p><strong>colorchange</strong> is the animation name.</p>
              <p><br/></p>
              <p>To get an animation to work, you must bind the animation to an element.</p>
              <p>In the example below, the animation lasts one second, and changes the background color of the red div to green and blue.</p>
              
              <Card className="text-primary w-50" style={{ backgroundColor: "#EEEEEE", textAlign: "left" }}>
                <strong>
                  <p>div &#123;</p>
                  <p>width: 100px;</p>
                  <p>height: 100px;</p>
                  <p>background-color: <strong>red</strong>;</p>
                  <p><strong>animation-name</strong>: colorchange;</p>
                  <p><strong>animation-duration</strong>: 1s;</p>
                  <p>&#125;</p>
                  <p>@keyframes colorchange &#123;</p>
                  <p><strong>0%</strong> &#123;background-color: <strong>red</strong>;&#125;</p>
                  <p><strong>50%</strong> &#123;background-color: <strong>green</strong>;&#125;</p>
                  <p><strong>100%</strong> &#123;background-color: <strong>blue</strong>;&#125;</p>
                  <p>&#125;&nbsp;</p>
                </strong>
              </Card>
              
              <p><strong>Result:</strong></p>

              <Card className="imgclasss w-50">
                <img src={CSS_img120}></img>
              </Card>

              <p>The <strong>animation-name</strong> property specifies the animation to be used for the element.</p>
              <p>The <strong>animation-duration</strong> property specifies the duration of the selected animation.</p>
              <p>If the animation-duration property is not specified, the animation will have no effect, because the default value is 0.</p>
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