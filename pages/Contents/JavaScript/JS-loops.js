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


import JS_img16 from "../../../assets/img/js/js_img16.jpg"
import JS_img17 from "../../../assets/img/js/js_img17.jpg"

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
                      <h2 className="text-white mb-0">Loops</h2>
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
                    <p>Loops can execute a block of code a number of times. They are handy in cases in which you want to run the same code repeatedly, adding a different value each time.</p>
              
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
The For Loop
                  </Button>
                  <Button outline
                    color="warning"
                    href="#tdp"
                    className="d-block w-100 text-left my-1 mx-0"
                    size="sm"
                  >
TheWhile Loop
                  </Button>
                  
                  </CardBody>
              </Card>
            </Col>
          </Row>
          <Row className="mt-5">
            <Col md="9">
            <p>JavaScript has three types of loops: <strong>for</strong>, <strong>while</strong>, and <strong>do while</strong>.</p>
              <p><br/></p>
              <p>The <strong>for</strong> loop is commonly used when creating a loop.</p>
              <p><br/></p>
              <p>The syntax:for (statement 1; statement 2; statement 3) &#123;</p>
              <p>code block to be executed</p>
              <p>&#125;</p>
              <p><strong>Statement 1</strong> is executed before the loop (the code block) starts.</p>
              <p><strong>Statement 2</strong> defines the condition for running the loop (the code block).</p>
              <p><strong>Statement 3</strong> is executed each time after the loop (the code block) has been executed.</p>
              <p>As you can see, the <strong>classic for loop</strong> has <strong>three</strong> components, or statements.</p>
              
              <h1><strong>The For Loop</strong></h1>
              
              <p>The example below creates a <strong>for</strong> loop that prints numbers 1 through 5.</p>

              <Card className="text-primary w-50" style={{ backgroundColor: "#EEEEEE", textAlign: "left" }}>
                <strong>
                  <p>&lt;html&gt;</p>
                  <p>&lt;head&gt; &lt;/head&gt;</p>
                  <p>&lt;body&gt;</p>
                  <p>&lt;script&gt;</p>
                  <p><strong>document.write</strong>(&quot;Hello World!&quot;);</p>
                  <p>&lt;/script&gt;</p>
                  <p>&lt;/body&gt;</p>
                  <p>&lt;/html&gt;</p>
                </strong>
              </Card>
              <p>for (<strong>i=1; i&lt;=5; i++</strong>) &#123;</p>
              <p>document.write(i + &quot;&lt;br /&gt;&quot;);</p>
              <p>&#125;</p>

              <p><br/></p>
              <p>In this example, <strong>Statement 1</strong> sets a <span classname="text-info"><strong>variable</strong></span> before the loop starts (<span className="text-info"><strong>var</strong></span> i = 1).</p>
              <p><strong>Statement 2</strong> defines the condition for the loop to run (i must be less than or equal to 5).</p>
              <p><strong>Statement 3</strong> increases a value (i++) each time the code block in the loop has been executed.</p>
              <p><br/></p>
              <p><strong>Result:</strong></p>
              <p><br/></p>

              <Card className="imgclasss w-50">
                <img src={JS_img16}></img>
              </Card>

              <p><strong>Statement 1</strong> is optional, and can be omitted, if your values are set before the loop starts.</p>
              
              <Card className="text-primary w-50" style={{ backgroundColor: "#EEEEEE", textAlign: "left" }}>
                <strong>
                  <p>var i = 1;</p>
                  <p>for (; i&lt;=5; i++) &#123;</p>
                  <p>document.write(i + &quot;&lt;br /&gt;&quot;);</p>
                  <p>&#125;</p>
                </strong>
              </Card>
              

              <p><br/></p>
              <p>Also, you can initiate more than one value in <strong>Statement 1</strong>, using commas to separate them.</p>
              
              <Card className="text-primary w-50" style={{ backgroundColor: "#EEEEEE", textAlign: "left" }}>
                <strong>
                  <p>for (<strong>i=1, text=&quot;&quot;</strong>; i&lt;=5; i++) &#123;</p>
                  <p>text = i;</p>
                  <p>document.write(i + &quot;&lt;br /&gt;&quot;);</p>
                  <p>&#125;</p>
                </strong>
              </Card>
              
              <p><br/></p>
              <p>ES6 introduces other for loop types; you can learn about them in the ES6 course later.</p>
              <p>If <strong>Statement 2</strong> returns true, the loop will start over again, if it returns false, the loop will end.</p>
              <p>Statement 2 is also optional.</p>
              <p>If you omit statement 2, you must provide a <strong>break</strong> inside the loop. Otherwise, the loop will never end.</p>
              <p><strong>Statement 3</strong> is used to change the initial <span classname="text-info"><strong>variable</strong></span>. It can do anything, including negative increment (i--), positive increment (i = i + 15), or anything else.</p>
              <p>Statement 3 is also optional, and it can be omitted if you increment your values inside the loop.</p>
              
              <Card className="text-primary w-50" style={{ backgroundColor: "#EEEEEE", textAlign: "left" }}>
                <strong>
                  <p>var i = 0;</p>
                  <p>for (; i &lt; 10; ) &#123;</p>
                  <p>document.write(i);</p>
                  <p>i++;</p>
                  <p>&#125;</p>
                </strong>
              </Card>
              
              <p><br/></p>
              <p>You can have multiple nested for loops.</p>
              
              <h1><strong>The While Loop</strong></h1>
              <p><br/></p>
              <p>The <strong>while</strong> loop repeats through a block of code, as long as a specified condition is <strong>true</strong>.</p>
              <p><br/></p>
              
              <Card className="text-primary w-50" style={{ backgroundColor: "#EEEEEE", textAlign: "left" }}>
                <strong>
                  <p><strong>Syntax:while</strong> (condition) &#123;&nbsp;</p>
                  <p>code block</p>
                  <p>&#125;</p>
                  <p>The <strong>condition</strong> can be any conditional statement that returns true or false.</p>
                  <p>Consider the following example.</p>
                  <p>var i=0;</p>
                  <p><strong>while</strong> (i&lt;=10) &#123;</p>
                  <p>document.write(i + &quot;&lt;br /&gt;&quot;);</p>
                  <p>i++;</p>
                  <p>&#125;</p>
                </strong>
              </Card>
              
              <p>The loop will continue to run as long as i is less than, or equal to, 10. Each time the loop runs, it will increase by 1.</p>
              <p><br/></p>
              <p>This will output the values from 0 to 10.</p>
              <p><br/></p>

              <Card className="imgclasss w-50">
                <img src={JS_img17}></img>
              </Card>

              <p>Be careful writing conditions. If a condition is always true, the loop will run forever.</p>
              <p>If you forget to increase the <span classname="text-info"><strong>variable</strong></span> used in the condition, the loop will never end.</p>
              <p>Make sure that the condition in a while loop eventually becomes false.</p>
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