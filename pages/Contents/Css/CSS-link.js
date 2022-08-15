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

import CSS_img51 from "../../../assets/img/css/css_img51.jpg"
import CSS_img52 from "../../../assets/img/css/css_img52.jpg"
import CSS_img53 from "../../../assets/img/css/css_img53.jpg"

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
                      <h2 className="text-white mb-0">Setting Styles to Links</h2>
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
                    <p>Links can be styled with any CSS property (e.g., color, font-family, background, etc.).</p>
                    <p>In addition, links can be styled differently, depending on what state they are in. The following pseudo selectors are available:</p>
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
Links' Text Decoration
                  </Button>

                </CardBody>
              </Card>
            </Col>
          </Row>
          <Row className="mt-5">
            <Col md="9">
            <p><strong>a<span className="text-info">:link</span></strong> - defines the style for normal unvisited links</p>
              <p><strong>a<span className="text-info">:visited</span></strong> - defines the style for visited links</p>
              <p><strong>a<span className="text-info">:active</span></strong> - a link becomes active once you click on it</p>
              <p><strong>a<span className="text-info">:hover</span></strong> - a link is hovered when the mouse is over it</p>
              <p><br/></p>
              <p>The example below creates a link that will change the style when the mouse is moved over it.</p>
              <p><br/></p>

              <Card className="text-primary w-50" style={{ backgroundColor: "#EEEEEE", textAlign: "left" }}>
                <strong>
                  <p><strong>The HTML:</strong></p>
                  <p>&lt;p&gt;&lt;a href=&quot;http://www.tdpvista.com&quot; target=&quot;_blank&quot;&gt;</p>
                  <p>This link is hovered when we mouse over it</p>
                  <p>&lt;/a&gt;&lt;/p&gt;</p>
                  <p><strong>The CSS:</strong></p>
                  <p><strong>a:hover</strong> &#123;</p>
                  <p>color: red;</p>
                  <p>&#125;</p>
                </strong>
              </Card>
              
              <p><br/></p>
              <p>The link from the above example would look like this:</p>
              <p><br/></p>
              <Card className="imgclasss w-50">
                <img src={CSS_img51}></img>
              </Card>
              <p><br/></p>
              <p>But when we mouse over it, it becomes red, as we defined in our stylesheet.</p>
              <p><br/></p>
              <Card className="imgclasss w-50">
                <img src={CSS_img52}></img>
              </Card>
              <p><br/></p>
              <p>When setting the style for several link states, there are some order rules:</p>
              <p>- a:hover MUST come after a:link and a:visited</p>
              <p>- a:active MUST come after a:hover</p>
              <p><br/></p>

              <h1><strong>Links&apos; Text Decoration</strong></h1>
              <p><br/></p>
              <p>By default, text links are underlined by the browser.</p>
              <p>One of the most common uses of CSS with links is to <strong>remove the underline</strong>. In the example below, the <strong>text-decoration</strong> property is used to remove the underline.</p>
              <p><br/></p>

              <Card className="text-primary w-50" style={{ backgroundColor: "#EEEEEE", textAlign: "left" }}>
                <strong>
                  <p><strong>The HTML:</strong></p>
                  <p>&lt;p&gt;&lt;a href=&quot;http://www.tdpvista.com&quot; target=&quot;_blank&quot;&gt;</p>
                  <p>This link has no underline.</p>
                  <p>&lt;/a&gt;&lt;/p&gt;</p>
                  <p><strong>The CSS:</strong></p>
                  <p>a:link &#123;</p>
                  <p><strong>text-decoration: none;</strong></p>
                  <p>&#125;</p>
                </strong>
              </Card>
              
              <p><br/></p>
              <p><strong>Result:</strong></p>
              <p><br/></p>
              
              <Card className="imgclasss w-50">
                <img src={CSS_img53}></img>
              </Card>

              <p><br/></p>
              <p>The following properties are used to control the look and feel of links:</p>
              <p><strong>border:none</strong> - removes border from images with links</p>
              <p><strong>outline:none</strong> - removes the dotted border on clicked lines in IE</p>
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