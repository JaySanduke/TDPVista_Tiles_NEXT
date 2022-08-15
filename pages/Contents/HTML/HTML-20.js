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


class Header extends React.Component {
  render() {
    return (

      <div className="header bg-gradient-info pb-8 pt-5 pt-md-8">
        <Container fluid>
          <div className="header-body">
            <Row>
              <Col xl="6">
              <h1 style={{fontSize:"200%",color:"#fff",fontFamily:"Roboto"}}>HTML Drawings</h1>
              
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
                      <h2 className="text-white mb-0">Drawing Shapes</h2>
                    </div>
                    <div className="col">
                     
                    </div>
                  </Row>
                </CardHeader>
                <CardBody className="text-white " style={{  textAlign: "left" }}>
                SVG stands for Scalable Vector Graphics, and is used to draw shapes with HTML-style markup.<br /><br />
                It offers several methods for drawing paths, boxes, circles, text, and graphic images.<br /><br />
       
           <strong> SVG is not pixel-based, so it can be magnified infinitely with no loss of quality.</strong>
              

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
  Other Shape Elements
                  </Button>
                  <Button outline
                    color="warning"
                    href="#tdp"
                    className="d-block w-100 text-left my-1 mx-0"
                    size="sm"
                  >
        ellipse and polygon
                  </Button>
                  <Button outline
                    color="warning"
                    href="#tdp"
                    className="d-block w-100 text-left my-1 mx-0"
                    size="sm"
                  >
      Shape Animations
                  </Button>
                  <Button outline
                    color="warning"
                    href="#tdp"
                    className="d-block w-100 text-left my-1 mx-0"
                    size="sm"
                  >
      Paths

                  </Button>
                  <Button outline
                    color="warning"
                    href="#tdp"
                    className="d-block w-100 text-left my-1 mx-0"
                    size="sm"
                  >
    The &lt;canvas&gt;Element

                  </Button>
                  <Button outline
                    color="warning"
                    href="#tdp"
                    className="d-block w-100 text-left my-1 mx-0"
                    size="sm"
                  >
    Canvas Coordinates
                  </Button>
                  <Button outline
                    color="warning"
                    href="#tdp"
                    className="d-block w-100 text-left my-1 mx-0"
                    size="sm"
                  >
    Drawing Shapes
                  </Button>
                  <Button outline
                    color="warning"
                    href="#tdp"
                    className="d-block w-100 text-left my-1 mx-0"
                    size="sm"
                  >
    Canvas vs. SVG
                  </Button>
                 
                  </CardBody>
              </Card>
            </Col>
          </Row>
          <Row className="mt-5">
            <Col className="mb-5 mb-xl-0" xl="9" >
           
            <h1><strong>Inserting SVG Images</strong></h1>

An SVG image can be added to HTML code with just a basic image tag that includes a source attribute pointing to the image:<br />
&lt;img src="image.svg" alt="" height="300" /&gt;<br /><br />
<Card className="text-white w-50 bg-info">
SVG defines vector-based graphics in XML format.
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
- stroke adds an outline to the circle<br /><br />

<h2><strong>Result:</strong></h2><br />
<Card className="imgclasss w-50">
<img src={Html_img27}></img>
</Card><br />
<Card className="text-white w-50 bg-info">
Every element and every attribute in SVG files can be animated.
</Card><br />

<h1><strong>Other Shape Elements</strong></h1>

<span className="text-info"><strong> &lt;rect&gt;</strong></span>  defines a rectangle:<br />
&lt;svg width="2000" height="2000"&gt;<br />
<strong> &lt;rect</strong> width="300" height="100" <br />
x="20" y="20" fill="green" /&gt;<br />
&lt;/svg&gt;<br />
The following code will draw a green-filled rectangle.<br /><br />
<Card className="imgclasss w-50">
<img src={Html_img28}></img>
</Card><br />
<span className="text-info"><strong> &lt;line&gt;</strong></span> defines a line segment:<br /><br />
&lt;svg width="400" height="410"&gt;<br />
&lt;line x1="10" y1="10" x2="200" y2="100" <br />
style="stroke:#000000; stroke-linecap:round; <br />
stroke-width:20" /&gt;<br />
&lt;/svg&gt;<br />
(x1, y1) define the start coordinates(x2, y2) define the end coordinates.<br /><br />
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
<Card className="text-white w-50 bg-info">
The width and height attributes of the &lt;rect&gt; element define the height and the width of the rectangle.
</Card><br />

<h1><strong>&lt;ellipse&gt; and &lt;polygon&gt;</strong></h1><br />

<h1><strong>Ellipse</strong></h1>
The <strong> &lt;ellipse&gt;</strong> is similar to the <strong> &lt;circle&gt;</strong>, with one exception:<br />
You can independently change the horizontal and vertical axes of its radius, using the <strong> rx</strong> and <strong> ry</strong> attributes.<br />
&lt;svg height="500" width="1000"&gt;<br />
&lt;ellipse cx="200" cy="100" rx="150" ry="70" style="fill:green" /&gt;<br />
&lt;/svg&gt;<br /><br />
<Card className="imgclasss w-50">
<img src={Html_img31}></img>
</Card><br />

<h1><strong>Polygon</strong></h1>
  The <span className="text-info"><strong> &lt;polygon&gt;</strong></span> element is used to create a graphic with at least three sides.<br />
  The polygon element is unique because it automatically closes off the shape for you.<br />
  &lt;svg width="2000" height="2000"&gt;<br />
  &lt;polygon points="100 100, 200 200, 300 0" <br />
  style="fill: green; stroke:black;" /&gt;<br />
  &lt;/svg&gt;<br /><br />
<Card className="imgclasss w-50">
<img src={Html_img32}></img>
</Card><br />
<Card className="text-white w-50 bg-info">
Polygon comes from Greek. "Poly" means "many" and "gon" means "angle."
</Card><br />


<h1><strong>Shape Animations</strong></h1>

SVG animations can be created using the  <span className="text-info"><strong> &lt;animate&gt;</strong></span> element.<br />

The example below creates a rectangle that will change its position in 3 seconds and <br /><br />
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
<Card className="text-white w-50 bg-info">
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
The Z command closes the shape, which results in a hypotenuse:<br /><br />
<Card className="imgclasss w-50">
<img src={Html_img33}></img>
</Card><br />
<Card className="text-white w-50 bg-info">
All of the above commands can also be expressed with lower case letters. When capital letters are used,
it indicates absolute position; lower case indicates relative position.
</Card><br />


<h1><strong>The &lt;canvas&gt;Element</strong></h1><br />

The HTML canvas is used to draw graphics that include everything from simple lines to complex graphic objects.<br /><br />

The <span className="text-info"><strong>&lt;canvas&gt;</strong></span>element is defined by:<br />
<strong>&lt;canvas</strong> id="canvas1" width="200" height="100"&gt;<br />
<strong>&lt;/canvas&gt;</strong><br /><br />
<Card className="text-white w-50 bg-info">
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

<strong>getContext() </strong> returns a drawing context on the canvas.<br /><br />
<Card className="text-white w-50 bg-info">
Basic knowledge of JavaScript is required to understand and use the Canvas.
</Card><br />


<h1><strong>Canvas Coordinates</strong></h1><br />

The HTML canvas is a two-dimensional grid.<br />
The upper-left corner of the canvas has the coordinates (0,0).<br /><br />

X coordinate increases to the right.<br />
Y coordinate increases toward the bottom of the canvas.<br /><br />
<Card className="imgclasss w-50">
<img src={Html_img34}></img>
</Card><br />
<Card className="text-white w-50 bg-info">
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

<h2><strong>Result:</strong></h2><br />
<Card className="imgclasss w-50">
<img src={Html_img35}></img>
</Card><br /><br />

The <strong>fillStyle </strong>property is used to set a color, gradient, or pattern to fill the drawing.<br />
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
<Card className="text-white w-50 bg-info">
There are many other methods aimed at helping to draw shapes and images on the canvas.
  </Card><br />


<h1><strong><u>Canvas vs. SVG</u></strong></h1>

<h1><strong><u>Canvas</u></strong></h1><br />
  - Elements are drawn programmatically<br />
  - Drawing is done with pixels<br />
  - Animations are not built in<br />
  - High performance for pixels-based drawing operations<br />
  - Resolution dependent<br />
  - No support for event handlers<br />
  - You can save the resulting image as .png or .jpg<br />
  - Well suited for graphic-intensive games<br /><br />

<h1><strong><u>SVG</u></strong></h1><br />
  - Elements are part of the page's DOM (Document object model)<br />
  - Drawing is done with vectors<br />
  - Effects, such as animations are built in<br />
  - Based on standard XML syntax, which provides better accessibility<br />
  - Resolution independent<br />
  - Support for event handlers<br />
  - Not suited for game applications<br />
  - Best suited for applications with large rendering areas (for example, Google Maps)<br /><br />
<Card className="text-white w-50 bg-info">
You can actually use both SVG and canvas on the same page, if needed.
However, you cannot just draw SVG onto a canvas, or vice-versa.
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
