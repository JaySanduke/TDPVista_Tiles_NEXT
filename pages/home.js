import React from "react";
import { Container, Row, Col } from "reactstrap";
import training from "assets/img/home/training.svg";
import internship from "assets/img/home/internship.svg";
import learning from "assets/img/home/learning.svg";
import educationi from "assets/img/home/education.svg";
import DocumentMeta from "react-document-meta";
import "assets/css/style.css";
import "aos/dist/aos.css";
import AuthNavbar from "components/Navbars/AuthNavbar.js";
import AuthFooter from "components/Footers/AuthFooter.js";
import AOS from "aos";
import Lottie from "react-lottie";
import rocket from "../assets/lottie/rocket";
import clk from "../assets/lottie/clock-blue";
import clk2 from "../assets/lottie/clock-white";
import Typed from "react-typed";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloudscale } from "@fortawesome/free-brands-svg-icons";
import {
  faEnvelopeOpenText,
  faHeadset,
  faRobot,
  faCubes,
  faCogs,
} from "@fortawesome/free-solid-svg-icons";
import div11 from "../assets/img/div1/1.png";
import div12 from "../assets/img/div1/2.png";
import div13 from "../assets/img/div1/3.png";
import div14 from "../assets/img/div1/4.png";
import div15 from "../assets/img/div1/5.png";
import div16 from "../assets/img/div1/6.png";
import div17 from "../assets/img/div1/7.png";
import div18 from "../assets/img/div1/8.png";
import div2t from "../assets/img/div2/t.png";
import div2i from "../assets/img/div2/i.png";
import div2l from "../assets/img/div2/l.png";
import div2e from "../assets/img/div2/e.png";
import div2s from "../assets/img/div2/e.png";

class Home extends React.Component {
  constructor() {
    super();
    // AOS.init({});
  }
  onentDidMount() {
  }
  componentWillUnmount() {
  }
  render() {
    const meta = {
      title: "TDPVista TILES",
      description: "TDPVista",
      canonical: "https://tiles.tdpvista.in",
      meta: {
        charset: "utf-8",
        name: {
          keywords:
            "tdpvista,support,contact,form,registration,learning,education,call,helpline,helpdesk,query",
        },
      },
    };
    const defaultOptions = {
      loop: true,
      autoplay: true,
      animationData: rocket,
      rendererSettings: {
        preserveAspectRatio: "xMidYMid slice",
      },
    };
    const clock = {
      loop: true,
      autoplay: true,
      animationData: clk,
      rendererSettings: {
        preserveAspectRatio: "xMidYMid slice",
      },
    };
    const clock2 = {
      loop: true,
      autoplay: true,
      animationData: clk2,
      rendererSettings: {
        preserveAspectRatio: "xMidYMid slice",
      },
    };
    return (
      <>
        <DocumentMeta {...meta} />
        <div className="main-content">
          <AuthNavbar />
          <div className="landing">
            <div className="landing-2">
              <div className="stars"></div>
              <div className="twinkling"></div>
            </div>
            <div className="landing-3"></div>
            <div className="landing-4"></div>
            <div className="landing-5">
              <Container>
                <Row>
                  <Col md="7">
                    <div className="text-left" style={{ width: "100%" }}>
                      <p className="hd-title font-6 text-white text-left">
                        <Typed
                          strings={["Learning", "Education", "Practice"]}
                          typeSpeed={100}
                          backSpeed={60}
                          loop
                        />
                        <br />
                        Never Exhausts The Mind
                      </p>
                      <h3 className="text-left" style={{ color: "#fff" }}>
                        Master Skills & Learning With The Greatest Mentorship
                        Platform
                      </h3>
                    </div>
                  </Col>
                  <Col md="5">
                    <div
                      className="d-flex justify-content-center align-items-center"
                      style={{ height: "100%" }}
                    >
                      <div className="land-card">
                        <div className="lc1"></div>
                        <div className="lc2"></div>
                        <div className="lc3">
                          <div className="land-btn pulse-white">
                            <div className="d-flex">
                              <h1
                                className="font-7 text-right"
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
                                    className="font-7 text-right p-0"
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
                                  <Lottie options={clock} width="100%" />
                                </Col>
                                <Col xs="2" className="p-0">
                                  <h1
                                    className="font-7 text-left p-0"
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
                  </Col>
                </Row>
              </Container>
            </div>
          </div>
          <div className="sect-2">
            <Row>
              <Col md="12">
                <div className="font-head-1">
                  <span className="font-1">TDPVista</span>{" "}
                  <span className="font-2">TILES</span>
                </div>
              </Col>
            </Row>
            <Container>
              <Row className="pb-4">
                <Col md="5" data-aos={"fade-right"}>
                  <Lottie options={defaultOptions} width="100%" />
                </Col>
                <Col
                  md="6"
                  className=" d-flex justify-content-center"
                  data-aos={"fade-down"}
                >
                  <div className="mt-5 p-5">
                    <div className="d-flex justify-content-center p-2">
                      <p className="mt-md-2 p-md-3 text-left text-white">
                        <strong>
                          Tiles is an educational mentorship platform that
                          brings all round development of an individual in the
                          field of their choice through customized facilities
                          and packages. It provides an extensive library of
                          various courses with an opportunity to get an
                          internship in some of the prestigious companies. As we
                          work everyday to apply and share our ways that benefit
                          people, community and our planet to build a better
                          tomorrow. We are working towards having an overall
                          positive impact on people while we continue to grow.
                        </strong>
                      </p>
                    </div>
                  </div>
                </Col>
              </Row>
            </Container>
            <Row className="tiles-cut">
              <Col md="4"></Col>
              <Col md="8">
                <Row className="justify-content-center">
                  <Col
                    xs="2"
                    style={{ background: "white" }}
                    className="mx-1 tiles-cut-bx"
                  >
                    <p className="text-center tiles-cut-clss">T</p>
                    <p
                      className="text-center p-0 m-0 d-none d-md-block"
                      style={{ color: "#230047" }}
                    >
                      Training
                    </p>
                  </Col>
                  <Col
                    xs="2"
                    style={{ background: "white" }}
                    className="mx-1 tiles-cut-bx"
                  >
                    <p className="text-center tiles-cut-clss">I</p>
                    <p
                      className="text-center p-0 m-0 d-none d-md-block"
                      style={{ color: "#230047" }}
                    >
                      Internship
                    </p>
                  </Col>
                  <Col
                    xs="2"
                    style={{ background: "white" }}
                    className="mx-1 tiles-cut-bx"
                  >
                    <p className="text-center tiles-cut-clss">L</p>
                    <p
                      className="text-center p-0 m-0 d-none d-md-block"
                      style={{ color: "#230047" }}
                    >
                      Learning
                    </p>
                  </Col>
                  <Col
                    xs="2"
                    style={{ background: "white" }}
                    className="mx-1 tiles-cut-bx"
                  >
                    <p className="text-center tiles-cut-clss">E</p>
                    <p
                      className="text-center p-0 m-0 d-none d-md-block"
                      style={{ color: "#230047" }}
                    >
                      Education
                    </p>
                  </Col>
                  <Col
                    xs="2"
                    style={{ background: "white" }}
                    className="mx-1 tiles-cut-bx"
                  >
                    <p className="text-center tiles-cut-clss">S</p>
                    <p
                      className="text-center p-0 m-0 d-none d-md-block"
                      style={{ color: "#230047" }}
                    >
                      Sessions
                    </p>
                  </Col>
                </Row>
              </Col>
            </Row>
          </div>
        </div>
        <div className="">
          <Container>
            <div className="text-center py-4">
              <p className="hd-title font-6">Key Features</p>
              <p className="hd-text">Factors You Must Know</p>
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
        <div className="">
          <Container>
            <div className="text-left py-4">
              <p className="hd-title-2 font-6">CORE GLIMPLSE</p>
              <p className="hd-text-2">Features Glance</p>
            </div>
            <Row>
              <Col md="6">
                <div className="crd-2">
                  <h2 className="text-left">
                    <img src={div2e} alt="..." width="20%" />
                    Education
                  </h2>
                  <p className="txs-1">
                    Education is your perseverance to learn,train and implement
                    your skills for better use. It's a way to make the world
                    around us evolve with time. In a way of earning
                    knowledge,require the right assistance to emerge and groom
                    yourself that would help you sharpen your skills and execute
                    them.
                  </p>
                </div>
              </Col>
              <Col md="6">
                <Row>
                  <Col xs="6">
                    <div className="crd-2">
                      <h2 className="text-left">
                        <img src={div2t} alt="..." width="20%" />
                        Training
                      </h2>
                      <p className="txs-1">
                        Regular practical practise letting you achieve
                        operational excellence with increasing productivity and
                        performance. Bridge the gap between knowledge and
                        action.
                      </p>
                    </div>
                  </Col>
                  <Col xs="6">
                    <div className="crd-2">
                      <h2 className="text-left">
                        <img src={div2l} alt="..." width="20%" />
                        Learning
                      </h2>
                      <p className="txs-1">
                        Engaging and enhanced learning with a virtual classroom.
                        It enables an innovative and differentiating teaching
                        and learning experience.
                      </p>
                    </div>
                  </Col>
                  <Col xs="6">
                    <div className="crd-2">
                      <h2 className="text-left">
                        <img src={div2i} alt="..." width="20%" />
                        Internship
                      </h2>
                      <p className="txs-1">
                        Gives you the opportunity to become experienced with a
                        different working environment to see what suits you.
                      </p>
                    </div>
                  </Col>
                  <Col xs="6">
                    <div className="crd-2">
                      <h2 className="text-left">
                        <img src={div2s} alt="..." width="20%" />
                        Sessions
                      </h2>
                      <p className="txs-1">
                        Scheduled sessions gives you an enhanced learning
                        environment which fosters creativity on different
                        levels. Enable learners to improve their experience
                        through mindful practise.
                      </p>
                    </div>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>
        </div>
        <Container>
          <div className="text-center py-4">
            <p className="hd-title font-6">WYMEN!</p>
            <p className="hd-text">Why You Must Enroll Now</p>
          </div>
          <Row>
            <Col
              md="6"
              className="justify-content-center d-inline-flex mt-4"
              data-aos={"fade-right"}
            >
              <div className="data-card-tiles">
                <div className="dc-image">
                  <img src={training} width="40%" alt="..." />
                </div>
                <div className="justify-content-center d-flex">
                  <div className="dc-title">SCHEDULE</div>
                </div>
                <div className="txs-1">
                  Time management is difficult in this world but don't worry we
                  have it all for you. You can learn whenever you want with no
                  time constraints by rescheduling your learning timings of
                  lectures. Time now is not a boundation.
                </div>
              </div>
            </Col>
            <Col
              md="6"
              className="justify-content-center d-inline-flex mt-4"
              data-aos={"fade-left"}
            >
              <div className="data-card-tiles">
                <div className="dc-image">
                  <img src={internship} width="40%" alt="..." />
                </div>
                <div className="justify-content-center d-flex">
                  <div className="dc-title">MENTORING</div>
                </div>
                <div className="txs-1">
                  How better it could be that you have a mentor to guide and an
                  interactive bot available 24/7 to chat with you? In this
                  technically advanced domain you get an opportunity to utilise
                  these for your use to make learning easier.
                </div>
              </div>
            </Col>
            <Col
              md="6"
              className="justify-content-center d-inline-flex mt-4"
              data-aos={"fade-right"}
            >
              <div className="data-card-tiles">
                <div className="dc-image">
                  <img src={learning} width="40%" alt="..." />
                </div>
                <div className="justify-content-center d-flex">
                  <div className="dc-title">QUALITY</div>
                </div>
                <div className="txs-1">
                  The services provided through the features would outdo all
                  your possible difficulties to pave you a smooth way for an
                  exciting and educational experience. Non-stop aid will make
                  things work in a fluent manner thus benefiting you in every
                  way.
                </div>
              </div>
            </Col>
            <Col
              md="6"
              className="justify-content-center d-inline-flex mt-4"
              data-aos={"fade-left"}
            >
              <div className="data-card-tiles">
                <div className="dc-image">
                  <img src={educationi} width="40%" alt="..." />
                </div>
                <div className="justify-content-center d-flex">
                  <div className="dc-title">QUANTITY</div>
                </div>
                <div className="txs-1">
                  Piles of content and lengthy lectures is what you are
                  searching for? No way right! We here provide an expurgate
                  materials with no redundant documents and lectures.The motive
                  is to offer you a short, precise and accurate version of
                  things for a gentle flow of understanding.
                </div>
              </div>
            </Col>
          </Row>
        </Container>
        <div className="mt-4" style={{ backgroundColor: "#fff" }}>
          <Container>
            <div className="text-left pb-4">
              <p className="hd-title-2 font-6">STILL LOOKING FOR REASON ?</p>
              <p className="hd-text-2">Lets Be More Specific</p>
            </div>
            <Row className="sect-3">
              <Col md="5">
                <div>
                  <div className="d-flex justify-content-end">
                    <div className="bullet-card-1">
                      <Row>
                        <Col xs="9">
                          <div className="text-center">
                            <h3 className="hrv-crd-text">Live Chat</h3>
                            <p className="text-center txs-1">
                              Understanding concept interactively
                            </p>
                          </div>
                        </Col>
                        <Col xs="3">
                          <div className="card-hexagon">
                            <span>
                              <FontAwesomeIcon
                                icon={faEnvelopeOpenText}
                                size="3x"
                              />
                            </span>
                          </div>
                        </Col>
                      </Row>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="d-flex justify-content-center">
                    <div className="bullet-card-1">
                      <Row>
                        <Col xs="9">
                          <div className="text-center">
                            <h3 className="hrv-crd-text">Quick Support</h3>
                            <p className="text-center txs-1">
                              Make your experience astonishing
                            </p>
                          </div>
                        </Col>
                        <Col xs="3">
                          <div className="card-hexagon">
                            <span>
                              <FontAwesomeIcon icon={faHeadset} size="3x" />
                            </span>
                          </div>
                        </Col>
                      </Row>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="d-flex justify-content-end">
                    <div className="bullet-card-1">
                      <Row>
                        <Col xs="9">
                          <div className="text-center">
                            <h3 className="hrv-crd-text">Integrated Bots</h3>
                            <p className="text-center txs-1">
                              Jaw you to the new tech world
                            </p>
                          </div>
                        </Col>
                        <Col xs="3">
                          <div className="card-hexagon">
                            <span>
                              <FontAwesomeIcon icon={faRobot} size="3x" />
                            </span>
                          </div>
                        </Col>
                      </Row>
                    </div>
                  </div>
                </div>
              </Col>
              <Col md="2"></Col>
              <Col md="5">
                <div>
                  <div className="d-flex justify-content-start">
                    <div className="bullet-card-1">
                      <Row>
                        <Col xs="3">
                          <div className="card-hexagon chr-shift">
                            <span>
                              <FontAwesomeIcon icon={faCubes} size="3x" />
                            </span>
                          </div>
                        </Col>
                        <Col xs="9">
                          <div className="text-center">
                            <h3 className="hrv-crd-text">Wide Variety</h3>
                            <p className="text-center txs-1">
                              Travel to different reality
                            </p>
                          </div>
                        </Col>
                      </Row>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="d-flex justify-content-center">
                    <div className="bullet-card-1">
                      <Row>
                        <Col xs="3">
                          <div className="card-hexagon chr-shift">
                            <span>
                              <FontAwesomeIcon icon={faCloudscale} size="3x" />
                            </span>
                          </div>
                        </Col>
                        <Col xs="9">
                          <div className="text-center">
                            <h3 className="hrv-crd-text">Customizer</h3>
                            <p className="text-center txs-1">
                              Choice you make, plan we execute
                            </p>
                          </div>
                        </Col>
                      </Row>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="d-flex justify-content-start">
                    <div className="bullet-card-1">
                      <Row>
                        <Col xs="3">
                          <div className="card-hexagon chr-shift">
                            <span>
                              <FontAwesomeIcon icon={faCogs} size="3x" />
                            </span>
                          </div>
                        </Col>
                        <Col xs="9">
                          <div className="text-center">
                            <h3 className="hrv-crd-text">Practical Learning</h3>
                            <p className="text-center txs-1">
                              Constructive idea implementation
                            </p>
                          </div>
                        </Col>
                      </Row>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        <div className="pt-5 mt-5">
          <Container>
            <h3 className="text-center">
              Featuring the most trending courses which are not just trending
              the market and even rated to be the most productive buckets.
            </h3>
            <h1 className="text-center mb-5 pb-2">
              Why are you still letting your productive heads wait?
            </h1>
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
          </Container>
        </div>
        <AuthFooter />
      </>
    );
  }
}

export default Home;
