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


import Content from "layouts/Content.js";
import './index.css';
import Html_img44 from "../../../assets/img/html/Html_img44.jpeg";
import Html_img45 from "../../../assets/img/html/Html_img45.jpeg";



class Header extends React.Component {
  render() {
    return (

      <div className="header bg-gradient-info pb-8 pt-5 pt-md-8">
        <Container fluid>
          <div className="header-body">
            <Row>
              <Col xl="6">
              <h1 style={{fontSize:"200%",color:"#fff",fontFamily:"Roboto"}}>HTML head element</h1>
              
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
                      <h2 className="text-white mb-0">HTML - The Head Element</h2>
                    </div>
                    <div className="col">
                     
                    </div>
                  </Row>
                </CardHeader>
                <CardBody className="text-white " style={{  textAlign: "left" }}>
                The HTML<span className="text-danger"><strong>&lt;head&gt; </strong></span>  element is a container for all the head elements: <br />
          <span className="text-danger"><strong>&lt;title&gt; </strong></span>,<br />
              <span className="text-danger"><strong>&lt;style&gt; </strong></span>,<br />
              <span className="text-danger"><strong>&lt;meta&gt; </strong></span>,<br />
              <span className="text-danger"><strong>&lt;link&gt; </strong></span>,<br />
              <span className="text-danger"><strong>&lt;script&gt; </strong></span>,<br />
              <span className="text-danger"><strong>&lt;base&gt; </strong></span>.<br />
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
The HTML &lt;head&gt; Element
                  </Button>
                  <Button outline
                    color="warning"
                    href="#tdp"
                    className="d-block w-100 text-left my-1 mx-0"
                    size="sm"
                  >
 The HTML &lt;title&gt; Element
                  </Button>
                  <Button outline
                    color="warning"
                    href="#tdp"
                    className="d-block w-100 text-left my-1 mx-0"
                    size="sm"
                  >
 The HTML &lt;style&gt; Element
                  </Button>
                  <Button outline
                    color="warning"
                    href="#tdp"
                    className="d-block w-100 text-left my-1 mx-0"
                    size="sm"
                  >
 The HTML &lt;link&gt; Element
                  </Button>
                  <Button outline
                    color="warning"
                    href="#tdp"
                    className="d-block w-100 text-left my-1 mx-0"
                    size="sm"
                  >
 The HTML &lt;meta&gt; Element
                  </Button>
                  <Button outline
                    color="warning"
                    href="#tdp"
                    className="d-block w-100 text-left my-1 mx-0"
                    size="sm"
                  >
 Setting The Viewport
                  </Button>
                  
                  </CardBody>
              </Card>
            </Col>
          </Row>
          <Row className="mt-5">
            <Col className="mb-5 mb-xl-0" xl="9" >
           
          
            <h1><strong>The HTML &lt;head&gt; Element</strong></h1>

The <span className="text-danger"><strong>&lt;head&gt; </strong></span>  element is a container for metadata (data about data) and is placed <br />
between the <span className="text-danger"><strong>&lt;html&gt; </strong></span>  tag and the
<span className="text-danger"><strong>&lt;body&gt; </strong></span> <br />

HTML metadata is data about the HTML document. Metadata is not displayed.<br /><br />

Metadata typically define the document title, character set, styles, scripts, and other meta information.<br /><br />


<h1><strong>The HTML &lt;title&gt; Element</strong></h1>
The <span className="text-danger"><strong>&lt;title&gt; </strong></span> element defines the title of the document, and is required in all HTML documents.<br />
The <span className="text-danger"><strong>&lt;title&gt; </strong></span> element:<br />
•	defines a title in the browser tab<br />
•	provides a title for the page when it is added to favorites<br />
•	displays a title for the page in search engine results<br /><br />


A simple HTML document:<br />
<span className="text-primary"><strong>&lt; </strong></span>
<span className="text-warning"><strong> !DOCTYPE </strong></span>
<span className="text-danger"><strong>html</strong></span>
<span className="text-primary"><strong>&gt;</strong></span><br />
<span className="text-primary"><strong>&lt; </strong></span>
<span className="text-warning"><strong>html</strong></span>
<span className="text-primary"><strong>&gt;</strong></span><br />
<span className="text-primary"><strong>&lt; </strong></span>
<span className="text-warning"><strong>head</strong></span>
<span className="text-primary"><strong>&gt;</strong></span><br />
<span className="text-primary"><strong>&lt; </strong></span>
<span className="text-warning"><strong>title</strong></span>
<span className="text-primary"><strong>&gt;</strong></span>
Page Title
<span className="text-primary"><strong>&lt; </strong></span>
<span className="text-warning"><strong>/title</strong></span>
<span className="text-primary"><strong>&gt;</strong></span><br />

<span className="text-primary"><strong>&lt; </strong></span>
<span className="text-warning"><strong>/head</strong></span>
<span className="text-primary"><strong>&gt;</strong></span><br />
<span className="text-primary"><strong>&lt; </strong></span>
<span className="text-warning"><strong>body</strong></span>
<span className="text-primary"><strong>&gt;</strong></span><br />
The content of the document......<br />
<span className="text-primary"><strong>&lt; </strong></span>
<span className="text-warning"><strong>/body</strong></span>
<span className="text-primary"><strong>&gt;</strong></span><br />
<span className="text-primary"><strong>&lt; </strong></span>
<span className="text-warning"><strong>/html</strong></span>
<span className="text-primary"><strong>&gt;</strong></span><br /> <br />


<h1><strong>The HTML &lt;style&gt; Element</strong></h1>
The <span className="text-danger"><strong>&lt;style&gt;</strong></span> element is used to define style information for a single HTML page:<br /><br />
<span className="text-primary"><strong>&lt; </strong></span>
<span className="text-warning"><strong>style</strong></span>
<span className="text-primary"><strong>&gt;</strong></span><br />
<span className="text-warning"><strong>body</strong></span> &#123;
<span className="text-danger"><strong>background-color </strong></span>
<span className="text-primary"><strong>: powderblue; </strong></span>&#124;<br />
<span className="text-warning"><strong>h1</strong></span> &#123;
<span className="text-danger"><strong>color </strong></span>
<span className="text-primary"><strong>: red; </strong></span>&#124;<br />
<span className="text-warning"><strong>p</strong></span> &#123;
<span className="text-danger"><strong>color </strong></span>
<span className="text-primary"><strong>: blue; </strong></span>&#124;<br />
<span className="text-primary"><strong>&lt; </strong></span>
<span className="text-warning"><strong>/style</strong></span>
<span className="text-primary"><strong>&gt;</strong></span><br /><br />


<h1><strong>The HTML &lt;link&gt; Element</strong></h1>
The <span className="text-warning"><strong>&lt;link&gt; </strong></span> element is used to link to external style sheets:<br />
<span className="text-primary"><strong>&lt; </strong></span>
<span className="text-warning"><strong>link  </strong></span>
<span className="text-danger"><strong>rel </strong></span>
<span className="text-primary"><strong> ="stylesheet"  </strong></span>
<span className="text-danger"><strong>href </strong></span>
<span className="text-primary"><strong>="mystyle.css"&gt;</strong></span><br /><br />


<h1><strong>The HTML &lt;meta&gt; Element</strong></h1>

The <span className="text-danger"><strong>&lt;meta&gt; </strong></span> element is used to specify which character set is used,
page description, keywords, author, and other metadata.<br />
Metadata is used by browsers (how to display content), by search engines (keywords), and other web services.<br /><br />
Define the character set used:<br />
<span className="text-primary"><strong> &lt; </strong></span>
<span className="text-warning"><strong> meta </strong></span>
<span className="text-danger"><strong>charset </strong></span>
<span className="text-primary"><strong>="UTF-8"&gt; </strong></span>
<br /><br />
Define a description of your web page:
<span className="text-primary"><strong> &lt; </strong></span>
<span className="text-warning"><strong> meta </strong></span>
<span className="text-danger"><strong> name </strong></span>
<span className="text-primary"><strong>="description" </strong></span>
<span className="text-danger"><strong>content </strong></span>
<span className="text-primary"><strong>="TDPVista"&gt; </strong></span>
<br /><br />
Define keywords for search engines:
<span className="text-primary"><strong> &lt; </strong></span>
<span className="text-warning"><strong> meta </strong></span>
<span className="text-danger"><strong> name </strong></span>
<span className="text-primary"><strong>="keywords" </strong></span>
<span className="text-danger"><strong>content </strong></span>
<span className="text-primary"><strong>="HTML, CSS, XML, JavaScript"&gt; </strong></span>
<br /><br />
Define the author of a page:
<span className="text-primary"><strong> &lt; </strong></span>
<span className="text-warning"><strong> meta </strong></span>
<span className="text-danger"><strong> name </strong></span>
<span className="text-primary"><strong>="author"  </strong></span>
<span className="text-danger"><strong>content </strong></span>
<span className="text-primary"><strong>="TDPVista"&gt; </strong></span>
<br /><br />
Refresh document every 30 seconds:
<span className="text-primary"><strong> &lt; </strong></span>
<span className="text-warning"><strong> meta </strong></span>
<span className="text-danger"><strong> http-equiv</strong></span>
<span className="text-primary"><strong>="refresh" </strong></span>
<span className="text-danger"><strong>content </strong></span>
<span className="text-primary"><strong>="30"&gt;</strong></span>
<br /><br />

<h1><strong>Setting The Viewport</strong></h1>
          In HTML, there is a method to let web designers take control over the viewport, through the
          <span className="text-warning"><strong>&lt;meta&gt;</strong></span> tag.<br /><br />

          The viewport is the user's visible area of a web page. It varies with the device, 
          and will be smaller on a mobile phone than on a computer screen.<br /><br />

          You should include the following  <span className="text-warning"><strong>&lt;meta&gt;</strong></span> viewport element in all your web pages:<br /><br />
        
          <span className="text-primary"><strong> &lt; </strong></span>
          <span className="text-warning"><strong> meta </strong></span>
          <span className="text-danger"><strong> name </strong></span>
          <span className="text-primary"><strong>="viewport" </strong></span>
          <span className="text-danger"><strong>content </strong></span>
          <span className="text-primary"><strong>="width=device-width, initial-scale=1.0"&gt; </strong></span>
          <br /><br />

          A  <span className="text-warning"><strong>&lt;meta&gt;</strong></span> viewport element gives the browser instructions
           on how to control the page's dimensions and scaling.<br /><br />

          The width=device-width part sets the width of the page to follow the screen-width of the device
           (which will vary depending on the device).<br /><br />

          The initial-scale=1.0 part sets the initial zoom level when the page is first loaded by the browser.<br /><br />

          Here is an example of a web page without the viewport meta tag, and the same web page with the viewport
           <span className="text-warning"><strong>&lt;meta&gt;</strong></span> tag:<br /><br />
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
