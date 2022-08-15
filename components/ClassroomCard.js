import React  from "react";
import "../assets/css/courses.css";
import { Button, Card, CardBody, Row, Col} from "reactstrap";
import AOS from "aos";
import { Link } from "react-router-dom";

function Classroomcard(props) {
  AOS.init({
    duration: 600,
  });
  
  return (
    <>
      <Card
        className="card-profile shadow course-card"
      >
        <Row className="justify-content-center">
          <Col lg="3">
            <div className="card-profile-image mb-3">
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
            <h2>{props.data.data.courseName}</h2>
            { !props.admin &&
            <h4 className="mt-2">Joined: {props.data.data.date_joined}</h4>} 
            {props.admin &&
            <h4 className="mt-2"> {props.data.data.c_id} </h4>}
            <hr />
            <Button
              color="default"
              className="raise"
              href="#pablo"
              onClick={(e) => e.preventDefault()}
            >
              <Link to={props.admin? '/admin/course' : '/dashboard/pcourse'} className="text-white">View Classroom</Link>
          </Button>
          </div>
        </CardBody>
      </Card>
    </>
  );
}

export default Classroomcard;
