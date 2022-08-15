import React from "react";
// reactstrap components
import { Container, Row, Col, Button } from "reactstrap";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";

import DocumentMeta from "react-document-meta";
import logo from "assets/img/logo.png";
import "assets/css/about.css";
import "aos/dist/aos.css";
import AuthNavbar from "components/Navbars/AuthNavbar.js";
import AuthFooter from "components/Footers/AuthFooter.js";
import AOS from "aos";
import Lottie from "react-lottie";
import working from "../assets/lottie/working";
import Learn from "../assets/lottie/Learn.json";
import Mentor from "../assets/lottie/mentor_student.json";
import div11 from "../assets/img/div1/1.png";

const style = {
  componentName: {},
  col: {},
  countup: {},
};

class Home extends React.Component {
  constructor() {
    super();
    AOS.init({});
  }
  state = {
    didViewCountUp: false,
  };

  componentDidMount() {
    //document.body.classList.add("bg-default");
  }
  componentWillUnmount() {
    //document.body.classList.remove("bg-default");
  }

  onVisibilityChange = (isVisible) => {
    if (isVisible) {
      this.setState({ didViewCountUp: true });
    }
  };

  render() {
    const Learn1 = {
      loop: true,
      autoplay: true,
      animationData: Learn,
      rendererSettings: {
        preserveAspectRatio: "xMidYMid slice",
      },
    };
    const working1 = {
      loop: true,
      autoplay: true,
      animationData: working,
      rendererSettings: {
        preserveAspectRatio: "xMidYMid slice",
      },
    };
    const Mentor1 = {
      loop: true,
      autoplay: true,
      animationData: Mentor,
      rendererSettings: {
        preserveAspectRatio: "xMidYMid slice",
      },
    };
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
    return (
      <>
        <DocumentMeta {...meta} />
        <div className="main-content">
          <AuthNavbar />
          <div className="abt-landing">
            <div className="landing-5">
              <Container>
                <Row className="">
                  <Col md="6">
                    <div className="d-flex ">
                      <div className="">
                        <p className="abt-land-text hd-title font-6 text-left">
                          ABOUT
                        </p>
                        <img src={logo} className="abt-land-logo" alt="..." />
                      </div>
                    </div>
                  </Col>
                  <Col></Col>
                </Row>
              </Container>
            </div>
          </div>
        </div>
        <div className="abt-sect-1 align-items-center">
          <Row>
            <Col sm="4">
              <div className="abt-card-div-1 mb-2">
                <div className="abt-card-1">
                  <div>
                    <img src={div11} width="80%" alt="..." />
                  </div>
                  <div>
                    <h2>
                      <strong>Be A Learner</strong>
                    </h2>
                  </div>
                </div>
              </div>
            </Col>
            <Col sm="4">
              <div className="abt-card-div-1 mb-2">
                <div className="abt-card-1">
                  <div>
                    <img src={div11} width="80%" alt="..." />
                  </div>
                  <div>
                    <h2>
                      <strong>Be A Mentor</strong>
                    </h2>
                  </div>
                </div>
              </div>
            </Col>
            <Col sm="4">
              <div className="abt-card-div-1 mb-2">
                <div className="abt-card-1">
                  <div>
                    <img src={div11} width="80%" alt="..." />
                  </div>
                  <div>
                    <h2>
                      <strong>Be An Intern</strong>
                    </h2>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </div>

        <Container>
          <div className="py-4">
            <div className="">
              <div className="hd-title font-6">Who We Are</div>
              <p className="hd-text">About</p>
            </div>
            <Row className="text-dark">
              <Col sm="6">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident. Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit, sed do eiusmod tempor incididunt
                  ut labore et dolore magna aliqua.
                </p>
              </Col>
              <Col sm="6">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident. Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit, sed do eiusmod tempor incididunt
                  ut labore et dolore magna aliqua.
                </p>
              </Col>
            </Row>
          </div>
        </Container>
        <Container>
          <div className="text-center">
            <h1>Our Reach</h1>
            <p>
              Tiles is a marketplace for teaching and learning, connecting
              millions of students to the skills they need to succeed. Tiles as
              of June 2021:
            </p>
          </div>
          <section className="counts section-bg">
            <Row>
              <Col
                lg="3"
                md="6"
                sm="6"
                className="text-center"
                data-aos="fade-up"
              >
                <div className="count-box">
                  <i
                    className="icofont-simple-smile"
                    style={{ color: "#20b38e" }}
                  />
                  <VisibilitySensor
                    onChange={this.onVisibilityChange}
                    offset={{
                      top: 10,
                    }}
                    delayedCall
                  >
                    <CountUp
                      className={style.countup}
                      end={this.state.didViewCountUp ? 232 : 0}
                      duration={3}
                    />
                  </VisibilitySensor>
                  <p>Students Registered</p>
                </div>
              </Col>
              <Col
                lg="3"
                md="6"
                sm="6"
                className="text-center"
                data-aos="fade-up"
              >
                <div className="count-box">
                  <i
                    className="icofont-document-folder"
                    style={{ color: "#c042ff" }}
                  />
                  <VisibilitySensor
                    onChange={this.onVisibilityChange}
                    offset={{
                      top: 10,
                    }}
                    delayedCall
                  >
                    <CountUp
                      className={style.countup}
                      end={this.state.didViewCountUp ? 521 : 0}
                      duration={3}
                    />
                  </VisibilitySensor>
                  <p>Courses</p>
                </div>
              </Col>
              <Col
                lg="3"
                md="6"
                sm="6"
                className="text-center"
                data-aos="fade-up"
              >
                <div className="count-box">
                  <i
                    className="icofont-live-support"
                    style={{ color: "#46d1ff" }}
                  />
                  <VisibilitySensor
                    onChange={this.onVisibilityChange}
                    offset={{
                      top: 10,
                    }}
                    delayedCall
                  >
                    <CountUp
                      className={style.countup}
                      end={this.state.didViewCountUp ? 100 : 0}
                      duration={3}
                    />
                  </VisibilitySensor>
                  <p>Registered Companies</p>
                </div>
              </Col>
              <Col
                lg="3"
                md="6"
                sm="6"
                className="text-center"
                data-aos="fade-up"
              >
                <div className="count-box">
                  <i
                    className="icofont-users-alt-5"
                    style={{ color: "#ffb459" }}
                  />
                  <VisibilitySensor
                    onChange={this.onVisibilityChange}
                    offset={{
                      top: 10,
                    }}
                    delayedCall
                  >
                    <CountUp
                      className={style.countup}
                      end={this.state.didViewCountUp ? 150 : 0}
                      duration={3}
                    />
                  </VisibilitySensor>
                  <p>Intership Provided</p>
                </div>
              </Col>
            </Row>
          </section>
        </Container>

        <div className="pt-5 mt-5">
          <Container>
            <h3 className="text-center">
              Featuring the most trending courses which are not just trending
              the market and even rated to be the most productive buckets.
            </h3>
            <h1 className="text-center mb-5 pb-2">
              Why are you still letting your productive heads wait?
            </h1>
          </Container>
        </div>
        <Container className="mb-5">
          <Row className="mb-0">
            <Col md="12" xl="6" data-aos="fade-right">
              <div className="">
                <div className="hd-title font-6 text-left">Learn</div>
                <p className="hd-text text-left">Learn New Skills</p>
              </div>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. irure
              dolor in reprehenderit in voluptate velit esse cillum dolore eu
              fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
              proident. Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              <br />
              <Button
                className="mt-3 btn-new"
                href="company-registration"
                onClick={(e) => e.preventDefault()}
                style={{ background: "#180034" }}
              >
                <span className="btn-inner--text">Start Learning !!</span>
              </Button>
            </Col>
            <Col md="12" xl="6" data-aos="fade-left">
              <Lottie options={Learn1} width="100%" height="100%" />
            </Col>
          </Row>

          <Row id="mentor">
            <Col md="12" xl="6" data-aos="fade-right">
              <Lottie options={Mentor1} width="100%" height="100%" />
            </Col>
            <Col md="12" xl="6" data-aos="fade-left">
              <div className="">
                <div className="hd-title font-6 text-left pt-0">Mentor</div>
                <p className="hd-text text-left">Learn New Skills</p>
              </div>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. irure
              dolor in reprehenderit in voluptate velit esse cillum dolore eu
              fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
              proident. Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              <br />{" "}
              <Button
                className="mt-3 btn-new"
                href="company-registration"
                onClick={(e) => e.preventDefault()}
                style={{ background: "#180034" }}
              >
                <span className="btn-inner--text">Start Mentoring !!</span>
              </Button>
            </Col>
          </Row>
          <Row>
            <Col md="12" xl="6" data-aos="fade-right">
              <div className="">
                <div className="hd-title font-6 text-left">Work</div>
                <p className="hd-text text-left">Learn New Skills</p>
              </div>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. irure
              dolor in reprehenderit in voluptate velit esse cillum dolore eu
              fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
              proident. Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              <br />
              <Button
                className="mt-3 btn-new"
                href="company-registration"
                onClick={(e) => e.preventDefault()}
                style={{ background: "#180034" }}
              >
                <span className="btn-inner--text">Start Hiring !!</span>
              </Button>
            </Col>
            <Col md="12" xl="6" data-aos="fade-left">
              <Lottie options={working1} width="110%" />
            </Col>
          </Row>
        </Container>
        <AuthFooter />
      </>
    );
  }
}

export default Home;
