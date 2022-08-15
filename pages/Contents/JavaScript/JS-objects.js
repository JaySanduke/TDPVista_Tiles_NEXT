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
                      <h2 className="text-white mb-0">JavaScript Objects</h2>
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
                  <p>JavaScript variables are containers for data values. <strong>Objects</strong> are variables too, but they can contain many values.</p>
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
Object Properties
                  </Button>
                  <Button outline
                    color="warning"
                    href="#tdp"
                    className="d-block w-100 text-left my-1 mx-0"
                    size="sm"
                  >
Object Methods
                  </Button>
                  <Button outline
                    color="warning"
                    href="#tdp"
                    className="d-block w-100 text-left my-1 mx-0"
                    size="sm"
                  >
The Object Constructor
                  </Button>
                  <Button outline
                    color="warning"
                    href="#tdp"
                    className="d-block w-100 text-left my-1 mx-0"
                    size="sm"
                  >
Creating Objects
                  </Button>
                  <Button outline
                    color="warning"
                    href="#tdp"
                    className="d-block w-100 text-left my-1 mx-0"
                    size="sm"
                  >
Object Initialization
                  </Button>
                  <Button outline
                    color="warning"
                    href="#tdp"
                    className="d-block w-100 text-left my-1 mx-0"
                    size="sm"
                  >
Using Object Initialization
                  </Button>
                  <Button outline
                    color="warning"
                    href="#tdp"
                    className="d-block w-100 text-left my-1 mx-0"
                    size="sm"
                  >
Methods
                  </Button>
                  
                  </CardBody>
              </Card>
            </Col>
          </Row>
          <Row className="mt-5">
            <Col md="9">
              <p>Think of an <span className="text-info"><strong>object</strong></span> as a list of values that are written as <strong>name:value</strong> pairs, with the names and the values separated by colons.</p>
              
              <Card className="text-primary w-50" style={{ backgroundColor: "#EEEEEE", textAlign: "left" }}>
                <strong>
                  <p><strong>Example:</strong>var person = &#123;</p>
                  <p>name: &quot;John&quot;, age: 31,&nbsp;</p>
                  <p>favColor: &quot;green&quot;, height: 183</p>
                  <p>&#125;;</p>
                </strong>
              </Card>
              
              <p>These values are called <strong>properties</strong>.</p>
              <p><br/></p>

              <Table class="table table-striped w-50" responsive>
                <tbody>
                  <tr>
                    <th scope="col"><strong>Property</strong></th>
                    <th scope="col"><strong>Property Value</strong></th>
                  </tr>
                  <tr>
                    <th><strong>name</strong></th>
                    <td><strong>John</strong></td>
                  </tr>
                  <tr>
                    <th><strong>age</strong></th>
                    <td><strong>31</strong></td>
                  </tr>
                  <tr>
                    <th><strong>favColor</strong></th>
                    <td><strong>green</strong></td>
                  </tr>
                  <tr>
                    <th><strong>height</strong></th>
                    <td><strong>183</strong></td>
                  </tr>
                </tbody>
              </Table>

              <p>JavaScript objects are containers for <strong>named values</strong>.</p>
              <p><br/></p>

              <h1><strong>Object Properties</strong></h1>
              <p><br/></p>
              <p>You can access <span classname="text-info"><strong>object</strong></span> properties in two ways.objectName.propertyName</p>
              <p>//or</p>
              <p>objectName[&apos;propertyName&apos;]</p>
              <p>This example demonstrates how to access the age of our person <span classname="text-info"><strong>object</strong></span>.</p>
              
              
              <Card className="text-primary w-50" style={{ backgroundColor: "#EEEEEE", textAlign: "left" }}>
                <strong>
                  <p>var person = &#123;</p>
                  <p>name: &quot;John&quot;, age: 31,&nbsp;</p>
                  <p>favColor: &quot;green&quot;, height: 183</p>
                  <p>&#125;;</p>
                  <p>var x = <strong>person.age;</strong></p>
                  <p>var y = <strong>person[&apos;age&apos;];</strong></p>
                </strong>
              </Card>
              
              <p><br/></p>
              <p>JavaScript&apos;s built-in <strong>length</strong> property is used to count the number of characters in a property or <span className="text-info"><strong>string</strong></span>.</p>
              <p>var course = &#123;name: &quot;JS&quot;, lessons: 41&#125;;</p>
              <p>document.write(course.name.<strong>length</strong>);</p>
              <p>//Outputs 2</p>
              <p><br/></p>
              <p>Objects are one of the core concepts in JavaScript.</p>
              <p><br/></p>

              <h1><strong>Object Methods</strong></h1>
              <p><br/></p>
              <p>An <span classname="text-info"><strong>object method</strong></span> is a property that contains a <strong>function definition</strong>.</p>
              <p><br/></p>
              <p>Use the following syntax to access an <span classname="text-info"><strong>object method</strong></span>.objectName.methodName()</p>
              <p>As you already know, <strong>document.write()</strong> outputs data. The <strong>write()</strong> function is actually a <span className="text-info"><strong>method</strong></span> of the <strong>document</strong> <span classname="text-info"><strong>object</strong></span>.</p>
              <p>document.write(&quot;This is some text&quot;);</p>
              <p><br/></p>
              <p>Methods are functions that are stored as object properties.</p>
              <p><br/></p>
              
              <h1><strong>The Object Constructor</strong></h1>
              <p>In the previous lesson, we created an <span classname="text-info"><strong>object</strong></span> using the <span classname="text-info"><strong>object</strong></span> <strong>literal</strong> (or initializer) syntax:</p>
              
              <Card className="text-primary w-50" style={{ backgroundColor: "#EEEEEE", textAlign: "left" }}>
                <strong>
                  <p>var person = &#123;</p>
                  <p>name: &quot;John&quot;, age: 42, favColor: &quot;green&quot;</p>
                  <p>&#125;;</p>
                </strong>
              </Card>
              
              <p>This allows you to create only a single <span classname="text-info"><strong>object</strong></span>.</p>
              <p>Sometimes, we need to set an &quot;<span classname="text-info"><strong>object</strong></span> <strong>type</strong>&quot; that can be used to create a number of objects of a single type.</p>
              <p>The standard way to create an &quot;<span classname="text-info"><strong>object</strong></span> type&quot; is to use an <span classname="text-info"><strong>object constructor</strong></span> <strong>function</strong>.</p>
              
              <Card className="text-primary w-50" style={{ backgroundColor: "#EEEEEE", textAlign: "left" }}>
                <strong>
                  <p>function person(name, age, color) &#123;</p>
                  <p>this.name = name;</p>
                  <p>this.age = age;</p>
                  <p>this.favColor = color;</p>
                  <p>&#125;</p>
                </strong>
              </Card>
              
              <p>The above function (person) is an <span classname="text-info"><strong>object constructor</strong></span>, which takes parameters and assigns them to the <span classname="text-info"><strong>object</strong></span> properties.</p>
              <p>The <strong>this</strong> keyword refers to the <strong>current object</strong>.</p>
              <p>Note that this is not a variable. It is a keyword, and its value cannot be changed.</p>
              <p><br/></p>

              <h1><strong>Creating Objects</strong></h1>
              <p>Once you have an <span classname="text-info"><strong>object constructor</strong></span>, you can use the <strong>new</strong> keyword to create new objects of the same type.</p>
              
              
              <Card className="text-primary w-50" style={{ backgroundColor: "#EEEEEE", textAlign: "left" }}>
                <strong>
                  <p>var p1 = <strong>new</strong> person(&quot;John&quot;, 42, &quot;green&quot;);</p>
                  <p>var p2 = <strong>new</strong> person(&quot;Amy&quot;, 21, &quot;red&quot;);</p>
                  <p><br/></p>
                  <p>document.write(p1.age); // Outputs 42</p>
                  <p>document.write(p2.name); // Outputs &quot;Amy&quot;</p>
                </strong>
              </Card>
              
              <p><br/></p>
              <p>p1 and p2 are now objects of the <strong>person</strong> type. Their properties are assigned to the corresponding values.</p>
              <p>Consider the following example.</p>
              
              
              <Card className="text-primary w-50" style={{ backgroundColor: "#EEEEEE", textAlign: "left" }}>
                <strong>
                  <p>function person (name, age) &#123;</p>
                  <p>this.name = name;</p>
                  <p>this.age = age;</p>
                  <p>&#125;</p>
                  <p>var John = new person(&quot;John&quot;, 25);</p>
                  <p>var James = new person(&quot;James&quot;, 21);</p>
                </strong>
              </Card>

              <p><br/></p>
              <p>Access the <span classname="text-info"><strong>object</strong></span>&apos;s properties by using the <strong>dot syntax</strong>, as you did before.</p>
              <p><br/></p>

              <Table class="table table-striped w-50 text-center" responsive>
                <tbody>
                  <tr>
                    <th scope="col"><strong>Object&apos;s Name &nbsp;&nbsp;&nbsp;&nbsp; Property&apos;s Name</strong></th>
                  </tr>
                  <tr>
                    <th><strong>John . name</strong></th>
                  </tr>
                  <tr>
                    <th><strong>John . age</strong></th>
                  </tr>
                  <tr>
                    <th><strong>James . name</strong></th>
                  </tr>
                  <tr>
                    <th><strong>James . age</strong></th>
                  </tr>
                </tbody>
              </Table>

              <p>Understanding the creation of objects is essential.</p>

              <h1><strong>Object Initialization</strong></h1>

              <p>Use the <span classname="text-info"><strong>object</strong></span> literal or initializer syntax to create single objects.</p>
              
              
              <Card className="text-primary w-50" style={{ backgroundColor: "#EEEEEE", textAlign: "left" }}>
                <strong>
                  <p>var John = &#123;</p>
                  <p>name: &quot;John&quot;, age: 25&#125;;</p>
                  <p>var James = &#123;name: &quot;James&quot;, age: 21&#125;;</p>
                </strong>
              </Card>
              
              <p>Objects consist of properties, which are used to describe an object. Values of object properties can either contain primitive data types or other objects.</p>
              <p><br/></p>
              
              <h1><strong>Using Object Initializers</strong></h1>
              <p>Spaces and line breaks are not important. An <span classname="text-info"><strong>object</strong></span> definition can span multiple lines.</p>
              
              
              <Card className="text-primary w-50" style={{ backgroundColor: "#EEEEEE", textAlign: "left" }}>
                <strong>
                  <p>var John = &#123;</p>
                  <p>name: &quot;John&quot;,</p>
                  <p>age: 25</p>
                  <p>&#125;;</p>
                  <p>var James = &#123;</p>
                  <p>name: &quot;James&quot;,</p>
                  <p>age: 21</p>
                  <p>&#125;;</p>
                </strong>
              </Card>
              
              <p>No matter how the <span classname="text-info"><strong>object</strong></span> is created, the syntax for accessing the properties and methods does not change.</p>
              <p>document.write(John.age);</p>
              <p>//Outputs 25</p>
              <p><br/></p>
              <p>Don&apos;t forget about the second accessing syntax: John[&apos;age&apos;].</p>
              <p><br/></p>

              <h1><strong>Methods</strong></h1>
              <p><br/></p>
              <p><strong>Methods</strong> are functions that are stored as <span className="text-info"><strong>object</strong></span> properties.</p>
              <p>Use the following syntax to create an <span className="text-info"><strong>object method</strong></span>:methodName = function() &#123; code lines &#125;</p>
              <p>Access an <span className="text-info"><strong>object method</strong></span> using the following syntax:objectName.methodName()</p>
              <p>A <span className="text-info"><strong>method</strong></span> is a function, belonging to an object. It can be referenced using the this keyword.</p>
              <p>The <strong>this</strong> keyword is used as a reference to the current <span className="text-info"><strong>object</strong></span>, meaning that you can access the objec<span className="text-info"><strong>object</strong></span>s properties and methods using it.</p>
              <p>Defining methods is done inside the <span className="text-info"><strong>constructor</strong></span> function.</p>
              <p><br/></p>
              <p><strong>For Example: </strong></p>

              <Card className="text-primary w-50" style={{ backgroundColor: "#EEEEEE", textAlign: "left" }}>
                <strong>
                  <p>function person(name, age) &#123;</p>
                  <p>this.name = name;&nbsp;</p>
                  <p>this.age = age;</p>
                  <p><strong>this.changeName = function (name) &#123; </strong></p>
                  <p><strong>this.name = name; </strong></p>
                  <p><strong>&#125;</strong></p>
                  <p>&#125;</p>
                  <p>var p = new person(&quot;David&quot;, 21);</p>
                  <p><strong>p.changeName(&quot;John&quot;);</strong></p>
                </strong>
              </Card>
              
              <p>//Now p.name equals to &quot;John&quot;</p>
              <p>In the example above, we have defined a <span className="text-info"><strong>method</strong></span> named <strong>changeName</strong> for our person, which is a function, that takes a parameter <strong>name</strong> and assigns it to the <strong>name</strong> property of the <span className="text-info"><strong>object</strong></span>.</p>
              <p><strong>this.name</strong> refers to the name property of the <span className="text-info"><strong>object</strong></span>.</p>
              <p>The <strong>changeName</strong> method changes the object&apos;s <strong>name</strong> property to its argument.&nbsp;</p>
              <p>You can also define the function outside of the <span className="text-info"><strong>constructor</strong></span> function and associate it with the <span className="text-info"><strong>object</strong></span>.</p>
              
              <Card className="text-primary w-50" style={{ backgroundColor: "#EEEEEE", textAlign: "left" }}>
                <strong>
                  <p>function person(name, age) &#123;</p>
                  <p>this.name= name;&nbsp;</p>
                  <p>this.age = age;</p>
                  <p><strong>this.yearOfBirth = bornYear;</strong></p>
                  <p>&#125;</p>
                  <p>function bornYear() &#123;</p>
                  <p>return 2016 - this.age;</p>
                  <p>&#125;</p>
                </strong>
              </Card>
              
              <p>As you can see, we have assigned the <span className="text-info"><strong>object</strong></span>&apos;s <strong>yearOfBirth</strong> property to the <strong>bornYear</strong> function.</p>
              <p>The <strong>this</strong> keyword is used to access the age property of the <span className="text-info"><strong>object</strong></span>, which is going to call the <span className="text-info"><strong>method</strong></span>.</p>
              <p>Note that it&apos;s not necessary to write the function&apos;s parentheses when assigning it to an object.&nbsp;</p>
              <p>Call the <span className="text-info"><strong>method</strong></span> as usual.</p>

              <Card className="text-primary w-50" style={{ backgroundColor: "#EEEEEE", textAlign: "left" }}>
                <strong>
                  <p>function person(name, age) &#123;</p>
                  <p>this.name= name;&nbsp;</p>
                  <p>this.age = age;</p>
                  <p>this.yearOfBirth = bornYear;</p>
                  <p>&#125;</p>
                  <p>function bornYear() &#123;</p>
                  <p>return 2016 - this.age;</p>
                  <p>&#125;</p>
                  <p>var p = new person(&quot;A&quot;, 22);</p>
                  <p>document.write(<strong>p.yearOfBirth()</strong>);</p>
                </strong>
              </Card>
              
              <p>// Outputs 1994</p>
              <p>Call the method by the <strong>property name</strong> you specified in the constructor function, rather than the function name.</p>
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