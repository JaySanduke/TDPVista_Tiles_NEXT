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

import Header from "components/Headers/Header.js";
import './index.css';
import Content from "layouts/Content.js";
import Html_img1 from "../../../assets/img/html/Html_img1.jpeg";
import Html_img2 from "../../../assets/img/html/Html_img2.jpeg";
import Html_img3 from "../../../assets/img/html/Html_img3.jpeg";
import Html_img4 from "../../../assets/img/html/Html_img4.jpeg";
import Html_img5 from "../../../assets/img/html/Html_img5.jpeg";
import Html_img6 from "../../../assets/img/html/Html_img6.jpeg";
import Html_img7 from "../../../assets/img/html/Html_img7.jpeg";
import Html_img8 from "../../../assets/img/html/Html_img8.jpeg";
import Html_img9 from "../../../assets/img/html/Html_img9.jpeg";
import Html_img10 from "../../../assets/img/html/Html_img10.jpeg";
import Html_img11 from "../../../assets/img/html/Html_img11.jpeg";
import Html_img12 from "../../../assets/img/html/Html_img12.jpeg";
import Html_img13 from "../../../assets/img/html/Html_img13.jpeg";
import Html_img14 from "../../../assets/img/html/Html_img14.jpeg";
import Html_img15 from "../../../assets/img/html/Html_img15.jpeg";
import Html_img16 from "../../../assets/img/html/Html_img16.jpeg";
import Html_img17 from "../../../assets/img/html/Html_img17.jpeg";
import Html_img18 from "../../../assets/img/html/Html_img18.jpeg";
import Html_img19 from "../../../assets/img/html/Html_img19.jpeg";
import Html_img20 from "../../../assets/img/html/Html_img20.jpeg";
import Html_img21 from "../../../assets/img/html/Html_img21.jpeg";
import Html_img22 from "../../../assets/img/html/Html_img22.jpeg";
import Html_img23 from "../../../assets/img/html/Html_img23.jpeg";
import Html_img24 from "../../../assets/img/html/Html_img24.jpeg";
import Html_img25 from "../../../assets/img/html/Html_img25.jpeg";
import Html_img26 from "../../../assets/img/html/Html_img26.jpeg";
import Html_img27 from "../../../assets/img/html/Html_img27.jpeg";
import Html_img28 from "../../../assets/img/html/Html_img28.jpeg";
import Html_img29 from "../../../assets/img/html/Html_img29.jpeg";
import Html_img30 from "../../../assets/img/html/Html_img30.jpeg";
import Html_img31 from "../../../assets/img/html/Html_img31.jpeg";
import Html_img32 from "../../../assets/img/html/Html_img32.jpeg";
import Html_img33 from "../../../assets/img/html/Html_img33.jpeg";
import Html_img34 from "../../../assets/img/html/Html_img34.jpeg";
import Html_img35 from "../../../assets/img/html/Html_img35.jpeg";
import Html_img36 from "../../../assets/img/html/Html_img36.jpeg";
import Html_img37 from "../../../assets/img/html/Html_img37.jpeg";
import Html_img38 from "../../../assets/img/html/Html_img38.jpeg";
import Html_img39 from "../../../assets/img/html/Html_img39.jpeg";
import Html_img40 from "../../../assets/img/html/Html_img40.jpeg";
import Html_img41 from "../../../assets/img/html/Html_img41.jpeg";
import Html_img42 from "../../../assets/img/html/Html_img42.jpeg";
import Html_img43 from "../../../assets/img/html/Html_img43.jpeg";
import Html_img44 from "../../../assets/img/html/Html_img44.jpeg";
import Html_img45 from "../../../assets/img/html/Html_img45.jpeg";
import Html_img46 from "../../../assets/img/html/Html_img46.jpeg";
import Html_img47 from "../../../assets/img/html/Html_img47.jpeg";
import Html_img48 from "../../../assets/img/html/Html_img48.jpeg";
import Html_img49 from "../../../assets/img/html/Html_img49.jpeg";
import Html_img50 from "../../../assets/img/html/Html_img50.jpeg";
import Html_img51 from "../../../assets/img/html/Html_img51.jpeg";
import Html_img52 from "../../../assets/img/html/Html_img52.jpeg";
import Html_img53 from "../../../assets/img/html/Html_img53.jpeg";
import Html_img54 from "../../../assets/img/html/Html_img54.jpeg";
import Html_img55 from "../../../assets/img/html/Html_img55.jpeg";
import Html_img56 from "../../../assets/img/html/Html_img56.jpeg";

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
    // e.preventDefault();
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
                      <h2 className="text-white mb-0">HTML</h2>
                    </div>
                    <div className="col">
                      
                    </div>
                  </Row>
                </CardHeader>
                <CardBody>
                  <p className="text-white">
                    HTML stands for HyperText Markup Language.<br />
                  Unlike a scripting or programming language that uses scripts to perform functions, a markup language uses tags to identify content.<br />
                    <strong>Here is an example of an HTML tag:</strong><br />
                    <span>&lt;p&gt; I'm a paragraph &lt;/p&gt;</span>
                  </p>
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
                    HTML: Structure
                  </Button>
                  <Button outline
                    color="warning"
                    href="#tdp"
                    className="d-block w-100 text-left my-1 mx-0"
                    size="sm"
                  >
                    CSS/BOOTSTRAP: Presentation
                  </Button>
                  <Button outline
                    color="warning"
                    href="#tdp"
                    className="d-block w-100 text-left my-1 mx-0"
                    size="sm"
                  >
                    JAVASCRIPT/JQUERY: Behavior
                  </Button>
                  <Button outline
                    color="warning"
                    href="#tdp"
                    className="d-block w-100 text-left my-1 mx-0"
                    size="sm"
                  >
                    PHP/NODE/FLASK/DJANGO: Backend
                  </Button>
                  <Button outline
                    color="warning"
                    href="#tdp"
                    className="d-block w-100 text-left my-1 mx-0"
                    size="sm"
                  >
                    CMS: Content Management System
                  </Button>
                </CardBody>
              </Card>
            </Col>
          </Row>
          <Row className="mt-5">
            <Col className="mb-5 mb-xl-0" xl="9" >

              <h1> The &lt;html&gt; Tag</h1>
              <p>
              Although various versions have been released over the years, HTML basics remain the same.<br /><br />
              The structure of an HTML document has been compared with that of a sandwich. <br />
              As a sandwich has two slices of bread,the HTML document has opening and closing HTML tags.<br /><br />
              These tags, like the bread in a sandwich, surround everything else:<br /><br />
              </p>
              <Card className="w-50 p-2" style={{ backgroundColor: "#EEEEEE", textAlign: "left" }}>

               <strong>
                  &lt;html&gt;   <br />
                      …           <br />
                  &lt;/html&gt;   <br />
               </strong>
              </Card>
              <br />
              <Card style={{ backgroundColor: "#00FFFF" }} className="w-50">
                <strong>Everything in an HTML document is surrounded by the &lt;html&gt; tag.</strong>
              </Card>
              <br /><br />

              <h1>  The &lt;head&gt; Tag </h1>
              Immediately following the opening HTML tag, you'll find the <strong>head </strong>of the document,<br />
               which is identified by opening and closing head tags.<br /><br />

              The head of an HTML file contains all of the <strong> non-visual elements </strong>that help make the page work.<br /><br />
              <Card className="text-primary w-50" style={{ backgroundColor: "#EEEEEE", textAlign: "left" }}>

                &lt;html&gt;<br />
                  &#09; <strong>&lt;head&gt;…&lt;/head&gt;</strong><br />
                &lt;/html&gt;  
              </Card> <br /><br />
             

              <h1>   The &lt;body&gt; Tag </h1>
              The body tag follows the head tag.<br />
              All visual-structural elements are contained within the body tag.<br /><br />
              Headings, paragraphs, lists, quotes, images, and links are just a few of the elements <br />
              that can be contained within the body tag.<br /><br />
                  <Card className="text-primary w-50" style={{ backgroundColor: "#EEEEEE", textAlign: "left", }}>        
                  <strong>Basic HTML Structure:</strong><br />
    
                  <strong>
                  &lt;html&gt;<br />
                      &#09; &lt;head&gt; <br />
                      &#09; &lt;/head&gt;<br />
                      &#09; &lt;body&gt;<br />
                      &#09;&lt;/body&gt;<br />
                      &lt;/html&gt;<br /><br />
                  </strong>
 
                 <strong> The &lt;body&gt; tag defines the main content of the HTML document.</strong>
              
              </Card>
            </Col>
            <Col xl="3">
            </Col>
          </Row><br /><br />

          <h1>The HTML File</h1><br />
          <p>
            HTML files are text files, so you can use any text editor to create your first webpage.<br />
          There are some very nice HTML editors available; you can choose the one that works for you.<br />
           For now let's write our examples in Notepad.<br /><br />
           Add the basic HTML structure to the text editor with "This is a line of text" in the body section.
          </p>
          <Card className="text-primary w-50" style={{ backgroundColor: "#EEEEEE", textAlign: "left" }}>
            <strong>
              &lt;html&gt;<br />
                  &lt;head&gt;<br />
                  &lt;/head&gt;<br />
                  &lt;body&gt;<br />
                  Welcome to TDPVista <br />
                  &lt;/body&gt;<br />
                  &lt;/html&gt;<br /><br />
            </strong>
          </Card><br />
          In our example, the file is saved as <strong> first.html</strong> <br /> <br />
          When the file is opened, the following result is displayed in the web browser:<br /><br />
          <Card className="imgclasss w-50">
            <img src={Html_img1}></img>
          </Card><br />
          HTML file names should end in either <strong>.html  </strong>or <strong>.htm  </strong> extension.<br /><br />


          <h1>The &lt;title&gt; Tag</h1><br />
          To place a title on the tab describing the web page, add a <span className="text-info">  <strong>&lt;title&gt;</strong></span> element to your head section:
          <Card className="text-primary w-50" style={{ backgroundColor: "#EEEEEE", textAlign: "left" }}>
            <strong>
              &lt;html&gt;<br />
                  &lt;head&gt;<br />
                  &lt;title&gt; file&lt;/title&gt;<br />
                  &lt;/head&gt;<br />
                  &lt;body&gt;<br />
                  Welcome to TDPVista <br />
                  &lt;/body&gt;<br />
                  &lt;/html&gt;<br /><br />
            </strong>
          </Card><br />
          This will produce the following result:<br /><br />
          <Card className="imgclasss w-50">
            <img src={Html_img2}></img>
          </Card><br />
          <Card className="text-primary w-50" style={{ backgroundColor: "#EEEEEE", textAlign: "left" }}> 
          </Card>
           <strong> The title element is important because it describes the page and is used by search engines. </strong><br />

         
          <h1>Creating a Blog</h1>

          Throughout this course, we'll help you practice and create your own unique blog project, <br />
          so you'll retain what you've learned and be able to put it to use. <br />
          Just keep going and follow the instructions in the <strong>TASK</strong> section.<br />
          This is what your finished blog page will look like.<br />
          <strong>TASK</strong>: Tap  to see the code and its output<br />

          <Card className="text-primary w-50" style={{ backgroundColor: "#EEEEEE", textAlign: "left" }}>
            <strong>
              &lt;html&gt;<br />
                  &lt;head&gt;<br />
                  &lt;title&gt; My Blog&lt;/title&gt;<br />
                  &lt;/head&gt;<br />
                  &lt;body&gt;<br />
                  ...
          </strong>
          </Card><br />

          Don't be afraid of long codes. By the time you complete the course,<br />
           everything will make complete sense and look highly doable.We guarantee it!<br />
          <strong>TASK:</strong><br />
          1. Open the code.<br />
          2. On the top header, change the name to your own name.<br />
          3. Change the page title. Remember, the page title is located inside the
          <strong><u>&lt;title&gt; </u></strong> tag in the <strong><u>  &lt;head&gt;</u></strong> of the page. <br /><br />



          <h1><strong> HTML BASICS<br /><br />

          The &lt;p&gt; Element<br />
          </strong></h1>

          To create a paragraph, simply type in the <span className="text-info"><strong>&lt;p&gt; </strong></span> element with its opening and closing tags:
            <Card className="text-primary w-50" style={{ backgroundColor: "#EEEEEE", textAlign: "left" }}>
            &lt;html&gt;<br />
                  &lt;head&gt;<br />
                  &lt;title&gt; file&lt;/title&gt;<br />
                  &lt;/head&gt;<br />
                  &lt;body&gt;<br />
                  &lt;p&gt;This is a paragraph. &lt;/p&gt;<br />
                  &lt;p&gt; This is another paragraph.&lt;/p&gt;<br />
                  &lt;/body&gt;<br />
                  &lt;/html&gt;<br />
          </Card><br />

          <h1><strong> Single Line Break</strong></h1><br />
            Use the<span className="text-info"><strong>&lt;br /&gt; </strong></span>  tag to add a single line of text without starting a new paragraph: <br />
          <Card className="text-primary w-50" style={{ backgroundColor: "#EEEEEE", textAlign: "left" }}>
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
            The <strong> &lt;br /&gt;</strong>  element is an empty HTML element. It has no end tag.

            <h1><strong> Single Line Break</strong></h1><br />
            Opening the HTML file in the browser shows that a single line break has been added to the paragraph:<br />
            The <strong> &lt;br /&gt;</strong> element has no end tag.

            <h1><strong>Formatting Elements</strong></h1><br />
            In HTML, there is a list of elements that specify text style.<br />
            Formatting elements were designed to display special types of text:<br />
          <Card className="text-primary w-50" style={{ backgroundColor: "#EEEEEE", textAlign: "left" }}>
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
                  &lt;/html&gt;<br /><br />
          </Card>
                  The &lt;strong&gt; tag is a phrase tag. It defines important text.<br />
          <h2><strong>Result:</strong></h2><br />
          <Card className="imgclasss w-50">
            <img src={Html_img3}></img>
          </Card><br />
                  Browsers display <u>&lt;strong&gt;</u>as<u>&lt;b&gt;</u> as,<u>&lt;em&gt;</u>and<u> &lt;i&gt;</u>    <br />.
                  However, the meanings of these tags differ:<br />
          <u>&lt;b&gt;</u> and <u>&lt;i&gt;</u> define bold and italic text, respectively, <br />
                  while <u>&lt;strong&gt;</u> and <u>&lt;em&gt;</u> indicate that the text is <strong>"important".</strong><br />

          <h1><strong>HTML Headings</strong></h1><br />

                HTML includes six levels of headings, which are ranked according to importance.<br />
                These are &lt;h1&gt;, &lt;h2&gt;, &lt;h3&gt;, &lt;h4&gt;, &lt;h5&gt;, and &lt;h6&gt;.<br />

                The following code defines all of the headings:<br />
          <Card className="text-primary w-50" style={{ backgroundColor: "#EEEEEE", textAlign: "left" }}>
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
                &lt;/html&gt;<br /> <br />
          </Card>
          <h2><strong>Result:</strong></h2>
          <Card className="imgclasss w-50">
            <img src={Html_img4}></img>
          </Card><br />
                It is not recommended that you use headings just to make the text big or bold, <br />
                because search engines use headings to index the web page structure and content.<br /><br />

          <h1><strong>Horizontal Lines</strong></h1><br />

                To create a horizontal line, use the &lt;hr /&gt; tag.<br />
          <Card className="text-primary w-50" style={{ backgroundColor: "#EEEEEE", textAlign: "left" }}>
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
                &lt;/html&gt;<br /><br />
          </Card>
          <h2><strong>Result:</strong></h2>
          <Card className="imgclasss w-50">
            <img src={Html_img5}></img>
          </Card><br />
                In HTML5, the<strong> &lt;hr /&gt;</strong> tag defines a thematic break.<br /><br />

          <h1><strong>Comments</strong></h1><br />
               The browser does not display comments, but they help document the HTML and <br />
               add descriptions, reminders, and other notes.<br />
              &lt;!-- Your comment goes here --&gt;<br />
          <h2><strong>Example:</strong></h2><br />
          <Card className="text-primary w-50" style={{ backgroundColor: "#EEEEEE", textAlign: "left" }}>
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
               &lt;/html&gt;<br /><br />
          </Card>
          <h2><strong>Result:</strong></h2>
          <Card className="imgclasss w-50">
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
                the &lt;p&gt; tags, the &lt;br /&gt; tag and the content, "This is a paragraph".<br />
          <Card className="text-primary w-50" style={{ backgroundColor: "#EEEEEE", textAlign: "left" }}>
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
                In this example, the value of "center" indicates that the content within the p element should be aligned to the center: <br />
                <Card className="imgclasss w-50">
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
                In the example below, we have a paragraph that is aligned to the center, and a line that is aligned to the right.<br />
          <Card className="text-primary w-50" style={{ backgroundColor: "#EEEEEE", textAlign: "left" }}>
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
                &lt;/p&gt;<br />
                <Card className="imgclasss w-50">
            <img src={Html_img8}></img>
          </Card><br />
                The align attribute of&lt;p&gt; is not supported in HTML5.<br /><br />


          <h1><strong>The &lt;img&gt; Tag</strong></h1><br />
                The <span className="text-primary"><strong>&lt;img&gt;</strong></span> tag is used to insert an image.
                It contains only attributes, and does not have a closing tag.<br /><br />

                The image's URL (address) can be defined using the<strong>src</strong>  attribute.<br /><br />

                The HTML image syntax looks like this:&lt;<strong>img src="image.jpg"</strong> /&gt;<br />
                The alt attribute specifies an alternate text for an image.<br /><br />


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


          <h1><strong>Ordered Lists</strong></h1><br />

                An ordered list starts with the  <span className="text-primary"><strong>&lt;ol&gt;</strong></span> tag,
                and each list item is defined by the  <span className="text-primary"><strong>&lt;li&gt; </strong></span>tag.<br />
                Here is an example of an ordered list:<br />
                &lt;html&gt;<br />
                &lt;head&gt;<br />
                &lt;title&gt;file&lt;/title&gt;<br />
                &lt;/head&gt;<br />
                &lt;body&gt;<br />
                &lt;ol&gt;<br />
                &lt;li&gt;Red&lt;/li&gt;<br />
                &lt;li&gt;Blue&lt;/li&gt;<br />
                &lt;li&gt;Green&lt;/li&gt;<br />
                &lt;/ol&gt; <br />
                &lt;/body&gt;<br />
                &lt;/html&gt;<br /><br />
          <h2><strong>Result:</strong></h2>
          <Card className="imgclass w-50">
            <img src={Html_img9}></img>
          </Card><br />
                The list items will be automatically marked with numbers.<br /><br />


          <h1><strong>Unordered List</strong></h1><br />
                An unordered list starts with the <span className="text-primary"><strong>&lt;ul&gt;</strong></span> tag.<br />
                &lt;html&gt;<br />
                &lt;head&gt;<br />
                &lt;title&gt;file&lt;/title&gt;<br />
                &lt;/head&gt;<br />
                &lt;body&gt;<br />
                &lt;ul&gt;<br />
                &lt;li&gt;Red&lt;/li&gt;<br />
                &lt;li&gt;Blue&lt;/li&gt;<br />
                &lt;li&gt;Green&lt;/li&gt;<br />
                &lt;/ul&gt; <br />
                &lt;/body&gt;<br />
                &lt;/html&gt;<br /><br />
          <h2><strong>Result:</strong></h2>
          <Card className="imgclasss w-50">
            <img src={Html_img10}></img>
          </Card><br />
                The list items will be marked with bullets.<br /><br />


          <h1><strong>Creating a Table</strong></h1><br />

                Tables are defined by using the <span className="text-primary"><strong>&lt;table&gt;</strong></span>tag.<br />
                Tables are divided into table rows with the <span className="text-primary"><strong>&lt;tr&gt;</strong></span>tag.<br />
                Table rows are divided into table columns (table data) with the &lt;td&gt; tag.<br /><br />

                Here is an example of a table with <strong>one row</strong> and <strong>three columns:</strong>&lt;table&gt;<br />
                &lt;tr&gt;<br />
                &lt;td&gt;&lt;/td&gt;<br />
                &lt;td&gt;&lt;/td&gt;<br />
                &lt;td&gt;&lt;/td&gt;<br />
                &lt;/tr&gt;<br />
                &lt;/table&gt;<br />
                Table data tags &lt;td&gt; act as data containers within the table.<br />
                They can contain all sorts of HTML elements, such as text, images, lists, other tables, and so on.<br /><br />



          <h1><strong>Creating a Table</strong></h1><br /> The border and colspan Attributes

                A border can be added using the <strong>border</strong> attribute:&lt;table <strong>border</strong>="2"&gt;<br />
                A table <strong>cell</strong> can span two or more columns:<br />
                &lt;table border="2"&gt;<br />
                &lt;tr&gt;<br />
                &lt;td&gt;Red&lt;/td&gt;<br />
                &lt;td&gt;Blue&lt;/td&gt;<br />
                &lt;td&gt;Green&lt;/td&gt;<br />
                &lt;/tr&gt;<br />
                &lt;tr&gt;<br />
                &lt;td&gt;&lt;br /&gt;&lt;/td&gt;<br />
                &lt;td <strong>colspan</strong>="2"&gt;&lt;br /&gt;&lt;/td&gt;<br />
                &lt;/tr&gt;<br />
                &lt;/table&gt;<br /> <br />

                The border attribute is not supported in HTML5.<br /> <br />


          <h1><strong>The border and colspan Attributes</strong></h1><br />
                The example below demonstrates the <strong>colspan</strong> attribute in action:<br />
                &lt;table border="2"&gt;<br />
                &lt;tr&gt;<br />
                &lt;td&gt;Red&lt;/td&gt;<br />
                &lt;td&gt;Blue&lt;/td&gt;<br />
                &lt;td&gt;Green&lt;/td&gt;<br />
                &lt;/tr&gt;<br />
                &lt;tr&gt;<br />
                &lt;td&gt;<strong>Yellow</strong>&lt;/td&gt;<br />
                &lt;td colspan="2"&gt;<strong>Orange</strong>&lt;/td&gt;<br />
                &lt;/tr&gt;<br />
                &lt;/table&gt;<br /> <br />

                You can see that the cell containing "Orange" spans two cells. <br />
                To make a cell span more than one row, use the <strong>rowspan</strong> attribute. <br /> <br />



          <h1><strong>The align and bgcolor Attributes</strong></h1><br />


                To change your table's position, use the <strong>align</strong> attribute inside your table tag:
                &lt;table <strong>align="center"</strong>&gt; <br />
                Now let's specify a background color of red for a table cell. To do that, just use the bgcolor attribute.<br />
                &lt;table border="2"&gt;<br />
                &lt;tr&gt;<br />
                &lt;td <strong>bgcolor</strong>="red"&gt;Red&lt;/td&gt;<br />
                &lt;td&gt;Blue&lt;/td&gt;<br />
                &lt;td&gt;Green&lt;/td&gt;<br />
                &lt;/tr&gt;<br />
                &lt;tr&gt;<br />
                &lt;td&gt;Yellow&lt;/td&gt;<br />
                &lt;td colspan="2"&gt;Orange&lt;/td&gt;<br />
                &lt;/tr&gt;<br />
                &lt;/table&gt;<br /><br />



          <h1><strong>Types of Elements</strong></h1><br />

                In HTML, most elements are defined as <strong>block level</strong> or <strong>inline</strong> elements.<br />
                Block level elements start from a new line.<br />
          <strong>For example</strong>: <span className="text-primary"><strong>&lt;h1&gt;, &lt;form&gt;, &lt;li&gt;, &lt;ol&gt;,
                   &lt;ul&gt;, &lt;p&gt;,&lt;pre&gt;, &lt;table&gt;, &lt;div&gt;,</strong></span> etc.<br /><br />

                Inline elements are normally displayed without line breaks.<br />
          <strong>For example</strong>:  <strong>For example</strong>: <span className="text-primary"><strong>&lt;b&gt;,
                &lt;a&gt;, &lt;strong&gt;, &lt;img&gt;,&lt;input&gt;, &lt;em&gt;, &lt;span&gt;, etc.</strong></span> etc.<br /><br />
                The <span className="text-primary"><strong>&lt;div&gt;</strong></span> element is a block-level element that is often
                used as a <strong>container for other HTML elements.</strong><br />
                When used together with some CSS styling, the &lt;div&gt; element can be used to style blocks of content:<br />
                &lt;html&gt;<br />
                &lt;body&gt;<br />
                &lt;h1&gt;Headline&lt;/h1&gt;<br />
          <strong>div style="background-color:green; color:white; padding:20px;"&gt;</strong> &lt;<br />
                &lt;p&gt;Some paragraph text goes here.&lt;/p&gt;<br />
                &lt;p&gt;Another paragraph goes here.&lt;/p&gt;<br />
          <strong>&lt;/div&gt;<br /></strong>
                &lt;/body&gt;<br />
                &lt;/html&gt;<br /><br />
                <Card className="imgclasss w-50">
            <img src={Html_img11}></img>
          </Card><br />
                Similarly, the <strong>&lt;span&gt;</strong>element is an inline element that is often used as a container for some text.<br />
                When used together with CSS, the &lt;span&gt; element can be used to style <strong>parts of the text:</strong><br />
                &lt;html&gt;<br />
                &lt;body&gt;<br />
                &lt;h2&gt;Some <br />
          <strong>&lt;span style="color:red"&gt;</strong>Important<strong>&lt;/span&gt;</strong><br />
                Message&lt;/h2&gt;<br />
                &lt;/body&gt;<br />
                &lt;/html&gt;<br />
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

          <h2><strong>Result:</strong></h2>
          <Card className="imgclasss w-50">
            <img src={Html_img13}></img>
          </Card><br />
                The type "checkbox" allows the user to select more than one option:<br />
                &lt;input type="checkbox" name="gender" value="1" /&gt; Male &lt;br /&gt;<br />
                &lt;input type="checkbox" name="gender" value="2" /&gt; Female &lt;br /&gt;<br />

          <h2><strong>Result:</strong></h2>
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
                Check out the code:<br />
               &lt;h1&gt;&lt;span&gt;Contact Me&lt;/span&gt;&lt;/h1&gt;<br />
               &lt;form&gt;<br />
               &lt;input name="name" type="text" /&gt;&lt;br/&gt;<br />
               &lt;input name="email" type="email" /&gt;&lt;br/&gt;<br />
               &lt;textarea name="message"&gt;&lt;/textarea&gt;<br />
               &lt;input type="submit" value="SEND" class="submit" /&gt;<br />
               &lt;/form&gt;<br />


          <h1><strong>HTML Colors!</strong></h1><br />

              HTML colors are expressed as hexadecimal values.<br /><br />

          <strong>0, 1, 2, 3, 4, 5, 6, 7, 8, 9, A, B, C, D, E, F</strong><br />
              As you can see, there are 16 values there, 0 through F. <br />
              Zero represents the lowest value, and F represents the highest.<br /><br />


          <h1><strong>HTML Color Model</strong></h1><br />


              Colors are displayed in combinations of <strong>red</strong>, <strong>green </strong>, and <strong>blue </strong>light<strong>(RGB) </strong> .<br />
              Hex values are written using the hashtag symbol (#), followed by either three or six hex characters.<br />
              As shown in the picture below, the circles overlap, forming new colors:<br />
              <Card className="imgclasss w-50">
            <img src={Html_img16}></img>
          </Card><br />
            RGB color values are supported in all browsers.<br /><br />



          <h1><strong>Color Values</strong></h1><br />
              All of the possible red, green, and blue combinations potentially number over 16 million.<br />
              Here are only a few of them<br />
              <Card className="imgclasss w-50">
            <img src={Html_img17}></img>
          </Card><br />
                We can mix the colors to form additional colors:
                <strong>Orange and red mix:</strong>
                <Card className="imgclasss w-50">
            <img src={Html_img18}></img>
          </Card><br />
                Hexadecimal color values are supported in all browsers.<br /><br />


          <h1><strong>Background and Font Colors</strong></h1><br />
                The <strong>bgcolor </strong> attribute can be used to change the web page's background color.<br />
                This example would produce a dark blue background with a white headline:<br />
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

          <h2><strong>Result:</strong></h2>
          <Card className="imgclasss w-50">
            <img src={Html_img19}></img>
          </Card><br />
                The color attribute specifies the color of the text inside a &lt;font &gt; element.<br /> <br />


          <h1><strong>The &lt;frame&gt; Tag</strong></h1><br />

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


          <h1><strong>Working with Frames</strong></h1><br />

                Use the &lt;<strong>noresize </strong>&gt; attribute to specify that a user cannot resize a
                <span className="text-primary"><strong>&lt;frame&gt;</strong></span>
                 element:&lt;frame <strong>noresize="noresize"</strong>&gt;<br />
                Frame content should be defined using the src attribute.<br />

                Lastly, the  <span className="text-primary"><strong>&lt;noframe&gt;</strong></span> element provides a way for browsers that do not support frames to view the page.<br />
                 The element can contain an alternative page, complete with a body tag and any other elements.<br />
                 &lt;frameset cols="25%,50%,25%"&gt;<br />
                &lt;frame src="a.htm" /&gt;<br />
                &lt;frame src="b.htm" /&gt;<br />
                &lt;frame src="c.htm" /&gt;<br />
                &lt;noframes&gt;Frames not supported!&lt;/noframes&gt;<br />
                &lt;/frameset&gt;<br />
                The &lt;frame&gt; tag is not supported in HTML5.<br />


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
          <hr />


          <h1><strong>HTML5</strong></h1><br />

                When writing HTML5 documents, one of the first new features that you'll notice is the doc type declaration:<br />
          <strong>&lt;!DOCTYPE HTML&gt; </strong><br />
                The character encoding (charset) declaration is also simplified:&lt;<strong>meta charset="UTF-8"</strong>&gt;<br />
          <strong>New Elements in HTML5</strong><br />
          <span className="text-info"><strong>  &lt;article&gt;, &lt;aside&gt;, &lt;audio&gt;, &lt;canvas&gt;, &lt;datalist&gt;,</strong></span>
          <strong>&lt;details&gt;,</strong>
          <span className="text-info"><strong> &lt;embed&gt;, &lt;footer&gt;, &lt;header&gt;, <br />&lt;nav&gt;, </strong></span>
          <strong>&lt;output&gt;,</strong>
          <span className="text-info"><strong> &lt;progress&gt;,&lt;section&gt;, &lt;video&gt;,</strong></span> and even more!<br />
                The default character encoding in HTML5 is UTF-8.<br /><br />


          <h1><strong>New in HTML5</strong></h1><br />

          <strong>Forms</strong><br />
                - The Web Forms 2.0 specification allows for creation of more powerful forms and more compelling user experiences.<br />
                - Date pickers, color pickers, and numeric stepper controls have been added.<br />
                - Input field types now include email, search, and URL.<br />
                - PUT and DELETE form methods are now supported.<br /><br />

          <strong>Integrated API</strong> (Application Programming Interfaces)<br />
                - Drag and Drop<br />
                - Audio and Video<br />
                - Offline Web Applications<br />
                - History<br />
                - Local Storage<br />
                - Geolocation<br />
                - Web Messaging<br />
                You will learn more about these new features in the upcoming lessons.<br />
                Tap the <strong>Continue </strong>button to begin!<br /><br />


          <h1><strong>The List of Content Models</strong></h1><br />
              In HTML, elements typically belonged in either the block level or inline content model.<br />
               HTML5 introduces <strong>seven</strong> main content models.<br /><br />
              - Metadata<br />
              - Embedded<br />
              - Interactive<br />
              - Heading<br />
              - Phrasing<br />
              - Flow<br />
              - Sectioning<br /><br />


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
          <span className="text-info"><strong>  &lt;strong&gt;, &lt;label&gt;, &lt;br /&gt;, &lt;small&gt;, &lt;sub&gt;,</strong></span>and more.<br />
          <Card style={{ backgroundColor: "#00FF00" }} className="w-50">
            The same element can belong to more than one content model.
              </Card><br />


          <h1><strong>Content Models</strong></h1><br />
          <strong>Flow content </strong> Contains the majority of HTML5 elements that would be included in the normal flow of the document.<br /><br />

          <strong>Sectioning content: </strong> Defines the scope of headings, content, navigation, and footers.<br />
              Elements:  <span className="text-info"><strong> &lt;article&gt;, &lt;aside&gt;, &lt;nav&gt;, &lt;section&gt;&lt;/section&gt;</strong></span><br />
              <Card className="imgclasss w-50">
            <img src={Html_img20}></img>
          </Card><br />
          <Card style={{ backgroundColor: "#00FF00" }} className="w-50">
            The various content models overlap in certain areas, depending on how they are being used.
              </Card><br />


          <h1><strong> Page Structure in HTML5</strong></h1><br />

              A generic HTML5 page structure looks like this:
              <Card className="imgclasss w-50">
            <img src={Html_img21}></img>
          </Card><br />
          <Card style={{ backgroundColor: "#00FF00" }} className="w-50">
            You may not need some of these elements, depending on your page structure.
              </Card><br />


          <h1><strong>The &lt;header&gt; Element</strong></h1>

              In HTML4, we would define a header like this:&lt;div id="header"&gt;<br />
              In HTML5, a simple <span className="text-info"><strong>&lt;header&gt;</strong></span> tag is used, instead.<br /><br />

              The <span className="text-info"><strong>&lt;header&gt;</strong></span> element is appropriate for use inside the body tag.<br />
              &lt;!DOCTYPE html&gt;<br />
              &lt;html&gt;<br />
              &lt;head&gt;&lt;/head&gt;<br />
              &lt;body&gt;<br />
          <strong>&lt;header&gt;</strong><br />
              &lt;h1&gt; Most important heading &lt;/h1&gt;<br />
              &lt;h3&gt; Less important heading &lt;/h3&gt;<br />
          <strong>&lt;/header&gt;</strong><br />
              &lt;/body&gt;<br />
              &lt;/html&gt; <br />
              <Card className="imgclasss w-50">
            <img src={Html_img22}></img>
          </Card><br />

          <h1><strong>The &lt;footer&gt; Element</strong></h1>
              The footer element is also widely used. Generally we refer to a section located at the very bottom of the web page as the footer.<br />
          <strong>&lt;footer&gt;…&lt;/footer&gt;</strong>  <br />
          <Card style={{ backgroundColor: "#00FF00" }} className="w-50">
            The following information is usually provided between these tags:<br />
              - Contact Information<br />
              - Privacy Policy<br />
              - Social Media Icons<br />
              - Terms of Service<br />
              - Copyright Information<br />
              - Sitemap and Related Documents<br /><br />
          </Card>


          <h1><strong>The &lt;nav&gt; Element</strong></h1>
              This tag represents a section of a page that links to other pages or to certain sections within the page. <br />
              This would be a section with navigation links.<br /><br />

              Here is an example of a major block of navigation links:<br />
          <strong>&lt;nav&gt;</strong><br />
             &lt;ul&gt;<br />
             &lt;li&gt;&lt;a href="#"&gt;Home&lt;/a&gt;&lt;/li&gt;<br />
             &lt;li&gt;&lt;a href="#"&gt;Services&lt;/a&gt;&lt;/li&gt;<br />
             &lt;li&gt;&lt;a href="#"&gt;About us&lt;/a&gt;&lt;/li&gt;<br />
             &lt;/ul&gt;<br />
          <strong>&lt;/nav&gt;</strong><br />
          <Card className="imgclasss w-50">
            <img src={Html_img23}></img>
          </Card><br />
          <Card style={{ backgroundColor: "#00FF00" }} className="w-50">
            Not all of the links in a document should be inside a&lt;nav&gt; element.
            The &lt;nav&gt; element is intended only for major blocks of navigation links.
            Typically, the &lt;footer&gt;element often has a list of links that don't need to be in a &lt;nav&gt; element.
              </Card>


          <h1><strong>The&lt;article&gt; Element</strong></h1>

               Article is a self-contained, independent piece of content that can be used and distributed separately<br />
               from the rest of the page or site. This could be a forum post, a magazine or newspaper article, a blog entry, <br />
               a comment, an interactive widget or gadget,or any other independent piece of content.<br />

              The <span className="text-info"><strong> &lt;article&gt; </strong></span>element replaces the
              <span className="text-info"><strong> &lt;div&gt;  </strong></span>
              element that was widely used in HTML4, along with an id or class.<br />
          <strong>&lt;article&gt;</strong> <br />
              &lt;h1&gt;The article title&lt;/h1&gt; <br />
              &lt;p&gt;Contents of the article element &lt;/p&gt;<br />
          <strong>&lt;/article&gt;</strong> <br />

          <Card style={{ backgroundColor: "#00FF00" }} className="w-50">
            When an &lt;article&gt; element is nested, the inner element represents an article related to the outer element.<br />
              For example, blog post comments can be &lt;article&gt; elements nested in the &lt;article&gt; <br />
              representing the blog post.<br /><br />
          </Card><br />


          <h1><strong>The &lt;section&gt; Element</strong></h1>

          <span className="text-info"><strong> &lt;section&gt;</strong></span> is a logical container of the page or article.<br />
              Sections can be used to divide up content within an article.<br />
              For example, a homepage could have a section for introducing the company, another for news items, <br />
              and still another for contact information.<br /><br />

              Each<span className="text-info"><strong> &lt;section&gt;</strong></span> should be identified,
              typically by including a heading (h1-h6 element) as a child of <br />
              the<span className="text-info"><strong> &lt;section&gt;</strong></span> element.<br />
              &lt;article&gt;<br />
              &lt;h1&gt;Welcome&lt;/h1&gt;<br />
          <strong> &lt;section&gt;</strong><br />
              &lt;h1&gt;Heading&lt;/h1&gt;<br />
              &lt;p&gt;content or image&lt;/p&gt;<br />
          <strong> &lt;/section&gt;</strong><br />
              &lt;/article&gt;<br />
          <Card style={{ backgroundColor: "#00FF00" }} className="w-50">
            If it makes sense to separately syndicate the content of a &lt;section&gt;
            element, use an &lt;article&gt; element instead.
              </Card><br />



          <h1><strong>The &lt;aside&gt; Element</strong></h1>

          <span className="text-info"><strong> &lt;aside&gt;</strong></span> is secondary or tangential content which could be considered separate from but indirectly related to the main content.<br />
              This type of content is often represented in sidebars.<br />
              When an <span className="text-info"><strong> &lt;aside&gt;</strong></span> tag is used within an
              <span className="text-info"><strong> &lt;article&gt;</strong></span> tag, the content of the
              <span className="text-info"><strong> &lt;aside&gt;</strong></span> should be specifically related to that article.<br /><br />
              &lt;article&gt;<br />
              &lt;h1&gt; Gifts for everyone &lt;/h1&gt;<br />
              &lt;p&gt; This website will be the best place for choosing gifts &lt;/p&gt;<br />
          <strong> &lt;aside&gt;</strong><br />
              &lt;p&gt; Gifts will be delivered to you within 24 hours &lt;/p&gt;<br />
          <strong> &lt;/aside&gt;</strong><br />
              &lt;/article&gt; <br />

          <Card style={{ backgroundColor: "#00FF00" }} className="w-50">
            When an &lt;aside&gt; tag is used outside of an &lt;article&gt; tag, <br />
              its content should be related to the surrounding content.
              </Card><br />



          <h1><strong>Audio on the Web</strong></h1>

              Before HTML5, there was no standard for playing audio files on a web page.<br />
              The HTML5 <span className="text-info"><strong> &lt;audio&gt;</strong></span> element specifies a standard for embedding audio in a web page.<br /><br />

              There are two different ways to specify the audio source file's URL. The first uses the source attribute:<br /><br />
          <strong> &lt;audio</strong> src="audio.mp3" controls&gt;<br />
              Audio element not supported by your browser<br />
          <strong> &lt;/audio&gt;</strong> <br />
              The second way uses the <span className="text-info"><strong> &lt;source&gt;</strong></span> element inside the <span className="text-info"><strong> &lt;audio&gt;</strong></span> element:<br /><br />
          <strong> &lt;audio controls&gt;</strong><br />
              &lt;source src="audio.mp3" type="audio/mpeg"&gt;<br />
              &lt;source src="audio.ogg" type="audio/ogg"&gt;<br />
          <strong> &lt;/audio&gt;</strong> <br />
          <Card style={{ backgroundColor: "#00FF00" }} className="w-50">
            Multiple &lt;source&gt; elements can be linked to different audio files.
            The browser will use the first recognized format.
               </Card><br />



          <h1><strong>Audio on the Web</strong></h1>

                The <span className="text-info"><strong> &lt;audio&gt;</strong></span> element creates an audio player inside the browser.<br />
                &lt;audio controls&gt;<br />
                &lt;source src="audio.mp3" type="audio/mpeg"&gt;<br />
                &lt;source src="audio.ogg" type="audio/ogg"&gt;<br />
                Audio element not supported by your browser. <br />
                &lt;/audio&gt; <br />
          <h2><strong>Result:</strong></h2>
          <Card className="imgclasss w-50">
            <img src={Html_img24}></img>
          </Card><br />
          <Card style={{ backgroundColor: "#00FF00" }} className="w-50">
            The text between the &lt;audio&gt; and &lt;/audio&gt; tags will display in browsers that do not support the&lt;audio&gt; element.
                 </Card>


                 <h1><strong>Videos in HTML</strong></h1><br />

The video element is similar to the audio element.<br />
You can specify the video source URL using an attribute in a video element,<br />
 or using source elements inside the video element:<br /><br />
 <Card className="text-primary w-50 p-2" style={{ backgroundColor: "#EEEEEE", textAlign: "left" }}>  
                &lt;video controls &gt;<br />
                &lt;source src="video.mp4" type="video/mp4"&gt; <br />
                &lt;source src="video.ogg" type="video/ogg"&gt; <br />
                Video is not supported by your browser <br />
                &lt;/video&gt; <br />
                </Card><br />

Another aspect that the audio and video elements have in common is that<br />
 the major browsers do not all support the same file types. <br />
If the browser does not support the first video type, it will try the next one.<br /><br />


                 <h1><strong>Attributes of &lt;audio&gt;</strong></h1>
               
                 <strong>controls </strong> <br /> 
Specifies that audio controls should be displayed (such as a play/pause button, etc.)<br /><br />

<strong>autoplay </strong>
When this attribute is defined, audio starts playing as soon as it is ready,<br />
 without asking for the visitor's permission.<br /><br />

&lt;audio controls <strong> autoplay </strong> &lt;<br /><br />

<strong>loop </strong><br />
This attribute is used to have the audio replay every time it is finished.<br /><br />
&lt;audio controls autoplay <strong>loop </strong> &gt;<br />

Currently, there are three supported file formats for the &lt;audio&gt; element: MP3, WAV, and OGG.




          <h1><strong>Attributes of &lt;video&gt;</strong></h1>

                Another aspect shared by both the audio and the video elements is that each  <br />
                has <strong> controls</strong>, <strong>autoplay</strong> and <strong> loop</strong> attributes. <br /> <br />

                In this example, the video will replay after it finishes playing: <br /> <br />
                &lt;video controls  <strong>autoplay</strong> <strong> loop</strong>&gt; <br />
                &lt;source src="video.mp4" type="video/mp4"&gt; <br />
                &lt;source src="video.ogg" type="video/ogg"&gt; <br />
                Video is not supported by your browser <br />
                &lt;/video&gt; <br />
          <Card style={{ backgroundColor: "#00FF00" }} className="w-50">
            Currently, there are three supported video formats for the &lt;video&gt; element: MP4, WebM, and OGG.
                </Card>


          <h1><strong>Progress Bar</strong></h1>

                The <span className="text-info"><strong> &lt;progress&gt;</strong></span> element provides the ability to create progress bars on the web.<br />
                The progress element can be used within headings, paragraphs, or anywhere else in the body.<br /><br />

          <strong>  Progress Element Attributes</strong><br />
          <strong> Value</strong>: Specifies how much of the task has been completed.<br />
          <strong> Max</strong>: Specifies how much work the task requires in total.<br /><br />

          <strong> Example:</strong><br />
                Status: &lt;progress min="0" <strong> max</strong>="100" <strong> value</strong>="35"&gt;<br />
          <strong> &lt;/progress&gt;</strong><br />

          <h2><strong>Result:</strong></h2>
          <Card className="imgclasss w-50">
            <img src={Html_img25}></img>
          </Card><br />
          <Card style={{ backgroundColor: "#00FF00" }} className="w-50">
            Use the &lt;progress&gt; tag in conjunction with JavaScript to dynamically display a task's progress.
                 </Card><br />



          <h1><strong>HTML5 Web Storage</strong></h1>


                  With HTML5 web storage, websites can store data on a user's local computer.<br />
                  Before HTML5, we had to use <strong> JavaScript cookies</strong> to achieve this functionality.<br /><br />

          <strong> The Advantages of Web Storage</strong><br />
                  - More secure<br />
                  - Faster<br />
                  - Stores a larger amount of data<br />
                  - Stored data is not sent with every server request<br />
          <Card style={{ backgroundColor: "#00FF00" }} className="w-50">
            Local storage is per domain. All pages from one domain can store and access the same data.
                  </Card><br />



          <h1><strong>Types of Web Storage Objects</strong></h1><br />


                  There are two types of web storage objects:<br />
                  - <strong> sessionStorage()</strong><br />
                  - <strong> localStorage()</strong><br /><br />

          <strong> Local </strong>vs. <strong> Session</strong><br />
                  - Session Storage is destroyed once the user closes the browser<br />
                  - Local Storage stores data with no expiration date<br />
          <Card style={{ backgroundColor: "#00FF00" }} className="w-50">
            You need to be familiar with basic JavaScript in order to understand and use the API.
                  </Card><br />


          <h1><strong>Working with Values</strong></h1><br />

                  The syntax for web storage for both local and session storage is very simple and similar.<br />
                  The data is stored as key/value pairs.<br /><br />

          <strong> Storing a Value:</strong>localStorage.<strong>setItem </strong>("key1", "value1");<br />
          <strong> Getting a Value:</strong>//this will print the value<br />
                  alert(localStorage.<strong>getItem </strong>("key1")); <br />
          <strong> Removing a Value:</strong>localStorage.<strong> removeItem</strong>("key1");<br />
          <strong> Removing All Values:</strong>localStorage.<strong>clear() </strong>;<br />
          <Card style={{ backgroundColor: "#00FF00" }} className="w-50">
            The same syntax applies to the session storage, with one difference: Instead of localStorage, sessionStorage is used.
                  </Card><br />


          <h1><strong>What is the Geolocation API?</strong></h1><br />

                  In HTML5, the Geolocation API is used to obtain the user's geographical location.<br />
                  Since this can compromise user privacy, the option is not available unless the user approves it.<br />
          <Card style={{ backgroundColor: "#00FF00" }} className="w-50">
            Geolocation is much more accurate for devices with GPS, like smartphones and the like.
                  </Card><br />

          <h1><strong>Using HTML Geolocation</strong></h1><br />
                  The Geolocation API’s main method is getCurrentPosition, which retrieves the current geographic <br />
                  location of the user's device.navigator.geolocation.getCurrentPosition();<br />
                  Parameters:<br />
          <strong>showLocation (mandatory) </strong>: Defines the callback method that retrieves location information.<br />
          <strong>ErrorHandler(optional) </strong>: Defines the callback method that is invoked when an error occurs in processing the asynchronous call.<br />
          <strong>Options (optional) </strong>: Defines a set of options for retrieving the location information.<br />
          <Card style={{ backgroundColor: "#00FF00" }} className="w-50">
            You need to be familiar with basic JavaScript in order to understand and use the API.
                  </Card><br />



          <h1><strong>Presenting Data</strong></h1><br />
                  User location can be presented in two ways: Geodetic and Civic.<br /><br />

                  1. The geodetic way to describe position refers directly to latitude and longitude.<br />
                  2. The civic representation of location data is presented in a format that is more easily read <br />
                  and understood by the average person.<br /><br />

                  Each parameter has both a geodetic and a civic representation:
          <Card className="imgclasss w-50">
            <img src={Html_img26}></img>
          </Card>
          <Card style={{ backgroundColor: "#00FF00" }} className="w-50">
            The getCurrentPosition() method returns an object if it is successful.
            The latitude, longitude, and accuracy properties are always returned.
                </Card><br />


          <h1><strong>Making Elements Draggable</strong></h1><br />

                The drag and drop feature lets you "grab" an object and drag it to a different location.<br />
                To make an element draggable, just set the draggable attribute to true:&lt;img draggable="true" /&gt;<br />
                The API for HTML5 drag and drop is event-based.<br /><br />

                &lt;!DOCTYPE HTML&gt;<br />
                &lt;html&gt;<br />
                &lt;head&gt;<br />
                &lt;script&gt;<br />
                function allowDrop&#40;ev&#41; &#123; <br />
                ev &#46; preventDefault&#40;&#41;&#59;<br />
                &#125;<br /><br />

                function drag(ev) &#123;<br />
                ev.dataTransfer.setData("text", ev.target.id);<br />
                &#125;<br /><br />

                function drop(ev) &#123;<br />
                ev.preventDefault();<br />
                var data = ev.dataTransfer.getData("text");<br />
                ev.target.appendChild(document.getElementById(data));<br />
                &#125;<br />
                &lt;/script&gt;<br />
                &lt;/head&gt;<br />
                &lt;body&gt;<br /><br />

                &lt;div id="box" <strong>ondrop </strong>="drop(event)"<br />
          <strong>ondragover </strong>="allowDrop(event)"<br />
                style="border:1px solid black; <br />
                width:200px; height:200px"&gt;&lt;/div&gt;<br /><br />


                &lt;img id="image" src="sample.jpg" <strong> draggable</strong>="true"<br />
          <strong> ondragstart</strong>="drag(event)" width="150" height="50" alt="" /&gt;<br /><br />

                &lt;/body&gt;<br />
                &lt;/html&gt;<br /><br />

          <h1><strong>What to Drag</strong></h1><br />
                When the element is dragged, the <strong> ondragstart </strong>attribute calls a function, drag(event), which specifies what data is to be dragged.<br />
                The dataTransfer.setData() method sets the data type and the value of the dragged data:<br />
                function drag(ev) &#123;<br />
                ev.<strong> dataTransfer.setData</strong>("text", ev.target.id);<br />
                &#125;<br />
                In our example, the data type is "text" and the value is the ID of the draggable element ("image").<br /><br />

          <h1><strong>Where to Drop</strong></h1><br />
                The<strong> ondragover</strong>  event specifies where the dragged data can be dropped. <br />
                By default, data and elements cannot be dropped in other elements. <br />
                To allow a drop, we must prevent the default handling of the element.<br />
                This is done by calling the event.<strong> preventDefault()</strong> method for the <strong>ondragover </strong> event.<br />ondragover

                <h1><strong>Do the Drop</strong></h1><br />
                When the dragged data is dropped, a drop event occurs.<br />
                In the example above, the <strong> ondrop </strong>attribute calls a function, drop(event):<br />
                function drop(ev) &#123;<br />
                ev.preventDefault();<br />
                var data = ev.dataTransfer.getData("text");<br />
                ev.target.appendChild(document.getElementById(data));<br />
                &#125;<br />

                The<strong>preventDefault() </strong>method prevents the browser's default handling of the data(default is open as link on drop).<br />
                The dragged data can be accessed with the <strong> dataTransfer.getData()</strong> method.<br />
                This method will return any data that was set to the same type in the setData() method.<br />
                The dragged data is the ID of the dragged element ("image").<br /><br />

                At the end, the dragged element is appended into the drop element, using the appendChild() function. <br /><br />


          <h1><strong>Drawing Shapes</strong></h1>

                SVG stands for Scalable Vector Graphics, and is used to draw shapes with HTML-style markup.<br />
                It offers several methods for drawing paths, boxes, circles, text, and graphic images.<br />
          <Card style={{ backgroundColor: "#00FF00" }} className="w-50">
            SVG is not pixel-based, so it can be magnified infinitely with no loss of quality.
                </Card><br /><br />


          <h1><strong>Inserting SVG Images</strong></h1>

                An SVG image can be added to HTML code with just a basic image tag that includes a source attribute pointing to the image:<br />
                &lt;img src="image.svg" alt="" height="300" /&gt;<br />
          <Card style={{ backgroundColor: "#00FF00" }} className="w-50">
            SVG defines vector-based graphics in XML format.<br /><br />
          </Card><br />



          <h1><strong>Drawing a Circle</strong></h1>

                To draw shapes with SVG, you first need to create an SVG element tag with two attributes: width and height.<br />
                &lt;svg <strong> width</strong>="1000" <strong> height</strong>="1000"&gt;&lt;/svg&gt;<br />
                To create a circle, add a <span className="text-info"><strong> &lt;circle&gt;;</strong></span> tag:<br /><br />
                &lt;svg width="2000" height="2000"&gt;<br />
                &lt;circle cx="80" cy="80" r="50" fill="green" /&gt;<br />
                &lt;/svg&gt;<br /><br />

                - cx pushes the center of the circle further to the right of the screen<br />
                - cy pushes the center of the circle further down from the top of the screen<br />
                - r defines the radius<br />
                - fill determines the color of our circle<br />
                - stroke adds an outline to the circle<br />

          <h2><strong>Result:</strong></h2>
          <Card className="imgclasss w-50">
            <img src={Html_img27}></img>
          </Card><br />
          <Card style={{ backgroundColor: "#00FF00" }} className="w-50">
            Every element and every attribute in SVG files can be animated.
                </Card><br />

          <h1><strong>Other Shape Elements</strong></h1>

          <span className="text-info"><strong> &lt;rect&gt;</strong></span>  defines a rectangle:<br />
                &lt;svg width="2000" height="2000"&gt;<br />
          <strong> &lt;rect</strong> width="300" height="100" <br />
                x="20" y="20" fill="green" /&gt;<br />
                &lt;/svg&gt;<br />
                The following code will draw a green-filled rectangle.<br />
                <Card className="imgclasss w-50">
            <img src={Html_img28}></img>
          </Card><br />
          <span className="text-info"><strong> &lt;line&gt;</strong></span> defines a line segment:<br /><br />
                &lt;svg width="400" height="410"&gt;<br />
                &lt;line x1="10" y1="10" x2="200" y2="100" <br />
                style="stroke:#000000; stroke-linecap:round; <br />
                stroke-width:20" /&gt;<br />
                &lt;/svg&gt;<br />
                (x1, y1) define the start coordinates(x2, y2) define the end coordinates.<br />
                <Card className="imgclasss w-50">
            <img src={Html_img29}></img>
          </Card><br />

          <span className="text-info"><strong>  &lt;polyline&gt;</strong></span> defines shapes built from multiple line definitions:<br /><br />
                &lt;svg width="2000" height="500"&gt;<br />
                &lt;polyline style="stroke-linejoin:miter; stroke:black; <br />
                stroke-width:12; fill: none;"<br />
                points="100 100, 150 150, 200 100" /&gt;<br />
                &lt;/svg&gt;<br />
                Points are the polyline's coordinates.<br />
                The code below will draw a black check sign:<br /><br />
                <Card className="imgclasss w-50">
            <img src={Html_img30}></img>
          </Card><br />
          <Card style={{ backgroundColor: "#00FF00" }} className="w-50">
            The width and height attributes of the &lt;rect&gt; element define the height and the width of the rectangle.
                </Card><br />

          <h1><strong>&lt;ellipse&gt; and &lt;polygon&gt;</strong></h1><br />

          <h1><strong>Ellipse</strong></h1>
                The <strong> &lt;ellipse&gt;</strong> is similar to the <strong> &lt;circle&gt;</strong>, with one exception:<br />
                You can independently change the horizontal and vertical axes of its radius, using the <strong> rx</strong> and <strong> ry</strong> attributes.<br />
                &lt;svg height="500" width="1000"&gt;<br />
                &lt;ellipse cx="200" cy="100" rx="150" ry="70" style="fill:green" /&gt;<br />
                &lt;/svg&gt;<br />
                <Card className="imgclasss w-50">
            <img src={Html_img31}></img>
          </Card><br />

          <h1><strong>Polygon</strong></h1>
                  The <span className="text-info"><strong> &lt;polygon&gt;</strong></span> element is used to create a graphic with at least three sides.<br />
                  The polygon element is unique because it automatically closes off the shape for you.<br />
                  &lt;svg width="2000" height="2000"&gt;<br />
                  &lt;polygon points="100 100, 200 200, 300 0" <br />
                  style="fill: green; stroke:black;" /&gt;<br />
                  &lt;/svg&gt;<br />
          <Card className="imgclasss w-50">
            <img src={Html_img32}></img>
          </Card><br />
          <Card style={{ backgroundColor: "#00FF00" }} className="w-50">
            Polygon comes from Greek. "Poly" means "many" and "gon" means "angle."
                </Card><br />


          <h1><strong>Shape Animations</strong></h1>

                SVG animations can be created using the  <span className="text-info"><strong> &lt;animate&gt;</strong></span> element.<br />

                The example below creates a rectangle that will change its position in 3 seconds and <br />
                will then repeat the animation twice:<br />
                &lt;svg width="1000" height="250"&gt;<br />
                &lt;rect width="150" height="150" fill="orange"&gt;<br />
          <strong>&lt;animate</strong> attributeName="x" from="0" to="300"<br />
          <strong>dur</strong>="3s" <strong>fill</strong>="freeze" <strong>repeatCount </strong>="2"/&gt; <br />
                &lt;/rect&gt;<br />
                &lt;/svg&gt;<br />
          <br />
          <strong>attributeName:</strong> Specifies which attribute will be affected by the animation<br />
          <strong>from:</strong> Specifies the starting value of the attribute<br />
          <strong>to: </strong> Specifies the ending value of the attribute<br />
          <strong>dur:</strong> Specifies how long the animation runs (duration)<br />
          <strong>fill: </strong> Specifies whether or not the attribute's value should return to its initial value <br />
                when the animation is finished (Values: "remove" resets the value; "freeze" keeps the “to value”)<br />
          <strong> </strong>repeatCount: Specifies the repeat count of the animation<br /><br />

                In the example above, the rectangle changes its x attribute from 0 to 300 in 3 seconds.<br />
          <Card style={{ backgroundColor: "#00FF00" }} className="w-50">
            To repeat the animation indefinitely, use the value "indefinite" for the repeatCount attribute.
                </Card><br />


          <h1><strong>Paths</strong></h1><br />

                The &lt;path&gt; element is used to define a path.<br />

                The following commands are available for path data:<br />
          <strong>M</strong> : moveto<br />
          <strong>L</strong> : lineto<br />
          <strong>H</strong> : horizontal lineto<br />
          <strong>V</strong> : vertical lineto<br />
          <strong>C</strong> : curveto<br />
          <strong>S</strong> : smooth curveto<br />
          <strong>Q</strong> : quadratic Bézier curve<br />
          <strong>T</strong> : smooth quadratic Bézier curveto<br />
          <strong>A</strong> : elliptical Arc<br />
          <strong>Z</strong>: closepath<br /><br />

                Define a path using the d attribute:<br />
                &lt;svg width="500" height="500"&gt;<br />
          <strong> path</strong>&lt; d="M 0 0 L200 200 L200 0 Z" style="stroke:#000; fill:none;" /&gt;<br />
                &lt;/svg&gt;<br /><br />

                M places our "virtual pen" down at the position 0, 0. <br />
                It then moves 200px down and to the right, then moves up to the position 200, 0.<br />
                The Z command closes the shape, which results in a hypotenuse:<br />
          <Card className="imgclasss w-50">
            <img src={Html_img33}></img>
          </Card><br />
          <Card style={{ backgroundColor: "#00FF00" }} className="w-50">
            All of the above commands can also be expressed with lower case letters. When capital letters are used,
            it indicates absolute position; lower case indicates relative position.
                </Card><br />


          <h1><strong>The &lt;canvas&gt;Element</strong></h1><br />

                The HTML canvas is used to draw graphics that include everything from simple lines to complex graphic objects.<br /><br />

                The <span className="text-info"><strong>&lt;canvas&gt;</strong></span>element is defined by:<br />
          <strong>&lt;canvas</strong> id="canvas1" width="200" height="100"&gt;<br />
          <strong>&lt;/canvas&gt;</strong><br /><br />
          <Card style={{ backgroundColor: "#00FF00" }} className="w-50">
            The &lt;canvas&gt;element is only a container for graphics. <br />
                You must use a script to actually draw the graphics (usually JavaScript).<br />
          </Card><br />

                The &lt;canvas&gt;element must have an <strong>id attribute </strong> so it can be referred to by JavaScript:&lt;html&gt;<br />
                &lt;head&gt;&lt;/head&gt;<br />
                &lt;body&gt;<br />
          <strong> &lt;canvas id </strong>="canvas1" <br />
                width="400" height="300"&gt;<strong> &lt;/canvas&gt; </strong><br /><br />

                &lt;script&gt;<br />
                var can = document.getElementById("canvas1"); <br />
                var ctx = can.getContext("2d");<br />
                &lt;/script&gt;<br /><br />

                &lt;/body&gt;<br />
                &lt;/html&gt;<br />

          <strong>getContext() </strong> returns a drawing context on the canvas.<br />
          <Card style={{ backgroundColor: "#00FF00" }} className="w-50">
            Basic knowledge of JavaScript is required to understand and use the Canvas.
                </Card><br />


          <h1><strong>Canvas Coordinates</strong></h1><br />

                The HTML canvas is a two-dimensional grid.<br />
                The upper-left corner of the canvas has the coordinates (0,0).<br /><br />

                X coordinate increases to the right.<br />
                Y coordinate increases toward the bottom of the canvas.<br />
          <Card className="imgclasss w-50">
            <img src={Html_img34}></img>
          </Card><br />
          <Card style={{ backgroundColor: "#00FF00" }} className="w-50">
            The &lt;canvas &gt; element is only a container for graphics.
                </Card><br />


          <h1><strong>Drawing Shapes</strong></h1><br />

                The <strong>fillRect </strong>(x, y, w, h) method draws a "filled" rectangle, in which w indicates width and h indicates height.<br />
                The default fill color is black.<br />
          <br />
                A black 100*100 pixel rectangle is drawn on the canvas at the position (20, 20):<br /><br />
                var c=document.getElementById("canvas1");<br />
                var ctx=c.getContext("2d");<br />
                ctx.<strong>fillRect </strong>(20,20,100,100);<br /><br />

          <h2><strong>Result:</strong></h2>
          <Card className="imgclasss w-50">
            <img src={Html_img35}></img>
          </Card><br />

                The <strong> </strong>fillStyle property is used to set a color, gradient, or pattern to fill the drawing.<br />
                Using this property allows you to draw a green-filled rectangle.<br /><br />
                var canvas=document.getElementById("canvas1");<br />
                var ctx=canvas.getContext("2d");<br />
                ctx.fillStyle ="rgba(0, 200, 0, 1)";<br />
                ctx.fillRect (36, 10, 22, 22);<br /><br />

          <h2><strong>Result:</strong></h2>
          <Card className="imgclasss w-50">
            <img src={Html_img36}></img>
          </Card><br />
                The canvas supports various other methods for drawing:<br /><br />


          <h1><strong><u>Draw a Line</u></strong></h1>
                moveTo(x,y): Defines the starting point of the line.<br />
                lineTo(x,y): Defines the ending point of the line.<br /><br />

          <h1><strong><u>Draw a Circle</u></strong></h1>
                beginPath(): Starts the drawing.<br />
                arc(x,y,r,start,stop): Sets the parameters of the circle.<br />
                stroke(): Ends the drawing.<br /><br />

          <h1><strong><u>Gradients</u></strong></h1>
                createLinearGradient(x,y,x1,y1): Creates a linear gradient.<br />
                createRadialGradient(x,y,r,x1,y1,r1): Creates a radial/circular gradient.<br /><br />

          <h1><strong><u>Drawing Text on the Canvas</u></strong></h1>
                Font: Defines the font properties for the text.<br />
                fillText(text,x,y): Draws "filled" text on the canvas.<br />
                strokeText(text,x,y): Draws text on the canvas (no fill).<br /><br />
          <Card style={{ backgroundColor: "#00FF00" }} className="w-50">
            There are many other methods aimed at helping to draw shapes and images on the canvas.
                  </Card><br />


          <h1><strong><u>Canvas vs. SVG</u></strong></h1>

          <h1><strong><u>Canvas</u></strong></h1>
                  - Elements are drawn programmatically<br />
                  - Drawing is done with pixels<br />
                  - Animations are not built in<br />
                  - High performance for pixels-based drawing operations<br />
                  - Resolution dependent<br />
                  - No support for event handlers<br />
                  - You can save the resulting image as .png or .jpg<br />
                  - Well suited for graphic-intensive games<br /><br />

          <h1><strong><u>SVG</u></strong></h1>
                  - Elements are part of the page's DOM (Document object model)<br />
                  - Drawing is done with vectors<br />
                  - Effects, such as animations are built in<br />
                  - Based on standard XML syntax, which provides better accessibility<br />
                  - Resolution independent<br />
                  - Support for event handlers<br />
                  - Not suited for game applications<br />
                  - Best suited for applications with large rendering areas (for example, Google Maps)<br />
          <Card style={{ backgroundColor: "#00FF00" }} className="w-50">
            You can actually use both SVG and canvas on the same page, if needed.
            However, you cannot just draw SVG onto a canvas, or vice-versa.
                  </Card><br />


          <h1><strong>Working with Canvas</strong></h1>

                  The Canvas element can be transformed. <br />
                  As an example, a text is written on the canvas at the coordinates (10, 30).<br />
                  ctx.<strong>font </strong>="bold 22px Tahoma";<br />
                  ctx.<strong>textAlign </strong>="start";<br />
                  ctx.<strong>fillText</strong>("start", 10, 30);<br />
          <h2><strong>Result:</strong></h2>
          <Card className="imgclasss w-50">
            <img src={Html_img37}></img>
          </Card><br />
                The <strong>translate(x,y) </strong> method is used to move the Canvas.<br />
                x indicates how far to move the grid horizontally, and y indicates how far to move the grid vertically.<br />
                ctx.<strong>translate </strong>(100, 150);<br />
                ctx.fillText("after translate", 10, 30);<br /><br />

                In this example, the canvas is moved 100px to the right, and 150px down.<br />
          <h2><strong>Result:</strong></h2>
          <Card className="imgclasss w-50">
            <img src={Html_img38}></img>
          </Card><br />
          <Card style={{ backgroundColor: "#00FF00" }} className="w-50">
            Canvas has several methods for drawing paths, boxes, circles, text, and adding images.
                  </Card><br />

          <h1><strong>The rotate() Method</strong></h1>

                  The <strong> rotate()</strong> method is used to rotate the HTML5 Canvas. The value must be in radians, not degrees.<br /><br />

                  Here is an example that draws the same rectangle before and after rotation is set:<br />
                  ctx.fillStyle = "#FF0000";<br />
                  ctx.fillRect(10,10, 100, 100);<br /><br />

                  ctx.<strong>rotate </strong>( (Math.PI / 180) * 25); //rotate 25 degrees.<br /><br />

                  ctx.fillStyle = "#0000FF";<br />
                  ctx.fillRect(10,10, 100, 100);<br />
          <Card className="imgclasss w-50">
            <img src={Html_img39}></img>
          </Card><br />
          <Card style={{ backgroundColor: "#00FF00" }} className="w-50">
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

                  This will scale the canvas 1.5 times in the X-direction, and 4 times in Y-direction:
                  <Card>
            Image
                  </Card>
          <Card style={{ backgroundColor: "#00FF00" }} className="w-50">
            If you scale a drawing, all future drawings will also be scaled.
                  </Card><br />


          <h1><strong>HTML5 Forms</strong></h1>

                  HTML5 brings many features and improvements to web form creation. <br />
                  There are new attributes and input types that were introduced to help create better experiences for web users.<br /><br />

                  Form creation is done in HTML5 the same way as it was in HTML4:<br />
                  &lt;form&gt;<br />
                  &lt;label&gt;Your name:&lt;/label&gt;<br />
                  &lt;input id="user" name="username" type="text" /&gt;<br />
                  &lt;/form&gt;<br /><br />
          <Card style={{ backgroundColor: "#00FF00" }} className="w-50">
            Use the novalidate attribute to avoid form validation on submissions.
                  </Card><br />
                  Use the novalidate attribute to avoid form validation on submissions.

                  <h1><strong>New Attributes</strong></h1>

                  HTML5 has introduced a new attribute called <strong>placeholder. </strong><br />
                   On <span className="text-info"><strong> &lt;input&gt;</strong></span>
                   and <span className="text-info"><strong>&lt;textarea&gt;</strong></span> elements, this attribute provides a hint <br />
                   to the user of what information can be entered into the field.<br />
                  &lt;form&gt;<br />
                  &lt;label for="email"&gt;Your e-mail address: &lt;/label&gt; <br />
                  &lt;input type="text" name="email" <strong>placeholder </strong>="email@example.com" /&gt; <br />
                  &lt;/form&gt;<br />

          <h2><strong>Result:</strong></h2>
          <Card className="imgclasss w-50">
            <img src={Html_img40}></img>
          </Card><br />
                The <strong>autofocus </strong> attribute makes the desired input focus when the form loads:
                &lt;form&gt;
                &lt;label for="email"&gt;Your e-mail address: &lt;/label&gt;
                &lt;input type="text" name="email" <strong>autofocus </strong>/&gt;
                &lt;/form&gt;
                <h2><strong>Result:</strong></h2>
          <Card className="imgclasss w-50">
            <img src={Html_img41}></img>
          </Card><br />
          <Card style={{ backgroundColor: "#00FF00" }} className="w-50">
            The required attribute tells the browser that the input is required.
                  </Card><br />

          <h1><strong>Forms with Required Fields</strong></h1>

                  The <strong> </strong>"required" attribute is used to make the input elements required.<br />
                  &lt;form <strong> </strong>autocomplete="off"&gt;<br />
                  &lt;label for="e-mail"&gt;Your e-mail address: &lt;/label&gt;<br />
                  &lt;input name="Email" type="text" required /&gt;<br />
                  &lt;input type="submit" value="Submit"/&gt;<br />
                  &lt;/form&gt;<br /><br />
                  The form will not be submitted without filling in the required fields.<br />
          <h2><strong>Result:</strong></h2>
          <Card className="imgclasss w-50">
            <img src={Html_img42}></img>
          </Card><br />
          <Card style={{ backgroundColor: "#00FF00" }} className="w-50">
            The <strong>autocomplete  </strong>attribute specifies whether a form or input field should have <br />
                autocomplete turned on or off.When autocomplete is on, the browser automatically complete<br />
                 values based on values that the user has entered before.<br />
          </Card><br />

          <h1><strong><u>HTML5 added several new input types:</u></strong></h1>
                - color<br />
                - date<br />
                - datetime<br />
                - datetime-local<br />
                - email<br />
                - month<br />
                - number<br />
                - range<br />
                - search<br />
                - tel<br />
                - time<br />
                - url<br />
                - week<br /><br />

          <h1><strong><u>New input attributes in HTML5:</u></strong></h1>
                - autofocus<br />
                - form<br />
                - formaction<br />
                - formenctype<br />
                - formmethod<br />
                - formnovalidate<br />
                - formtarget<br />
                - height and width<br />
                - list<br />
                - min and max<br />
                - multiple<br />
                - pattern (regexp)<br />
                - placeholder<br />
                - required<br />
                - step<br />
          <Card style={{ backgroundColor: "#00FF00" }} className="w-50">
            Input types that are not supported by old web browsers, will behave as input type text.
                </Card><br />

          <h1><strong>Creating a Search Box</strong></h1>

                The new <strong>search </strong> input type can be used to create a search box:<br />
               &lt;input id="mysearch" name="searchitem" type= <strong>"search" </strong> /&gt;<br />
          <h2><strong>Result:</strong></h2>
          <Card className="imgclasss w-50">
            <img src={Html_img43}></img>
          </Card><br />
          <Card style={{ backgroundColor: "#00FF00" }} className="w-50">
            You must remember to set a name for your input; otherwise, nothing will be submitted.
                </Card><br />


          <h1><strong>Search Options</strong></h1>
                The <span className="text-info"><strong> &lt;datalist&gt;</strong></span> tag can be used to define a list of pre-defined options for the search field:<br /><br />
                &lt;input id="car" type="text" <strong>list</strong>="colors" /&gt;<br />
                &lt;<strong>datalist id </strong>="colors"&gt;<br />
                &lt;option value="Red"&gt;<br />
                &lt;option value="Green"&gt;<br />
                &lt;option value="Yellow"&gt;<br />
                &lt;/datalist&gt;<br />
          <h2><strong>Result:</strong></h2>
          <Card className="imgclasss w-50">
            <img src={Html_img44}></img>
          </Card><br />
          <span className="text-info"><strong> &lt;option&gt; </strong></span> defines the options in a drop-down list for the user to select.
          <Card style={{ backgroundColor: "#00FF00" }} className="w-50">
            The ID of the datalist element must match with the list attribute of the input box.
          </Card><br />


          <h1><strong>HTML Entities</strong></h1>
                Some characters are reserved in HTML.<br />
                If you use the less than (&lt;) or greater than (&gt;) signs in your text, the browser might mix them with tags.<br />
                Character entities are used to display reserved characters in HTML.<br />
                A character entity looks like this:<br />
                &#38;entity_name;<br />
                OR<br />
                &#38;#entity_number;<br />
                 To display a less than sign (&lt;) we must write: <strong>&#38;lt;</strong> or <strong>&#38;#60; </strong><br /><br />
          <strong>Advantage of using an entity name: </strong> An entity name is easy to remember.<br />
          <strong>Disadvantage of using an entity name:  </strong>Browsers may not support all entity names, <br />
                but the support for numbers is good.<br />

          <h1><strong>Non-breaking Space</strong></h1>
                A common character entity used in HTML is the non-breaking space:<strong>&#38;nbsp;</strong><br />
                A non-breaking space is a space that will not break into a new line.<br />
                Two words separated by a non-breaking space will stick together (not break into a new line).<br />
                 This is handy when breaking the words might be disruptive.<br />
                Examples:<br />
                •	§ 10<br />
                •	10 km/h<br />
                •	10 PM<br /><br />
                Another common use of the non-breaking space is to prevent browsers from truncating spaces in HTML pages.<br />
                If you write 10 spaces in your text, the browser will remove 9 of them.<br />
                To add real spaces to your text, you can use the <strong>&#38;nbsp;</strong> character entity.<br /><br />

                The non-breaking hyphen <span className="text-primary"><strong>(&#38;#8209;) </strong></span> lets you use a hyphen character ( ) that won't break.<br />

          <table class="table table-striped w-50">
            <thead>
              <tr>
                <th scope="col"><strong>Result </strong></th>
                <th scope="col"><strong>Description </strong></th>
                <th scope="col"><strong>Entity Name </strong></th>
                <th scope="col"><strong>Entity Number </strong></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row"> </th>
                <td>non-breaking space</td>
                <td>&#38;nbsp;</td>
                <td>&#38;#160;</td>
              </tr>
              <tr>
                <th scope="row">&lt;</th>
                <td>less than</td>
                <td>&#38;lt;</td>
                <td>&#38;#60;</td>
              </tr>
              <tr>
                <th scope="row">&gt;</th>
                <td>greater than</td>
                <td>&#38;</td>
                <td>&#38;</td>
              </tr>
              <tr>
                <th scope="row">&#38;</th>
                <td>ampersand	</td>
                <td>&#38;amp;</td>
                <td>&#38;#38;</td>
              </tr>
              <tr>
                <th scope="row">&#34;</th>
                <td>	double quotation mark</td>
                <td>&#38;quot;</td>
                <td>&#38;#34;</td>
              </tr>
              <tr>
                <th scope="row">&#39;</th>
                <td>single quotation mark (apostrophe)</td>
                <td>&#38;apos;</td>
                <td>&#38;#39;</td>
              </tr>
              <tr>
                <th scope="row">&#162;</th>
                <td>	cent</td>
                <td>&#38;cent;</td>
                <td>&#38;#162;</td>
              </tr>
              <tr>
                <th scope="row">	&#163;</th>
                <td>pound	</td>
                <td>&#38;pound;</td>
                <td>&#38;##163;</td>
              </tr>
              <tr>
                <th scope="row">&#165;</th>
                <td>yen</td>
                <td>&#38;yen;</td>
                <td>&#38;#165;</td>
              </tr>
              <tr>
                <th scope="row">&#8364;</th>
                <td>euro</td>
                <td>&#38;euro;</td>
                <td>&#38;#8364;</td>
              </tr>
              <tr>
                <th scope="row">&#169;</th>
                <td>copyright</td>
                <td>&#38;copy;</td>
                <td>&#38;#169;</td>
              </tr>
              <tr>
                <th scope="row">&#174;</th>
                <td>registered trademark</td>
                <td>&#38;reg;</td>
                <td>&#38;#174;</td>
              </tr>
            </tbody>
          </table><br /><br />


          <h1><strong> Combining Diacritical Marks</strong></h1>

              A diacritical mark is a "glyph" added to a letter.<br />
              Some diacritical marks, like grave (&#768;  ) and acute ( &#769; ) are called accents.<br />
              Diacritical marks can appear both above and below a letter, inside a letter, and between two letters.<br />
              Diacritical marks can be used in combination with alphanumeric characters to produce a character
              that is not present in the character set (encoding) used in the page.<br />
              Here are some examples:<br />


          <table class="table table-striped w-50">
            <thead>
              <tr>
                <th scope="col"><strong> Mark </strong></th>
                <th scope="col"><strong>	Character </strong></th>
                <th scope="col"><strong>Construct </strong></th>
                <th scope="col"><strong>	Result </strong></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">&#768; </th>
                <td><strong>a</strong></td>
                <td><strong>a&#38;#768;</strong></td>
                <td><strong>a&#768;</strong></td>
              </tr>
              <tr>
                <th scope="row">&#769; </th>
                <td><strong>a</strong></td>
                <td><strong>a&#38;#769;</strong></td>
                <td><strong>a&#769;</strong></td>
              </tr>
              <tr>
                <th scope="row">&#770; </th>
                <td><strong>a</strong></td>
                <td><strong>a&#38;#770;</strong></td>
                <td><strong>a&#770;</strong></td>
              </tr>
              <tr>
                <th scope="row">&#771; </th>
                <td><strong>a</strong></td>
                <td><strong>a&#38;#771;</strong></td>
                <td><strong>a&#771;</strong></td>
              </tr>
              <tr>
                <th scope="row">&#768; </th>
                <td><strong>O</strong></td>
                <td><strong>O&#38;#768;</strong></td>
                <td><strong>O&#768;</strong></td>
              </tr>
              <tr>
                <th scope="row">&#769; </th>
                <td><strong>O</strong></td>
                <td><strong>O&#38;#769;</strong></td>
                <td><strong>O&#769;</strong></td>
              </tr>
              <tr>
                <th scope="row">&#770; </th>
                <td><strong>O</strong></td>
                <td><strong>O&#38;#770;</strong></td>
                <td><strong>O&#770;</strong></td>
              </tr>
              <tr>
                <th scope="row">&#771; </th>
                <td><strong>O</strong></td>
                <td><strong>O&#38;#771;</strong></td>
                <td><strong>O&#771;</strong></td>
              </tr>
            </tbody>
          </table><br /><br />

          <h1><strong>HTML - The Head Element</strong></h1>
              The HTML<span className="text-danger"><strong>&lt;head&gt; </strong></span>  element is a container for all the head elements: <br />
          <span className="text-danger"><strong>&lt;title&gt; </strong></span>,
              <span className="text-danger"><strong>&lt;style&gt; </strong></span>,
              <span className="text-danger"><strong>&lt;meta&gt; </strong></span>,
              <span className="text-danger"><strong>&lt;link&gt; </strong></span>,
              <span className="text-danger"><strong>&lt;script&gt; </strong></span>,
              and <span className="text-danger"><strong>&lt;base&gt; </strong></span>.<br /><br />

          <h1><strong>The HTML &lt;head&gt; Element</strong></h1>

              The <span className="text-danger"><strong>&lt;head&gt; </strong></span>  element is a container for metadata (data about data) and is placed <br />
              between the <span className="text-danger"><strong>&lt;html&gt; </strong></span>  tag and the
              <span className="text-danger"><strong>&lt;body&gt; </strong></span> <br />

              HTML metadata is data about the HTML document. Metadata is not displayed.<br /><br />

              Metadata typically define the document title, character set, styles, scripts, and other meta information.<br /><br />


          <h1><strong>The HTML &lt;title&gt; Element</strong></h1>
              The <span className="text-danger"><strong>&lt;title&gt; </strong></span> element defines the title of the document, and is required in all HTML documents.<br />
              The <span className="text-danger"><strong>&lt;title&gt; </strong></span> element:<br />
              •	defines a title in the browser tab<br />
              •	provides a title for the page when it is added to favorites<br />
              •	displays a title for the page in search engine results<br /><br />


              A simple HTML document:<br />
          <span className="text-primary"><strong>&lt; </strong></span>
          <span className="text-warning"><strong> !DOCTYPE </strong></span>
          <span className="text-danger"><strong>html</strong></span>
          <span className="text-primary"><strong>&gt;</strong></span><br />
          <span className="text-primary"><strong>&lt; </strong></span>
          <span className="text-warning"><strong>html</strong></span>
          <span className="text-primary"><strong>&gt;</strong></span><br />
          <span className="text-primary"><strong>&lt; </strong></span>
          <span className="text-warning"><strong>head</strong></span>
          <span className="text-primary"><strong>&gt;</strong></span><br />
          <span className="text-primary"><strong>&lt; </strong></span>
          <span className="text-warning"><strong>title</strong></span>
          <span className="text-primary"><strong>&gt;</strong></span>
              Page Title
          <span className="text-primary"><strong>&lt; </strong></span>
          <span className="text-warning"><strong>/title</strong></span>
          <span className="text-primary"><strong>&gt;</strong></span><br />
          
          <span className="text-primary"><strong>&lt; </strong></span>
          <span className="text-warning"><strong>/head</strong></span>
          <span className="text-primary"><strong>&gt;</strong></span><br />
          <span className="text-primary"><strong>&lt; </strong></span>
          <span className="text-warning"><strong>body</strong></span>
          <span className="text-primary"><strong>&gt;</strong></span><br />
              The content of the document......<br />
          <span className="text-primary"><strong>&lt; </strong></span>
          <span className="text-warning"><strong>/body</strong></span>
          <span className="text-primary"><strong>&gt;</strong></span><br />
          <span className="text-primary"><strong>&lt; </strong></span>
          <span className="text-warning"><strong>/html</strong></span>
          <span className="text-primary"><strong>&gt;</strong></span><br /> <br />


          <h1><strong>The HTML &lt;style&gt; Element</strong></h1>
              The <span className="text-danger"><strong>&lt;style&gt;</strong></span> element is used to define style information for a single HTML page:<br /><br />
          <span className="text-primary"><strong>&lt; </strong></span>
          <span className="text-warning"><strong>style</strong></span>
          <span className="text-primary"><strong>&gt;</strong></span><br />
          <span className="text-warning"><strong>body</strong></span> &#123;
          <span className="text-danger"><strong>background-color </strong></span>
          <span className="text-primary"><strong>: powderblue; </strong></span>&#124;<br />
          <span className="text-warning"><strong>h1</strong></span> &#123;
          <span className="text-danger"><strong>color </strong></span>
          <span className="text-primary"><strong>: red; </strong></span>&#124;<br />
          <span className="text-warning"><strong>p</strong></span> &#123;
          <span className="text-danger"><strong>color </strong></span>
          <span className="text-primary"><strong>: blue; </strong></span>&#124;<br />
          <span className="text-primary"><strong>&lt; </strong></span>
          <span className="text-warning"><strong>/style</strong></span>
          <span className="text-primary"><strong>&gt;</strong></span><br /><br />


          <h1><strong>The HTML &lt;link&gt; Element</strong></h1>
          The <span className="text-warning"><strong>&lt;link&gt; </strong></span> element is used to link to external style sheets:<br />
          <span className="text-primary"><strong>&lt; </strong></span>
          <span className="text-warning"><strong>link  </strong></span>
          <span className="text-danger"><strong>rel </strong></span>
          <span className="text-primary"><strong> ="stylesheet"  </strong></span>
          <span className="text-danger"><strong>href </strong></span>
          <span className="text-primary"><strong>="mystyle.css"&gt;</strong></span><br /><br />


          <h1><strong>The HTML &lt;meta&gt; Element</strong></h1>

          The <span className="text-danger"><strong>&lt;meta&gt; </strong></span> element is used to specify which character set is used,
          page description, keywords, author, and other metadata.<br />
          Metadata is used by browsers (how to display content), by search engines (keywords), and other web services.<br /><br />
          Define the character set used:<br />
          <span className="text-primary"><strong> &lt; </strong></span>
          <span className="text-warning"><strong> meta </strong></span>
          <span className="text-danger"><strong>charset </strong></span>
          <span className="text-primary"><strong>="UTF-8"&gt; </strong></span>
          <br /><br />
          Define a description of your web page:
          <span className="text-primary"><strong> &lt; </strong></span>
          <span className="text-warning"><strong> meta </strong></span>
          <span className="text-danger"><strong> name </strong></span>
          <span className="text-primary"><strong>="description" </strong></span>
          <span className="text-danger"><strong>content </strong></span>
          <span className="text-primary"><strong>="TDPVista"&gt; </strong></span>
          <br /><br />
          Define keywords for search engines:
          <span className="text-primary"><strong> &lt; </strong></span>
          <span className="text-warning"><strong> meta </strong></span>
          <span className="text-danger"><strong> name </strong></span>
          <span className="text-primary"><strong>="keywords" </strong></span>
          <span className="text-danger"><strong>content </strong></span>
          <span className="text-primary"><strong>="HTML, CSS, XML, JavaScript"&gt; </strong></span>
          <br /><br />
          Define the author of a page:
          <span className="text-primary"><strong> &lt; </strong></span>
          <span className="text-warning"><strong> meta </strong></span>
          <span className="text-danger"><strong> name </strong></span>
          <span className="text-primary"><strong>="author"  </strong></span>
          <span className="text-danger"><strong>content </strong></span>
          <span className="text-primary"><strong>="TDPVista"&gt; </strong></span>
          <br /><br />
          Refresh document every 30 seconds:
          <span className="text-primary"><strong> &lt; </strong></span>
          <span className="text-warning"><strong> meta </strong></span>
          <span className="text-danger"><strong> http-equiv</strong></span>
          <span className="text-primary"><strong>="refresh" </strong></span>
          <span className="text-danger"><strong>content </strong></span>
          <span className="text-primary"><strong>="30"&gt;</strong></span>
          <br /><br />
          

          <h1><strong>Setting The Viewport</strong></h1>
          In HTML, there is a method to let web designers take control over the viewport, through the
          <span className="text-warning"><strong>&lt;meta&gt;</strong></span> tag.<br /><br />

          The viewport is the user's visible area of a web page. It varies with the device, 
          and will be smaller on a mobile phone than on a computer screen.<br /><br />

          You should include the following  <span className="text-warning"><strong>&lt;meta&gt;</strong></span> viewport element in all your web pages:<br /><br />
        
          <span className="text-primary"><strong> &lt; </strong></span>
          <span className="text-warning"><strong> meta </strong></span>
          <span className="text-danger"><strong> name </strong></span>
          <span className="text-primary"><strong>="viewport" </strong></span>
          <span className="text-danger"><strong>content </strong></span>
          <span className="text-primary"><strong>="width=device-width, initial-scale=1.0"&gt; </strong></span>
          <br /><br />

          A  <span className="text-warning"><strong>&lt;meta&gt;</strong></span> viewport element gives the browser instructions
           on how to control the page's dimensions and scaling.<br /><br />

          The width=device-width part sets the width of the page to follow the screen-width of the device
           (which will vary depending on the device).<br /><br />

          The initial-scale=1.0 part sets the initial zoom level when the page is first loaded by the browser.<br /><br />

          Here is an example of a web page without the viewport meta tag, and the same web page with the viewport
           <span className="text-warning"><strong>&lt;meta&gt;</strong></span> tag:<br /><br />


           <h1><strong>HTML Responsive Web Design</strong></h1>
          Responsive web design is about creating web pages that look good on all devices!<br />
          A responsive web design will automatically adjust for different screen sizes and viewports<br />
          <Card className="imgclasss w-50">
            <img src={Html_img45}></img>
          </Card><br />

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
          Without the viewport meta tag:
          <Card className="imgclasss w-50">
            <img src={Html_img46}></img>
          </Card><br />
          With the viewport meta tag:
          <Card className="imgclasss w-50">
            <img src={Html_img47}></img>
          </Card><br />
          
          <h1><strong> Responsive Images</strong></h1> 
          Responsive images are images that scale nicely to fit any browser size.<br />
          <h2><strong> Using the width Property</strong></h2> 
          If the CSS<span className="text-danger"><strong>width</strong></span> property is set to 100%, the image will be responsive and scale up and down:
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
          but never scale up to be larger than its original size:
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
          Resize the browser window to see how the image below change depending on the width:<br />
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
          That way the text size will follow the size of the browser window:<br />
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
          &#124;<br />


          .main &#123;
          <span className="text-danger"><strong>float </strong></span> :
                    <span className="text-primary"><strong>left </strong></span> ;<br /> 
                    <span className="text-danger"><strong>width </strong></span> :
                    <span className="text-primary"><strong>60% </strong></span> ;
                    <span className="text-success"><strong>/* The width is 60%, by default */ </strong></span><br /> 
            &#124;<br />

          <span className="text-success"><strong>/* Use a media query to add a breakpoint at 800px: */ </strong></span><br />
          @media screen and (max-width: 800px)  &#123;<br />
            
          <span className="text-warning"><strong> .left  </strong></span>,
          <span className="text-warning"><strong> .main  </strong></span>,
          <span className="text-warning"><strong> .right  </strong></span>.  &#123;<br />
          <span className="text-danger"><strong>width </strong></span> :
          <span className="text-primary"><strong>100% </strong></span> ;
          <span className="text-success"><strong>/* The width is 100%, when the viewport is 800px or smaller */ </strong></span><br />  
          &#124;<br />
          &#124;<br />
          <span className="text-primary"><strong> &lt; </strong></span>
          <span className="text-warning"><strong> /style  </strong></span>
          <span className="text-primary"><strong> &gt; </strong></span><br /><br />


          <h1><strong>HTML Computer Code Elements</strong></h1>
          <h3>HTML contains several elements for defining user input and computer code.</h3><br />
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
          z = x + y;
          <span className="text-primary"><strong> &lt; </strong></span>
          <span className="text-warning"><strong> /code  </strong></span>
          <span className="text-primary"><strong> &gt; </strong></span><br /><br />


          <h1><strong>HTML  &lt;kbd &gt; For Keyboard Input</strong></h1>

          The HTML <span className="text-danger"><strong>  &lt;kbd &gt;</strong></span>element represents user input, like keyboard input or voice commands.<br />
          Text surrounded by <span className="text-danger"><strong> &lt;kbd &gt; </strong></span> tags is typically displayed in a monospace font:<br />
          <span className="text-primary"><strong> &lt; </strong></span>
          <span className="text-warning"><strong>p</strong></span>
          <span className="text-primary"><strong> &gt; </strong></span>
          Save the document by pressing
          <span className="text-primary"><strong> &lt; </strong></span>
          <span className="text-warning"><strong>kbd</strong></span>
          <span className="text-primary"><strong> &gt; </strong></span>
          <h1><strong>Ctrl + S</strong></h1>
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
        <span className="text-primary"><strong> &gt; </strong></span>
        <Card className="w-50" style={{ backgroundColor: "#EEEEEE", textAlign: "left" }}>
          <h2><strong>Result:</strong></h2><br />
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
        <span className="text-primary"><strong> &gt; </strong></span><br />
          
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
                  <span className="text-primary"><strong> &gt; </strong></span><br />
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
          <span className="text-primary"><strong> &gt; </strong></span>

          <div className="w-50" style={{ backgroundColor: "#EEEEEE",  }}>
          <h2><strong>Result:</strong></h2>
          Einstein wrote: E = mc<sup>2</sup>. 
          </div><br />

          <h1><strong> What are Semantic Elements?</strong></h1> 
          A semantic element clearly describes its meaning to both the browser and the developer.<br />
          Examples of <strong>non-semantic elements: </strong>
          <span className="text-danger"><strong> &lt;div &gt;</strong></span> and 
          <span className="text-danger"><strong> &lt;span &gt;</strong></span> - Tells nothing about its content.<br />
          Examples of <strong>semantic elements: </strong> 
          <span className="text-danger"><strong> &lt;form&gt;</strong></span>, 
          <span className="text-danger"><strong> &lt;table &gt;</strong></span>, and 
          <span className="text-danger"><strong> &lt;article&gt;</strong></span>- Clearly defines its content.<br /><br />

          <h1><strong>Semantic Elements in HTML</strong></h1> 
          Many web sites contain HTML code like: <br />
          &lt;div id="nav"&gt; &lt;div class="header"&gt; &lt;div id="footer"&gt; to indicate navigation, header, and footer.<br />
          In HTML there are some semantic elements that can be used to define different parts of a web page:  <br />
          •	&lt;article&gt;<br />
          •	&lt;aside&gt;<br />
          •	&lt;details&gt;<br />
          •	&lt;figcaption&gt;<br />
          •	&lt;figure&gt;<br />
          •	&lt;footer&gt;<br />
          •	&lt;header&gt;<br />
          •	&lt;main&gt;<br />
          •	&lt;mark&gt;<br />
          •	&lt;nav&gt;<br />
          •	&lt;section&gt;<br />
          •	&lt;summary&gt;<br />
          •	&lt;time&gt;<br />
          <Card className="imgclasss w-50">
            <img src={Html_img51}></img>
          </Card><br />

          <h1><strong>HTML  &lt;section &gt;Element</strong></h1>  
          The   <span className="text-danger"><strong> &lt;section &gt;Element</strong></span>element defines a section in a document.<br />
          According to W3C's HTML documentation: "A section is a thematic grouping of content, typically with a heading."<br />
          A home page could normally be split into sections for introduction, content, and contact information.<br /><br />
          <span className="text-primary"><strong> &lt; </strong></span>
          <span className="text-warning"><strong>section</strong></span>
          <span className="text-primary"><strong> &gt; </strong></span><br />

          <span className="text-primary"><strong> &lt; </strong></span>
          <span className="text-warning"><strong>h1</strong></span>
          <span className="text-primary"><strong> &gt; </strong></span>
          WWF
          <span className="text-primary"><strong> &lt; </strong></span>
          <span className="text-warning"><strong>/h1</strong></span>
          <span className="text-primary"><strong> &gt; </strong></span><br />

          <span className="text-primary"><strong> &lt; </strong></span>
          <span className="text-warning"><strong>p</strong></span>
          <span className="text-primary"><strong> &gt; </strong></span>
          The World Wide Fund for Nature (WWF) is....
          <span className="text-primary"><strong> &lt; </strong></span>
          <span className="text-warning"><strong>/p</strong></span>
          <span className="text-primary"><strong> &gt; </strong></span><br />

          <span className="text-primary"><strong> &lt; </strong></span>
          <span className="text-warning"><strong>/section</strong></span>
          <span className="text-primary"><strong> &gt; </strong></span><br /><br />

          <h1><strong>HTML  &lt;article &gt;Element</strong></h1>  

          The <span className="text-danger"><strong> &lt;article &gt;Element</strong></span> element specifies independent, self-contained content.<br />
          An article should make sense on its own, and it should be possible to read it independently from the rest of the web site.<br />
          Examples of where an <span className="text-danger"><strong> &lt;article &gt;Element</strong></span>element can be used:<br />
          •	Forum post<br />
          •	Blog post<br />
          •	Newspaper article<br /><br />
          &#09;
          <span className="text-primary"><strong> &lt; </strong></span>
          <span className="text-warning"><strong>article</strong></span>
          <span className="text-primary"><strong> &gt; </strong></span><br />
          &#09;
          <span className="text-primary"><strong> &lt; </strong></span>
          <span className="text-warning"><strong>h1</strong></span>
          <span className="text-primary"><strong> &gt; </strong></span>
          What Does WWF Do?
          <span className="text-primary"><strong> &lt; </strong></span>
          <span className="text-warning"><strong>/h1</strong></span>
          <span className="text-primary"><strong> &gt; </strong></span><br />
          &#09;
          <span className="text-primary"><strong> &lt; </strong></span>
          <span className="text-warning"><strong>p</strong></span>
          <span className="text-primary"><strong> &gt; </strong></span>
          WWF's mission is to stop the degradation of our planet's natural environment,<br />
          and build a future in which humans live in harmony with nature.<br />
          <span className="text-primary"><strong> &lt; </strong></span>
          <span className="text-warning"><strong>/p</strong></span>
          <span className="text-primary"><strong> &gt; </strong></span><br />
          &#09;
          <span className="text-primary"><strong> &lt; </strong></span>
          <span className="text-warning"><strong>/article</strong></span>
          <span className="text-primary"><strong> &gt; </strong></span><br /><br />



          <h1><strong>Nesting &lt;article&gt; in &lt;section&gt; or Vice Versa?</strong></h1>

          The<span className="text-warning"><strong>&lt;article&gt; </strong></span> element specifies independent, self-contained content.<br />
          The <span className="text-warning"><strong>&lt;section&gt; </strong></span> element defines section in a document.<br />
          Can we use the definitions to decide how to nest those elements? No, we cannot!<br />
          So, on the Internet, you will find HTML pages with <span className="text-warning"><strong>&lt;section&gt; </strong></span> elements containing 
          <span className="text-warning"><strong>&lt;article&gt; </strong></span> elements,<br />
          and<span className="text-warning"><strong>&lt;article&gt; </strong></span> elements containing
          <span className="text-warning"><strong>&lt;section&gt; </strong></span> elements.
          You will also find pages with<span className="text-warning"><strong>&lt;section&gt; </strong> </span>elements  <br />
          containing <span className="text-warning"><strong>&lt;section&gt; </strong></span> elements,
          and <span className="text-warning"><strong>&lt;article&gt; </strong></span>elements containing 
          <span className="text-warning"><strong>&lt;article&gt; </strong></span> elements.<br /><br />



          <h1><strong>HTML  &lt;header &gt;Element</strong></h1>
          The &lt;header&gt; element specifies a header for a document or section.<br />
          The &lt;header&gt; element should be used as a container for introductory content.<br />
          You can have several &lt;header&gt; elements in one document.<br />
          The following example defines a header for an article:<br /><br />
          <span className="text-primary"><strong> &lt; </strong></span>
          <span className="text-warning"><strong>article</strong></span>
          <span className="text-primary"><strong> &gt; </strong></span><br />
          &#09;
          <span className="text-primary"><strong> &lt; </strong></span>
          <span className="text-warning"><strong>header</strong></span>
          <span className="text-primary"><strong> &gt; </strong></span><br />
          &#09;
          <span className="text-primary"><strong> &lt; </strong></span>
          <span className="text-warning"><strong>h1</strong></span>
          <span className="text-primary"><strong> &gt; </strong></span>
          What Does WWF Do?
          <span className="text-primary"><strong> &lt; </strong></span>
          <span className="text-warning"><strong>/h1</strong></span>
          <span className="text-primary"><strong> &gt; </strong></span><br />
          &#09;
          <span className="text-primary"><strong> &lt; </strong></span>
          <span className="text-warning"><strong>p</strong></span>
          <span className="text-primary"><strong> &gt; </strong></span>
          WWF's mission:<br />
          <span className="text-primary"><strong> &lt; </strong></span>
          <span className="text-warning"><strong>/p</strong></span>
          <span className="text-primary"><strong> &gt; </strong></span><br />
          &#09;
          <span className="text-primary"><strong> &lt; </strong></span>
          <span className="text-warning"><strong>header</strong></span>
          <span className="text-primary"><strong> &gt; </strong></span><br />
          &#09;
          <span className="text-primary"><strong> &lt; </strong></span>
          <span className="text-warning"><strong>p</strong></span>
          <span className="text-primary"><strong> &gt; </strong></span>
          WWF's mission is to stop the degradation of our planet's natural environment,<br />
          and build a future in which humans live in harmony with nature.<br />
          <span className="text-primary"><strong> &lt; </strong></span>
          <span className="text-warning"><strong>/p</strong></span>
          <span className="text-primary"><strong> &gt; </strong></span><br />
          &#09;
          <span className="text-primary"><strong> &lt; </strong></span>
          <span className="text-warning"><strong>/article</strong></span>
          <span className="text-primary"><strong> &gt; </strong></span><br /><br />



          <h1><strong>HTML &lt;footer&gt; Element</strong></h1>
          The <span className="text-warning"><strong>&lt;footer&gt; </strong></span> element specifies a footer for a document or section.<br />
          A <span className="text-warning"><strong>&lt;footer&gt; </strong></span> element should contain information about its containing element.<br />
          A footer typically contains the author of the document, copyright information, links to terms of use,<br />
          contact information, etc.<br />
          You may have several <span className="text-warning"><strong>&lt;footer&gt; </strong></span> elements in one document.<br /><br />

          <span className="text-primary"><strong> &lt; </strong></span>
          <span className="text-warning"><strong>footer</strong></span>
          <span className="text-primary"><strong> &gt; </strong></span><br />
          &#09;
          <span className="text-primary"><strong> &lt; </strong></span>
          <span className="text-warning"><strong>p</strong></span>
          <span className="text-primary"><strong> &gt; </strong></span>
          Posted by: Hege Refsnes<br />
          <span className="text-primary"><strong> &lt; </strong></span>
          <span className="text-warning"><strong>/p</strong></span>
          <span className="text-primary"><strong> &gt; </strong></span><br />
          &#09;

          
          &#09;
          <span className="text-primary"><strong> &lt; </strong></span>
          <span className="text-warning"><strong>p</strong></span>
          <span className="text-primary"><strong> &gt; </strong></span>
          Contact information:
          <span className="text-primary"><strong> &lt; </strong></span>
          <span className="text-warning"><strong>a </strong></span>
          <span className="text-danger"><strong>href </strong></span>
          <span className="text-primary"><strong>="mailto:someone@example.com"&gt; </strong></span>
          <span className="text-warning"><strong>/p</strong></span>
          <span className="text-primary"><strong> &gt; </strong></span><br />
          &#09;
          <span className="text-primary"><strong> &lt; </strong></span>
          <span className="text-warning"><strong>/footer</strong></span>
          <span className="text-primary"><strong> &gt; </strong></span><br />
         
           
          <h1><strong>HTML &lt;nav&gt; Element</strong></h1>

          The <span className="text-danger"><strong>&lt;nav&gt;</strong></span>element defines a set of navigation links.<br />
         <Card className="w-50">
           <span style={{backgroundColor:"#FFFFCC"}}>
           Notice that NOT all links of a document should be inside a <span className="text-danger"><strong>&lt;nav&gt;</strong></span> element.<br />
           The <span className="text-danger"><strong>&lt;nav&gt;</strong></span>element is intended only for major block of navigation links.
           </span>
         </Card>

          <span className="text-primary"><strong> &lt; </strong></span>
          <span className="text-warning"><strong>nav</strong></span>
          <span className="text-primary"><strong> &gt; </strong></span><br />
          &#09;
          <span className="text-primary"><strong> &lt; </strong></span>
          <span className="text-warning"><strong>a </strong></span>
          <span className="text-danger"><strong>href </strong></span>
          <span className="text-primary"><strong>="/html/"&gt; </strong></span>
          HTML
          <span className="text-primary"><strong> &lt; </strong></span>
          <span className="text-warning"><strong>/a </strong></span>
          <span className="text-primary"><strong> &gt; </strong></span><br />
          &#09;
          <span className="text-primary"><strong> &lt; </strong></span>
          <span className="text-warning"><strong>a </strong></span>
          <span className="text-danger"><strong>href </strong></span>
          <span className="text-primary"><strong>="/css/"&gt; </strong></span>
          CSS
          <span className="text-primary"><strong> &lt; </strong></span>
          <span className="text-warning"><strong>/a </strong></span>
          <span className="text-primary"><strong> &gt; </strong></span><br />
          &#09;
          <span className="text-primary"><strong> &lt; </strong></span>
          <span className="text-warning"><strong>a </strong></span>
          <span className="text-danger"><strong>href </strong></span>
          <span className="text-primary"><strong>="/js/"&gt; </strong></span>
          JavaScript
          <span className="text-primary"><strong> &lt; </strong></span>
          <span className="text-warning"><strong>/a </strong></span>
          <span className="text-primary"><strong> &gt; </strong></span><br />
          &#09;
          <span className="text-primary"><strong> &lt; </strong></span>
          <span className="text-warning"><strong>a </strong></span>
          <span className="text-danger"><strong>href </strong></span>
          <span className="text-primary"><strong>="/jquery/"&gt; </strong></span>
          jQuery
          <span className="text-primary"><strong> &lt; </strong></span>
          <span className="text-warning"><strong>/a </strong></span>
          <span className="text-primary"><strong> &gt; </strong></span>

          <span className="text-primary"><strong> &lt; </strong></span>
          <span className="text-warning"><strong>/nav</strong></span>
          <span className="text-primary"><strong> &gt; </strong></span><br />

  
  
          <h1><strong>HTML &lt;aside&gt; Element</strong></h1> 
          The <span className="text-danger"><strong> &lt;aside&gt;</strong></span> element defines some content aside from the content it is placed in (like a sidebar).<br />
          The <span className="text-danger"><strong> &lt;aside&gt;</strong></span>content should be related to the surrounding content.<br />
          <span className="text-primary"><strong> &lt; </strong></span>
          <span className="text-warning"><strong>p</strong></span>
          <span className="text-primary"><strong> &gt; </strong></span>
          My family and I visited The Epcot center this summer.
          <span className="text-primary"><strong> &lt; </strong></span>
          <span className="text-warning"><strong>/p</strong></span>
          <span className="text-primary"><strong> &gt; </strong></span><br /><br />

          <span className="text-primary"><strong> &lt; </strong></span>
          <span className="text-warning"><strong>aside</strong></span>
          <span className="text-primary"><strong> &gt; </strong></span><br />
          
           <span className="text-primary"><strong> &lt; </strong></span>
          <span className="text-warning"><strong>h4</strong></span>
          <span className="text-primary"><strong> &gt; </strong></span>
          Epcot Center
          <span className="text-primary"><strong> &lt; </strong></span>
          <span className="text-warning"><strong>/h4</strong></span>
          <span className="text-primary"><strong> &gt; </strong></span><br />

          <span className="text-primary"><strong> &lt; </strong></span>
          <span className="text-warning"><strong>p</strong></span>
          <span className="text-primary"><strong> &gt; </strong></span>
          The Epcot Center is a theme park in Disney World, Florida.
          <span className="text-primary"><strong> &lt; </strong></span>
          <span className="text-warning"><strong>/p</strong></span>
          <span className="text-primary"><strong> &gt; </strong></span><br />

          <span className="text-primary"><strong> &lt; </strong></span>
          <span className="text-warning"><strong>/aside</strong></span>
          <span className="text-primary"><strong> &gt; </strong></span>
         

          <h1><strong>HTML &lt;figure&gt; and &lt;figcaption&gt; Elements</strong></h1>

          An image and a caption can be grouped together in a <span className="text-danger"><strong>&lt;figure&gt;</strong></span> element.<br />
          The purpose of a caption is to add a visual explanation to an image.<br /><br />

          <span className="text-primary"><strong> &lt; </strong></span>
          <span className="text-warning"><strong>figure</strong></span>
          <span className="text-primary"><strong> &gt; </strong></span>

          <span className="text-primary"><strong> &lt; </strong></span>
          <span className="text-warning"><strong>img</strong></span>
          <span className="text-danger"><strong>src</strong></span>
          <span className="text-primary"><strong>="pic_trulli.jpg"</strong></span>
          <span className="text-danger"><strong>alt </strong></span>
          <span className="text-primary"><strong> ="Trulli"&gt; </strong></span><br />

          <span className="text-primary"><strong> &lt; </strong></span>
          <span className="text-warning"><strong>figcaption</strong></span>
          <span className="text-primary"><strong> &gt; </strong></span>
          Fig1. - Trulli, Puglia, Italy.
          <span className="text-primary"><strong> &lt; </strong></span>
          <span className="text-warning"><strong>/figcaption</strong></span>
          <span className="text-primary"><strong> &gt; </strong></span><br />

          <span className="text-primary"><strong> &lt; </strong></span>
          <span className="text-warning"><strong>/figure</strong></span>
          <span className="text-primary"><strong> &gt; </strong></span><br /><br />
  
          The  <span className="text-danger"><strong>&lt;img&gt; </strong></span>element defines the image, 
          the  <span className="text-danger"><strong>&lt;figcaption&gt;</strong></span> element defines the caption.<br />

          <h1><strong>Why Semantic Elements?</strong></h1>
          According to the W3C: "A semantic Web allows data to be shared and reused <br />
          across applications, enterprises, and communities."<br /><br />
          <h1><strong>Semantic Elements in HTML</strong></h1>
          Below is an alphabetical list of some of the semantic elements in HTML.<br />
          The links go to our complete  <span className="text-primary"><strong>HTML Reference </strong></span>.<br /><br />

          <table class="table table-striped w-50">
            <thead>
              <tr>
                <th scope="col" ><strong> Tag </strong></th>
                <th scope="col" ><strong>	Description </strong></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">&lt;article &gt; </th>
                <td><strong>Defines an article</strong></td>
              </tr>
              <tr>
                <th scope="row">&lt;aside &gt; </th>
                <td><strong>Defines content aside from the page content</strong></td>
              </tr>
              <tr>
                <th scope="row">&lt;details&gt; </th>
                <td><strong>Defines additional details that the user can view or hide</strong></td>
              </tr>
              <tr>
                <th scope="row">&lt;figcaption&gt; </th>
                <td><strong>Defines a caption for a &lt;figure&gt; element</strong></td>
              </tr>
              <tr>
                <th scope="row">&lt;figure&gt; </th>
                <td><strong>Specifies self-contained content, like illustrations, diagrams, photos, code listings, etc.</strong></td>
              </tr>
              <tr>
                <th scope="row">&lt;footer&gt; </th>
                <td><strong>Defines a footer for a document or section</strong></td>
              </tr>
              <tr>
                <th scope="row">&lt;header&gt; </th>
                <td><strong>Specifies a header for a document or section</strong></td>
              </tr>
              <tr>
                <th scope="row">&lt;main&gt; </th>
                <td><strong>	Specifies the main content of a document</strong></td>
              </tr><tr>
                <th scope="row">&lt;mark&gt; </th>
                <td><strong>	Defines marked/highlighted text</strong></td>
              </tr><tr>
                <th scope="row">&lt;nav&gt; </th>
                <td><strong>Defines navigation links</strong></td>
              </tr><tr>
                <th scope="row">&lt;section&gt; </th>
                <td><strong>Defines a section in a document</strong></td>
              </tr><tr>
                <th scope="row">&lt;summary&gt; </th>
                <td><strong>Defines a visible heading for a &lt;details&gt; element</strong></td>
              </tr><tr>
                <th scope="row">&lt;time&gt; </th>
                <td><strong>	Defines a date/time </strong></td>
              </tr>
             </tbody>
             </table>
          	
             <h1><strong>HTML Symbols</strong></h1> 
              HTML entities were described in the previous chapter.<br />
              Many mathematical, technical, and currency symbols, are not present on a normal keyboard.<br />
              To add such symbols to an HTML page, you can use an HTML entity name.<br />
              If no entity name exists, you can use an entity number, a decimal, or hexadecimal reference.<br />

              <span className="text-primary"><strong> &lt; </strong></span>
              <span className="text-warning"><strong>p</strong></span>
              <span className="text-primary"><strong> &gt; </strong></span>
              I will display &#38;euro;
              <span className="text-primary"><strong> &lt; </strong></span>
              <span className="text-warning"><strong>/p</strong></span>
              <span className="text-primary"><strong> &gt; </strong></span>
              <br />
              <span className="text-primary"><strong> &lt; </strong></span>
              <span className="text-warning"><strong>p</strong></span>
              <span className="text-primary"><strong> &gt; </strong></span>
              I will display &#38;#8364;
              <span className="text-primary"><strong> &lt; </strong></span>
              <span className="text-warning"><strong>/p</strong></span>
              <span className="text-primary"><strong> &gt; </strong></span>
              <br />
              <span className="text-primary"><strong> &lt; </strong></span>
              <span className="text-warning"><strong>p</strong></span>
              <span className="text-primary"><strong> &gt; </strong></span>
              I will display &#38;#x20AC;
              <span className="text-primary"><strong> &lt; </strong></span>
              <span className="text-warning"><strong>/p</strong></span>
              <span className="text-primary"><strong> &gt; </strong></span>
              <br /><br />
              <Card style={{ backgroundColor: "#EEEEEE" }} className="w-50">
              <h2>Will display as:</h2>
              I will display € <br />
              I will display € <br />
              I will display € <br />
              </Card><br />

              <h1><strong>Some Mathematical Symbols Supported by HTML</strong></h1>
             
              <table class="table table-striped w-50">
            <thead>
              <tr>
                <th scope="col"><strong>Char</strong></th>
                <th scope="col"><strong>Number</strong></th>
                <th scope="col"><strong>Entity</strong></th>
                <th scope="col"><strong>Description</strong></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">&#8704; </th>
                <td><strong>&#38;#8704;</strong></td>
                <td><strong>&#38;forall;</strong></td>
                <td><strong>FOR ALL</strong></td>
              </tr>
              <tr>
                <th scope="row">&#8706; </th>
                <td><strong>&#38;#8706;</strong></td>
                <td><strong>&#38;part;</strong></td>
                <td><strong>PARTIAL DIFFERENTIAL</strong></td>
              </tr>
              <tr>
                <th scope="row">&#8707; </th>
                <td><strong>&#38;#8707;</strong></td>
                <td><strong>&#38;exist;</strong></td>
                <td><strong>THERE EXISTS</strong></td>
              </tr>
              <tr>
                <th scope="row">&#8709; </th>
                <td><strong>&#38;#8709;</strong></td>
                <td><strong>&#38;empty;</strong></td>
                <td><strong>EMPTY SETS</strong></td>
              </tr>
              <tr>
                <th scope="row">&#8711;</th>
                <td><strong>&#38;#8711;</strong></td>
                <td><strong>&#38;nabla;</strong></td>
                <td><strong>NABLA</strong></td>
              </tr>
                <tr>
                <th scope="row">&#8712;</th>
                <td><strong>&#38;#8712;</strong></td>
                <td><strong>&#38;isin;</strong></td>
                <td><strong>ELEMENT OF</strong></td>
              </tr>
              <tr>
                <th scope="row">&#8713;	</th>
                <td><strong>&#38;#8713;	</strong></td>
                <td><strong>&#38;notin;</strong></td>
                <td><strong>NOT AN ELEMENT OF</strong></td>
              </tr>
              <tr>
                <th scope="row">&#8715;	</th>
                <td><strong>&#38;#8715;	</strong></td>
                <td><strong>&#38;ni;</strong></td>
                <td><strong>CONTAINS AS MEMBER</strong></td>
              </tr>          
              <tr>
                <th scope="row">&#8719;	</th>
                <td><strong>&#38;#8719;	</strong></td>
                <td><strong>&#38;prod;</strong></td>
                <td><strong>N-ARY PRODUCT</strong></td>
              </tr>
              <tr>
                <th scope="row">&#8721;	</th>
                <td><strong>&#38;#8721;	</strong></td>
                <td><strong>&#38;sum;</strong></td>
                <td><strong>N-ARY SUMMATION</strong></td>
              </tr>

              </tbody>
             </table>
             
             <h1><strong>Some Greek Letters Supported by HTML</strong></h1> 

             <table class="table table-striped w-50">
            <thead>
              <tr>
                <th scope="col"><strong>Char</strong></th>
                <th scope="col"><strong>Number</strong></th>
                <th scope="col"><strong>Entity</strong></th>
                <th scope="col"><strong>Description</strong></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">	&#913; </th>
                <td><strong>&#38;#913;</strong></td>
                <td><strong>&#38;Alpha;</strong></td>
                <td><strong>GREEK CAPITAL LETTER ALPHA</strong></td>
              </tr>
              <tr>
                <th scope="row">&#914; </th>
                <td><strong>&#38;#914;</strong></td>
                <td><strong>&#38;Beta;</strong></td>
                <td><strong>GREEK CAPITAL LETTER BETA</strong></td>
              </tr>
              <tr>
                <th scope="row">&#915; </th>
                <td><strong>&#38;#915;</strong></td>
                <td><strong>&#38;Gamma;</strong></td>
                <td><strong>GREEK CAPITAL LETTER GAMMA</strong></td>
              </tr>
              <tr>
                <th scope="row">&#916; </th>
                <td><strong>&#38;#916;</strong></td>
                <td><strong>&#38;Delta;</strong></td>
                <td><strong>	GREEK CAPITAL LETTER DELTA</strong></td>
              </tr><tr>
                <th scope="row">&#917; </th>
                <td><strong>&#38;#917;</strong></td>
                <td><strong>&#38;Epsilon;</strong></td>
                <td><strong>GREEK CAPITAL LETTER EPSILON</strong></td>
              </tr><tr>
                <th scope="row">&#918; </th>
                <td><strong>&#38;#918;</strong></td>
                <td><strong>&#38;Zeta;</strong></td>
                <td><strong>GREEK CAPITAL LETTER ZETA</strong></td>
              </tr>
            
             </tbody>
             </table>


             <h1><strong> Some Other Entities Supported by HTML</strong></h1>
             <table class="table table-striped w-50">
            <thead>
              <tr>
                <th scope="col"><strong>Char</strong></th>
                <th scope="col"><strong>Number</strong></th>
                <th scope="col"><strong>Entity</strong></th>
                <th scope="col"><strong>Description</strong></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">	&#169; </th>
                <td><strong>&#38;#169;</strong></td>
                <td><strong>&#38;copy;</strong></td>
                <td><strong>COPYRIGHT SIGN</strong></td>
              </tr>
              <tr>
                <th scope="row">&#174; </th>
                <td><strong>&#38;#174;</strong></td>
                <td><strong>&#38;reg;</strong></td>
                <td><strong>	REGISTERED SIGN</strong></td>
              </tr>
              <tr>
                <th scope="row">&#8364;	 </th>
                <td><strong>&#38;#8364;	</strong></td>
                <td><strong>&#38;euro;</strong></td>
                <td><strong>EURO SIGN</strong></td>
              </tr>
              <tr>
                <th scope="row">&#8482; </th>
                <td><strong>&#38;#8482;</strong></td>
                <td><strong>&#38;trade;</strong></td>
                <td><strong>TRADEMARK</strong></td>
              </tr>
              <tr>
                <th scope="row">&#8592; </th>
                <td><strong>&#38;#8592;</strong></td>
                <td><strong>&#38;larr;</strong></td>
                <td><strong>GREEK CAPITAL LETTER EPSILON</strong></td>
              </tr>
              <tr>
                <th scope="row">&#918; </th>
                <td><strong>&#38;#918;</strong></td>
                <td><strong>&#38;Zeta;</strong></td>
                <td><strong>	LEFTWARDS ARROW</strong></td>
              </tr>
              <tr>
                <th scope="row">&#8593; </th>
                <td><strong>&#38;#8593;</strong></td>
                <td><strong>&#38;uarr;</strong></td>
                <td><strong>UPWARDS ARROW</strong></td>
              </tr>
              <tr>
                <th scope="row">&#8594; </th>
                <td><strong>&#38;#8594;</strong></td>
                <td><strong>&#38;rarr;</strong></td>
                <td><strong>RIGHTWARDS ARROW</strong></td>
              </tr>
              <tr>
                <th scope="row">&#8595; </th>
                <td><strong>&#38;#8595;</strong></td>
                <td><strong>&#38;darr;</strong></td>
                <td><strong>DOWNWARDS ARROW</strong></td>
              </tr>
              <tr>
                <th scope="row">&#9824; </th>
                <td><strong>&#38;#9824;</strong></td>
                <td><strong>&#38;spades;</strong></td>
                <td><strong>BLACK SPADE SUIT</strong></td>
              </tr>
              <tr>
                <th scope="row">&#9827; </th>
                <td><strong>&#38;#9827;</strong></td>
                <td><strong>&#38;clubs;</strong></td>
                <td><strong>BLACK CLUB SUIT</strong></td>
              </tr>
              <tr>
                <th scope="row">&#9829; </th>
                <td><strong>&#38;#9829;</strong></td>
                <td><strong>&#38;hearts;</strong></td>
                <td><strong>	BLACK HEART SUIT</strong></td>
              </tr>
              <tr>
                <th scope="row">&#9830; </th>
                <td><strong>&#38;#9830;</strong></td>
                <td><strong>&#38;diams;</strong></td>
                <td><strong>BLACK DIAMOND SUIT</strong></td>
              </tr>
             </tbody>
             </table>
            


             <h1><strong> Using Emojis in HTML</strong></h1>
              Emojis are characters from the UTF-8 character set: <br />

              <h1><strong> What are Emojis?</strong></h1>

              Emojis look like images, or icons, but they are not.<br />
              They are letters (characters) from the UTF-8 (Unicode) alphabet.<br />
              <Card className="w-50">
           <span style={{backgroundColor:"#FFFFCC"}}>
              UTF-8 covers almost all of the characters and symbols in the world.
              </span>
              </Card><br />

              <h1><strong> The HTML charset Attribute</strong></h1>

              To display an HTML page correctly, a web browser must know the character set used in the page.<br />
              This is specified in the <span className="text-danger"><strong>&lt;meta &gt; </strong></span>tag:<br />
              <span className="text-primary"><strong>&lt; </strong></span>
              <span className="text-warning"><strong>meta</strong></span>
              <span className="text-danger"><strong> charset</strong></span>
              <span className="text-primary"><strong>="UTF-8"&gt;</strong></span><br />
              <Card className="w-50">
              <span style={{backgroundColor:"#FFFFCC"}}>
              If not specified, UTF-8 is the default character set in HTML.
              </span>
              </Card><br />
             
              <h1><strong>UTF-8 Characters</strong></h1>
              Many UTF-8 characters cannot be typed on a keyboard, but they can always be displayed<br />
              using numbers (called entity numbers):<br /><br />
              •	A is 65<br />
              •	B is 66<br />
              •	C is 67<br />
              <span className="text-primary"><strong>&lt;</strong></span><br />
              <span className="text-warning"><strong>!DOCTYPE </strong></span>
              <span className="text-danger"><strong>html</strong></span>
              <span className="text-primary"><strong>&gt;</strong></span><br />

              <span className="text-primary"><strong>&lt; </strong></span>
              <span className="text-warning"><strong>html</strong></span>
              <span className="text-primary"><strong>&gt;</strong></span><br />

              <span className="text-primary"><strong>&lt; </strong></span>
              <span className="text-warning"><strong>head</strong></span>
              <span className="text-primary"><strong>&gt;</strong></span><br />

              <span className="text-primary"><strong>&lt; </strong></span>
              <span className="text-warning"><strong>meta</strong></span>
              <span className="text-danger"><strong> charset</strong></span>
              <span className="text-primary"><strong>="UTF-8"&gt;</strong></span><br />

              <span className="text-primary"><strong>&lt; </strong></span>
              <span className="text-warning"><strong>/head</strong></span>
              <span className="text-primary"><strong>&gt;</strong></span><br />

              <span className="text-primary"><strong>&lt; </strong></span>
              <span className="text-warning"><strong>body</strong></span>
              <span className="text-primary"><strong>&gt;</strong></span><br />
                 
              <span className="text-primary"><strong>&lt; </strong></span>
              <span className="text-warning"><strong>p</strong></span>
              <span className="text-primary"><strong>&gt;</strong></span>
              I will display A B C
              <span className="text-primary"><strong>&lt; </strong></span>
              <span className="text-warning"><strong>/p</strong></span>
              <span className="text-primary"><strong>&gt;</strong></span><br />

              <span className="text-primary"><strong>&lt; </strong></span>
              <span className="text-warning"><strong>p</strong></span>
              <span className="text-primary"><strong>&gt;</strong></span>
              I will display &#38;#65; &#38;#66; &#38;#67;
              <span className="text-primary"><strong>&lt; </strong></span>
              <span className="text-warning"><strong>/p</strong></span>
              <span className="text-primary"><strong>&gt;</strong></span><br />
             
              <span className="text-primary"><strong>&lt; </strong></span>
              <span className="text-warning"><strong>/body</strong></span>
              <span className="text-primary"><strong>&gt;</strong></span><br />

              <span className="text-primary"><strong>&lt; </strong></span>
              <span className="text-warning"><strong>/html</strong></span>
              <span className="text-primary"><strong>&gt;</strong></span><br />

              <h1><strong>Example Explained</strong></h1>
              The <span className="text-danger"><strong>&lt;&gt; </strong>meta charset="UTF-8"</span> element defines the character set.<br />
              The characters A, B, and C, are displayed by the numbers 65, 66, and 67.<br />
              To let the browser understand that you are displaying a character,<br />
              you must start the entity number with &#38;# and end it with ; (semicolon).<br /><br />

              <h1><strong>Emoji Characters</strong></h1>
              Emojis are also characters from the UTF-8 alphabet:<br /><br />
              &#09; •	😄 is 128516<br />
              &#09;•	😍 is 128525<br />
              &#09; •	💗 is 128151<br />

              <span className="text-primary"><strong>&lt;</strong></span><br />
              <span className="text-warning"><strong>!DOCTYPE </strong></span>
              <span className="text-danger"><strong>html</strong></span>
              <span className="text-primary"><strong>&gt;</strong></span><br />

              <span className="text-primary"><strong>&lt; </strong></span>
              <span className="text-warning"><strong>html</strong></span>
              <span className="text-primary"><strong>&gt;</strong></span><br />

              <span className="text-primary"><strong>&lt; </strong></span>
              <span className="text-warning"><strong>head</strong></span>
              <span className="text-primary"><strong>&gt;</strong></span><br />

              <span className="text-primary"><strong>&lt; </strong></span>
              <span className="text-warning"><strong>meta</strong></span>
              <span className="text-danger"><strong> charset</strong></span>
              <span className="text-primary"><strong>="UTF-8"&gt;</strong></span><br />

              <span className="text-primary"><strong>&lt; </strong></span>
              <span className="text-warning"><strong>/head</strong></span>
              <span className="text-primary"><strong>&gt;</strong></span><br />

              <span className="text-primary"><strong>&lt; </strong></span>
              <span className="text-warning"><strong>body</strong></span>
              <span className="text-primary"><strong>&gt;</strong></span><br />
                 
              <span className="text-primary"><strong>&lt; </strong></span>
              <span className="text-warning"><strong>h1</strong></span>
              <span className="text-primary"><strong>&gt;</strong></span>
              My First Emoji
              <span className="text-primary"><strong>&lt; </strong></span>
              <span className="text-warning"><strong>/h1</strong></span>
              <span className="text-primary"><strong>&gt;</strong></span><br />

              <span className="text-primary"><strong>&lt; </strong></span>
              <span className="text-warning"><strong>p</strong></span>
              <span className="text-primary"><strong>&gt;</strong></span>
              &#38;#128512;
              <span className="text-primary"><strong>&lt; </strong></span>
              <span className="text-warning"><strong>/p</strong></span>
              <span className="text-primary"><strong>&gt;</strong></span><br />
             
              <span className="text-primary"><strong>&lt; </strong></span>
              <span className="text-warning"><strong>/body</strong></span>
              <span className="text-primary"><strong>&gt;</strong></span><br />

              <span className="text-primary"><strong>&lt; </strong></span>
              <span className="text-warning"><strong>/html</strong></span>
              <span className="text-primary"><strong>&gt;</strong></span><br />

              Since Emojis are characters, they can be copied, displayed, and sized just like any other character in HTML.<br />

              
              <span className="text-primary"><strong>&lt;</strong></span><br />
              <span className="text-warning"><strong>!DOCTYPE </strong></span>
              <span className="text-danger"><strong>html</strong></span>
              <span className="text-primary"><strong>&gt;</strong></span><br />

              <span className="text-primary"><strong>&lt; </strong></span>
              <span className="text-warning"><strong>html</strong></span>
              <span className="text-primary"><strong>&gt;</strong></span><br />

              <span className="text-primary"><strong>&lt; </strong></span>
              <span className="text-warning"><strong>head</strong></span>
              <span className="text-primary"><strong>&gt;</strong></span><br />

              <span className="text-primary"><strong>&lt; </strong></span>
              <span className="text-warning"><strong>meta</strong></span>
              <span className="text-danger"><strong> charset</strong></span>
              <span className="text-primary"><strong>="UTF-8"&gt;</strong></span><br />

              <span className="text-primary"><strong>&lt; </strong></span>
              <span className="text-warning"><strong>/head</strong></span>
              <span className="text-primary"><strong>&gt;</strong></span><br />
              <span className="text-primary"><strong>&lt; </strong></span>
              <span className="text-warning"><strong>body</strong></span>
              <span className="text-primary"><strong>&gt;</strong></span><br />
                 
              <span className="text-primary"><strong>&lt; </strong></span>
              <span className="text-warning"><strong>h1</strong></span>
              <span className="text-primary"><strong>&gt;</strong></span>
              Sized Emojis
              <span className="text-primary"><strong>&lt; </strong></span>
              <span className="text-warning"><strong>/h1</strong></span>
              <span className="text-primary"><strong>&gt;</strong></span><br />

              <span className="text-primary"><strong>&lt; </strong></span>
              <span className="text-warning"><strong>p </strong></span>
              
              <span className="text-danger"><strong>style </strong></span>
              <span className="text-primary"><strong>"font-size:48px"&gt; </strong></span><br />
              &#38;#128512; &#38; #128516;&#38; #128525; &#38;#128151;
              <span className="text-primary"><strong>&lt; </strong></span>
              <span className="text-warning"><strong>/p</strong></span>
              <span className="text-primary"><strong>&gt;</strong></span><br />
             
              <span className="text-primary"><strong>&lt; </strong></span>
              <span className="text-warning"><strong>/body</strong></span>
              <span className="text-primary"><strong>&gt;</strong></span><br />

              <span className="text-primary"><strong>&lt; </strong></span>
              <span className="text-warning"><strong>/html</strong></span>
              <span className="text-primary"><strong>&gt;</strong></span><br />
 
              <table class="table table-striped w-50">
            <thead>
              <tr>
                <th scope="col"><strong>Emoji</strong></th>
                <th scope="col"><strong>Value</strong></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">&#128507; </th>
                <td><strong>&#38;#128507;</strong></td>          
              </tr>
              <tr>
                <th scope="row">&#128508; </th>
                <td><strong>&#38;#128508;</strong></td>          
              </tr>
              <tr>
                <th scope="row">&#128509; </th>
                <td><strong>&#38;#128509;</strong></td>          
              </tr>
               <tr>
                <th scope="row">&#128510; </th>
                <td><strong>&#38;#128510;</strong></td>          
              </tr>
              
              <tr>
                <th scope="row">&#128511; </th>
                <td><strong>&#38;#128511;</strong></td>          
              </tr>
              <tr>
                <th scope="row">&#128512; </th>
                <td><strong>&#38;#128512;</strong></td>          
              </tr>
              <tr>
                <th scope="row">&#128513; </th>
                <td><strong>&#38;#128513;</strong></td>          
              </tr>
              <tr>
                <th scope="row">&#128514; </th>
                <td><strong>&#38;#128514;</strong></td>          
              </tr>
              <tr>
                <th scope="row">&#128515; </th>
                <td><strong>&#38;#128515;</strong></td>          
              </tr><tr>
                <th scope="row">&#128516; </th>
                <td><strong>&#38;#128516;</strong></td>          
              </tr><tr>
                <th scope="row">&#128517; </th>
                <td><strong>&#38;#128517;</strong></td>          
              </tr> 
              </tbody>
             </table>
             
              For a full list, please go to our  <span className="text-primary"><strong><u></u>HTML Emoji Reference.</strong></span><br /><br />

              <h1><strong>The @charset CSS Rule</strong></h1>
              You can use the CSS <span className="text-danger"><strong> @charset </strong></span>
              rule to specify the character encoding used in a style sheet:<br />
              <h1><strong>Example</strong></h1>
              Set the encoding of the style sheet to Unicode UTF-8:<br />
              <span className="text-warning"><strong>@charset "UTF-8";</strong></span><br /><br />



              <h1><strong> HTML Encoding (Character Sets) </strong></h1>
              To display an HTML page correctly, a web browser must know which character set to use.<br />

              <h1><strong>What is Character Encoding?</strong></h1>
              ASCII was the first <strong>character encoding standard  </strong>(also called character set).<br /> 
              ASCII defined 128 different alphanumeric characters that could be used on the internet: numbers (0-9), <br />
              English letters (A-Z), and some special characters like ! $ + - ( ) @ &lt; &gt; .<br /><br />
              ISO-8859-1 was the default character set for HTML 4. <br />
              This character set supported 256 different character codes.<br /><br />
              ANSI (Windows-1252) was the original Windows character set. <br />
              ANSI is identical to ISO-8859-1, except that ANSI has 32 extra characters.<br />
              Because ANSI and ISO-8859-1 were so limited, HTML 4 also supported UTF-8.<br /><br />
              UTF-8 (Unicode) covers almost all of the characters and symbols in the world.<br /><br />
              The default character set for HTML5 is UTF-8.<br /><br />


              <h1><strong>The HTML charset Attribute</strong></h1>
              To display an HTML page correctly, a web browser must know the character set used in the page.<br />
              This is specified in the <span className="text-danger"><strong>&lt;meta &gt;</strong></span>tag:<br />
              <span className="text-primary"><strong>&lt; </strong></span>
              <span className="text-warning"><strong>meta</strong></span>
              <span className="text-danger"><strong> charset</strong></span>
              <span className="text-primary"><strong>="UTF-8"&gt;</strong></span><br />
              If a browser detects ISO-8859-1 in a web page, it defaults to ANSI.<br />


              <h1><strong>Differences Between Character Sets</strong></h1>
              The following table displays the differences between the character sets described above:

              <table class="table table-striped w-50">
            <thead>
              <tr>
                <th scope="col"><strong> Numb</strong></th>
                <th scope="col"><strong>	ASCII</strong></th>
                <th scope="col"><strong>ANSI</strong></th>
                <th scope="col"><strong>8859</strong></th>
                <th scope="col"><strong>UTF-8	</strong></th>
                <th scope="col"><strong>Description</strong></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="col"><strong> 32</strong></th>
                <th scope="col"><strong> </strong></th>
                <th scope="col"><strong> </strong></th>
                <th scope="col"><strong> </strong></th>
                <th scope="col"><strong> </strong></th>
                <th scope="col"><strong>space</strong></th>       
              </tr>
              <tr>
                <th scope="col"><strong> 33</strong></th>
                <th scope="col"><strong>!</strong></th>
                <th scope="col"><strong>!</strong></th>
                <th scope="col"><strong>!</strong></th>
                <th scope="col"><strong>!</strong></th>
                <th scope="col"><strong>exclamation mark</strong></th>       
              </tr>
              <tr>
                <th scope="col"><strong> 34</strong></th>
                <th scope="col"><strong>"</strong></th>
                <th scope="col"><strong>"</strong></th>
                <th scope="col"><strong>"</strong></th>
                <th scope="col"><strong>"</strong></th>
                <th scope="col"><strong>	quotation mark</strong></th>       
              </tr>
              <tr>
                <th scope="col"><strong> 35</strong></th>
                <th scope="col"><strong>#</strong></th>
                <th scope="col"><strong>#</strong></th>
                <th scope="col"><strong>#</strong></th>
                <th scope="col"><strong>#</strong></th>
                <th scope="col"><strong>number sign</strong></th>       
              </tr>
              <tr>
                <th scope="col"><strong>36</strong></th>
                <th scope="col"><strong>$</strong></th>
                <th scope="col"><strong>$</strong></th>
                <th scope="col"><strong>$</strong></th>
                <th scope="col"><strong>$</strong></th>
                <th scope="col"><strong>dollar sign</strong></th>       
              </tr>
              <tr>
                <th scope="col"><strong>37</strong></th>
                <th scope="col"><strong>%</strong></th>
                <th scope="col"><strong>%</strong></th>
                <th scope="col"><strong>%</strong></th>
                <th scope="col"><strong>%</strong></th>
                <th scope="col"><strong>percent sign</strong></th>       
              </tr>
              <tr>
                <th scope="col"><strong>38</strong></th>
                <th scope="col"><strong>&#38;</strong></th>
                <th scope="col"><strong>&#38;</strong></th>
                <th scope="col"><strong>&#38;</strong></th>
                <th scope="col"><strong>&#38;</strong></th>
                <th scope="col"><strong>percent sign</strong></th>       
              </tr>
              <tr>
                <th scope="col"><strong>39</strong></th>
                <th scope="col"><strong>'</strong></th>
                <th scope="col"><strong>'</strong></th>
                <th scope="col"><strong>'</strong></th>
                <th scope="col"><strong>'</strong></th>
                <th scope="col"><strong>	apostrophe</strong></th>       
              </tr>
              <tr>
                <th scope="col"><strong>40</strong></th>
                <th scope="col"><strong>(</strong></th>
                <th scope="col"><strong>(</strong></th>
                <th scope="col"><strong>(</strong></th>
                <th scope="col"><strong>(</strong></th>
                <th scope="col"><strong>left parenthesis</strong></th>       
              </tr>
              <tr>
                <th scope="col"><strong>41</strong></th>
                <th scope="col"><strong>)</strong></th>
                <th scope="col"><strong>)</strong></th>
                <th scope="col"><strong>)</strong></th>
                <th scope="col"><strong>)</strong></th>
                <th scope="col"><strong>right parenthesis</strong></th>       
              </tr>
              <tr>
                <th scope="col"><strong>42</strong></th>
                <th scope="col"><strong>*</strong></th>
                <th scope="col"><strong>*</strong></th>
                <th scope="col"><strong>*</strong></th>
                <th scope="col"><strong>*</strong></th>
                <th scope="col"><strong>asterisk</strong></th>       
              </tr>
              <tr>
                <th scope="col"><strong>43</strong></th>
                <th scope="col"><strong>+</strong></th>
                <th scope="col"><strong>+</strong></th>
                <th scope="col"><strong>+</strong></th>
                <th scope="col"><strong>+</strong></th>
                <th scope="col"><strong>plus sign</strong></th>       
              </tr>
              <tr>
                <th scope="col"><strong>44</strong></th>
                <th scope="col"><strong>,</strong></th>
                <th scope="col"><strong>,</strong></th>
                <th scope="col"><strong>,</strong></th>
                <th scope="col"><strong>,</strong></th>
                <th scope="col"><strong>comma</strong></th>       
              </tr>
              <tr>
                <th scope="col"><strong>45</strong></th>
                <th scope="col"><strong>-</strong></th>
                <th scope="col"><strong>-</strong></th>
                <th scope="col"><strong>-</strong></th>
                <th scope="col"><strong>-</strong></th>
                <th scope="col"><strong>hyphen-minus</strong></th>       
              </tr>
              <tr>
                <th scope="col"><strong>46</strong></th>
                <th scope="col"><strong>.</strong></th>
                <th scope="col"><strong>.</strong></th>
                <th scope="col"><strong>.</strong></th>
                <th scope="col"><strong>.</strong></th>
                <th scope="col"><strong>full stop</strong></th>       
              </tr>
              <tr>
                <th scope="col"><strong>47</strong></th>
                <th scope="col"><strong>/</strong></th>
                <th scope="col"><strong>/</strong></th>
                <th scope="col"><strong>/</strong></th>
                <th scope="col"><strong>/</strong></th>
                <th scope="col"><strong>solidus</strong></th>       
              </tr>
              <tr>
                <th scope="col"><strong>48</strong></th>
                <th scope="col"><strong>0</strong></th>
                <th scope="col"><strong>0</strong></th>
                <th scope="col"><strong>0</strong></th>
                <th scope="col"><strong>0</strong></th>
                <th scope="col"><strong>digit zero</strong></th>       
              </tr>
              <tr>
                <th scope="col"><strong>49</strong></th>
                <th scope="col"><strong>1</strong></th>
                <th scope="col"><strong>1</strong></th>
                <th scope="col"><strong>1</strong></th>
                <th scope="col"><strong>1</strong></th>
                <th scope="col"><strong>digit one</strong></th>       
              </tr>     
              <tr>
                <th scope="col"><strong>50</strong></th>
                <th scope="col"><strong>2</strong></th>
                <th scope="col"><strong>2</strong></th>
                <th scope="col"><strong>2</strong></th>
                <th scope="col"><strong>2</strong></th>
                <th scope="col"><strong>digit two</strong></th>       
              </tr>     
              <tr>
                <th scope="col"><strong>51</strong></th>
                <th scope="col"><strong>3</strong></th>
                <th scope="col"><strong>3</strong></th>
                <th scope="col"><strong>3</strong></th>
                <th scope="col"><strong>3</strong></th>
                <th scope="col"><strong>digit three</strong></th>       
              </tr>    
              <tr>
                <th scope="col"><strong>52</strong></th>
                <th scope="col"><strong>4</strong></th>
                <th scope="col"><strong>4</strong></th>
                <th scope="col"><strong>4</strong></th>
                <th scope="col"><strong>4</strong></th>
                <th scope="col"><strong>digit four</strong></th>       
              </tr>        
              <tr>
                <th scope="col"><strong>53</strong></th>
                <th scope="col"><strong>5</strong></th>
                <th scope="col"><strong>5</strong></th>
                <th scope="col"><strong>5</strong></th>
                <th scope="col"><strong>5</strong></th>
                <th scope="col"><strong>digit five</strong></th>       
              </tr>      
              <tr>
                <th scope="col"><strong>54</strong></th>
                <th scope="col"><strong>6</strong></th>
                <th scope="col"><strong>6</strong></th>
                <th scope="col"><strong>6</strong></th>
                <th scope="col"><strong>6</strong></th>
                <th scope="col"><strong>digit six</strong></th>       
              </tr>       
              <tr>
                <th scope="col"><strong>55</strong></th>
                <th scope="col"><strong>7</strong></th>
                <th scope="col"><strong>7</strong></th>
                <th scope="col"><strong>7</strong></th>
                <th scope="col"><strong>7</strong></th>
                <th scope="col"><strong>digit seven</strong></th>       
              </tr>       
              <tr>
                <th scope="col"><strong>56</strong></th>
                <th scope="col"><strong>8</strong></th>
                <th scope="col"><strong>8</strong></th>
                <th scope="col"><strong>8</strong></th>
                <th scope="col"><strong>8</strong></th>
                <th scope="col"><strong>digit eight</strong></th>       
              </tr>       
              <tr>
                <th scope="col"><strong>57</strong></th>
                <th scope="col"><strong>9</strong></th>
                <th scope="col"><strong>9</strong></th>
                <th scope="col"><strong>9</strong></th>
                <th scope="col"><strong>9</strong></th>
                <th scope="col"><strong>digit nine</strong></th>       
              </tr>    
              <tr>
                <th scope="col"><strong>58</strong></th>
                <th scope="col"><strong>:</strong></th>
                <th scope="col"><strong>:</strong></th>
                <th scope="col"><strong>:</strong></th>
                <th scope="col"><strong>:</strong></th>
                <th scope="col"><strong>	colon</strong></th>       
              </tr>          
              <tr>
                <th scope="col"><strong>59</strong></th>
                <th scope="col"><strong>;</strong></th>
                <th scope="col"><strong>;</strong></th>
                <th scope="col"><strong>;</strong></th>
                <th scope="col"><strong>;</strong></th>
                <th scope="col"><strong>semicolon</strong></th>       
              </tr>     
              <tr>
                <th scope="col"><strong>60</strong></th>
                <th scope="col"><strong>&lt;</strong></th>
                <th scope="col"><strong>&lt;</strong></th>
                <th scope="col"><strong>&lt;</strong></th>
                <th scope="col"><strong>&lt;</strong></th>
                <th scope="col"><strong>less-than sign</strong></th>       
              </tr>    
              <tr>
                <th scope="col"><strong>61</strong></th>
                <th scope="col"><strong>=</strong></th>
                <th scope="col"><strong>=</strong></th>
                <th scope="col"><strong>=</strong></th>
                <th scope="col"><strong>=</strong></th>
                <th scope="col"><strong>equals sign</strong></th>       
              </tr>      
              <tr>
                <th scope="col"><strong>62</strong></th>
                <th scope="col"><strong>&gt;</strong></th>
                <th scope="col"><strong>&gt;</strong></th>
                <th scope="col"><strong>&gt;</strong></th>
                <th scope="col"><strong>&gt;</strong></th>
                <th scope="col"><strong>greater-than sign</strong></th>       
              </tr>   
              <tr>
                <th scope="col"><strong>63</strong></th>
                <th scope="col"><strong>?</strong></th>
                <th scope="col"><strong>?</strong></th>
                <th scope="col"><strong>?</strong></th>
                <th scope="col"><strong>?</strong></th>
                <th scope="col"><strong>question mark</strong></th>       
              </tr>    
              <tr>
                <th scope="col"><strong>64</strong></th>
                <th scope="col"><strong>@</strong></th>
                <th scope="col"><strong>@</strong></th>
                <th scope="col"><strong>@</strong></th>
                <th scope="col"><strong>@</strong></th>
                <th scope="col"><strong>commercial at</strong></th>       
              </tr>     
              <tr>
                <th scope="col"><strong>65</strong></th>
                <th scope="col"><strong>A</strong></th>
                <th scope="col"><strong>A</strong></th>
                <th scope="col"><strong>A</strong></th>
                <th scope="col"><strong>A</strong></th>
                <th scope="col"><strong>Latin capital letter A</strong></th>       
              </tr>      
              <tr>
                <th scope="col"><strong>66</strong></th>
                <th scope="col"><strong>B</strong></th>
                <th scope="col"><strong>B</strong></th>
                <th scope="col"><strong>B</strong></th>
                <th scope="col"><strong>B</strong></th>
                <th scope="col"><strong>Latin capital letter B</strong></th>       
              </tr>      
              <tr>
                <th scope="col"><strong>67</strong></th>
                <th scope="col"><strong>C</strong></th>
                <th scope="col"><strong>C</strong></th>
                <th scope="col"><strong>C</strong></th>
                <th scope="col"><strong>C</strong></th>
                <th scope="col"><strong>Latin capital letter C</strong></th>       
              </tr>     
              <tr>
                <th scope="col"><strong>68</strong></th>
                <th scope="col"><strong>D</strong></th>
                <th scope="col"><strong>D</strong></th>
                <th scope="col"><strong>D</strong></th>
                <th scope="col"><strong>D</strong></th>
                <th scope="col"><strong>Latin capital letter D</strong></th>       
              </tr>    
                <tr>
                <th scope="col"><strong>69</strong></th>
                <th scope="col"><strong>E</strong></th>
                <th scope="col"><strong>E</strong></th>
                <th scope="col"><strong>E</strong></th>
                <th scope="col"><strong>E</strong></th>
                <th scope="col"><strong>Latin capital letter E</strong></th>       
              </tr>     
               <tr>
                <th scope="col"><strong>70</strong></th>
                <th scope="col"><strong>F</strong></th>
                <th scope="col"><strong>F</strong></th>
                <th scope="col"><strong>F</strong></th>
                <th scope="col"><strong>F</strong></th>
                <th scope="col"><strong>Latin capital letter F</strong></th>       
              </tr>     
               <tr>
                <th scope="col"><strong>71</strong></th>
                <th scope="col"><strong>G</strong></th>
                <th scope="col"><strong>G</strong></th>
                <th scope="col"><strong>G</strong></th>
                <th scope="col"><strong>G</strong></th>
                <th scope="col"><strong>Latin capital letter G</strong></th>       
              </tr>     
              <tr>
                <th scope="col"><strong>72</strong></th>
                <th scope="col"><strong>H</strong></th>
                <th scope="col"><strong>H</strong></th>
                <th scope="col"><strong>H</strong></th>
                <th scope="col"><strong>H</strong></th>
                <th scope="col"><strong>Latin capital letter H</strong></th>       
              </tr>     
              <tr>
                <th scope="col"><strong>73</strong></th>
                <th scope="col"><strong>I</strong></th>
                <th scope="col"><strong>I</strong></th>
                <th scope="col"><strong>I</strong></th>
                <th scope="col"><strong>I</strong></th>
                <th scope="col"><strong>Latin capital letter I</strong></th>       
              </tr>     
              <tr>
                <th scope="col"><strong>74</strong></th>
                <th scope="col"><strong>J</strong></th>
                <th scope="col"><strong>J</strong></th>
                <th scope="col"><strong>J</strong></th>
                <th scope="col"><strong>J</strong></th>
                <th scope="col"><strong>Latin capital letter J</strong></th>       
              </tr>     
              <tr>
                <th scope="col"><strong>75</strong></th>
                <th scope="col"><strong>K</strong></th>
                <th scope="col"><strong>K</strong></th>
                <th scope="col"><strong>K</strong></th>
                <th scope="col"><strong>K</strong></th>
                <th scope="col"><strong>Latin capital letter K</strong></th>       
              </tr>     
              <tr>
                <th scope="col"><strong>76</strong></th>
                <th scope="col"><strong>L</strong></th>
                <th scope="col"><strong>L</strong></th>
                <th scope="col"><strong>L</strong></th>
                <th scope="col"><strong>L</strong></th>
                <th scope="col"><strong>Latin capital letter L</strong></th>       
              </tr>     
              <tr>
                <th scope="col"><strong>77</strong></th>
                <th scope="col"><strong>M</strong></th>
                <th scope="col"><strong>M</strong></th>
                <th scope="col"><strong>M</strong></th>
                <th scope="col"><strong>M</strong></th>
                <th scope="col"><strong>Latin capital letter M</strong></th>       
              </tr>     
              <tr>
                <th scope="col"><strong>78</strong></th>
                <th scope="col"><strong>N</strong></th>
                <th scope="col"><strong>N</strong></th>
                <th scope="col"><strong>N</strong></th>
                <th scope="col"><strong>N</strong></th>
                <th scope="col"><strong>Latin capital letter N</strong></th>       
              </tr>     
              <tr>
                <th scope="col"><strong>79</strong></th>
                <th scope="col"><strong>O</strong></th>
                <th scope="col"><strong>O</strong></th>
                <th scope="col"><strong>O</strong></th>
                <th scope="col"><strong>O</strong></th>
                <th scope="col"><strong>Latin capital letter O</strong></th>       
              </tr>     
              <tr>
                <th scope="col"><strong>80</strong></th>
                <th scope="col"><strong>P</strong></th>
                <th scope="col"><strong>P</strong></th>
                <th scope="col"><strong>P</strong></th>
                <th scope="col"><strong>P</strong></th>
                <th scope="col"><strong>Latin capital letter P</strong></th>       
              </tr>     
              <tr>
                <th scope="col"><strong>81</strong></th>
                <th scope="col"><strong>Q</strong></th>
                <th scope="col"><strong>Q</strong></th>
                <th scope="col"><strong>Q</strong></th>
                <th scope="col"><strong>Q</strong></th>
                <th scope="col"><strong>Latin capital letter Q</strong></th>       
              </tr>     
              <tr>
                <th scope="col"><strong>82</strong></th>
                <th scope="col"><strong>R</strong></th>
                <th scope="col"><strong>R</strong></th>
                <th scope="col"><strong>R</strong></th>
                <th scope="col"><strong>R</strong></th>
                <th scope="col"><strong>Latin capital letter R</strong></th>       
              </tr>     
              <tr>
                <th scope="col"><strong>83</strong></th>
                <th scope="col"><strong>S</strong></th>
                <th scope="col"><strong>S</strong></th>
                <th scope="col"><strong>S</strong></th>
                <th scope="col"><strong>S</strong></th>
                <th scope="col"><strong>Latin capital letter S</strong></th>       
              </tr>   
              <tr>
                <th scope="col"><strong>84</strong></th>
                <th scope="col"><strong>T</strong></th>
                <th scope="col"><strong>T</strong></th>
                <th scope="col"><strong>T</strong></th>
                <th scope="col"><strong>T</strong></th>
                <th scope="col"><strong>Latin capital letter T</strong></th>       
              </tr>   
              <tr>
                <th scope="col"><strong>85</strong></th>
                <th scope="col"><strong>U</strong></th>
                <th scope="col"><strong>U</strong></th>
                <th scope="col"><strong>U</strong></th>
                <th scope="col"><strong>U</strong></th>
                <th scope="col"><strong>Latin capital letter U</strong></th>       
              </tr>   
              <tr>
                <th scope="col"><strong>86</strong></th>
                <th scope="col"><strong>V</strong></th>
                <th scope="col"><strong>V</strong></th>
                <th scope="col"><strong>V</strong></th>
                <th scope="col"><strong>V</strong></th>
                <th scope="col"><strong>Latin capital letter V</strong></th>       
              </tr>   
              <tr>
                <th scope="col"><strong>87</strong></th>
                <th scope="col"><strong>W</strong></th>
                <th scope="col"><strong>W</strong></th>
                <th scope="col"><strong>W</strong></th>
                <th scope="col"><strong>W</strong></th>
                <th scope="col"><strong>Latin capital letter W</strong></th>       
              </tr>   
              <tr>
                <th scope="col"><strong>88</strong></th>
                <th scope="col"><strong>X</strong></th>
                <th scope="col"><strong>X</strong></th>
                <th scope="col"><strong>X</strong></th>
                <th scope="col"><strong>X</strong></th>
                <th scope="col"><strong>Latin capital letter X</strong></th>       
              </tr>   
              <tr>
                <th scope="col"><strong>89</strong></th>
                <th scope="col"><strong>Y</strong></th>
                <th scope="col"><strong>Y</strong></th>
                <th scope="col"><strong>Y</strong></th>
                <th scope="col"><strong>Y</strong></th>
                <th scope="col"><strong>Latin capital letter Y</strong></th>       
              </tr>   
              <tr>
                <th scope="col"><strong>90</strong></th>
                <th scope="col"><strong>Z</strong></th>
                <th scope="col"><strong>Z</strong></th>
                <th scope="col"><strong>Z</strong></th>
                <th scope="col"><strong>Z</strong></th>
                <th scope="col"><strong>Latin capital letter Z</strong></th>       
              </tr>   
              <tr>
                <th scope="col"><strong>91</strong></th>
                <th scope="col"><strong>[</strong></th>
                <th scope="col"><strong>[</strong></th>
                <th scope="col"><strong>[</strong></th>
                <th scope="col"><strong>[</strong></th>
                <th scope="col"><strong>left square bracket</strong></th>       
              </tr>   
              <tr>
                <th scope="col"><strong>92</strong></th>
                <th scope="col"><strong>\</strong></th>
                <th scope="col"><strong>\</strong></th>
                <th scope="col"><strong>\</strong></th>
                <th scope="col"><strong>\</strong></th>
                <th scope="col"><strong>reverse solidus</strong></th>       
              </tr>   
              <tr>
                <th scope="col"><strong>93</strong></th>
                <th scope="col"><strong>]</strong></th>
                <th scope="col"><strong>]</strong></th>
                <th scope="col"><strong>]</strong></th>
                <th scope="col"><strong>]</strong></th>
                <th scope="col"><strong>right square bracket</strong></th>       
              </tr>   
              <tr>
                <th scope="col"><strong>94</strong></th>
                <th scope="col"><strong>^</strong></th>
                <th scope="col"><strong>^</strong></th>
                <th scope="col"><strong>^</strong></th>
                <th scope="col"><strong>^</strong></th>
                <th scope="col"><strong>circumflex accent</strong></th>       
              </tr>   
              <tr>
                <th scope="col"><strong>95</strong></th>
                <th scope="col"><strong>_</strong></th>
                <th scope="col"><strong>_</strong></th>
                <th scope="col"><strong>_</strong></th>
                <th scope="col"><strong>_</strong></th>
                <th scope="col"><strong>low line</strong></th>       
              </tr>   
              <tr>
                <th scope="col"><strong>96</strong></th>
                <th scope="col"><strong>`</strong></th>
                <th scope="col"><strong>`</strong></th>
                <th scope="col"><strong>`</strong></th>
                <th scope="col"><strong>`</strong></th>
                <th scope="col"><strong>	grave accent</strong></th>       
              </tr>   
              <tr>
                <th scope="col"><strong>97</strong></th>
                <th scope="col"><strong>a</strong></th>
                <th scope="col"><strong>a</strong></th>
                <th scope="col"><strong>a</strong></th>
                <th scope="col"><strong>a</strong></th>
                <th scope="col"><strong>Latin small letter a</strong></th>       
              </tr>   
              <tr>
                <th scope="col"><strong>98</strong></th>
                <th scope="col"><strong>b</strong></th>
                <th scope="col"><strong>b</strong></th>
                <th scope="col"><strong>b</strong></th>
                <th scope="col"><strong>b</strong></th>
                <th scope="col"><strong>Latin small letter b</strong></th>       
              </tr>   
              <tr>
                <th scope="col"><strong>99</strong></th>
                <th scope="col"><strong>c</strong></th>
                <th scope="col"><strong>c</strong></th>
                <th scope="col"><strong>c</strong></th>
                <th scope="col"><strong>c</strong></th>
                <th scope="col"><strong>Latin small letter c</strong></th>       
              </tr>   
              <tr>
                <th scope="col"><strong>100</strong></th>
                <th scope="col"><strong>d</strong></th>
                <th scope="col"><strong>d</strong></th>
                <th scope="col"><strong>d</strong></th>
                <th scope="col"><strong>d</strong></th>
                <th scope="col"><strong>Latin small letter d</strong></th>       
              </tr>   
              <tr>
                <th scope="col"><strong>101</strong></th>
                <th scope="col"><strong>e</strong></th>
                <th scope="col"><strong>e</strong></th>
                <th scope="col"><strong>e</strong></th>
                <th scope="col"><strong>e</strong></th>
                <th scope="col"><strong>Latin small letter e</strong></th>       
              </tr>   
              <tr>
                <th scope="col"><strong>101</strong></th>
                <th scope="col"><strong>e</strong></th>
                <th scope="col"><strong>e</strong></th>
                <th scope="col"><strong>e</strong></th>
                <th scope="col"><strong>e</strong></th>
                <th scope="col"><strong>Latin small letter e</strong></th>       
              </tr>   
              <tr>
                <th scope="col"><strong>102</strong></th>
                <th scope="col"><strong>f</strong></th>
                <th scope="col"><strong>f</strong></th>
                <th scope="col"><strong>f</strong></th>
                <th scope="col"><strong>f</strong></th>
                <th scope="col"><strong>Latin small letter f</strong></th>       
              </tr>   
              <tr>
                <th scope="col"><strong>103</strong></th>
                <th scope="col"><strong>g</strong></th>
                <th scope="col"><strong>g</strong></th>
                <th scope="col"><strong>g</strong></th>
                <th scope="col"><strong>g</strong></th>
                <th scope="col"><strong>Latin small letter g</strong></th>       
              </tr>   
              <tr>
                <th scope="col"><strong>104</strong></th>
                <th scope="col"><strong>h</strong></th>
                <th scope="col"><strong>h</strong></th>
                <th scope="col"><strong>h</strong></th>
                <th scope="col"><strong>h</strong></th>
                <th scope="col"><strong>Latin small letter h</strong></th>       
              </tr>   
              <tr>
                <th scope="col"><strong>105</strong></th>
                <th scope="col"><strong>i</strong></th>
                <th scope="col"><strong>i</strong></th>
                <th scope="col"><strong>i</strong></th>
                <th scope="col"><strong>i</strong></th>
                <th scope="col"><strong>Latin small letter i</strong></th>       
              </tr>   
              <tr>
                <th scope="col"><strong>106</strong></th>
                <th scope="col"><strong>j</strong></th>
                <th scope="col"><strong>j</strong></th>
                <th scope="col"><strong>j</strong></th>
                <th scope="col"><strong>j</strong></th>
                <th scope="col"><strong>Latin small letter j</strong></th>       
              </tr>   
              <tr>
                <th scope="col"><strong>107</strong></th>
                <th scope="col"><strong>k</strong></th>
                <th scope="col"><strong>k</strong></th>
                <th scope="col"><strong>k</strong></th>
                <th scope="col"><strong>k</strong></th>
                <th scope="col"><strong>Latin small letter k</strong></th>       
              </tr>  
              <tr>
                <th scope="col"><strong>108</strong></th>
                <th scope="col"><strong>l</strong></th>
                <th scope="col"><strong>l</strong></th>
                <th scope="col"><strong>l</strong></th>
                <th scope="col"><strong>l</strong></th>
                <th scope="col"><strong>Latin small letter l</strong></th>       
              </tr>   
              <tr>
                <th scope="col"><strong>109</strong></th>
                <th scope="col"><strong>m</strong></th>
                <th scope="col"><strong>m</strong></th>
                <th scope="col"><strong>m</strong></th>
                <th scope="col"><strong>m</strong></th>
                <th scope="col"><strong>Latin small letter m</strong></th>       
              </tr>   
              <tr>
                <th scope="col"><strong>110</strong></th>
                <th scope="col"><strong>n</strong></th>
                <th scope="col"><strong>n</strong></th>
                <th scope="col"><strong>n</strong></th>
                <th scope="col"><strong>n</strong></th>
                <th scope="col"><strong>Latin small letter n</strong></th>       
              </tr>   
              <tr>
                <th scope="col"><strong>111</strong></th>
                <th scope="col"><strong>o</strong></th>
                <th scope="col"><strong>o</strong></th>
                <th scope="col"><strong>o</strong></th>
                <th scope="col"><strong>o</strong></th>
                <th scope="col"><strong>Latin small letter o</strong></th>       
              </tr>   
              <tr>
                <th scope="col"><strong>112</strong></th>
                <th scope="col"><strong>p</strong></th>
                <th scope="col"><strong>p</strong></th>
                <th scope="col"><strong>p</strong></th>
                <th scope="col"><strong>p</strong></th>
                <th scope="col"><strong>Latin small letter p</strong></th>       
              </tr>   
              <tr>
                <th scope="col"><strong>113</strong></th>
                <th scope="col"><strong>q</strong></th>
                <th scope="col"><strong>q</strong></th>
                <th scope="col"><strong>q</strong></th>
                <th scope="col"><strong>q</strong></th>
                <th scope="col"><strong>Latin small letter q</strong></th>       
              </tr>   
              <tr>
                <th scope="col"><strong>114</strong></th>
                <th scope="col"><strong>r</strong></th>
                <th scope="col"><strong>r</strong></th>
                <th scope="col"><strong>r</strong></th>
                <th scope="col"><strong>r</strong></th>
                <th scope="col"><strong>Latin small letter r</strong></th>       
              </tr>   
              <tr>
                <th scope="col"><strong>115</strong></th>
                <th scope="col"><strong>s</strong></th>
                <th scope="col"><strong>s</strong></th>
                <th scope="col"><strong>s</strong></th>
                <th scope="col"><strong>s</strong></th>
                <th scope="col"><strong>Latin small letter s</strong></th>       
              </tr>   
              <tr>
                <th scope="col"><strong>116</strong></th>
                <th scope="col"><strong>t</strong></th>
                <th scope="col"><strong>t</strong></th>
                <th scope="col"><strong>t</strong></th>
                <th scope="col"><strong>t</strong></th>
                <th scope="col"><strong>Latin small letter t</strong></th>       
              </tr>   
              <tr>
                <th scope="col"><strong>117</strong></th>
                <th scope="col"><strong>u</strong></th>
                <th scope="col"><strong>u</strong></th>
                <th scope="col"><strong>u</strong></th>
                <th scope="col"><strong>u</strong></th>
                <th scope="col"><strong>Latin small letter u</strong></th>       
              </tr>   
              <tr>
                <th scope="col"><strong>118</strong></th>
                <th scope="col"><strong>v</strong></th>
                <th scope="col"><strong>v</strong></th>
                <th scope="col"><strong>v</strong></th>
                <th scope="col"><strong>v</strong></th>
                <th scope="col"><strong>Latin small letter v</strong></th>       
              </tr>   
              <tr>
                <th scope="col"><strong>119</strong></th>
                <th scope="col"><strong>w</strong></th>
                <th scope="col"><strong>w</strong></th>
                <th scope="col"><strong>w</strong></th>
                <th scope="col"><strong>w</strong></th>
                <th scope="col"><strong>Latin small letter w</strong></th>       
              </tr>   
              <tr>
                <th scope="col"><strong>120</strong></th>
                <th scope="col"><strong>x</strong></th>
                <th scope="col"><strong>x</strong></th>
                <th scope="col"><strong>x</strong></th>
                <th scope="col"><strong>x</strong></th>
                <th scope="col"><strong>Latin small letter x</strong></th>       
              </tr>   
              <tr>
                <th scope="col"><strong>121</strong></th>
                <th scope="col"><strong>y</strong></th>
                <th scope="col"><strong>y</strong></th>
                <th scope="col"><strong>y</strong></th>
                <th scope="col"><strong>y</strong></th>
                <th scope="col"><strong>Latin small letter y</strong></th>       
              </tr>   
              <tr>
                <th scope="col"><strong>122</strong></th>
                <th scope="col"><strong>z</strong></th>
                <th scope="col"><strong>z</strong></th>
                <th scope="col"><strong>z</strong></th>
                <th scope="col"><strong>z</strong></th>
                <th scope="col"><strong>Latin small letter z</strong></th>       
              </tr>   
              <tr>
                <th scope="col"><strong>123</strong></th>
                <th scope="col"><strong>&#123;</strong></th>
                <th scope="col"><strong>&#123;</strong></th>
                <th scope="col"><strong>&#123;</strong></th>
                <th scope="col"><strong>&#123;</strong></th>
                <th scope="col"><strong>left curly bracket</strong></th>       
              </tr>   
              <tr>
                <th scope="col"><strong>124</strong></th>
                <th scope="col"><strong>&#124;</strong></th>
                <th scope="col"><strong>&#124;</strong></th>
                <th scope="col"><strong>&#124;</strong></th>
                <th scope="col"><strong>&#124;</strong></th>
                <th scope="col"><strong>vertical line</strong></th>       
              </tr>   
              <tr>
                <th scope="col"><strong>125</strong></th>
                <th scope="col"><strong>&#125;</strong></th>
                <th scope="col"><strong>&#125;</strong></th>
                <th scope="col"><strong>&#125;</strong></th>
                <th scope="col"><strong>&#125;</strong></th>
                <th scope="col"><strong>right curly bracket</strong></th>       
              </tr>   
              <tr>
                <th scope="col"><strong>126</strong></th>
                <th scope="col"><strong>&#126;</strong></th>
                <th scope="col"><strong>&#126;</strong></th>
                <th scope="col"><strong>&#126;</strong></th>
                <th scope="col"><strong>&#126;</strong></th>
                <th scope="col"><strong>tilde</strong></th>       
              </tr>   
              <tr>
                <th scope="col"><strong>127</strong></th>
                <th scope="col"><strong>DEL</strong></th>
                <th scope="col"><strong> </strong></th>
                <th scope="col"><strong> </strong></th>
                <th scope="col"><strong> </strong></th>
                <th scope="col"><strong> </strong></th>       
              </tr>  
              <tr>
                <th scope="col"><strong>128</strong></th>
                <th scope="col"><strong> </strong></th>
                <th scope="col"><strong>€</strong></th>
                <th scope="col"><strong> </strong></th>
                <th scope="col"><strong> </strong></th>
                <th scope="col"><strong>euro sign </strong></th>       
              </tr>    
              <tr>
                <th scope="col"><strong>129</strong></th>
                <th scope="col"><strong> </strong></th>
                <th scope="col"><strong></strong></th>
                <th scope="col"><strong></strong></th>
                <th scope="col"><strong></strong></th>
                <th scope="col"><strong>NOT USED</strong></th>       
              </tr>   
              <tr>
                <th scope="col"><strong>130</strong></th>
                <th scope="col"><strong> </strong></th>
                <th scope="col"><strong>‚</strong></th>
                <th scope="col"><strong></strong></th>
                <th scope="col"><strong></strong></th>
                <th scope="col"><strong>single low-9 quotation mark</strong></th>       
              </tr>    
              <tr>
                <th scope="col"><strong>131</strong></th>
                <th scope="col"><strong> </strong></th>
                <th scope="col"><strong>	ƒ</strong></th>
                <th scope="col"><strong></strong></th>
                <th scope="col"><strong></strong></th>
                <th scope="col"><strong>Latin small letter f with hook</strong></th>       
              </tr>    
              <tr>
                <th scope="col"><strong>132</strong></th>
                <th scope="col"><strong> </strong></th>
                <th scope="col"><strong>„</strong></th>
                <th scope="col"><strong></strong></th>
                <th scope="col"><strong></strong></th>
                <th scope="col"><strong>double low-9 quotation mark</strong></th>       
              </tr>   
              <tr>
                <th scope="col"><strong>133</strong></th>
                <th scope="col"><strong> </strong></th>
                <th scope="col"><strong>…</strong></th>
                <th scope="col"><strong></strong></th>
                <th scope="col"><strong></strong></th>
                <th scope="col"><strong>	horizontal ellipsis</strong></th>       
              </tr>    
              <tr>
                <th scope="col"><strong>134</strong></th>
                <th scope="col"><strong> </strong></th>
                <th scope="col"><strong>†</strong></th>
                <th scope="col"><strong></strong></th>
                <th scope="col"><strong></strong></th>
                <th scope="col"><strong>dagger</strong></th>       
              </tr>    
              <tr>
                <th scope="col"><strong>135</strong></th>
                <th scope="col"><strong> </strong></th>
                <th scope="col"><strong>‡</strong></th>
                <th scope="col"><strong></strong></th>
                <th scope="col"><strong></strong></th>
                <th scope="col"><strong>	double dagger</strong></th>       
              </tr>    
              <tr>
                <th scope="col"><strong>136</strong></th>
                <th scope="col"><strong> </strong></th>
                <th scope="col"><strong>ˆ</strong></th>
                <th scope="col"><strong></strong></th>
                <th scope="col"><strong></strong></th>
                <th scope="col"><strong>modifier letter circumflex accent</strong></th>       
              </tr>    
              <tr>
                <th scope="col"><strong>137</strong></th>
                <th scope="col"><strong> </strong></th>
                <th scope="col"><strong>	‰</strong></th>
                <th scope="col"><strong></strong></th>
                <th scope="col"><strong></strong></th>
                <th scope="col"><strong>	per mille sign</strong></th>       
              </tr>    
              <tr>
                <th scope="col"><strong>138</strong></th>
                <th scope="col"><strong> </strong></th>
                <th scope="col"><strong>Š</strong></th>
                <th scope="col"><strong></strong></th>
                <th scope="col"><strong></strong></th>
                <th scope="col"><strong>Latin capital letter S with caron</strong></th>       
              </tr>    
              <tr>
                <th scope="col"><strong>139</strong></th>
                <th scope="col"><strong> </strong></th>
                <th scope="col"><strong>‹</strong></th>
                <th scope="col"><strong></strong></th>
                <th scope="col"><strong></strong></th>
                <th scope="col"><strong>single left-pointing angle quotation mark</strong></th>       
              </tr>  
              <tr>
                <th scope="col"><strong>140</strong></th>
                <th scope="col"><strong> </strong></th>
                <th scope="col"><strong>Œ</strong></th>
                <th scope="col"><strong></strong></th>
                <th scope="col"><strong></strong></th>
                <th scope="col"><strong>Latin capital ligature OE</strong></th>       
              </tr>    
              <tr>
                <th scope="col"><strong>141</strong></th>
                <th scope="col"><strong> </strong></th>
                <th scope="col"><strong></strong></th>
                <th scope="col"><strong></strong></th>
                <th scope="col"><strong></strong></th>
                <th scope="col"><strong>NOT USED</strong></th>       
              </tr>    
              <tr>
                <th scope="col"><strong>142</strong></th>
                <th scope="col"><strong> </strong></th>
                <th scope="col"><strong>Ž</strong></th>
                <th scope="col"><strong></strong></th>
                <th scope="col"><strong></strong></th>
                <th scope="col"><strong>Latin capital letter Z with caron</strong></th>       
              </tr>  
              <tr>
                <th scope="col"><strong>143</strong></th>
                <th scope="col"><strong> </strong></th>
                <th scope="col"><strong></strong></th>
                <th scope="col"><strong></strong></th>
                <th scope="col"><strong></strong></th>
                <th scope="col"><strong>NOT USED</strong></th>       
              </tr>   
              <tr>
                <th scope="col"><strong>144</strong></th>
                <th scope="col"><strong> </strong></th>
                <th scope="col"><strong></strong></th>
                <th scope="col"><strong></strong></th>
                <th scope="col"><strong></strong></th>
                <th scope="col"><strong>NOT USED</strong></th>       
              </tr>   
              <tr>
                <th scope="col"><strong>145</strong></th>
                <th scope="col"><strong> </strong></th>
                <th scope="col"><strong>‘</strong></th>
                <th scope="col"><strong></strong></th>
                <th scope="col"><strong></strong></th>
                <th scope="col"><strong>left single quotation mark</strong></th>       
              </tr>   
              <tr>
                <th scope="col"><strong>146</strong></th>
                <th scope="col"><strong> </strong></th>
                <th scope="col"><strong>’</strong></th>
                <th scope="col"><strong></strong></th>
                <th scope="col"><strong></strong></th>
                <th scope="col"><strong>right single quotation mark</strong></th>       
              </tr>   
              <tr>
                <th scope="col"><strong>147</strong></th>
                <th scope="col"><strong> </strong></th>
                <th scope="col"><strong>“</strong></th>
                <th scope="col"><strong></strong></th>
                <th scope="col"><strong></strong></th>
                <th scope="col"><strong>left double quotation mark</strong></th>       
              </tr>   
              <tr>
                <th scope="col"><strong>148</strong></th>
                <th scope="col"><strong> </strong></th>
                <th scope="col"><strong>”</strong></th>
                <th scope="col"><strong></strong></th>
                <th scope="col"><strong></strong></th>
                <th scope="col"><strong>	right double quotation mark</strong></th>       
              </tr>   
              <tr>
                <th scope="col"><strong>149</strong></th>
                <th scope="col"><strong> </strong></th>
                <th scope="col"><strong>•</strong></th>
                <th scope="col"><strong></strong></th>
                <th scope="col"><strong></strong></th>
                <th scope="col"><strong>bullet</strong></th>       
              </tr>   
              <tr>
                <th scope="col"><strong>150</strong></th>
                <th scope="col"><strong> </strong></th>
                <th scope="col"><strong>–</strong></th>
                <th scope="col"><strong></strong></th>
                <th scope="col"><strong></strong></th>
                <th scope="col"><strong>en dash</strong></th>       
              </tr>   
              <tr>
                <th scope="col"><strong>151</strong></th>
                <th scope="col"><strong> </strong></th>
                <th scope="col"><strong>—</strong></th>
                <th scope="col"><strong></strong></th>
                <th scope="col"><strong></strong></th>
                <th scope="col"><strong>em dash</strong></th>       
              </tr>   
              <tr>
                <th scope="col"><strong>152</strong></th>
                <th scope="col"><strong> </strong></th>
                <th scope="col"><strong>˜</strong></th>
                <th scope="col"><strong></strong></th>
                <th scope="col"><strong></strong></th>
                <th scope="col"><strong>small tilde</strong></th>       
              </tr>   
              <tr>
                <th scope="col"><strong>153</strong></th>
                <th scope="col"><strong> </strong></th>
                <th scope="col"><strong>™</strong></th>
                <th scope="col"><strong></strong></th>
                <th scope="col"><strong></strong></th>
                <th scope="col"><strong>trade mark sign</strong></th>       
              </tr>   
              <tr>
                <th scope="col"><strong>154</strong></th>
                <th scope="col"><strong> </strong></th>
                <th scope="col"><strong>š</strong></th>
                <th scope="col"><strong></strong></th>
                <th scope="col"><strong></strong></th>
                <th scope="col"><strong>Latin small letter s with caron</strong></th>       
              </tr>   
              <tr>
                <th scope="col"><strong>155</strong></th>
                <th scope="col"><strong> </strong></th>
                <th scope="col"><strong>›</strong></th>
                <th scope="col"><strong></strong></th>
                <th scope="col"><strong></strong></th>
                <th scope="col"><strong>single right-pointing angle quotation mark</strong></th>       
              </tr>   
              <tr>
                <th scope="col"><strong>156</strong></th>
                <th scope="col"><strong> </strong></th>
                <th scope="col"><strong>œ</strong></th>
                <th scope="col"><strong></strong></th>
                <th scope="col"><strong></strong></th>
                <th scope="col"><strong>Latin small ligature oe</strong></th>       
              </tr>   
              <tr>
                <th scope="col"><strong>157</strong></th>
                <th scope="col"><strong> </strong></th>
                <th scope="col"><strong></strong></th>
                <th scope="col"><strong></strong></th>
                <th scope="col"><strong></strong></th>
                <th scope="col"><strong>NOT USED</strong></th>       
              </tr>   
              <tr>
                <th scope="col"><strong>158</strong></th>
                <th scope="col"><strong> </strong></th>
                <th scope="col"><strong>ž</strong></th>
                <th scope="col"><strong></strong></th>
                <th scope="col"><strong></strong></th>
                <th scope="col"><strong>Latin small letter z with caron</strong></th>       
              </tr>   
              <tr>
                <th scope="col"><strong>159</strong></th>
                <th scope="col"><strong> </strong></th>
                <th scope="col"><strong>Ÿ</strong></th>
                <th scope="col"><strong></strong></th>
                <th scope="col"><strong></strong></th>
                <th scope="col"><strong>Latin capital letter Y with diaeresis</strong></th>       
              </tr>   
              <tr>
                <th scope="col"><strong>160</strong></th>
                <th scope="col"><strong> </strong></th>
                <th scope="col"><strong> </strong></th>
                <th scope="col"><strong> </strong></th>
                <th scope="col"><strong> </strong></th>
                <th scope="col"><strong>no-break space</strong></th>       
              </tr>   
              <tr>
                <th scope="col"><strong>161</strong></th>
                <th scope="col"><strong> </strong></th>
                <th scope="col"><strong>¡</strong></th>
                <th scope="col"><strong>¡</strong></th>
                <th scope="col"><strong>¡</strong></th>
                <th scope="col"><strong>inverted exclamation mark</strong></th>       
              </tr>   
              <tr>
                <th scope="col"><strong>162</strong></th>
                <th scope="col"><strong> </strong></th>
                <th scope="col"><strong>¢</strong></th>
                <th scope="col"><strong>¢</strong></th>
                <th scope="col"><strong>¢</strong></th>
                <th scope="col"><strong>cent sign</strong></th>       
              </tr>   
              <tr>
                <th scope="col"><strong>163</strong></th>
                <th scope="col"><strong> </strong></th>
                <th scope="col"><strong>£</strong></th>
                <th scope="col"><strong>£</strong></th>
                <th scope="col"><strong>£</strong></th>
                <th scope="col"><strong>pound sign</strong></th>       
              </tr>   
              <tr>
                <th scope="col"><strong>164</strong></th>
                <th scope="col"><strong> </strong></th>
                <th scope="col"><strong>¤</strong></th>
                <th scope="col"><strong>¤</strong></th>
                <th scope="col"><strong>¤</strong></th>
                <th scope="col"><strong>currency sign</strong></th>       
              </tr>   
              <tr>
                <th scope="col"><strong>165</strong></th>
                <th scope="col"><strong> </strong></th>
                <th scope="col"><strong>¥</strong></th>
                <th scope="col"><strong>¥</strong></th>
                <th scope="col"><strong>¥</strong></th>
                <th scope="col"><strong>yen sign</strong></th>       
              </tr>   
              <tr>
                <th scope="col"><strong>166</strong></th>
                <th scope="col"><strong> </strong></th>
                <th scope="col"><strong>¦</strong></th>
                <th scope="col"><strong>¦</strong></th>
                <th scope="col"><strong>¦</strong></th>
                <th scope="col"><strong>broken bar</strong></th>       
              </tr>   
              <tr>
                <th scope="col"><strong>167</strong></th>
                <th scope="col"><strong> </strong></th>
                <th scope="col"><strong>§</strong></th>
                <th scope="col"><strong>§</strong></th>
                <th scope="col"><strong>§</strong></th>
                <th scope="col"><strong>section sign</strong></th>       
              </tr>   
              <tr>
                <th scope="col"><strong>168</strong></th>
                <th scope="col"><strong> </strong></th>
                <th scope="col"><strong>¨</strong></th>
                <th scope="col"><strong>¨</strong></th>
                <th scope="col"><strong>¨</strong></th>
                <th scope="col"><strong>diaeresis</strong></th>       
              </tr>   
              <tr>
                <th scope="col"><strong>169</strong></th>
                <th scope="col"><strong> </strong></th>
                <th scope="col"><strong>©</strong></th>
                <th scope="col"><strong>©</strong></th>
                <th scope="col"><strong>©</strong></th>
                <th scope="col"><strong>copyright sign</strong></th>       
              </tr>  
              <tr>
                <th scope="col"><strong>170</strong></th>
                <th scope="col"><strong> </strong></th>
                <th scope="col"><strong>ª</strong></th>
                <th scope="col"><strong>ª</strong></th>
                <th scope="col"><strong>ª</strong></th>
                <th scope="col"><strong>feminine ordinal indicator</strong></th>       
              </tr>    
              <tr>
                <th scope="col"><strong>171</strong></th>
                <th scope="col"><strong> </strong></th>
                <th scope="col"><strong>«</strong></th>
                <th scope="col"><strong>«</strong></th>
                <th scope="col"><strong>«</strong></th>
                <th scope="col"><strong>left-pointing double angle quotation mark</strong></th>       
              </tr>    
              <tr>
                <th scope="col"><strong>172</strong></th>
                <th scope="col"><strong> </strong></th>
                <th scope="col"><strong>¬</strong></th>
                <th scope="col"><strong>¬</strong></th>
                <th scope="col"><strong>¬</strong></th>
                <th scope="col"><strong>not sign</strong></th>       
              </tr>    
              <tr>
                <th scope="col"><strong>173</strong></th>
                <th scope="col"><strong> </strong></th>
                <th scope="col"><strong>¬</strong></th>
                <th scope="col"><strong>¬</strong></th>
                <th scope="col"><strong>¬</strong></th>
                <th scope="col"><strong>soft hyphen</strong></th>       
              </tr>    
              <tr>
                <th scope="col"><strong>174</strong></th>
                <th scope="col"><strong> </strong></th>
                <th scope="col"><strong>®</strong></th>
                <th scope="col"><strong>®</strong></th>
                <th scope="col"><strong>®</strong></th>
                <th scope="col"><strong>registered sign</strong></th>       
              </tr>    
              <tr>
                <th scope="col"><strong>175</strong></th>
                <th scope="col"><strong> </strong></th>
                <th scope="col"><strong>¯</strong></th>
                <th scope="col"><strong>¯</strong></th>
                <th scope="col"><strong>¯</strong></th>
                <th scope="col"><strong>macron</strong></th>       
              </tr>    
              <tr>
                <th scope="col"><strong>176</strong></th>
                <th scope="col"><strong> </strong></th>
                <th scope="col"><strong>°</strong></th>
                <th scope="col"><strong>°</strong></th>
                <th scope="col"><strong>°</strong></th>
                <th scope="col"><strong>degree sign</strong></th>       
              </tr>    
              <tr>
                <th scope="col"><strong>177</strong></th>
                <th scope="col"><strong> </strong></th>
                <th scope="col"><strong>±</strong></th>
                <th scope="col"><strong>±</strong></th>
                <th scope="col"><strong>±</strong></th>
                <th scope="col"><strong>plus-minus sign</strong></th>       
              </tr>    
              <tr>
                <th scope="col"><strong>178</strong></th>
                <th scope="col"><strong> </strong></th>
                <th scope="col"><strong>²</strong></th>
                <th scope="col"><strong>²</strong></th>
                <th scope="col"><strong>²</strong></th>
                <th scope="col"><strong>superscript two</strong></th>       
              </tr>    
              <tr>
                <th scope="col"><strong>179</strong></th>
                <th scope="col"><strong> </strong></th>
                <th scope="col"><strong>³</strong></th>
                <th scope="col"><strong>³</strong></th>
                <th scope="col"><strong>³</strong></th>
                <th scope="col"><strong>superscript three</strong></th>       
              </tr>    
              <tr>
                <th scope="col"><strong>180</strong></th>
                <th scope="col"><strong> </strong></th>
                <th scope="col"><strong>´</strong></th>
                <th scope="col"><strong>´</strong></th>
                <th scope="col"><strong>´</strong></th>
                <th scope="col"><strong>acute accent</strong></th>       
              </tr>    
              <tr>
                <th scope="col"><strong>181</strong></th>
                <th scope="col"><strong> </strong></th>
                <th scope="col"><strong>µ</strong></th>
                <th scope="col"><strong>µ</strong></th>
                <th scope="col"><strong>µ</strong></th>
                <th scope="col"><strong>micro sign</strong></th>       
              </tr>    
              <tr>
                <th scope="col"><strong>182</strong></th>
                <th scope="col"><strong> </strong></th>
                <th scope="col"><strong>¶</strong></th>
                <th scope="col"><strong>¶</strong></th>
                <th scope="col"><strong>¶</strong></th>
                <th scope="col"><strong>pilcrow sign</strong></th>       
              </tr>    
              <tr>
                <th scope="col"><strong>183</strong></th>
                <th scope="col"><strong> </strong></th>
                <th scope="col"><strong>·</strong></th>
                <th scope="col"><strong>·</strong></th>
                <th scope="col"><strong>·</strong></th>
                <th scope="col"><strong>middle dot</strong></th>       
              </tr>    
              <tr>
                <th scope="col"><strong>184</strong></th>
                <th scope="col"><strong> </strong></th>
                <th scope="col"><strong>¸</strong></th>
                <th scope="col"><strong>¸</strong></th>
                <th scope="col"><strong>¸</strong></th>
                <th scope="col"><strong>cedilla</strong></th>       
              </tr>    
              <tr>
                <th scope="col"><strong>185</strong></th>
                <th scope="col"><strong> </strong></th>
                <th scope="col"><strong>¹</strong></th>
                <th scope="col"><strong>¹</strong></th>
                <th scope="col"><strong>¹</strong></th>
                <th scope="col"><strong>superscript one</strong></th>       
              </tr>   
              <tr>
                <th scope="col"><strong>186</strong></th>
                <th scope="col"><strong> </strong></th>
                <th scope="col"><strong>º</strong></th>
                <th scope="col"><strong>º</strong></th>
                <th scope="col"><strong>º</strong></th>
                <th scope="col"><strong>masculine ordinal indicator</strong></th>       
              </tr>     
              <tr>
                <th scope="col"><strong>187</strong></th>
                <th scope="col"><strong> </strong></th>
                <th scope="col"><strong>»</strong></th>
                <th scope="col"><strong>»</strong></th>
                <th scope="col"><strong>»</strong></th>
                <th scope="col"><strong>right-pointing double angle quotation mark</strong></th>       
              </tr>   
              <tr>
                <th scope="col"><strong>188</strong></th>
                <th scope="col"><strong> </strong></th>
                <th scope="col"><strong>¼</strong></th>
                <th scope="col"><strong>¼</strong></th>
                <th scope="col"><strong>¼</strong></th>
                <th scope="col"><strong>vulgar fraction one quarter</strong></th>       
              </tr>     
              <tr>
                <th scope="col"><strong>189</strong></th>
                <th scope="col"><strong> </strong></th>
                <th scope="col"><strong>½</strong></th>
                <th scope="col"><strong>½</strong></th>
                <th scope="col"><strong>½</strong></th>
                <th scope="col"><strong>vulgar fraction one half</strong></th>       
              </tr>     
              <tr>
                <th scope="col"><strong>190</strong></th>
                <th scope="col"><strong> </strong></th>
                <th scope="col"><strong>¾</strong></th>
                <th scope="col"><strong>¾</strong></th>
                <th scope="col"><strong>¾</strong></th>
                <th scope="col"><strong>vulgar fraction three quarters</strong></th>       
              </tr>     
              <tr>
                <th scope="col"><strong>191</strong></th>
                <th scope="col"><strong> </strong></th>
                <th scope="col"><strong>¿</strong></th>
                <th scope="col"><strong>¿</strong></th>
                <th scope="col"><strong>¿</strong></th>
                <th scope="col"><strong>inverted question mark</strong></th>       
              </tr>     
              <tr>
                <th scope="col"><strong>192</strong></th>
                <th scope="col"><strong> </strong></th>
                <th scope="col"><strong>À</strong></th>
                <th scope="col"><strong>À</strong></th>
                <th scope="col"><strong>À</strong></th>
                <th scope="col"><strong>Latin capital letter A with grave</strong></th>       
              </tr>     
              <tr>
                <th scope="col"><strong>193</strong></th>
                <th scope="col"><strong> </strong></th>
                <th scope="col"><strong>Á</strong></th>
                <th scope="col"><strong>Á</strong></th>
                <th scope="col"><strong>Á</strong></th>
                <th scope="col"><strong>Latin capital letter A with acute</strong></th>       
              </tr>     
              <tr>
                <th scope="col"><strong>194</strong></th>
                <th scope="col"><strong> </strong></th>
                <th scope="col"><strong>Â</strong></th>
                <th scope="col"><strong>Â</strong></th>
                <th scope="col"><strong>Â</strong></th>
                <th scope="col"><strong>Latin capital letter A with circumflex</strong></th>       
              </tr>     
              <tr>
                <th scope="col"><strong>195</strong></th>
                <th scope="col"><strong> </strong></th>
                <th scope="col"><strong>Ã</strong></th>
                <th scope="col"><strong>Ã</strong></th>
                <th scope="col"><strong>Ã</strong></th>
                <th scope="col"><strong>Latin capital letter A with tilde</strong></th>       
              </tr>     
              <tr>
                <th scope="col"><strong>196</strong></th>
                <th scope="col"><strong> </strong></th>
                <th scope="col"><strong>Ä</strong></th>
                <th scope="col"><strong>Ä</strong></th>
                <th scope="col"><strong>Ä</strong></th>
                <th scope="col"><strong>Latin capital letter A with diaeresis</strong></th>       
              </tr>     
              <tr>
                <th scope="col"><strong>197</strong></th>
                <th scope="col"><strong> </strong></th>
                <th scope="col"><strong>Å</strong></th>
                <th scope="col"><strong>Å</strong></th>
                <th scope="col"><strong>Å</strong></th>
                <th scope="col"><strong>Latin capital letter A with ring above</strong></th>       
              </tr>     
              <tr>
                <th scope="col"><strong>198</strong></th>
                <th scope="col"><strong> </strong></th>
                <th scope="col"><strong>Æ</strong></th>
                <th scope="col"><strong>Æ</strong></th>
                <th scope="col"><strong>Æ</strong></th>
                <th scope="col"><strong>Latin capital letter AE</strong></th>       
              </tr>     
              <tr>
                <th scope="col"><strong>199</strong></th>
                <th scope="col"><strong> </strong></th>
                <th scope="col"><strong>Ç</strong></th>
                <th scope="col"><strong>Ç</strong></th>
                <th scope="col"><strong>Ç</strong></th>
                <th scope="col"><strong>Latin capital letter C with cedilla</strong></th>       
              </tr>     
              <tr>
                <th scope="col"><strong>200</strong></th>
                <th scope="col"><strong> </strong></th>
                <th scope="col"><strong>È</strong></th>
                <th scope="col"><strong>È</strong></th>
                <th scope="col"><strong>È</strong></th>
                <th scope="col"><strong>Latin capital letter E with grave</strong></th>       
              </tr>    
              <tr>
                <th scope="col"><strong>201</strong></th>
                <th scope="col"><strong> </strong></th>
                <th scope="col"><strong>É</strong></th>
                <th scope="col"><strong>É</strong></th>
                <th scope="col"><strong>É</strong></th>
                <th scope="col"><strong>Latin capital letter E with acute</strong></th>       
              </tr>    
              <tr>
                <th scope="col"><strong>202</strong></th>
                <th scope="col"><strong> </strong></th>
                <th scope="col"><strong>Ê</strong></th>
                <th scope="col"><strong>Ê</strong></th>
                <th scope="col"><strong>Ê</strong></th>
                <th scope="col"><strong>Latin capital letter E with circumflex</strong></th>       
              </tr>     
              <tr>
                <th scope="col"><strong>203</strong></th>
                <th scope="col"><strong> </strong></th>
                <th scope="col"><strong>Ë</strong></th>
                <th scope="col"><strong>Ë</strong></th>
                <th scope="col"><strong>Ë</strong></th>
                <th scope="col"><strong>Latin capital letter E with diaeresis</strong></th>       
              </tr>     
              <tr>
                <th scope="col"><strong>204</strong></th>
                <th scope="col"><strong> </strong></th>
                <th scope="col"><strong>Ì</strong></th>
                <th scope="col"><strong>Ì</strong></th>
                <th scope="col"><strong>Ì</strong></th>
                <th scope="col"><strong>Latin capital letter I with grave</strong></th>       
              </tr>     
              <tr>
                <th scope="col"><strong>205</strong></th>
                <th scope="col"><strong> </strong></th>
                <th scope="col"><strong>Í</strong></th>
                <th scope="col"><strong>Í</strong></th>
                <th scope="col"><strong>Í</strong></th>
                <th scope="col"><strong>Latin capital letter I with acute</strong></th>       
              </tr>     
              <tr>
                <th scope="col"><strong>206</strong></th>
                <th scope="col"><strong> </strong></th>
                <th scope="col"><strong>Î</strong></th>
                <th scope="col"><strong>Î</strong></th>
                <th scope="col"><strong>Î</strong></th>
                <th scope="col"><strong>Latin capital letter I with circumflex</strong></th>       
              </tr>     
              <tr>
                <th scope="col"><strong>207</strong></th>
                <th scope="col"><strong> </strong></th>
                <th scope="col"><strong>Ï</strong></th>
                <th scope="col"><strong>Ï</strong></th>
                <th scope="col"><strong>Ï</strong></th>
                <th scope="col"><strong>Latin capital letter I with diaeresis</strong></th>       
              </tr>     
              <tr>
                <th scope="col"><strong>208</strong></th>
                <th scope="col"><strong> </strong></th>
                <th scope="col"><strong>Ð</strong></th>
                <th scope="col"><strong>Ð</strong></th>
                <th scope="col"><strong>Ð</strong></th>
                <th scope="col"><strong>Latin capital letter Eth</strong></th>       
              </tr>     
              <tr>
                <th scope="col"><strong>209</strong></th>
                <th scope="col"><strong> </strong></th>
                <th scope="col"><strong>Ñ</strong></th>
                <th scope="col"><strong>Ñ</strong></th>
                <th scope="col"><strong>Ñ</strong></th>
                <th scope="col"><strong>Latin capital letter N with tilde</strong></th>       
              </tr>    
              <tr>
                <th scope="col"><strong>210</strong></th>
                <th scope="col"><strong> </strong></th>
                <th scope="col"><strong>Ò</strong></th>
                <th scope="col"><strong>Ò</strong></th>
                <th scope="col"><strong>Ò</strong></th>
                <th scope="col"><strong>Latin capital letter O with grave</strong></th>       
              </tr>      
              <tr>
                <th scope="col"><strong>211</strong></th>
                <th scope="col"><strong> </strong></th>
                <th scope="col"><strong>Ó</strong></th>
                <th scope="col"><strong>Ó</strong></th>
                <th scope="col"><strong>Ó</strong></th>
                <th scope="col"><strong>Latin capital letter O with acute</strong></th>       
              </tr>     
              <tr>
                <th scope="col"><strong>212</strong></th>
                <th scope="col"><strong> </strong></th>
                <th scope="col"><strong>Ô</strong></th>
                <th scope="col"><strong>Ô</strong></th>
                <th scope="col"><strong>Ô</strong></th>
                <th scope="col"><strong>Latin capital letter O with circumflex</strong></th>       
              </tr>     
              <tr>
                <th scope="col"><strong>213</strong></th>
                <th scope="col"><strong> </strong></th>
                <th scope="col"><strong>Õ</strong></th>
                <th scope="col"><strong>Õ</strong></th>
                <th scope="col"><strong>Õ</strong></th>
                <th scope="col"><strong>Latin capital letter O with tilde</strong></th>       
              </tr>     
              <tr>
                <th scope="col"><strong>214</strong></th>
                <th scope="col"><strong> </strong></th>
                <th scope="col"><strong>Ö</strong></th>
                <th scope="col"><strong>Ö</strong></th>
                <th scope="col"><strong>Ö</strong></th>
                <th scope="col"><strong>Latin capital letter O with diaeresis</strong></th>       
              </tr>     
              <tr>
                <th scope="col"><strong>215</strong></th>
                <th scope="col"><strong> </strong></th>
                <th scope="col"><strong>×</strong></th>
                <th scope="col"><strong>×</strong></th>
                <th scope="col"><strong>×</strong></th>
                <th scope="col"><strong>multiplication sign</strong></th>       
              </tr>     
              <tr>
                <th scope="col"><strong>216</strong></th>
                <th scope="col"><strong> </strong></th>
                <th scope="col"><strong>Ø</strong></th>
                <th scope="col"><strong>Ø</strong></th>
                <th scope="col"><strong>Ø</strong></th>
                <th scope="col"><strong>Latin capital letter O with stroke</strong></th>       
              </tr>     
              <tr>
                <th scope="col"><strong>217</strong></th>
                <th scope="col"><strong> </strong></th>
                <th scope="col"><strong>Ù</strong></th>
                <th scope="col"><strong>Ù</strong></th>
                <th scope="col"><strong>Ù</strong></th>
                <th scope="col"><strong>Latin capital letter U with grave</strong></th>       
              </tr>     
              <tr>
                <th scope="col"><strong>218</strong></th>
                <th scope="col"><strong> </strong></th>
                <th scope="col"><strong>Ú</strong></th>
                <th scope="col"><strong>Ú</strong></th>
                <th scope="col"><strong>Ú</strong></th>
                <th scope="col"><strong>Latin capital letter U with acute</strong></th>       
              </tr>     
              <tr>
                <th scope="col"><strong>219</strong></th>
                <th scope="col"><strong> </strong></th>
                <th scope="col"><strong>Û</strong></th>
                <th scope="col"><strong>Û</strong></th>
                <th scope="col"><strong>Û</strong></th>
                <th scope="col"><strong>Latin capital letter U with circumflex</strong></th>       
              </tr>     
              <tr>
                <th scope="col"><strong>220</strong></th>
                <th scope="col"><strong> </strong></th>
                <th scope="col"><strong>Ü</strong></th>
                <th scope="col"><strong>Ü</strong></th>
                <th scope="col"><strong>Ü</strong></th>
                <th scope="col"><strong>Latin capital letter U with diaeresis</strong></th>       
              </tr>    
              <tr>
                <th scope="col"><strong>221</strong></th>
                <th scope="col"><strong> </strong></th>
                <th scope="col"><strong>Ý</strong></th>
                <th scope="col"><strong>Ý</strong></th>
                <th scope="col"><strong>Ý</strong></th>
                <th scope="col"><strong>Latin capital letter Y with acute</strong></th>       
              </tr>      
              <tr>
                <th scope="col"><strong>222</strong></th>
                <th scope="col"><strong> </strong></th>
                <th scope="col"><strong>Þ</strong></th>
                <th scope="col"><strong>Þ</strong></th>
                <th scope="col"><strong>Þ</strong></th>
                <th scope="col"><strong>Latin capital letter Thorn</strong></th>       
              </tr>     
              <tr>
                <th scope="col"><strong>223</strong></th>
                <th scope="col"><strong> </strong></th>
                <th scope="col"><strong>ß</strong></th>
                <th scope="col"><strong>ß</strong></th>
                <th scope="col"><strong>ß</strong></th>
                <th scope="col"><strong>Latin small letter sharp s</strong></th>       
              </tr>     
              <tr>
                <th scope="col"><strong>224</strong></th>
                <th scope="col"><strong> </strong></th>
                <th scope="col"><strong>à</strong></th>
                <th scope="col"><strong>à</strong></th>
                <th scope="col"><strong>à</strong></th>
                <th scope="col"><strong>Latin small letter a with grave</strong></th>       
              </tr>     
              <tr>
                <th scope="col"><strong>225</strong></th>
                <th scope="col"><strong> </strong></th>
                <th scope="col"><strong>á</strong></th>
                <th scope="col"><strong>á</strong></th>
                <th scope="col"><strong>á</strong></th>
                <th scope="col"><strong>Latin small letter a with acute</strong></th>       
              </tr>     
              <tr>
                <th scope="col"><strong>226</strong></th>
                <th scope="col"><strong> </strong></th>
                <th scope="col"><strong>â</strong></th>
                <th scope="col"><strong>â</strong></th>
                <th scope="col"><strong>â</strong></th>
                <th scope="col"><strong>Latin small letter a with circumflex</strong></th>       
              </tr>     
              <tr>
                <th scope="col"><strong>227</strong></th>
                <th scope="col"><strong> </strong></th>
                <th scope="col"><strong>ã</strong></th>
                <th scope="col"><strong>ã</strong></th>
                <th scope="col"><strong>ã</strong></th>
                <th scope="col"><strong>Latin small letter a with tilde</strong></th>       
              </tr>     
              <tr>
                <th scope="col"><strong>228</strong></th>
                <th scope="col"><strong> </strong></th>
                <th scope="col"><strong>ä</strong></th>
                <th scope="col"><strong>ä</strong></th>
                <th scope="col"><strong>ä</strong></th>
                <th scope="col"><strong>Latin small letter a with diaeresis</strong></th>       
              </tr>   
              <tr>
                <th scope="col"><strong>229</strong></th>
                <th scope="col"><strong> </strong></th>
                <th scope="col"><strong>å</strong></th>
                <th scope="col"><strong>å</strong></th>
                <th scope="col"><strong>å</strong></th>
                <th scope="col"><strong>Latin small letter a with ring above</strong></th>       
              </tr>    
              <tr>
                <th scope="col"><strong>230</strong></th>
                <th scope="col"><strong> </strong></th>
                <th scope="col"><strong>æ</strong></th>
                <th scope="col"><strong>æ</strong></th>
                <th scope="col"><strong>æ</strong></th>
                <th scope="col"><strong>Latin small letter ae</strong></th>       
              </tr>  
              <tr>
                <th scope="col"><strong>231</strong></th>
                <th scope="col"><strong> </strong></th>
                <th scope="col"><strong>ç</strong></th>
                <th scope="col"><strong>ç</strong></th>
                <th scope="col"><strong>ç</strong></th>
                <th scope="col"><strong>Latin small letter c with cedilla</strong></th>       
              </tr>  
              <tr>
                <th scope="col"><strong>232</strong></th>
                <th scope="col"><strong> </strong></th>
                <th scope="col"><strong>è</strong></th>
                <th scope="col"><strong>è</strong></th>
                <th scope="col"><strong>è</strong></th>
                <th scope="col"><strong>Latin small letter e with grave</strong></th> 
                </tr>
              <tr>
                <th scope="col"><strong>233</strong></th>
                <th scope="col"><strong> </strong></th>
                <th scope="col"><strong>é</strong></th>
                <th scope="col"><strong>é</strong></th>
                <th scope="col"><strong>é</strong></th>
                <th scope="col"><strong>small letter e with acute</strong></th>       
              </tr>  
              <tr>
                <th scope="col"><strong>234</strong></th>
                <th scope="col"><strong> </strong></th>
                <th scope="col"><strong>ê</strong></th>
                <th scope="col"><strong>ê</strong></th>
                <th scope="col"><strong>ê</strong></th>
                <th scope="col"><strong>Latin small letter e with circumflex</strong></th>       
              </tr>  
              <tr>
                <th scope="col"><strong>235</strong></th>
                <th scope="col"><strong> </strong></th>
                <th scope="col"><strong>ë</strong></th>
                <th scope="col"><strong>ë</strong></th>
                <th scope="col"><strong>ë</strong></th>
                <th scope="col"><strong>Latin small letter e with diaeresis</strong></th>       
              </tr>  
              <tr>
                <th scope="col"><strong>236</strong></th>
                <th scope="col"><strong> </strong></th>
                <th scope="col"><strong>ì</strong></th>
                <th scope="col"><strong>ì</strong></th>
                <th scope="col"><strong>ì</strong></th>
                <th scope="col"><strong>Latin small letter i with grave</strong></th>       
              </tr>  
              <tr>
                <th scope="col"><strong>237</strong></th>
                <th scope="col"><strong> </strong></th>
                <th scope="col"><strong>í</strong></th>
                <th scope="col"><strong>í</strong></th>
                <th scope="col"><strong>í</strong></th>
                <th scope="col"><strong>Latin small letter i with acute</strong></th>       
              </tr>  
              <tr>
                <th scope="col"><strong>238</strong></th>
                <th scope="col"><strong> </strong></th>
                <th scope="col"><strong>î</strong></th>
                <th scope="col"><strong>î</strong></th>
                <th scope="col"><strong>î</strong></th>
                <th scope="col"><strong>Latin small letter i with circumflex</strong></th>       
              </tr>  
              <tr>
                <th scope="col"><strong>239</strong></th>
                <th scope="col"><strong> </strong></th>
                <th scope="col"><strong>ï</strong></th>
                <th scope="col"><strong>ï</strong></th>
                <th scope="col"><strong>ï</strong></th>
                <th scope="col"><strong>Latin small letter i with diaeresis</strong></th>       
              </tr>  
              <tr>
                <th scope="col"><strong>240</strong></th>
                <th scope="col"><strong> </strong></th>
                <th scope="col"><strong>ð</strong></th>
                <th scope="col"><strong>ð</strong></th>
                <th scope="col"><strong>ð</strong></th>
                <th scope="col"><strong>Latin small letter eth</strong></th>       
              </tr>  
              <tr>
                <th scope="col"><strong>241</strong></th>
                <th scope="col"><strong> </strong></th>
                <th scope="col"><strong>ñ</strong></th>
                <th scope="col"><strong>ñ</strong></th>
                <th scope="col"><strong>ñ</strong></th>
                <th scope="col"><strong>Latin small letter n with tilde</strong></th>       
              </tr>  
              <tr>
                <th scope="col"><strong>242</strong></th>
                <th scope="col"><strong> </strong></th>
                <th scope="col"><strong>ò</strong></th>
                <th scope="col"><strong>ò</strong></th>
                <th scope="col"><strong>ò</strong></th>
                <th scope="col"><strong>Latin small letter o with grave</strong></th>       
              </tr>  
              <tr>
                <th scope="col"><strong>243</strong></th>
                <th scope="col"><strong> </strong></th>
                <th scope="col"><strong>ó</strong></th>
                <th scope="col"><strong>ó</strong></th>
                <th scope="col"><strong>ó</strong></th>
                <th scope="col"><strong>Latin small letter o with acute</strong></th>       
              </tr>  
              <tr>
                <th scope="col"><strong>244</strong></th>
                <th scope="col"><strong> </strong></th>
                <th scope="col"><strong>ô</strong></th>
                <th scope="col"><strong>ô</strong></th>
                <th scope="col"><strong>ô</strong></th>
                <th scope="col"><strong>Latin small letter o with circumflex</strong></th>       
              </tr>  
              <tr>
                <th scope="col"><strong>245</strong></th>
                <th scope="col"><strong> </strong></th>
                <th scope="col"><strong>õ</strong></th>
                <th scope="col"><strong>õ</strong></th>
                <th scope="col"><strong>õ</strong></th>
                <th scope="col"><strong>Latin small letter o with tilde</strong></th>       
              </tr>  
              <tr>
                <th scope="col"><strong>246</strong></th>
                <th scope="col"><strong> </strong></th>
                <th scope="col"><strong>ö</strong></th>
                <th scope="col"><strong>ö</strong></th>
                <th scope="col"><strong>ö</strong></th>
                <th scope="col"><strong>Latin small letter o with diaeresis</strong></th>       
              </tr>  
              <tr>
                <th scope="col"><strong>247</strong></th>
                <th scope="col"><strong> </strong></th>
                <th scope="col"><strong>÷</strong></th>
                <th scope="col"><strong>÷</strong></th>
                <th scope="col"><strong>÷</strong></th>
                <th scope="col"><strong>division sign</strong></th>       
              </tr>  
              <tr>
                <th scope="col"><strong>248</strong></th>
                <th scope="col"><strong> </strong></th>
                <th scope="col"><strong>ø</strong></th>
                <th scope="col"><strong>ø</strong></th>
                <th scope="col"><strong>ø</strong></th>
                <th scope="col"><strong>Latin small letter o with stroke</strong></th>       
              </tr>  
              <tr>
                <th scope="col"><strong>249</strong></th>
                <th scope="col"><strong> </strong></th>
                <th scope="col"><strong>ù</strong></th>
                <th scope="col"><strong>ù</strong></th>
                <th scope="col"><strong>ù</strong></th>
                <th scope="col"><strong>Latin small letter u with grave</strong></th>       
              </tr>  
              <tr>
                <th scope="col"><strong>250</strong></th>
                <th scope="col"><strong> </strong></th>
                <th scope="col"><strong>ú</strong></th>
                <th scope="col"><strong>ú</strong></th>
                <th scope="col"><strong>ú</strong></th>
                <th scope="col"><strong>Latin small letter u with acute</strong></th>       
              </tr>  
              <tr>
                <th scope="col"><strong>251</strong></th>
                <th scope="col"><strong> </strong></th>
                <th scope="col"><strong>û</strong></th>
                <th scope="col"><strong>û</strong></th>
                <th scope="col"><strong>û</strong></th>
                <th scope="col"><strong>small letter with circumflex</strong></th>       
              </tr>  
              <tr>
                <th scope="col"><strong>252</strong></th>
                <th scope="col"><strong> </strong></th>
                <th scope="col"><strong>ü</strong></th>
                <th scope="col"><strong>ü</strong></th>
                <th scope="col"><strong>ü</strong></th>
                <th scope="col"><strong>Latin small letter u with diaeresis</strong></th>       
              </tr>  
              <tr>
                <th scope="col"><strong>253</strong></th>
                <th scope="col"><strong> </strong></th>
                <th scope="col"><strong>ý</strong></th>
                <th scope="col"><strong>ý</strong></th>
                <th scope="col"><strong>ý</strong></th>
                <th scope="col"><strong>Latin small letter y with acute</strong></th>       
              </tr>  
              <tr>
                <th scope="col"><strong>254</strong></th>
                <th scope="col"><strong> </strong></th>
                <th scope="col"><strong>þ</strong></th>
                <th scope="col"><strong>þ</strong></th>
                <th scope="col"><strong>þ</strong></th>
                <th scope="col"><strong>Latin small letter thorn</strong></th>       
              </tr>  
              <tr>
                <th scope="col"><strong>255</strong></th>
                <th scope="col"><strong> </strong></th>
                <th scope="col"><strong>ÿ</strong></th>
                <th scope="col"><strong>ÿ</strong></th>
                <th scope="col"><strong>ÿ</strong></th>
                <th scope="col"><strong>Latin small letter y with diaeresis</strong></th>       
              </tr>  
            </tbody>
            </table><br />

            <h1><strong>The ASCII Character Set</strong></h1>
            ASCII uses the values from 0 to 31 (and 127) for control characters.<br />
            ASCII uses the values from 32 to 126 for letters, digits, and symbols.<br />
            ASCII does not use the values from 128 to 255.<br /><br />


            <h1><strong>The ANSI Character Set (Windows-1252)</strong></h1>
            ANSI is identical to ASCII for the values from 0 to 127.<br />
            ANSI has a proprietary set of characters for the values from 128 to 159.<br />
            ANSI is identical to UTF-8 for the values from 160 to 255.<br /><br />

            <h1><strong>The ISO-8859-1 Character Set</strong></h1>
            8859-1 is identical to ASCII for the values from 0 to 127.<br />
            8859-1 does not use the values from 128 to 159.<br />
            8859-1 is identical to UTF-8 for the values from 160 to 255.<br /><br />


            <h1><strong>The UTF-8 Character Set</strong></h1>
            UTF-8 is identical to ASCII for the values from 0 to 127.<br />
            UTF-8 does not use the values from 128 to 159. <br />
            UTF-8 is identical to both ANSI and 8859-1 for the values from 160 to 255.<br />
            UTF-8 continues from the value 256 with more than 10 000 different characters.<br /><br />


            <h1><strong>The @charset CSS Rule</strong></h1>
            You can use the CSS<span className="text-danger"><strong>@charset</strong></span>rule to specify the character encoding used in a style sheet:<br />
            Example<br />
            Set the encoding of the style sheet to Unicode UTF-8:<br />
            <span className="text-warning"><strong>@charset "UTF-8";</strong></span> <br /><br />

            <h1><strong>HTML Uniform Resource Locators</strong></h1>
            A URL is another word for a web address.<br />
            A URL can be composed of words (w3schools.com), or an Internet Protocol (IP) address (192.68.20.50).<br />
            Most people enter the name when surfing, because names are easier to remember than numbers.<br /><br />


            <h1><strong>URL - Uniform Resource Locator</strong></h1>
            Web browsers request pages from web servers by using a URL.<br />
            A Uniform Resource Locator (URL) is used to address a document (or other data) on the web.<br />
            A web address like <span className="text-primary"><strong>https://www.w3schools.com/html/default.asp</strong></span> follows these syntax rules:<br />
            scheme://prefix.domain:port/path/filename<br /><br />
            <strong>Explanation:</strong><br />
            •	<strong>scheme</strong> - defines the <strong>type</strong> of Internet service (most common is <strong>http</strong> or <strong>https</strong>)<br />
            •	<strong>prefix</strong> - defines a domain <strong> </strong>prefix (default for http is <strong>www</strong>)<br />
            •	<strong>domain</strong> - defines the Internet <strong>domain name</strong> (like w3schools.com)<br />
            •	<strong>port</strong> - defines the <strong>port number</strong> at the host (default for http is <strong>80</strong>)<br />
            •	<strong>path</strong> - defines a <strong>path</strong>at the server (If omitted: the root directory of the site)<br />
            •	<strong>filename</strong> - defines the name of a document or resource<br /><br />

            <h1><strong>Common URL Schemes</strong></h1>
            The table below lists some common schemes:<br />


            <table class="table table-striped w-50">
            <thead>
              <tr>
                <th scope="col"><strong> Scheme</strong></th>
                <th scope="col"><strong>Short for</strong></th>
                <th scope="col"><strong>Used for</strong></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row"><strong>http</strong></th>
                <td><strong>HyperText Transfer Protocol</strong></td>
                <td><strong>Common web pages. Not encrypted</strong></td>
              </tr>
              <tr>
                <th scope="row"><strong>https</strong></th>
                <td><strong>Secure HyperText Transfer Protocol</strong></td>
                <td><strong>Secure web pages. Encrypted</strong></td>
              </tr>
              <tr>
                <th scope="row"><strong>ftp</strong></th>
                <td><strong>File Transfer Protocol</strong></td>
                <td><strong>Downloading or uploading files</strong></td>
              </tr>
              <tr>
                <th scope="row"><strong>file</strong></th>
                <td><strong> </strong></td>
                <td><strong>A file on your computer</strong></td>
              </tr>
           </tbody>
         </table>
           		
         <h1><strong> URL Encoding</strong></h1>   
        URLs can only be sent over the Internet using the <span className="text-primary"><strong>ASCII character-set.</strong></span> <br />
        If a URL contains characters outside the ASCII set, the URL has to be converted.<br />
        URL encoding converts non-ASCII characters into a format that can be transmitted over the Internet.<br />
        URL encoding replaces non-ASCII characters with a "%" followed by hexadecimal digits.<br />
        URLs cannot contain spaces. URL encoding normally replaces a space with a plus (+) sign, or %20<br /><br />

       <input type="search" id="search"  value="Hello Günter" />  

       <button>Submit</button><br /><br />
       If you click "Submit", the browser will URL encode the input before it is sent to the server.<br />
       A page at the server will display the received input.<br />
       Try some other input and click Submit again.<br />

       <h1><strong>ASCII Encoding Examples</strong></h1>
       Your browser will encode input, according to the character-set used in your page.<br />
       The default character-set in HTML5 is UTF-8.<br /><br />

       <table class="table table-striped w-50">
            <thead>
              <tr>
                <th scope="col"><strong>Character</strong></th>
                <th scope="col"><strong>From Windows-1252r</strong></th>
                <th scope="col"><strong>From UTF-8</strong></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row"><strong>€</strong></th>
                <td><strong>%80</strong></td>
                <td><strong>%E2%82%AC</strong></td>
              </tr>
              <tr>
                <th scope="row"><strong>£</strong></th>
                <td><strong>%A3</strong></td>
                <td><strong>%C2%A3</strong></td>
              </tr>
              <tr>
                <th scope="row"><strong>©</strong></th>
                <td><strong>%A9</strong></td>
                <td><strong>%C2%A9</strong></td>
              </tr>
              <tr>
                <th scope="row"><strong>®</strong></th>
                <td><strong>%AE</strong></td>
                <td><strong>%C2%AE</strong></td>
              </tr>
              <tr>
                <th scope="row"><strong>À</strong></th>
                <td><strong>%C0</strong></td>
                <td><strong>%C3%80</strong></td>
              </tr>
              <tr>
                <th scope="row"><strong>Á</strong></th>
                <td><strong>%C1</strong></td>
                <td><strong>%C3%81</strong></td>
              </tr>
              <tr>
                <th scope="row"><strong>Â</strong></th>
                <td><strong>%C2</strong></td>
                <td><strong>%C3%82</strong></td>
              </tr>
              <tr>
                <th scope="row"><strong>Ã</strong></th>
                <td><strong>%C3</strong></td>
                <td><strong>%C3%83</strong></td>
              </tr>
              <tr>
                <th scope="row"><strong>Ä</strong></th>
                <td><strong>%C4</strong></td>
                <td><strong>%C3%84</strong></td>
              </tr>
              <tr>
                <th scope="row"><strong>Å</strong></th>
                <td><strong>%C5</strong></td>
                <td><strong>%C3%85</strong></td>
              </tr>
           </tbody>
         </table><br />

         <h1><strong>HTML Versus XHTML</strong></h1>
       	<button style={{backgroundColor:"#4CAF50"}}>❮ PreviousNext ❯</button><br />

         XHTML is a stricter, more XML-based version of HTML.<br /><br />

         <h1><strong>What is XHTML?</strong></h1>

          •	XHTML stands for E<strong>X</strong>tensible  <strong>H</strong>yper<strong>T</strong>ext <strong>M</strong>arkup <strong>L</strong>anguage<br />
          •	XHTML is a stricter, more XML-based version of HTML<br />
          •	XHTML is HTML defined as an XML application<br />
          •	XHTML is supported by all major browsers<br /><br />


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
            </Card>
            

            <span className="text-primary"><strong>&lt;</strong></span>
            <span className="text-warning"><strong>!DOCTYPE </strong></span>
            <span className="text-danger"><strong>html PUBLIC "-//W3C//DTD XHTML 1.1//EN"<br />
            "http://www.w3.org/TR/xhtml11/DTD/xhtml11.dtd <br /> </strong></span>
            <span className="text-primary"><strong>&gt;</strong></span>

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
          <span className="text-primary"><strong>&gt;</strong></span><br />



		
		
		
		
		
		
		
		
		
		

	 	







            






           








           		










 


        















































        </Container>
      </>
    );
  }
}
Index.layout = Content;
export default Index;
