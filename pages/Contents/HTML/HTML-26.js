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
              <h1 style={{fontSize:"200%",color:"#fff",fontFamily:"Roboto"}}>HTML Responsive Web Design</h1>
              
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
                      <h2 className="text-white mb-0">HTML Responsive Web Design</h2>
                    </div>
                    <div className="col">
                     
                    </div>
                  </Row>
                </CardHeader>
                <CardBody className="text-white " style={{  textAlign: "left" }}>
                Responsive web design is about creating web pages that look good on all devices!<br />
          A responsive web design will automatically adjust for different screen sizes and viewports<br /><br />     
          <Card className="imgclasss w-50">
            <img src={Html_img45}></img>
          </Card>

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
Setting The Viewport
                  </Button>
                  <Button outline
                    color="warning"
                    href="#tdp"
                    className="d-block w-100 text-left my-1 mx-0"
                    size="sm"
                  >
 Responsive Images
                  </Button>
                  <Button outline
                    color="warning"
                    href="#tdp"
                    className="d-block w-100 text-left my-1 mx-0"
                    size="sm"
                  >
 Using the width Property
                  </Button>
                  <Button outline
                    color="warning"
                    href="#tdp"
                    className="d-block w-100 text-left my-1 mx-0"
                    size="sm"
                  >
 Using the max-width Property
                  </Button>
                  <Button outline
                    color="warning"
                    href="#tdp"
                    className="d-block w-100 text-left my-1 mx-0"
                    size="sm"
                  >
 Show Different Images Depending on Browser Width
                  </Button>
                  <Button outline
                    color="warning"
                    href="#tdp"
                    className="d-block w-100 text-left my-1 mx-0"
                    size="sm"
                  >
   Responsive Text Size
                  </Button>
                  <Button outline
                    color="warning"
                    href="#tdp"
                    className="d-block w-100 text-left my-1 mx-0"
                    size="sm"
                  >
Media Queries
                  </Button>
                  </CardBody>
              </Card>
            </Col>
          </Row>
          <Row className="mt-5">
            <Col className="mb-5 mb-xl-0" xl="9" >
           
          
         <h1><strong>What is Responsive Web Design?</strong></h1> 
          Responsive Web Design is about using HTML and CSS to automatically resize, hide, shrink,<br />
          or enlarge, a website, to make it look good on all devices (desktops, tablets, and phones): <br /><br />


          <h1><strong> Setting The Viewport</strong></h1> 
          To create a responsive website, add the following   <span className="text-warning"><strong>&lt;meta&gt; </strong></span> tag to all your web pages:<br />
          <span className="text-primary"><strong> &lt; </strong></span>
          <span className="text-warning"><strong> meta </strong></span>
          <span className="text-danger"><strong> name </strong></span>
          <span className="text-primary"><strong>="viewport" </strong></span>
          <span className="text-danger"><strong>content </strong></span>
          <span className="text-primary"><strong>="width=device-width, initial-scale=1.0"&gt; </strong></span>
          <br /><br />
          This will set the viewport of your page, which will give the browser instructions <br />
          on how to control the page's dimensions and scaling.<br />
          Here is an example of a web page without the viewport meta tag, and the same web page <br />
          with the viewport meta tag:<br /><br />
          Without the viewport meta tag:<br /><br />
          <Card className="imgclasss w-50">
            <img src={Html_img46}></img>
          </Card><br />
          With the viewport meta tag:<br /><br />
          <Card className="imgclasss w-50">
            <img src={Html_img47}></img>
          </Card><br /><br />
          
          <h1><strong> Responsive Images</strong></h1> 
          Responsive images are images that scale nicely to fit any browser size.<br /><br />
          <h2><strong> Using the width Property</strong></h2> 
          If the CSS<span className="text-danger"><strong>width</strong></span> property is set to 100%, the image will be responsive and scale up and down:<br /><br />
          <Card className="imgclasss w-50">
            <img src={Html_img48}></img>
          </Card><br />
          <span className="text-primary"><strong> &lt; </strong></span>
          <span className="text-warning"><strong> img </strong></span>
          <span className="text-danger"><strong> src </strong></span>
          <span className="text-primary"><strong>="img_girl.jpg" </strong></span>
          <span className="text-danger"><strong>style </strong></span>
          <span className="text-primary"><strong>="width:100%;"&gt; </strong></span><br /><br />
          Notice that in the example above, the image can be scaled up to be larger than its original size.<br />
          A better solution, in many cases, will be to use the max-width property instead.<br /><br />


          <h1><strong> Using the max-width Property</strong></h1> 
          If the <span className="text-danger"><strong>max-width </strong></span>property is set to 100%, the image will scale down if it has to,<br />
          but never scale up to be larger than its original size:<br /><br />
          <Card className="imgclasss w-50">
            <img src={Html_img49}></img>
          </Card><br />
          <span className="text-primary"><strong> &lt; </strong></span>
          <span className="text-warning"><strong> img </strong></span>
          <span className="text-danger"><strong> src </strong></span>
          <span className="text-primary"><strong>="img_girl.jpg" </strong></span>
          <span className="text-danger"><strong>style </strong></span>
          <span className="text-primary"><strong>="max-width:100%;height:auto;"&gt; </strong></span><br /><br />
         

          <h1><strong> Show Different Images Depending on Browser Width</strong></h1>
          The HTML  <span className="text-danger"><strong>&lt;picture&gt;</strong></span> element allows you to define different images for different browser window sizes.<br />
          Resize the browser window to see how the image below change depending on the width:<br /><br />
          <Card className="imgclasss w-50">
            <img src={Html_img50}></img>
          </Card><br />
          <span className="text-primary"><strong> &lt; </strong></span>
          <span className="text-danger"><strong>&lt;picture&gt;</strong></span>
          <span className="text-primary"><strong>&gt;</strong></span><br />
          <span className="text-primary"><strong> &lt; </strong></span>
          <span className="text-warning"><strong> source </strong></span>
          <span className="text-danger"><strong> srcset </strong></span>
          <span className="text-primary"><strong>="img_smallflower.jpg" </strong></span>
          <span className="text-danger"><strong>media </strong></span>
          <span className="text-primary"><strong> ="(max-width: 600px)"&gt;</strong></span><br />

          <span className="text-primary"><strong> &lt; </strong></span>
          <span className="text-warning"><strong> source </strong></span>
          <span className="text-danger"><strong> srcset </strong></span>
          <span className="text-primary"><strong>="img_flowers.jpg" </strong></span>
          <span className="text-danger"><strong>media </strong></span>
          <span className="text-primary"><strong> ="(max-width: 1500px)"&gt;</strong></span><br />

          <span className="text-primary"><strong> &lt; </strong></span>
          <span className="text-warning"><strong> source </strong></span>
          <span className="text-danger"><strong> srcset </strong></span>
          <span className="text-primary"><strong> ="flowers.jpg"&gt;</strong></span><br />

          <span className="text-primary"><strong> &lt; </strong></span>
          <span className="text-warning"><strong> img </strong></span>
          <span className="text-danger"><strong> src </strong></span>
          <span className="text-primary"><strong>="img_smallflower.jpg" </strong></span>
          <span className="text-danger"><strong>alt </strong></span>
          <span className="text-primary"><strong> ="Flowers"&gt;</strong></span><br />

          <span className="text-primary"><strong> &lt; </strong></span>
          <span className="text-danger"><strong>&lt;/picture&gt;</strong></span>
          <span className="text-primary"><strong>&gt;</strong></span><br /><br />
  
  
  
          <h1><strong>Responsive Text Size</strong></h1>

          The text size can be set with a "vw" unit, which means the "viewport width".<br />
          That way the text size will follow the size of the browser window:<br /><br />
          <h1><strong>Hello World</strong></h1>
          Resize the browser window to see how the text size scales.<br />

          <span className="text-primary"><strong> &lt; </strong></span>
          <span className="text-warning"><strong> h1  </strong></span>
          <span className="text-danger"><strong> style </strong></span>
          <span className="text-primary"><strong>="font-size:10vw"&gt; </strong></span>
          Hello World
          <span className="text-primary"><strong> &lt; </strong></span>
          <span className="text-warning"><strong> /h1  </strong></span>
          <span className="text-primary"><strong> &gt; </strong></span><br />
          
          Viewport is the browser window size. 1vw = 1% of viewport width.<br />
          If the viewport is 50cm wide, 1vw is 0.5cm.<br /><br />



          <h1><strong>Media Queries</strong></h1>
          In addition to resize text and images, it is also common to use media queries in responsive web pages.<br /><br />
          With media queries you can define completely different styles for different browser sizes.<br /><br />
          Example: resize the browser window to see that the three div elements below will display<br /><br />
          horizontally on large screens and stacked vertically on small screens:<br /><br />

          <span className="text-primary"><strong> &lt; </strong></span>
          <span className="text-warning"><strong> style  </strong></span>
          <span className="text-primary"><strong> &gt; </strong></span><br />

          <span className="text-warning"><strong> .left  </strong></span>,
          <span className="text-warning"><strong> .right  </strong></span>
          &#123;
          <span className="text-danger"><strong>float </strong></span> :
          <span className="text-primary"><strong>left </strong></span> ;<br />

          <span className="text-danger"><strong>width </strong></span> :
          <span className="text-primary"><strong>20% </strong></span> ;
          <span className="text-success"><strong>/* The width is 20%, by default */ </strong></span><br />
          &#125;<br />


          .main &#123;
          <span className="text-danger"><strong>float </strong></span> :
                    <span className="text-primary"><strong>left </strong></span> ;<br /> 
                    <span className="text-danger"><strong>width </strong></span> :
                    <span className="text-primary"><strong>60% </strong></span> ;
                    <span className="text-success"><strong>/* The width is 60%, by default */ </strong></span><br /> 
            &#125;<br />

          <span className="text-success"><strong>/* Use a media query to add a breakpoint at 800px: */ </strong></span><br />
          @media screen and (max-width: 800px)  &#123;<br />
            
          <span className="text-warning"><strong> .left  </strong></span>,
          <span className="text-warning"><strong> .main  </strong></span>,
          <span className="text-warning"><strong> .right  </strong></span>.  &#123;<br />
          <span className="text-danger"><strong>width </strong></span> :
          <span className="text-primary"><strong>100% </strong></span> ;
          <span className="text-success"><strong>/* The width is 100%, when the viewport is 800px or smaller */ </strong></span><br />  
          &#125;<br />
          &#125;<br />
          <span className="text-primary"><strong> &lt; </strong></span>
          <span className="text-warning"><strong> /style  </strong></span>
          <span className="text-primary"><strong> &gt; </strong></span><br /><br />
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
