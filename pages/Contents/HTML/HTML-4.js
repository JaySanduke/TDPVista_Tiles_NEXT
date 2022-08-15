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

import Html_img1 from "../../../assets/img/html/Html_img1.jpeg";
import Html_img2 from "../../../assets/img/html/Html_img2.jpeg";


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
                      <h2 className="text-white mb-0">The HTML File</h2>
                    </div>
                    <div className="col">

                    </div>
                  </Row>
                </CardHeader>
                <CardBody>
                  <p className="text-white">
                    HTML files are text files, so you can use any <strong>text editor</strong> to create your first webpage.<br />
                    There are some very nice HTML editors available; you can choose the one that works for you.<br />
                    For now let's write our examples in <strong>Notepad.</strong>
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
                    The HTML File
                  </Button>
                  <Button outline
                    color="warning"
                    href="#tdp"
                    className="d-block w-100 text-left my-1 mx-0"
                    size="sm"
                  >
                    The &lt;title&gt; Tag
                  </Button>
                  <Button outline
                    color="warning"
                    href="#tdp"
                    className="d-block w-100 text-left my-1 mx-0"
                    size="sm"
                  >
                    Creating a Blog
                  </Button>
                </CardBody>
              </Card>
            </Col>
          </Row>
          <Row className="mt-5">
            <Col className="mb-5 mb-xl-0" xl="9" >

              <strong>Add the basic HTML structure to the text editor with "This is a line of text" in the body section.</strong>   <br />
              <Card className="text-primary w-50" style={{ backgroundColor: "#EEEEEE", textAlign: "left" }}>
                <strong>
                  &lt;html&gt;<br />
                  &lt;head&gt;<br />
                  &lt;/head&gt;<br />
                  &lt;body&gt;<br />
                  Welcome to TDPVista <br />
                  &lt;/body&gt;<br />
                  &lt;/html&gt;<br /><br />
                </strong>
              </Card><br />
              In our example, the file is saved as <strong> first.html</strong> <br /> <br />
              When the file is opened, the following result is displayed in the web browser:<br /><br />
              <Card className="imgclasss w-50">
                <img src={Html_img1}></img>
              </Card><br />
              HTML file names should end in either <strong>.html  </strong>or <strong>.htm  </strong> extension.<br /><br />

              <h1>The &lt;title&gt; Tag</h1><br />
              To place a title on the tab describing the web page, add a <span className="text-info">  <strong>&lt;title&gt;</strong></span> element to your head section:<br />
              <Card className="text-primary w-50" style={{ backgroundColor: "#EEEEEE", textAlign: "left" }}>
                <strong>
                  &lt;html&gt;<br />
                  &lt;head&gt;<br />
                  &lt;title&gt; file&lt;/title&gt;<br />
                  &lt;/head&gt;<br />
                  &lt;body&gt;<br />
                  Welcome to TDPVista <br />
                  &lt;/body&gt;<br />
                  &lt;/html&gt;<br /><br />
                </strong>
              </Card><br />
              This will produce the following result:<br /><br />
              <Card className="imgclasss w-50">
                <img src={Html_img2}></img>
              </Card><br />
              <Card className="text-primary w-50" style={{ backgroundColor: "#EEEEEE", textAlign: "left" }}>
              </Card><br />
              <strong> The title element is important because it describes the page and is used by search engines. </strong><br /><br />


              <h1>Creating a Blog</h1><br />

              Throughout this course, we'll help you practice and create your own unique blog project, <br />
              so you'll retain what you've learned and be able to put it to use. <br />
              Just keep going and follow the instructions in the <strong>TASK</strong> section.<br />
              This is what your finished blog page will look like.<br />
              <strong>TASK</strong>: Tap  to see the code and its output<br />

              <Card className="text-primary w-50" style={{ backgroundColor: "#EEEEEE", textAlign: "left" }}>
                <strong>
                  &lt;html&gt;<br />
                  &lt;head&gt;<br />
                  &lt;title&gt; My Blog&lt;/title&gt;<br />
                  &lt;/head&gt;<br />
                  &lt;body&gt;<br />
                  ...
                </strong>
              </Card><br />

              Don't be afraid of long codes. By the time you complete the course,<br />
              everything will make complete sense and look highly doable.We guarantee it!<br />
              <strong>TASK:</strong><br />
              1. Open the code.<br />
              2. On the top header, change the name to your own name.<br />
              3. Change the page title. Remember, the page title is located inside the
              <strong><u>&lt;title&gt; </u></strong> tag in the <strong><u>  &lt;head&gt;</u></strong> of the page. <br /><br />
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
