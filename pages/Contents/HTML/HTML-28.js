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
              <h1 style={{fontSize:"200%",color:"#fff",fontFamily:"Roboto"}}>Semantic Elements</h1>
              
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
                      <h2 className="text-white mb-0">Semantic Elements</h2>
                    </div>
                    <div className="col">
                    
                    </div>
                  </Row>
                </CardHeader>
                <CardBody className="text-white" style={{  textAlign: "left" }}>
                <h1 className="text-white"><strong> What are Semantic Elements?</strong></h1> 
          A semantic element clearly describes its meaning to both the browser and the developer.<br />
          Examples of <strong>non-semantic elements: </strong>
          <span className="text-danger"><strong> &lt;div &gt;</strong></span> and 
          <span className="text-danger"><strong> &lt;span &gt;</strong></span> - Tells nothing about its content.<br />
          Examples of <strong>semantic elements: </strong> 
          <span className="text-danger"><strong> &lt;form&gt;</strong></span>, 
          <span className="text-danger"><strong> &lt;table &gt;</strong></span>, and 
          <span className="text-danger"><strong> &lt;article&gt;</strong></span>- Clearly defines its content.
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
Semantic Elements in HTML
                  </Button>
                  <Button outline
                    color="warning"
                    href="#tdp"
                    className="d-block w-100 text-left my-1 mx-0"
                    size="sm"
                  >
 HTML  &lt;section &gt;Element
                  </Button>
                  <Button outline
                    color="warning"
                    href="#tdp"
                    className="d-block w-100 text-left my-1 mx-0"
                    size="sm"
                  >
HTML  &lt;article &gt;Element
                  </Button>
                  <Button outline
                    color="warning"
                    href="#tdp"
                    className="d-block w-100 text-left my-1 mx-0"
                    size="sm"
                  >
Nesting &lt;article&gt; in &lt;section&gt; or Vice Versa?
                  </Button>
                  <Button outline
                    color="warning"
                    href="#tdp"
                    className="d-block w-100 text-left my-1 mx-0"
                    size="sm"
                  >
HTML  &lt;header &gt;Element
                  </Button>
                  <Button outline
                    color="warning"
                    href="#tdp"
                    className="d-block w-100 text-left my-1 mx-0"
                    size="sm"
                  >
HTML &lt;footer&gt; Element
                  </Button>
                  <Button outline
                    color="warning"
                    href="#tdp"
                    className="d-block w-100 text-left my-1 mx-0"
                    size="sm"
                  >
HTML &lt;nav&gt; Element
                  </Button>
                  <Button outline
                    color="warning"
                    href="#tdp"
                    className="d-block w-100 text-left my-1 mx-0"
                    size="sm"
                  >
HTML &lt;aside&gt; Element
                  </Button>
                  <Button outline
                    color="warning"
                    href="#tdp"
                    className="d-block w-100 text-left my-1 mx-0"
                    size="sm"
                  >
HTML &lt;figure&gt; and &lt;figcaption&gt; Elements
                  </Button>
                  <Button outline
                    color="warning"
                    href="#tdp"
                    className="d-block w-100 text-left my-1 mx-0"
                    size="sm"
                  >
Why Semantic Elements?
                  </Button>
                  </CardBody>
              </Card>
            </Col>
          </Row>
          <Row className="mt-5">
            <Col className="mb-5 mb-xl-0" xl="9" >
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
          •	&lt;time&gt;<br /><br />
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
          the  <span className="text-danger"><strong>&lt;figcaption&gt;</strong></span> element defines the caption.<br /><br />

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
