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

import Html_img3 from "../../../assets/img/html/Html_img3.jpeg";
import Html_img4 from "../../../assets/img/html/Html_img4.jpeg";
import Html_img5 from "../../../assets/img/html/Html_img5.jpeg";
import Html_img6 from "../../../assets/img/html/Html_img6.jpeg";
import Html_img7 from "../../../assets/img/html/Html_img7.jpeg";
import Html_img8 from "../../../assets/img/html/Html_img8.jpeg";

class Header extends React.Component {
  render() {
    return (

      <div className="header bg-gradient-info pb-8 pt-5 pt-md-8">
        <Container fluid>
          <div className="header-body">
            <Row>
              <Col xl="6">
              <h1 style={{fontSize:"200%",color:"#fff",fontFamily:"Roboto"}}>HTML BASICS</h1>
              
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
                      <h2 className="text-white mb-0"> The &lt;p&gt; Element </h2>
                    </div>
                    <div className="col">
                      
                    </div>
                  </Row>
                </CardHeader>
                <CardBody className="text-white w-50" style={{  textAlign: "left" }}>
          To create a paragraph, simply type in the <span className="text-info"><strong>&lt;p&gt; </strong></span> element with its opening and closing tags:<br /><br />
            <span className="p-2">
                  &lt;html&gt;<br />
                  &lt;head&gt;<br />
                  &lt;title&gt; file&lt;/title&gt;<br />
                  &lt;/head&gt;<br />
                  &lt;body&gt;<br />
                  &lt;p&gt;This is a paragraph. &lt;/p&gt;<br />
                  &lt;p&gt; This is another paragraph.&lt;/p&gt;<br />
                  &lt;/body&gt;<br />
                  &lt;/html&gt;<br /><br />
           </span>
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
                    Single Line Break
                  </Button>
                  <Button outline
                    color="warning"
                    href="#tdp"
                    className="d-block w-100 text-left my-1 mx-0"
                    size="sm"
                  >
               Formatting Elements
                  </Button>
                  <Button outline
                    color="warning"
                    href="#tdp"
                    className="d-block w-100 text-left my-1 mx-0"
                    size="sm"
                  >
                  HTML Headings
                  </Button>
                  <Button outline
                    color="warning"
                    href="#tdp"
                    className="d-block w-100 text-left my-1 mx-0"
                    size="sm"
                  >
               Horizontal Lines
                  </Button>
                  <Button outline
                    color="warning"
                    href="#tdp"
                    className="d-block w-100 text-left my-1 mx-0"
                    size="sm"
                  >
               Comments
                  </Button>
                  <Button outline
                    color="warning"
                    href="#tdp"
                    className="d-block w-100 text-left my-1 mx-0"
                    size="sm"
                  >
              Formatting Text
                  </Button>
                  <Button outline
                    color="warning"
                    href="#tdp"
                    className="d-block w-100 text-left my-1 mx-0"
                    size="sm"
                  >
              HTML Elements
                  </Button>
                  <Button outline
                    color="warning"
                    href="#tdp"
                    className="d-block w-100 text-left my-1 mx-0"
                    size="sm"
                  >
             HTML Attributes
                  </Button>
                  <Button outline
                    color="warning"
                    href="#tdp"
                    className="d-block w-100 text-left my-1 mx-0"
                    size="sm"
                  >
              Attribute Measurements
                  </Button>
                  <Button outline
                    color="warning"
                    href="#tdp"
                    className="d-block w-100 text-left my-1 mx-0"
                    size="sm"
                  >
             The Align Attribute
                  </Button>          
                </CardBody>
              </Card>
            </Col>
          </Row>
          <Row className="mt-5">
            <Col className="mb-5 mb-xl-0" xl="9" >
            <h1><strong> Single Line Break</strong></h1><br />
            Use the<span className="text-info"><strong>&lt;br /&gt; </strong></span>  tag to add a single line of text without starting a new paragraph: <br />
          <Card className="text-primary w-50 p-2" style={{ backgroundColor: "#EEEEEE", textAlign: "left" }}>
            &lt;html&gt;<br />
                  &lt;head&gt;<br />
                  &lt;title&gt; file&lt;/title&gt;<br />
                  &lt;/head&gt;<br />
                  &lt;body&gt;<br />
                  &lt;p&gt;This is a paragraph. &lt;/p&gt;<br />
                  &lt;p&gt; This is another paragraph.&lt;/p&gt;<br />
                  &lt;p&gt;This is <strong> &lt;br /&gt;</strong> a line break  &lt;/p&gt;
                  &lt;/body&gt;<br />
                  &lt;/html&gt;<br />
          </Card><br />
            The <strong> &lt;br /&gt;</strong>  element is an empty HTML element. It has no end tag.<br /><br />

            <h1><strong> Single Line Break</strong></h1>
            Opening the HTML file in the browser shows that a single line break has been added to the paragraph:<br />
            The <strong> &lt;br /&gt;</strong> element has no end tag.<br /><br />

            <h1><strong>Formatting Elements</strong></h1><br />
            In HTML, there is a list of elements that specify text style.<br />
            Formatting elements were designed to display special types of text:<br /><br />
          <Card className="text-primary w-50 p-2" style={{ backgroundColor: "#EEEEEE", textAlign: "left" }}>
            &lt;html&gt;<br />
                  &lt;head&gt;<br />
                  &lt;title&gt; file&lt;/title&gt;<br />
                  &lt;/head&gt;<br />
                  &lt;body&gt;<br />
                  &lt;p&gt;This is regular text &lt;/p&gt;<br />
                  &lt;p&gt;This is regular text &lt;/p&gt;<br />
                  &lt;p&gt;&lt;b&gt; bold text &lt;/b&gt;&lt;/p&gt;<br />
                  &lt;p&gt;&lt;big&gt; big text &lt;/big&gt;&lt;/p&gt;<br />
                  &lt;p&gt;&lt;i&gt; italic text &lt;/i&gt;&lt;/p&gt;<br />
                  &lt;p&gt;&lt;small&gt; small text &lt;/small&gt;&lt;/p&gt;<br />
                  &lt;p&gt;&lt;strong&gt; strong text &lt;/strong&gt;&lt;/p&gt;<br />
                  &lt;p&gt;&lt;sub&gt; subscripted text &lt;/sub&gt;&lt;/p&gt;<br />
                  &lt;p&gt;&lt;sup&gt; superscripted text &lt;/sup&gt;&lt;/p&gt;<br />
                  &lt;p&gt;&lt;ins&gt; inserted text &lt;/ins&gt;&lt;/p&gt;<br />
                  &lt;p&gt;&lt;del&gt; deleted text &lt;/del&gt;&lt;/p&gt;<br />
                  &lt;/body&gt;<br />
                  &lt;/html&gt;
          </Card><br />
                  The &lt;strong&gt; tag is a phrase tag. It defines important text.<br /><br />
          <h2><strong>Result:</strong></h2><br />
          <Card className="imgclass w-50">
            <img src={Html_img3}></img>
          </Card><br />
                  Browsers display &lt;strong&gt; as &lt;b&gt; as,&lt;em&gt;and &lt;i&gt;. However, the meanings of these tags differ:<br />
                  &lt;b&gt; and&lt;i&gt; define bold and italic text, respectively, while&lt;strong&gt; and &lt;em&gt; indicate that the text is <strong>"important".</strong><br /><br />

          <h1><strong>HTML Headings</strong></h1><br />

                HTML includes six levels of headings, which are ranked according to importance.<br />
                These are &lt;h1&gt;, &lt;h2&gt;, &lt;h3&gt;, &lt;h4&gt;, &lt;h5&gt;, and &lt;h6&gt;.<br />

                The following code defines all of the headings:<br /><br />
          <Card className="text-primary w-50 p-2" style={{ backgroundColor: "#EEEEEE", textAlign: "left" }}>
            &lt;html&gt;<br />
                &lt;head&gt;<br />
                &lt;title&gt;file&lt;/title&gt;<br />
                &lt;/head&gt;<br />
                &lt;body&gt;<br />
                &lt;h1&gt;This is heading 1&lt;/h1&gt;<br />
                &lt;h2&gt;This is heading 2&lt;/h2&gt;<br />
                &lt;h3&gt;This is heading 3&lt;/h3&gt;<br />
                &lt;h4&gt;This is heading 4&lt;/h4&gt;<br />
                &lt;h5&gt;This is heading 5&lt;/h5&gt;<br />
                &lt;h6&gt;This is heading 6&lt;/h6&gt;<br />
                &lt;/body&gt;<br />
                &lt;/html&gt;
          </Card><br />
          <h2><strong>Result:</strong></h2> <br />
          <Card className="imgclass w-50">
            <img src={Html_img4}></img>
          </Card><br />
                It is not recommended that you use headings just to make the text big or bold, <br />
                because search engines use headings to index the web page structure and content.<br /><br />

          <h1><strong>Horizontal Lines</strong></h1><br />

                To create a horizontal line, use the &lt;hr /&gt; tag.<br /><br />
          <Card className="text-primary w-50 p-2" style={{ backgroundColor: "#EEEEEE", textAlign: "left" }}>
            &lt;html&gt;<br />
                &lt;head&gt;<br />
                &lt;title&gt;file&lt;/title&gt;<br />
                &lt;/head&gt;<br />
                &lt;body&gt;<br />
                &lt;h1&gt;This is heading 1&lt;/h1&gt;<br />
                &lt;h2&gt;This is heading 2&lt;/h2&gt;<br />
                &lt;h3&gt;This is heading 3&lt;/h3&gt;<br />
                &lt;h4&gt;This is heading 4&lt;/h4&gt;<br />
                &lt;h5&gt;This is heading 5&lt;/h5&gt;<br />
                &lt;h6&gt;This is heading 6&lt;/h6&gt;<br />
                &lt;p&gt;This is a paragraph &lt;/p&gt;<br />
            <strong> &lt;hr /&gt;</strong>
                &lt;p&gt;This is a paragraph &lt;/p&gt;<br />
                &lt;/body&gt;<br />
                &lt;/html&gt;
          </Card><br />
          <h2><strong>Result:</strong></h2><br />
          <Card className="imgclass w-50 ">
            <img src={Html_img5}></img>
          </Card><br />
                In HTML5, the<strong> &lt;hr /&gt;</strong> tag defines a thematic break.<br /><br />

          <h1><strong>Comments</strong></h1><br />
               The browser does not display comments, but they help document the HTML and <br />
               add descriptions, reminders, and other notes.<br />
              &lt;!-- Your comment goes here --&gt;<br /><br />
          <h2><strong>Example:</strong></h2><br />
          <Card className="text-primary w-50 p-2" style={{ backgroundColor: "#EEEEEE", textAlign: "left" }}>
            &lt;html&gt;<br />
               &lt;head&gt;<br />
               &lt;title&gt;file &lt;/title&gt;<br />
               &lt;/head&gt;<br />
               &lt;body&gt;<br />
               &lt;p&gt;This is a paragraph&lt;/p&gt;<br />
               &lt;hr /&gt;<br />
               &lt;p&gt;This is a paragraph&lt;/p&gt;<br />
               &lt;!-- This is a comment --&gt;<br />
               &lt;/body&gt;<br />
               &lt;/html&gt;
          </Card><br />
          <h2><strong>Result:</strong></h2><br />
          <Card className="imgclass w-50">
            <img src={Html_img6}></img>
          </Card><br />
               As you can see, the comment is not displayed in the browser.<br />
              There is an exclamation point (!) in the opening tag, but not in the closing tag.<br /><br />

          <h1><strong>Formatting Text</strong></h1><br />
                Let's get back to our blog project.<br />
                The <strong>About Me </strong>section will contain a heading that's wrapped in a
                 <span className="text-primary"><strong>&lt;h1&gt; </strong></span>tag, <br />
                along with two paragraphs that format text using the tags you've just learned.<br />
                Let's take a look at the code:<br /><br />
                &lt;h1&gt;&lt;span&gt;About Me&lt;/span&gt;&lt;/h1&gt;<br />
                &lt;p&gt;<br />
                Hey! I'm &lt;strong&gt;Alex&lt;/strong&gt;. Coding has changed my world ...<br />
                &lt;/p&gt;<br />
                &lt;p class="quote"&gt;"Declare variables, not war"&lt;/p&gt;<br /><br />

                You may have noticed that we've also used some CSS to add colors and styles to the page. <br />
                When you complete HTML, we strongly recommend our free CSS Tutorial!<br /><br />
          <h2><strong>TASK:</strong></h2>
                1. Create your own About Me section by changing the text.<br />
                2. Play around with the code; experiment with formatting text.<br /><br />


          <h1><strong> HTML Elements</strong></h1><br />
                HTML documents are made up of HTML elements.<br />
                An HTML element is written using a <strong>start tag</strong>  and an <strong>end tag</strong> , and with the <strong>content</strong>  in between.<br />
                HTML documents consist of nested HTML elements. In the example below, the body element includes<br />
                the &lt;p&gt; tags, the &lt;br /&gt; tag and the content, "This is a paragraph".<br /><br />
          <Card className="text-primary w-50 p-2" style={{ backgroundColor: "#EEEEEE", textAlign: "left" }}>
            &lt;html&gt;<br />
                  &lt;head&gt;<br />
                  &lt;title&gt;file&lt;/title&gt;<br />
                  &lt;/head&gt;<br />
                  &lt;body&gt; <br />
                  &lt;p&gt;This is a paragraph &lt;br /&gt;&lt;/p&gt;<br />
                  &lt;/body&gt;<br />
                  &lt;/html&gt;<br />
          </Card><br />
                Some HTML elements (like the <strong>&lt;br /&gt;</strong> tag) do not have end tags.<br />
                Some elements are quite small. Since you can't put contents within a break tag, <br />
                and you don't have an opening and closing break tag, it’s a separate, single element.<br /><br />

          <h1><strong>HTML Attributes</strong></h1><br />

                Attributes provide <strong>additional information</strong> about an element or a tag, while also <strong> modifying </strong>them.<br />
                Most attributes have a value; the value modifies the attribute.<br />
                &lt;p <strong>align="center"</strong>&gt; <br />
                This text is aligned to center<br />
                &lt;/p&gt;<br />
                In this example, the value of "center" indicates that the content within the p element should be aligned to the center: <br /><br />
                <Card className="imgclass w-50">
            <img src={Html_img7}></img>
          </Card><br />
                Attributes are always specified in the start tag, and they appear in name="value" pairs.<br /><br />

          <h1><strong> Attribute Measurements</strong></h1><br />
                As an example, we can modify the horizontal line so it has a width of 50 pixels.<br /><br />
                This can be done by using the width attribute:<br />
                &lt;hr width="50px" /&gt;<br /><br />
                An element's width can also be defined using percentages:<br />
                &lt;hr width="50%" /&gt;<br /><br />
                An element's width can be defined using pixels or percentages.<br /><br />

          <h1><strong> The Align Attribute</strong></h1><br />
                The <strong>align</strong> attribute is used to specify how the text is aligned.<br /><br />
                In the example below, we have a paragraph that is aligned to the center, and a line that is aligned to the right.<br /><br />
          <Card className="text-primary w-50 p-2" style={{ backgroundColor: "#EEEEEE", textAlign: "left" }}>
            &lt;html&gt;<br />
                &lt;head&gt;<br />
                &lt;title&gt;Attributes&lt;/title&gt;<br />
                &lt;/head&gt;<br />
                &lt;body&gt;<br />
                &lt;p <strong>align</strong>="center"&gt;This is a text &lt;br /&gt;<br />
                &lt;hr width="10%" <strong>align</strong>="right" /&gt; This is also a text.<br />
                &lt;/p&gt;<br />
                &lt;/body&gt;<br />
                &lt;/html&gt;<br />
          </Card><br /><br />

                The align attribute of &lt;p&gt; is not supported in HTML5.<br /><br />

                You may be wondering what happens if you try to apply contradictory attributes within the same element.<br />
                &lt;p align="center"&gt;<br />
                This is a text.<br />
                &lt;hr width="50%" align="left" /&gt;<br />
                &lt;/p&gt;<br /><br />
                <Card className="imgclass w-50">
            <img src={Html_img8}></img>
          </Card><br />
                The align attribute of&lt;p&gt; is not supported in HTML5.<br /><br />
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
