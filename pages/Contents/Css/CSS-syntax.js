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

import CSS_img4 from "../../../assets/img/css/css_img4.jpg"
import CSS_img5 from "../../../assets/img/css/css_img5.jpg"
import CSS_img6 from "../../../assets/img/css/css_img6.jpg"

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
                      <h2 className="text-white mb-0">CSS Syntax</h2>
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
                    <p>CSS is composed of style rules that the browser interprets and then applies to the corresponding elements in your document.</p>
                    <p>A style rule has three parts: <strong>selector</strong>, <strong>property</strong>, and <strong>value</strong>.</p>
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
Type Selectors
                  </Button>
                  <Button outline
                    color="warning"
                    href="#tdp"
                    className="d-block w-100 text-left my-1 mx-0"
                    size="sm"
                  >
id and class Selectors
                  </Button>
                  <Button outline
                    color="warning"
                    href="#tdp"
                    className="d-block w-100 text-left my-1 mx-0"
                    size="sm"
                  >
Descendant Selectors
                  </Button>
                  
                  </CardBody>
              </Card>
            </Col>
          </Row>
          <Row className="mt-5">
            <Col md="9">
              
              <p>For example, the headline color can be defined as:</p>

              <Card className="text-primary w-50" style={{ backgroundColor: "#EEEEEE", textAlign: "left" }}>
                <strong>
                  <p>h1 &#123; color: orange; &#125;</p>
                </strong>
              </Card>

              <p><br/></p>
              <p><strong>Where:</strong></p>

              <Card className="imgclasss w-50">
                <img src={CSS_img4}></img>
              </Card>

              <p>The selector points to the HTML element you want to style.</p>
              <p>The declaration block contains one or more declarations, separated by semicolons.</p>
              <p>Each declaration includes a property name and a value, separated by a colon.</p>
              <p><br/></p>
              
              <h1><strong>Type Selectors</strong></h1>
              <p>The most common and easy to understand selectors are <strong>type selectors</strong>. This selector targets element types on the page.</p>
              <p><br/></p>
              <p>For example, to target all the paragraphs on the page:</p>

              <Card className="text-primary w-50" style={{ backgroundColor: "#EEEEEE", textAlign: "left" }}>
                <strong>
                  <p>p &#123;</p>
                  <p>color: red;</p>
                  <p>font-size:130%;</p>
                  <p>&#125;</p>
                </strong>
              </Card>
              
              <p>A CSS declaration always ends with a semicolon, and declaration groups are surrounded by curly braces.</p>
              <p><br/></p>
              
              <h1><strong>id and class Selectors</strong></h1>
              <p><br/></p>
              <p><strong>id selectors</strong> allow you to style an HTML element that has an <strong>id</strong> attribute, regardless of their position in the document tree. Here is an example of an id selector:</p>
              <p><br/></p>

              <Card className="text-primary w-50" style={{ backgroundColor: "#EEEEEE", textAlign: "left" }}>
                <strong>
                  <p><strong>The HTML:</strong></p>
                  <p>:&lt;div <strong>id=&quot;intro&quot;</strong>&gt;</p>
                  <p>&lt;p&gt; This paragraph is in the intro section.&lt;/p&gt;</p>
                  <p>&lt;/div&gt;</p>
                  <p>&lt;p&gt; This paragraph is not in the intro section.&lt;/p&gt;</p>
                  <p><strong>The CSS:</strong></p>
                  <p>#intro &#123;</p>
                  <p>color: white;</p>
                  <p>background-color: gray;</p>
                  <p>&#125;</p>
                </strong>
              </Card>
              
              <p><br/></p>
              <p>To select an element with a specific id, use a hash character, and then follow it with the id of the element.</p>
              <p><strong>Result:</strong></p>
              <p><br/></p>

              <Card className="imgclasss w-50">
                <img src={CSS_img5}></img>
              </Card>

              <p><strong>Class selectors</strong> work in a similar way. The major difference is that IDs can only be applied once per page, while classes can be used as many times on a page as needed.</p>
              <p><br/></p>
              <p>In the example below, both paragraphs having the class &quot;first&quot; will be affected by the CSS:</p>
              <p><br/></p>

              <Card className="text-primary w-50" style={{ backgroundColor: "#EEEEEE", textAlign: "left" }}>
                <strong>
                  <p><strong>The HTML:</strong></p>
                  <p>&lt;div&gt;</p>
                  <p>&lt;p <strong>class</strong>=&quot;first&quot;&gt;This is a paragraph&lt;/p&gt;</p>
                  <p>&lt;p&gt; This is the second paragraph. &lt;/p&gt;</p>
                  <p>&lt;/div&gt;</p>
                  <p>&lt;p <strong>class</strong>=&quot;first&quot;&gt; This is not in the intro section&lt;/p&gt;</p>
                  <p>&lt;p&gt; The second paragraph is not in the intro section. &lt;/p&gt;</p>
                  <p><strong>The CSS:</strong></p>
                  <p>.first &#123;font-size: 200%;&#125;</p>
                </strong>
              </Card>
              
              <p><br/></p>
              <p>To select elements with a specific class, use a period character, followed by the name of the class.</p>
              <p>Do <strong>NOT</strong> start a class or id name with a number!</p>



              <h1><strong>Descendant Selectors</strong></h1>
              <p>These selectors are used to select elements that are descendants of another element. When selecting levels, you can select as many levels deep as you need to.</p>
              <p><br/></p>
              <p>For example, to target only &lt;em&gt; elements in the first paragraph of the &quot;intro&quot; section:</p>
              <p><br/></p>

              <Card className="text-primary w-50" style={{ backgroundColor: "#EEEEEE", textAlign: "left" }}>
                <strong>
                  <p><strong>The HTML:</strong></p>
                  <p>&lt;div id=&quot;intro&quot;&gt;</p>
                  <p>&lt;p class=&quot;first&quot;&gt;This is a &lt;em&gt; paragraph.&lt;/em&gt;&lt;/p&gt;</p>
                  <p>&lt;p&gt; This is the second paragraph. &lt;/p&gt;</p>
                  <p>&lt;/div&gt;</p>
                  <p>&lt;p class=&quot;first&quot;&gt; This is not in the intro section.&lt;/p&gt;</p>
                  <p>&lt;p&gt; The second paragraph is not in the intro section. &lt;/p&gt;</p>
                  <p><strong>The CSS:</strong></p>
                  <p>#intro .first em &#123;</p>
                  <p>color: pink;</p>
                  <p>background-color:gray;</p>
                  <p>&#125;</p>
                </strong>
              </Card>
              
              <p><br/></p>
              <p>As a result, only the elements selected will be affected:</p>

              <Card className="imgclasss w-50">
                <img src={CSS_img6}></img>
              </Card>

              <p>The descendant selector matches all elements that are descendants of a specified element.</p>
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