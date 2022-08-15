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

// core components
import {
  chartOptions,
  parseOptions,
  chartExample1,
  chartExample2
} from "variables/charts.js";

import Header from "components/Headers/Header.js";
import './index.css';
import Content from "layouts/Content.js";
class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeNav: 1,
      chartExample1Data: "data1",
    };
    if (window.Chart) {
      parseOptions(Chart, chartOptions());
    }
  }

  toggleNavs = (e, index) => {
    // e.preventDefault();
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
                      <h2 className="text-white mb-0">HTML</h2>
                    </div>
                    <div className="col">

                    </div>
                  </Row>
                </CardHeader>
                <CardBody>
                  <p className="text-white">
                    HTML stands for HyperText Markup Language.<br />
                    Unlike a scripting or programming language that uses scripts to perform functions, a markup language uses tags to identify content.<br />
                    <strong>Here is an example of an HTML tag:</strong><br />
                    <span>&lt;p&gt; I'm a paragraph &lt;/p&gt;</span>
                  </p>
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
                    HTML: Structure
                  </Button>
                  <Button outline
                    color="warning"
                    href="#tdp"
                    className="d-block w-100 text-left my-1 mx-0"
                    size="sm"
                  >
                    CSS/BOOTSTRAP: Presentation
                  </Button>
                  <Button outline
                    color="warning"
                    href="#tdp"
                    className="d-block w-100 text-left my-1 mx-0"
                    size="sm"
                  >
                    JAVASCRIPT/JQUERY: Behavior
                  </Button>
                  <Button outline
                    color="warning"
                    href="#tdp"
                    className="d-block w-100 text-left my-1 mx-0"
                    size="sm"
                  >
                    PHP/NODE/FLASK/DJANGO: Backend
                  </Button>
                  <Button outline
                    color="warning"
                    href="#tdp"
                    className="d-block w-100 text-left my-1 mx-0"
                    size="sm"
                  >
                    CMS: Content Management System
                  </Button>
                </CardBody>
              </Card>
            </Col>
          </Row>
          <Row className="mt-5">
            <Col className="mb-5 mb-xl-0" xl="9" >

              <h1> The &lt;html&gt; Tag</h1>
              <p>
                Although various versions have been released over the years, HTML basics remain the same.<br /><br />
                The structure of an HTML document has been compared with that of a sandwich. <br />
                As a sandwich has two slices of bread,the HTML document has opening and closing HTML tags.<br /><br />
                These tags, like the bread in a sandwich, surround everything else:<br /><br />
              </p>
              <Card className="w-50 p-2" style={{ backgroundColor: "#EEEEEE", textAlign: "left" }}>

                <strong>
                  &lt;html&gt;   <br />
                  …           <br />
                  &lt;/html&gt;   <br />
                </strong>
              </Card>
              <br />
              <Card style={{ backgroundColor: "#00FFFF" }} className="w-50">
                <strong>Everything in an HTML document is surrounded by the &lt;html&gt; tag.</strong>
              </Card>
              <br /><br />

              <h1>  The &lt;head&gt; Tag </h1>
              Immediately following the opening HTML tag, you'll find the <strong>head </strong>of the document,<br />
              which is identified by opening and closing head tags.<br /><br />

              The head of an HTML file contains all of the <strong> non-visual elements </strong>that help make the page work.<br /><br />
              <Card className="text-primary w-50" style={{ backgroundColor: "#EEEEEE", textAlign: "left" }}>

                &lt;html&gt;<br />
                &#09; <strong>&lt;head&gt;…&lt;/head&gt;</strong><br />
                &lt;/html&gt;
              </Card> <br /><br />


              <h1>   The &lt;body&gt; Tag </h1>
              The body tag follows the head tag.<br />
              All visual-structural elements are contained within the body tag.<br /><br />
              Headings, paragraphs, lists, quotes, images, and links are just a few of the elements <br />
              that can be contained within the body tag.<br /><br />
              <Card className="text-primary w-50" style={{ backgroundColor: "#EEEEEE", textAlign: "left", }}>
                <strong>Basic HTML Structure:</strong><br />

                <strong>
                  &lt;html&gt;<br />
                  &#09; &lt;head&gt; <br />
                  &#09; &lt;/head&gt;<br />
                  &#09; &lt;body&gt;<br />
                  &#09;&lt;/body&gt;<br />
                  &lt;/html&gt;<br /><br />
                </strong>

                <strong> The &lt;body&gt; tag defines the main content of the HTML document.</strong>

              </Card>
            </Col>
            <Col xl="3">
            </Col>
          </Row><br /><br />

          <div className="col">

          </div>
        </Container>
      </>
    );
  }
}
Index.layout = Content;
export default Index;
