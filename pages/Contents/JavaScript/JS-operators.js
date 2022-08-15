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


import JS_img11 from "../../../assets/img/js/js_img11.jpg"

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
                      <h2 className="text-white mb-0">Arithmetic Operators</h2>
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
                    <p>Arithmetic operators perform arithmetic functions on numbers (literals or variables).</p>
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
Multiplication
                  </Button>
                  <Button outline
                    color="warning"
                    href="#tdp"
                    className="d-block w-100 text-left my-1 mx-0"
                    size="sm"
                  >
Division
                  </Button>
                  <Button outline
                    color="warning"
                    href="#tdp"
                    className="d-block w-100 text-left my-1 mx-0"
                    size="sm"
                  >
The Modulus
                  </Button>
                  <Button outline
                    color="warning"
                    href="#tdp"
                    className="d-block w-100 text-left my-1 mx-0"
                    size="sm"
                  >
Increment &amp; Decrement
                  </Button><Button outline
                    color="warning"
                    href="#tdp"
                    className="d-block w-100 text-left my-1 mx-0"
                    size="sm"
                  >
Assignment Operators
                  </Button>
                  <Button outline
                    color="warning"
                    href="#tdp"
                    className="d-block w-100 text-left my-1 mx-0"
                    size="sm"
                  >
Comparison Operators
                  </Button>
                  <Button outline
                    color="warning"
                    href="#tdp"
                    className="d-block w-100 text-left my-1 mx-0"
                    size="sm"
                  >
Logical Operators
                  </Button>
                  <Button outline
                    color="warning"
                    href="#tdp"
                    className="d-block w-100 text-left my-1 mx-0"
                    size="sm"
                  >
Conditional (Ternary) Operator
                  </Button><Button outline
                    color="warning"
                    href="#tdp"
                    className="d-block w-100 text-left my-1 mx-0"
                    size="sm"
                  >
String Operators
                  </Button>

                  </CardBody>
              </Card>
            </Col>
          </Row>
          <Row className="mt-5">
            <Col md="9">
            <Table class="table table-striped w-50" responsive>
                <thead>
                  <tr>
                    <th scope="col"><strong>Char</strong></th>
                    <th scope="col"><strong>Operater</strong></th>
                    <th scope="col"><strong>Description</strong></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">+</th>
                    <td><strong>Addition</strong></td>
                    <td><strong>25 + 5 = 30</strong></td>
                  </tr>
                  <tr>
                    <th scope="row">-</th>
                    <td><strong>Subtaction</strong></td>
                    <td><strong>25 - 5 = 20</strong></td>
                  </tr>
                  <tr>
                    <th scope="row">*</th>
                    <td><strong>Multiplication</strong></td>
                    <td><strong>10 * 2 = 200</strong></td>
                  </tr>
                  <tr>
                    <th scope="row">/</th>
                    <td><strong>Division</strong></td>
                    <td><strong>20 / 2 = 10</strong></td>
                  </tr>
                  <tr>
                    <th scope="row">%</th>
                    <td><strong>Modulus</strong></td>
                    <td><strong>56 % 3 = 2</strong></td>
                  </tr>
                  <tr>
                    <th scope="row">++</th>
                    <td><strong>Increment</strong></td>
                    <td><strong>var a = 10; a++; Now a = 11</strong></td>
                  </tr>
                  <tr>
                    <th scope="row">--</th>
                    <td><strong>Decrement</strong></td>
                    <td><strong>var a = 10; a--; Now a = 9</strong></td>
                  </tr>
                
                </tbody>
              </Table>

              <p>In the example below, the addition operator is used to determine the sum of two numbers.</p>
              <p>var x = 10 + 5;</p>
              <p>document.write(x);</p>
              <p><br/></p>
              <p>// Outputs 15</p>
              <p><br/></p>
              <p>You can add as many numbers or variables together as you want or need to.</p>
              <p>var x = 10;</p>
              <p>var y = x + 5 + 22 + 45 + 6548;</p>
              <p>document.write(y);</p>
              <p><br/></p>
              <p>//Outputs 6630</p>
              <p><br/></p>
              <p>You can get the result of a string expression using the eval() function, which takes a string expression argument like eval(&quot;10 * 20 + 8&quot;) and returns the result. If the argument is empty, it returns undefined</p>
              <p><br/></p>

              <h1><strong>Multiplication</strong></h1>
              <p><br/></p>
              <p>The multiplication operator (*) multiplies one number by the other.</p>
              <p>var x = 10 * 5;</p>
              <p>document.write(x);</p>
              <p><br/></p>
              <p>// Outputs 50</p>
              <p><br/></p>
              <p>10 * &apos;5&apos; or &apos;10&apos; * &apos;5&apos; gives the same result. Multiplying a number with string values like &apos;sololearn&apos; * 5 returns NaN (Not a Number).</p>
              
              <h1><strong>Division</strong></h1>
              <p><br/></p>
              <p>The / operator is used to perform division operations:</p>
              <p>var x = 100 / 5;</p>
              <p>document.write(x);</p>
              <p><br/></p>
              <p>// Outputs 20</p>
              <p><br/></p>
              <p>Remember to handle cases where there could be a division by 0.</p>

              <h1><strong>The Modulus</strong></h1>
              <p><br/></p>
              <p>Modulus (%) operator returns the division remainder (what is left over).</p>
              <p>var myVariable = 26 % 6;</p>
              <p><br/></p>
              <p>//myVariable equals 2</p>
              <p><br/></p>
              <p>In JavaScript, the modulus operator is used not only on integers, but also on floating point numbers.</p>
              
              <h1><strong>Increment &amp; Decrement</strong></h1>
              <p><br/></p>
              <p><strong>Increment ++</strong></p>
              <p>The increment operator increments the numeric value of its operand by one. If placed before the operand, it returns the incremented value. If placed after the operand, it returns the original value and then increments the operand.</p>
              <p><strong>Decrement --</strong></p>
              <p>The decrement operator decrements the numeric value of its operand by one. If placed before the operand, it returns the decremented value. If placed after the operand, it returns the original value and then decrements the operand.</p>
              <p><br/></p>
              <p><strong>Some examples:</strong></p>
              <p><br/></p>

              <Table class="table table-striped w-50 " responsive>
                <thead>
                  <tr>
                    <th scope="col"><strong>Operater</strong></th>
                    <th scope="col"><strong>Description</strong></th>
                    <th scope="col"><strong>Example</strong></th>
                    <th scope="col"><strong>Result</strong></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">var++</th>
                    <td><strong>Post Increment</strong></td>
                    <td><strong>var a = 0, b = 10;<br/> var a = b++;</strong></td>
                    <td><strong>a = 10 and b = 11</strong></td>
                  </tr>
                  <tr>
                    <th scope="row">++var</th>
                    <td><strong>Pre Increment</strong></td>
                    <td><strong>var a = 0, b = 10;<br/> var a = ++b;</strong></td>
                    <td><strong>a = 11 and b = 11</strong></td>
                  </tr>
                  <tr>
                    <th scope="row">var--</th>
                    <td><strong>Post Decrement</strong></td>
                    <td><strong>var a = 0, b = 10;<br/> var a = b--;</strong></td>
                    <td><strong>a = 10 and b = 9</strong></td>
                  </tr>
                  <tr>
                    <th scope="row">--var</th>
                    <td><strong>Pre Decrement</strong></td>
                    <td><strong>var a = 0, b = 10;<br/> var a = --b;</strong></td>
                    <td><strong>a = 9 and b = 9</strong></td>
                  </tr>
                </tbody>
              </Table>

              <p>As in school mathematics, you can change the order of the arithmetic operations by using parentheses.Example: var x = (100 + 50) * 3;</p>

              <h1><strong>Assignment Operators</strong></h1>

              <p>Assignment operators assign values to JavaScript variables.</p>
              <Table class="table table-striped w-50" responsive>
                <thead>
                  <tr>
                    <th scope="col"><strong>Operator</strong></th>
                    <th scope="col"><strong>Example</strong></th>
                    <th scope="col"><strong>is equivalent to</strong></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">=</th>
                    <td><strong>x = y</strong></td>
                    <td><strong>x = y</strong></td>
                  </tr>
                  <tr>
                    <th scope="row">+=</th>
                    <td><strong>x += y</strong></td>
                    <td><strong>x = x + y</strong></td>
                  </tr>
                  <tr>
                    <th scope="row">-=</th>
                    <td><strong>x -= y</strong></td>
                    <td><strong>x = x - y</strong></td>
                  </tr>
                  <tr>
                    <th scope="row">*=</th>
                    <td><strong>x *= y</strong></td>
                    <td><strong>x = x * y</strong></td>
                  </tr>
                  <tr>
                    <th scope="row">/=</th>
                    <td><strong>x /= y</strong></td>
                    <td><strong>x = x / y</strong></td>
                  </tr>
                  <tr>
                    <th scope="row">%=</th>
                    <td><strong>x %= y</strong></td>
                    <td><strong>x = x % y</strong></td>
                  </tr>
                </tbody>
              </Table>

              <p>You can use multiple assignment operators in one line, such as x -= y += 9.</p>
              <br/>
              
              <h1><strong>Comparison Operators</strong></h1>

              <p>Comparison operators are used in logical statements to determine equality or difference between variables or values. They return x<strong>true</strong> or <strong>false</strong>.</p>
              <p><br/></p>
              <p>The <strong>equal to (==)</strong> operator checks whether the operands&apos; values are equal.</p>
              <p>var num = 10;&nbsp;</p>
              <p>// num == 8 will return <strong>false</strong></p>
              <p><br/></p>
              <p>You can check all types of data; comparison operators always return true or false.&nbsp;</p>
              <p>The table below explains the comparison operators.</p>
              <p><br/></p>

              <Table class="table table-striped w-50" responsive>
                <thead>
                  <tr>
                    <th scope="col"><strong>Operator</strong></th>
                    <th scope="col"><strong>Description</strong></th>
                    <th scope="col"><strong>Example</strong></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">==</th>
                    <td><strong>equal to</strong></td>
                    <td><strong>5 == 10 false</strong></td>
                  </tr>
                  <tr>
                    <th scope="row">===</th>
                    <td><strong>identical (equal and of same type)</strong></td>
                    <td><strong>5 === 10 false</strong></td>
                  </tr>
                  <tr>
                    <th scope="row">!=</th>
                    <td><strong>not equal to</strong></td>
                    <td><strong>5 != 10 true</strong></td>
                  </tr>
                  <tr>
                    <th scope="row">!==</th>
                    <td><strong>not identical</strong></td>
                    <td><strong>10 !== 10 false</strong></td>
                  </tr>
                  <tr>
                    <th scope="row">&gt;</th>
                    <td><strong>greater than</strong></td>
                    <td><strong>10 &gt; 5 true</strong></td>
                  </tr>
                  <tr>
                    <th scope="row">&gt;=</th>
                    <td><strong>grreater than or equal to</strong></td>
                    <td><strong>10 &gt;= 5 true</strong></td>
                  </tr>
                  <tr>
                    <th scope="row">&lt;</th>
                    <td><strong>leass than</strong></td>
                    <td><strong>10 &lt; 5 false</strong></td>
                  </tr>
                  <tr>
                    <th scope="row">&lt;=</th>
                    <td><strong>less than or equal to</strong></td>
                    <td><strong>10 &lt;= 5 false</strong></td>
                  </tr>
                </tbody>
              </Table>

              <p>When using operators, be sure that the arguments are of the same data type; numbers should be compared with numbers, strings with strings, and so on.</p>
              <br/>

              <h1><strong>Logical Operators</strong></h1>

              <p><strong>Logical</strong> Operators, also known as <strong>Boolean</strong> Operators, evaluate the expression and return <strong>true</strong> or <strong>false</strong>.</p>
              <p><br/></p>
              <p>The table below explains the logical operators <strong>(AND, OR, NOT)</strong>.</p>

              <Table class="table table-striped w-50" responsive>
                <thead>
                  <tr>
                    <th scope="col"><strong>Logical Operators</strong></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">&amp;&amp;</th>
                    <td><strong>returns true, if both operands are true</strong></td>
                  </tr>
                  <tr>
                    <th scope="row">||</th>
                    <td><strong>returns true, if one of the operands is true</strong></td>
                  </tr>
                  <tr>
                    <th scope="row">!</th>
                    <td><strong>returns true, if the operand is false, and flase, if the operand is true</strong></td>
                  </tr>
                </tbody>
              </Table>

              <p>You can check all types of data; comparison operators always return true or false.&nbsp;</p>
              <p>In the following example, we have connected two Boolean expressions with the <strong>AND</strong> operator.</p>
              <p  style={{ backgroundColor: "#EEEEEE", textAlign: "left" }}>(4 &gt; 2) &amp;&amp; (10 &lt; 15)&nbsp;</p>

              <p><br/></p>
              <p>For this expression to be <strong>true</strong>, both conditions must be <strong>true</strong>.</p>
              <p>- The first condition determines whether 4 is greater than 2, which is <strong>true</strong>.</p>
              <p>- The second condition determines whether 10 is less than 15, which is also <strong>true</strong>.</p>
              <p>Based on these results, the whole expression is found to be <strong>true</strong>.</p>

              <h1><strong>Conditional (Ternary) Operator</strong></h1>
              <p><br/></p>
              <p>Another JavaScript conditional operator assigns a value to a <span classname="text-info"><strong>variable</strong></span>, based on some condition.</p>
              <p><strong>Syntax:</strong></p>
              <p  style={{ backgroundColor: "#EEEEEE", textAlign: "left" }}>variable = (condition) ? value1: value2&nbsp;</p>
              <p><strong>For example:</strong></p>
              <p  style={{ backgroundColor: "#EEEEEE", textAlign: "left" }}>var isAdult = (age &lt; 18) ? &quot;Too young&quot;: &quot;Old enough&quot;;&nbsp;</p>
              <p><br/></p>
              <p>If the variable age is a value below 18, the value of the variable isAdult will be &quot;Too young&quot;. Otherwise the value of isAdult will be &quot;Old enough&quot;.</p>
              <div  style={{ backgroundColor: "#EAEA00", textAlign: "left" }}>
                <p>Logical operators allow you to connect as many expressions as you wish.</p>
              </div>
              <p><br/></p>

              <h1><strong>String Operators</strong></h1>

              <p>The most useful operator for strings is concatenation, represented by the + sign.</p>
              <p>Concatenation can be used to build strings by joining together multiple strings, or by joining strings with other types:</p>

              <Card className="text-primary w-50" style={{ backgroundColor: "#EEEEEE", textAlign: "left" }}>
                <strong>
                  <p>var mystring1 = &quot;I am learning &quot;;</p>
                  <p>var mystring2 = &quot;JavaScript with SoloLearn.&quot;;</p>
                  <p>document.write(mystring1 + mystring2);</p>
                </strong>
              </Card>
              
              <p><br/></p>
              <p>The above example declares and initializes two  <span classname="text-info"><strong>string</strong></span> variables, and then concatenates them.</p>
              <p><br/></p>

              <Card className="imgclasss w-50">
                <img src={JS_img11}></img>
              </Card>

              <p>Numbers in quotes are treated as strings: "42" is not the number 42, it is a string that includes two characters, 4 and 2.</p>

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