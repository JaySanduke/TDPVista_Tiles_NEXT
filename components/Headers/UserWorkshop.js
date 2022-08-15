import React, { useState } from "react";
import firebase from "../../config/firebase-tiles";
import ReactHtmlParser from "react-html-parser";
import { format } from 'date-fns';



// reactstrap components
import { Card, CardBody, CardTitle, Container, Row, Col } from "reactstrap";


function Header(props) {
console.log(props);
  const [classdata, setclassdata] = useState("");
  

  React.useEffect(()=>{
     var ID = localStorage.getItem("w_id");
    
                         firebase
                         .database()
                         .ref("Workshops/" + ID)
                         .once("value")
                         .then( (snapshot) => {
                             var ClassData = snapshot.val();
                             console.log(ClassData)
                             if (ClassData) {
                                 setclassdata(ClassData.data);
                             }
                         })
  },[])
 
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
                          className="text-uppercase font-weight-bold text-muted mb-0"
                        >
                         <h3> Workshop</h3>
                        </CardTitle>
                        <span className="h3 font-weight-bold mb-0">{classdata.w_details ? classdata.w_details.workshopTitle : ""}</span>
                      
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
                          className="text-uppercase font-weight-bold text-muted mb-0"
                        >
                       <h3>Mentors</h3>
                        </CardTitle>
                        <span className="h3 font-weight-bold mb-0">
                          {classdata.mentor ? classdata.mentor.length : " " }
                        
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
                          className="text-uppercase font-weight-bold text-muted mb-0"
                        >
                          <h3>Starting Date</h3>
                        </CardTitle>
                        <span className="h3 font-weight-bold mb-0">{classdata.w_details ? classdata.w_details.starting_date : ""}</span>
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
                          className="text-uppercase font-weight-bold text-muted mb-0"
                        >
                        <h3>End Date</h3>
                        </CardTitle>
                        <span className="h3 font-weight-bold mb-0">{classdata.w_details ? classdata.w_details.end_date : ""}</span>
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
