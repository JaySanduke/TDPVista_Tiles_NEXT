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

import CSS_img46 from "../../../assets/img/css/css_img46.jpg"

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
                      <h2 className="text-white mb-0">The list-style-type Property</h2>
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
                    <p>The CSS list properties allow us to set different list item markers. In HTML, there are two types of lists:</p>
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
The List Image and Position
                  </Button>
                  <Button outline
                    color="warning"
                    href="#tdp"
                    className="d-block w-100 text-left my-1 mx-0"
                    size="sm"
                  >
The list-style Property
                  </Button>
                  
                </CardBody>
              </Card>
            </Col>
          </Row>
          <Row className="mt-5">
            <Col md="9">
            <p><strong>unordered lists</strong> (&lt;ul&gt;) - the list items are marked with bullets</p>
              <p><strong>ordered lists</strong> (&lt;ol&gt;) - the list items are marked with numbers or letters</p>
              <p>With CSS, lists can be styled further, and images can be used as the list item marker.</p>
              <p>One of the ways is to use the <strong>list-style-type</strong> property, which can be set to <strong>circle, square, decimal, disc, lower-alpha</strong>, etc.</p>
              <p><br/></p>

              <Card className="text-primary w-50" style={{ backgroundColor: "#EEEEEE", textAlign: "left" }}>
                <strong>
                  <p><strong>The HTML:</strong></p>
                  <p>&lt;ol class=&quot;lower-alpha&quot;&gt;</p>
                  <p>&lt;li&gt;Red&lt;/li&gt;</p>
                  <p>&lt;li&gt;Green&lt;/li&gt;</p>
                  <p>&lt;li&gt;Blue&lt;/li&gt;</p>
                  <p>&lt;/ol&gt;</p>
                  <p>&lt;ul class=&quot;circle&quot;&gt;</p>
                  <p>&lt;li&gt;Red&lt;/li&gt;</p>
                  <p>&lt;li&gt;Green&lt;/li&gt;</p>
                  <p>&lt;li&gt;Blue&lt;/li&gt;</p>
                  <p>&lt;/ul&gt;</p>
                  <p>&lt;ul class=&quot;square&quot;&gt;</p>
                  <p>&lt;li&gt;Red&lt;/li&gt;</p>
                  <p>&lt;li&gt;Green&lt;/li&gt;</p>
                  <p>&lt;li&gt;Blue&lt;/li&gt;</p>
                  <p>&lt;/ul&gt;</p>
                  <p><strong>The CSS:</strong></p>
                  <p>ol.lower-alpha &#123;</p>
                  <p>list-style-type: <strong>lower-alpha;</strong></p>
                  <p>&#125;</p>
                  <p>ul.circle &#123;</p>
                  <p>list-style-type: <strong>circle;</strong></p>
                  <p>&#125;</p>
                  <p>ul.square &#123;</p>
                  <p>list-style-type: <strong>square;</strong></p>
                  <p>&#125;</p>
                </strong>
              </Card>
              
              <p><br/></p>
              <p><strong>Result:</strong></p>
              <p><br/></p>

              <Card className="imgclasss w-50">
                <img src={CSS_img46}></img>
              </Card>

              <p>Some of the values are for unordered lists, and some for ordered lists.</p>
              <p><br/></p>
              
              <h1><strong>The List Image and Position</strong></h1>
              <p><br/></p>
              <p>There are also other list properties, such as:</p>
              <p><strong>list-style-image</strong> - specifies an image to be used as the list item marker.</p>
              <p><strong>list-style-position</strong> - specifies the position of the marker box (inside, outside).</p>
              <p><br/></p>
              <p>In the example below, we use an image as the list item marker, and specify the position to be inside of the content flow.</p>
              <p><br/></p>

              <Card className="text-primary w-50" style={{ backgroundColor: "#EEEEEE", textAlign: "left" }}>
                <strong>
                  <p><strong>The HTML:</strong></p>
                  <p>&lt;p&gt;The following list has list-style-position: &lt;strong&gt;inside&lt;/strong&gt;.&lt;/p&gt;</p>
                  <p>&lt;ul&gt;</p>
                  <p>&lt;li&gt;Red&lt;/li&gt;</p>
                  <p>&lt;li&gt;Green&lt;/li&gt;</p>
                  <p>&lt;li&gt;Blue&lt;/li&gt;</p>
                  <p>&lt;/ul&gt;</p>
                  <p><strong>The CSS:</strong></p>
                  <p>ul &#123;</p>
                  <p><strong>list-style-image: url</strong>(&quot;logo.jpg&quot;);</p>
                  <p><strong>list-style-position: inside;</strong></p>
                  <p>&#125;</p>
                </strong>
              </Card>
              
              <div  style={{ backgroundColor: "#10f010", textAlign: "left" }}>
                <p>&quot;list-style-position: <strong>outside</strong>&quot; is the default value.</p>
              </div>

              <h1><strong>The list-style Property</strong></h1>
              <p><br/></p>
              <p>The <strong>list-style</strong> property is a shorthand property for setting list-style-type, list-style-image and list-style-position. It is used to set all of the list properties in one declaration:</p>
              
              <Card className="text-primary w-50" style={{ backgroundColor: "#EEEEEE", textAlign: "left" }}>
                <strong>
                  <p>ul &#123;</p>
                  <p><strong>list-style:</strong> square outside none;</p>
                  <p>&#125;</p>
                  <p>This would be the same as the longhand version.</p>
                  <p>ul &#123;</p>
                  <p>list-style-type: square;</p>
                  <p>list-style-position: outside;</p>
                  <p>list-style-image: none;</p>
                  <p>&#125;</p>
                </strong>
              </Card>
              
              <p><br/></p>
              <p>If one of the property values are missing, the default value for the missing property will be inserted, if any.</p>
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