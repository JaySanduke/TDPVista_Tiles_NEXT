import React, { useState } from "react";
import firebase from "../../config/firebase-tiles";
import ReactHtmlParser from "react-html-parser";
import { format } from 'date-fns';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
faSchool,
faUser,
faBookOpen,
  faClock,
  
  
} from "@fortawesome/free-solid-svg-icons";


// reactstrap components
import { Card, CardBody, CardTitle, Container, Row, Col } from "reactstrap";


function Header(props) {


 const [classdata, setclassdata] = useState(0);
const [student, setstudent] = useState(0)
  
 React.useEffect(() => {

  var ID = localStorage.getItem("id");

    firebase
      .database()
      .ref("Classroom/" + ID)
      .once("value")
      .then((snapshot) => {
        var ClassData = snapshot.val();
        console.log(ClassData)
        if (ClassData) {
          setclassdata(ClassData.data);
          console.log("classdata")
        }
      })
  }, []);

  
 
  return (
    
    <>
      <div className="header  pb-8 pt-5 pt-md-8" style={{backgroundColor:'#2F345F'}}>
        <Container fluid>
          <div className="header-body">
            {/* Card stats */}
            <Row>
              <Col lg="6" xl="3">
                <Card className="card-stats mb-4 mb-xl-0" style={{height:'110px'}}>
                  <CardBody>
                    <Row>
                      <div className="col">
                        <CardTitle
                          tag="h5"
                          className="text-uppercase text-muted mb-0"
                        >
                          Classroom
                        </CardTitle>
                        <span className="h2 font-weight-bold mb-0">{classdata.classroomName ? classdata.classroomName : ""}</span>
                      
                      </div>
                      <Col className="col-auto">
                        <div className="icon icon-shape bg-danger text-white rounded-circle shadow">
                         <FontAwesomeIcon icon={faSchool} style={{color:"#fff"}} />
                        </div>
                      </Col>
                    </Row>
                  
                  </CardBody>
                </Card>
              </Col>
              <Col lg="6" xl="3">
                <Card className="card-stats mb-4 mb-xl-0" style={{height:'110px'}}>
                  <CardBody>
                    <Row>
                      <div className="col">
                        <CardTitle
                          tag="h5"
                          className="text-uppercase text-muted mb-0"
                        >
                       Course
                        </CardTitle>
                        <span className="h2 font-weight-bold mb-0">
                         {classdata.courses ? classdata.courses[0].course_title : " "}
                        
                        </span>
                      </div>
                      <Col className="col-auto">
                        <div className="icon icon-shape bg-warning text-white rounded-circle shadow">
                          <FontAwesomeIcon icon={faBookOpen} style={{color:"#fff"}} />
                        </div>
                      </Col>
                    </Row>
                  
                  </CardBody>
                </Card>
              </Col>
              <Col lg="6" xl="3" >
                <Card className="card-stats mb-4 mb-xl-0" style={{height:'110px'}}>
                  <CardBody>
                    <Row>
                      <div className="col">
                        <CardTitle
                          tag="h5"
                          className="text-uppercase text-muted mb-0"
                        >
                          Students in Classes
                        </CardTitle>
                        {/* <span className="h2 font-weight-bold mb-0">{props.mentor ? props.mentor :  " "}</span> */}
                                    <span className="h2 font-weight-bold mb-0">{props.student ? props.student :  "0"}</span>

                      </div>
                      <Col className="col-auto">
                        <div className="icon icon-shape bg-yellow text-white rounded-circle shadow">
                          <FontAwesomeIcon icon={faUser} style={{color:"#fff"}} />
                        </div>
                      </Col>
                    </Row>
               
                  </CardBody>
                </Card>
              </Col>
              <Col lg="6" xl="3">
                <Card className="card-stats mb-4 mb-xl-0 p-1 " style={{height:'110px'}}>
                  <CardBody>
                    <Row>
                      <div className="col">
                        <CardTitle
                          tag="h5"
                          className="text-uppercase text-muted mb-0"
                        >
                       Duration
                        </CardTitle>
                                                            <span className="h2 font-weight-bold mb-0">{classdata.classroom_duration ? classdata.classroom_duration :  " "}</span>


                      </div>
                      <Col className="col-auto">
                        <div className="icon icon-shape bg-info text-white rounded-circle shadow">
                         <FontAwesomeIcon icon={faClock} style={{color:"#fff"}} />
                        </div>
                      </Col>
                    </Row>
                   
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
    </>
  );
}

export default Header;
