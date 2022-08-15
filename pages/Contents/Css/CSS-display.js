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

import CSS_img56 from "../../../assets/img/css/css_img56.jpg"
import CSS_img57 from "../../../assets/img/css/css_img57.jpg"
import CSS_img58 from "../../../assets/img/css/css_img58.jpg"
import CSS_img59 from "../../../assets/img/css/css_img59.jpg"
import CSS_img60 from "../../../assets/img/css/css_img60.jpg"

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
                      <h2 className="text-white mb-0">display: block</h2>
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
                        <p>Every element on a web page is a rectangular box.The <strong>display</strong> property determines how that rectangular box behaves. A block element is an element that takes up the fullest width available, with line breaks before and after.</p>
                    <p>The style rules in the following example display the inline &lt;span&gt; elements as block-level elements:</p>
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
display: inline
                  </Button>
                  <Button outline
                    color="warning"
                    href="#tdp"
                    className="d-block w-100 text-left my-1 mx-0"
                    size="sm"
                  >
display:none
                  </Button>
                  <Button outline
                    color="warning"
                    href="#tdp"
                    className="d-block w-100 text-left my-1 mx-0"
                    size="sm"
                  >
The visibility Property
                  </Button>
                  
                </CardBody>
              </Card>
            </Col>
          </Row>
          <Row className="mt-5">
            <Col md="9">
            <Card className="text-primary w-50" style={{ backgroundColor: "#EEEEEE", textAlign: "left" }}>
                <strong>
                  <p><strong>The HTML:</strong></p>
                  <p>&lt;span&gt;First paragraph.&lt;/span&gt;</p>
                  <p>&lt;span&gt;Second paragraph.&lt;/span&gt;</p>
                  <p>&lt;span&gt;Third paragraph.&lt;/span&gt;</p>
                  <p>&lt;span&gt;Fourth paragraph.&lt;/span&gt;</p>
                  <p>&lt;span&gt;Fifth paragraph.&lt;/span&gt;</p>
                  <p><strong>The CSS:</strong></p>
                  <p>span &#123;</p>
                  <p><strong>display: block;</strong></p>
                  <p>&#125;</p>
                </strong>
              </Card>
              
              <p><br/></p>
              <p><strong>Result:</strong></p>
              <p><br/></p>

              <Card className="imgclasss w-50">
                <img src={CSS_img56}></img>
              </Card>
              
              <h1><strong>display: inline</strong></h1>
              <p><br/></p>
              <p>An <strong>inline</strong> element only takes up as much width as necessary, and does not force line breaks.</p>
              
              <Card className="text-primary w-50" style={{ backgroundColor: "#EEEEEE", textAlign: "left" }}>
                <strong>
                  <p><strong>The CSS:</strong></p>
                  <p>p &#123;</p>
                  <p>display: <strong>inline</strong>;</p>
                  <p>&#125;</p>
                </strong>
              </Card>
              
              <p><br/></p>
              <p>The code above will produce the following result:</p>
              <p><br/></p>

              <Card className="imgclasss w-50">
                <img src={CSS_img57}></img>
              </Card>
              <p><br/></p>

              <p>Setting the display property of an element only changes how the element is displayed, not what kind of element it is. So, an inline element with display:block is not allowed to have other block elements inside it.</p>
              <p><br/></p>

              <h1><strong>display:none</strong></h1>
              <p><br/></p>
              <p><strong>display:none</strong> hides an element, so it does not take up any space. The element will be hidden, and the page will be displayed as if the element is not there.</p>
              <p><br/></p>
              <p><strong>The HTML:</strong></p>
              <p>&lt;h1&gt;This text will not display, as we set the value to none.&lt;/h1&gt;</p>
              <p>&lt;p&gt;Headline of this paragraph is not displayed, as we set the value to none.&lt;/p&gt;</p>
              
              <Card className="text-primary w-50" style={{ backgroundColor: "#EEEEEE", textAlign: "left" }}>
                <strong>
                  <p><strong>The CSS:</strong></p>
                  <p>h1 &#123;</p>
                  <p>display: <strong>none</strong>;</p>
                  <p>&#125;</p>
                </strong>
              </Card>
              
              <p><br/></p>
              <p><strong>Result:</strong></p>
              <p><br/></p>

              <Card className="imgclasss w-50">
              <img src={CSS_img58}></img>
              </Card>

              <p>There are plenty of other display values, such as <strong>list-item, table, table-cell, table-column, grid</strong>, etc. Just play with values to see the difference.</p>
              <p><br/></p>
              
              <h1><strong>The visibility Property</strong></h1>
              <p><br/></p>
              <p>The <strong>visibility</strong> property specifies whether an element is visible or hidden. The most common values are <strong>visible</strong> and <strong>hidden</strong>.</p>
              <p><br/></p>
              <p>Hiding an element can be done by setting the display property to &quot;none&quot; or the visibility property to &quot;hidden&quot;. However, notice that these two methods produce different results:</p>
              <p><strong><span className="text-info">visibility</span>:hidden</strong> hides an element, but it will still take up the same space as before. The element will be hidden, but it will still affect the layout:&nbsp;</p>
              <p><br/></p>

              <Card className="text-primary w-50" style={{ backgroundColor: "#EEEEEE", textAlign: "left" }}>
                <strong>
                  <p><strong>The HTML:</strong></p>
                  <p>&lt;h1&gt;This is a heading&lt;/h1&gt;</p>
                  <p>&lt;div class=&quot;hidden&quot;&gt;</p>
                  <p>This text will not display in browser.</p>
                  <p>&lt;/div&gt;</p>
                  <p>&lt;p&gt;</p>
                  <p>The space above this paragraph is empty because&nbsp;</p>
                  <p>the visibility of the div element is set to hidden.</p>
                  <p>&lt;/p&gt;</p>
                  <p><strong>The CSS:</strong></p>
                  <p>div.hidden &#123;</p>
                  <p><strong>visibility: hidden</strong>;</p>
                  <p>&#125;</p>
                </strong>
              </Card>
              
              <p><br/></p>
              <p><strong>Result:</strong></p>
              <p><br/></p>

              <Card className="imgclasss w-50">
              <img src={CSS_img59}></img>
              </Card>

              <p><strong><span className="text-info">display:</span>none</strong> hides an element, without holding a place for that element.</p>
              <p><br/></p>
              <p>Changing <strong><span className="text-info">visibility:</span> hidden</strong>; to <strong><span className="text-info">display:</span> none</strong>; will produce the following result:</p>
              
              <Card className="text-primary w-50" style={{ backgroundColor: "#EEEEEE", textAlign: "left" }}>
                <strong>
                  <p>div.hidden &#123;</p>
                  <p><strong>display: none</strong>;</p>
                  <p>&#125;</p>
                  <p><br/></p>
                  <p><strong>Result:</strong></p>
                  <p><br/></p>
                </strong>
              </Card>
              
              <Card className="imgclasss w-50">
              <img src={CSS_img60}></img>
              </Card>
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