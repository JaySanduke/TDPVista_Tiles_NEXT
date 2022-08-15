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

import CSS_img9 from "../../../assets/img/css/css_img9.jpg"
import CSS_img10 from "../../../assets/img/css/css_img10.jpg"
import CSS_img11 from "../../../assets/img/css/css_img11.jpg"
import CSS_img12 from "../../../assets/img/css/css_img12.jpg"
import CSS_img13 from "../../../assets/img/css/css_img13.jpg"
import CSS_img14 from "../../../assets/img/css/css_img14.jpg"

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
                      <h2 className="text-white mb-0">The font-family Property</h2>
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
                    <p>The font-family property specifies the font for an element.</p>
                    <p>There are two types of font family names:</p>
                    <p><strong>- font family:</strong> a specific font family (like Times New Roman or Arial)</p>
                    <p><strong>- generic family:</strong> a group of font families with a similar look (like Serif or Monospace)</p>
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
The font-family Property
                  </Button>
                  <Button outline
                    color="warning"
                    href="#tdp"
                    className="d-block w-100 text-left my-1 mx-0"
                    size="sm"
                  >
The font-size Property
                  </Button>
                  <Button outline
                    color="warning"
                    href="#tdp"
                    className="d-block w-100 text-left my-1 mx-0"
                    size="sm"
                  >
The font-style Property
                  </Button>
                  <Button outline
                    color="warning"
                    href="#tdp"
                    className="d-block w-100 text-left my-1 mx-0"
                    size="sm"
                  >
The font-weight Property
                  </Button>
                  <Button outline
                    color="warning"
                    href="#tdp"
                    className="d-block w-100 text-left my-1 mx-0"
                    size="sm"
                  >
The font-variant Property
                  </Button>
                  
                  </CardBody>
              </Card>
            </Col>
          </Row>
          <Row className="mt-5">
            <Col md="9">
              <p>Here is an example of different font styles:</p>

              <Table class="table table-striped w-50" responsive>
                <thead>
                  <tr>
                    <th scope="col"><strong>Generic Family</strong></th>
                    <th scope="col"><strong>Font Family</strong></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row"><strong>Serif</strong></th>
                    <td><strong><p>Times New Roman</p><br/>
                    <p><span style={{fontFamily: 'Georgia, serif'}}>Georgia</span></p></strong></td>
                  </tr>
                  <tr>
                    <th scope="row"><strong>Sans-serif</strong></th>
                    <td><strong><p><span style={{fontFamily: 'Arial, Helvetica, sans-serif'}}>Arial</span></p><br/>
                    <p><span style={{fontFamily: 'Verdana, Geneva, sans-serif'}}>Verdana</span></p></strong></td>
                  </tr>
                  <tr>
                    <th scope="row"><strong>Monospace</strong></th>
                    <td><strong><p><span style={{fontFamily: 'Courier New, courier'}}>Courier New</span></p><br/>
                    <p><span style={{fontFamily: '"Lucida Console", Monaco, monospace'}}>Lucida Console</span></p></strong></td>
                  </tr>
                </tbody>
              </Table>

              <Card className="text-primary w-50" style={{ backgroundColor: "#EEEEEE", textAlign: "left" }}>
                <strong>
                  <h1><strong>The HTML:</strong></h1>
                  <p>&lt;p class=&quot;serif&quot;&gt;</p>
                  <p>This is a paragraph shown in serif font.</p>
                  <p>&lt;/p&gt;</p>
                  <p>&lt;p class=&quot;sansserif&quot;&gt;</p>
                  <p>This is a paragraph shown in sans-serif font.</p>
                  <p>&lt;/p&gt;</p>
                  <p>&lt;p class=&quot;monospace&quot;&gt;</p>
                  <p>This is a paragraph shown in monospace font.</p>
                  <p>&lt;/p&gt;</p>
                  <p>&lt;p class=&quot;cursive&quot;&gt;</p>
                  <p>This is a paragraph shown in cursive font.</p>
                  <p>&lt;/p&gt;</p>
                  <p>&lt;p class=&quot;fantasy&quot;&gt;</p>
                  <p>This is a paragraph shown in fantasy font.</p>
                  <p>&lt;/p&gt;</p>
                  <h1><strong>The CSS:</strong></h1>
                  <p>p.serif &#123;</p>
                  <p>font-family: &quot;Times New Roman&quot;, Times, <strong>serif</strong>;</p>
                  <p>&#125;</p>
                  <p>p.sansserif &#123;</p>
                  <p>font-family: Helvetica, Arial, <strong>sans-serif</strong>;</p>
                  <p>&#125;</p>
                  <p>p.monospace &#123;</p>
                  <p>font-family: &quot;Courier New&quot;, Courier, <strong>monospace</strong>;</p>
                  <p>&#125;</p>
                  <p>p.cursive &#123;</p>
                  <p>font-family: Florence, <strong>cursive</strong>;</p>
                  <p>&#125;</p>
                  <p>p.fantasy &#123;</p>
                  <p>font-family: Blippo, <strong>fantasy</strong>;</p>
                  <p>&#125;</p>
                </strong>
              </Card>
              
              <p><strong>Result:</strong></p>
              <p><br/></p>

              <Card className="imgclasss w-50">
                <img src={CSS_img9}></img>
              </Card>

              <p>Separate each value with a <strong>comma</strong> to indicate that they are alternatives.</p>
              <p>If the name of a font family is more than one word, it must be in quotation marks:<strong> &quot;Times New Roman&quot;</strong>.</p>
              <p><br/></p>
              
              <h1><strong>The font-family Property</strong></h1>
              <p>The font-family property should hold several font names as a &quot;fallback&quot; system. When specifying a web font in a CSS style, add more than one font name, in order to avoid unexpected behaviors. If the client computer for some reason doesn&apos;t have the one you choose, it will try the next one.</p>
              <p><br/></p>
              <p>It is a good practice to specify a generic font family, to let the browser pick a similar font in the generic family, if no other fonts are available.</p>
              
              <Card className="text-primary w-50" style={{ backgroundColor: "#EEEEEE", textAlign: "left" }}>
                <strong>
                  <p>body &#123;</p>
                  <p>font-family: Arial, &quot;Helvetica Neue&quot;, Helvetica, sans-serif;</p>
                  <p>&#125;</p>
                </strong>
              </Card>
              
              <p>If the browser does not support the font <strong>Arial</strong>, it tries the next fonts (<strong>Helvetica</strong> <strong>Neue</strong>, then <strong>Helvetica</strong>). If the browser doesn&apos;t have any of them, it will try the generic <strong>sans-serif</strong>.</p>
              <p>Remember to use quotation marks if the font name consists of more than one word.</p>
              <p><br/></p>
              
              <h1><strong>The font-size Property</strong></h1>
              <p>The font-size property sets the size of a font. One way to set the size of fonts on the web is to use <strong>keywords</strong>. For example <strong>xx-small, small, medium, large, larger,</strong> etc.</p>
              <p><br/></p>

              <Card className="text-primary w-50" style={{ backgroundColor: "#EEEEEE", textAlign: "left" }}>
                <strong>
                  <p><strong>The HTML:</strong></p>
                  <p>&lt;p class=&quot;small&quot;&gt;</p>
                  <p>Paragraph text set to be small</p>
                  <p>&lt;/p&gt;</p>
                  <p>&lt;p class=&quot;medium&quot;&gt;</p>
                  <p>Paragraph text set to be medium</p>
                  <p>&lt;/p&gt;</p>
                  <p>&lt;p class=&quot;large&quot;&gt;</p>
                  <p>Paragraph text set to be large</p>
                  <p>&lt;/p&gt;</p>
                  <p>&lt;p class=&quot;xlarge&quot;&gt;</p>
                  <p>Paragraph text set to be very large</p>
                  <p>&lt;/p&gt;</p>
                  <p><strong>The CSS:</strong></p>
                  <p>p.small &#123;</p>
                  <p>font-size: <strong>small</strong>;</p>
                  <p>&#125;</p>
                  <p>p.medium &#123;</p>
                  <p>font-size: <strong>medium</strong>;</p>
                  <p>&#125;</p>
                  <p>p.large &#123;</p>
                  <p>font-size: <strong>large</strong>;</p>
                  <p>&#125;</p>
                  <p>p.xlarge &#123;</p>
                  <p>font-size: <strong>x-large</strong>;</p>
                  <p>&#125;</p>
                </strong>
              </Card>
              
              <p><br/></p>
              <p><strong>Result:</strong></p>

              <Card className="imgclasss w-50">
                <img src={CSS_img10}></img>
              </Card>

              <p>Keywords are useful if you do not want the user to be able to increase the size of the font because it will adversely affect your site&apos;s appearance.</p>
              <p><br/></p>
              
              <h1><strong>The font-size Property</strong></h1>
              <p>You can also use numerical values in <strong>pixels</strong> or <strong>ems</strong> to manipulate font size.</p>
              <p>Setting the font size in pixel values (<strong>px</strong>) is a good choice when you need pixel accuracy, and it gives you full control over the text size.</p>
              <p>The <strong>em</strong> size unit is another way to set the font size (<strong>em</strong> is a relative size unit). It allows all major browsers to resize the text. If you haven&apos;t set the font size anywhere on the page, then it is the browser default size, which is <strong>16px</strong>.</p>
              <p><br/></p>
              <p>To calculate the em size, just use the following formula: <strong>em = pixels / 16</strong></p>
              <p><strong>For example:</strong></p>

              <Card className="text-primary w-50" style={{ backgroundColor: "#EEEEEE", textAlign: "left" }}>
                <strong>
                  <p>h1 &#123;</p>
                  <p>font-size: 20<strong>px</strong>;</p>
                  <p>&#125;</p>
                  <p><br/></p>
                  <p>h1 &#123;</p>
                  <p>font-size: 1.25<strong>em</strong>;</p>
                  <p>&#125;</p>
                </strong>
              </Card>
              
              <p><br/></p>
              <p>Both of the examples will produce the same result in the browser, because <strong>20/16=1.25em</strong>.</p>
              <p>Try different combinations of text size and page zooming in a variety of browsers to ensure that the text remains readable.</p>
              <p><br/></p>
              
              <h1><strong>The font-style Property</strong></h1>
              <p>The font-style property is typically used to specify italic text.</p>
              <p><br/></p>
              <p><strong>The HTML:</strong></p>
              <p>&lt;p class=&quot;italic&quot;&gt;This is a paragraph in italic style.&lt;/p&gt;</p>
              <p><strong>The CSS:</strong></p>
              <p>p.italic &#123;</p>
              <p>font-style: italic;</p>
              <p>&#125;</p>
              <p><br/></p>
              <p><strong>Result:</strong></p>
              <p><br/></p>
              
              <Card className="imgclasss w-50">
                <img src={CSS_img11}></img>
              </Card>

              <h1><strong>The font-style Property</strong></h1>
              <p><br/></p>
              <p>The font-style property has three values: <strong>normal, italic, and oblique</strong>.</p>
              <p>Oblique is very similar to italic, but less supported.</p>
              <p><br/></p>

              <Card className="text-primary w-50" style={{ backgroundColor: "#EEEEEE", textAlign: "left" }}>
                <strong>
                  <p><strong>The HTML:</strong></p>
                  <p>&lt;p class=&quot;normal&quot;&gt;This paragraph is normal.&lt;/p&gt;</p>
                  <p>&lt;p class=&quot;italic&quot;&gt;This paragraph is italic.&lt;/p&gt;</p>
                  <p>&lt;p class=&quot;oblique&quot;&gt;This paragraph is oblique.&lt;/p&gt;</p>
                  <p><strong>The CSS:</strong></p>
                  <p>p.normal &#123;</p>
                  <p>font-style: <strong>normal</strong>;</p>
                  <p>&#125;</p>
                  <p>p.italic &#123;</p>
                  <p>font-style: <strong>italic</strong>;</p>
                  <p>&#125;</p>
                  <p>p.oblique &#123;</p>
                  <p>font-style: <strong>oblique</strong>;</p>
                  <p>&#125;</p>
                </strong>
              </Card>
              
              <p><br/></p>
              <p>The HTML<strong> &lt;i&gt;</strong> tag will produce exactly the same result as the <strong>italic font style</strong>.</p>
              <p><br/></p>
              
              <h1><strong>The font-weight Property</strong></h1>
              <p>The font-weight controls the boldness or thickness of the text. The values can be set as <strong>normal</strong> (default size), <strong>bold, bolder,</strong> and <strong>lighter</strong>.</p>
              <p><br/></p>
              <p><strong>The HTML:</strong></p>

              <Card className="text-primary w-50" style={{ backgroundColor: "#EEEEEE", textAlign: "left" }}>
                <strong>
                  <p>&lt;p class=&quot;light&quot;&gt;This is a font with a &quot;lighter&quot; weight.&lt;/p&gt;</p>
                  <p>&lt;p class=&quot;bold&quot;&gt;This is a font with a &quot;bold&quot; weight.&lt;/p&gt;</p>
                  <p>&lt;p class=&quot;bolder&quot;&gt;This is a font with a &quot;bolder&quot; weight.&lt;/p&gt;</p>
                  <p><strong>The CSS:</strong></p>
                  <p>p.light &#123;</p>
                  <p>font-weight: <strong>lighter</strong>;</p>
                  <p>&#125;</p>
                  <p>p.bold &#123;</p>
                  <p>font-weight: <strong>bold</strong>;</p>
                  <p>&#125;</p>
                  <p>p.bolder &#123;</p>
                  <p>font-weight: <strong>bolder</strong>;</p>
                  <p>&#125;</p>
                </strong>
              </Card>
              
              <p><br/></p>
              <p><strong>Result:</strong></p>
              <p><br/></p>

              <Card className="imgclasss w-50">
                <img src={CSS_img12}></img>
              </Card>

              <h1><strong>The font-weight Property</strong></h1>
              <p><br/></p>
              <p>You can also define the font weight with a number from <strong>100</strong> (thin) to <strong>900</strong> (thick), according to how thick you want the text to be.</p>
              <p>400 is the same as normal, and 700 is the same as bold.</p>
              <p><br/></p>

              <Card className="text-primary w-50" style={{ backgroundColor: "#EEEEEE", textAlign: "left" }}>
                <strong>
                  <p><strong>The HTML:</strong></p>
                  <p>&lt;p class=&quot;light&quot;&gt;This is a font with a &quot;lighter&quot; weight.&lt;/p&gt;</p>
                  <p>&lt;p class=&quot;thick&quot;&gt;This is a font with a &quot;bold&quot; weight.&lt;/p&gt;</p>
                  <p>&lt;p class=&quot;thicker&quot;&gt;This is a font with a &quot;700&quot; weight.&lt;/p&gt;</p>
                  <p><strong>The CSS:</strong></p>
                  <p>p.light &#123;</p>
                  <p>font-weight: <strong>lighter</strong>;</p>
                  <p>&#125;</p>
                  <p>p.thick &#123;</p>
                  <p>font-weight: <strong>bold</strong>;</p>
                  <p>&#125;</p>
                  <p>p.thicker &#123;</p>
                  <p>font-weight: <strong>700</strong>;</p>
                  <p>&#125;</p>
                </strong>
              </Card>
              
              <p><br/></p>
              <p><strong>Result:</strong></p>

              <Card className="imgclasss w-50">
                <img src={CSS_img13}></img>
              </Card>

              <p>The HTML <strong>&lt;strong&gt;</strong> tag also makes the text <strong>bold</strong>.</p>
              <p><br/></p>
              <p><br/></p>
              
              <h1><strong>The font-variant Property</strong></h1>
              <p><br/></p>
              <p>The CSS font-variant property allows you to convert your font to all small caps. The values can be set as <strong>normal, small-caps,</strong> and <strong>inherit</strong>.</p>
              <p><br/></p>

              <Card className="text-primary w-50" style={{ backgroundColor: "#EEEEEE", textAlign: "left" }}>
                <strong>
                  <p><strong>The HTML:</strong></p>
                  <p>&lt;p class=&quot;normal&quot;&gt;Paragraph font variant set to normal.&lt;/p&gt;</p>
                  <p>&lt;p class=&quot;small&quot;&gt;Paragraph font variant set to small-caps.&lt;/p&gt;</p>
                  <p><strong>The CSS:</strong></p>
                  <p>p.normal &#123;</p>
                  <p>font-variant: <strong>normal</strong>;</p>
                  <p>&#125;</p>
                  <p>p.small &#123;</p>
                  <p>font-variant: <strong>small-caps</strong>;</p>
                  <p>&#125;</p>
                </strong>
              </Card>
              
              <p><br/></p>
              <p><strong>Result:</strong></p>
              <p><br/></p>

              <Card className="imgclasss w-50">
                <img src={CSS_img14}></img>
              </Card>

              <p>Not every font supports CSS font-variant, so be sure to test before you publish.</p>
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