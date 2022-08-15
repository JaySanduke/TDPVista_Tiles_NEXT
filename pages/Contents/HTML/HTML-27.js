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
import Html_img45 from "../../../assets/img/html/Html_img45.jpeg";
import Html_img46 from "../../../assets/img/html/Html_img46.jpeg";
import Html_img47 from "../../../assets/img/html/Html_img47.jpeg";
import Html_img48 from "../../../assets/img/html/Html_img48.jpeg";
import Html_img49 from "../../../assets/img/html/Html_img49.jpeg";
import Html_img50 from "../../../assets/img/html/Html_img50.jpeg";




class Header extends React.Component {
  render() {
    return (

      <div className="header bg-gradient-info pb-8 pt-5 pt-md-8">
        <Container fluid>
          <div className="header-body">
            <Row>
              <Col xl="6">
              <h1 style={{fontSize:"200%",color:"#fff",fontFamily:"Roboto"}}>HTML computer code elements</h1>
              
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
                      <h2 className="text-white mb-0">HTML computer code elements</h2>
                    </div>
                    <div className="col">
                     
                    </div>
                  </Row>
                </CardHeader>
                <CardBody className="text-white " style={{  textAlign: "left" }}>
                <h3 className="text-white ">HTML contains several elements for defining user input and computer code.</h3><br />
          <span className="text-primary"><strong> &lt; </strong></span>
          <span className="text-warning"><strong> code  </strong></span>
          <span className="text-primary"><strong> &gt; </strong></span><br />

          x = 5;
          <span className="text-primary"><strong> &lt; </strong></span>
          <span className="text-warning"><strong>br</strong></span>
          <span className="text-primary"><strong> &gt; </strong></span><br />
          y = 6;
          <span className="text-primary"><strong> &lt; </strong></span>
          <span className="text-warning"><strong>br</strong></span>
          <span className="text-primary"><strong> &gt; </strong></span><br />
          z = x + y;<br />
          <span className="text-primary"><strong> &lt; </strong></span>
          <span className="text-warning"><strong> /code  </strong></span>
          <span className="text-primary"><strong> &gt; </strong></span>

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
HTML  &lt;kbd &gt; For Keyboard Input
                  </Button>
                  <Button outline
                    color="warning"
                    href="#tdp"
                    className="d-block w-100 text-left my-1 mx-0"
                    size="sm"
                  >
 HTML  &lt;samp &gt; For Program Output
                  </Button>
                  <Button outline
                    color="warning"
                    href="#tdp"
                    className="d-block w-100 text-left my-1 mx-0"
                    size="sm"
                  >
HTML  &lt;code &gt; For Computer Code
                  </Button>
                  <Button outline
                    color="warning"
                    href="#tdp"
                    className="d-block w-100 text-left my-1 mx-0"
                    size="sm"
                  >
HTML  &lt;var &gt; For Variables
                  </Button>
                  </CardBody>
              </Card>
            </Col>
          </Row>
          <Row className="mt-5">
            <Col className="mb-5 mb-xl-0" xl="9" >
           
            <h1><strong>HTML  &lt;kbd &gt; For Keyboard Input</strong></h1>

The HTML <span className="text-danger"><strong>  &lt;kbd &gt;</strong></span>element represents user input, like keyboard input or voice commands.<br />
Text surrounded by <span className="text-danger"> &lt;kbd &gt; </span> tags is typically displayed in a monospace font:<br />
<span className="text-primary"><strong> &lt; </strong></span>
<span className="text-warning"><strong>p</strong></span>
<span className="text-primary"><strong> &gt; </strong></span>
Save the document by pressing
<span className="text-primary"><strong> &lt; </strong></span>
<span className="text-warning"><strong>kbd</strong></span>
<span className="text-primary"><strong> &gt; </strong></span>
<h2>Ctrl + S</h2>
<span className="text-primary"><strong> &lt; </strong></span>
<span className="text-warning"><strong>/kbd</strong></span>
<span className="text-primary"><strong> &gt; </strong></span>
<span className="text-primary"><strong> &lt; </strong></span>
<span className="text-warning"><strong>/p</strong></span>
<span className="text-primary"><strong> &gt; </strong></span>


<Card className="w-50" style={{ backgroundColor: "#EEEEEE", textAlign: "left" }}>
<h2><strong>Result:</strong></h2><br />
Save the document by pressing Ctrl + S
</Card><br />


<h1><strong>HTML  &lt;samp &gt; For Program Output</strong></h1>

The HTML  <span className="text-danger"><strong>  &lt;samp &gt;</strong></span>element represents output from a program or computing system.<br />
Text surrounded by  <span className="text-danger"><strong>  &lt;samp &gt;</strong></span> tags is typically displayed in a monospace font:<br />
<span className="text-primary"><strong> &lt; </strong></span>
<span className="text-warning"><strong>p</strong></span>
<span className="text-primary"><strong> &gt; </strong></span>
If you input wrong value, the program will return 
<span className="text-primary"><strong> &lt; </strong></span>
<span className="text-warning"><strong>samp</strong></span>
<span className="text-primary"><strong> &gt; </strong></span>      
Error!
<span className="text-primary"><strong> &lt; </strong></span>
<span className="text-warning"><strong>/samp</strong></span>
<span className="text-primary"><strong> &gt; </strong></span>  
<span className="text-primary"><strong> &lt; </strong></span>
<span className="text-warning"><strong>/p</strong></span>
<span className="text-primary"><strong> &gt; </strong></span><br /><br />
<Card className="w-50" style={{ backgroundColor: "#EEEEEE", textAlign: "left" }}>
<h2><strong>Result:</strong></h2>
If you input wrong value, the program will return Error! 
</Card><br />


<h1><strong>HTML  &lt;code &gt; For Computer Code</strong></h1> 

The HTML <span className="text-danger"><strong> &lt;code &gt;</strong></span>element defines a fragment of computer code.<br />
Text surrounded by <span className="text-danger"><strong> &lt;code &gt;</strong></span> tags is typically displayed in a monospace font: <br />
<span className="text-primary"><strong> &lt; </strong></span>
<span className="text-warning"><strong>code</strong></span>
<span className="text-primary"><strong> &gt; </strong></span><br />
x = 5;<br />
y = 6;<br />
z = x + y;<br />
<span className="text-primary"><strong> &lt; </strong></span>
<span className="text-warning"><strong>/code</strong></span>
<span className="text-primary"><strong> &gt; </strong></span><br /><br />

<Card className="w-50" style={{ backgroundColor: "#EEEEEE", textAlign: "left" }}>
<h2><strong>Result:</strong></h2>
x = 5; y = 6; z = x + y; 
</Card><br />

Notice that the <span className="text-danger"><strong> &lt;code &gt;</strong></span>element does not preserve extra whitespace and line-breaks.<br />
To fix this, you can put the <span className="text-danger"><strong> &lt;code &gt;</strong></span>
element inside a <span className="text-danger"><strong> &lt;pre &gt;</strong></span>element:<br /><br />
<span className="text-primary"><strong> &lt; </strong></span>
        <span className="text-warning"><strong>pre</strong></span>
        <span className="text-primary"><strong> &gt; </strong></span><br />
<span className="text-primary"><strong> &lt; </strong></span>
        <span className="text-warning"><strong>code</strong></span>
        <span className="text-primary"><strong> &gt; </strong></span><br />
        x = 5;<br />
        y = 6;<br />
        z = x + y;<br />
        <span className="text-primary"><strong> &lt; </strong></span>
      <span className="text-warning"><strong>/code</strong></span>
      <span className="text-primary"><strong> &gt; </strong></span><br />
      <span className="text-primary"><strong> &lt; </strong></span>
        <span className="text-warning"><strong>/pre</strong></span>
        <span className="text-primary"><strong> &gt; </strong></span><br /><br />
        <Card className="w-50" style={{ backgroundColor: "#EEEEEE", textAlign: "left" }}>
<h2><strong>Result:</strong></h2>
x = 5; <br />
y = 6; <br />
z = x + y; 
</Card><br />

<h1><strong>HTML  &lt;var &gt; For Variables</strong></h1> 

The HTML <span className="text-danger"><strong> &lt;var &gt;</strong></span> element defines a variable.<br />
The variable could be a variable in a mathematical expression or a variable in programming context:<br />
Einstein wrote: 
<span className="text-primary"><strong> &lt; </strong></span>
<span className="text-warning"><strong>var</strong></span>
<span className="text-primary"><strong> &gt; </strong></span>
E
<span className="text-primary"><strong> &lt; </strong></span>
<span className="text-warning"><strong>/var</strong></span>
<span className="text-primary"><strong> &gt; </strong></span>
=
<span className="text-primary"><strong> &lt; </strong></span>
<span className="text-warning"><strong>var</strong></span>
<span className="text-primary"><strong> &gt; </strong></span>
mc
<span className="text-primary"><strong> &lt; </strong></span>
<span className="text-warning"><strong>/var</strong></span>
<span className="text-primary"><strong> &gt; </strong></span>
<span className="text-primary"><strong> &lt; </strong></span>
<span className="text-warning"><strong>sup</strong></span>
<span className="text-primary"><strong> &gt; </strong></span>
2
<span className="text-primary"><strong> &lt; </strong></span>
<span className="text-warning"><strong>/sup</strong></span>
<span className="text-primary"><strong> &gt; </strong></span><br /><br />

<div className="w-50" style={{ backgroundColor: "#EEEEEE",  }}>
<h2><strong>Result:</strong></h2>
Einstein wrote: E = mc<sup>2</sup>. 
</div><br />
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
