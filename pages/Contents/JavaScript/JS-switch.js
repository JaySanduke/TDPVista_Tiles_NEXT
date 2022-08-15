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
                      <h2 className="text-white mb-0">Switch</h2>
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
                    <p>In cases when you need to test for multiple conditions, writing <strong>if else</strong> statements for each condition might not be the best solution.</p>
                  <p>The <strong>switch statement</strong> is used to perform different actions based on different conditions.</p>
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
The switch Statement
                  </Button>
                  <Button outline
                    color="warning"
                    href="#tdp"
                    className="d-block w-100 text-left my-1 mx-0"
                    size="sm"
                  >
The break Keyword
                  </Button>
                  <Button outline
                    color="warning"
                    href="#tdp"
                    className="d-block w-100 text-left my-1 mx-0"
                    size="sm"
                  >
The default Keyword
                  </Button>
                  
                  </CardBody>
              </Card>
            </Col>
          </Row>
          <Row className="mt-5">
            <Col md="9">
            <Card className="text-primary w-50" style={{ backgroundColor: "#EEEEEE", textAlign: "left" }}>
                <strong>
                  <p><strong>Syntax:switch</strong> (expression) &#123;</p>
                  <p><strong>case</strong> n1:&nbsp;</p>
                  <p>statements</p>
                  <p><strong>break</strong>;</p>
                  <p><strong>case</strong> n2:&nbsp;</p>
                  <p>statements</p>
                  <p><strong>break</strong>;</p>
                  <p><strong>default</strong>:&nbsp;</p>
                  <p>statements</p>
                  <p>&#125;</p>
                </strong>
              </Card>
              
              <p>The switch expression is evaluated once. The value of the expression is compared with the values of each <strong>case</strong>. If there is a match, the associated block of code is executed.</p>
              <p>You can achieve the same result with multiple if...else statements, but the switch statement is more effective in such situations.</p><br/>

              <h1><strong>The switch Statement</strong></h1>
              <p><br/></p>
              <p>Consider the following example.</p>

              <Card className="text-primary w-50" style={{ backgroundColor: "#EEEEEE", textAlign: "left" }}>
                <strong>
                  <p>var day = 2;</p>
                  <p>switch (day) &#123;</p>
                  <p>case 1:</p>
                  <p>document.write(&quot;Monday&quot;);</p>
                  <p>break;</p>
                  <p>case 2:</p>
                  <p>document.write(&quot;Tuesday&quot;);</p>
                  <p>break;</p>
                  <p>case 3:</p>
                  <p>document.write(&quot;Wednesday&quot;);</p>
                  <p>break;</p>
                  <p>default:</p>
                  <p>document.write(&quot;Another day&quot;);</p>
                  <p>&#125;</p>
                  <p><br/></p>
                  <p>// Outputs &quot;Tuesday&quot;</p>
                </strong>
              </Card>
              
              <p><br/></p>
              <p>You can have as many <strong>case</strong> statements as needed.</p><br/>

              <h1><strong>The break Keyword</strong></h1>
              <p><br/></p>
              <p>When JavaScript code reaches a <strong>break</strong> keyword, it breaks out of the switch block.</p>
              <p>This will stop the execution of more code and case testing inside the block.</p>
              <p>Usually, a <strong>break</strong> should be put in each case statement.</p>
              <p><br/></p>
              
              <h1><strong>The default Keyword</strong></h1>
              <p><br/></p>
              <p>The <strong>default</strong> keyword specifies the code to run if there is no case match.</p>

              <Card className="text-primary w-50" style={{ backgroundColor: "#EEEEEE", textAlign: "left" }}>
                <strong>
                  <p>var color =&quot;<strong>yellow</strong>&quot;;</p>
                  <p>switch(color) &#123;</p>
                  <p>case &quot;blue&quot;:&nbsp;</p>
                  <p>document.write(&quot;This is blue.&quot;);</p>
                  <p>break;</p>
                  <p>case &quot;red&quot;:&nbsp;</p>
                  <p>document.write(&quot;This is red.&quot;);</p>
                  <p>break;</p>
                  <p>case &quot;green&quot;:&nbsp;</p>
                  <p>document.write(&quot;This is green.&quot;);&nbsp;</p>
                  <p>break;</p>
                  <p>case &quot;orange&quot;:&nbsp;</p>
                  <p>document.write(&quot;This is orange.&quot;);&nbsp;</p>
                  <p>break;</p>
                  <p><strong>default:</strong></p>
                  <p>document.write(&quot;Color not found.&quot;);</p>
                  <p>&#125;</p>
                  <p><br/></p>
                  <p>//Outputs &quot;Color not found.&quot;</p>
                </strong>
              </Card>
              
              <p><br/></p>
              <p>The default block can be omitted, if there is no need to handle the case when no match is found.</p>
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