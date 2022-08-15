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

import CSS_img91 from "../../../assets/img/css/css_img91.jpg"
import CSS_img92 from "../../../assets/img/css/css_img92.jpg"

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
                      <h2 className="text-white mb-0">The @font-face Rule</h2>
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
                    <p>The <strong>@font-face</strong> rule allows custom fonts to be loaded into a webpage.</p>
                    <p>With the help of this rule, designs are no longer limited to the fonts that are installed on a user&apos;s computer.</p>
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
                </CardBody>
              </Card>
            </Col>
          </Row>
          <Row className="mt-5">
            <Col md="9">
              <p>In Internet Explorer 8 and earlier, the URL must point to an <strong>Embedded OpenType</strong> (eot) file, while Firefox, Chrome, etc. support True <strong>Type Fonts</strong> (ttf) fonts and <strong>OpenType Fonts</strong> (otf).</p>

              <Card className="imgclasss w-50">
                <img src={CSS_img91}></img>
              </Card>

              <p>In the @font-face rule, you must first define a name for the font (e.g., myFirstFont), and then point to the font file.</p>
              <p>Each form of the font family must be declared using the <strong>@font-face</strong> rule. In the example below, a custom font called &quot;Delicious&quot; is loaded and used for the heading.</p>
              <p><br/></p>

              <Card className="text-primary w-50" style={{ backgroundColor: "#EEEEEE", textAlign: "left" }}>
                <strong>
                  <p>The HTML</p>
                  <p>&lt;h1&gt;This is Our Headline&lt;/h1&gt;</p>
                  <p>The CSS@font-face &#123;</p>
                  <p>font-family: Delicious;&nbsp;</p>
                  <p>src: url(&apos;Delicious-Roman.otf&apos;);&nbsp;</p>
                  <p>&#125;&nbsp;</p>
                  <p>@font-face &#123;&nbsp;</p>
                  <p>font-family: Delicious;&nbsp;</p>
                  <p>font-weight: bold;&nbsp;</p>
                  <p>src: url(&apos;Delicious-Bold.otf&apos;);&nbsp;</p>
                  <p>&#125;</p>
                  <p>h1&#123;</p>
                  <p>font-family: Delicious, sans-serif;&nbsp;</p>
                  <p>&#125;</p>
                  <p>Internet Explorer has a built-in bug when multiple @font-face rules are defined. Using <strong>#iefix</strong> as shown below fixes the problem:@font-face &#123;&nbsp;</p>
                  <p>font-family: Delicious;&nbsp;</p>
                  <p>src: url(&apos;Delicious-Roman.ttf&apos;);</p>
                  <p>src: url(&apos;Delicious-Roman.eot?<strong>#iefix</strong>&apos;);&nbsp;</p>
                  <p>&#125;</p>
                </strong>
              </Card>

              <p><strong>Result:</strong></p>
              <p><br/></p>

              <Card className="imgclasss w-50">
                <img src={CSS_img92}></img>
              </Card>

              <p>The question mark fools IE into thinking the rest of the string is a query string and loads just the EOT file. The other browsers follow the spec and select the format they need, based on the src cascade.</p>
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