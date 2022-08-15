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
                      <h2 className="text-white mb-0">JavaScript Functions</h2>
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
                <p>A JavaScript <strong>function</strong> is a block of code designed to perform a particular task.</p>
              
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
Defining a Function
                  </Button>
                  <Button outline
                    color="warning"
                    href="#tdp"
                    className="d-block w-100 text-left my-1 mx-0"
                    size="sm"
                  >
Calling a Function
                  </Button>
                  <Button outline
                    color="warning"
                    href="#tdp"
                    className="d-block w-100 text-left my-1 mx-0"
                    size="sm"
                  >
Calling Functions
                  </Button>
                  <Button outline
                    color="warning"
                    href="#tdp"
                    className="d-block w-100 text-left my-1 mx-0"
                    size="sm"
                  >
Function Parameters
                  </Button>
                  <Button outline
                    color="warning"
                    href="#tdp"
                    className="d-block w-100 text-left my-1 mx-0"
                    size="sm"
                  >
Using Parameters
                  </Button>
                  <Button outline
                    color="warning"
                    href="#tdp"
                    className="d-block w-100 text-left my-1 mx-0"
                    size="sm"
                  >
Function Parameters
                  </Button>
                  <Button outline
                    color="warning"
                    href="#tdp"
                    className="d-block w-100 text-left my-1 mx-0"
                    size="sm"
                  >
Multiple Parameters
                  </Button>
                  <Button outline
                    color="warning"
                    href="#tdp"
                    className="d-block w-100 text-left my-1 mx-0"
                    size="sm"
                  >
Function Return
                  </Button>
                  
                  </CardBody>
              </Card>
            </Col>
          </Row>
          <Row className="mt-5">
            <Col md="9">
            <p>The main advantages of using functions:</p>
              <p>Code <strong>reuse</strong>: Define the code once, and use it many times.</p>
              <p>Use the same code many times with different <strong>arguments</strong>, to produce different results.</p>
              <p>A JavaScript function is executed when &quot;something&quot; invokes, or calls, it.</p>
              <p><br/></p>

              <h1><strong>Defining a Function</strong></h1>
              <p>To define a JavaScript function, use the <strong>function</strong> keyword, followed by a <strong>name</strong>, followed by a set of <strong>parentheses ()</strong>.</p>
              <p><br/></p>
              <p>The code to be executed by the function is placed inside curly brackets &#123;&#125;.<strong>function</strong> name() &#123;</p>
              <p>&nbsp;</p>
              <p>//code to be executed</p>
              <p><br/></p>
              <p>&#125;</p>
              <p>Function names can contain letters, digits, underscores, and dollar signs (same rules as variables).</p>
              <p><br/></p>

              <h1><strong>Calling a Function</strong></h1>
              <p>To execute the function, you need to call it.</p>
              <p>To call a function, start with the name of the function, then follow it with the arguments in parentheses.</p>
              <p><strong>Example:</strong></p>

              <Card className="text-primary w-50" style={{ backgroundColor: "#EEEEEE", textAlign: "left" }}>
                <strong>
                  <p>function <strong>myFunction</strong>() &#123;</p>
                  <p>alert(&quot;Calling a Function!&quot;);</p>
                  <p>&#125;</p>
                  <p><br/></p>
                  <p>myFunction();</p>
                  <p>//Alerts &quot;Calling a Function!&quot;</p>
                </strong>
              </Card>
              
              <p>Always remember to end the statement with a <strong>semicolon</strong> after calling the function.</p>
              <p><br/></p>

              <h1><strong>Calling Functions</strong></h1>
              <p>Once the function is defined, JavaScript allows you to call it as many times as you want to.</p>
              
              
              <Card className="text-primary w-50" style={{ backgroundColor: "#EEEEEE", textAlign: "left" }}>
                <strong>
                  <p>function myFunction() &#123;</p>
                  <p>alert(&quot;Alert box!&quot;);</p>
                  <p>&#125;</p>
                  <p><br/></p>
                  <p>myFunction();</p>
                  <p>//&quot;Alert box!&quot;</p>
                  <p><br/></p>
                  <p>// some other code</p>
                  <p><br/></p>
                  <p>myFunction();</p>
                  <p>//&quot;Alert box!&quot;</p>
                </strong>
              </Card>
              
              <p><br/></p>
              <p>You can also call a function using this syntax: myFunction.call(). The difference is that when calling in this way, you&apos;re passing the &apos;this&apos; keyword to a function. You&apos;ll learn about it later.</p>
              <p><br/></p>

              <h1><strong>Function Parameters</strong></h1>
              <p>Functions can take <strong>parameters</strong>.</p>
              <p>Function <strong>parameters</strong> are the names listed in the function&apos;s definition.</p>
              <p><br/></p>

              <Card className="text-primary w-50" style={{ backgroundColor: "#EEEEEE", textAlign: "left" }}>
                <strong>
                  <p><strong>Syntax</strong>:functionName(param1, param2, param3) &#123;</p>
                  <p>// some code</p>
                  <p>&#125;</p>
                </strong>
              </Card>

              <p>As with variables, parameters should be given <strong>names</strong>, which are <strong>separated by commas</strong> within the parentheses.</p>
              <p><br/></p>

              <h1><strong>Using Parameters</strong></h1>
              <p>After defining the parameters, you can use them inside the function.</p>

              <Card className="text-primary w-50" style={{ backgroundColor: "#EEEEEE", textAlign: "left" }}>
                <strong>
                  <p>function sayHello(name) &#123;</p>
                  <p>alert(&quot;Hi, &quot; + name);</p>
                  <p>&#125;</p>
                  <p><br/></p>
                  <p>sayHello(&quot;David&quot;);</p>
                  <p>//Alerts &quot;Hi, David&quot;</p>
                </strong>
              </Card>
              
              <p><br/></p>
              <p>This function takes in one parameter, which is called <strong>name</strong>. When calling the function, provide the parameter&apos;s value (argument) inside the parentheses.</p>
              <p>Function <strong>arguments</strong> are the real values passed to (and received by) the function.</p>
              <p><br/></p>

              <h1><strong>Function Parameters</strong></h1>
              <p>You can define a single function, and pass different parameter values (arguments) to it.</p>
              
              
              <Card className="text-primary w-50" style={{ backgroundColor: "#EEEEEE", textAlign: "left" }}>
                <strong>
                  <p>function sayHello(name) &#123;</p>
                  <p>alert(&quot;Hi, &quot; + name);</p>
                  <p>&#125;</p>
                  <p>sayHello(&quot;<strong>David</strong>&quot;);</p>
                  <p>sayHello(&quot;<strong>Sarah</strong>&quot;);</p>
                  <p>sayHello(&quot;<strong>John</strong>&quot;);</p>
                </strong>
              </Card>
              
              <p><br/></p>
              <p>This will execute the function&apos;s code each time for the provided argument.</p>
              <p><br/></p>

              <h1><strong>Multiple Parameters</strong></h1>
              <p>You can define multiple parameters for a function by <strong>comma-separating</strong> them.function myFunc(x, y) &#123;</p>
              <p>// some code</p>
              <p>&#125;</p>
              <p>The example above defines the function <strong>myFunc</strong> to take two parameters.&nbsp;</p>
              <p>The parameters are used within the function&apos;s definition.function sayHello(<strong>name, age</strong>) &#123;</p>
              <p>document.write( <strong>name</strong> + &quot; is &quot; + <strong>age</strong> + &quot; years old.&quot;);</p>
              <p>&#125;</p>
              <p>Function parameters are the names listed in the function definition.</p>
              <p><br/></p>
              <p><br/></p>
              <p>When calling the function, provide the arguments in the same order in which you defined them.</p>
              
              
              <Card className="text-primary w-50" style={{ backgroundColor: "#EEEEEE", textAlign: "left" }}>
                <strong>
                  <p>function sayHello(name, age) &#123;</p>
                  <p>document.write( name + &quot; is &quot; + age + &quot; years old.&quot;);</p>
                  <p>&#125;</p>
                  <p><br/></p>
                  <p>sayHello(<strong>&quot;John&quot;, 20</strong>)</p>
                  <p>//Outputs &quot;John is 20 years old.&quot;</p>
                </strong>
              </Card>
              
              <p><br/></p>
              <p>If you pass more arguments than are defined, they will be assigned to an array called arguments. They can be used like this: arguments[0], arguments[1], etc.&nbsp;</p>
              <p>After defining the function, you can call it as many times as needed.</p>
              <p>JavaScript functions do not check the number of arguments received.</p>
              <p>If a function is called with missing arguments (fewer than declared), the missing values are set to <strong>undefined</strong>, which indicates that a variable has not been assigned a value.</p>
              <p><br/></p>

              <h1><strong>Function Return</strong></h1>
              <p>A function can have an optional <strong>return</strong> statement. It is used to return a value from the function.</p>
              <p><br/></p>
              <p>This statement is useful when making calculations that require a result.</p>
              <p>When JavaScript reaches a <strong>return</strong> statement, the function stops executing.</p>
              <p>Use the return statement to <strong>return</strong> a value.</p>
              <p><br/></p>
              <p>For example, let&apos;s calculate the product of two numbers, and return the result.</p>
              
              
              <Card className="text-primary w-50" style={{ backgroundColor: "#EEEEEE", textAlign: "left" }}>
                <strong>
                  <p>function myFunction(a, b) &#123;</p>
                  <p><strong>return</strong> a * b;</p>
                  <p>&#125;</p>
                  <p><br/></p>
                  <p>var x = myFunction(5, 6);&nbsp;</p>
                  <p>// Return value will end up in x</p>
                  <p>// x equals 30</p>
                </strong>
              </Card>
              
              <p><br/></p>
              <p>If you do not return anything from a function, it will return <strong>undefined</strong>.&nbsp;</p>
              <p>Another example:</p>
              
              
              <Card className="text-primary w-50" style={{ backgroundColor: "#EEEEEE", textAlign: "left" }}>
                <strong>
                  <p>function addNumbers(a, b) &#123;</p>
                  <p>var c = a+b;</p>
                  <p><strong>return c</strong>;</p>
                  <p>&#125;</p>
                  <p>document.write( addNumbers(40, 2) );</p>
                  <p>//Outputs 42</p>
                </strong>
              </Card>
              
              <p><br/></p>
              <p>The document.write command outputs the value returned by the function, which is the sum of the two parameters.</p>
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