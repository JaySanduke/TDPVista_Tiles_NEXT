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
                      <h2 className="text-white mb-0">The animation-name Property</h2>
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
                    <p><strong>animation-name</strong> property defines which animation to use.</p>
                    <p>In this example, the name of the animation is set to <strong>colorchange</strong>, which matches the defined keyframes.</p>
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
Animation Properties
                  </Button>
                  <Button outline
                    color="warning"
                    href="#tdp"
                    className="d-block w-100 text-left my-1 mx-0"
                    size="sm"
                  >
More Animation Properties
                  </Button>
                  <Button outline
                    color="warning"
                    href="#tdp"
                    className="d-block w-100 text-left my-1 mx-0"
                    size="sm"
                  >
animation Property
                  </Button>
                  
                </CardBody>
              </Card>
            </Col>
          </Row>
          <Row className="mt-5">
            <Col md="9">
              <Card className="text-primary w-50" style={{ backgroundColor: "#EEEEEE", textAlign: "left" }}>
                <strong>
                  <p><strong>The CSS:</strong></p>
                  <p>div &#123;</p>
                  <p>animation-name: <strong>colorchange</strong>;&nbsp;</p>
                  <p>animation-duration: 5s;</p>
                  <p>&#125;</p>
                  <p>@keyframes <strong>colorchange</strong> &#123;</p>
                  <p>from &#123; width: 0px; &#125;</p>
                  <p>to &#123; width: 100px; &#125;</p>
                  <p>&#125;</p>
                </strong>
              </Card>
              
              <p>The <strong>animation-duration</strong> property specifies the duration of the selected animation in seconds.</p>
              <p>If the animation name does not match any keyframe rule, the animation <strong>will not execute</strong>.</p>
              <p><br/></p>
              
              <h1><strong>Animation Properties</strong></h1>
              <p>The <strong>animation-timing-function</strong> specifies the speed curve of an animation. It can have the following values:</p>
              <p><strong>ease</strong> - specifies an animation with a slow start, then fast, then end slowly (this is default)</p>
              <p><strong>linear</strong> - specifies an animation with the same speed from start to end</p>
              <p><strong>ease-in</strong> - specifies an animation with a slow start</p>
              <p><strong>ease-out</strong> - specifies an animation with a slow end</p>
              <p><strong>ease-in-out</strong> - specifies an animation with a slow start and end</p>
              <p><strong>cubic-bezier(n,n,n,n)</strong> - lets you define your own values in a cubic-bezier function</p>
              <p><br/></p>
              <p>The CSS syntax looks like this:</p>
              <p>animation-timing-function: linear;</p>
              <p><br/></p>
              <p><strong>animation-delay</strong> - defines the delay before an animation starts. The CSS syntax looks like this:</p>
              <p>animation-delay: 2s;</p>
              <p><br/></p>
              <p>The animation-delay and animation-duration values can be defined in <strong>seconds (s) or milliseconds (ms)</strong>.</p>
              <p><br/></p>
              
              <h1><strong>More Animation Properties</strong></h1>
              <p>The <strong>animation-iteration-count</strong> property determines the number of times an animation repeats.</p>
              <p>For example, you can set the animation to run <strong>5 times</strong>:</p>
              <p>animation-iteration-count: 5;</p>
              <p><br/></p>
              <p>To make the animation repeat <strong>forever</strong>, just use the <strong>infinite</strong> value:</p>
              <p>animation-iteration-count: <strong>infinite</strong>;</p>
              <p><br/></p>
              <p>The <strong>animation-direction</strong> indicates how the keyframe should be applied.</p>
              <p>The values can be set as:</p>
              <p><strong>normal</strong> - the default value, which means it plays forward from 0 % to 100%.</p>
              <p><strong>reverse</strong> - plays the keyframe in an opposite direction from 100 % to 0%</p>
              <p><strong>alternate</strong> - the animation first runs forward, then backward, then forward.</p>
              <p><strong>alternate reverse</strong> - the animation first runs backward, then forward, then backward.</p>
              <p>If you use 0 or a negative number for the <strong>animation-iteration-count</strong>, the animation will never start.</p>
              <p><br/></p>
              
              <h1><strong>animation Property</strong></h1>
              <p>Consider the following example:</p>

              <Card className="text-primary w-50" style={{ backgroundColor: "#EEEEEE", textAlign: "left" }}>
                <strong>
                  <p>div &#123;</p>
                  <p>animation-<strong>name</strong>: colorchange;</p>
                  <p>animation-<strong>duration</strong>: 3s;</p>
                  <p>animation-<strong>timing-function</strong>: ease-in;</p>
                  <p>animation-<strong>delay</strong>: 1s;</p>
                  <p>animation-<strong>iteration-count</strong>: infinite;</p>
                  <p>animation-<strong>direction</strong>: reverse;</p>
                  <p>&#125;</p>
                </strong>
              </Card>
              
              <p><br/></p>
              <p>A single <strong>animation</strong> property can be used to achieve the same result as the above code:</p>
              
              <Card className="text-primary w-50" style={{ backgroundColor: "#EEEEEE", textAlign: "left" }}>
                <strong>
                  <p>div &#123;&nbsp;</p>
                  <p>animation: colorchange 3s ease-in 1s infinite reverse;</p>
                  <p>&#125;</p>
                </strong>
              </Card>
              
              <p><br/></p>
              <p>The order in which each property is declared in the shorthand declaration is important and cannot be altered, or the animation will not work properly.</p>
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