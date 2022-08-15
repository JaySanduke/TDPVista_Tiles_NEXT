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

import JS_img18 from "../../../assets/img/js/js_img18.jpg"
import JS_img19 from "../../../assets/img/js/js_img19.jpg"
import JS_img20 from "../../../assets/img/js/js_img20.jpg"

class Header extends React.Component {
  render() {
    return (

      <div className="header bg-gradient-info pb-8 pt-5 pt-md-8">
        <Container fluid>
          <div className="header-body">
            <Row>
              <Col xl="6">
              <h1 style={{fontSize:"200%",color:"#fff",fontFamily:"Roboto"}}>JavaScript</h1>
              
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
                      <h2 className="text-white mb-0">The Do...While Loop</h2>
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
                  <p>The <strong>do...while</strong> loop is a variant of the while loop. This loop will execute the code block once, <strong>before</strong> checking if the condition is true, and then it will repeat the loop as long as the condition is true.</p>
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
Break                  </Button>
                  <Button outline
                    color="warning"
                    href="#tdp"
                    className="d-block w-100 text-left my-1 mx-0"
                    size="sm"
                  >
Continue
                  </Button>
                  
                  </CardBody>
              </Card>
            </Col>
          </Row>
          <Row className="mt-5">
            <Col md="9">
            <Card className="text-primary w-50" style={{ backgroundColor: "#EEEEEE", textAlign: "left" }}>
                <strong>
                  <p><strong>Syntax:do</strong> &#123;</p>
                  <p>code block</p>
                  <p>&#125;</p>
                  <p><strong>while</strong> (condition);</p>
                  <p>Note the <strong>semicolon</strong> used at the end of the do...while loop.</p>
                  <p><strong>Example:</strong></p>
                  <p>var i=20;</p>
                  <p><strong>do</strong> &#123;&nbsp;</p>
                  <p>document.write(i + &quot;&lt;br /&gt;&quot;);</p>
                  <p>i++;&nbsp;</p>
                  <p>&#125;</p>
                  <p><strong>while</strong> (i&lt;=25);</p>
                </strong>
              </Card>
              
              <p>This prints out numbers from 20 to 25.</p>
              <p><br/></p>

              <Card className="imgclasss w-50">
                <img src={JS_img18}></img>
              </Card>

              <p>The loop will always be executed <strong>at least once</strong>, even if the condition is false, because the code block is executed before the condition is tested.</p>
              <p><br/></p>

              <h1><strong>Break</strong></h1>
              <p>The <strong>break</strong> statement &quot;jumps out&quot; of a loop and continues executing the code after the loop.</p>
              
              <Card className="text-primary w-50" style={{ backgroundColor: "#EEEEEE", textAlign: "left" }}>
                <strong>
                  <p>for (i = 0; i &lt;= 10; i++) &#123;</p>
                  <p>if (i == 5) &#123;</p>
                  <p><strong>break</strong>;</p>
                  <p>&#125;</p>
                  <p>document.write(i + &quot;&lt;br /&gt;&quot;);</p>
                  <p>&#125;</p>
                </strong>
              </Card>
              

              <p>Once i reaches 5, it will break out of the loop.</p>
              <p><br/></p>

              <Card className="imgclasss w-50">
                <img src={JS_img19}></img>
              </Card>

              <p>You can use the return keyword to return some value immediately from the loop inside of a function. This will also break the loop.</p>
              <p><br/></p>

              <h1><strong>Continue</strong></h1>
              <p>The <strong>continue </strong> statement breaks only one iteration in the loop, and continues with the next iteration.</p>
              
              <Card className="text-primary w-50" style={{ backgroundColor: "#EEEEEE", textAlign: "left" }}>
                <strong>
                  <p>for (i = 0; i &lt;= 10; i++) &#123;</p>
                  <p>if (i == 5) &#123;</p>
                  <p><strong>continue</strong>;</p>
                  <p>&#125;</p>
                  <p>document.write(i + &quot;&lt;br /&gt;&quot;);</p>
                  <p>&#125;</p>
                </strong>
              </Card>
              
              <p><br/></p>
              <p><strong>Result:</strong></p>
              <p><br/></p>

              <Card className="imgclasss w-50">
                <img src={JS_img20}></img>
              </Card>

              <p>The value 5 is not printed, because <strong>continue</strong> skips that iteration of the loop.</p>
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