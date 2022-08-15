import React from "react";
import "../assets/css/courses.css";
import { Button, Card, CardBody, Row, Col, Progress } from "reactstrap";
import AOS from "aos";
import { Link } from "react-router-dom";

function Coursecard(props) {
  // AOS.init({
  //   duration: 600,
  // });
  return (
    <>
      <Card
        className="card-profile shadow course-card"
      >
        <Row className="justify-content-center">
          <Col lg="3">
            <div className="card-profile-image mb-5">
              <a href="#pablo" onClick={(e) => e.preventDefault()}>
                <img
                  alt="..."
                  className="imgsize"
                  src={require("assets/img/courses/1.png")}
                />
              </a>
            </div>
          </Col>
        </Row>
        <CardBody className="pt-0 mt-5 p-4">
          <div className="text-center">
            <h2>{props.data.CourseNo}</h2>
            <h4 className="mt-2">{props.data.CourseName}</h4>
            {!props.progress && <hr />}
            {props.progress && (
              <div>
                <div className="text-center">{props.data.progress}%</div>
                <Progress value={props.data.progress} />
              </div>
            )}
            {!props.user && <p className="mt-3">{props.data.CourseDetail}</p>}
            <Button
              color="default"
              className="raise"
              href="#pablo"
              onClick={(e) => e.preventDefault()}
            >
          {/* Redirects to particular course */}
            {props.classroom &&
              <Link to={props.data.a} className="text-white">View Course</Link>
            }
          {/* Redirects to particular course */}
            {!props.classroom && props.user && (
              <Link to="/dashboard/pcourse" className="text-white">
                View Course
              </Link>
            )}
          {/* Redirects nowhere */}
            {!props.classroom && !props.user && <span>View Course</span>}
            </Button>
          </div>
          { !props.user && <div className="ribbon">TRENDING</div>}
        </CardBody>
      </Card>
    </>
  );
}

export default Coursecard;
