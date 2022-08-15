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
import Html_img37 from "../../../assets/img/html/Html_img37.jpeg";
import Html_img38 from "../../../assets/img/html/Html_img38.jpeg";
import Html_img39 from "../../../assets/img/html/Html_img39.jpeg";
import Html_img40 from "../../../assets/img/html/Html_img40.jpeg";


class Header extends React.Component {
  render() {
    return (

      <div className="header bg-gradient-info pb-8 pt-5 pt-md-8">
        <Container fluid>
          <div className="header-body">
            <Row>
              <Col xl="6">
              <h1 style={{fontSize:"200%",color:"#fff",fontFamily:"Roboto"}}>Working with Canvas</h1>
              
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
                      <h2 className="text-white mb-0">Working with Canvas</h2>
                    </div>
                    <div className="col">
                     
                    </div>
                  </Row>
                </CardHeader>
                <CardBody className="text-white " style={{  textAlign: "left" }}>
                The Canvas element can be transformed. <br />
                  As an example, a text is written on the canvas at the coordinates (10, 30).<br />
                  ctx.<strong>font </strong>="bold 22px Tahoma";<br />
                  ctx.<strong>textAlign </strong>="start";<br />
                  ctx.<strong>fillText</strong>("start", 10, 30);<br />

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
 The rotate() Method
                  </Button>
                  <Button outline
                    color="warning"
                    href="#tdp"
                    className="d-block w-100 text-left my-1 mx-0"
                    size="sm"
                  >
   The scale() Method
                  </Button>
                
                 
                  </CardBody>
              </Card>
            </Col>
          </Row>
          <Row className="mt-5">
            <Col className="mb-5 mb-xl-0" xl="9" >
           
            <h2><strong>Result:</strong></h2>
          <Card className="imgclasss w-50">
            <img src={Html_img37}></img>
          </Card><br />
                The <strong>translate(x,y) </strong> method is used to move the Canvas.<br />
                x indicates how far to move the grid horizontally, and y indicates how far to move the grid vertically.<br />
                ctx.<strong>translate </strong>(100, 150);<br />
                ctx.fillText("after translate", 10, 30);<br /><br />

                In this example, the canvas is moved 100px to the right, and 150px down.<br /><br />
          <h2><strong>Result:</strong></h2><br />
          <Card className="imgclasss w-50">
            <img src={Html_img38}></img>
          </Card><br />
          <Card className="text-white w-50 bg-info">
            Canvas has several methods for drawing paths, boxes, circles, text, and adding images.
                  </Card><br />

          <h1><strong>The rotate() Method</strong></h1>

                  The <strong> rotate()</strong> method is used to rotate the HTML5 Canvas. The value must be in radians, not degrees.<br /><br />

                  Here is an example that draws the same rectangle before and after rotation is set:<br />
                  ctx.fillStyle = "#FF0000";<br />
                  ctx.fillRect(10,10, 100, 100);<br /><br />

                  ctx.<strong>rotate </strong>( (Math.PI / 180) * 25); //rotate 25 degrees.<br /><br />

                  ctx.fillStyle = "#0000FF";<br />
                  ctx.fillRect(10,10, 100, 100);<br />className="text-white w-50 bg-info"

          <Card className="imgclasss w-50">
            <img src={Html_img39}></img>
          </Card><br />
          <Card className="text-white w-50 bg-info">
            The rotation will only affect drawings made after the rotation is done.
                  </Card><br />


          <h1><strong>The scale() Method</strong></h1>

                  The <strong>scale() </strong> method scales the current drawing. It takes two parameters:<br />
                  - The number of times by which the image should be scaled in the X-direction.<br />
                  - The number of times by which the image should be scaled in the Y-direction.<br /><br />
                  var canvas = document.getElementById('canvas1');<br />
                  ctx =canvas.getContext('2d');<br />
                  ctx.font="bold 22px Tahoma";<br />
                  ctx.textAlign="start";<br />
                  ctx.fillText("start", 10, 30);<br />
                  ctx.translate(100, 150);<br />
                  ctx.fillText("after translate", 0, 0);<br />
                  ctx.rotate(1);<br />
                  ctx.fillText("after rotate", 0, 0);<br />
                  ctx.<strong>scale </strong>(1.5, 4);<br />
                  ctx.fillText("after scale", 0,20);<br /><br />

                  This will scale the canvas 1.5 times in the X-direction, and 4 times in Y-direction:<br /><br />
                  <Card className="imgclass w-50">
            <img src={Html_img40}></img>
          </Card><br />
          <Card className="text-white w-50 bg-info">
            If you scale a drawing, all future drawings will also be scaled.
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
