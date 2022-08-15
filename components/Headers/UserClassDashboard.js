import React, { useState } from "react";
import ReactHtmlParser from "react-html-parser";
import { format } from 'date-fns';
import classnames from "classnames";
import firebase from "../../config/firebase-tiles";



// reactstrap components
import { Card, CardBody, CardTitle, Container, Row, Col } from "reactstrap";


function Header(props) {
  // console.log(props);
  const [data, setdata] = useState("");
  const [classdata, setclassdata] = useState("");


  React.useEffect(() => {
    // var currenturl = window.location.search;
    // var currenturlsearch = new URLSearchParams(currenturl);
    // var ID = currenturlsearch.get("c_id");



    firebase.auth().onAuthStateChanged((user) => {
      firebase
        .database()
        .ref(`users/${user.uid}`)
        .once("value")
        .then((snap) => {
          var userdata = snap.val();
          setdata(userdata);

        })




    })




  }, [])
  React.useEffect(() => {

    var ID = localStorage.getItem("u_id");

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
      <div className="header bg-gradient-dark pb-8 pt-5 pt-md-8">
        <Container fluid>
          <div className="header-body">
            {/* Card stats */}
            <Row>
              <Col lg="6" xl="3">
                <Card className="card-stats mb-4 mb-xl-0" style={{ height: '110px' }}>
                  <CardBody>
                    <Row>
                      <div className="col">
                        <CardTitle
                          tag="h5" style={{ fontSize: "1rem" }}



                          className="text-uppercase text-muted mb-0"
                        >
                          Class Name
                        </CardTitle>
                        <span className="h2 font-weight-bold mb-0">{classdata.classroomName}</span>

                      </div>
                      <Col className="col-auto">
                        <div className="icon icon-shape bg-danger text-white rounded-circle shadow">
                          <i className="fas fa-chart-bar" />
                        </div>
                      </Col>
                    </Row>

                  </CardBody>
                </Card>
              </Col>
              <Col lg="6" xl="3">
                <Card className="card-stats mb-4 mb-xl-0" style={{ height: '110px' }}>
                  <CardBody>
                    <Row>
                      <div className="col">
                        <CardTitle
                          tag="h5" style={{ fontSize: "1rem" }}

                          className="text-uppercase text-muted mb-0"
                        >
                          Mentors
                        </CardTitle>
                        <span className="h2 font-weight-bold mb-0">
                          {classdata.mentor ? classdata.mentor.length : " "}

                        </span>
                      </div>
                      <Col className="col-auto">
                        <div className="icon icon-shape bg-warning text-white rounded-circle shadow">
                          <i className="fas fa-chart-pie" />
                        </div>
                      </Col>
                    </Row>

                  </CardBody>
                </Card>
              </Col>
              <Col lg="6" xl="3" >
                <Card className="card-stats mb-4 mb-xl-0" style={{ height: '110px' }}>
                  <CardBody>
                    <Row>
                      <div className="col">
                        <CardTitle
                          tag="h5" style={{ fontSize: "1rem" }}

                          className="text-uppercase text-muted mb-0"
                        >
                          Course Name
                        </CardTitle>
                        <span className="h2 font-weight-bold mb-0">{classdata.courses ? classdata.courses[0].course_title : " "}</span>
                      </div>
                      <Col className="col-auto">
                        <div className="icon icon-shape bg-yellow text-white rounded-circle shadow">
                          <i className="fas fa-users" />
                        </div>
                      </Col>
                    </Row>

                  </CardBody>
                </Card>
              </Col>
              <Col lg="6" xl="3">
                <Card className="card-stats mb-4 mb-xl-0 p-1 " style={{ height: '110px' }}>
                  <CardBody>
                    <Row>
                      <div className="col">
                        <CardTitle
                          tag="h5" style={{ fontSize: "1rem" }}

                          className="text-uppercase text-muted mb-0"
                        >
                          Active Period
                        </CardTitle>
                        <span className="h2 font-weight-bold mb-0"><h2>{classdata ? (classdata.starting_date) + "  :  " + classdata.end_date : " "}</h2></span>
                      </div>
                      <Col className="col-auto">
                        <div className="icon icon-shape bg-info text-white rounded-circle shadow">
                          <i className="fas fa-percent" />
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
