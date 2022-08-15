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

import Html_img20 from "../../../assets/img/html/Html_img20.jpeg";
import Html_img21 from "../../../assets/img/html/Html_img21.jpeg";

class Header extends React.Component {
  render() {
    return (

      <div className="header bg-gradient-info pb-8 pt-5 pt-md-8">
        <Container fluid>
          <div className="header-body">
            <Row>
              <Col xl="6">
              <h1 style={{fontSize:"200%",color:"#fff",fontFamily:"Roboto"}}>The List of Content Models</h1>
              
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
                      <h2 className="text-white mb-0">The List of Content Models</h2>
                    </div>
                    <div className="col">
                      
                    </div>
                  </Row>
                </CardHeader>
                <CardBody className="text-white " style={{  textAlign: "left" }}>
                In HTML, elements typically belonged in either the block level or inline content model.<br />
               HTML5 introduces <strong>seven</strong> main content models.<br /><br />
              - Metadata<br />
              - Embedded<br />
              - Interactive<br />
              - Heading<br />
              - Phrasing<br />
              - Flow<br />
              - Sectioning

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
        The List of Content Models
                  </Button>
                  <Button outline
                    color="warning"
                    href="#tdp"
                    className="d-block w-100 text-left my-1 mx-0"
                    size="sm"
                  >
             Content Models
                  </Button>
                  <Button outline
                    color="warning"
                    href="#tdp"
                    className="d-block w-100 text-left my-1 mx-0"
                    size="sm"
                  >
           Content Models 
                  </Button>
                  <Button outline
                    color="warning"
                    href="#tdp"
                    className="d-block w-100 text-left my-1 mx-0"
                    size="sm"
                  >
            Page Structure in HTML5
                  </Button>
                  
                  </CardBody>
              </Card>
            </Col>
          </Row>
          <Row className="mt-5">
            <Col className="mb-5 mb-xl-0" xl="9" >
            <h1><strong>Content Models</strong></h1><br />

<strong>Metadata: </strong>Content that sets up the presentation or behavior of the rest of the content.<br />
     These elements are found in the <strong>head</strong> of the document.<br />
    Elements: <span className="text-info"><strong> &lt;base&gt;, &lt;link&gt;, &lt;meta&gt;, &lt;noscript&gt;, &lt;script&gt;, &lt;style&gt;, &lt;title&gt;</strong></span><br /><br />

<strong>Embedded: </strong> Content that imports other resources into the document.<br />
    Elements: <span className="text-info"><strong> &lt;audio&gt;, &lt;video&gt;, &lt;canvas&gt;, &lt;iframe&gt;, &lt;img&gt;,</strong></span>
<strong> &lt;math&gt;, </strong>
<span className="text-info"><strong>  &lt;object&gt;, &lt;svg&gt;</strong></span><br /><br />

<strong>Interactive: </strong>Content specifically intended for user interaction.<br />
    Elements: <span className="text-info"><strong> &lt;a&gt;, &lt;audio&gt;, &lt;video&gt;, &lt;button&gt;, </strong></span>
<strong>&lt;details&gt;,</strong>
<span className="text-info"><strong>
  &lt;embed&gt;, &lt;iframe&gt;, &lt;img&gt;, &lt;input&gt;, &lt;label&gt;, &lt;object&gt;, &lt;select&gt;, &lt;textarea&gt;
      </strong></span><br /><br />

<strong>Heading:</strong>Defines a section header.
    Elements: <span className="text-info"><strong>&lt;h1&gt;, &lt;h2&gt;, &lt;h3&gt;, &lt;h4&gt;, &lt;h5&gt;, &lt;h6&gt;,
      <strong>&lt;hgroup&gt;</strong>
</strong></span> <br /><br />

<strong>Phrasing</strong> This model has a number of inline level elements in common with HTML4.<br />
    Elements:<span className="text-info"><strong> &lt;img&gt;,</strong></span>
<strong> &lt;span&gt;,</strong>
<span className="text-info"><strong>  &lt;strong&gt;, &lt;label&gt;, &lt;br /&gt;, &lt;small&gt;, &lt;sub&gt;,</strong></span>and more.<br /><br />
<Card className="text-white w-50 bg-info  p-2">
  The same element can belong to more than one content model.
    </Card><br />


<h1><strong>Content Models</strong></h1><br />
<strong>Flow content </strong> Contains the majority of HTML5 elements that would be included in the normal flow of the document.<br /><br />

<strong>Sectioning content: </strong> Defines the scope of headings, content, navigation, and footers.<br />
    Elements:  <span className="text-info"><strong> &lt;article&gt;, &lt;aside&gt;, &lt;nav&gt;, &lt;section&gt;</strong></span><br /><br />
    <Card className="imgclasss w-50">
  <img src={Html_img20}></img>
</Card><br />
<Card  className="text-white w-50 bg-info  p-2">
  The various content models overlap in certain areas, depending on how they are being used.
    </Card><br />

    <h1><strong> Page Structure in HTML5</strong></h1><br />

A generic HTML5 page structure looks like this:
<Card className="imgclasss w-50">
<img src={Html_img21}></img>
</Card><br />
<Card  className="text-white w-50 bg-info p-2">
You may not need some of these elements, depending on your page structure.
</Card><br />



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
