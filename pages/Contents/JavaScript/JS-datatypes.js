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


import JS_img9 from "../../../assets/img/js/js_img9.jpg"
import JS_img10 from "../../../assets/img/js/js_img10.jpg"


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
                      <h2 className="text-white mb-0">Data Types</h2>
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
                      <p>The term <strong>data type</strong> refers to the types of values with which a program can work. JavaScript variables can hold many data types, such as <strong>numbers, strings, arrays,</strong> and more.</p>
                    <p><br/></p>
                    <p>Unlike many other programming languages, JavaScript does not define different types of numbers, like integers, short, long, floating-point, etc.</p>
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
Floating-Point Numbers
                  </Button>
                  <Button outline
                    color="warning"
                    href="#tdp"
                    className="d-block w-100 text-left my-1 mx-0"
                    size="sm"
                  >
Strings
                  </Button>
                  <Button outline
                    color="warning"
                    href="#tdp"
                    className="d-block w-100 text-left my-1 mx-0"
                    size="sm"
                  >
Booleans
                  </Button>
                  </CardBody>
              </Card>
            </Col>
          </Row>
          <Row className="mt-5">
            <Col md="9">
            <p>JavaScript numbers can be written with or without decimals.var num = 42; // A number without decimals</p>
              <p>This variable can be easily changed to other types by assigning to it any other data type value, like num = &apos;some random string&apos;.</p>
              
              <h1><strong>Floating-Point Numbers</strong></h1>
              <p><br/></p>
              <p>JavaScript numbers can also have decimals.</p>

              <Card className="text-primary w-50" style={{ backgroundColor: "#EEEEEE", textAlign: "left" }}>
                <strong>
                  <p>&lt;script&gt;</p>
                  <p>var price = 55.55;</p>
                  <p>document.write(price);</p>
                 <p>&lt;/script&gt;</p>
                </strong>
              </Card>
              
              <p><br/></p>
              <p><strong>Result:</strong></p>
              <p><br/></p>

              <Card className="imgclasss w-50">
                <img src={JS_img9}></img>
              </Card>

              <p>JavaScript numbers are always stored as <strong>double precision floating point numbers.</strong></p>

              <h1><strong>Strings</strong></h1>

              <p>JavaScript <strong>strings</strong> are used for storing and manipulating text.</p>
              <p>A <span classname="text-info"><strong>string</strong></span> can be any text that appears within <strong>quotes</strong>. You can use single or double quotes.var name = &apos;John&apos;;</p>
              <p>var text = &quot;My name is John Smith&quot;;</p>
              <p>You can use quotes inside a <span classname="text-info"><strong>string</strong></span>, as long as they don&apos;t match the quotes surrounding the <span classname="text-info"><strong>string</strong></span>.var text = &quot;My name is &apos;John&apos; &quot;;</p>
              <p>You can get double quotes inside of double quotes using the escape character like this: \&quot; or \&apos; inside of single quotes.</p>
              <p><br/></p>
              <p>As strings must be written within quotes, quotes inside the string must be handled. The <strong>backslash (\) escape character</strong> turns special characters into string characters.</p>
              <p>var sayHello = &apos;Hello world! \&apos;I am a JavaScript programmer.\&apos; &apos;;</p>
              <p>document.write(sayHello);</p>
              <p><strong>Result:</strong></p>
              <p><br/></p>

              <Card className="imgclasss w-50">
                <img src={JS_img10}></img>
              </Card>

              <p>The escape character (\) can also be used to insert other special characters into a <span classname="text-info"><strong>string</strong></span>.These special characters can be added to a text <span classname="text-info"><strong>string</strong></span> using the backslash sign.</p>

              <Table class="table table-striped w-50" responsive>
                <thead>
                  <tr>
                    <th scope="col"><strong>Code</strong></th>
                    <th scope="col"><strong>Output</strong></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">\&apos;</th>
                    <td><strong>single quote</strong></td>
                  </tr>
                  <tr>
                    <th scope="row">\&quot;</th>
                    <td><strong>double quote</strong></td>
                  </tr>
                  <tr>
                    <th scope="row">\\</th>
                    <td><strong>backslash</strong></td>
                  </tr>
                  <tr>
                    <th scope="row">\n</th>
                    <td><strong>new line</strong></td>
                  </tr>
                  <tr>
                    <th scope="row">\r</th>
                    <td><strong>carriage return</strong></td>
                  </tr>
                  <tr>
                    <th scope="row">\t</th>
                    <td><strong>tab</strong></td>
                  </tr>
                  <tr>
                    <th scope="row">\b</th>
                    <td><strong>backspace</strong></td>
                  </tr>
                  <tr>
                    <th scope="row">\f</th>
                    <td><strong>form feed</strong></td>
                  </tr>
                
                </tbody>
              </Table>

              <p>If you begin a string with a single quote, then you should also end it with a single quote. The same rule applies to double quotes. Otherwise, JavaScript will become confused.</p>

              <h1><strong>Booleans</strong></h1>

              <p>In JavaScript Boolean, you can have one of two values, either <strong>true</strong> or <strong>false</strong>.</p>
              <p>These are useful when you need a data type that can only have one of two values, such as Yes/No, On/Off, True/False.</p>
              <p><br/></p>
              <p><strong>Example</strong>:var isActive = true;&nbsp;</p>
              <p>var isHoliday = false;</p>
              <p>The Boolean value of 0 (zero), null, undefined, empty string is <strong>false</strong>.</p>
              <p>Everything with a &quot;real&quot; value is <strong>true</strong>.</p>
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