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
  faQuestion,
  faBook,
  
  
} from "@fortawesome/free-solid-svg-icons";



// reactstrap components
import { Card, CardBody, CardTitle, Container, Row, Col } from "reactstrap";


function Header(props) {


 
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
                         Upcoming Classes
                        </CardTitle>
                        <span className="h2 font-weight-bold mb-0">{props.class ? props.class : "0"}</span>
                      
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
                       Active Quiz
                        </CardTitle>
                        <span className="h2 font-weight-bold mb-0">
                          {props.quiz ? props.quiz : "0" }
                        
                        </span>
                      </div>
                      <Col className="col-auto">
                        <div className="icon icon-shape bg-warning text-white rounded-circle shadow">
                         <FontAwesomeIcon icon={faQuestion} style={{color:"#fff"}} />
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
                         Active Tasks
                        </CardTitle>
                        {/* <span className="h2 font-weight-bold mb-0">{props.mentor ? props.mentor :  " "}</span> */}
                                    <span className="h2 font-weight-bold mb-0">{props.task ? props.task :  "0"}</span>

                      </div>
                      <Col className="col-auto">
                        <div className="icon icon-shape bg-yellow text-white rounded-circle shadow">
                                                   <FontAwesomeIcon icon={faBook} style={{color:"#fff"}} />

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
                       
                        </CardTitle>
                                                           <div style={{display:'flex'}}><div className="circle" style={{height:'10px', width:'10px',backgroundColor:'#33B679',borderRadius:'50%',margin:'7px'}}></div>Quiz</div>
                                                            <div style={{display:'flex'}}><div className="circle" style={{height:'10px', width:'10px',backgroundColor:'#D50000' ,borderRadius:'50%',margin:'7px'}}></div> Tasks</div>
                                                             <div style={{display:'flex'}}><div className="circle" style={{height:'10px', width:'10px',backgroundColor:'#039BE5' ,borderRadius:'50%',margin:'7px'}}></div>Classes</div>


                      </div>
                     
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
