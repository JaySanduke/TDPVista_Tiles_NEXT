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

import CSS_img43 from "../../../assets/img/css/css_img43.jpg"
import CSS_img44 from "../../../assets/img/css/css_img44.jpg"
import CSS_img45 from "../../../assets/img/css/css_img45.jpg"

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
                      <h2 className="text-white mb-0">The background-color Property</h2>
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
                    <p>The <strong>background-color</strong> property is used to specify the background color of an element.</p>
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
The Background Color Values
                  </Button>
                  <Button outline
                    color="warning"
                    href="#tdp"
                    className="d-block w-100 text-left my-1 mx-0"
                    size="sm"
                  >
The background-image Property
                  </Button>
                  <Button outline
                    color="warning"
                    href="#tdp"
                    className="d-block w-100 text-left my-1 mx-0"
                    size="sm"
                  >
The background-repeat Property
                  </Button>
                  <Button outline
                    color="warning"
                    href="#tdp"
                    className="d-block w-100 text-left my-1 mx-0"
                    size="sm"
                  >
Setting the Value to Inherit
                  </Button>
                  <Button outline
                    color="warning"
                    href="#tdp"
                    className="d-block w-100 text-left my-1 mx-0"
                    size="sm"
                  >
The background-attachment Property
                  </Button>
                  
                  </CardBody>
              </Card>
            </Col>
          </Row>
          <Row className="mt-5">
            <Col md="9">
              <h1><strong></strong></h1>
              <p><br/></p>
              

              <Card className="text-primary w-50" style={{ backgroundColor: "#EEEEEE", textAlign: "left" }}>
                <strong>
                  <p><strong>The HTML:</strong></p>
                  <p>&lt;p&gt;The background color of this page is set to LightSkyBlue.&lt;/p&gt;</p>
                  <p><strong>The CSS:</strong></p>
                  <p>body &#123;</p>
                  <p><strong>background-color</strong>: #87CEFA;</p>
                  <p>&#125;</p>
                </strong>
              </Card>
              
              <p><br/></p>
              <p><strong>Result:</strong></p>
              <p><br/></p>

              <Card className="imgclasss w-50">
                <img src={CSS_img43}></img>
              </Card>

              <h1><strong>The Background Color Values</strong></h1>
              <p><br/></p>
              <p>The color of the background can be defined using three different formats: a <strong>color name, hexadecimal values, and RGB.</strong></p>
              <p><br/></p>
              <p>In the example below, the body, h1, and p elements are assigned different background colors:</p>
              <p><br/></p>

              <Card className="text-primary w-50" style={{ backgroundColor: "#EEEEEE", textAlign: "left" }}>
                <strong>
                  <p><strong>The HTML:</strong></p>
                  <p>&lt;h1&gt;This is a heading&lt;/h1&gt;</p>
                  <p>&lt;p&gt;This is a paragraph&lt;/p&gt;</p>
                  <p><strong>The CSS:</strong></p>
                  <p>body &#123;</p>
                  <p>background-color: <strong>#C0C0C0;</strong></p>
                  <p>&#125;</p>
                  <p>h1 &#123;</p>
                  <p>background-color: <strong>rgb(135,206,235);</strong></p>
                  <p>&#125;</p>
                  <p>p &#123;</p>
                  <p>background-color: <strong>LightGreen;</strong></p>
                  <p>&#125;</p>
                </strong>
              </Card>
              
              <p><br/></p>
              <p><strong>Result:</strong></p>
              <p><br/></p>

              <Card className="imgclasss w-50">
                <img src={CSS_img44}></img>
              </Card>

              <h1><strong>The background-image Property</strong></h1>
              <p><br/></p>
              <p>The <strong>background-image</strong> property sets one or several background images in an element. Let&apos;s set a background-image for the &lt;body&gt; element.</p>
              <p><br/></p>

              <Card className="text-primary w-50" style={{ backgroundColor: "#EEEEEE", textAlign: "left" }}>
                <strong>
                  <p><strong>The CSS:</strong></p>
                  <p>body &#123;</p>
                  <p><strong>background-image: url(&quot;vistalogo.png&quot;);</strong></p>
                  <p>background-color: #4d3fb3;</p>
                  <p>&#125;</p>
                </strong>
              </Card>
              
              <p><br/></p>
              <p>By default, a background-image is placed at the top-left corner of an element, and is repeated both vertically and horizontally to cover the entire element.</p>
              <p><br/></p>
              <p>Background-image can be set not only for the whole page, but for individual elements, as well.</p>
              <p>Below we set a background image for the &lt;p&gt; element.</p>
              <p><br/></p>

              <Card className="text-primary w-50" style={{ backgroundColor: "#EEEEEE", textAlign: "left" }}>
                <strong>
                  <p><strong>The HTML:</strong></p>
                  <p>&lt;p&gt;This paragraph has a background image.&lt;/p&gt;</p>
                  <p><br/></p>
                  <p><strong>The CSS:</strong></p>
                  <p>p &#123;</p>
                  <p>padding: 30px;</p>
                  <p>background-image: url(&quot;green_photo.jpg&quot;);</p>
                  <p>color: white;</p>
                  <p>&#125;</p>
                </strong>
              </Card>
              
              <p><br/></p>
              <p><strong>Result:</strong></p>
              <p><br/></p>

              <Card className="imgclasss w-50">
                <img src={CSS_img45}></img>
              </Card>

              <p>To specify more than one image, just separate the URLs with <strong>commas</strong>.</p>

              <h1><strong>The background-repeat Property</strong></h1>
              <p><br/></p>
              <p>The background repeat property specifies how background images are repeated. A background image can be repeated along the <strong>horizontal axis, the vertical axis, both axes, or not repeated at all</strong>.</p>
              <p><br/></p>
              <p>The repeat-x will repeat a background image only horizontally.</p>

              <Card className="text-primary w-50" style={{ backgroundColor: "#EEEEEE", textAlign: "left" }}>
                <strong>
                  <p><strong>The CSS:</strong></p>
                  <p>body &#123;</p>
                  <p>background-image: url(&quot;vistalogo.png&quot;);</p>
                  <p><strong>background-repeat: repeat-x;</strong></p>
                  <p>&#125;</p>

                </strong>
              </Card>
              
              <p>The repeat-y will repeat a background-image only <strong>vertically</strong>.</p>
              <p><br/></p>

              <Card className="text-primary w-50" style={{ backgroundColor: "#EEEEEE", textAlign: "left" }}>
                <strong>
                  <p><strong>The CSS:</strong></p>
                  <p>body &#123;</p>
                  <p>background-image: url(&quot;vistalogo.png&quot;);</p>
                  <p><strong>background-repeat: repeat-y;</strong></p>
                  <p>&#125;</p>
                </strong>
              </Card>
              
              <p><br/></p>
              <p>If you want the image to be shown only once, use the <strong>no-repeat</strong> value.</p>

              <h1><strong>Setting the Value to Inherit</strong></h1>
              <p><br/></p>
              <p>When you set the background-repeat property to <strong>inherit</strong>, it will take the same specified value as the property for the element&apos;s parent.</p>
              <p><br/></p>
              <p>For example, we set the body background repeat only horizontally. If we set some paragraph background-repeat values to be inherited, they will take the same property value as the body element.</p>
              <p><br/></p>

              <Card className="text-primary w-50" style={{ backgroundColor: "#EEEEEE", textAlign: "left" }}>
                <strong>
                  <p><strong>The CSS:</strong></p>
                  <p>body &#123;</p>
                  <p>background-image: url(&quot;vistalogo.png&quot;);</p>
                  <p><strong>background-repeat: repeat-x;</strong></p>
                  <p>&#125;</p>
                  <p>p &#123;</p>
                  <p>background-image: url(&quot;vistalogo.png&quot;);</p>
                  <p><strong>background-repeat: inherit;</strong></p>
                  <p>margin-top: 100px;</p>
                  <p>padding: 40px;</p>
                  <p>&#125;</p>
                </strong>
              </Card>
              
              <p><br/></p>

              <h1><strong>The background-attachment Property</strong></h1>
              <p><br/></p>
              <p>The background-attachment property sets whether a background image is fixed or scrolls with the rest of the page.</p>
              <p>Even if an element has a scrolling mechanism, a &quot;fixed&quot; background doesn&apos;t move with the element.</p>
              <p><br/></p>

              <Card className="text-primary w-50" style={{ backgroundColor: "#EEEEEE", textAlign: "left" }}>
                <strong>
                  <p><strong>The CSS:</strong></p>
                  <p>body &#123;</p>
                  <p>background-image: url(&quot;vistalogo.png&quot;);</p>
                  <p>background-repeat: no-repeat;</p>
                  <p><strong>background-attachment: fixed;</strong></p>
                  <p>&#125;</p>
                </strong>
              </Card>
              
              <p><br/></p>

              <p><strong>The background-attachment Values</strong></p>
              <p><br/></p>
              <p>You can also set the background-attachment to <strong>inherit</strong> or <strong>scroll</strong>.</p>
              <p>When you set the background-attachment to inherit, it will <strong>inherit</strong> the value from its parent element.</p>
              <p>When you set the background-attachment to scroll, the background image will <strong>scroll</strong> with the rest of the content.</p>
              
              <Card className="text-primary w-50" style={{ backgroundColor: "#EEEEEE", textAlign: "left" }}>
                <strong>
                  <p><strong>The CSS:</strong></p>
                  <p>body &#123;</p>
                  <p>background-image: url(&quot;vistalogo.png&quot;);</p>
                  <p>background-repeat: no-repeat;</p>
                  <p><strong>background-attachment: scroll;</strong></p>
                  <p>&#125;</p>
                </strong>
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