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

import Html_img23 from "../../../assets/img/html/Html_img23.jpeg";

class Header extends React.Component {
  render() {
    return (

      <div className="header bg-gradient-info pb-8 pt-5 pt-md-8">
        <Container fluid>
          <div className="header-body">
            <Row>
              <Col xl="6">
              <h1 style={{fontSize:"200%",color:"#fff",fontFamily:"Roboto"}}>HTML ELEMENTS</h1>
              
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
                      <h2 className="text-white mb-0">The &lt;nav&gt; Element</h2>
                    </div>
                    <div className="col">
                      
                    </div>
                  </Row>
                </CardHeader>
                <CardBody className="text-white " style={{  textAlign: "left" }}>
                This tag represents a section of a page that links to other pages or to certain sections within the page. <br />
              This would be a section with navigation links.<br /><br />

          

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
   The&lt;article&gt; Element
                  </Button>
                  <Button outline
                    color="warning"
                    href="#tdp"
                    className="d-block w-100 text-left my-1 mx-0"
                    size="sm"
                  >
            The &lt;section&gt; Element
                  </Button>
                  <Button outline
                    color="warning"
                    href="#tdp"
                    className="d-block w-100 text-left my-1 mx-0"
                    size="sm"
                  >
            The &lt;aside&gt; Element
                  </Button>
                 
                  
                  </CardBody>
              </Card>
            </Col>
          </Row>
          <Row className="mt-5">
            <Col className="mb-5 mb-xl-0" xl="9" >
            <Card className="text-primary w-50 p-2" style={{ backgroundColor: "#EEEEEE", textAlign: "left" }}> 
            Here is an example of a major block of navigation links:<br /><br />

<strong>&lt;nav&gt;</strong>
   &lt;ul&gt;<br />
   &lt;li&gt;&lt;a href="#"&gt;Home&lt;/a&gt;&lt;/li&gt;<br />
   &lt;li&gt;&lt;a href="#"&gt;Services&lt;/a&gt;&lt;/li&gt;<br />
   &lt;li&gt;&lt;a href="#"&gt;About us&lt;/a&gt;&lt;/li&gt;<br />
   &lt;/ul&gt;<br />
<strong>&lt;/nav&gt;</strong>
</Card><br />
            <Card className="imgclasss w-50">
            <img src={Html_img23}></img>
          </Card><br />
          <Card  className="text-white w-50 bg-info">
            Not all of the links in a document should be inside a&lt;nav&gt; element.
            The &lt;nav&gt; element is intended only for major blocks of navigation links.
            Typically, the &lt;footer&gt;element often has a list of links that don't need to be in a &lt;nav&gt; element.
              </Card><br />


          <h1><strong>The&lt;article&gt; Element</strong></h1>

               Article is a self-contained, independent piece of content that can be used and distributed separately<br />
               from the rest of the page or site. This could be a forum post, a magazine or newspaper article, a blog entry, <br />
               a comment, an interactive widget or gadget,or any other independent piece of content.<br />

              The <span className="text-info"><strong> &lt;article&gt; </strong></span>element replaces the
              <span className="text-info"><strong> &lt;div&gt;  </strong></span>
              element that was widely used in HTML4, along with an id or class.<br />
              <Card className="text-primary w-50 p-2" style={{ backgroundColor: "#EEEEEE", textAlign: "left" }}> 
          <strong>&lt;article&gt;</strong> 
              &lt;h1&gt;The article title&lt;/h1&gt; <br />
              &lt;p&gt;Contents of the article element &lt;/p&gt;<br />
          <strong>&lt;/article&gt;</strong> 
</Card><br /><br />
          <Card  className="text-white w-50 bg-info">
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
              <Card className="text-primary w-50 p-2" style={{ backgroundColor: "#EEEEEE", textAlign: "left" }}> 
              &lt;article&gt;<br />
              &lt;h1&gt;Welcome&lt;/h1&gt;<br />
          <strong> &lt;section&gt;</strong>
              &lt;h1&gt;Heading&lt;/h1&gt;<br />
              &lt;p&gt;content or image&lt;/p&gt;<br />
          <strong> &lt;/section&gt;</strong>
              </Card><br />
          <Card  className="text-white w-50 bg-info">
            If it makes sense to separately syndicate the content of a &lt;section&gt;
            element, use an &lt;article&gt; element instead.
              </Card><br />



          <h1><strong>The &lt;aside&gt; Element</strong></h1>

          <span className="text-info"><strong> &lt;aside&gt;</strong></span> is secondary or tangential content which could be considered separate from but indirectly related to the main content.<br />
              This type of content is often represented in sidebars.<br />
              When an <span className="text-info"><strong> &lt;aside&gt;</strong></span> tag is used within an
              <span className="text-info"><strong> &lt;article&gt;</strong></span> tag, the content of the
              <span className="text-info"><strong> &lt;aside&gt;</strong></span> should be specifically related to that article.<br /><br />
              <Card className="text-primary w-50 p-2" style={{ backgroundColor: "#EEEEEE", textAlign: "left" }}> 
              &lt;article&gt;<br />
              &lt;h1&gt; Gifts for everyone &lt;/h1&gt;<br />
              &lt;p&gt; This website will be the best place for choosing gifts &lt;/p&gt;<br />
          <strong> &lt;aside&gt;</strong>
              &lt;p&gt; Gifts will be delivered to you within 24 hours &lt;/p&gt;<br />
          <strong> &lt;/aside&gt;</strong>
              &lt;/article&gt; <br />
</Card><br />
          <Card  className="text-white w-50 bg-info">
            When an &lt;aside&gt; tag is used outside of an &lt;article&gt; tag, <br />
              its content should be related to the surrounding content.
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
