import React from "react";
import "aos/dist/aos.css";
import "../assets/css/demo.css";
import AOS from "aos";

import AuthNavbar from "components/Navbars/AuthNavbar.js";
import AuthFooter from "components/Footers/AuthFooter.js";
import Lottie from "react-lottie";
import clk2 from "../assets/lottie/clock-white";
import demo from "../assets/lottie/demo";
import { Container, Row, Button, Col } from "reactstrap";

import div11 from "../assets/img/div1/1.png";
import div12 from "../assets/img/div1/2.png";
import div13 from "../assets/img/div1/3.png";
import div14 from "../assets/img/div1/4.png";
import div15 from "../assets/img/div1/5.png";
import div16 from "../assets/img/div1/6.png";
import div17 from "../assets/img/div1/7.png";
import div18 from "../assets/img/div1/8.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserTie,
  faRobot,
  faBook,
  faUsers,
  faSitemap,
} from "@fortawesome/free-solid-svg-icons";

class Internship extends React.Component {
  constructor() {
    super();
    AOS.init({
      duration: 500,
    });
  }
  render() {
    const clock2 = {
      loop: true,
      autoplay: true,
      animationData: clk2,
      rendererSettings: {
        preserveAspectRatio: "xMidYMid slice",
      },
    };
    const demodiv = {
      loop: true,
      autoplay: true,
      animationData: demo,
      rendererSettings: {
        preserveAspectRatio: "xMidYMid slice",
      },
    };
    return (
      <>
        <div className="demo-top">
          <AuthNavbar />
          <div className="demo-top-div">
            <Row className="demo-land-row m-0 p-0">
              <Col xl="6" className="demo-land-col">
                <div className="demo-land-title font-6 text-white text-left">
                  LETS CROSS-CHECK
                  <br />
                  THIS PLATFORM !!
                </div>
              </Col>
              <Col xl="6" className="demo-land-col">
                <div className="px-4 px-md-5 pt-4">
                  <p className="demo-land-title-2 font-5">
                    <span className="demo-land-span">CLEAR YOUR QUERIES</span>
                  </p>
                  <p className="mt-3 text-dark font-8">
                    <span className="demo-land-span">
                      We are here to help you out for all your queries
                      everytime.
                    </span>
                  </p>
                  <Button
                    className="raise mt-2 btn-new-2"
                    color="#9F1AAB"
                    href="company-registration"
                    onClick={(e) => e.preventDefault()}
                  >
                    <span className="btn-inner--text">Take Tour !!</span>
                  </Button>
                </div>
              </Col>
            </Row>
          </div>
        </div>
        <div className="demo-sect-2">
          <Container>
            <div className="">
              <p className="hd-title font-6">QUICK MENTIONS</p>
              <p className="hd-text">Available Key Features Tour</p>
            </div>
            <div className="mt-5 pt-5">
              <Row className="justify-content-center">
                <Col md="2">
                  <div className="pentagon-div">
                    <div className="pentagon-holder">
                      <div id="pentagon"></div>
                    </div>
                    <div className="pentagon-icon-holder">
                      <FontAwesomeIcon icon={faSitemap} size="2x" />
                    </div>
                  </div>
                  <p
                    className="font-6 text-center"
                    style={{ color: "#9F1AAB" }}
                  >
                    Program Customizer
                  </p>
                </Col>
                <Col md="2">
                  <div className="pentagon-div">
                    <div className="pentagon-holder">
                      <div id="pentagon"></div>
                    </div>
                    <div className="pentagon-icon-holder">
                      <FontAwesomeIcon icon={faUserTie} size="2x" />
                    </div>
                  </div>
                  <p
                    className="font-6 text-center"
                    style={{ color: "#9F1AAB" }}
                  >
                    Supportive Mentors
                  </p>
                </Col>
                <Col md="2">
                  <div className="pentagon-div">
                    <div className="pentagon-holder">
                      <div id="pentagon"></div>
                    </div>
                    <div className="pentagon-icon-holder">
                      <FontAwesomeIcon icon={faRobot} size="2x" />
                    </div>
                  </div>
                  <p
                    className="font-6 text-center"
                    style={{ color: "#9F1AAB" }}
                  >
                    Integrated Bots
                  </p>
                </Col>
                <Col md="2">
                  <div className="pentagon-div">
                    <div className="pentagon-holder">
                      <div id="pentagon"></div>
                    </div>
                    <div className="pentagon-icon-holder">
                      <FontAwesomeIcon icon={faBook} size="2x" />
                    </div>
                  </div>
                  <p
                    className="font-6 text-center"
                    style={{ color: "#9F1AAB" }}
                  >
                    Precise Documents
                  </p>
                </Col>
                <Col md="2">
                  <div className="pentagon-div">
                    <div className="pentagon-holder">
                      <div id="pentagon"></div>
                    </div>
                    <div className="pentagon-icon-holder">
                      <FontAwesomeIcon icon={faUsers} size="2x" />
                    </div>
                  </div>
                  <p
                    className="font-6 text-center"
                    style={{ color: "#9F1AAB" }}
                  >
                    Interactive Sessions
                  </p>
                </Col>
              </Row>
            </div>
            <Row className="mt-3">
              <Col md="6">
                <p className="font-9 pt-5">
                  So have you still not enrolled yourself for any course? Or you
                  are still searching, investing your time to know how things
                  would work out after you have done so? Or is there any other
                  issue regarding learning,you will get it all solved here by
                  getting into the demo. Just click on the below button to get
                  to know everything NOW!
                </p>
                <Button
                  className="raise mt-2 btn-new-2"
                  color="#9F1AAB"
                  href="company-registration"
                  onClick={(e) => e.preventDefault()}
                >
                  <span className="btn-inner--text">Take Tour !!</span>
                </Button>
              </Col>
              <Col md="6">
                <Lottie options={demodiv} width="100%" />
              </Col>
            </Row>
          </Container>
        </div>
        <div>
          <Container>
            <div className="text-left py-4">
              <p className="hd-title font-6 text-left">Platform Features</p>
              <p className="hd-text text-left">Factors You Must Know</p>
            </div>
            <Row>
              <Col xs="6" md="4" xl="3">
                <div className="crd-2">
                  <div className="text-center">
                    <img src={div11} alt="..." width="40%" />
                  </div>
                  <h4 className="text-center brdr-btm">Academic Mentoring</h4>
                  <p className="text-left txs-1">
                    With the guidance of mentors and experts, learning becomes
                    easier and fun to explore. Mastering a skill then becomes
                    your art.
                  </p>
                </div>
              </Col>
              <Col xs="6" md="4" xl="3">
                <div className="crd-2">
                  <div className="text-center">
                    <img src={div16} alt="..." width="40%" />
                  </div>
                  <h4 className="text-center brdr-btm">Progress Analytics</h4>
                  <p className="text-left txs-1">
                    A quick check on how things are going will push you to
                    improve yourself thus leading the way to perfection with no
                    downfalls.
                  </p>
                </div>
              </Col>
              <Col xs="6" md="4" xl="3">
                <div className="crd-2">
                  <div className="text-center">
                    <img src={div18} alt="..." width="40%" />
                  </div>
                  <h4 className="text-center brdr-btm">Maintained Timeline</h4>
                  <p className="text-left txs-1">
                    A perfect sequential learning in a timeline structure that
                    will help in grasping topics in a very convenient manner.
                  </p>
                </div>
              </Col>
              <Col xs="6" md="4" xl="3">
                <div className="crd-2">
                  <div className="text-center">
                    <img src={div14} alt="..." width="40%" />
                  </div>
                  <h4 className="text-center brdr-btm">Quick Documentation</h4>
                  <p className="text-left txs-1">
                    With short accurate and less time consuming documents we
                    would help you to deepen your knowledge about the course.
                  </p>
                </div>
              </Col>
              <Col xs="6" md="4" xl="3">
                <div className="crd-2">
                  <div className="text-center">
                    <img src={div15} alt="..." width="40%" />
                  </div>
                  <h4 className="text-center brdr-btm">Interactive Bots</h4>
                  <p className="text-left txs-1">
                    Have you ever thought how amazing learning would become if a
                    bot is there to interact and solve your doubt anytime you
                    need? Well we had it covered for you.
                  </p>
                </div>
              </Col>
              <Col xs="6" md="4" xl="3">
                <div className="crd-2">
                  <div className="text-center">
                    <img src={div12} alt="..." width="40%" />
                  </div>
                  <h4 className="text-center brdr-btm">Virtual Classrooms</h4>
                  <p className="text-left txs-1">
                    With the availability of virtual classrooms and interesting
                    live sessions you can learn anything anytime at your own
                    (ease) pace of speed and time.
                  </p>
                </div>
              </Col>
              <Col xs="6" md="4" xl="3">
                <div className="crd-2">
                  <div className="text-center">
                    <img src={div17} alt="..." width="40%" />
                  </div>
                  <h4 className="text-center brdr-btm">Trending Courses</h4>
                  <p className="text-left txs-1">
                    In this fast running world living in trends can only make
                    you survive. So by letting you know about the Trending
                    courses we make you part of a trend.
                  </p>
                </div>
              </Col>
              <Col xs="6" md="4" xl="3">
                <div className="crd-2">
                  <div className="text-center">
                    <img src={div13} alt="..." width="40%" />
                  </div>
                  <h4 className="text-center brdr-btm">Premium Lectures</h4>
                  <p className="text-left txs-1">
                    With precise and innovative learning, lecture understanding
                    of topics becomes smooth and convenient thus helping you
                    clear the basics.
                  </p>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        <div className="pt-5 mt-5">
          <Container>
            <Row>
              <Col md="6">
                <h3 className="text-center">
                  Featuring the most trending courses which are not just
                  trending the market and even rated to be the most productive
                  buckets.
                </h3>
                <h1 className="text-center mb-5 pb-2">
                  Why are you still letting your productive heads wait?
                </h1>
              </Col>
              <Col md="6">
                <div className="py-4 d-flex justify-content-center">
                  <div className="bottom-card">
                    <div className="bc1"></div>
                    <div className="bc2"></div>
                    <div className="bc3"></div>
                    <div className="bc4">
                      <div>
                        <h1
                          style={{ color: "#240048", fontSize: 32 }}
                          className="font-6 text-center"
                        >
                          Setup Your
                          <br />
                          Productivity Bucket
                        </h1>
                        <div className="d-flex justify-content-center">
                          <div className="bc-btn pulse-blue">
                            <div className="d-flex">
                              <h1
                                className="font-7 text-right text-white"
                                style={{ fontSize: 28 }}
                              >
                                ENROLL
                              </h1>
                              <Row
                                className="justify-content-center"
                                style={{ marginLeft: -30, marginRight: -30 }}
                              >
                                <Col xs="2" className="p-0">
                                  <h1
                                    className="font-7 text-right p-0 text-white"
                                    style={{ fontSize: 28 }}
                                  >
                                    N
                                  </h1>
                                </Col>
                                <Col
                                  xs="2"
                                  className="p-0"
                                  style={{ marginTop: -10 }}
                                >
                                  <Lottie options={clock2} width="100%" />
                                </Col>
                                <Col xs="2" className="p-0">
                                  <h1
                                    className="font-7 text-left p-0 text-white"
                                    style={{ fontSize: 28 }}
                                  >
                                    W
                                  </h1>
                                </Col>
                              </Row>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        <AuthFooter />
      </>
    );
  }
}

export default Internship;
