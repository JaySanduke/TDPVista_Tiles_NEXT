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
              <h1 style={{fontSize:"200%",color:"#fff",fontFamily:"Roboto"}}>HTML Symbols</h1>
              
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
                      <h2 className="text-white mb-0">HTML Symbols</h2>
                    </div>
                    <div className="col">
                     
                    </div>
                  </Row>
                </CardHeader>
                <CardBody className="text-white" style={{  textAlign: "left" }}>
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
HTML Symbols
                  </Button>
                  <Button outline
                    color="warning"
                    href="#tdp"
                    className="d-block w-100 text-left my-1 mx-0"
                    size="sm"
                  >
Some Mathematical Symbols Supported by HTML
                  </Button>
                  <Button outline
                    color="warning"
                    href="#tdp"
                    className="d-block w-100 text-left my-1 mx-0"
                    size="sm"
                  >
Some Greek Letters Supported by HTML
                  </Button>
                  <Button outline
                    color="warning"
                    href="#tdp"
                    className="d-block w-100 text-left my-1 mx-0"
                    size="sm"
                  >
Some Greek Letters Supported by HTML
                  </Button>
                  
                  </CardBody>
              </Card>
            </Col>
          </Row>
          <Row className="mt-5">
            <Col className="mb-5 mb-xl-0" xl="9" >
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
