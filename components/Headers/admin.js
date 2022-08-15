import React, { useState } from "react";
import firebase from "../../config/firebase-tiles";
import ReactHtmlParser from "react-html-parser";
import { format } from 'date-fns';



// reactstrap components
import { Card, CardBody, CardTitle, Container, Row, Col } from "reactstrap";


function Header(props) {
 const [classroom, setclassroom] = useState(0);
 const [work, setwork] = useState(0);
 const [mentor, setmentor] = useState(0);
 const [user, setuser] = useState(0);

 React.useEffect(() => {

        firebase
          .database()
          .ref("Classroom")
          .once("value")
          .then((snapshot) => {

            setclassroom(snapshot.numChildren())

          })

           firebase
          .database()
          .ref("Workshops")
          .once("value")
          .then((snapshot) => {

            setwork(snapshot.numChildren())

          })

             firebase
          .database()
          .ref("Mentors")
          .once("value")
          .then((snapshot) => {

            setmentor(snapshot.numChildren())

          })

             firebase
          .database()
          .ref("users")
          .once("value")
          .then((snapshot) => {

            setuser(snapshot.numChildren())

          })



        },[]);
 
  return (
    
    <>
      <div className="header bg-gradient-dark pb-8 pt-5 pt-md-8">
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
                          style={{fontSize:"16px"}}
                        >
                          Classrooms
                        </CardTitle>
                        <span className="h2 font-weight-bold mb-0">{classroom ? classroom : ""}</span>
                      
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
                <Card className="card-stats mb-4 mb-xl-0" style={{height:'110px'}}>
                  <CardBody>
                    <Row>
                      <div className="col">
                        <CardTitle
                          tag="h5"
                          className="text-uppercase text-muted mb-0"
                        >
                       Workshops
                        </CardTitle>
                        <span className="h2 font-weight-bold mb-0">
                          {work ? work : " " }
                        
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
                <Card className="card-stats mb-4 mb-xl-0" style={{height:'110px'}}>
                  <CardBody>
                    <Row>
                      <div className="col">
                        <CardTitle
                          tag="h5"
                          className="text-uppercase text-muted mb-0"
                        >
                          Mentors
                        </CardTitle>
                        <span className="h2 font-weight-bold mb-0">{mentor ? mentor :  " "}</span>
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
                <Card className="card-stats mb-4 mb-xl-0 p-1 " style={{height:'110px'}}>
                  <CardBody>
                    <Row>
                      <div className="col">
                        <CardTitle
                          tag="h5"
                          className="text-uppercase text-muted mb-0"
                        >
                       Students
                        </CardTitle>
                                                <span className="h2 font-weight-bold mb-0">{user ? user :  " "}</span>

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
