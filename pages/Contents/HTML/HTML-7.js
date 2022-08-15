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

import Html_img9 from "../../../assets/img/html/Html_img9.jpeg";
import Html_img10 from "../../../assets/img/html/Html_img10.jpeg";

class Header extends React.Component {
  render() {
    return (

      <div className="header bg-gradient-info pb-8 pt-5 pt-md-8">
        <Container fluid>
          <div className="header-body">
            <Row>
              <Col xl="6">
                <h1 style={{ fontSize: "200%", color: "#fff", fontFamily: "Roboto" }}>Ordered Lists,Unordered Lists And Tables</h1>

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
                      <h2 className="text-white mb-0">Ordered Lists</h2>
                    </div>
                    <div className="col">

                    </div>
                  </Row>
                </CardHeader>
                <CardBody className="text-white " style={{ textAlign: "left" }}>
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
                  &lt;/html&gt;
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
                    Ordered Lists
                  </Button>
                  <Button outline
                    color="warning"
                    href="#tdp"
                    className="d-block w-100 text-left my-1 mx-0"
                    size="sm"
                  >
                    Unordered List
                  </Button>
                  <Button outline
                    color="warning"
                    href="#tdp"
                    className="d-block w-100 text-left my-1 mx-0"
                    size="sm"
                  >
                    Creating a Table
                  </Button>
                  <Button outline
                    color="warning"
                    href="#tdp"
                    className="d-block w-100 text-left my-1 mx-0"
                    size="sm"
                  >
                    The border and colspan Attributes
                  </Button>
                  <Button outline
                    color="warning"
                    href="#tdp"
                    className="d-block w-100 text-left my-1 mx-0"
                    size="sm"
                  >
                    Colspan Color
                  </Button>
                  <Button outline
                    color="warning"
                    href="#tdp"
                    className="d-block w-100 text-left my-1 mx-0"
                    size="sm"
                  >
                    The align and bgcolor Attributes
                  </Button>
                </CardBody>
              </Card>
            </Col>
          </Row>
          <Row className="mt-5">
            <Col className="mb-5 mb-xl-0" xl="9" >
              <h2><strong>Result:</strong></h2>
              <Card className="imgclass w-50">
                <img src={Html_img9}></img>
              </Card><br />
              The list items will be automatically marked with numbers.<br /><br />


              <h1><strong>Unordered List</strong></h1><br />
              <Card className="text-primary w-50 p-2" style={{ backgroundColor: "#EEEEEE", textAlign: "left" }}>
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
              </Card>

              <h2><strong>Result:</strong></h2>
              <Card className="imgclasss w-50">
                <img src={Html_img10}></img>
              </Card><br />
              The list items will be marked with bullets.<br /><br />


              <h1><strong>Creating a Table</strong></h1><br />

              Tables are defined by using the <span className="text-primary"><strong>&lt;table&gt;</strong></span>tag.<br />
              Tables are divided into table rows with the <span className="text-primary"><strong>&lt;tr&gt;</strong></span>tag.<br />
              Table rows are divided into table columns (table data) with the &lt;td&gt; tag.<br /><br />

              Here is an example of a table with <strong>one row</strong> and <strong>three columns:<br /></strong>
              <Card className="text-primary w-50 p-2" style={{ backgroundColor: "#EEEEEE", textAlign: "left" }}>
                &lt;table&gt; <br />
                &lt;tr&gt;<br />
                &lt;td&gt;&lt;/td&gt;<br />
                &lt;td&gt;&lt;/td&gt;<br />
                &lt;td&gt;&lt;/td&gt;<br />
                &lt;/tr&gt;<br />
                &lt;/table&gt;<br />
              </Card><br />
              Table data tags &lt;td&gt; act as data containers within the table.<br />
              They can contain all sorts of HTML elements, such as text, images, lists, other tables, and so on.<br /><br />



              <h1><strong>Creating a Table</strong></h1><br /> The border and colspan Attributes

              A border can be added using the <strong>border</strong> attribute:&lt;table <strong>border</strong>="2"&gt;<br />
              A table <strong>cell</strong> can span two or more columns:<br /><br />
              <Card className="text-primary w-50 p-2" style={{ backgroundColor: "#EEEEEE", textAlign: "left" }}>
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
              </Card><br />
              The border attribute is not supported in HTML5.<br /> <br />


              <h1><strong>The border and colspan Attributes</strong></h1><br />
              The example below demonstrates the <strong>colspan</strong> attribute in action:<br /><br />
              <Card className="text-primary w-50 p-2" style={{ backgroundColor: "#EEEEEE", textAlign: "left" }}>
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
              </Card><br />
              You can see that the cell containing "Orange" spans two cells. <br />
              To make a cell span more than one row, use the <strong>rowspan</strong> attribute. <br /> <br />



              <h1><strong>The align and bgcolor Attributes</strong></h1><br />


              To change your table's position, use the <strong>align</strong> attribute inside your table tag:
              &lt;table <strong>align="center"</strong>&gt; <br />
              Now let's specify a background color of red for a table cell. To do that, just use the bgcolor attribute.<br /><br />
              <Card className="text-primary w-50 p-2" style={{ backgroundColor: "#EEEEEE", textAlign: "left" }}>
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
