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

import Html_img11 from "../../../assets/img/html/Html_img11.jpeg";
import Html_img12 from "../../../assets/img/html/Html_img12.jpeg";
import Html_img13 from "../../../assets/img/html/Html_img13.jpeg";
import Html_img14 from "../../../assets/img/html/Html_img14.jpeg";
import Html_img15 from "../../../assets/img/html/Html_img15.jpeg";

class Header extends React.Component {
  render() {
    return (

      <div className="header bg-gradient-info pb-8 pt-5 pt-md-8">
        <Container fluid>
          <div className="header-body">
            <Row>
              <Col xl="6">
              <h1 style={{fontSize:"200%",color:"#fff",fontFamily:"Roboto"}}>Types Of Elements</h1>
              
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
                      <h2 className="text-white mb-0">Types Of Elements</h2>
                    </div>
                    <div className="col">
                      
                    </div>
                  </Row>
                </CardHeader>
                <CardBody className="text-white " style={{  textAlign: "left" }}>
                In HTML, most elements are defined as <strong>block level</strong> or <strong>inline</strong> elements.<br />
                Block level elements start from a new line.<br />
          <strong>For example</strong>: <span className="text-primary"><strong>&lt;h1&gt;, &lt;form&gt;, &lt;li&gt;, &lt;ol&gt;,
                   &lt;ul&gt;, &lt;p&gt;,&lt;pre&gt;, &lt;table&gt;, &lt;div&gt;,</strong></span> etc.<br /><br />

                Inline elements are normally displayed without line breaks.<br />
          <strong>For example</strong>:  <strong>For example</strong>: <span className="text-primary"><strong>&lt;b&gt;,
                &lt;a&gt;, &lt;strong&gt;, &lt;img&gt;,&lt;input&gt;, &lt;em&gt;, &lt;span&gt;, etc.</strong></span> etc.<br /><br />
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
               Types Of Elements
                  </Button>
                  <Button outline
                    color="warning"
                    href="#tdp"
                    className="d-block w-100 text-left my-1 mx-0"
                    size="sm"
                  >Form Elements 
                  </Button>
                  <Button outline
                    color="warning"
                    href="#tdp"
                    className="d-block w-100 text-left my-1 mx-0"
                    size="sm"
                  >
              Contact Form
                  </Button>
                
                  </CardBody>
              </Card>
            </Col>
          </Row>
          <Row className="mt-5">
            <Col className="mb-5 mb-xl-0" xl="9" >
            The <span className="text-primary"><strong>&lt;div&gt;</strong></span> element is a block-level element that is often
                used as a <strong>container for other HTML elements.</strong><br />
                When used together with some CSS styling, the &lt;div&gt; element can be used to style blocks of content:<br /><br />
                <Card className="text-primary w-50 p-2" style={{ backgroundColor: "#EEEEEE", textAlign: "left" }}>    
                &lt;html&gt;<br />
                &lt;body&gt;<br />
                &lt;h1&gt;Headline&lt;/h1&gt;<br />
          <strong>div style="background-color:green; color:white; padding:20px;"&gt;</strong> &lt;<br />
                &lt;p&gt;Some paragraph text goes here.&lt;/p&gt;<br />
                &lt;p&gt;Another paragraph goes here.&lt;/p&gt;<br />
          <strong>&lt;/div&gt;<br /></strong>
                &lt;/body&gt;<br />
                &lt;/html&gt;<br /><br />
                </Card><br /><br />
                <Card className="imgclasss w-50">
            <img src={Html_img11}></img>
          </Card><br />
                Similarly, the <strong>&lt;span&gt;</strong>element is an inline element that is often used as a container for some text.<br />
                When used together with CSS, the &lt;span&gt; element can be used to style <strong>parts of the text:</strong><br /><br />
                <Card className="text-primary w-50 p-2" style={{ backgroundColor: "#EEEEEE", textAlign: "left" }}> 
                &lt;html&gt;<br />
                &lt;body&gt;<br />
                &lt;h2&gt;Some <br />
          <strong>&lt;span style="color:red"&gt;</strong>Important<strong>&lt;/span&gt;</strong><br />
                Message&lt;/h2&gt;<br />
                &lt;/body&gt;<br />
                &lt;/html&gt;<br />
                </Card><br /><br />
                <Card className="imgclasss w-50">
            <img src={Html_img12}></img>
          </Card><br />
          <strong>Summary</strong><br />
                The  &lt;div&gt;element defines a <strong>block-level </strong>section in a document.<br />
                The  &lt;span&gt; element defines an<strong>inline</strong> section in a document.<br /><br />

                Other elements can be used either as block level elements or inline elements. This includes the following elements:<br />
          <strong>APPLET</strong> - embedded Java applet<br />
          <strong>IFRAME</strong> - Inline frame<br />
          <strong>INS</strong> - inserted text<br />
          <strong> MAP</strong> - image map<br />
          <strong>OBJECT </strong>- embedded object<br />
          <strong> SCRIPT </strong>- script within an HTML document<br /><br />
               

          <h1><strong>Form Elements</strong></h1>
                If we change the input type to <strong>radio </strong>, it allows the user select only one of a number of choices:<br />
                &lt;input type=<strong>"radio"" </strong> name="gender" value=<strong>"male" </strong> /&gt; Male &lt;br /&gt;<br />
                &lt;input type=<strong>"radio" </strong>name="gender" value=<strong>"female" </strong> /&gt; Female &lt;br /&gt;<br /><br />

          <h2><strong>Result:</strong></h2><br />
          <Card className="imgclasss w-50">
            <img src={Html_img13}></img>
          </Card><br />
                The type "checkbox" allows the user to select more than one option:<br />
                &lt;input type="checkbox" name="gender" value="1" /&gt; Male &lt;br /&gt;<br />
                &lt;input type="checkbox" name="gender" value="2" /&gt; Female &lt;br /&gt;<br /><br />

          <h2><strong>Result:</strong></h2><br />
          <Card className="imgclasss w-50">
            <img src={Html_img14}></img>
          </Card><br />
                The &lt;input&gt;tag has no end tag.<br /><br />


          <h1><strong>Form Elements</strong></h1>
              The submit button <strong>submits a form </strong> to its action attribute:<br />
              &lt;input type="<strong>submit </strong>" value="Submit" /&gt;

              <h2><strong>Result:</strong></h2>
              <Card className="imgclasss w-50">
            <img src={Html_img15}></img>
          </Card><br />

                After the form is submitted, the data should be processed on the server using a programming language,
                such as PHP/NODE/FLASK/DJANGO.<br /><br />


          <h1><strong>Contact Form</strong></h1><br />
                Next, we'll create a <strong>Contact Form </strong> for your blog. The form will include Name, Email, and Message fields.<br />
                 We'll also add a Submit button.<br />
                Check out the code:<br /><br />
                <Card className="text-primary w-50 p-2" style={{ backgroundColor: "#EEEEEE", textAlign: "left" }}>  
               &lt;h1&gt;&lt;span&gt;Contact Me&lt;/span&gt;&lt;/h1&gt;<br />
               &lt;form&gt;<br />
               &lt;input name="name" type="text" /&gt;&lt;br/&gt;<br />
               &lt;input name="email" type="email" /&gt;&lt;br/&gt;<br />
               &lt;textarea name="message"&gt;&lt;/textarea&gt;<br />
               &lt;input type="submit" value="SEND" class="submit" /&gt;<br />
               &lt;/form&gt;<br />
              </Card>
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
