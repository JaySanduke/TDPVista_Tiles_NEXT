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
import Html_img51 from "../../../assets/img/html/Html_img51.jpeg";




class Header extends React.Component {
  render() {
    return (

      <div className="header bg-gradient-info pb-8 pt-5 pt-md-8">
        <Container fluid>
          <div className="header-body">
            <Row>
              <Col xl="6">
              <h1 style={{fontSize:"200%",color:"#fff",fontFamily:"Roboto"}}>XHTML</h1>
              
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
                      <h2 className="text-white mb-0">HTML Uniform Resource Locators</h2>
                    </div>
                    <div className="col">
                     
                    </div>
                  </Row>
                </CardHeader>
                <CardBody className="text-white" style={{  textAlign: "left" }}>
                <h1 className="text-white"><strong>HTML Versus XHTML</strong></h1><br />
       	<button style={{backgroundColor:"#4CAF50"}}>❮ PreviousNext ❯</button><br /><br />

         XHTML is a stricter, more XML-based version of HTML.<br /><br />

         <h1 className="text-white"><strong>What is XHTML?</strong></h1>

          •	XHTML stands for E<strong>X</strong>tensible  <strong>H</strong>yper<strong>T</strong>ext <strong>M</strong>arkup <strong>L</strong>anguage<br />
          •	XHTML is a stricter, more XML-based version of HTML<br />
          •	XHTML is HTML defined as an XML application<br />
          •	XHTML is supported by all major browsers<br /><br />


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
URL - Uniform Resource Locator
                  </Button>
                  <Button outline
                    color="warning"
                    href="#tdp"
                    className="d-block w-100 text-left my-1 mx-0"
                    size="sm"
                  >
Common URL Schemes
                  </Button>
                  <Button outline
                    color="warning"
                    href="#tdp"
                    className="d-block w-100 text-left my-1 mx-0"
                    size="sm"
                  >
URL Encoding
                  </Button>
                  <Button outline
                    color="warning"
                    href="#tdp"
                    className="d-block w-100 text-left my-1 mx-0"
                    size="sm"
                  >
ASCII Encoding Examples
                  </Button>
                  
                  </CardBody>
              </Card>
            </Col>
          </Row>
          <Row className="mt-5">
            <Col className="mb-5 mb-xl-0" xl="9" >
           
          <h1><strong>Why XHTML?</strong></h1>
          XML is a markup language where all documents must be marked up correctly (be "well-formed").<br /><br />
          XHTML was developed to make HTML more extensible and flexible to work with other data formats (such as XML). <br />
          In addition, browsers ignore errors in HTML pages, and try to display the website even if it has some errors in the markup. <br />
          So XHTML comes with a much stricter error handling<br /><br />
          If you want to study XML, please read our <span className="text-primary"><strong><u>XML Tutorial.</u></strong></span><br /><br />


          <h1><strong>The Most Important Differences from HTML</strong></h1> 
            •	&lt;!DOCTYPE&gt; is <strong>mandatory</strong><br />
            •	The xmlns attribute in &lt;html&gt; is <strong>mandatory</strong><br />
            •	&lt;html&gt;, &lt;head&gt;, &lt;title&gt;, and &lt;body&gt; are <strong>mandatory</strong><br />
            •	Elements must always be <strong>properly nested</strong><br />
            •	Elements must always be <strong>closed</strong><br />
            •	Elements must always be in <strong>lowercase</strong><br />
            •	Attribute names must always be in <strong>lowercase</strong><br />
            •	Attribute values must always be <strong>quoted</strong><br />
            •	Attribute minimization is <strong>forbidden</strong><br /><br />


            <h1><strong> XHTML - &lt;!DOCTYPE ....&gt; Is Mandatory</strong></h1>
            An XHTML document must have an XHTML &lt;!DOCTYPE&gt; declaration.<br />
            The &lt;html&gt;, &lt;head&gt;, &lt;title&gt;, and &lt;body&gt; elements must also be present, <br />
            and the xmlns attribute in &lt;html&gt; must specify the xml namespace for the document.<br /><br />

            <Card className="w-50" style={{backgroundColor:"#F1F1F1"}}>
            <h2>Example</h2>
             Here is an XHTML document with a minimum of required tags: 
            </Card> <br />
            

            <span className="text-primary"><strong>&lt;</strong></span>
            <span className="text-warning"><strong>!DOCTYPE </strong></span>
            <span className="text-danger"><strong>html PUBLIC "-//W3C//DTD XHTML 1.1//EN"<br />
            "http://www.w3.org/TR/xhtml11/DTD/xhtml11.dtd  </strong></span>
            <span className="text-primary"><strong>&gt;</strong></span><br />

            <span className="text-primary"><strong>&lt;</strong></span>
            <span className="text-warning"><strong>html</strong></span>
            <span className="text-danger"><strong> xmlns</strong></span>
            <span className="text-primary"><strong>="http://www.w3.org/1999/xhtml"&gt;</strong></span>

            <span className="text-primary"><strong>&lt; </strong></span>
          <span className="text-warning"><strong>head</strong></span>
          <span className="text-primary"><strong>&gt;</strong></span><br />
          <span className="text-primary"><strong>&lt; </strong></span>
          <span className="text-warning"><strong>title</strong></span>
          <span className="text-primary"><strong>&gt;</strong></span>
          Title of document
          <span className="text-primary"><strong>&lt; </strong></span>
          <span className="text-warning"><strong>/title</strong></span>
          <span className="text-primary"><strong>&gt;</strong></span><br />
          
          <span className="text-primary"><strong>&lt; </strong></span>
          <span className="text-warning"><strong>/head</strong></span>
          <span className="text-primary"><strong>&gt;</strong></span><br />
          <span className="text-primary"><strong>&lt; </strong></span>
          <span className="text-warning"><strong>body</strong></span>
          <span className="text-primary"><strong>&gt;</strong></span><br />
          some content here...<br />
          <span className="text-primary"><strong>&lt; </strong></span>
          <span className="text-warning"><strong>/body</strong></span>
          <span className="text-primary"><strong>&gt;</strong></span><br />
          <span className="text-primary"><strong>&lt; </strong></span>
          <span className="text-warning"><strong>/html</strong></span>
          <span className="text-primary"><strong>&gt;</strong></span><br /><br />


          <h1><strong> XHTML Elements Must be Properly Nested</strong></h1>  <br />
In XHTML, elements must always be properly nested within each other, like this:<br /><br />

<h2>Correct:</h2>
<span className="text-primary"><strong> &lt; </strong></span>
<span className="text-warning"><strong>b</strong></span>
<span className="text-primary"><strong> &gt; </strong></span>
<span className="text-primary"><strong> &lt; </strong></span>
<span className="text-warning"><strong>i</strong></span>
<span className="text-primary"><strong> &gt; </strong></span>
Some text
<span className="text-primary"><strong> &lt; </strong></span>
<span className="text-warning"><strong>/i </strong></span>
<span className="text-primary"><strong> &gt; </strong></span>
<span className="text-primary"><strong> &lt; </strong></span>
<span className="text-warning"><strong>/b</strong></span>
<span className="text-primary"><strong> &gt; </strong></span>

<br /><br />
<h2>Wrong:</h2>
<span className="text-primary"><strong> &lt; </strong></span>
<span className="text-warning"><strong>b</strong></span>
<span className="text-primary"><strong> &gt; </strong></span>
<span className="text-primary"><strong> &lt; </strong></span>
<span className="text-warning"><strong>i</strong></span>
<span className="text-primary"><strong> &gt; </strong></span>
Some text
<span className="text-primary"><strong> &lt; </strong></span>
<span className="text-warning"><strong>/b </strong></span>
<span className="text-primary"><strong> &gt; </strong></span>
<span className="text-primary"><strong> &lt; </strong></span>
<span className="text-warning"><strong>/i</strong></span>
<span className="text-primary"><strong> &gt; </strong></span>
<br /><br />


<h1><strong>XHTML Elements Must Always be Closed</strong></h1>  <br />
In XHTML, elements must always be closed, like this:<br /><br />

<h2>Correct:</h2>
<span className="text-primary"><strong> &lt; </strong></span>
<span className="text-warning"><strong>p</strong></span>
<span className="text-primary"><strong> &gt; </strong></span>
This is a paragraph
<span className="text-primary"><strong> &lt; </strong></span>
<span className="text-warning"><strong>/p</strong></span>
<span className="text-primary"><strong> &gt; </strong></span> <br />

<span className="text-primary"><strong> &lt; </strong></span>
<span className="text-warning"><strong>p</strong></span>
<span className="text-primary"><strong> &gt; </strong></span>
This is another paragraph
<span className="text-primary"><strong> &lt; </strong></span>
<span className="text-warning"><strong>/p</strong></span>
<span className="text-primary"><strong> &gt; </strong></span>

<br /> <br />

<h2>Wrong:</h2>
<span className="text-primary"><strong> &lt; </strong></span>
<span className="text-warning"><strong>p</strong></span>
<span className="text-primary"><strong> &gt; </strong></span>
This is a paragraph <br />
<span className="text-primary"><strong> &lt; </strong></span>
<span className="text-warning"><strong>p</strong></span>
<span className="text-primary"><strong> &gt; </strong></span>
This is another paragraph <br /> <br />


<h1><strong>XHTML Empty Elements Must Always be Closed</strong></h1>  <br />
In XHTML, empty elements must always be closed, like this:<br /><br />

<h2>Correct:</h2>
<strong>A break:</strong>
<span className="text-primary"><strong> &lt; </strong></span>
<span className="text-warning"><strong>br </strong></span>
<span className="text-danger"><strong> /</strong></span>
<span className="text-primary"><strong> &gt; </strong></span>
<br />
<strong>A horizontal rule:</strong>
<span className="text-primary"><strong> &lt; </strong></span>
<span className="text-warning"><strong>hr </strong></span>
<span className="text-danger"><strong> /</strong></span>
<span className="text-primary"><strong> &gt; </strong></span>
<br />
<strong>An image:</strong>
<span className="text-primary"><strong> &lt; </strong></span>
<span className="text-warning"><strong>img</strong></span>
<span className="text-danger"><strong> src</strong></span>
<span className="text-primary"><strong> ="happy.gif" </strong></span>
<span className="text-danger"><strong> alt</strong></span>
<span className="text-primary"><strong> ="Happy face"</strong></span>
<span className="text-danger"><strong> /</strong></span>
<span className="text-primary"><strong> &gt; </strong></span>
<br /> <br />
<h2>Wrong:</h2>
<strong>A break:</strong>
<span className="text-primary"><strong> &lt; </strong></span>
<span className="text-warning"><strong>br </strong></span>
<span className="text-primary"><strong> &gt; </strong></span>
<br />
<strong>A horizontal rule:</strong>
<span className="text-primary"><strong> &lt; </strong></span>
<span className="text-warning"><strong>hr </strong></span>
<span className="text-primary"><strong> &gt; </strong></span>
<br />
<strong>An image:</strong>
<span className="text-primary"><strong> &lt; </strong></span>
<span className="text-warning"><strong>img</strong></span>
<span className="text-danger"><strong> src</strong></span>
<span className="text-primary"><strong> ="happy.gif" </strong></span>
<span className="text-danger"><strong> alt</strong></span>
<span className="text-primary"><strong> ="Happy face"</strong></span>
<span className="text-primary"><strong> &gt; </strong></span>
<br /> <br />

<h1><strong>XHTML Elements Must be in Lowercase</strong></h1>  <br />
In XHTML, element names must always be in lowercase, like this:<br /><br />

<h2>Correct:</h2>

<span className="text-primary"><strong>&lt; </strong></span>
<span className="text-warning"><strong>body</strong></span>
<span className="text-primary"><strong>&gt;</strong></span><br />

<span className="text-primary"><strong> &lt; </strong></span>
<span className="text-warning"><strong>p</strong></span>
<span className="text-primary"><strong> &gt; </strong></span>
This is a paragraph
<span className="text-primary"><strong> &lt; </strong></span>
<span className="text-warning"><strong>/p</strong></span>
<span className="text-primary"><strong> &gt; </strong></span> <br />
        
<span className="text-primary"><strong>&lt; </strong></span>
<span className="text-warning"><strong>/body</strong></span>
<span className="text-primary"><strong>&gt;</strong></span>
<br /><br /> 

<h2>Wrong:</h2>

<span className="text-primary"><strong>&lt; </strong></span>
<span className="text-warning"><strong>BODY</strong></span>
<span className="text-primary"><strong>&gt;</strong></span><br />

<span className="text-primary"><strong> &lt; </strong></span>
<span className="text-warning"><strong>P</strong></span>
<span className="text-primary"><strong> &gt; </strong></span>
This is a paragraph
<span className="text-primary"><strong> &lt; </strong></span>
<span className="text-warning"><strong>/P</strong></span>
<span className="text-primary"><strong> &gt; </strong></span> <br />
        
<span className="text-primary"><strong>&lt; </strong></span>
<span className="text-warning"><strong>/BODY</strong></span>
<span className="text-primary"><strong>&gt;</strong></span>

<br /><br />

<h1><strong>XHTML Attribute Names Must be in Lowercase</strong></h1>  <br />
In XHTML, attribute names must always be in lowercase, like this:<br /><br />

<h2>Correct:</h2>

<span className="text-primary"><strong>&lt; </strong></span>
<span className="text-warning"><strong>a</strong></span>
<span className="text-danger"><strong> href</strong></span>
<span className="text-primary"><strong>="https://www.w3schools.com/html/" &gt;</strong></span>
Visit our HTML tutorial
<span className="text-primary"><strong>&lt; </strong></span>
<span className="text-warning"><strong>/a</strong></span>
<span className="text-primary"><strong> &gt; </strong></span> 
<br /> <br /> 

<h2>Wrong:</h2>

<span className="text-primary"><strong>&lt; </strong></span>
<span className="text-warning"><strong>a</strong></span>
<span className="text-danger"><strong> HREF</strong></span>
<span className="text-primary"><strong>="https://www.w3schools.com/html/" &gt;</strong></span>
Visit our HTML tutorial
<span className="text-primary"><strong>&lt; </strong></span>
<span className="text-warning"><strong>/a</strong></span>
<span className="text-primary"><strong> &gt; </strong></span> 

<br /><br />


<h1><strong>XHTML Attribute Values Must be Quoted</strong></h1>  <br />
In XHTML, attribute values must always be quoted, like this:<br /><br />

<h2>Correct:</h2>

<span className="text-primary"><strong>&lt; </strong></span>
<span className="text-warning"><strong>a</strong></span>
<span className="text-danger"><strong> href</strong></span>
<span className="text-primary"><strong>="https://www.w3schools.com/html/" &gt;</strong></span>
Visit our HTML tutorial
<span className="text-primary"><strong>&lt; </strong></span>
<span className="text-warning"><strong>/a</strong></span>
<span className="text-primary"><strong> &gt; </strong></span> 
<br /> <br /> 

<h2>Wrong:</h2>

<span className="text-primary"><strong>&lt; </strong></span>
<span className="text-warning"><strong>a </strong></span>
<span className="text-danger"><strong>href</strong></span>
<span className="text-primary"><strong>=https://www.w3schools.com/html/ &gt;</strong></span>
Visit our HTML tutorial
<span className="text-primary"><strong>&lt; </strong></span>
<span className="text-warning"><strong>/a</strong></span>
<span className="text-primary"><strong> &gt; </strong></span> 

<br /><br />


<h1><strong>XHTML Attribute Minimization is Forbidden</strong></h1>  <br />
In XHTML, attribute minimization is forbidden:<br /><br />

<h2>Correct:</h2>

<span className="text-primary"><strong>&lt; </strong></span>
<span className="text-warning"><strong>input </strong></span>
<span className="text-danger"><strong>type</strong></span>
<span className="text-primary"><strong>="vehicle" </strong></span>
<span className="text-danger"><strong>name</strong></span>
<span className="text-primary"><strong>="checkbox" </strong></span>
<span className="text-danger"><strong>value</strong></span>
<span className="text-primary"><strong>="car" </strong></span>
<span className="text-danger"><strong>checked</strong></span>
<span className="text-primary"><strong>="checked" </strong></span>
<span className="text-warning"><strong>/</strong></span>
<span className="text-primary"><strong> &gt; </strong></span> <br />

<span className="text-primary"><strong>&lt; </strong></span>
<span className="text-warning"><strong>input </strong></span>
<span className="text-danger"><strong>type</strong></span>
<span className="text-primary"><strong>="text" </strong></span>
<span className="text-danger"><strong>name</strong></span>
<span className="text-primary"><strong>="lastname" </strong></span>
<span className="text-danger"><strong>disabled</strong></span>
<span className="text-primary"><strong>="disabled" </strong></span>
<span className="text-warning"><strong>/</strong></span>
<span className="text-primary"><strong> &gt; </strong></span> <br />

<br />
<h2>Wrong:</h2>

<span className="text-primary"><strong>&lt; </strong></span>
<span className="text-warning"><strong>input </strong></span>
<span className="text-danger"><strong>type</strong></span>
<span className="text-primary"><strong>="vehicle" </strong></span>
<span className="text-danger"><strong>name</strong></span>
<span className="text-primary"><strong>="checkbox" </strong></span>
<span className="text-danger"><strong>value</strong></span>
<span className="text-primary"><strong>="car" </strong></span>
<span className="text-danger"><strong>checked</strong></span>
<span className="text-warning"><strong>/</strong></span>
<span className="text-primary"><strong> &gt; </strong></span> <br />

<span className="text-primary"><strong>&lt; </strong></span>
<span className="text-warning"><strong>input </strong></span>
<span className="text-danger"><strong>type</strong></span>
<span className="text-primary"><strong>="text" </strong></span>
<span className="text-danger"><strong>name</strong></span>
<span className="text-primary"><strong>="lastname" </strong></span>
<span className="text-danger"><strong>disabled</strong></span>
<span className="text-warning"><strong>/</strong></span>
<span className="text-primary"><strong> &gt; </strong></span> <br />





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
