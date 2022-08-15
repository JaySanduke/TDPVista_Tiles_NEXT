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

import CSS_img36 from "../../../assets/img/css/css_img36.jpg"
import CSS_img37 from "../../../assets/img/css/css_img37.jpg"
import CSS_img38 from "../../../assets/img/css/css_img38.jpg"
import CSS_img39 from "../../../assets/img/css/css_img39.jpg"

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
                      <h2 className="text-white mb-0">The border Property</h2>
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
                      <p>The CSS border property allows you to customize the borders of HTML elements.</p>
                    <p>In order to add a border to the element, you need to specify the <strong>size, style, and color</strong> of the border.</p>
                    <p>The example below shows how to add a solid green border to the paragraph.</p>
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
Border Width
                  </Button>
                  <Button outline
                    color="warning"
                    href="#tdp"
                    className="d-block w-100 text-left my-1 mx-0"
                    size="sm"
                  >
Border Color
                  </Button>
                  <Button outline
                    color="warning"
                    href="#tdp"
                    className="d-block w-100 text-left my-1 mx-0"
                    size="sm"
                  >
The border-style Property
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
                  <p>&lt;p&gt;This is an example of a solid border.&lt;/p&gt;</p>
                  <p><strong>The CSS:</strong></p>
                  <p>p &#123;</p>
                  <p>padding: 10px;</p>
                  <p><strong>border: 5px solid green;</strong></p>
                  <p>&#125;</p>
                </strong>
              </Card>
              
              <p><br/></p>
              <p><strong>Result:</strong></p>
              <p><br/></p>

              <Card className="imgclasss w-50">
                <img src={CSS_img36}></img>
              </Card>

              <h1><strong>Border Width</strong></h1>
              <p><br/></p>
              <p>The properties for the border can be set separately. The <strong>border-width</strong> property specifies the width of the border.</p>
              <p><br/></p>

              <Card className="text-primary w-50" style={{ backgroundColor: "#EEEEEE", textAlign: "left" }}>
                <strong>
                  <p><strong>The HTML:</strong>&lt;p class=&quot;first&quot;&gt;</p>
                  <p>Border width of this paragraph is set to 2px.</p>
                  <p>&lt;/p&gt;</p>
                  <p>&lt;p class=&quot;second&quot;&gt;</p>
                  <p>Border width of this paragraph is set to 5px.</p>
                  <p>&lt;/p&gt;</p>
                  <p><strong>The CSS:</strong></p>
                  <p>p.first &#123;</p>
                  <p>padding: 10px;</p>
                  <p>border-style: solid;</p>
                  <p><strong>border-width: 2px;</strong></p>
                  <p>&#125;</p>
                  <p>p.second &#123;</p>
                  <p>padding: 10px;</p>
                  <p>border-style: solid;</p>
                  <p><strong>border-width: 5px;</strong></p>
                  <p>&#125;</p>
                </strong>
              </Card>
              
              <p><br/></p>
              <p><strong>Result:</strong></p>
              <p><br/></p>

              <Card className="imgclasss w-50">
                <img src={CSS_img37}></img>
              </Card>

              <h1><strong>Border Color</strong></h1>
              <p><br/></p>
              <p>The border color of the element can be defined using a color name, RGB, or Hex values.</p>

              <Card className="text-primary w-50" style={{ backgroundColor: "#EEEEEE", textAlign: "left" }}>
                <strong>
                  <p><strong>The HTML:</strong></p>
                  <p>&lt;p class=&quot;first&quot;&gt;</p>
                  <p>Border color has been created using &lt;strong&gt;color name.&lt;/strong&gt;</p>
                  <p>&lt;/p&gt;</p>
                  <p>&lt;p class=&quot;second&quot;&gt;</p>
                  <p>Border color has been created using &lt;strong&gt;Hex values.&lt;/strong&gt;</p>
                  <p>&lt;/p&gt;</p>
                  <p>&lt;p class=&quot;third&quot;&gt;</p>
                  <p>Border color has been created using &lt;strong&gt;RGB values.&lt;/strong&gt;</p>
                  <p>&lt;/p&gt;</p>
                  <p><strong>The CSS:</strong></p>
                  <p>p.first &#123;</p>
                  <p>padding: 10px;</p>
                  <p>border-style: solid;</p>
                  <p>border-width: 2px;</p>
                  <p><strong>border-color: blue;</strong></p>
                  <p>&#125;</p>
                  <p>p.second &#123;</p>
                  <p>padding: 10px;</p>
                  <p>border-style: solid;</p>
                  <p>border-width: 2px;</p>
                  <p><strong>border-color: #FF6600;</strong></p>
                  <p>&#125;</p>
                  <p>p.third &#123;</p>
                  <p>padding: 10px;</p>
                  <p>border-style: solid;</p>
                  <p>border-width: 2px;</p>
                  <p><strong>border-color: rgb(0, 153, 0);</strong></p>
                  <p>&#125; </p>
                </strong>
              </Card>
              
              <p><br/></p>
              <p><strong>Result:</strong></p>
              <p><br/></p>

              <Card className="imgclasss w-50">
                <img src={CSS_img38}></img>
              </Card>

              <p>None of the border properties will have any effect unless the <strong>border-style</strong> property is set.</p>
              <p><br/></p>

              <h1><strong>The border-style Property</strong></h1>

              <p><br/></p>
              <p>The default value of border-style is <strong>none</strong>, which defines no border.</p>
              <p>There are various styles supported for the border-style property: <strong>dotted, dashed, double,</strong> etc. The example below illustrates the differences between them.</p>
              <p><br/></p>

              <Card className="text-primary w-50" style={{ backgroundColor: "#EEEEEE", textAlign: "left" }}>
                <strong>
                  <p><strong>The HTML:</strong></p>
                  <p>&lt;p class=&quot;none&quot;&gt;This paragraph has no border.&lt;/p&gt;</p>
                  <p>&lt;p class=&quot;dotted&quot;&gt;This is a dotted border.&lt;/p&gt;</p>
                  <p>&lt;p class=&quot;dashed&quot;&gt;This is a dashed border.&lt;/p&gt;</p>
                  <p>&lt;p class=&quot;double&quot;&gt;This is a double border.&lt;/p&gt;</p>
                  <p>&lt;p class=&quot;groove&quot;&gt;This is a grooved border.&lt;/p&gt;</p>
                  <p>&lt;p class=&quot;ridge&quot;&gt;This is a ridged border.&lt;/p&gt;</p>
                  <p>&lt;p class=&quot;inset&quot;&gt;This is an inset border.&lt;/p&gt;</p>
                  <p>&lt;p class=&quot;outset&quot;&gt;This is an outset border.&lt;/p&gt;</p>
                  <p>&lt;p class=&quot;hidden&quot;&gt;This is a hidden border.&lt;/p&gt;</p>
                  <p><strong>The CSS:</strong></p>
                  <p>p.none &#123;border-style: <strong>none</strong>;&#125;</p>
                  <p>p.dotted &#123;border-style: <strong>dotted</strong>;&#125;</p>
                  <p>p.dashed &#123;border-style: <strong>dashed</strong>;&#125;</p>
                  <p>p.double &#123;border-style: <strong>double</strong>;&#125;</p>
                  <p>p.groove &#123;border-style: <strong>groove</strong>;&#125;</p>
                  <p>p.ridge &#123;border-style: <strong>ridge</strong>;&#125;</p>
                  <p>p.inset &#123;border-style: <strong>inset</strong>;&#125;</p>
                  <p>p.outset &#123;border-style: <strong>outset</strong>;&#125;</p>
                  <p>p.hidden &#123;border-style: <strong>hidden</strong>;&#125;</p>
                </strong>
              </Card>
              
              <p><br/></p>
              <p><strong>Result:</strong></p>
              <p><br/></p>

              <Card className="imgclasss w-50">
                <img src={CSS_img39}></img>
              </Card>

              <p>In CSS, it is possible to specify different borders for different sides, using the following properties: border-top-style, border-right-style, border-bottom-style, and border-left-style for the corresponding sides.</p>

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