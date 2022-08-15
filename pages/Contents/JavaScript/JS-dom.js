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


import JS_img29 from "../../../assets/img/js/js_img29.jpg"
import JS_img30 from "../../../assets/img/js/js_img30.jpg"
import JS_img31 from "../../../assets/img/js/js_img31.jpg"

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
                      <h2 className="text-white mb-0">The DOM</h2>
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
                  <p>When you open any webpage in a browser, the HTML of the page is loaded and rendered visually on the screen.</p>
                  <p>To accomplish that, the browser builds the <strong>Document Object Model</strong> of that page, which is an <span classname="text-info"><strong>object</strong></span> oriented model of its logical structure.</p>
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
DOM Tree
                  </Button>
                  <Button outline
                    color="warning"
                    href="#tdp"
                    className="d-block w-100 text-left my-1 mx-0"
                    size="sm"
                  >
The document Object
                  </Button>
                  <Button outline
                    color="warning"
                    href="#tdp"
                    className="d-block w-100 text-left my-1 mx-0"
                    size="sm"
                  >
Selecting Elements
                  </Button>
                  <Button outline
                    color="warning"
                    href="#tdp"
                    className="d-block w-100 text-left my-1 mx-0"
                    size="sm"
                  >
Working with DOM
                  </Button><Button outline
                    color="warning"
                    href="#tdp"
                    className="d-block w-100 text-left my-1 mx-0"
                    size="sm"
                  >
Changing Attributes
                  </Button>
                  <Button outline
                    color="warning"
                    href="#tdp"
                    className="d-block w-100 text-left my-1 mx-0"
                    size="sm"
                  >
Changing Style
                  </Button>
                  <Button outline
                    color="warning"
                    href="#tdp"
                    className="d-block w-100 text-left my-1 mx-0"
                    size="sm"
                  >
Creating Elements
                  </Button>
                  <Button outline
                    color="warning"
                    href="#tdp"
                    className="d-block w-100 text-left my-1 mx-0"
                    size="sm"
                  >
Removing Elements
                  </Button><Button outline
                    color="warning"
                    href="#tdp"
                    className="d-block w-100 text-left my-1 mx-0"
                    size="sm"
                  >
Replacing Elements
                  </Button>
                  <Button outline
                    color="warning"
                    href="#tdp"
                    className="d-block w-100 text-left my-1 mx-0"
                    size="sm"
                  >
Animations
                  </Button>
                  
                  </CardBody>
              </Card>
            </Col>
          </Row>
          <Row className="mt-5">
            <Col md="9">
              <p>The <span className="text-info"><strong>DOM</strong></span> of an HTML document can be represented as a nested set of boxes:</p>

              <Card className="imgclasss w-50">
                <img src={JS_img29}></img>
              </Card>

              <p>JavaScript can be used to manipulate the DOM of a page dynamically to add, delete and modify elements.</p>
              <p><br/></p>

              <h1><strong>DOM Tree</strong></h1>

              <p>The <span className="text-info"><strong>DOM</strong></span> represents a document as a tree structure.</p>
              <p>HTML elements become interrelated <strong>nodes</strong> in the tree.</p>
              <p>All those nodes in the tree have some kind of relations among each other.</p>
              <p>Nodes can have <strong>child</strong> nodes. Nodes on the same tree level are called <strong>siblings</strong>.</p>
              <p><br/></p>

              <Card className="imgclasss w-50">
                <img src={JS_img30}></img>
              </Card>

              <p>For the example above:</p>

              <Card className="text-primary w-50" style={{ backgroundColor: "#EEEEEE", textAlign: "left" }}>
                <strong>
                  <p>&lt;html&gt; has two children (&lt;head&gt;, &lt;body&gt;);</p>
                  <p>&lt;head&gt; has one child (&lt;title&gt;) and one parent (&lt;html&gt;);</p>
                  <p>&lt;title&gt; has one parent (&lt;head&gt;) and no children;</p>
                  <p>&lt;body&gt; has two children (&lt;h1&gt; and &lt;a&gt;) and one parent (&lt;html&gt;);</p>
                </strong>
              </Card>
              
              <p>It is important to understand the relationships between elements in an HTML document in order to be able to manipulate them with JavaScript.</p>
              <p><br/></p>

              <h1><strong>The document Object</strong></h1>
              <p>There is a predefined <strong>document</strong> <span classname="text-info"><strong>object</strong></span> in JavaScript, which can be used to access all elements on the <span className="text-info"><strong>DOM</strong></span>.</p>
              <p>In other words, the <strong>document</strong> <span classname="text-info"><strong>object</strong></span> is the owner (or root) of all objects in your webpage.</p>
              <p>So, if you want to access objects in an HTML page, you always start with accessing the document <span classname="text-info"><strong>object</strong></span>.</p>
              <p><strong>For example:</strong></p>
              
              <Card className="text-primary w-50" style={{ backgroundColor: "#EEEEEE", textAlign: "left" }}>
                <strong>
                  <p>document.body.<strong>innerHTML</strong> = &quot;Some text&quot;;</p>
                </strong>
              </Card>

              <p>As <strong>body</strong> is an element of the <span className="text-info"><strong>DOM</strong></span>, we can access it using the <strong>document</strong> <span classname="text-info"><strong>object</strong></span> and change the content of the <span className="text-info"><strong>innerHTML property</strong></span>.</p>
              <p>The <strong>innerHTML</strong> property can be used on almost all HTML elements to change its content.</p>
              <p><br/></p>

              <h1><strong>Selecting Elements</strong></h1>
              <p>All HTML elements are <strong>objects</strong>. And as we know every <span classname="text-info"><strong>object</strong></span> has <strong>properties</strong> and methods.</p>
              <p>The <strong>document</strong> <span classname="text-info"><strong>object</strong></span> has methods that allow you to select the desired HTML element.</p>
              <p>These three methods are the most commonly used for selecting HTML elements:</p>
              
              <Card className="text-primary w-50" style={{ backgroundColor: "#EEEEEE", textAlign: "left" }}>
                <strong>
                  <p>//finds element by id</p>
                  <p>document.<strong>getElementById(id)</strong></p>
                  <p><br/></p>
                  <p>//finds elements by class name</p>
                  <p>document.<strong>getElementsByClassName(name)</strong></p>
                  <p><br/></p>
                  <p>//finds elements by tag name</p>
                  <p>document.<strong>getElementsByTagName(name)</strong></p>
                </strong>
              </Card>
              
              <p>In the example below, the <span className="text-info"><strong>getElementById method</strong></span> is used to select the element with <strong>id=&quot;demo&quot;</strong> and change its content:var elem = document.<strong>getElementById</strong>(&quot;demo&quot;);</p>
              <p>elem.innerHTML = &quot;Hello World!&quot;;</p>
              <p>The example above assumes that the HTML contains an element with id=&quot;demo&quot;, for example &lt;div id=&quot;demo&quot;&gt;&lt;/div&gt;.</p>
              <p><br/></p>
              <p>The <span className="text-info"><strong>getElementsByClassName</strong></span>() <span className="text-info"><strong>method</strong></span> returns a collection of all elements in the document with the specified class name.</p>
              <p>For example, if our HTML page contained three elements with class=&quot;demo&quot;, the following code would return all those elements as an <span className="text-info"><strong>array</strong></span>:</p>
              
              
              <Card className="text-primary w-50" style={{ backgroundColor: "#EEEEEE", textAlign: "left" }}>
                <strong>
                  <p>var arr = document.<strong>getElementsByClassName</strong>(&quot;demo&quot;);</p>
                  <p>//accessing the second element</p>
                  <p>arr[1].innerHTML = &quot;Hi&quot;;</p>
                </strong>
              </Card>
              
              <p>Similarly, the <span className="text-info"><strong>getElementsByTagName method</strong></span> returns all of the elements of the specified tag name as an <span className="text-info"><strong>array</strong></span>.</p>
              <p>The following example gets all paragraph elements of the page and changes their content:</p>
              
              <Card className="text-primary w-50" style={{ backgroundColor: "#EEEEEE", textAlign: "left" }}>
                <strong>
                  <p>&lt;p&gt;hi&lt;/p&gt;</p>
                  <p>&lt;p&gt;hello&lt;/p&gt;</p>
                  <p>&lt;p&gt;hi&lt;/p&gt;</p>
                  <p>&lt;script&gt;</p>
                  <p>var arr = document.getElementsByTagName(&quot;p&quot;);</p>
                  <p>for (var x = 0; x &lt; arr.length; x++) &#123;</p>
                  <p>arr[x].innerHTML = &quot;Hi there&quot;;</p>
                  <p>&#125;</p>
                  <p>&lt;/script&gt;</p>
                </strong>
              </Card>

              <p>The script will result in the following HTML:</p>
              
              
              <Card className="text-primary w-50" style={{ backgroundColor: "#EEEEEE", textAlign: "left" }}>
                <strong>
                  <p>&lt;p&gt;Hi there&lt;/p&gt;</p>
                  <p>&lt;p&gt;Hi there&lt;/p&gt;</p>
                  <p>&lt;p&gt;Hi there&lt;/p&gt;</p>
                </strong>
              </Card>
              
              <p>We used the <strong>length</strong> property of the array to loop through all the selected elements in the above example.</p>
              <p><br/></p>

              <h1><strong>Working with <span className="text-info"><strong>DOM</strong></span></strong></h1>
              <p>Each element in the <span className="text-info"><strong>DOM</strong></span> has a set of properties and methods that provide information about their relationships in the DOM:</p>
              <p>element.<strong>childNodes</strong> returns an <span className="text-info"><strong>array</strong></span> of an element&apos;s child nodes.</p>
              <p>element.<strong>firstChild</strong> returns the first child node of an element.</p>
              <p>element.<strong>lastChild</strong> returns the last child node of an element.</p>
              <p>element.<strong>hasChildNodes</strong> returns true if an element has any child nodes, otherwise false.</p>
              <p>element.<strong>nextSibling</strong> returns the next node at the same tree level.</p>
              <p>element.<strong>previousSibling</strong> returns the previous node at the same tree level.</p>
              <p>element.<strong>parentNode</strong> returns the parent node of an element.</p>
              <p><br/></p>
              <p>We can, for example, select all child nodes of an element and change their content:</p>

              <Card className="text-primary w-50" style={{ backgroundColor: "#EEEEEE", textAlign: "left" }}>
                <strong>
                  <p>&lt;html&gt;</p>
                  <p>&lt;body&gt;</p>
                  <p>&lt;div id =&quot;demo&quot;&gt;</p>
                  <p>&lt;p&gt;some text&lt;/p&gt;</p>
                  <p>&lt;p&gt;some other text&lt;/p&gt;</p>
                  <p>&lt;/div&gt;</p>
                  <p><br/></p>
                  <p>&lt;script&gt;</p>
                  <p>var a = document.getElementById(&quot;demo&quot;);</p>
                  <p>var arr = a.childNodes;</p>
                  <p>for(var x=0;x&lt;arr.length;x++) &#123;</p>
                  <p>arr[x].innerHTML = &quot;new text&quot;;</p>
                  <p>&#125;</p>
                  <p>&lt;/script&gt;</p>
                  <p><br/></p>
                  <p>&lt;/body&gt;</p>
                  <p>&lt;/html&gt;</p>
                </strong>
              </Card>

              <p><br/></p>
              <p>The code above changes the text of both paragraphs to &quot;new text&quot;.</p>
              <p><br/></p>

              <h1><strong>Changing Attributes</strong></h1>
              <p>Once you have selected the element(s) you want to work with, you can change their attributes.</p>
              <p>As we have seen in the previous lessons, we can change the text content of an element using the <span className="text-info"><strong>innerHTML</strong></span> property.</p>
              <p>Similarly, we can change the attributes of elements.</p>
              <p>For example, we can change the src attribute of an image:</p>
              
              <Card className="text-primary w-50" style={{ backgroundColor: "#EEEEEE", textAlign: "left" }}>
                <strong>
                  <p>&lt;img id=&quot;myimg&quot; src=&quot;orange.png&quot; alt=&quot;&quot; /&gt;</p>
                  <p>&lt;script&gt;</p>
                  <p>var el = document.getElementById(&quot;myimg&quot;);</p>
                  <p>el.<strong>src</strong> = &quot;apple.png&quot;;</p>
                  <p>&lt;/script&gt;</p>
                </strong>
              </Card>
              
              <p>We can change the <strong>href</strong> attribute of a link:</p>

              <Card className="text-primary w-50" style={{ backgroundColor: "#EEEEEE", textAlign: "left" }}>
                <strong>
                  <p>&lt;a href=&quot;http://www.example.com&quot;&gt;Some link&lt;/a&gt;</p>
                  <p>&lt;script&gt;</p>
                  <p>var el = document.getElementsByTagName(&quot;a&quot;);</p>
                  <p>el[0].<strong>href</strong> = &quot;http://www.sololearn.com&quot;;</p>
                  <p>&lt;/script&gt;</p>
                </strong>
              </Card>
              
              <p><br/></p>
              <p>Practically all attributes of an element can be changed using JavaScript.</p>
              <p><br/></p>

              <h1><strong>Changing Style</strong></h1>
              <p>The style of HTML elements can also be changed using JavaScript.</p>
              <p>All style attributes can be accessed using the <strong>style</strong> <span className="text-info"><strong>object</strong></span> of the element.</p>
              <p><strong>For example:</strong></p>

              <Card className="text-primary w-50" style={{ backgroundColor: "#EEEEEE", textAlign: "left" }}>
                <strong>
                  <p>&lt;div id=&quot;demo&quot; style=&quot;width:200px&quot;&gt;some text&lt;/div&gt;</p>
                  <p>&lt;script&gt;</p>
                  <p>var x = document.getElementById(&quot;demo&quot;);</p>
                  <p><strong>x.style.color</strong> = &quot;6600FF&quot;;</p>
                  <p><strong>x.style.width</strong> = &quot;100px&quot;;</p>
                  <p>&lt;/script&gt;</p>
                </strong>
              </Card>
              
              <p><br/></p>
              <p>The code above changes the text <strong>color</strong> and <strong>width</strong> of the div element.</p>
              <p>All CSS properties can be set and modified using JavaScript. Just remember, that you cannot use dashes (-) in the property names: these are replaced with camelCase versions, where the compound words begin with a capital letter.</p>
              <p>For example: the <strong>background-color</strong> property should be referred to as <strong>backgroundColor</strong>.</p>
              <p><br/></p>

              <h1><strong>Creating Elements</strong></h1>
              <p>Use the following methods to create new nodes:</p>
              <p>element.<strong>cloneNode</strong>() clones an element and returns the resulting node.</p>
              <p>document.<strong>createElement</strong>(element) creates a new element node.</p>
              <p>document.<strong>createTextNode</strong>(text) creates a new text node.</p>
              <p><br/></p>
              <p><strong>For example:</strong>var node = document.<strong>createTextNode</strong>(&quot;Some new text&quot;);</p>
              <p>This will create a new text node, but it will not appear in the document until you append it to an existing element with one of the following methods:</p>
              <p>element.<strong>appendChild(newNode)</strong> adds a new child node to an element as the last child node.</p>
              <p>element.<strong>insertBefore(node1, node2)</strong> inserts node1 as a child before node2.</p>
              <p><br/></p>
              <p><strong>Example:</strong></p>

              <Card className="text-primary w-50" style={{ backgroundColor: "#EEEEEE", textAlign: "left" }}>
                <strong>
                  <p>&lt;div id =&quot;demo&quot;&gt;some content&lt;/div&gt;</p>
                  <p>&lt;script&gt;</p>
                  <p>//creating a new paragraph</p>
                  <p>var p = document.createElement(&quot;p&quot;);</p>
                  <p>var node = document.createTextNode(&quot;Some new text&quot;);</p>
                  <p>//adding the text to the paragraph</p>
                  <p>p.<strong>appendChild</strong>(node);</p>
                  <p><br/></p>
                  <p>var div = document.getElementById(&quot;demo&quot;);</p>
                  <p>//adding the paragraph to the div</p>
                  <p>div.<strong>appendChild</strong>(p);</p>
                  <p>&lt;/script&gt;</p>
                </strong>
              </Card>
              
              <p>This creates a new paragraph and adds it to the existing div element on the page.</p>
              <p><br/></p>

              <h1><strong>Removing Elements</strong></h1>
              <p>To remove an HTML element, you must select the parent of the element and use the <strong>removeChild</strong>(node) <span className="text-info"><strong>method</strong></span>.</p>
              <p><strong>For example:</strong></p>

              <Card className="text-primary w-50" style={{ backgroundColor: "#EEEEEE", textAlign: "left" }}>
                <strong>
                  <p>&lt;div id=&quot;demo&quot;&gt;</p>
                  <p>&lt;p id=&quot;p1&quot;&gt;This is a paragraph.&lt;/p&gt;</p>
                  <p>&lt;p id=&quot;p2&quot;&gt;This is another paragraph.&lt;/p&gt;</p>
                  <p>&lt;/div&gt;</p>
                  <p><br/></p>
                  <p>&lt;script&gt;</p>
                  <p>var parent = document.getElementById(&quot;demo&quot;);</p>
                  <p>var child = document.getElementById(&quot;p1&quot;);</p>
                  <p>parent.<strong>removeChild</strong>(child);</p>
                  <p>&lt;/script&gt;</p>
                </strong>
              </Card>
              
              <p><br/></p>
              <p>This removes the paragraph with id=&quot;p1&quot; from the page.</p>
              <p>An alternative way of achieving the same result would be the use of the <strong>parentNode</strong> property to get the parent of the element we want to remove:</p>

              <Card className="text-primary w-50" style={{ backgroundColor: "#EEEEEE", textAlign: "left" }}>
                <strong>
                  <p>var child = document.getElementById(&quot;p1&quot;);</p>
                  <p>child.<strong>parentNode</strong>.removeChild(child);</p>
                </strong>
              </Card>
              
              <p><br/></p>

              <h1><strong>Replacing Elements</strong></h1>
              <p>To replace an HTML element, the element.<strong>replaceChild</strong>(newNode, oldNode) <span className="text-info"><strong>method</strong></span> is used.</p>
              <p><strong>For example:</strong></p>

              <Card className="text-primary w-50" style={{ backgroundColor: "#EEEEEE", textAlign: "left" }}>
                <strong>
                  <p>&lt;div id=&quot;demo&quot;&gt;</p>
                  <p>&lt;p id=&quot;p1&quot;&gt;This is a paragraph.&lt;/p&gt;</p>
                  <p>&lt;p id=&quot;p2&quot;&gt;This is another paragraph.&lt;/p&gt;</p>
                  <p>&lt;/div&gt;</p>
                  <p><br/></p>
                  <p>&lt;script&gt;</p>
                  <p>var p = document.createElement(&quot;p&quot;);</p>
                  <p>var node = document.createTextNode(&quot;This is new&quot;);</p>
                  <p>p.appendChild(node);</p>
                  <p><br/></p>
                  <p>var parent = document.getElementById(&quot;demo&quot;);</p>
                  <p>var child = document.getElementById(&quot;p1&quot;);</p>
                  <p>parent.<strong>replaceChild</strong>(p, child);</p>
                  <p>&lt;/script&gt;</p>
                </strong>
              </Card>
              
              <p><br/></p>
              <p>The code above creates a new paragraph element that replaces the existing p1 paragraph.</p>
              <p><br/></p>

              <h1><strong>Animations</strong></h1>
              <p>Now that we know how to select and change <span className="text-info"><strong>DOM</strong></span> elements, we can create a simple animation.</p>
              <p>Let&apos;s create a simple HTML page with a <strong>box</strong> element that will be animated using JS.</p>
              
              <Card className="text-primary w-50" style={{ backgroundColor: "#EEEEEE", textAlign: "left" }}>
                <strong>
                  <p>&lt;style&gt;</p>
                  <p>#container &#123;</p>
                  <p>width: 200px;</p>
                  <p>height: 200px;</p>
                  <p>background: green;</p>
                  <p><strong>position: relative;</strong></p>
                  <p>&#125;</p>
                  <p>#box &#123;</p>
                  <p>width: 50px;</p>
                  <p>height: 50px;</p>
                  <p>background: red;</p>
                  <p><strong>position: absolute;</strong></p>
                  <p>&#125;</p>
                  <p>&lt;/style&gt;</p>
                  <p>&lt;div id=&quot;container&quot;&gt;</p>
                  <p>&lt;div id=&quot;box&quot;&gt; &lt;/div&gt;</p>
                  <p>&lt;/div&gt;</p>
                </strong>
              </Card>
              
              <p><br/></p>
              <p>Our <strong>box</strong> element is inside a <strong>container</strong> element. Note the position attribute used for the elements: the container is <strong>relative</strong> and the box is <strong>absolute</strong>. This will allow us to create the animation relative to the container.</p>
              <p><br/></p>

              <Card className="imgclasss w-50">
                <img src={JS_img31}></img>
              </Card>

              <p>We will be animating the red box to make it move to the right side of the container.</p>
              <p>You need to be familiar with CSS to better understand the code provided.</p>
              <p>To create an animation, we need to change the properties of an element at small intervals of time. We can achieve this by using the <span className="text-info"><strong>setInterval</strong></span>() <span className="text-info"><strong>method</strong></span>, which allows us to create a timer and call a function to change properties repeatedly at defined intervals (in milliseconds).</p>
              <p><strong>For example:</strong></p>
              <Card className="text-primary w-50" style={{ backgroundColor: "#EEEEEE", textAlign: "left" }}>
                <strong>
                  <p>var t = <strong>setInterval</strong>(move, 500);</p>
                </strong>
              </Card>
              
              <p>This code creates a timer that calls a <strong>move</strong>() function every 500 milliseconds.</p>
              <p>Now we need to define the <strong>move</strong>() function, that changes the position of the box.</p>
              
              <Card className="text-primary w-50" style={{ backgroundColor: "#EEEEEE", textAlign: "left" }}>
                <strong>
                  <p>// starting position</p>
                  <p>var pos = 0;&nbsp;</p>
                  <p>//our box element</p>
                  <p>var box = document.getElementById(&quot;box&quot;);</p>
                  <p><br/></p>
                  <p>function move() &#123;</p>
                  <p>pos += 1;</p>
                  <p>box.style.left = pos+&quot;px&quot;; //px = pixels</p>
                  <p>&#125;</p>
                </strong>
              </Card>
              
              <p>The <strong>move</strong>() function increments the <strong>left</strong> property of the box element by one each time it is called.</p>
              <p>The following code defines a timer that calls the <strong>move</strong>() function every 10 milliseconds:</p>
              
              <Card className="text-primary w-50" style={{ backgroundColor: "#EEEEEE", textAlign: "left" }}>
                <strong>
                  <p>var t = setInterval(move, 10);</p>
                </strong>
              </Card>
              
              <p>However, this makes our box move to the right forever. To stop the animation when the box reaches the end of the container, we add a simple check to the move() function and use the <strong>clearInterval()</strong> <span className="text-info"><strong>method</strong></span> to stop the timer.</p>
              
              <Card className="text-primary w-50" style={{ backgroundColor: "#EEEEEE", textAlign: "left" }}>
                <strong>
                  <p>function move() &#123;</p>
                  <p>if(pos &gt;= 150) &#123;</p>
                  <p><strong>clearInterval(t);</strong></p>
                  <p>&#125;</p>
                  <p>else &#123;</p>
                  <p>pos += 1;</p>
                  <p>box.style.left = pos+&quot;px&quot;;</p>
                  <p>&#125;</p>
                  <p>&#125;</p>
                </strong>
              </Card>
              
              <p>When the left attribute of the box reaches the value of 150, the box reaches the end of the container, based on a container width of 200 and a box width of 50.</p>
              <p><strong>The final code:</strong></p>

              <Card className="text-primary w-50" style={{ backgroundColor: "#EEEEEE", textAlign: "left" }}>
                <strong>
                  <p>var pos = 0;&nbsp;</p>
                  <p>//our box element</p>
                  <p>var box = document.getElementById(&quot;box&quot;);</p>
                  <p>var t = setInterval(move, 10);</p>
                  <p><br/></p>
                  <p>function move() &#123;</p>
                  <p>if(pos &gt;= 150) &#123;</p>
                  <p>clearInterval(t);</p>
                  <p>&#125;</p>
                  <p>else &#123;</p>
                  <p>pos += 1;</p>
                  <p>box.style.left = pos+&quot;px&quot;;</p>
                  <p>&#125;</p>
                  <p>&#125;</p>
                </strong>
              </Card>
              
              <p><br/></p>
              <p>Congratulations, you have just created your first JavaScript animation!</p>
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