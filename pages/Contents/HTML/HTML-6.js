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
              <h1 style={{fontSize:"200%",color:"#fff",fontFamily:"Roboto"}}>Image and Anchor Tag</h1>
              
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
                      <h2 className="text-white mb-0"> The &lt;img&gt; Tag </h2>
                    </div>
                    <div className="col">
                      
                    </div>
                  </Row>
                </CardHeader>
                <CardBody className="text-white " style={{  textAlign: "left" }}>
                The <span className="text-primary"><strong>&lt;img&gt;</strong></span> tag is used to insert an image.
                It contains only attributes, and does not have a closing tag.<br /><br />

                The image's URL (address) can be defined using the<strong>src</strong>  attribute.<br /><br />

                The HTML image syntax looks like this:  &lt;<strong>img src="image.jpg"</strong> /&gt;<br />
                The alt attribute specifies an alternate text for an image.<br /><br />

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
                   Image Location
                  </Button>
                  <Button outline
                    color="warning"
                    href="#tdp"
                    className="d-block w-100 text-left my-1 mx-0"
                    size="sm"
                  >
               Image Resizing
                  </Button>
                  <Button outline
                    color="warning"
                    href="#tdp"
                    className="d-block w-100 text-left my-1 mx-0"
                    size="sm"
                  >
                 Image Border
                  </Button>
                  <Button outline
                    color="warning"
                    href="#tdp"
                    className="d-block w-100 text-left my-1 mx-0"
                    size="sm"
                  >
                 The &lt;a &gt; Tag 
                  </Button>
                  <Button outline
                    color="warning"
                    href="#tdp"
                    className="d-block w-100 text-left my-1 mx-0"
                    size="sm"
                  >
            Creating Your First Link
                  </Button>
                  <Button outline
                    color="warning"
                    href="#tdp"
                    className="d-block w-100 text-left my-1 mx-0"
                    size="sm"
                  >
             The target Attribute
                  </Button>
                  </CardBody>
              </Card>
            </Col>
          </Row>
          <Row className="mt-5">
            <Col className="mb-5 mb-xl-0" xl="9" >
            <h1><strong>Image Location</strong></h1><br />
                You need to put in the <strong>image location</strong> for the src attribute that is between the quotation marks.<br /><br />

                For example, if you have a photo named "tree.jpg" in the same folder as the HTML file, your code should look like this:<br />
                &lt;html&gt;<br />
                &lt;head&gt;<br />
                &lt;title&gt;file&lt;/title&gt;<br />
                &lt;/head&gt;<br />
                &lt;body&gt; <br />
                &lt;<strong>img src="tree.jpg" alt=""</strong> /&gt;<br />
                &lt;/body&gt;<br />
                &lt;/html&gt;<br /><br />

                In case the image cannot be displayed, the alt attribute specifies an alternate text that describes the image in words. <br />
                The alt attribute is<strong>required.</strong> <br /><br />

          <h1><strong>Image Resizing</strong></h1><br />
                To define the image size, use the width and height attributes.<br />
                The value can be specified in pixels or as a percentage:<br />
                &lt;html&gt;<br />
                &lt;head&gt;<br />
                &lt;title&gt;file&lt;/title&gt;<br />
                &lt;/head&gt;<br />
                &lt;body&gt; <br />
                &lt;img src="tree.jpg" height="150px" width="150px" alt="" /&gt;<br />
                &lt;!-- or --&gt;<br />
                &lt;img src="tree.jpg" height="50%" width="50%" alt="" /&gt;<br />
                &lt;/body&gt;<br />
                &lt;/html&gt;<br /><br />

                Loading images takes time. Using large images can slow down your page, so use them with care.<br /><br />

          <h1><strong>Image Border</strong></h1><br />

                By default, an image has no borders. Use the border attribute within the image tag to create a border around the image.<br />
                &lt;img src="tree.jpg" height="150px" width="150px" <strong>border</strong>="1px" alt="" /&gt; <br /><br />
                By default, Internet Explorer 9, and its earlier versions, display a border around an image unless a border attribute is defined.<br /><br />


          <h1><strong>The &lt;a&gt; Tag</strong></h1><br />
                Links are also an integral part of every web page. You can add links to text or images that will enable <br />
                the user to click on them in order to be directed to another file or webpage.<br />
                In HTML, links are defined using the <span className="text-primary"><strong>&lt;a&gt;</strong></span> tag.<br /><br />

                Use the <strong>href</strong> attribute to define the link's destination address:&lt;a <strong>href</strong>=""&gt;&lt;/a&gt;<br />
                To link an image to another document, simply nest the &lt;img&gt; tag inside &lt;a&gt; tags.<br /><br />


          <h1><strong>Creating Your First Link</strong></h1><br />
                In the example below, a link to Tdpvista's website is defined:<br />
                &lt;a href="http://tdpvista.cf/learn"&gt;Learn&lt;/a&gt;<br /><br />

                Once the code has been saved, "Learn Playing" will display as a link:<br /><br />

                Clicking on <strong> "Learn"</strong> redirects you to tdpvista.cf/learn<br />
                Links can be either absolute or relative.<br /><br />


          <h1><strong>The target Attribute</strong></h1><br />
                The <strong> target</strong> attribute specifies where to open the linked document.<br />
                Giving a _<strong> blank</strong> value to your attribute will have the link open in a new window or new tab:<br />
                &lt;a href="http://tdpvista.cf/learn" <strong>target="_blank"</strong>&gt;Learn&lt;/a&gt;<br /><br />

                A visited link is underlined and purple.<br /><br />
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
