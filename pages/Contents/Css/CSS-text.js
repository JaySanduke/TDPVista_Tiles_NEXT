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
import Content from "layouts/Content.js";

// core components
import {
  chartOptions,
  parseOptions,
  chartExample1,
  chartExample2
} from "variables/charts.js";

import CSS_img17 from "../../../assets/img/css/css_img17.jpg"
import CSS_img18 from "../../../assets/img/css/css_img18.jpg"
import CSS_img19 from "../../../assets/img/css/css_img19.jpg"
import CSS_img20 from "../../../assets/img/css/css_img20.jpg"
import CSS_img21 from "../../../assets/img/css/css_img21.jpg"
import CSS_img22 from "../../../assets/img/css/css_img22.jpg"
import CSS_img23 from "../../../assets/img/css/css_img23.jpg"
import CSS_img24 from "../../../assets/img/css/css_img24.jpg"
import CSS_img25 from "../../../assets/img/css/css_img25.jpg"
import CSS_img26 from "../../../assets/img/css/css_img26.jpg"
import CSS_img27 from "../../../assets/img/css/css_img27.jpg"
import CSS_img28 from "../../../assets/img/css/css_img28.jpg"

class Header extends React.Component {
  render() {
    return (

      <div className="header bg-gradient-info pb-8 pt-5 pt-md-8">
        <Container fluid>
          <div className="header-body">
            <Row>
              <Col xl="6">
              <h1 style={{fontSize:"200%",color:"#fff",fontFamily:"Roboto"}}>CSS</h1>
              
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
                      <h2 className="text-white mb-0">The text-align Property</h2>
                    </div>
                    <div className="col">
                      <Nav className="justify-content-end" pills>
                        <NavItem>
                          <NavLink
                            className={classnames("py-2 px-3", {
                              active: this.state.activeNav === 1
                            })}
                            href="#pablo"
                            onClick={e => this.toggleNavs(e, 1)}
                          >
                            <span className="d-none d-md-block">Prev</span>
                            <span className="d-md-none">P</span>
                          </NavLink>
                        </NavItem>
                        <NavItem>
                          <NavLink
                            className={classnames("py-2 px-3", {
                              active: this.state.activeNav === 2
                            })}
                            data-toggle="tab"
                            href="#pablo"
                            onClick={e => this.toggleNavs(e, 2)}
                          >
                            <span className="d-none d-md-block">Next</span>
                            <span className="d-md-none">N</span>
                          </NavLink>
                        </NavItem>
                      </Nav>
                    </div>
                  </Row>
                </CardHeader>
                <CardBody className="text-white" style={{  textAlign: "left" }}>
                  <div className="text-light">
                    <p>The text-align property specifies the horizontal alignment of text in an element. By default, text on your website is aligned to the left. However, at times you may require a different alignment.</p>
                    <p><br/></p>
                    <p>text-align property values are as follows: <strong>left, right, center, and justify</strong>.</p>
                    <p><br/></p>
                  </div>
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
The vertical-align Property
                  </Button>
                  <Button outline
                    color="warning"
                    href="#tdp"
                    className="d-block w-100 text-left my-1 mx-0"
                    size="sm"
                  >
The text-decoration Property
                  </Button>
                  <Button outline
                    color="warning"
                    href="#tdp"
                    className="d-block w-100 text-left my-1 mx-0"
                    size="sm"
                  >
The text-indent Property
                  </Button>
                  <Button outline
                    color="warning"
                    href="#tdp"
                    className="d-block w-100 text-left my-1 mx-0"
                    size="sm"
                  >
text-shadow with Blur Effect
                  </Button>
                  <Button outline
                    color="warning"
                    href="#tdp"
                    className="d-block w-100 text-left my-1 mx-0"
                    size="sm"
                  >
The text-transform Property
                  </Button>
                  <Button outline
                    color="warning"
                    href="#tdp"
                    className="d-block w-100 text-left my-1 mx-0"
                    size="sm"
                  >
text-transform Values
                  </Button>
                  <Button outline
                    color="warning"
                    href="#tdp"
                    className="d-block w-100 text-left my-1 mx-0"
                    size="sm"
                  >
text-shadow with Blur Effect
                  </Button>
                  <Button outline
                    color="warning"
                    href="#tdp"
                    className="d-block w-100 text-left my-1 mx-0"
                    size="sm"
                  >
The letter-spacing Property
                  </Button>
                  <Button outline
                    color="warning"
                    href="#tdp"
                    className="d-block w-100 text-left my-1 mx-0"
                    size="sm"
                  >
Using Negative Values
                  </Button>
                  <Button outline
                    color="warning"
                    href="#tdp"
                    className="d-block w-100 text-left my-1 mx-0"
                    size="sm"
                  >
The word-spacing Property
                  </Button>
                  
                  </CardBody>
              </Card>
            </Col>
          </Row>
          <Row className="mt-5">
            <Col md="9">
              <Card className="text-primary w-50" style={{ backgroundColor: "#EEEEEE", textAlign: "left" }}>
                <strong>
                  <p><strong>The HTML:</strong></p>
                  <p>&lt;p class=&quot;left&quot;&gt;This paragraph is aligned to &lt;strong&gt;left.&lt;/strong&gt;&lt;/p&gt;</p>
                  <p>&lt;p class=&quot;right&quot;&gt;This paragraph is aligned to &lt;strong&gt;right.&lt;/strong&gt;&lt;/p&gt;</p>
                  <p>&lt;p class=&quot;center&quot;&gt;This paragraph is aligned to &lt;strong&gt;center.&lt;/strong&gt;&lt;/p&gt;</p>
                  <p><strong>The CSS:</strong></p>
                  <p>p.left &#123;</p>
                  <p>text-align: <strong>left</strong>;</p>
                  <p>&#125;</p>
                  <p>p.right &#123;</p>
                  <p>text-align: <strong>right</strong>;</p>
                  <p>&#125;</p>
                  <p>p.center &#123;</p>
                  <p>text-align: <strong>center</strong>;</p>
                  <p>&#125;</p>
                </strong>
              </Card>
              
              <p><br/></p>
              <p><strong>Result:</strong></p>

              <Card className="imgclasss w-50">
                <img src={CSS_img17}></img>
              </Card>

              <p>When text-align is set to <strong>&quot;justify&quot;</strong>, each line is stretched so that every line has equal width, and the left and right margins are straight (as in magazines and newspapers).</p>
              <p><br/></p>
              <p><br/></p>
              
              <h1><strong>The vertical-align Property</strong></h1>
              <p><br/></p>
              <p>The vertical-align property sets an element&apos;s vertical alignment. Commonly used values are top, middle, and bottom.</p>
              <p><br/></p>
              <p>The example below shows how to vertically align the text between the table.</p>
              <p><br/></p>

              <Card className="text-primary w-50" style={{ backgroundColor: "#EEEEEE", textAlign: "left" }}>
                <strong>
                  <p><strong>The HTML:</strong></p>
                  <p>&lt;table border=&quot;1&quot; cellpadding=&quot;2&quot; cellspacing=&quot;0&quot; style=&quot;height: 150px;&quot;&gt;</p>
                  <p>&lt;tr&gt;</p>
                  <p>&lt;td class=&quot;top&quot;&gt;Top&lt;/td&gt;</p>
                  <p>&lt;td class=&quot;middle&quot;&gt;Middle&lt;/td&gt;</p>
                  <p>&lt;td class=&quot;bottom&quot;&gt;Bottom&lt;/td&gt;</p>
                  <p>&lt;/tr&gt;</p>
                  <p>&lt;/table&gt;</p>
                  <p><strong>The CSS:</strong></p>
                  <p>td.top &#123;</p>
                  <p><strong>vertical-align: top</strong>;</p>
                  <p>&#125;</p>
                  <p>td.middle &#123;</p>
                  <p><strong>vertical-align: middle</strong>;</p>
                  <p>&#125;</p>
                  <p>td.bottom &#123;</p>
                  <p><strong>vertical-align: bottom</strong>;</p>
                  <p>&#125;</p>
                </strong>
              </Card>
              
              <p><br/></p>
              <p><strong>Result:</strong></p>

              <Card className="imgclasss w-50">
                <img src={CSS_img18}></img>
              </Card>

              <h1><strong>The vertical-align Property</strong></h1>
              <p><br/></p>
              <p>The vertical-align property also takes the following values: <strong>baseline, sub, super, % and px</strong> (or pt, cm).</p>
              <p>The example below shows the difference between them.</p>
              <p><br/></p>

              <Card className="text-primary w-50" style={{ backgroundColor: "#EEEEEE", textAlign: "left" }}>
                <strong>
                  <p><strong>The HTML:</strong></p>
                  <p>&lt;p&gt;This is an &lt;span class=&quot;baseline&quot;&gt;inline text&lt;/span&gt; example.&lt;/p&gt;</p>
                  <p>&lt;p&gt;This is a &lt;span class=&quot;sub&quot;&gt;sub line text&lt;/span&gt; example.&lt;/p&gt;</p>
                  <p>&lt;p&gt; This is a &lt;span class=&quot;super&quot;&gt;super line text&lt;/span&gt; example.&lt;/p&gt;</p>
                  <p>&lt;p&gt; This is a &lt;span class=&quot;pixel&quot;&gt;pixel&lt;/span&gt; example.&lt;/p&gt;</p>
                  <p><strong>The CSS:</strong></p>
                  <p>span.baseline &#123;</p>
                  <p>vertical-align: <strong>baseline</strong>;</p>
                  <p>&#125;</p>
                  <p>span.sub &#123;</p>
                  <p>vertical-align: <strong>sub</strong>;</p>
                  <p>&#125;</p>
                  <p>span.super &#123;</p>
                  <p>vertical-align: <strong>super</strong>;</p>
                  <p>&#125;</p>
                  <p>span.pixel &#123;</p>
                  <p>vertical-align: <strong>-10px</strong>;</p>
                  <p>&#125;</p>
                </strong>
              </Card>
              
              <p><br/></p>
              <p><strong>Result:</strong></p>
              <p><br/></p>

              <Card className="imgclasss w-50">
                <img src={CSS_img19}></img>
              </Card>

              <p>Instead of px values, you can use pt (points), cm (centimeters) and % (percentage) values.</p>
              <p><br/></p>
              
              
              <h1><strong>The vertical-align Property</strong></h1>
              <p>Vertical align property does not act the same way for all elements.</p>
              <p>For example, some additional CSS styling is needed for div elements.</p>
              <p><br/></p>

              <Card className="text-primary w-50" style={{ backgroundColor: "#EEEEEE", textAlign: "left" }}>
                <strong>
                  <p><strong>The HTML:</strong></p>
                  <p>&lt;div class=&quot;main&quot;&gt;</p>
                  <p>&lt;div class=&quot;paragraph&quot;&gt;</p>
                  <p>This text is aligned to the middle</p>
                  <p>&lt;/div&gt;</p>
                  <p>&lt;/div&gt;</p>
                  <p><strong>The CSS:</strong></p>
                  <p>.main &#123;</p>
                  <p>height: 150px; width: 400px;</p>
                  <p>background-color: LightSkyBlue;</p>
                  <p>display: inline-table;</p>
                  <p>&#125;</p>
                  <p>.paragraph &#123;</p>
                  <p>display: table-cell;</p>
                  <p>vertical-align: middle;</p>
                  <p>&#125;</p>
                </strong>
              </Card>
              
              <p><br/></p>
              <p><strong>Result:</strong></p>

              <Card className="imgclasss w-50">
                <img src={CSS_img20}></img>
              </Card>

              <p><strong>display: inline-table;</strong> and <strong>display: table-cell;</strong> styling rules are applied to make the vertical-align property work with divs.</p>
              <p><br/></p>
              
              
              <h1><strong>The text-decoration Property</strong></h1>
              <p><br/></p>
              <p>The text-decoration property specifies how the text will be decorated.</p>
              <p><br/></p>
              <p>Commonly used values are:</p>
              <p><strong>none</strong> - The default value, this defines a normal text</p>
              <p><strong>inherit</strong> - Inherits this property from its parent element</p>
              <p><strong>overline</strong> - Draws a horizontal line above the text</p>
              <p><strong>underline</strong> - Draws a horizontal line below the text</p>
              <p><strong>line-through</strong> - draws a horizontal line through the text (substitutes the HTML <strong>&lt;s&gt;</strong> tag)</p>
              <p><br/></p>
              <p>The example below demonstrates the difference between each value.</p>
              <p><br/></p>

              <Card className="text-primary w-50" style={{ backgroundColor: "#EEEEEE", textAlign: "left" }}>
                <strong>
                  <p><strong>The HTML:</strong></p>
                  <p>&lt;p class=&quot;none&quot;&gt;This is default style of the text (none).&lt;/p&gt;</p>
                  <p>&lt;p class=&quot;inherit&quot;&gt;This text inherits the decoration of the parent.&lt;/p&gt;</p>
                  <p>&lt;p class=&quot;overline&quot;&gt;This is overlined text.&lt;/p&gt;</p>
                  <p>&lt;p class=&quot;underline&quot;&gt;This is underlined text.&lt;/p&gt;</p>
                  <p>&lt;p class=&quot;line-through&quot;&gt;This is lined-through text.&lt;/p&gt;</p>
                  <p><strong>The CSS:</strong></p>
                  <p>p.none &#123;</p>
                  <p>text-decoration: <strong>none</strong>;</p>
                  <p>&#125;</p>
                  <p>p.inherit &#123;</p>
                  <p>text-decoration: <strong>inherit</strong>;</p>
                  <p>&#125;</p>
                  <p>p.overline &#123;</p>
                  <p>text-decoration: <strong>overline</strong>;</p>
                  <p>&#125;</p>
                  <p>p.underline &#123;</p>
                  <p>text-decoration: <strong>underline</strong>;</p>
                  <p>&#125;</p>
                  <p>p.line-through &#123;</p>
                  <p>text-decoration: <strong>line-through;</strong></p>
                  <p>&#125;</p>
                </strong>
              </Card>
              
              <p><br/></p>
              <p><strong>Result:</strong></p>
              <p><br/></p>

              <Card className="imgclasss w-50">
                <img src={CSS_img21}></img>
              </Card>

              <p>You can combine the <strong>underline, overline, or line-through</strong> values in a space-separated list to add multiple decoration lines.</p>
              <p><br/></p>
              
              
              <h1><strong>The text-decoration Property</strong></h1>
              <p>Another value of text-decoration property is <strong>blink</strong> which makes the text blink.</p>
              <p><br/></p>
              <p>CSS syntax looks like this:text-decoration: <strong>blink;</strong></p>
              <p>This value is valid but is deprecated and most browsers ignore it.</p>
              <p><br/></p>
              
              <h1><strong>The text-indent Property</strong></h1>
              <p>The text-indent property specifies how much horizontal space should be left before the beginning of the first line of the text. Property values are <strong>length</strong> (px, pt, cm, em, etc.), %, and <strong>inherit</strong>.</p>
              <p><br/></p>

              <Card className="text-primary w-50" style={{ backgroundColor: "#EEEEEE", textAlign: "left" }}>
                <strong>
                  <p><strong>The HTML:</strong></p>
                  <p>&lt;p&gt;This is an example of</p>
                  <p>&lt;strong&gt;text-indent &lt;/strong&gt; property.</p>
                  <p>First line of our text is indented to the right in 60px.</p>
                  <p>Besides pixels you can also use other measurement units,</p>
                  <p>like pt, cm, em, etc. &lt;/p&gt;</p>
                  <p><strong>The CSS:</strong></p>
                  <p>p &#123;</p>
                  <p><strong>text-indent:</strong> 60px;</p>
                  <p>&#125;</p>
                </strong>
              </Card>
              
              <p><br/></p>
              <p><strong>Result:</strong></p>

              <Card className="imgclasss w-50">
                <img src={CSS_img22}></img>
              </Card>

              <p>Negative values are allowed. The first line will be indented to the left if the value is negative.</p>
              <p><br/></p>
              <strong>text-shadow with Blur Effect</strong>
              <p>When working with shadows, you can use any CSS-supported color format.</p>
              <p><br/></p>
              <p>For the x and y offsets, various types of units can be used (like <strong>px, cm, mm, in, pc, pt</strong>, etc).</p>
              <p>Negative values are also supported.</p>
              <p><br/></p>
              <p>The example below creates a blue drop-shadow, two pixels higher than the main text, one pixel to the left of it, and with a 0.5em blur:</p>
              <p><br/></p>

              <Card className="text-primary w-50" style={{ backgroundColor: "#EEEEEE", textAlign: "left" }}>
                <strong>
                  <p><strong>The HTML:</strong></p>
                  <p>&lt;h1&gt;Text-shadow with blur effect&lt;/h1&gt;</p>
                  <p><strong>The CSS:</strong></p>
                  <p>h1 &#123;</p>
                  <p>font-size: 20pt;</p>
                  <p>text-shadow: rgba(0,0,255,1) -1px -2px 0.5em;</p>
                  <p>&#125;</p>
                </strong>
              </Card>
              
              <p><br/></p>
              <p><strong>Result:</strong></p>

              <Card className="imgclasss w-50">
                <img src={CSS_img23}></img>
              </Card>

              <p>Internet Explorer 9 and earlier do not support the text-shadow property.</p>
              <p><br/></p>
              
              <h1><strong>The text-transform Property</strong></h1>
              <p>The text-transform CSS property specifies how to capitalize an element&apos;s text. For example, it can be used to make text appear with each word capitalized.</p>
              <p><br/></p>

              <Card className="text-primary w-50" style={{ backgroundColor: "#EEEEEE", textAlign: "left" }}>
                <strong>
                  <p><strong>The HTML:</strong></p>
                  <p>&lt;p class=&quot;capitalize&quot;&gt;</p>
                  <p>The value capitalize transforms the first</p>
                  <p>character in each word to uppercase;</p>
                  <p>all other characters remain unaffected.</p>
                  <p>&lt;/p&gt;</p>
                  <p><strong>The CSS:</strong></p>
                  <p>p.capitalize &#123;</p>
                  <p>text-transform: capitalize;</p>
                  <p>&#125;</p>
                </strong>
              </Card>
              
              <p><br/></p>
              <p><strong>Result:</strong></p>

              <Card className="imgclasss w-50">
                <img src={CSS_img24}></img>
              </Card>

              <h1><strong>text-transform Values</strong></h1>
              <p><br/></p>
              <p><br/></p>
              <p>Using text-transform property you can make text appear in all-uppercase or all-lowercase. Here is an example:</p>
              <p><br/></p>

              <Card className="text-primary w-50" style={{ backgroundColor: "#EEEEEE", textAlign: "left" }}>
                <strong>
                  <p><strong>The HTML:</strong></p>
                  <p>&lt;p class=&quot;uppercase&quot;&gt;This value transforms all characters to uppercase.&lt;/p&gt;</p>
                  <p>&lt;p class=&quot;lowercase&quot;&gt;This value transforms all characters to lowercase.&lt;/p&gt;</p>
                  <p><strong>The CSS:</strong></p>
                  <p>p.uppercase &#123;</p>
                  <p>text-transform: <strong>uppercase</strong>;</p>
                  <p>&#125;</p>
                  <p>p.lowercase &#123;</p>
                  <p>text-transform: <strong>lowercase</strong>;</p>
                  <p>&#125;</p>
                </strong>
              </Card>
              
              <p><br/></p>
              <p><strong>Result:</strong></p>
              <p><br/></p>

              <Card className="imgclasss w-50">
                <img src={CSS_img25}></img>
              </Card>

              <p>The value <strong>none</strong> will produce no capitalization effect at all.</p>
              <p><br/></p>
              
              <h1><strong>The letter-spacing Property</strong></h1>
              <p>The letter-spacing property specifies the <strong>space between characters</strong> in a text. The values can be set as:</p>
              <p>- <strong>normal</strong> defines the default style with no extra space between characters</p>
              <p>- <strong>length</strong> defines an extra space between characters using measurement units like px, pt, cm, mm, etc.;</p>
              <p>- <strong>inherit</strong> inherits the property from its parent element;</p>
              <p><br/></p>

              <Card className="text-primary w-50" style={{ backgroundColor: "#EEEEEE", textAlign: "left" }}>
                <strong>
                  <p><strong>The HTML:</strong></p>
                  <p>&lt;p class=&quot;normal&quot;&gt;This paragraph has no additional letter-spacing applied.&lt;/p&gt;</p>
                  <p>&lt;p class=&quot;positive &quot;&gt;This paragraph is letter-spaced at 4px.&lt;/p&gt;</p>
                  <p><strong>The CSS:</strong></p>
                  <p>p.normal &#123;</p>
                  <p><strong>letter-spacing: normal;</strong></p>
                  <p>&#125;</p>
                  <p>p.positive &#123;</p>
                  <p><strong>letter-spacing: 4px;</strong></p>
                  <p>&#125;</p>
                </strong>
              </Card>

              <p><br/></p>
              <p><strong>Result:</strong></p>

              <Card className="imgclasss w-50">
                <img src={CSS_img26}></img>
              </Card>





              <h1><strong>Using Negative Values</strong></h1>
              <p><br/></p>
              <p>For defining an extra space between characters, negative values are also permitted.</p>
              <p>Here is an example demonstrating the difference between <strong>positive</strong> and <strong>negative</strong> values:</p>
              <p><br/></p>

              <Card className="text-primary w-50" style={{ backgroundColor: "#EEEEEE", textAlign: "left" }}>
                <strong>
                  <p><strong>The HTML:</strong></p>
                  <p>&lt;p class=&quot;positive&quot;&gt;This paragraph is letter-spaced at 4px.&lt;/p&gt;</p>
                  <p>&lt;p class=&quot;negative&quot;&gt;This paragraph is letter-spaced at -1.5px&lt;/p&gt;</p>
                  <p><strong>The CSS:</strong></p>
                  <p>p.positive &#123;</p>
                  <p>letter-spacing: 4px;</p>
                  <p>&#125;</p>
                  <p>p.negative &#123;</p>
                  <p>letter-spacing: -1.5px;</p>
                  <p>&#125; </p>
                </strong>
              </Card>
              
              <p><br/></p>
              <p><strong>Result:</strong></p>
              <p><br/></p>

              <Card className="imgclasss w-50">
                <img src={CSS_img27}></img>
              </Card>

              <p>Always test your result, to ensure the text is readable.</p>
              <p><br/></p>
              
              
              <h1><strong>The word-spacing Property</strong></h1>
              <p>The word-spacing property specifies the <strong>space between words</strong> in a text. Just like the letter-spacing property, you can set the word-spacing values as <strong>normal, length, and inherit</strong>.</p>
              <p><br/></p>

              <Card className="text-primary w-50" style={{ backgroundColor: "#EEEEEE", textAlign: "left" }}>
                <strong>
                  <p><strong>The HTML:</strong></p>
                  <p>&lt;p class=&quot;normal&quot;&gt;This paragraph has no additional word-spacing applied.&lt;/p&gt;</p>
                  <p>&lt;p class=&quot;px&quot;&gt;This paragraph is word-spaced at 30px.&lt;/p&gt;</p>
                  <p><strong>The CSS:</strong></p>
                  <p>p.normal &#123;</p>
                  <p><strong>word-spacing: normal;</strong></p>
                  <p>&#125;</p>
                  <p>p.px &#123;</p>
                  <p><strong>word-spacing: 30px;</strong></p>
                  <p>&#125;</p>
                </strong>
              </Card>
              
              <p><br/></p>
              <p><strong>Result:</strong></p>
              <p><br/></p>

              <Card className="imgclasss w-50">
                <img src={CSS_img28}></img>
              </Card>

              <p>When a weird spacing is used, and it is necessary to keep the selected paragraph with normal word spacing, the <strong>normal</strong> option is usually used.</p>
              <p><br/></p>
            </Col>
            <Col xl="3">
              
            </Col>
          </Row>
          <div className="col">
            <Nav className="justify-content-center" pills>
              <NavItem>
                <NavLink
                  className={classnames("py-2 px-3", {
                    active: this.state.activeNav === 1
                  })}
                  href="#pablo"
                  onClick={e => this.toggleNavs(e, 1)}
                >
                  <span className="d-none d-md-block">Prev</span>
                  <span className="d-md-none">P</span>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className={classnames("py-2 px-3", {
                    active: this.state.activeNav === 2
                  })}
                  data-toggle="tab"
                  href="#pablo"
                  onClick={e => this.toggleNavs(e, 2)}
                >
                  <span className="d-none d-md-block">Next</span>
                  <span className="d-md-none">N</span>
                </NavLink>
              </NavItem>
            </Nav>
          </div>
        </Container>
      </>
    );
  }
}
Index.layout = Content;
export default Index;