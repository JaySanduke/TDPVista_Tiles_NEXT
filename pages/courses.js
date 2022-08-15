import React from "react";
import "../assets/css/courses.css";
import { Container, Row, Col, Button } from "reactstrap";

import onlinecourses from "../assets/img/onlinecourses.png";

// core components
import Coursecard from "components/Coursecard";
import Searchbar from "components/Searchbar";
import AuthNavbar from "components/Navbars/AuthNavbar.js";
import AuthFooter from "components/Footers/AuthFooter.js";

class Courses extends React.Component {
  constructor() {
    super();
    this.state = {
      data: [
        {
          CourseKey: "1",
          CourseNo: "Course-1",
          CourseName: "lorem ipsum lorem lorem lorem ",
          CourseDetail:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus reiciendis quam illum non architecto? Repellat.",
        },
        {
          CourseKey: "2",
          CourseNo: "Course-2",
          CourseName: "lorem ipsum lorem lorem lorem ",
          CourseDetail:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus reiciendis quam illum non architecto? Repellat.",
        },
        {
          CourseKey: "3",
          CourseNo: "Course-3",
          CourseName: "lorem ipsum lorem lorem lorem ",
          CourseDetail:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus reiciendis quam illum non architecto? Repellat.",
        },
        {
          CourseKey: "4",
          CourseNo: "Course-4",
          CourseName: "lorem ipsum lorem lorem lorem ",
          CourseDetail:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus reiciendis quam illum non architecto? Repellat.",
        },
        {
          CourseKey: "5",
          CourseNo: "Course-5",
          CourseName: "lorem ipsum lorem lorem lorem ",
          CourseDetail:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus reiciendis quam illum non architecto? Repellat.",
        },
        {
          CourseKey: "6",
          CourseNo: "Course-6",
          CourseName: "lorem ipsum lorem lorem lorem ",
          CourseDetail:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus reiciendis quam illum non architecto? Repellat.",
        },
        {
          CourseKey: "7",
          CourseNo: "Course-7",
          CourseName: "lorem ipsum lorem lorem lorem ",
          CourseDetail:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus reiciendis quam illum non architecto? Repellat.",
        },
        {
          CourseKey: "8",
          CourseNo: "Course-8",
          CourseName: "lorem ipsum lorem lorem lorem ",
          CourseDetail:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus reiciendis quam illum non architecto? Repellat.",
        },
        {
          CourseKey: "9",
          CourseNo: "Course-9",
          CourseName: "lorem ipsum lorem lorem lorem ",
          CourseDetail:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus reiciendis quam illum non architecto? Repellat.",
        },
        {
          CourseKey: "10",
          CourseNo: "Course-10",
          CourseName: "lorem ipsum lorem lorem lorem ",
          CourseDetail:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus reiciendis quam illum non architecto? Repellat.",
        },
        {
          CourseKey: "11",
          CourseNo: "Course-11",
          CourseName: "lorem ipsum lorem lorem lorem ",
          CourseDetail:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus reiciendis quam illum non architecto? Repellat.",
        },
        {
          CourseKey: "12",
          CourseNo: "Course-12",
          CourseName: "lorem ipsum lorem lorem lorem ",
          CourseDetail:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus reiciendis quam illum non architecto? Repellat.",
        },
      ],
    };
  }
  render() {
    var x = this.state.data;

    return (
      <>
        <div className="course-landing">
          <AuthNavbar />
          <div className="mnt-land-div">
            <Row className="mnt-land-row">
              <Col md="6" className="mnt-land-col">
                <img src={onlinecourses} width="100%" alt="..." />
              </Col>
              <Col md="6" className="mnt-land-col">
                <div className="mnt-land-col-div-2">
                  <div>
                    <div className="hd-title font-6 mt-3 text-white text-left">
                      Come Mentor With Us
                    </div>
                    <p style={{ color: "#5e72e4" }}>"Mentoring That Matters"</p>
                    <p className="mt-3 text-white">
                      Productivity strikes when we all come together to bring up
                      the beginning of the practical and experimental era.
                    </p>
                    <p>
                      <a href="/">
                        <strong>Know Your Perks </strong>
                      </a>
                    </p>
                    <p className="text-white">Start Your Journy Today</p>
                    <Button
                      className="raise  mt-2"
                      color="info"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <span className="btn-inner--text">Join Now</span>
                    </Button>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
          <div className="mtn-land-bh">
            <div className="">
              <p className="hd-title font-6 text-white">CORE GLIMPLSE</p>
              <p className="hd-text text-white">Just A Glance</p>
            </div>
          </div>
        </div>
        <Searchbar />
        <Container fluid>
          <Row>
            {x.map((item) => {
              return (
                <Col className="mt-5 mb-3" xl="4" lg="4" md="6" sm="12">
                  <Coursecard data={item} />
                </Col>
              );
            })}
          </Row>
        </Container>
        <AuthFooter />
      </>
    );
  }
}

export default Courses;
