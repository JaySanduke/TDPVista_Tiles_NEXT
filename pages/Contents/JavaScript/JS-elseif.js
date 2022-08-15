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


import JS_img14 from "../../../assets/img/js/js_img14.jpg"
import JS_img15 from "../../../assets/img/js/js_img15.jpg"

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
                      <h2 className="text-white mb-0">else if</h2>
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
                    <p><strong>JavaScript</strong> is one of the most popular programming languages on earth and is used to add interactivity to webpages, process data, as well as create various applications (mobile apps, desktop apps, games, and more)</p>
                    <p>Learning the fundamentals of a language will enable you to create the program you desire, whether client-side or server-side.</p>
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
               
                  
                  </CardBody>
              </Card>
            </Col>
          </Row>
          <Row className="mt-5">
            <Col md="9">
            <p>You can use the <strong>else if statement</strong> to specify a new condition if the first condition is false.</p>
              <p><br/></p>
              <p><strong>Example:</strong></p>

              <Card className="text-primary w-50" style={{ backgroundColor: "#EEEEEE", textAlign: "left" }}>
                <strong>
                  <p>var course = 1;</p>
                  <p><strong>if</strong> (course == 1) &#123;</p>
                  <p>document.write(&quot;&lt;h1&gt;HTML Tutorial&lt;/h1&gt;&quot;);</p>
                  <p>&#125; <strong>else if</strong> (course == 2) &#123;</p>
                  <p>document.write(&quot;&lt;h1&gt;CSS Tutorial&lt;/h1&gt;&quot;);</p>
                  <p>&#125; <strong>else</strong> &#123;</p>
                  <p>document.write(&quot;&lt;h1&gt;JavaScript Tutorial&lt;/h1&gt;&quot;);</p>
                  <p>&#125;</p>
                </strong>
              </Card>
              

              <p><br/></p>
              <p>The above code says:</p>
              <p>- <strong>if</strong> course is equal to 1, output &quot;HTML Tutorial&quot;;</p>
              <p>- <strong>else</strong>, <strong>if</strong> course is equal to 2, output &quot;CSS Tutorial&quot;;</p>
              <p>- if none of the above condition is true, then output &quot;JavaScript Tutorial&quot;;</p>
              <p><br/></p>
              <p><strong>course</strong> is equal to 1, so we get the following result:</p>
              <p><br/></p>

              <Card className="imgclasss w-50">
                <img src={JS_img14}></img>
              </Card>

              <p>The final <strong>else</strong> statement &quot;ends&quot; the <strong>else if</strong> statement and should be always written after the if and else if statements.</p>
              <p>The final <strong>else</strong> block will be executed when <strong>none</strong> of the conditions is true.</p>
              <p><br/></p>
              <p>Let&apos;s change the value of the <strong>course</strong> <span classname="text-info"><strong>variable</strong></span> in our previous example.</p>

              <Card className="text-primary w-50" style={{ backgroundColor: "#EEEEEE", textAlign: "left" }}>
                <strong>
                  <p>var course = 3;</p>
                  <p>if (course == 1) &#123;</p>
                  <p>document.write(&quot;&lt;h1&gt;HTML Tutorial&lt;/h1&gt;&quot;);</p>
                  <p>&#125; else if (course == 2) &#123;</p>
                  <p>document.write(&quot;&lt;h1&gt;CSS Tutorial&lt;/h1&gt;&quot;);</p>
                  <p>&#125; else &#123;</p>
                  <p>document.write(&quot;&lt;h1&gt;JavaScript Tutorial&lt;/h1&gt;&quot;);</p>
                  <p>&#125;</p>
                </strong>
              </Card>
              

              <p><strong>The result:</strong></p>
              <p><br/></p>

              <Card className="imgclasss w-50">
                <img src={JS_img15}></img>
              </Card>

              <p>You can write as many <strong>else if</strong> statements as you need.</p><br/>
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