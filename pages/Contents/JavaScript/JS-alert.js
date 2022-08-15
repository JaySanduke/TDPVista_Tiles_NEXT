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

import JS_img21 from "../../../assets/img/js/js_img21.jpg"
import JS_img22 from "../../../assets/img/js/js_img22.jpg"

class Header extends React.Component {
  render() {
    return (

      <div className="header bg-gradient-info pb-8 pt-5 pt-md-8">
        <Container fluid>
          <div className="header-body">
            <Row>
              <Col xl="6">
              <h1 style={{fontSize:"200%",color:"#fff",fontFamily:"Roboto"}}>JavaScript</h1>
              
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
                      <h2 className="text-white mb-0">The Alert Box</h2>
                    </div>
                    <div className="col">
                      
                    </div>
                  </Row>
                </CardHeader>
                <CardBody className="text-white" style={{  textAlign: "left" }}>
                <div className="text-light">
                  <p>JavaScript offers three types of popup boxes, the <strong>Alert, Prompt</strong>, and <strong>Confirm</strong> boxes.</p>
                  <p>An <strong>alert box</strong> is used when you want to ensure that information gets through to the user.</p>
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
            <p>When an alert box pops up, the user must click OK to proceed.</p>
              <p>The alert function takes a single parameter, which is the text displayed in the popup box.</p>
              <p><strong>Example:</strong></p>
              <p  style={{ backgroundColor: "#EEEEEE", textAlign: "left" }}><strong>alert</strong>(&quot;Do you really want to leave this page?&quot;);&nbsp;</p>
              <p><br/></p>
              <p><strong>Result:</strong></p>
              <p><br/></p>

              <Card className="imgclasss w-50">
                <img src={JS_img21}></img>
              </Card>

              <p>To display <strong>line breaks</strong> within a popup box, use a backslash followed by the character n.</p>
              <p  style={{ backgroundColor: "#EEEEEE", textAlign: "left" }}>alert(&quot;Hello\nHow are you?&quot;);&nbsp;</p>
              <p><br/></p>
              <p><strong>Result:</strong></p>

              <Card className="imgclasss w-50">
                <img src={JS_img22}></img>
              </Card>
              <div  style={{ backgroundColor: "#EAEA00", textAlign: "left" }}>
                <p>Be careful when using alert boxes, as the user can continue using the page only after clicking OK.</p>
              </div>
              <p><br/></p>
            </Col>
            <Col xl="3">
              
            </Col>
          </Row>
          <div className="col">

          </div>
        </Container>
      </>
    );
  }
}
Index.layout = Content;
export default Index;