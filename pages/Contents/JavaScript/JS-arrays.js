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

import JS_img27 from "../../../assets/img/js/js_img27.jpg"
import JS_img28 from "../../../assets/img/js/js_img28.jpg"

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
                      <h2 className="text-white mb-0">JavaScript Arrays</h2>
                    </div>
                    <div className="col">
                      
                    </div>
                  </Row>
                </CardHeader>
                <CardBody className="text-white" style={{  textAlign: "left" }}>
                <div className="text-light">
                  <p><strong>Arrays</strong> store multiple values in a single <span className="text-info"><strong>variable</strong></span>.</p>
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
Accessing an Array
                  </Button>
                  <Button outline
                    color="warning"
                    href="#tdp"
                    className="d-block w-100 text-left my-1 mx-0"
                    size="sm"
                  >
Creating Arrays
                  </Button>
                  <Button outline
                    color="warning"
                    href="#tdp"
                    className="d-block w-100 text-left my-1 mx-0"
                    size="sm"
                  >
Array literal
                  </Button>
                  <Button outline
                    color="warning"
                    href="#tdp"
                    className="d-block w-100 text-left my-1 mx-0"
                    size="sm"
                  >
The length Property
                  </Button>
                  <Button outline
                    color="warning"
                    href="#tdp"
                    className="d-block w-100 text-left my-1 mx-0"
                    size="sm"
                  >
Combining Arrays
                  </Button>
                  <Button outline
                    color="warning"
                    href="#tdp"
                    className="d-block w-100 text-left my-1 mx-0"
                    size="sm"
                  >
Associative Arrays                  </Button>

                  <Button outline
                    color="warning"
                    href="#tdp"
                    className="d-block w-100 text-left my-1 mx-0"
                    size="sm"
                  >
The Math Object
                  </Button>
                  <Button outline
                    color="warning"
                    href="#tdp"
                    className="d-block w-100 text-left my-1 mx-0"
                    size="sm"
                  >
Math Object Methods
                  </Button>
                  
                  </CardBody>
              </Card>
            </Col>
          </Row>
          <Row className="mt-5">
            <Col md="9">
              <p>To store three course names, you need three variables.var course1 =&quot;HTML&quot;;&nbsp;</p>
              <p>var course2 =&quot;CSS&quot;;&nbsp;</p>
              <p>var course3 =&quot;JS&quot;;&nbsp;</p>
              <p>But what if you had 500 courses? The solution is an <span className="text-info"><strong>array</strong></span>.var courses = <strong>new Array</strong>(&quot;HTML&quot;, &quot;CSS&quot;, &quot;JS&quot;);&nbsp;</p>
              <p>This syntax declares an array named <strong>courses</strong>, which stores three values, or elements.</p>
              <p><br/></p>

              <h1><strong>Accessing an Array</strong></h1>
              <p>You refer to an <span className="text-info"><strong>array</strong></span> element by referring to the index number written in <strong>square brackets</strong>.</p>
              <p>This statement accesses the value of the first element in <strong>courses</strong> and changes the value of the second element.var courses = new Array(&quot;HTML&quot;, &quot;CSS&quot;, &quot;JS&quot;);&nbsp;</p>
              <p>var course = courses<strong>[0]</strong>; // HTML</p>
              <p>courses<strong>[1]</strong> = &quot;C++&quot;; //Changes the second element&nbsp;</p>
              <p>[0] is the first element in an array. [1] is the second. Array indexes start with <strong>0</strong>.</p>
              <p>Attempting to access an index outside of the <span className="text-info"><strong>array</strong></span>, returns the value <span className="text-info"><strong>undefined</strong></span>.</p>

              <Card className="text-primary w-50" style={{ backgroundColor: "#EEEEEE", textAlign: "left" }}>
                <strong>
                  <p>var courses = new Array(&quot;HTML&quot;, &quot;CSS&quot;, &quot;JS&quot;);&nbsp;</p>
                  <p>document.write(courses[10]);</p>
                  <p>//Outputs <strong>&quot;undefined&quot;</strong></p>
                </strong>
              </Card>
              
              <p><br/></p>
              <p>Our <strong>courses</strong> array has just 3 elements, so the 10th index, which is the 11th element, does not exist (is undefined).</p>
              <p><br/></p>

              <h1><strong>Creating Arrays</strong></h1>
              <p>You can also declare an <span className="text-info"><strong>array</strong></span>, tell it the number of elements it will store, and add the elements later.</p>

              <Card className="text-primary w-50" style={{ backgroundColor: "#EEEEEE", textAlign: "left" }}>
                <strong>
                  <p>var courses = new Array(3);</p>
                  <p>courses[0] = &quot;HTML&quot;;</p>
                  <p>courses[1] = &quot;CSS&quot;;</p>
                  <p>courses[2] = &quot;JS&quot;;</p>
                </strong>
              </Card>
              
              <p><br/></p>
              <p>An array is a special type of <strong>object</strong>.</p>
              <p>An array uses <strong>numbers</strong> to access its elements, and an object uses <strong>names</strong> to access its members.&nbsp;</p>
              <p>JavaScript arrays are dynamic, so you can declare an <span className="text-info"><strong>array</strong></span> and not pass any arguments with the Array() <span className="text-info"><strong>constructor</strong></span>. You can then add the elements dynamically.</p>
              
              <Card className="text-primary w-50" style={{ backgroundColor: "#EEEEEE", textAlign: "left" }}>
                <strong>
                  <p>var courses = new Array();</p>
                  <p>courses[0] = &quot;HTML&quot;;</p>
                  <p>courses[1] = &quot;CSS&quot;;</p>
                  <p>courses[2] = &quot;JS&quot;;</p>
                  <p>courses[3] = &quot;C++&quot;;&nbsp;</p>
                </strong>
              </Card>
              
              <div  style={{ backgroundColor: "#EAEA00", textAlign: "left" }}>
                <p>You can add as many elements as you need to.</p>
              </div>
              <p><br/></p>

              <h1><strong>Array literal</strong></h1>
              <p>For greater simplicity, readability, and execution speed, you can also declare arrays using the <span classname="text-info"><strong>array</strong></span> <strong>literal</strong> syntax.</p>
              
              
              <Card className="text-primary w-50" style={{ backgroundColor: "#EEEEEE", textAlign: "left" }}>
                <strong>
                  <p>var courses = [&quot;HTML&quot;, &quot;CSS&quot;, &quot;JS&quot;];</p>
                </strong>
              </Card>
              
              <p><br/></p>
              <p>This results in the same <span classname="text-info"><strong>array</strong></span> as the one created with the <strong>new Array()</strong> syntax.</p>
              <div  style={{ backgroundColor: "#EAEA00", textAlign: "left" }}>
                <p>You can access and modify the elements of the array using the index number, as you did before.</p>
              </div>
              <p>The <strong>array literal</strong> syntax is the recommended way to declare arrays.</p>
              <p><br/></p>

              <h1><strong>The length Property</strong></h1>
              <p>JavaScript arrays have useful <strong>built-in</strong> properties and methods.</p>
              <p><br/></p>
              <p>An <span classname="text-info"><strong>array</strong></span>&apos;s <strong>length</strong> property returns the number of it&apos;s elements.</p>
              
              
              <Card className="text-primary w-50" style={{ backgroundColor: "#EEEEEE", textAlign: "left" }}>
                <strong>
                  <p>var courses = [&quot;HTML&quot;, &quot;CSS&quot;, &quot;JS&quot;];</p>
                  <p>document.write(<strong>courses.length</strong>);</p>
                  <p>//Outputs 3</p>
                </strong>
              </Card>
              
              <p><br/></p>
              <p>The <strong>length</strong> property is always one more than the highest array index.</p>
              <p>If the array is empty, the length property returns <strong>0</strong>.</p>
              <p><br/></p>

              <h1><strong>Combining Arrays</strong></h1>
              <p>JavaScript&apos;s <strong>concat()</strong> <span className="text-info"><strong>method</strong></span> allows you to join arrays and create an entirely new <span classname="text-info"><strong>array</strong></span>.</p>
              <p><br/></p>
              <p><strong>Example:</strong></p>

              <Card className="text-primary w-50" style={{ backgroundColor: "#EEEEEE", textAlign: "left" }}>
                <strong>
                  <p>var c1 = [&quot;HTML&quot;, &quot;CSS&quot;];</p>
                  <p>var c2 = [&quot;JS&quot;, &quot;C++&quot;];</p>
                  <p>var <strong>courses = c1.concat(c2)</strong>;</p>
                </strong>
              </Card>
              
              <p><br/></p>
              <p>The <strong>courses</strong> <span classname="text-info"><strong>array</strong></span> that results contains 4 elements (HTML, CSS, JS, C++).</p>
              <p>The <strong>concat</strong> operation does not affect the c1 and c2 arrays - it returns the resulting concatenation as a new array.</p>
              <p><br/></p>

              <h1><strong>Associative Arrays</strong></h1>
              <p>While many programming languages support arrays with named indexes (text instead of numbers), called <strong>associative arrays</strong>, JavaScript <strong>does not</strong>.</p>
              <p>However, you still can use the named <span classname="text-info"><strong>array</strong></span> syntax, which will produce an <span className="text-info"><strong>object</strong></span>.</p>
              <p><strong>For example:</strong></p>

              <Card className="text-primary w-50" style={{ backgroundColor: "#EEEEEE", textAlign: "left" }}>
                <strong>
                  <p>var person = []; //empty array</p>
                  <p>person[&quot;name&quot;] = &quot;John&quot;;</p>
                  <p>person[&quot;age&quot;] = 46;</p>
                  <p>document.write(person[&quot;age&quot;]);</p>
                  <p>//Outputs &quot;46&quot;</p>
                </strong>
              </Card>
              
              <p>Now, person is treated as an <span className="text-info"><strong>object</strong></span>, instead of being an <span classname="text-info"><strong>array</strong></span>.</p>
              <p>The named indexes &quot;name&quot; and &quot;age&quot; become properties of the person <span className="text-info"><strong>object</strong></span>.</p>
              <p>As the person array is treated as an object, the standard array methods and properties will produce incorrect results. For example, <strong>person.length</strong> will return 0.</p>
              <p>Remember that JavaScript <strong>does not</strong> support arrays with named indexes.</p>
              <p>In JavaScript, arrays always use numbered indexes.</p>
              <p>It is better to use an <span className="text-info"><strong>object</strong></span> when you want the index to be a string (text).</p>
              <p>Use an <span classname="text-info"><strong>array</strong></span> when you want the index to be a <strong>number</strong>.</p>
              <p>If you use a named index, JavaScript will redefine the array to a standard object.</p>
              <p><br/></p>

              <h1><strong>The Math Object</strong></h1>
              <p>The <span className="text-info"><strong>Math object</strong></span> allows you to perform mathematical tasks, and includes several properties.</p>

              <Table class="table table-striped w-50" responsive>
                <thead>
                <tr>
                    <th scope="col"><strong>Property</strong></th>
                    <th scope="col"><strong>Description</strong></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row"><strong>E</strong></th>
                    <td><strong>Euler&apos;s constant</strong></td>
                  </tr>
                  <tr>
                    <th scope="row"><strong>LN2</strong></th>
                    <td><strong>Natural log of value 2</strong></td>
                  </tr>
                  <tr>
                    <th scope="row"><strong>LN10</strong></th>
                    <td><strong>Natural log of value 10</strong></td>
                  </tr>
                  <tr>
                    <th scope="row"><strong>LOG2E</strong></th>
                    <td><strong>The base 2 log of Euler&apos;s constant</strong></td>
                  </tr>
                  <tr>
                    <th scope="row"><strong>LOG10E</strong></th>
                    <td><strong>The base 10 log of Euler&apos;s constant</strong></td>
                  </tr>
                  <tr>
                    <th scope="row"><strong>PI</strong></th>
                    <td><strong>Returns the constant PI</strong></td>
                  </tr>
                </tbody>
              </Table>

              <p><strong>For example:</strong></p>

              <Card className="text-primary w-50" style={{ backgroundColor: "#EEEEEE", textAlign: "left" }}>
                <strong>
                  <p>document.write(<strong>Math.PI</strong>);</p>
                  <p>//Outputs 3.141592653589793</p>
                </strong>
              </Card>
              
              <p><br/></p>
              <p>Math has no constructor. There&apos;s no need to create a Math object first.</p>
              <p><br/></p>

              <h1><strong>Math Object Methods</strong></h1>

              <p>The <span className="text-info"><strong>Math object</strong></span> contains a number of methods that are used for calculations:</p>

              <Table class="table table-striped w-50" responsive>
                <thead>
                <tr>
                    <th scope="col"><strong>Method</strong></th>
                    <th scope="col"><strong>Description</strong></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row"><strong>abs(x)</strong></th>
                    <td>Returns the absolute value of x</td>
                  </tr>
                  <tr>
                    <th scope="row"><strong>acos(x) </strong></th>
                    <td>Returns the arccosine of x, in radians</td>
                  </tr>
                  <tr>
                    <th scope="row"><strong>asin(x)</strong></th>
                    <td>Returns the arcsine of x, in radians</td>
                  </tr>
                  <tr>
                    <th scope="row"><strong>atan(x)</strong></th>
                    <td>Returns the arctangent of x as a numeric value between PI/2 and PI/2 radians</td>
                  </tr>
                  <tr>
                    <th scope="row"><strong>atan2(y,x)</strong></th>
                    <td>Returns the arctangent of the quotient of its arguments</td>
                  </tr>
                  <tr>
                    <th scope="row"><strong>ceil(x)</strong></th>
                    <td>Returns x, rounded upwards to the nearest integer</td>
                  </tr>
                  <tr>
                    <th scope="row"><strong>cos(x)</strong></th>
                    <td>Returns the cosine of x (x is in radians)</td>
                  </tr>
                  <tr>
                    <th scope="row"><strong>exp(x)</strong></th>
                    <td>Returns the value of E*</td>
                  </tr>
                  <tr>
                    <th scope="row"><strong>floor(x)</strong></th>
                    <td>Returns x, rounded downwards to the nearest integer</td>
                  </tr>
                  <tr>
                    <th scope="row"><strong>log(x) </strong></th>
                    <td>Returns the natural logarithm (base E) of x</td>
                  </tr>
                  <tr>
                    <th scope="row"><strong>max(x,y,Z,.-.,N)</strong></th>
                    <td>Returns the number with the highest value</td>
                  </tr>
                  <tr>
                    <th scope="row"><strong>min(Xx,y,Z,...,0) </strong></th>
                    <td>Returns the number with the lowest value</td>
                  </tr>
                  <tr>
                    <th scope="row"><strong>pow(x,y)</strong></th>
                    <td>Returns the value of x to the power of y</td>
                  </tr>
                  <tr>
                    <th scope="row"><strong>random()</strong></th>
                    <td>Returns a random number between 0 and 1</td>
                  </tr>
                  <tr>
                    <th scope="row"><strong>round(x)</strong></th>
                    <td>Rounds x to the nearest integer</td>
                  </tr>
                  <tr>
                    <th scope="row"><strong>sin(x)</strong></th>
                    <td>Returns the sine of x (x is in radians)</td>
                  </tr>
                  <tr>
                    <th scope="row"><strong>sqrt(x)</strong></th>
                    <td>Returns the square root of x</td>
                  </tr>
                  <tr>
                    <th scope="row"><strong>tan(x)</strong></th>
                    <td>Returns the tangent of an angle</td>
                  </tr>
                </tbody>
              </Table>

              <p>For example, the following will calculate the <strong>square root</strong> of a number.</p>
              
              
              <Card className="text-primary w-50" style={{ backgroundColor: "#EEEEEE", textAlign: "left" }}>
                <strong>
                  <p>var number = Math.<strong>sqrt</strong>(4);&nbsp;</p>
                  <p>document.write(number);</p>
                  <p>//Outputs 2</p>
                </strong>
              </Card>
              
              <p>To get a random number between 1-10, use Math.random(), which gives you a number between 0-1. Then multiply the number by 10, and then take Math.ceil() from it: Math.ceil(Math.random() * 10).</p>
              <p>Let&apos;s create a program that will ask the user to input a number and alert its square root.</p>
              
              
              <Card className="text-primary w-50" style={{ backgroundColor: "#EEEEEE", textAlign: "left" }}>
                <strong>
                  <p>var n = prompt(&quot;Enter a number&quot;, &quot;&quot;);</p>
                  <p>var answer = Math.sqrt(n);</p>
                  <p>alert(&quot;The square root of &quot; + n + &quot; is &quot; + answer);</p>
                </strong>
              </Card>
              
              <p><br/></p>
              <p><strong>Result:</strong></p>
              <p><br/></p>

              <Card className="imgclasss w-50">
                <img src={JS_img27}></img>
              </Card>

              <p>Enter a number, such as 64.</p>

              <Card className="imgclasss w-50">
                <img src={JS_img28}></img>
              </Card>

              <p>Math is a handy object. You can save a lot of time using Math, instead of writing your own functions every time.</p>
              <p><br/></p>
            </Col>
            <Col xl="3">
              
            </Col>
          </Row>
          <div className="col">

          </div>
        </Container>
      </>
    );
  }
}
Index.layout = Content;
export default Index;