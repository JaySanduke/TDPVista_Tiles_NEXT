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


class Header extends React.Component {
  render() {
    return (

      <div className="header bg-gradient-info pb-8 pt-5 pt-md-8">
        <Container fluid>
          <div className="header-body">
            <Row>
              <Col xl="6">
              <h1 style={{fontSize:"200%",color:"#fff",fontFamily:"Roboto"}}>JavaScript</h1>
              
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
                      <h2 className="text-white mb-0">setInterval</h2>
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
                  <p>The <strong><span className="text-info"><strong>setInterval method </strong></span>()</strong>calls a function or evaluates an expression at specified intervals (in milliseconds).</p>
                  <p>It will continue calling the function until <strong>clearInterval()</strong> is called or the window is closed.</p>
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
The Date Object
                  </Button>
                  <Button outline
                    color="warning"
                    href="#tdp"
                    className="d-block w-100 text-left my-1 mx-0"
                    size="sm"
                  >
Date Methods
                  </Button>
                  
                  </CardBody>
              </Card>
            </Col>
          </Row>
          <Row className="mt-5">
            <Col md="9">
            <p><strong>For example:</strong></p>

<Card className="text-primary w-50" style={{ backgroundColor: "#EEEEEE", textAlign: "left" }}>
  <strong>
    <p>function myAlert() &#123;</p>
    <p>alert(&quot;Hi&quot;);</p>
    <p>&#125;</p>
    <p><strong>setInterval(myAlert, 3000);</strong></p>
  </strong>
</Card>

<p><br/></p>
<p>This will call the myAlert function every 3 seconds (1000 ms = 1 second).</p>
<p>Write the <strong>name</strong> of the function without parentheses when passing it into the <strong>setInterval</strong> method.</p>
<p><br/></p>





<h1><strong>The Date Object</strong></h1>
<p><br/></p>
<p>The <span className="text-info"><strong>Date object</strong></span> enables us to work with dates.</p>
<p>A date consists of a year, a month, a day, an hour, a minute, a second, and milliseconds.</p>
<p><br/></p>
<p>Using <strong>new <span className="text-info"><strong>Date</strong></span>()</strong>, create a new date <span className="text-info"><strong>object</strong></span> with the <strong>current date and time</strong>.var d = new Date();</p>
<p>//d stores the current date and time</p>
<p>The other ways to initialize dates allow for the creation of new date objects from the <strong>specified date and time</strong>.new Date(milliseconds)</p>
<p>new Date(dateString)</p>
<p>new Date(year, month, day, hours, minutes, seconds, milliseconds)</p>
<p>JavaScript dates are calculated in milliseconds from 01 January, 1970 00:00:00 Universal Time (UTC). One day contains 86,400,000 millisecond.</p>
<p><strong>For example:</strong></p>

<Card className="text-primary w-50" style={{ backgroundColor: "#EEEEEE", textAlign: "left" }}>
  <strong>
    <p>//Fri Jan 02 1970 00:00:00</p>
    <p>var d1 = new Date(86400000);&nbsp;</p>
    <p><br/></p>
    <p>//Fri Jan 02 2015 10:42:00</p>
    <p>var d2 = new Date(&quot;January 2, 2015 10:42:00&quot;);</p>
  </strong>
</Card>

<p><br/></p>
<p>//Sat Jun 11 1988 11:42:00</p>
<p>var d3 = new Date(88,5,11,11,42,0,0);</p>
<p>JavaScript counts months from 0 to 11. January is 0, and December is 11.</p>
<p>Date objects are static, rather than dynamic. The computer time is ticking, but date objects don&apos;t change, once created.&nbsp;</p>
<p><br/></p>

<h1><strong>Date Methods</strong></h1>
<p>When a <span className="text-info"><strong>Date object</strong></span> is created, a number of <strong>methods</strong> make it possible to perform operations on it.</p>
<p><br/></p>

<Table class="table table-striped w-50" responsive>
  <thead>
  <tr>
      <th scope="col"><strong>Method</strong></th>
      <th scope="col"><strong>Description</strong></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row"><strong>getFullYear()</strong></th>
      <td>gets the year</td>
    </tr>
    <tr>
      <th scope="row"><strong>getMonth()</strong></th>
      <td>gets the month</td>
    </tr>
    <tr>
      <th scope="row"><strong>getDate()</strong></th>
      <td>gets the date of the month</td>
    </tr>
    <tr>
      <th scope="row"><strong>getDay()</strong></th>
      <td>gets the day of the month</td>
    </tr>
    <tr>
      <th scope="row"><strong>getHours()</strong></th>
      <td>gets the hour</td>
    </tr>
    <tr>
      <th scope="row"><strong>getMinutes()</strong></th>
      <td>gets the minutes</td>
    </tr>
    <tr>
      <th scope="row"><strong>getSeconds()</strong></th>
      <td>gets the seconds</td>
    </tr>
    <tr>
      <th scope="row"><strong>getMilliseconds()</strong></th>
      <td>gets the milliseconds</td>
    </tr>
  </tbody>
</Table>

<p><strong>For example:</strong></p>

<Card className="text-primary w-50" style={{ backgroundColor: "#EEEEEE", textAlign: "left" }}>
  <strong>
    <p>var d = new Date();</p>
    <p>var hours = d.<strong>getHours()</strong>;</p>
    <p>//hours is equal to the current hour</p>
  </strong>
</Card>

<p><br/></p>
<p>Let&apos;s create a program that prints the current time to the browser once every second.</p>

<Card className="text-primary w-50" style={{ backgroundColor: "#EEEEEE", textAlign: "left" }}>
  <strong>
    <p>function printTime() &#123;</p>
    <p>var d = new Date();</p>
    <p>var hours = d.<strong>getHours()</strong>();</p>
    <p>var mins = d.<strong>getMinutes()</strong>;</p>
    <p>var secs = d.<strong>getSeconds()</strong>;</p>
    <p>document.body.innerHTML = hours+&quot;:&quot;+mins+&quot;:&quot;+secs;</p>
    <p>&#125;</p>
    <p>setInterval(printTime, 1000);</p>
  </strong>
</Card>

<p><br/></p>
<p>We declared a function <strong>printTime()</strong>, which gets the current time from the date <span className="text-info"><strong>object</strong></span>, and prints it to the screen.</p>
<p>We then called the function once every second, using the <span className="text-info"><strong>setInterval method</strong></span>.</p>
<p>The <strong>innerHTML</strong> property sets or returns the HTML content of an element.</p>
<p>In our case, we are changing the HTML content of our document&apos;s body. This overwrites the content every second, instead of printing it repeatedly to the screen.</p>
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