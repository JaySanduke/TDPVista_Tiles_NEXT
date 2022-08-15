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

import JS_img8 from "../../../assets/img/js/js_img8.jpg"

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
                      <h2 className="text-white mb-0">Variables</h2>
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
                    <p><strong>Variables</strong> are containers for storing data values. The value of a <span classname="text-info"><strong>variable</strong></span> can change throughout the program.</p>
                    <p>Use the <span classname="text-info"><strong>var</strong></span> keyword to declare a variable:<strong>var</strong> x = 10;</p>
                    <p>In the example above, the value <strong>10</strong> is assigned to the variable <strong>x</strong>.</p>
                    <p>JavaScript is case sensitive. For example, the variables lastName and lastname, are two different variables.</p>
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
The Equal Sign
                  </Button>
                  <Button outline
                    color="warning"
                    href="#tdp"
                    className="d-block w-100 text-left my-1 mx-0"
                    size="sm"
                  >
Sign Variables
                  </Button>
                  <Button outline
                    color="warning"
                    href="#tdp"
                    className="d-block w-100 text-left my-1 mx-0"
                    size="sm"
                  >
URL Encoding
                  </Button>
                  <Button outline
                    color="warning"
                    href="#tdp"
                    className="d-block w-100 text-left my-1 mx-0"
                    size="sm"
                  >
Naming Variables
                  </Button>
                  <Button outline
                    color="warning"
                    href="#tdp"
                    className="d-block w-100 text-left my-1 mx-0"
                    size="sm"
                  >
Reserved Words in JavaScript
                  </Button>
                  
                  </CardBody>
              </Card>
            </Col>
          </Row>
          <Row className="mt-5">
            <Col md="9">
              <h1><strong>The Equal Sign</strong></h1>
              <p><br/></p>
              <p>In JavaScript, the equal sign (=) is called the &quot;assignment&quot; operator, rather than an &quot;equal to&quot; operator.</p>
              <p>For example, <strong>x = y</strong> will assign the value of <strong>y</strong> to <strong>x</strong>.</p>
              <p>A variable can be declared without a value. The value might require some calculation, something that will be provided later, like user input.</p>
              <p>A variable declared without a value will have the value <strong>undefined</strong>.</p>
              
              <h1><strong>Sign Variables</strong></h1>
              <p><br/></p>
              <p>Let&apos;s assign a value to a <span classname="text-info"><strong>variable</strong></span> and output it to the browser.</p>
              <p>var x = 100;</p>
              <p>document.write(x);</p>
              <p><strong>Result:</strong></p>
              <p><br/></p>

              <Card className="imgclasss w-50">
                <img src={JS_img8}></img>
              </Card>
              <p>Using variables is useful in many ways. You might have a thousand lines of code that may include the <span classname="text-info"><strong>variable</strong></span> x. When you change the value of x one time, it will automatically be changed in <strong>all places</strong> where you used it.</p>
              <p>Every written &quot;instruction&quot; is called a <strong>statement</strong>. JavaScript statements are separated by <strong>semicolons</strong>.</p>
              <p><br/></p>
              
              <h1><strong>Naming Variables</strong></h1>
              <p><br/></p>
              <p>JavaScript <span classname="text-info"><strong>variable</strong></span> names are case-sensitive.</p>
              <p>In the example below we changed x to uppercase:</p>
              <p>var <strong>x</strong> = 100;</p>
              <p>document.write(<strong>X</strong>);</p>
              <p><br/></p>
              <p>Thi/s code will not result in any output, as x and X are two different variables.</p>
              <p>Naming rules:</p>
              <p>- The first character <strong>must be</strong> a letter, an underscore (_), or a dollar sign ($). Subsequent characters may be letters, digits, underscores, or dollar signs.</p>
              <p>- Numbers are <strong>not allowed</strong> as the first character.</p>
              <p>- Variable names <strong>cannot</strong> include a <strong>mathematical or logical operator</strong> in the name. For instance, 2*something or this+that;</p>
              <p>- JavaScript names <strong>must not contain spaces</strong>.</p>
              <p>Hyphens are not allowed in JavaScript. It is reserved for subtractions.</p>
              <p>There are some other rules to follow when naming your JavaScript variables:</p>
              <p><br/></p>
              <p>- You <strong>must not</strong> use any <strong>special symbols</strong>, like my#num, num%, etc.</p>
              <p>- Be sure that you do not use any of the following JavaScript reserved words.</p>
              <p><br/></p>

              <h1><strong>Reserved Words in JavaScript</strong></h1> 

              <table class="table table-striped w-50">
                <tbody>
                  <tr>
                    <th><strong>abstract</strong></th>
                    <td><strong>else</strong></td>
                    <td><strong>instanceof</strong></td>
                    <td><strong>switch</strong></td>
                  </tr>
                  <tr>
                    <th><strong>boolean</strong></th>
                    <td><strong>enum</strong></td>
                    <td><strong>int</strong></td>
                    <td><strong>synchronized</strong></td>
                  </tr>
                  <tr>
                    <th><strong>break</strong></th>
                    <td><strong>export</strong></td>
                    <td><strong>interface</strong></td>
                    <td><strong>this</strong></td>
                  </tr>
                  <tr>
                    <th><strong>byte</strong></th>
                    <td><strong>extends</strong></td>
                    <td><strong>long</strong></td>
                    <td><strong>throw</strong></td>
                  </tr>
                  <tr>
                    <th><strong>case</strong></th>
                    <td><strong>false</strong></td>
                    <td><strong>native</strong></td>
                    <td><strong>throws</strong></td>
                  </tr>
                  <tr>
                    <th><strong>catch</strong></th>
                    <td><strong>final</strong></td>
                    <td><strong>new</strong></td>
                    <td><strong>transient</strong></td>
                  </tr>
                  <tr>
                    <th><strong>char</strong></th>
                    <td><strong>finally</strong></td>
                    <td><strong>null</strong></td>
                    <td><strong>true</strong></td>
                  </tr>
                  <tr>
                    <th><strong>class</strong></th>
                    <td><strong>float</strong></td>
                    <td><strong>package</strong></td>
                    <td><strong>try</strong></td>
                  </tr>
                  <tr>
                    <th><strong>cont</strong></th>
                    <td><strong>for</strong></td>
                    <td><strong>private</strong></td>
                    <td><strong>typeof</strong></td>
                  </tr>
                  <tr>
                    <th><strong>continue</strong></th>
                    <td><strong>function</strong></td>
                    <td><strong>protected</strong></td>
                    <td><strong>var</strong></td>
                  </tr>
                  <tr>
                    <th><strong>debugger</strong></th>
                    <td><strong>public</strong></td>
                    <td><strong>goto</strong></td>
                    <td><strong>void</strong></td>
                  </tr>
                  <tr>
                    <th><strong>default</strong></th>
                    <td><strong>if</strong></td>
                    <td><strong>return</strong></td>
                    <td><strong>volatile</strong></td>
                  </tr>
                  <tr>
                    <th><strong>delete</strong></th>
                    <td><strong>implements</strong></td>
                    <td><strong>short</strong></td>
                    <td><strong>while</strong></td>
                  </tr>
                  <tr>
                    <th><strong>do</strong></th>
                    <td><strong>import</strong></td>
                    <td><strong>static</strong></td>
                    <td><strong>with</strong></td>
                  </tr>
                  <tr>
                    <th><strong>double</strong></th>
                    <td><strong>in</strong></td>
                    <td><strong>super</strong></td>
                    <td><strong></strong></td>
                  </tr>
                </tbody>
              </table>
            
              <p>When you get more familiar with JavaScript, remembering these keywords will be much easier.</p>
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