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

import CSS_img83 from "../../../../../assets/img/css/css_img83.jpg"
import CSS_img84 from "../../../../../assets/img/css/css_img84.jpg"

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
                      <h2 className="text-white mb-0">Transparency Effect</h2>
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
                    <p>Before CSS3, transparent background images were used to create transparency effects. The new features of CSS3 now make it easier to create transparency effects.</p>
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
RGBA Colors
                  </Button>
                  <Button outline
                    color="warning"
                    href="#tdp"
                    className="d-block w-100 text-left my-1 mx-0"
                    size="sm"
                  >
HSL (Hue, Saturation, Lightness) Colors
                  </Button>
                  <Button outline
                    color="warning"
                    href="#tdp"
                    className="d-block w-100 text-left my-1 mx-0"
                    size="sm"
                  >
Multiple Text Shadows
                  </Button>
                  
                </CardBody>
              </Card>
            </Col>
          </Row>
          <Row className="mt-5">
            <Col md="9">
              <p>CSS supports color names, hexadecimal, and RGB colors.</p>
              <p>In addition, CSS3 introduces the following:</p>
              <p><br/></p>
              
              <h1><strong>RGBA Colors</strong></h1>
              <p>RGBA color values are an extension of RGB color values with an alpha channel, which specifies the opacity for a color.</p>
              <p>An RGBA color value is specified with: <strong>rgba(red, green, blue, alpha).</strong> The alpha parameter is a number between 0.0 (fully transparent) and 1.0 (fully opaque).</p>
              <p><br/></p>
              
              <h1><strong>HSL (Hue, Saturation, Lightness) Colors</strong></h1>
              <p>An HSL color value is specified with: <strong>hsl(hue, saturation, lightness).</strong></p>
              <p>Hue is a degree on the color wheel ranging from 0 to 360</p>
              <p>0 (or 360) is red, 120 is green, 240 is blue.</p>
              <p>Saturation is a percentage value: 100% is the full color.</p>
              <p>Lightness is also a percentage; 0% is dark (black) and 100% is white. <strong>HSLA</strong> color values are an extension of HSL color values with an alpha channel - which specifies the opacity for a color (just like RGBA).</p>
              <p><br/></p>
              <p>In the example below, a transparent glass menu bar is created with CSS3.</p>
              <p><br/></p>
              <p>In the HTML file, a &lt;nav&gt; tag containing an &lt;ul&gt; list with links has been added:</p>
              
              <Card className="text-primary w-50" style={{ backgroundColor: "#EEEEEE", textAlign: "left" }}>
                <strong>
                  <p>&lt;nav&gt;</p>
                  <p>&lt;ul&gt;</p>
                  <p>&lt;li&gt;&lt;a href=&quot;#&quot;&gt;COURSES&lt;/a&gt;&lt;/li&gt;</p>
                  <p>&lt;li&gt;&lt;a href=&quot;#&quot;&gt;DISCUSS&lt;/a&gt;&lt;/li&gt;</p>
                  <p>&lt;li&gt;&lt;a href=&quot;#&quot;&gt;TOP LEARNERS&lt;/a&gt;&lt;/li&gt;</p>
                  <p>&lt;li&gt;&lt;a href=&quot;#&quot;&gt;BLOG&lt;/a&gt;&lt;/li&gt;</p>
                  <p>&lt;/ul&gt;</p>
                  <p>&lt;/nav&gt;</p>
                  <p>A number of CSS3 features are used to create the effects:</p>
                  <p>body &#123;</p>
                  <p>background:url(&quot;bg.jpg&quot;);</p>
                  <p>&#125;</p>
                  <p>nav &#123;</p>
                  <p>padding: 50px 0;</p>
                  <p>min-width: 500px;&nbsp;</p>
                  <p>&#125;</p>
                  <p>nav ul &#123;</p>
                  <p>background: linear-gradient(90deg,&nbsp;</p>
                  <p>rgba(255, 255, 255, 0) 0%,&nbsp;</p>
                  <p>rgba(255, 255, 255, 0.2) 25%,&nbsp;</p>
                  <p>rgba(255, 255, 255, 0.2) 75%,&nbsp;</p>
                  <p>rgba(255, 255, 255, 0) 100%);</p>
                  <p>box-shadow: 0 0 25px rgba(0, 0, 0, 0.1),</p>
                  <p>inset 0 0 1px rgba(255, 255, 255, 0.6);</p>
                  <p>&#125;</p>
                  <p>nav ul li &#123;</p>
                  <p>display: inline-block;</p>
                  <p>&#125;</p>
                  <p>nav ul li a &#123;</p>
                  <p>padding: 10px;&nbsp;</p>
                  <p>color: #FFFFFF;</p>
                  <p>font-size: 18px;</p>
                  <p>font-family: Arial;</p>
                  <p>text-decoration: none;</p>
                  <p>display: block;</p>
                  <p>&#125;</p>
                </strong>
              </Card>
              
              <p><br/></p>
              <p><strong>Result:</strong></p>
              <p><br/></p>

              <Card className="imgclasss w-50">
                <img src={CSS_img83}></img>
              </Card>

              <p>The &lt;ul&gt; tag has been styled with a background gradient that is white and transparent.</p>
              <p>Two box-shadow values have been added, one for an outer, dark shadow; and one for an inner, light edge.</p>
              <p><br/></p>
              
              <h1><strong>Multiple Text Shadows</strong></h1>
              <p><br/></p>
              <p>The text-shadow style can accept multiple values in a comma-separated list.</p>
              <p>According to CSS2, the shadows are laid down in the order they appear, so if they overlap, the last one that is specified should appear on top. CSS3 has now changed that so they are applied in <strong>reverse order</strong>.</p>
              <p><br/></p>
              <p>To create multiple shadows, the shadows are separated with a comma. Here is an example:</p>
              
              <Card className="text-primary w-50" style={{ backgroundColor: "#EEEEEE", textAlign: "left" }}>
                <strong>
                  <p>h1 &#123;</p>
                  <p>text-shadow: 5px 10px 2px #93968f,&nbsp;</p>
                  <p>-3px 6px 5px #58d1e3;</p>
                  <p>&#125;</p>
                </strong>
              </Card>
              
              <p><br/></p>
              <p>This example defines two text shadows at different locations, blur radius, and colors. This makes it look like there are two different light sources on the text.</p>
              <p><br/></p>

              <Card className="imgclasss w-50">
                <img src={CSS_img84}></img>
              </Card>

              <p>To make a text shadow look realistic, remember these few shadow characteristics:</p>
              <p><br/></p>
              <p>- A shadow which is close to the text is normally not as blurred as a shadow that is far from the text. A shadow that is far from the text usually implies a light source which is also far from the text.&nbsp;</p>
              <p><br/></p>
              <p>- A shadow which is close to the text usually implies that the underlying surface is close, that the light is close, or both. A close shadow is often darker than a distant shadow, because less light can get in between the shape and the underlying surface.</p>
              <p>To remove a text-shadow, set the text-shadow property to <strong>none</strong>; no shadows will be associated with that element.</p>
 
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