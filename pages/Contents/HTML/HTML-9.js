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

import Html_img16 from "../../../assets/img/html/Html_img16.jpeg";
import Html_img17 from "../../../assets/img/html/Html_img17.jpeg";
import Html_img18 from "../../../assets/img/html/Html_img18.jpeg";
import Html_img19 from "../../../assets/img/html/Html_img19.jpeg";


class Header extends React.Component {
  render() {
    return (

      <div className="header bg-gradient-info pb-8 pt-5 pt-md-8">
        <Container fluid>
          <div className="header-body">
            <Row>
              <Col xl="6">
              <h1 style={{fontSize:"200%",color:"#fff",fontFamily:"Roboto"}}>HTML Colors</h1>
              
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
                      <h2 className="text-white mb-0">HTML Colors</h2>
                    </div>
                    <div className="col">
                      
                    </div>
                  </Row>
                </CardHeader>
                <CardBody className="text-white " style={{  textAlign: "left" }}>
                HTML colors are expressed as hexadecimal values.<br /><br />

             <strong>0, 1, 2, 3, 4, 5, 6, 7, 8, 9, A, B, C, D, E, F</strong><br />
              As you can see, there are 16 values there, 0 through F. <br />
              Zero represents the lowest value, and F represents the highest.<br /><br />

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
              HTML Color Model
                  </Button>
                  <Button outline
                    color="warning"
                    href="#tdp"
                    className="d-block w-100 text-left my-1 mx-0"
                    size="sm"
                  >
                   Color Values
                  </Button>
                  <Button outline
                    color="warning"
                    href="#tdp"
                    className="d-block w-100 text-left my-1 mx-0"
                    size="sm"
                  >
             Background and Font Colors
                  </Button>
                
                  </CardBody>
              </Card>
            </Col>
          </Row>
          <Row className="mt-5">
            <Col className="mb-5 mb-xl-0" xl="9" >
            <h1><strong>HTML Color Model</strong></h1><br />


Colors are displayed in combinations of <strong>red</strong>, <strong>green </strong>, and <strong>blue </strong>light<strong>(RGB) </strong> .<br />
Hex values are written using the hashtag symbol (#), followed by either three or six hex characters.<br />
As shown in the picture below, the circles overlap, forming new colors:<br /><br />
<Card className="imgclasss w-50">
<img src={Html_img16}></img>
</Card><br />
RGB color values are supported in all browsers.<br /><br />



<h1><strong>Color Values</strong></h1><br />
All of the possible red, green, and blue combinations potentially number over 16 million.<br />
Here are only a few of them<br /><br />
<Card className="imgclasss w-50">
<img src={Html_img17}></img>
</Card><br />
  We can mix the colors to form additional colors:<br /><br />
  <strong>Orange and red mix:</strong><br /><br />
  <Card className="imgclasss w-50">
<img src={Html_img18}></img>
</Card><br />
  Hexadecimal color values are supported in all browsers.<br /><br />


<h1><strong>Background and Font Colors</strong></h1><br />
The <strong>bgcolor </strong> attribute can be used to change the web page's background color.<br />
  This example would produce a dark blue background with a white headline:<br /><br />
<Card className="text-primary w-50 p-2" style={{ backgroundColor: "#EEEEEE", textAlign: "left" }}>       
  &lt;html&gt;<br />
  &lt;head&gt; <br />
  &lt;title&gt;file&lt;/title&gt; <br />
  &lt;/head&gt;<br />
  &lt;body <strong>bgcolor="#000099" </strong>&gt;<br />
  &lt;h1&gt;<br />
  &lt;font color="#FFFFFF"&gt; White headline &lt;/font&gt;<br />
  &lt;/h1&gt; <br />
  &lt;/body&gt;<br />
  &lt;/html&gt;<br />
</Card><br />
<h2><strong>Result:</strong></h2><br />
<Card className="imgclasss w-50">
<img src={Html_img19}></img>
</Card><br />
  <strong>The color attribute specifies the color of the text inside a &lt;font &gt; element.</strong><br /> <br />
         
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
