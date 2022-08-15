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


import JS_img1 from "../../../assets/img/js/js_img1.jpg"
import JS_img2 from "../../../assets/img/js/js_img2.jpg"
import JS_img3 from "../../../assets/img/js/js_img3.jpg"
import JS_img4 from "../../../assets/img/js/js_img4.jpg"
import JS_img5 from "../../../assets/img/js/js_img5.jpg"
import JS_img6 from "../../../assets/img/js/js_img6.jpg"

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
                      <h2 className="text-white mb-0">Welcome to JavaScript</h2>
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
               
                  <Button outline
                    color="warning"
                    href="#tdp"
                    className="d-block w-100 text-left my-1 mx-0"
                    size="sm"
                  >
Your First JavaScript
                  </Button>
                  <Button outline
                    color="warning"
                    href="#tdp"
                    className="d-block w-100 text-left my-1 mx-0"
                    size="sm"
                  >
JavaScript in &lt;head&gt;
                  </Button>
                  <Button outline
                    color="warning"
                    href="#tdp"
                    className="d-block w-100 text-left my-1 mx-0"
                    size="sm"
                  >
JavaScript in &lt;body&gt;
                  </Button>
                  <Button outline
                    color="warning"
                    href="#tdp"
                    className="d-block w-100 text-left my-1 mx-0"
                    size="sm"
                  >
The &lt;script&gt; Tag
                  </Button>
                  <Button outline
                    color="warning"
                    href="#tdp"
                    className="d-block w-100 text-left my-1 mx-0"
                    size="sm"
                  >
External JavaScript
                  </Button>
                  
                  </CardBody>
              </Card>
            </Col>
          </Row>
          <Row className="mt-5">
            <Col md="9">
              <h1><strong>Your First JavaScript</strong></h1>
              <p><br/></p>
              <p>Let&apos;s start with adding JavaScript to a webpage.</p>
              <p>JavaScript on the web lives inside the <strong>HTML</strong> document.</p>
              <p>In HTML, JavaScript code must be inserted between <span className="text-info"><strong>&lt;script&gt;</strong></span> and <strong>&lt;/script&gt;</strong> tags:&lt;script&gt;</p>
              <p>...</p>
              <p>&lt;/script&gt;</p>
              <p>JavaScript can be placed in the HTML page&apos;s <strong>&lt;body&gt;</strong> and <strong>&lt;head&gt;</strong> sections.</p>
              <p>In the example below, we placed it within the <strong>&lt;body&gt;</strong> tag.</p>
              <p><br/></p>
              <Card className="imgclasss w-50">
                <img src={JS_img1}></img>
              </Card>

              <p>Remember that the script, which is placed in the head section, will be executed before the &lt;body&gt; is rendered. If you want to get elements in the body, it&apos;s a good idea to place your script at the end of the body tag.</p>
              <p><br/></p>

              <h1><strong>Output</strong></h1>
              <p><br/></p>
              <p>Let&apos;s use JavaScript to print &quot;Hello World&quot; to the browser.</p>
              
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
              <p>The <strong>document.write()</strong> function writes a <span className="text-info"><strong>string</strong></span> into our HTML document. This function can be used to write text, HTML, or both.</p>
              <p><br/></p>
              <p>The above code displays the following result:</p>
              <p><br/></p>

              <p><strong>Result:</strong></p>
              <Card className="imgclasss w-50">
                <img src={JS_img2}></img>
              </Card>

              <p>The <strong>document.write()</strong> method should be used only for testing. Other output mechanisms appear in the upcoming lessons.</p>
              <p>Just like in HTML, we can use HTML tags to format text in JavaScript.</p>
              <p>For example, we can output the text as a heading.</p>
              
              <Card className="text-primary w-50" style={{ backgroundColor: "#EEEEEE", textAlign: "left" }}>
                <strong>
                  <p>&lt;html&gt;</p>
                  <p>&lt;head&gt; &lt;/head&gt;</p>
                  <p>&lt;body&gt;</p>
                  <p>&lt;script&gt;</p>
                  <p>document.write(&quot;<strong>&lt;h1&gt;</strong>Hello World!<strong>&lt;/h1&gt;</strong>&quot;);</p>
                  <p>&lt;/script&gt;</p>
                  <p>&lt;/body&gt;</p>
                  <p>&lt;/html&gt;</p>
                </strong>
              </Card>
              

              <p><strong>Result:</strong></p>
              <Card className="imgclasss w-50">
                <img src={JS_img3}></img>
              </Card>

              <p>You can output almost everything in the webpage using JavaScript. Many JavaScript frameworks use this to create HTML pages.</p>
              <p><br/></p>

              <h1><strong>JavaScript in &lt;head&gt;</strong></h1>
              <p><br/></p>
              <p>You can place any number of scripts in an HTML document.</p>
              <p>Typically, the script tag is placed in the head of the HTML document:&lt;html&gt;</p>

              <Card className="text-primary w-50" style={{ backgroundColor: "#EEEEEE", textAlign: "left" }}>
                <strong>
                  <p>&lt;head&gt;</p>
                  <p><strong>&lt;script&gt;</strong></p>
                  <p><strong>&lt;/script&gt;</strong></p>
                  <p>&lt;/head&gt;</p>
                  <p>&lt;body&gt;</p>
                  <p>&lt;/body&gt;</p>
                  <p>&lt;/html&gt;&nbsp;</p>
                </strong>
              </Card>
              
              <p>There is also a &lt;noscript&gt; tag. Its content will be shown if the client&apos;s browser doesn&apos;t support JS scripts.</p>

              <h1><strong>JavaScript in &lt;body&gt;</strong></h1>
              <p><br/></p>
              <p>Alternatively, include the JavaScript in the &lt;body&gt; tag.&lt;html&gt;</p>

              <Card className="text-primary w-50" style={{ backgroundColor: "#EEEEEE", textAlign: "left" }}>
                <strong>
                  <p>&lt;head&gt; &lt;/head&gt;</p>
                  <p>&lt;body&gt;</p>
                  <p><strong>&lt;script&gt;</strong></p>
                  <p><strong>&lt;/script&gt;</strong></p>
                  <p>&lt;/body&gt;</p>
                  <p>&lt;/html&gt;</p>
                </strong>
              </Card>
              
              <p>It&apos;s a good idea to place scripts at the bottom of the &lt;body&gt; element.</p>
              <p>This can improve page load, because HTML display is not blocked by scripts loading.</p>
              <p><br/></p>

              <h1><strong>The &lt;script&gt; Tag</strong></h1>
              <p><br/></p>
              <p>The &lt;script&gt; tag can take two attributes, <strong>language</strong> and <strong>type</strong>, which specify the script&apos;s type:&lt;script <strong>language</strong>=&quot;javascript&quot; <strong>type</strong>=&quot;text/javascript&quot;&gt;</p>
              <p>&lt;/script&gt;</p>
              <p>The <strong>language</strong> attribute is deprecated, and should not be used.</p>
              <p>In the example below, we created an alert box inside the script tag, using the <strong>alert()</strong> function.</p>
              
              <Card className="text-primary w-50" style={{ backgroundColor: "#EEEEEE", textAlign: "left" }}>
                <strong>
                  <p>&lt;html&gt;</p>
                  <p>&lt;head&gt;</p>
                  <p>&lt;title&gt;&lt;/title&gt;</p>
                  <p><strong>&lt;script type=&quot;text/javascript&quot;&gt;</strong></p>
                  <p><strong>alert(&quot;This is an alert box!&quot;);</strong></p>
                  <p><strong>&lt;/script&gt;</strong></p>
                  <p>&lt;/head&gt;</p> 
                  <p>&lt;body&gt;</p>
                  <p>&lt;/body&gt;</p>
                  <p>&lt;/html&gt;</p>
                </strong>
              </Card>
              
              <p><strong>Result:</strong></p>
              <p><br/></p>
              <Card className="imgclasss w-50">
                <img src={JS_img4}></img>
              </Card>

              <p>The <strong>type</strong> attribute: &lt;script type=&quot;text/javascript&quot;&gt; is also no longer required, as JavaScript is the default HTML scripting language.</p>
              <p><br/></p>

              <h1><strong>External JavaScript</strong></h1>
              <p><br/></p>
              <p>Scripts can also be placed in <strong>external files</strong>.</p>
              <p>External scripts are useful and practical when the same code is used in a number of different web pages.</p>
              <p>JavaScript files have the <strong>file extension .js</strong>.</p>
              <p><br/></p>
              <p>Below, we&apos;ve created a new <strong>text file</strong>, and called it <strong>demo.js</strong>.</p>
              <p><br/></p>

              <Card className="imgclasss w-50">
                <img src={JS_img5}></img>
              </Card>

              <p>Having JS scripts in separate files makes your code much readable and clearer.</p>
              <p>To use an external script, put the name of the script file in the <strong>src</strong> (source) attribute of the &lt;script&gt; tag.</p>
              <p><br/></p>
              <p>Here is an example:</p>

              <Card className="text-primary w-50" style={{ backgroundColor: "#EEEEEE", textAlign: "left" }}>
                <strong>
                  <p>&lt;html&gt;</p>
                  <p>&lt;head&gt;</p>
                  <p>&lt;title&gt; &lt;/title&gt;</p>
                  <p>&lt;script <strong>src=&quot;demo.js</strong>&quot;&gt;&lt;/script&gt;</p>
                  <p>&lt;/head&gt;</p> 
                  <p>&lt;body&gt;</p>
                  <p>&lt;/body&gt;</p>
                  <p>&lt;/html&gt;</p>
                </strong>
              </Card>
              
              <p>Your <strong>demo.js</strong> file includes the following JavaScript:alert(&quot;This is an alert box!&quot;);</p>
              <p>External scripts cannot contain &lt;script&gt; tags.</p>
              <p><strong>Result:</strong></p>
              <p><br/></p>

              <Card className="imgclasss w-50">
                <img src={JS_img6}></img>
              </Card>

              <p>You can place an external script reference in &lt;head&gt; or &lt;body&gt;, whichever you prefer.</p>
              <p>The script will behave as if it were located exactly where the &lt;script&gt; tag is located.</p>
              <p>Placing a JavaScript in an external file has the following advantages:</p>
              <p>- It separates HTML and code.</p>
              <p>- It makes HTML and JavaScript easier to read and maintain.</p>
              <p>- Cached JavaScript files can speed up page loads.</p>
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