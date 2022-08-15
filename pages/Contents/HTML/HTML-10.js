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



import './index.css';
import Content from "layouts/Content.js";


class Header extends React.Component {
  render() {
    return (

      <div className="header bg-gradient-info pb-8 pt-5 pt-md-8">
        <Container fluid>
          <div className="header-body">
            <Row>
              <Col xl="6">
              <h1 style={{fontSize:"200%",color:"#fff",fontFamily:"Roboto"}}>Frames</h1>
              
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
                      <h2 className="text-white mb-0">The &lt;frame&gt; Tag</h2>
                    </div>
                    <div className="col">
                      
                    </div>
                  </Row>
                </CardHeader>
                <CardBody className="text-white " style={{  textAlign: "left" }}>
                A page can be divided into frames using a special frame document.<br />

                The<span className="text-primary"><strong>&lt;frame&gt;</strong></span>
                tag defines one specific window (frame) within a <strong>&lt;frameset&gt;</strong>. <br />
                Each <span className="text-primary"><strong>&lt;frame&gt;</strong></span>in a &lt;frameset&gt;
                can have different attributes, such as border, scrolling, the ability to resize, etc.<br /><br />

                The &lt;frameset&gt; element specifies the number of columns or rows in the frameset, <br />
                as well as what percentage or number of pixels of space each of them occupies.<br />
                <strong>&lt;frameset cols </strong>="100, 25%, *"&gt;<strong>&lt;frameset rows</strong><br />
                <strong>&lt;frameset&gt;</strong>="100, 25%, *"&gt;<strong>&lt;frameset rows</strong><br />
                The &lt;frameset&gt; tag is not supported in HTML5.<br /><br />

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
            The &lt;frame&gt; Tag
                  </Button>
                  <Button outline
                    color="warning"
                    href="#tdp"
                    className="d-block w-100 text-left my-1 mx-0"
                    size="sm"
                  >
                  Working with Frames
                  </Button>
                  <Button outline
                    color="warning"
                    href="#tdp"
                    className="d-block w-100 text-left my-1 mx-0"
                    size="sm"
                  >
           Iframe Syntax
                  </Button>
                  <Button outline
                    color="warning"
                    href="#tdp"
                    className="d-block w-100 text-left my-1 mx-0"
                    size="sm"
                  >
        Iframe - Set Height and Width
                  </Button>
                  <Button outline
                    color="warning"
                    href="#tdp"
                    className="d-block w-100 text-left my-1 mx-0"
                    size="sm"
                  >
         Iframe - Remove the Border
                  </Button>
                  <Button outline
                    color="warning"
                    href="#tdp"
                    className="d-block w-100 text-left my-1 mx-0"
                    size="sm"
                  >
        Iframe - Target for a Link
                  </Button>
                
                  </CardBody>
              </Card>
            </Col>
          </Row>
          <Row className="mt-5">
            <Col className="mb-5 mb-xl-0" xl="9" >
            <h1><strong>Working with Frames</strong></h1><br />

Use the &lt;<strong>noresize </strong>&gt; attribute to specify that a user cannot resize a
<span className="text-info"><strong>&lt;frame&gt;</strong></span>
 element:<br />
 &lt;frame <strong>noresize="noresize"</strong>&gt;<br />
Frame content should be defined using the src attribute.<br />

Lastly, the  <span className="text-info"><strong>&lt;noframe&gt;</strong></span> element provides a way for browsers that do not support frames to view the page.<br />
 The element can contain an alternative page, complete with a body tag and any other elements.<br /><br />
 <Card className="text-primary w-50 p-2" style={{ backgroundColor: "#EEEEEE", textAlign: "left" }}>  
 &lt;frameset cols="25%,50%,25%"&gt;<br />
&lt;frame src="a.htm" /&gt;<br />
&lt;frame src="b.htm" /&gt;<br />
&lt;frame src="c.htm" /&gt;<br />
&lt;noframes&gt;Frames not supported!&lt;/noframes&gt;<br />
&lt;/frameset&gt;<br /><br />
</Card>
<strong>The &lt;frame&gt; tag is not supported in HTML5.</strong><br /><br />


<h1><strong>HTML Iframes</strong></h1><br /><br />

<h1><strong>Iframe Syntax</strong></h1><br />

An HTML iframe is defined with the <span className="text-danger"><strong>&lt;iframe&gt;</strong></span>tag:<br />
<span className="text-warning"><strong><span className="text-primary"><strong>&lt;</strong></span>iframe </strong></span>
<span className="text-danger"><strong>src </strong></span>
<span className="text-primary"><strong>="URL"&gt;</strong></span>
<span className="text-warning"><strong><span className="text-primary"><strong>&lt;</strong></span>/iframe
<span className="text-primary"><strong>&gt;</strong></span></strong></span>&lt; <br />
The  <span className="text-danger"><strong>src </strong></span>  attribute specifies the URL (web address) of the inline frame page.
<br /><br />



<h1><strong>Iframe - Set Height and Width</strong></h1><br />
Use the   <span className="text-danger"><strong>height</strong></span>and<span className="text-danger"><strong> width </strong></span>attributes to specify the size of the iframe.<br />
The height and width are specified in pixels by default:<br />
<span className="text-primary"><strong>&lt;</strong></span>
<span className="text-warning"><strong>iframe  </strong></span>
<span className="text-danger"><strong>src </strong></span>
<span className="text-primary"><strong>="demo_iframe.htm"</strong></span>
<span className="text-danger"><strong>height</strong></span>
<span className="text-primary"><strong>="200" </strong></span>
<span className="text-danger"><strong> width </strong></span>
<span className="text-primary"><strong>="300" </strong></span>
<span className="text-primary"><strong>&gt;&lt;</strong></span>
<span className="text-warning"><strong>/iframe</strong></span>
<span className="text-primary"><strong>&gt;</strong></span><br />

Or you can use CSS to set the height and width of the iframe:<br />

<span className="text-primary"><strong>&lt;</strong></span>
<span className="text-warning"><strong>iframe  </strong></span>
<span className="text-danger"><strong>src </strong></span>
<span className="text-primary"><strong>="demo_iframe.htm"</strong></span>
<span className="text-danger"><strong>style </strong></span>
<span className="text-primary"><strong>="height:200px; width:300px;"</strong></span>
<span className="text-primary"><strong>&gt;&lt;</strong></span>
<span className="text-warning"><strong>/iframe</strong></span>
<span className="text-primary"><strong>&gt;</strong></span><br /><br />


<h1><strong>Iframe - Remove the Border</strong></h1><br />

By default, an iframe has a border around it.<br />
To remove the border, add the  <span className="text-danger"><strong>style </strong></span>attribute and use the CSS
 <span className="text-danger"><strong>border </strong></span> property:<br />
<span className="text-primary"><strong>&lt;</strong></span>
<span className="text-warning"><strong>iframe  </strong></span>
<span className="text-danger"><strong>src </strong></span>
<span className="text-primary"><strong>="demo_iframe.htm" </strong></span>
<span className="text-danger"><strong>style </strong></span>
<span className="text-primary"><strong>="border:none;"</strong></span>
<span className="text-primary"><strong>&gt;&lt;</strong></span>
<span className="text-warning"><strong>/iframe</strong></span>
<span className="text-primary"><strong>&gt;</strong></span><br />

With CSS, you can also change the size, style and color of the iframe's border:<br />

<span className="text-primary"><strong>&lt;</strong></span>
<span className="text-warning"><strong>iframe  </strong></span>
<span className="text-danger"><strong>src </strong></span>
<span className="text-primary"><strong>="demo_iframe.htm" </strong></span>
<span className="text-danger"><strong>style </strong></span>
<span className="text-primary"><strong>="border:2px solid red;"</strong></span>
<span className="text-primary"><strong>&gt;&lt;</strong></span>
<span className="text-warning"><strong>/iframe</strong></span>
<span className="text-primary"><strong>&gt;</strong></span><br /><br />


<h1><strong>Iframe - Target for a Link</strong></h1><br />

An iframe can be used as the target frame for a link.<br />
The  <span className="text-danger"><strong>target </strong></span> attribute of the link
must refer to the  <span className="text-danger"><strong>name </strong></span> attribute of the iframe:<br />

<span className="text-primary"><strong>&lt;</strong></span>
<span className="text-warning"><strong>iframe  </strong></span>
<span className="text-danger"><strong>src </strong></span>
<span className="text-primary"><strong>="demo_iframe.htm" </strong></span>
<span className="text-danger"><strong>name</strong></span>
<span className="text-primary"><strong>="iframe_a"</strong></span>
<span className="text-primary"><strong>&gt;&lt;</strong></span>
<span className="text-warning"><strong>/iframe</strong></span>
<span className="text-primary"><strong>&gt;</strong></span><br />

<span className="text-primary"><strong>&lt;</strong></span>
<span className="text-warning"><strong>p </strong></span>
<span className="text-primary"><strong>&gt;&lt;</strong></span>
<span className="text-warning"><strong>a </strong></span>
<span className="text-danger"><strong>href </strong></span>
<span className="text-primary"><strong>="https://www.w3schools.com"  </strong></span>
<span className="text-danger"><strong>name</strong></span>
<span className="text-danger"><strong>target</strong></span>
<span className="text-primary"><strong>="iframe_a"&gt;</strong></span>
W3Schools.com
<span className="text-primary"><strong>&lt; <span className="text-warning"><strong>/a </strong></span>&gt;</strong></span>
<span className="text-primary"><strong>&lt; <span className="text-warning"><strong>/p </strong></span>&gt;</strong></span>

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
