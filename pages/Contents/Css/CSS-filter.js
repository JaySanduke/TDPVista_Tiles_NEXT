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

import CSS_img125 from "../../../assets/img/css/css_img125.jpg"

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
                      <h2 className="text-white mb-0">CSS Filters</h2>
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
                    <p>The CSS <strong>filter</strong> property lets you apply graphical effects like <strong>blurring</strong> or <strong>color shifting</strong> to an element.</p>
                    <p>Filters are commonly used to <strong>adjust the rendering</strong> of images, backgrounds, and borders.</p>
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
The drop-shadow Function
                  </Button>
                  <Button outline
                    color="warning"
                    href="#tdp"
                    className="d-block w-100 text-left my-1 mx-0"
                    size="sm"
                  >
The grayscale Function
                  </Button>
                  <Button outline
                    color="warning"
                    href="#tdp"
                    className="d-block w-100 text-left my-1 mx-0"
                    size="sm"
                  >
The sepia Function
                  </Button>
                  <Button outline
                    color="warning"
                    href="#tdp"
                    className="d-block w-100 text-left my-1 mx-0"
                    size="sm"
                  >
The saturate Function
                  </Button>
                  <Button outline
                    color="warning"
                    href="#tdp"
                    className="d-block w-100 text-left my-1 mx-0"
                    size="sm"
                  >
The hue-rotate Function
                  </Button>
                  <Button outline
                    color="warning"
                    href="#tdp"
                    className="d-block w-100 text-left my-1 mx-0"
                    size="sm"
                  >
The invert Function
                  </Button>
                  <Button outline
                    color="warning"
                    href="#tdp"
                    className="d-block w-100 text-left my-1 mx-0"
                    size="sm"
                  >
The opacity Function
                  </Button>
                  <Button outline
                    color="warning"
                    href="#tdp"
                    className="d-block w-100 text-left my-1 mx-0"
                    size="sm"
                  >
The brightness Function
                  </Button>
                  <Button outline
                    color="warning"
                    href="#tdp"
                    className="d-block w-100 text-left my-1 mx-0"
                    size="sm"
                  >
The contrast Function
                  </Button>
                  <Button outline
                    color="warning"
                    href="#tdp"
                    className="d-block w-100 text-left my-1 mx-0"
                    size="sm"
                  >
The blur Function
                  </Button>
                  
                </CardBody>
              </Card>
            </Col>
          </Row>
          <Row className="mt-5">
            <Col md="9">
              <p>Image filtering is useful when you want to have different styling for the same image.</p>
              <p>Instead of uploading multiple images to the website, you can upload only one image and then define visual effects using the <strong>filter</strong> property.</p>
              <p><br/></p>
              <p>Filter functions include <strong>blur(), brightness(), contrast(), drop-shadow(), grayscale(), hue-rotate(), invert(), opacity(), saturate() and sepia()</strong>.</p>
              <p><br/></p>
              <p>Tap <strong>Continue</strong> to explore the filters and see them in action!</p>
              <p>The filter property is not supported in Internet Explorer, Edge 12, Safari 5.1 and earlier.</p>
              <p><br/></p>
              
              <h1><strong>The drop-shadow Function</strong></h1>
              <p><strong>drop-shadow(w h b c)</strong> creates a shadow effect that extends beyond an image for the width <strong>w</strong> and height <strong>h</strong> with blur <strong>b</strong> and color <strong>c</strong>.</p>
              <p>w, h, and b are values in pixels.</p>
              <p><br/></p>
              <p><strong>For example:</strong></p>

              <Card className="text-primary w-50" style={{ backgroundColor: "#EEEEEE", textAlign: "left" }}>
                <strong>
                  <p>.dropshadow &#123;</p>
                  <p>filter: <strong>drop-shadow(5px 9px 2px blue)</strong>;</p>
                  <p>&#125; </p>
                </strong>
              </Card>
              
              <p>Positive values create the shadow to the <strong>right</strong> and <strong>below</strong> the image.</p>
              <p>Negative width and height values create the shadow <strong>above</strong> and to the <strong>left</strong> of the image.</p>
              <p><br/></p>
              
              <h1><strong>The grayscale Function</strong></h1>
              <p>The <strong>grayscale</strong> function converts an image to <strong>grayscale</strong>.</p>
              <p>The only parameter defines the <strong>proportion</strong> of the conversion.</p>
              <p><br/></p>
              <p>0% grayscale is the <strong>original image</strong>, whereas <strong>100%</strong> makes the image <strong>completely grayscale</strong>.</p>
              <p><br/></p>
              <p>Here is an example using a percentage value to make an image completely grayscale:</p>
              
              <Card className="text-primary w-50" style={{ backgroundColor: "#EEEEEE", textAlign: "left" }}>
                <strong>
                  <p>.filtered &#123;</p>
                  <p>filter: grayscale(100%);</p>
                  <p>&#125;</p>
                </strong>
              </Card>
              
              <p>Any negative value leaves the image unchanged.</p>
              <p><br/></p>
              
              <h1><strong>The sepia Function</strong></h1>
              <p>The <strong>sepia</strong> function converts an image to sepia.</p>
              <p>This is similar to using <strong>grayscale</strong> but with a <strong>reddish-brown</strong> color tone.</p>
              <p><br/></p>
              <p>The idea behind <strong>sepia</strong> filters is that they can make black and white photos look a bit more eye-catching than the basic grayscale version.</p>
              <p><br/></p>
              <p><strong>0%</strong> sepia is the <strong>original image</strong>, whereas <strong>100%</strong> converts the image to <strong>sepia</strong> completely:</p>
              
              <Card className="text-primary w-50" style={{ backgroundColor: "#EEEEEE", textAlign: "left" }}>
                <strong>
                  <p>.filtered &#123;</p>
                  <p>filter: <strong>sepia</strong>(100%);</p>
                  <p>&#125;</p>
                </strong>
              </Card>
              
              <h1><strong>The saturate Function</strong></h1>
              <p>The <strong>saturate</strong> function controls the <strong>color saturation</strong> for an image. The only parameter determines the <strong>proportion of the saturation</strong> that is applied to the image.</p>
              <p>The parameter can be either a percentage value or a number.</p>
              <p><br/></p>
              <p><strong>0%</strong> creates a <strong>completely unsaturated</strong> image (<strong>grayscale</strong>), whereas <strong>100%</strong> is the <strong>original image</strong>.</p>
              
              <Card className="text-primary w-50" style={{ backgroundColor: "#EEEEEE", textAlign: "left" }}>
                <strong>
                  <p>.filtered &#123;</p>
                  <p>filter: <strong>saturate</strong>(50%);</p>
                  <p>&#125;</p>
                </strong>
              </Card>
              
              <p><br/></p>
              <p>Here is an example using a number value to make an image <strong>super-saturated</strong>:</p>
              
              <Card className="text-primary w-50" style={{ backgroundColor: "#EEEEEE", textAlign: "left" }}>
                <strong>
                  <p>.filtered &#123;</p>
                  <p>filter: saturate(2.5);</p>
                  <p>&#125;</p>
                </strong>
              </Card>
              
              <p><br/></p>
              <p>The <strong>saturate</strong> function also accepts values over 100%.</p>
              <p><br/></p>
              
              <h1><strong>The hue-rotate Function</strong></h1>
              <p>The <strong>hue-rotate</strong> function applies a hue rotation (based on the color circle) to an image.</p>
              <p>The function takes an <strong>angle of rotation</strong> as its parameter. The value of angle defines the number of <strong>degrees</strong> around the <strong>color circle</strong> the input samples will be adjusted</p>

              <Card className="imgclasss w-50">
                <img src={CSS_img125}></img>
              </Card>

              <p>When you use <strong>hue-rotate()</strong> to rotate the <strong>hue</strong>, you are rotating around this color circle.</p>
              <p><br/></p>
              <p>If the image contains red color, which is at 0 degrees on the color circle, rotating the hue by 240deg will make the red color blue.</p>
              <p><br/></p>
              <p>Here is an example of a <strong>hue rotation</strong>:</p>

              <Card className="text-primary w-50" style={{ backgroundColor: "#EEEEEE", textAlign: "left" }}>
                <strong>
                  <p>.filtered &#123;</p>
                  <p>filter: <strong>hue-rotate</strong>(180deg);</p>
                  <p>&#125;</p>
                </strong>
              </Card>
              
              <p><br/></p>
              <p>0 and 360deg rotations leave the image unchanged.</p>
              <p><br/></p>
              
              <h1><strong>The invert Function</strong></h1>
              <p>The <strong>invert</strong> function inverts the colors of an image to make <strong>dark areas bright</strong> and <strong>bright areas dark</strong>.</p>
              <p>The function takes the <strong>proportion of the conversion </strong>as its parameter.</p>
              <p><br/></p>
              <p>The parameter can be either a <strong>percentage value</strong> or a <strong>number</strong>.</p>
              <p><strong>0% invert</strong> leaves the image unchanged, whereas <strong>100%</strong> creates a <strong>completely inverted</strong> image that is similar to a photographic negative.</p>
              <p><br/></p>
              <p>Here is an example using a percentage value to make the image <strong>partially inverted</strong>:</p>
              
              <Card className="text-primary w-50" style={{ backgroundColor: "#EEEEEE", textAlign: "left" }}>
                <strong>
                  <p>.filtered &#123;</p>
                  <p>filter: invert(70%);</p>
                  <p>&#125;</p>
                </strong>
              </Card>
              
              <p><br/></p>
              <p>The specification allows values over 100%, but that will have no further effect on the image.</p>
              
              <h1><strong>The opacity Function</strong></h1>
              <p>The <strong>opacity</strong> function sets the opacity of an image to change its transparency.</p>
              <p><br/></p>
              <p><strong>0%</strong> opacity creates a <strong>completely transparent</strong> image, whereas <strong>100%</strong> is the <strong>original image</strong>.</p>
              <p><strong>For example:</strong></p>

              <Card className="text-primary w-50" style={{ backgroundColor: "#EEEEEE", textAlign: "left" }}>
                <strong>
                  <p>.filtered &#123;</p>
                  <p>filter: <strong>opacity</strong>(70%);</p>
                  <p>&#125;</p>
                </strong>
              </Card>
              
              <p><br/></p>
              
              <h1><strong>The brightness Function</strong></h1>
              <p>The <strong>brightness(amount)</strong> function adjusts the brightness of an image, making it appear brighter or darker.</p>
              <p>The <strong>amount</strong> parameter determines the brightness level of the image. The parameter can take either a percentage value or a number.</p>
              <p><br/></p>
              <p>A value of <strong>0%</strong> results in an image that is <strong>completely black</strong>.</p>
              <p>A value of <strong>100%</strong> results in an image that is <strong>unchanged</strong>.</p>
              <p>Any amount <strong>over 100%</strong> produces a <strong>brighter image</strong>.</p>
              <p><br/></p>
              <p>Here is an example using a percentage value to make the image darker:</p>
              
              <Card className="text-primary w-50" style={{ backgroundColor: "#EEEEEE", textAlign: "left" }}>
                <strong>
                  <p>.filtered &#123;</p>
                  <p>filter: brightness(50%);</p>
                  <p>&#125;</p>
                </strong>
              </Card>
              
              <p><br/></p>
              <p>A value under 100% darkens the image, while a value over 100% brightens it.</p>
              <p>A number value of 0.5 has the same effect as the percentage value of 50%. A value of 1 is <strong>the same</strong> as 100%.</p>
              <p><br/></p>
              <p>Here is an example using a number value to make the image brighter:</p>
              
              <Card className="text-primary w-50" style={{ backgroundColor: "#EEEEEE", textAlign: "left" }}>
                <strong>
                  <p>.filtered &#123;</p>
                  <p>filter: brightness(1.9);</p>
                  <p>&#125;</p>
                </strong>
              </Card>
              
              <p><br/></p>
              <p>Any negative value will make the image black.</p>
              <p><br/></p>
              
              <h1><strong>The contrast Function</strong></h1>
              <p>The <strong>contrast</strong> function adjusts the contrast of the image.</p>
              <p>The <strong>amount</strong> parameter can take either a percentage value or a number.</p>
              <p><br/></p>
              <p>A value <strong>under 100% decreases</strong> the contrast, while a value over 100% increases it.</p>
              <p>A value of <strong>0%</strong> will create an image that is <strong>completely gray</strong>, while a value of 100% leaves the image <strong>unchanged</strong>.</p>
              <p>The value <strong>0.5</strong> corresponds to <strong>50%,</strong> while <strong>1</strong> is the same as <strong>100%</strong>.</p>
              <p><br/></p>
              <p>Here is an example using a percentage value to give the image more contrast:</p>
              
              <Card className="text-primary w-50" style={{ backgroundColor: "#EEEEEE", textAlign: "left" }}>
                <strong>
                  <p>.filtered &#123;</p>
                  <p>filter: contrast(140%);</p>
                  <p>&#125;</p>
                </strong>
              </Card>
              
              <p>Any negative value leaves the image unchanged.</p>
              <p><br/></p>
              
              <h1><strong>The blur Function</strong></h1>
              <p>The <strong>blur</strong> function applies a <strong>blur effect</strong> to an image.</p>
              <p>The blur function has only one parameter, <strong>radius</strong>, which defines how many <strong>pixels</strong> on the screen blend into each other. (a larger value creates more blur).</p>
              <p><strong>For example:</strong></p>
              
              <Card className="text-primary w-50" style={{ backgroundColor: "#EEEEEE", textAlign: "left" }}>
                <strong>
                  <p>.blured &#123;</p>
                  <p>filter: blur(5px);</p>
                  <p>&#125;</p>
                </strong>
              </Card>
              
              <p><br/></p>
              <p>The parameter is specified as a CSS length, but does not accept percentage values.</p>
              <p>If no parameter is provided, then the default value 0 is used, which leaves the image unchanged.</p>
              <p><strong>For example:</strong></p>
              
              <Card className="text-primary w-50" style={{ backgroundColor: "#EEEEEE", textAlign: "left" }}>
                <strong>
                  <p>.blur &#123;</p>
                  <p>/* Both have no effect on the picture*/</p>
                  <p>blur(); /* If no parameter is provided, then a value 0 is used.*/</p>
                  <p>blur(0); /* A value of 0 leaves the input unchanged.*/</p>
                  <p>&#125;</p>
                </strong>
              </Card>
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