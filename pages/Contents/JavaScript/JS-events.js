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
                      <h2 className="text-white mb-0">Events</h2>
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
                    <p>You can write JavaScript code that executes when an <strong>event</strong> occurs, such as when a user clicks an HTML element, moves the mouse, or submits a form.</p>
                    <p>When an event occurs on a target element, a <strong>handler</strong> function is executed.</p>
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
Handling Events
                  </Button>
                  <Button outline
                    color="warning"
                    href="#tdp"
                    className="d-block w-100 text-left my-1 mx-0"
                    size="sm"
                  >
Event Listener
                  </Button>
                  <Button outline
                    color="warning"
                    href="#tdp"
                    className="d-block w-100 text-left my-1 mx-0"
                    size="sm"
                  >
Event Propagation
                  </Button>
                  <Button outline
                    color="warning"
                    href="#tdp"
                    className="d-block w-100 text-left my-1 mx-0"
                    size="sm"
                  >
Capturing vs. Bubbling
                  </Button>
                  <Button outline
                    color="warning"
                    href="#tdp"
                    className="d-block w-100 text-left my-1 mx-0"
                    size="sm"
                  >
Image Slider
                  </Button>
                  
                  </CardBody>
              </Card>
            </Col>
          </Row>
          <Row className="mt-5">
            <Col md="9">
              <p>Common HTML events include:</p>
              <p><br/></p>

              <Table class="table table-striped w-50" responsive>
                <thead>
                <tr>
                    <th scope="col"><strong>Event</strong></th>
                    <th scope="col"><strong>Description</strong></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row"><strong>onclick</strong></th>
                    <td>occurs when the user clicks on an element</td>
                  </tr>
                  <tr>
                    <th scope="row"><strong>onload</strong></th>
                    <td>onload occurs when an object has loaded</td>
                  </tr>
                  <tr>
                    <th scope="row"><strong>onunload</strong></th>
                    <td>onunload occurs once a page has unloaded (for &lt;body&gt;)</td>
                  </tr>
                  <tr>
                    <th scope="row"><strong>onchange</strong></th>
                    <td>occurs when the content of a form element, the selection, or the checked state have changed (for &lt;input&gt;, &lt;keygen&gt;, &lt;select&gt;, and &lt;textarea&gt;)</td>
                  </tr>
                  <tr>
                    <th scope="row"><strong>onmouseover</strong></th>
                    <td>occurs when the pointer is moved onto an element, or onto one of its children</td>
                  </tr>
                  <tr>
                    <th scope="row"><strong>onmouseout</strong></th>
                    <td>occurs when a user moves the mouse pointer out of an element, or out of one of its children</td>
                  </tr>
                  <tr>
                    <th scope="row"><strong>onmousedown</strong></th>
                    <td>occurs when the user presses a mouse button over an element</td>
                  </tr>
                  <tr>
                    <th scope="row"><strong>omnouseup</strong></th>
                    <td>occurs when a user releases a mouse button over an element</td>
                  </tr>
                  <tr>
                    <th scope="row"><strong>onblur</strong></th>
                    <td>occurs when an element loses focus</td>
                  </tr>
                  <tr>
                    <th scope="row"><strong>onfocus</strong></th>
                    <td>occurs when an element gets focus</td>
                  </tr>
                </tbody>
              </Table>

              <p>Corresponding events can be added to HTML elements as attributes.</p>
              <p>For example:</p>

              <Card className="text-primary w-50" style={{ backgroundColor: "#EEEEEE", textAlign: "left" }}>
                <strong>
                  <p>&lt;p <strong>onclick=&quot;someFunc()&quot;</strong>&gt;some text&lt;/p&gt;</p>
                </strong>
              </Card>

              <h1><strong>Handling Events</strong></h1>
              <p>Let&apos;s display an alert popup when the user clicks a specified button:</p>

              <Card className="text-primary w-50" style={{ backgroundColor: "#EEEEEE", textAlign: "left" }}>
                <strong>
                  <p>&lt;button <strong>onclick=&quot;show()&quot;</strong>&gt;Click Me&lt;/button&gt;</p>
                  <p>&lt;script&gt;</p>
                  <p>function show() &#123;</p>
                  <p>alert(&quot;Hi there&quot;);</p>
                  <p>&#125;</p>
                  <p>&lt;/script&gt;</p>
                </strong>
              </Card>
              
              <p><br/></p>
              <p>Event handlers can be assigned to elements.</p>
              <p><strong>For example:</strong></p>

              <Card className="text-primary w-50" style={{ backgroundColor: "#EEEEEE", textAlign: "left" }}>
                <strong>
                  <p>var x = document.getElementById(&quot;demo&quot;);</p>
                  <p>x.onclick = function () &#123;</p>
                  <p>document.body.innerHTML = Date();</p>
                  <p>&#125;</p>
                </strong>
              </Card>
              
              <p><br/></p>
              <p>You can attach events to almost all HTML elements</p>
              <p>The <strong>onload</strong> and <strong>onunload</strong> events are triggered when the user enters or leaves the page. These can be useful when performing actions after the page is loaded.&lt;body <strong>onload</strong>=&quot;doSomething()&quot;&gt;</p>
              <p>Similarly, the <strong>window.onload</strong> event can be used to run code after the whole page is loaded.</p>
              
              
              <Card className="text-primary w-50" style={{ backgroundColor: "#EEEEEE", textAlign: "left" }}>
                <strong>
                  <p><strong>window.onload</strong> = function() &#123;</p>
                  <p>//some code</p>
                  <p>&#125;</p>
                </strong>
              </Card>
              
              <p>The <strong>onchange</strong> event is mostly used on textboxes. The event handler gets called when the text inside the textbox changes and focus is lost from the element.</p>
              <p><strong>For example:</strong></p>

              <Card className="text-primary w-50" style={{ backgroundColor: "#EEEEEE", textAlign: "left" }}>
                <strong>
                  <p>&lt;input type=&quot;text&quot; id=&quot;name&quot; <strong>onchange=&quot;</strong>change()&quot;&gt;</p>
                  <p>&lt;script&gt;</p>
                  <p>function change() &#123;</p>
                  <p>var x = document.getElementById(&quot;name&quot;);</p>
                  <p>x.value= x.value.toUpperCase();</p>
                  <p>&#125;</p>
                  <p>&lt;/script&gt;</p>
                </strong>
              </Card>
              
              <p><br/></p>
              <p>It&rsquo;s important to understand events, because they are an essential part of dynamic web pages.</p>
              <p><br/></p>

              <h1><strong>Event Listeners</strong></h1>
              <p>The <span className="text-info"><strong>addEventListener</strong></span>() <span className="text-info"><strong>method</strong></span> attaches an event handler to an element without overwriting existing event handlers. You can add many event handlers to one element.</p>
              <p>You can also add many event handlers of the same type to one element, i.e., two &quot;click&quot; events.element.<strong>addEventListener</strong>(event, function, useCapture);</p>
              <p>The first parameter is the event&apos;s <strong>type</strong> (like &quot;click&quot; or &quot;mousedown&quot;).</p>
              <p>The second parameter is the <strong>function</strong> we want to call when the event occurs.</p>
              <p>The third parameter is a Boolean value specifying whether to use event <strong>bubbling</strong> or event <strong>capturing</strong>. This parameter is optional, and will be described in the next lesson.</p>
              <p>Note that you don&apos;t use the <strong>&quot;on&quot;</strong> prefix for this event; use <strong>&quot;click&quot;</strong> instead of <strong>&quot;onclick&quot;</strong>.</p>
              <p><strong>Example:</strong></p>
              
              <Card className="text-primary w-50" style={{ backgroundColor: "#EEEEEE", textAlign: "left" }}>
                <strong>
                  <p>element.<strong>addEventListener(&quot;click&quot;, myFunction);</strong></p>
                  <p>element.<strong>addEventListener(&quot;mouseover&quot;, myFunction);</strong></p>
                  <p><br/></p>
                  <p>function myFunction() &#123;</p>
                  <p>alert(&quot;Hello World!&quot;);</p>
                  <p>&#125;</p>
                </strong>
              </Card>
              
              <p>This adds two event listeners to the element.</p>
              <p>We can remove one of the listeners:element.<strong>removeEventListener</strong>(&quot;mouseover&quot;, myFunction);</p>
              <p>Let&apos;s create an event handler that removes itself after being executed:</p>

              <Card className="text-primary w-50" style={{ backgroundColor: "#EEEEEE", textAlign: "left" }}>
                <strong>
                  <p>&lt;button id=&quot;demo&quot;&gt;Start&lt;/button&gt;</p>
                  <p><br/></p>
                  <p>&lt;script&gt;</p>
                  <p>var btn = document.getElementById(&quot;demo&quot;);</p>
                  <p>btn.<strong>addEventListener</strong>(&quot;click&quot;, myFunction);</p>
                  <p><br/></p>
                  <p>function myFunction() &#123;</p>
                  <p>alert(Math.random());</p>
                  <p>btn.<strong>removeEventListener</strong>(&quot;click&quot;, myFunction);</p>
                  <p>&#125;</p>
                  <p>&lt;/script&gt;</p>
                </strong>
              </Card>
              
              <p><br/></p>
              <p>After clicking the button, an alert with a random number displays and the event listener is removed.</p>
              <p>Internet Explorer version 8 and lower do not support the <strong>addEventListener</strong>() and <strong>removeEventListener</strong>() methods. However, you can use the document.<strong>attachEvent</strong>() method to attach event handlers in Internet Explorer.</p>
              <p><br/></p>

              <h1><strong>Event Propagation</strong></h1>
              <p>There are two ways of event propagation in the HTML <span className="text-info"><strong>DOM</strong></span>: <strong>bubbling</strong> and <strong>capturing</strong>.</p>
              <p><br/></p>
              <p>Event propagation allows for the definition of the element order when an event occurs. If you have a &lt;p&gt; element inside a &lt;div&gt; element, and the user clicks on the &lt;p&gt; element, which element&apos;s &quot;click&quot; event should be handled first?</p>
              <p><br/></p>
              <p>In <strong>bubbling</strong>, the innermost element&apos;s event is handled first and then the outer element&apos;s event is handled. The &lt;p&gt; element&apos;s click event is handled first, followed by the &lt;div&gt; element&apos;s click event.</p>
              <p><br/></p>
              <p>In <strong>capturing</strong>, the outermost element&apos;s event is handled first and then the inner. The &lt;div&gt; element&apos;s click event is handled first, followed by the &lt;p&gt; element&apos;s click event.</p>
              <p>Capturing goes <strong>down</strong> the DOM.</p>
              <p>Bubbling goes <strong>up</strong> the DOM.</p>
              <p><br/></p>

              <h1><strong>Capturing vs. Bubbling</strong></h1>
              <p>The <span className="text-info"><strong>addEventListener</strong></span>() <span className="text-info"><strong>method </strong></span>allows you to specify the propagation type with the <strong>&quot;useCapture&quot;</strong> parameter.addEventListener(event, function, <strong>useCapture</strong>)</p>
              <p>The default value is <strong>false</strong>, which means the bubbling propagation is used; when the value is set to true, the event uses the capturing propagation.</p>
              
              <Card className="text-primary w-50" style={{ backgroundColor: "#EEEEEE", textAlign: "left" }}>
                <strong>
                  <p>//Capturing propagation</p>
                  <p>elem1.addEventListener(&quot;click&quot;, myFunction, <strong>true</strong>);&nbsp;</p>
                  <p><br/></p>
                  <p>//Bubbling propagation</p>
                  <p>elem2.addEventListener(&quot;click&quot;, myFunction, <strong>false</strong>);</p>
                </strong>
              </Card>
              
              <p>This is particularly useful when you have the same event handled for multiple elements in the DOM hierarchy.</p>
              <p><br/></p>

              <h1><strong>Image Slider</strong></h1>
              <p>Now we can create a sample image slider project. The images will be changed using &quot;Next&quot; and &quot;Prev&quot; buttons.</p>
              <p>Now, let&rsquo;s create our HTML, which includes an image and the two navigation buttons:</p>
              
              <Card className="text-primary w-50" style={{ backgroundColor: "#EEEEEE", textAlign: "left" }}>
                <strong>
                  <p>&lt;div&gt;</p>
                  <p>&lt;button&gt; Prev &lt;/button&gt;</p>
                  <p>&lt;img id=&quot;slider&quot; src=&quot;http://www.sololearn.com/uploads/slider/1.jpg&quot;&nbsp;</p>
                  <p>width=&quot;200px&quot; height=&quot;100px&quot;/&gt;</p>
                  <p>&lt;button&gt; Next &lt;/button&gt;</p>
                  <p>&lt;/div&gt;&nbsp;</p>
                </strong>
              </Card>
              
              <p>Next, let&apos;s define our sample images in an <span className="text-info"><strong>array</strong></span>:</p>
              
              <Card className="text-primary w-50" style={{ backgroundColor: "#EEEEEE", textAlign: "left" }}>
                <strong>
                  <p>var images = [</p>
                  <p>&quot;http://www.sololearn.com/uploads/slider/1.jpg&quot;,&nbsp;</p>
                  <p>&quot;http://www.sololearn.com/uploads/slider/2.jpg&quot;,&nbsp;</p>
                  <p>&quot;http://www.sololearn.com/uploads/slider/3.jpg&quot;</p>
                  <p>];</p>
                </strong>
              </Card>
             
              <p>We are going to use three sample images that we have uploaded to our server. You can use any number of images.</p>
              <p>Now we need to handle the Next and Prev button clicks and call the corresponding functions to change the image.</p>
              <p><strong>HTML:</strong></p>

              <Card className="text-primary w-50" style={{ backgroundColor: "#EEEEEE", textAlign: "left" }}>
                <strong>
                  <p>&lt;div&gt;</p>
                  <p>&lt;button <strong>onclick=&quot;prev()&quot;</strong>&gt; Prev &lt;/button&gt;</p>
                  <p>&lt;img id=&quot;slider&quot; src=&quot;http://www.sololearn.com/uploads/slider/1.jpg&quot;&nbsp;</p>
                  <p>width=&quot;200px&quot; height=&quot;100px&quot;/&gt;</p>
                  <p>&lt;button <strong>onclick=&quot;next()&quot;</strong>&gt; Next &lt;/button&gt;</p>
                  <p>&lt;/div&gt;</p>
                </strong>
              </Card>
              
              <p><strong>JS:</strong></p>

              <Card className="text-primary w-50" style={{ backgroundColor: "#EEEEEE", textAlign: "left" }}>
                <strong>
                  <p>var images = [</p>
                  <p>&quot;http://www.sololearn.com/uploads/slider/1.jpg&quot;,&nbsp;</p>
                  <p>&quot;http://www.sololearn.com/uploads/slider/2.jpg&quot;,&nbsp;</p>
                  <p>&quot;http://www.sololearn.com/uploads/slider/3.jpg&quot;</p>
                  <p>];</p>
                  <p>var num = 0;</p>
                  <p><br/></p>
                  <p>function <strong>next</strong>() &#123;</p>
                  <p>var slider = document.getElementById(&quot;slider&quot;);</p>
                  <p>num++;</p>
                  <p>if(num &gt;= images.length) &#123;</p>
                  <p>num = 0;</p>
                  <p>&#125;</p>
                  <p>slider.src = images[num];</p>
                  <p>&#125;</p>
                  <p><br/></p>
                  <p>function <strong>prev</strong>() &#123;</p>
                  <p>var slider = document.getElementById(&quot;slider&quot;);</p>
                  <p>num--;</p>
                  <p>if(num &lt; 0) &#123;</p>
                  <p>num = images.length-1;</p>
                  <p>&#125;</p>
                  <p>slider.src = images[num];</p>
                  <p>&#125;</p>
                </strong>
              </Card>
             
              <p>The <strong>num</strong> <span className="text-info"><strong>variable</strong></span> holds the current image. The next and previous button clicks are handled by their corresponding functions, which change the source of the image to the next/previous image in the <span className="text-info"><strong>array</strong></span>.</p>
              <p>We have created a functioning image slider!</p>
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