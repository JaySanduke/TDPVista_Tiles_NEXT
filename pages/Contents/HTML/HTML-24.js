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
import Html_img44 from "../../../assets/img/html/Html_img44.jpeg";
import Html_img45 from "../../../assets/img/html/Html_img45.jpeg";



class Header extends React.Component {
  render() {
    return (

      <div className="header bg-gradient-info pb-8 pt-5 pt-md-8">
        <Container fluid>
          <div className="header-body">
            <Row>
              <Col xl="6">
              <h1 style={{fontSize:"200%",color:"#fff",fontFamily:"Roboto"}}>HTML entities</h1>
              
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
                      <h2 className="text-white mb-0">HTML Entities</h2>
                    </div>
                    <div className="col">
                     
                    </div>
                  </Row>
                </CardHeader>
                <CardBody className="text-white " style={{  textAlign: "left" }}>
                Some characters are reserved in HTML.<br /><br />
                If you use the less than (&lt;) or greater than (&gt;) signs in your text, the browser might mix them with tags.<br /><br />
                Character entities are used to display reserved characters in HTML.<br />
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
Non-breaking Space
                  </Button>
                  <Button outline
                    color="warning"
                    href="#tdp"
                    className="d-block w-100 text-left my-1 mx-0"
                    size="sm"
                  >
 Combining Diacritical Marks
                  </Button>
                 
                  </CardBody>
              </Card>
            </Col>
          </Row>
          <Row className="mt-5">
            <Col className="mb-5 mb-xl-0" xl="9" >
           
            A character entity looks like this:<br /><br />
                &#38;entity_name;<br />
                OR<br />
                &#38;#entity_number;<br /><br />
                 To display a less than sign (&lt;) we must write: <strong>&#38;lt;</strong> or <strong>&#38;#60; </strong><br /><br />
          <strong>Advantage of using an entity name: </strong> An entity name is easy to remember.<br />
          <strong>Disadvantage of using an entity name:  </strong>Browsers may not support all entity names, <br />
                but the support for numbers is good.<br /><br />

          <h1><strong>Non-breaking Space</strong></h1><br />
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

                The non-breaking hyphen <span className="text-primary"><strong>(&#38;#8209;) </strong></span> lets you use a hyphen character ( ) that won't break.<br /><br />

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
              that is not present in the character set (encoding) used in the page.<br /><br />
              Here are some examples:<br /><br />


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
