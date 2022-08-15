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

import CSS_img1 from "../../../assets/img/css/css_img1.jpg"
import CSS_img2 from "../../../assets/img/css/css_img2.jpg"
import CSS_img3 from "../../../assets/img/css/css_img3.jpg"

class Header extends React.Component {
  render() {
    return (

      <div className="header bg-gradient-info pb-8 pt-5 pt-md-8">
        <Container fluid>
          <div className="header-body">
            <Row>
              <Col xl="6">
              <h1 style={{fontSize:"200%",color:"#fff",fontFamily:"Roboto"}}>CSS</h1>
              
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
                      <h2 className="text-white mb-0">Welcome to CSS</h2>
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
                  <p>CSS stands for Cascading Style Sheets.</p>
                  <p>- <strong>Cascading</strong> refers to the way CSS applies one style on top of another.</p>
                  <p>- <strong>Style Sheets</strong> control the look and feel of web documents.
                  </p><p><br/></p>
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
Why Use CSS?
                  </Button>
                  <Button outline
                    color="warning"
                    href="#tdp"
                    className="d-block w-100 text-left my-1 mx-0"
                    size="sm"
                  >
Inline CSS
                  </Button>
                  <Button outline
                    color="warning"
                    href="#tdp"
                    className="d-block w-100 text-left my-1 mx-0"
                    size="sm"
                  >
Embedded/Internal CSS
                  </Button>
                  <Button outline
                    color="warning"
                    href="#tdp"
                    className="d-block w-100 text-left my-1 mx-0"
                    size="sm"
                  >
External CSS
                  </Button>
                  
                  </CardBody>
              </Card>
            </Col>
          </Row>
          <Row className="mt-5">
            <Col xl="9">
              <p><strong>CSS</strong> and <strong>HTML</strong> work hand in hand:</p>
              <p>- HTML sorts out the page structure.</p>
              <p>- CSS defines how HTML elements are displayed.</p>
              <p>To understand CSS, you should already have a basic knowledge of HTML.</p>
              <p>If you want to study HTML, check out the free Tdpvista <strong>Learn HTML</strong> app.</p>
              <p><br/></p>


              <h1><strong>Why Use CSS?</strong></h1>

              <p>CSS allows you to apply specific styles to specific HTML elements.</p>
              <p>The main benefit of CSS is that it allows you to separate <strong>style</strong> from <strong>content</strong>.</p>
              <p><br/></p>
              <p>Using just HTML, all the styles and formatting are in the same place, which becomes rather difficult to maintain as the page grows.</p>
              <p>All formatting can (and <strong>should</strong>) be removed from the HTML document and stored in a separate CSS file.</p>
              <p><br/></p>

              <p>Inline CSS</p>

              <p>Using an inline style is one of the ways to insert a style sheet. With an inline style, a unique style is applied to a single element.</p>
              <p><br/></p>
              <p>In order to use an inline style, add the <strong>style attribute</strong> to the <strong>relevant tag</strong>.</p>
              <p><br/></p>
              <p>The example below shows how to create a paragraph with a gray background and white text:&lt;p <strong>style</strong>=&quot;color:white; background-color:gray;&quot;&gt;</p>
              <p>This is an example of inline styling.</p>
              <p>&lt;/p&gt;</p>
              <p><strong>Result:</strong></p>

              <Card className="imgclasss w-50">
                <img src={CSS_img1}></img>
              </Card>

              <p>The style attribute can contain any CSS property.</p>
              <p><br/></p>

              <h1><strong>Embedded/Internal CSS</strong></h1>

              <p>Internal styles are defined within the <strong>&lt;style&gt;</strong> element, inside the <strong>head</strong> section of an HTML page.</p>
              <p><br/></p>
              <p>For example, the following code styles <strong>all</strong> paragraphs:</p>
              
              <Card className="text-primary w-50" style={{ backgroundColor: "#EEEEEE", textAlign: "left" }}>
                <strong>
                  <p>&lt;html&gt;</p>
                  <p>&lt;head&gt;</p>
                  <p>&lt;style&gt;</p>
                  <p>p &#123;</p>
                  <p>color:white;</p>
                  <p>background-color:gray;</p>
                  <p>&#125;</p>
                  <p>&lt;/style&gt;</p>
                  <p>&lt;/head&gt;</p>
                  <p>&lt;body&gt;</p>
                  <p>&lt;p&gt;This is my first paragraph. &lt;/p&gt;</p>
                  <p>&lt;p&gt;This is my second paragraph. &lt;/p&gt;</p>
                  <p>&lt;/body&gt;</p>
                  <p>&lt;/html&gt;</p>
                </strong>
              </Card>
              
              <p>All paragraphs have a white font and a gray background:</p>

              <Card className="imgclasss w-50">
                <img src={CSS_img2}></img>
              </Card>

              <p>An internal style sheet may be used if one single page has a unique style.</p>
              <p><br/></p>

              <h1><strong>External CSS</strong></h1>

              <p>With this method, all styling rules are contained in a single text file, which is saved with the <strong>.css</strong> extension.</p>
              <p><br/></p>
              <p>This CSS file is then referenced in the HTML using the <strong>&lt;link&gt;</strong> tag. The &lt;link&gt; element goes inside the head section.</p>
              <p><br/></p>
              <p>Here is an example:</p>

              <Card className="text-primary w-50" style={{ backgroundColor: "#EEEEEE", textAlign: "left" }}>
                <strong>
                  <p><strong>The HTML:</strong></p>
                  <p>&lt;head&gt;</p>
                  <p>&lt;<strong>link</strong> rel=&quot;stylesheet&quot; href=&quot;example.css&quot;&gt;</p>
                  <p>&lt;/head&gt;</p>
                  <p>&lt;body&gt;</p>
                  <p>&lt;p&gt;This is my first paragraph.&lt;/p&gt;</p>
                  <p>&lt;p&gt;This is my second paragraph. &lt;/p&gt;</p>
                  <p>&lt;p&gt;This is my third paragraph. &lt;/p&gt;</p>
                  <p>&lt;/body&gt;</p>
                  <p><strong>The CSS:</strong></p>
                  <p>p &#123;</p>
                  <p>color:white;</p>
                  <p>background-color:gray;</p>
                  <p>&#125;</p>
                </strong>
              </Card>
              
              <p><br/></p>
              <p><strong>Result:</strong></p>

              <Card className="imgclasss w-50">
                <img src={CSS_img3}></img>
              </Card>

              <p>Both relative and absolute paths can be used to define the <strong>href</strong> for the CSS file. In our example, the path is relative, as the CSS file is in the same directory as the HTML file.</p>
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