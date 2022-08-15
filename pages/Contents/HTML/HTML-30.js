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
              <h1 style={{fontSize:"200%",color:"#fff",fontFamily:"Roboto"}}>Using Emojis in HTML</h1>
              
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
                <h1 className="text-white"> <strong> What are Emojis?</strong></h1>

                Emojis are characters from the UTF-8 character set: <br />
                Emojis look like images, or icons, but they are not.<br />
                They are letters (characters) from the UTF-8 (Unicode) alphabet.<br /><br />
             
                <strong> UTF-8 covers almost all of the characters and symbols in the world.</strong><br />
          
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
The HTML charset Attribute
                  </Button>
                  <Button outline
                    color="warning"
                    href="#tdp"
                    className="d-block w-100 text-left my-1 mx-0"
                    size="sm"
                  >
UTF-8 Characters
                  </Button>
                  <Button outline
                    color="warning"
                    href="#tdp"
                    className="d-block w-100 text-left my-1 mx-0"
                    size="sm"
                  >
Emoji Characters
                  </Button>
                  <Button outline
                    color="warning"
                    href="#tdp"
                    className="d-block w-100 text-left my-1 mx-0"
                    size="sm"
                  >
The @charset CSS Rule
                  </Button>
                  
                  </CardBody>
              </Card>
            </Col>
          </Row>
          <Row className="mt-5">
            <Col className="mb-5 mb-xl-0" xl="9" >
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
<span className="text-primary"><strong>&lt;</strong></span>
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

<span className="text-primary"><strong>&lt;</strong></span>
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
<span className="text-primary"><strong>&gt;</strong></span><br /><br />

Since Emojis are characters, they can be copied, displayed, and sized just like any other character in HTML.<br /><br />


<span className="text-primary"><strong>&lt;</strong></span>
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
<span className="text-primary"><strong>&gt;</strong></span><br /><br />

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
