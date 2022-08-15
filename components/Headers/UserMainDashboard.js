import React, { useState } from "react";
import firebase from "../../config/firebase-tiles";
import ReactHtmlParser from "react-html-parser";
import { format } from 'date-fns';



// reactstrap components
import { Card, CardBody, CardTitle, Container, Row, Col } from "reactstrap";


function Header(props) {
//  console.log(props);


 
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
                          style={{fontSize:"1rem"}}
                          className="text-uppercase text-muted mb-0"
                        >
                          Classrooms
                        </CardTitle>
                        <span className="h2 font-weight-bold mb-0">{props.data ? props.data.classroom.length : ""}</span>
                      
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
                          tag="h5"                           style={{fontSize:"1rem"}}

                          className="text-uppercase text-muted mb-0"
                        >
                       Workshops
                        </CardTitle>
                        <span className="h2 font-weight-bold mb-0">
                          {props.data.workshop ? props.data.workshop.length : " " }
                        
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
                                                    style={{fontSize:"1rem"}}

                          className="text-uppercase text-muted mb-0"
                        >
                          Quiz Attempted
                        </CardTitle>
                        <span className="h2 font-weight-bold mb-0">{props.quiz ? props.quiz :  " "}</span>
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
                                                    style={{fontSize:"1rem"}}

                          className="text-uppercase text-muted mb-0"
                        >
                        Task Completed
                        </CardTitle>
                        <span className="h2 font-weight-bold mb-0"><h2>{props.task}</h2></span>
                        {/* <span className="h2 font-weight-bold mb-0"><h2>{ props.class ? (props.class.starting_date ) + "  :  "+ props.class.end_date  : " "}</h2></span> */}
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
