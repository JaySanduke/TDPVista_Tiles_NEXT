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
              <h1 style={{fontSize:"200%",color:"#fff",fontFamily:"Roboto"}}>HTML Uniform Resource Locators</h1>
              
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
                      <h2 className="text-white mb-0">HTML Uniform Resource Locators</h2>
                    </div>
                    <div className="col">
                     
                    </div>
                  </Row>
                </CardHeader>
                <CardBody className="text-white" style={{  textAlign: "left" }}>
                A URL is another word for a web address.<br /><br />
            A URL can be composed of words (w3schools.com), or an Internet Protocol (IP) address (192.68.20.50).<br /><br />
            Most people enter the name when surfing, because names are easier to remember than numbers.<br />

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
URL - Uniform Resource Locator
                  </Button>
                  <Button outline
                    color="warning"
                    href="#tdp"
                    className="d-block w-100 text-left my-1 mx-0"
                    size="sm"
                  >
Common URL Schemes
                  </Button>
                  <Button outline
                    color="warning"
                    href="#tdp"
                    className="d-block w-100 text-left my-1 mx-0"
                    size="sm"
                  >
URL Encoding
                  </Button>
                  <Button outline
                    color="warning"
                    href="#tdp"
                    className="d-block w-100 text-left my-1 mx-0"
                    size="sm"
                  >
ASCII Encoding Examples
                  </Button>
                  
                  </CardBody>
              </Card>
            </Col>
          </Row>
          <Row className="mt-5">
            <Col className="mb-5 mb-xl-0" xl="9" >
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
