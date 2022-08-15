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

import CSS_img47 from "../../../assets/img/css/css_img47.jpg"
import CSS_img48 from "../../../assets/img/css/css_img48.jpg"
import CSS_img49 from "../../../assets/img/css/css_img49.jpg"
import CSS_img50 from "../../../assets/img/css/css_img50.jpg"

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
                      <h2 className="text-white mb-0">The Table Properties</h2>
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
                    <p>The look of an HTML table can be greatly improved with CSS.</p>
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
The caption-side Property
                  </Button>
                  <Button outline
                    color="warning"
                    href="#tdp"
                    className="d-block w-100 text-left my-1 mx-0"
                    size="sm"
                  >
The empty-cells Property
                  </Button>
                  <Button outline
                    color="warning"
                    href="#tdp"
                    className="d-block w-100 text-left my-1 mx-0"
                    size="sm"
                  >
The table-layout Property
                  </Button>
                  
                </CardBody>
              </Card>
            </Col>
          </Row>
          <Row className="mt-5">
            <Col md="9">
            <p>The <strong>border-collapse</strong> property specifies whether the table borders are collapsed into a single border or separated as default. If the borders are separate, the <strong>border-spacing</strong> property can be used to change the spacing.</p>
              <p><br/></p>

              <Card className="text-primary w-50" style={{ backgroundColor: "#EEEEEE", textAlign: "left" }}>
                <strong>
                  <p><strong>The HTML:</strong></p>
                  <p>&lt;table border=&quot;1&quot;&gt;</p>
                  <p>&lt;tr&gt;</p>
                  <p>&lt;td&gt;Red&lt;/td&gt;</p>
                  <p>&lt;td&gt;Green&lt;/td&gt;</p>
                  <p>&lt;/tr&gt;</p>
                  <p>&lt;tr&gt;</p>
                  <p>&lt;td&gt;Blue&lt;/td&gt;</p>
                  <p>&lt;td&gt;Yellow&lt;/td&gt;</p>
                  <p>&lt;/tr&gt;</p>
                  <p>&lt;/table&gt;</p>
                  <p><strong>The CSS:</strong></p>
                  <p>table &#123;</p>
                  <p><strong>border-collapse:</strong> separate;</p>
                  <p><strong>border-spacing:</strong> 20px 40px;</p>
                  <p>&#125;</p>
                </strong>
              </Card>
              
              <p><br/></p>
              <p><strong>Result:</strong></p>
              <p><br/></p>

              <Card className="imgclasss w-50">
                <img src={CSS_img47}></img>
              </Card>

              <h1><strong>The caption-side Property</strong></h1>
              <p><br/></p>
              <p>The <strong>caption-side</strong> property specifies the position of a table caption. The values can be set as <strong>top</strong> or <strong>bottom</strong>.</p>
              <p>In the example below, we specify the placement of a table caption to <strong>top</strong>.</p>
              <p><br/></p>

              <Card className="text-primary w-50" style={{ backgroundColor: "#EEEEEE", textAlign: "left" }}>
                <strong>
                  <p><strong>The HTML:</strong></p>
                  <p>&lt;table border=&quot;1&quot;&gt;</p>
                  <p>&lt;caption&gt;Some of Our Courses&lt;/caption&gt;</p>
                  <p>&lt;tr&gt;</p>
                  <p>&lt;th&gt;Course name&lt;/th&gt;</p>
                  <p>&lt;th&gt;Lessons&lt;/th&gt;</p>
                  <p>&lt;th&gt;Quizzes&lt;/th&gt;</p>
                  <p>&lt;/tr&gt;</p>
                  <p>&lt;tr&gt;</p>
                  <p>&lt;td&gt;C++&lt;/td&gt;</p>
                  <p>&lt;td&gt;81&lt;/td&gt;</p>
                  <p>&lt;td&gt;363&lt;/td&gt;</p>
                  <p>&lt;/tr&gt;</p>
                  <p>&lt;tr&gt;</p>
                  <p>&lt;td&gt;JavaScript&lt;/td&gt;</p>
                  <p>&lt;td&gt;48&lt;/td&gt;</p>
                  <p>&lt;td&gt;144&lt;/td&gt;</p>
                  <p>&lt;/tr&gt;</p>
                  <p>&lt;tr&gt;</p>
                  <p>&lt;td&gt;HTML&lt;/td&gt;</p>
                  <p>&lt;td&gt;38&lt;/td&gt;</p>
                  <p>&lt;td&gt;119&lt;/td&gt;</p>
                  <p>&lt;/tr&gt;</p>
                  <p>&lt;tr&gt;</p>
                  <p>&lt;td&gt;CSS&lt;/td&gt;</p>
                  <p>&lt;td&gt;70&lt;/td&gt;</p>
                  <p>&lt;td&gt;174&lt;/td&gt;</p>
                  <p>&lt;/tr&gt;</p>
                  <p>&lt;/table&gt;</p>
                  <p><strong>The CSS:</strong></p>
                  <p>caption &#123;</p>
                  <p>caption-side: top;</p>
                  <p>&#125;</p>
                </strong>
              </Card>
              
              <p><br/></p>
              <p><strong>Result:</strong></p>

              <Card className="imgclasss w-50">
                <img src={CSS_img48}></img>
              </Card>

              <h1><strong>The empty-cells Property</strong></h1>
              <p>The empty-cells property specifies whether or not to display borders and background on empty cells in a table.</p>
              <p>Possible values are:</p>
              <p>show: the borders of an empty cell are rendered</p>
              <p>hide: the borders of an empty cell are not drawn</p>
              <p><br/></p>
              <p>Here is the empty-cells property that is used to hide borders of empty cells in the &lt;table&gt; element.</p>

              <Card className="text-primary w-50" style={{ backgroundColor: "#EEEEEE", textAlign: "left" }}>
                <strong>
                  <p><strong>The HTML:</strong></p>
                  <p>&lt;table border=&quot;1&quot;&gt;</p>
                  <p>&lt;tr&gt;</p>
                  <p>&lt;td&gt; HTML &lt;/td&gt;</p>
                  <p>&lt;td&gt; CSS &lt;/td&gt;</p>
                  <p>&lt;/tr&gt;</p>
                  <p>&lt;tr&gt;</p>
                  <p>&lt;td&gt; JavaScript &lt;/td&gt;</p>
                  <p>&lt;td&gt; &lt;/td&gt;</p>
                  <p>&lt;/tr&gt;</p>
                  <p>&lt;/table&gt;</p>
                  <p><strong>The CSS:</strong></p>
                  <p>table &#123;</p>
                  <p>border-collapse: separate;</p>
                  <p><strong>empty-cells: hide;</strong></p>
                  <p>&#125;</p>
                </strong>
              </Card>
              
              <p><strong>Result:</strong></p>

              <Card className="imgclasss w-50">
                <img src={CSS_img49}></img>
              </Card>

              <h1><strong>The table-layout Property</strong></h1>
              <p><br/></p>
              <p><strong>auto</strong> - when column or cell width are not explicitly set, the column width will be in proportion to the amount of content in the cells that make up the column</p>
              <p><strong>fixed</strong> - when column or cell width are not explicitly set, the column width will not be affected by the amount of content in the cells that make up the column.</p>
              <p><br/></p>
              <p>The table layout is set to <strong>auto</strong> by default.</p>
              <p>The example below shows the difference between auto and fixed.</p>
              <p><br/></p>

              <Card className="text-primary w-50" style={{ backgroundColor: "#EEEEEE", textAlign: "left" }}>
                <strong>
                  <p><strong>The HTML:</strong></p>
                  <p>&lt;p&gt;Table-layout is set to &lt;strong&gt;auto&lt;/strong&gt;&lt;/p&gt;</p>
                  <p>&lt;table class=&quot;auto&quot;&gt;</p>
                  <p>&lt;tr&gt;</p>
                  <p>&lt;td width=&ldquo;10%&quot;&gt;500.000.000.000.000&lt;/td&gt;</p>
                  <p>&lt;td width=&quot;90%&quot;&gt;20.000&lt;/td&gt;</p>
                  <p>&lt;/tr&gt;</p>
                  <p>&lt;/table&gt;</p>
                  <p><br/></p>
                  <p>&lt;p&gt;Table-layout is set to &lt;strong&gt;fixed&lt;/strong&gt;&lt;/p&gt;</p>
                  <p>&lt;table class=&quot;fixed&quot;&gt;</p>
                  <p>&lt;tr&gt;</p>
                  <p>&lt;td width=&quot;10%&quot;&gt;500.000.000.000.000&lt;/td&gt;</p>
                  <p>&lt;td width=&quot;90%&quot;&gt;20.000&lt;/td&gt;</p>
                  <p>&lt;/tr&gt;</p>
                  <p>&lt;/table&gt;</p>
                  <p><strong>The CSS:</strong></p>
                  <p>table &#123;</p>
                  <p>border-collapse: separate;</p>
                  <p>width: 100%;</p>
                  <p>border: 1px solid gray;</p>
                  <p>&#125;&nbsp;</p>
                  <p>td &#123;</p>
                  <p>border: 1px solid gray;</p>
                  <p>&#125;</p>
                  <p>table.<strong>auto</strong> &#123;</p>
                  <p>table-layout: auto;</p>
                  <p>&#125;</p>
                  <p>table.<strong>fixed</strong> &#123;</p>
                  <p>table-layout: fixed;</p>
                  <p>&#125;</p>
                </strong>
              </Card>
              
              <p><br/></p>
              <p><strong>Result:</strong></p>
              <p><br/></p>

              <Card className="imgclasss w-50">
                <img src={CSS_img50}></img>
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