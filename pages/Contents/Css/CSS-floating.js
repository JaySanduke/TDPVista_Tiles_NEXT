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

import CSS_img64 from "../../../assets/img/css/css_img64.jpg"
import CSS_img65 from "../../../assets/img/css/css_img65.jpg"
import CSS_img66 from "../../../assets/img/css/css_img66.jpg"
import CSS_img67 from "../../../assets/img/css/css_img67.jpg"

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
                      <h2 className="text-white mb-0">Floating</h2>
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
                          <p>With CSS float, an element can be pushed to the left or right, allowing other elements to wrap around it.</p>
                      <p>Float is often used with images, but it is also useful when working with layouts.</p>
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
Elements Next to Each Other
                  </Button>
                  <Button outline
                    color="warning"
                    href="#tdp"
                    className="d-block w-100 text-left my-1 mx-0"
                    size="sm"
                  >
Clearing the Float
                  </Button>
                  <Button outline
                    color="warning"
                    href="#tdp"
                    className="d-block w-100 text-left my-1 mx-0"
                    size="sm"
                  >
Using clear
                  </Button>
                  <Button outline
                    color="warning"
                    href="#tdp"
                    className="d-block w-100 text-left my-1 mx-0"
                    size="sm"
                  >
Clearing Floats
                  </Button>
                  
                </CardBody>
              </Card>
            </Col>
          </Row>
          <Row className="mt-5">
            <Col md="9">
            <p>The values for the float property are <strong>left, right, and none</strong>.</p>
              <p>Left and right float elements in those directions, respectively. <strong>none</strong> (the default) ensures that the element will not float.</p>
              <p>Below is an example of an image that is floated to the right.</p>
              <p><br/></p>

              <Card className="text-primary w-50" style={{ backgroundColor: "#EEEEEE", textAlign: "left" }}>
                <strong>
                  <p><strong>The HTML:</strong></p>
                  <p>&lt;p&gt;&lt;img src=&quot;vistalogo.png&quot; /&gt;</p>
                  <p>This paragraph has an image that is floated to the &lt;strong&gt;right.&lt;/strong&gt;&nbsp;</p>
                  <p>It is highly recommended to add a margin to images so that the text does&nbsp;</p>
                  <p>not get too close to the image. If you want your text to be easily read, you&nbsp;</p>
                  <p>should always add a few pixels between words and borders, images,&nbsp;</p>
                  <p>and other content.&nbsp;</p>
                  <p>&lt;/p&gt;</p>
                  <p><strong>The CSS:</strong></p>
                  <p>img &#123;</p>
                  <p><strong>float: right;</strong></p>
                  <p>&#125;</p>
                </strong>
              </Card>
              
              <p><br/></p>
              <p><strong>Result:</strong></p>
              <p><br/></p>

              <Card className="imgclasss w-50">
              <img src={CSS_img64}></img>
              </Card>

              <p>Elements are floated horizontally, meaning that an element can only be floated left or right, not up or down.</p>
              <p><br/></p>
              
              <h1><strong>Elements Next to Each Other</strong></h1>
              <p><br/></p>
              <p>If you place several floating elements one after the other, they will float next to each other if there is enough room.</p>
              <p>As an example, in a print layout, images may be set into the page such that text wraps around them as needed.</p>
              <p><br/></p>

              <Card className="text-primary w-50" style={{ backgroundColor: "#EEEEEE", textAlign: "left" }}>
                <strong>
                  <p><strong>The CSS:</strong></p>
                  <p>img &#123;</p>
                  <p>float: left;</p>
                  <p><strong>width: 120px;</strong></p>
                  <p>margin-right: 10px;</p>
                  <p>&#125;</p>
                  <p>p &#123;</p>
                  <p><strong>width: 120px;</strong>&nbsp;</p>
                  <p>float: left;</p>
                  <p>&#125;</p>
                </strong>
              </Card>
              
              <p><br/></p>
              <p><strong>Result:</strong></p>
              <p><br/></p>

              <Card className="imgclasss w-50">
              <img src={CSS_img65}></img>
              </Card>

              <h1><strong>Clearing the Float</strong></h1>
              <p><br/></p>
              <p>Elements that come after the floating element will flow around it. To avoid this, use the clear property.</p>
              <p>The <strong>clear</strong> property specifies the sides of an element where other floating elements are not allowed to be.</p>
              <p><br/></p>
              <p>In the example below, if we set the float property to the div, only the paragraph that comes after the div will be wrapped around the image.</p>
              
              <Card className="text-primary w-50" style={{ backgroundColor: "#EEEEEE", textAlign: "left" }}>
                <strong>
                  <p><strong>The HTML:</strong></p>
                  <p>This paragraph is above the div element&nbsp;</p>
                  <p>and is not affected by the float right property.&nbsp;</p>
                  <p>&lt;br /&gt;&lt;br /&gt;</p>
                  <p>&lt;div class=&quot;floating&quot;&gt;</p>
                  <p>&lt;img src=&quot;vistalogo.png&quot; /&gt;</p>
                  <p>&lt;/div&gt;</p>
                  <p>This paragraph comes after the div element&nbsp;</p>
                  <p>and is affected by the float right property.&nbsp;</p>
                  <p>&lt;br /&gt;&lt;br /&gt;</p>
                  <p>This paragraph also comes after the div element</p>
                  <p>and is affected by the float right property.</p>
                  <p>&lt;br /&gt; &lt;br /&gt;</p>
                  <p><strong>The CSS:</strong></p>
                  <p>.floating &#123;</p>
                  <p>float: right;</p>
                  <p>&#125;</p>
                </strong>
              </Card>
              
              <p><br/></p>
              <p><strong>Result:</strong></p>
              <p><br/></p>

              <Card className="imgclasss w-50">
              <img src={CSS_img66}></img>
              </Card>

              <h1><strong>Using clear</strong></h1>
              <p><br/></p>
              <p>Use the values <strong>right, left, and both</strong> to specify the sides of an element where other floating elements are not allowed to be.</p>
              <p><br/></p>
              <p>The default value is none, which allows floating elements on both sides.</p>
              
              <h1><strong>Clearing Floats</strong></h1>
              <p><br/></p>
              <p><strong>both</strong> is used to clear floats coming from either direction.</p>
              <p><br/></p>

              <Card className="text-primary w-50" style={{ backgroundColor: "#EEEEEE", textAlign: "left" }}>
                <strong>
                  <p><strong>The HTML:</strong></p>
                  <p>This paragraph is above the div element&nbsp;</p>
                  <p>and is not affected by the float right property.&nbsp;</p>
                  <p>&lt;br/&gt;&lt;br/&gt;</p>
                  <p>&lt;div class=&quot;floating&quot;&gt;</p>
                  <p>&lt;img src=&quot;vistalogo.png&quot; /&gt;</p>
                  <p>&lt;/div&gt;</p>
                  <p>This paragraph comes after the div element&nbsp;</p>
                  <p>and is affected by the float right property.&nbsp;</p>
                  <p>&lt;br/&gt;&lt;br class=&quot;clearing&quot;/&gt;</p>
                  <p>This paragraph is out of the floating group&nbsp;</p>
                  <p>and is not affected by the float right property.</p>
                  <p>&lt;br/&gt; &lt;br/&gt;</p>
                  <p><strong>The CSS:</strong></p>
                  <p>.floating &#123;</p>
                  <p>float: right;</p>
                  <p>&#125;</p>
                  <p>.clearing &#123;&nbsp;</p>
                  <p><strong>clear: both;</strong></p>
                  <p>&#125;</p>
                </strong>
              </Card>
              
              <p><strong>Result:</strong></p>

              <Card className="imgclasss w-50">
              <img src={CSS_img67}></img>
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