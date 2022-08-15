import React from "react";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { EditorState } from "draft-js";
import firebase from "../../config/firebase-tiles";
import UserWorkshop from 'layouts/UserWorkshop.js';
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  Container,
  Row,
  Col,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  Form,
  Input,
  FormGroup,
  InputGroup,
} from "reactstrap";

import { Link } from "react-router-dom";
// core components
import Header from "components/Headers/UserWorkshop.js";
import ReactHtmlParser from "react-html-parser";

class WorkshopQuizDetails extends React.Component {
  constructor(props) {
    super(props);
    var today = new Date(),
      todayDate =
        today.getFullYear() +
        "-" +
        ((today.getMonth() + 1 < 10 ? "0" : "") + (today.getMonth() + 1)) +
        "-" +
        ((today.getDate() < 10 ? "0" : "") + today.getDate());
    var time = today.getHours() + ":" + today.getMinutes();


    this.state = {
      deleteModal: false,
      modal: false,
      removeModel: false,
      todayDate: todayDate,
      quiz: [],
      quiz_id: "",
      // this.props.location.state !== undefined
      //   ? this.props.location.state.id
      //   : "",
      editorState: EditorState.createEmpty(),
      nowTime: time,
      // Assigned  In Classroom
      classrooms: [],
      classroom: [],
      search_data: [],
      add_classroom: [],
      data: [],
    };
  }

  componentDidMount() {

    firebase.auth().onAuthStateChanged((user) => {
      firebase.database().ref(`users/${user.uid}`).once("value")
        .then((snap) => {
          var d = snap.val();
          // if (d && d.verification === 1) {
            var currenturl = window.location.search;
            var currenturlsearch = new URLSearchParams(currenturl);
            var id = currenturlsearch.get("q_id");
            console.log(id);
            if (id === undefined || id === null) {
              window.location.href = "/";
            }
            this.setState({ quiz_id: id });
            console.log(this.state.quiz_id);

            var x = [];
            firebase
              .database()
              .ref(`Quiz/workshopQ/${id}/data`)
              .once("value")
              .then((snapshot) => {
                x = snapshot.val();
                if (x) {
                  this.setState({
                    data: x,
                    editorState: x.quiz_desc,
                  });
                  document.getElementById("quiz_description").innerHTML = x.quiz_desc;
                }
              });
          
          // else {
          //   alert("only admins allowed ");
          //   window.location.href = "/";
          // }
        })
    })

  }


  render() {
    if (this.state.data) {
      var a = new Date(
        this.state.data.start_date + " " + this.state.data.start_time
      );
      var b = new Date(this.state.todayDate + " " + this.state.nowTime);
      var c = new Date(
        this.state.data.end_date + " " + this.state.data.end_time
      );
    }
    var active = false;
    if (this.state.data) {
      if (a <= b && c >= b) {
        active = true;
      }
    }
    return (
      <>
        <Header />
        {/* Page content */}
        <Container className="mt--7" fluid>
          <Card>
            <CardHeader className="text-center">
              <h1>
                Quiz Details : {this.state.data ? this.state.data.name : ""}
                {active ? (
                  <h5 className="text-success">Active</h5>
                ) : (
                  <h5 className="text-danger">Inactive </h5>
                )}

              </h1>
            </CardHeader>
            <CardBody className="px-2 justify-content-center align-items-center">
              {this.state.data && (
                <div className="col-md-9 py-sm-3 mx-auto">
 <Row>
                    <Col lg="6">
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="input-username"
                            >
                             <h3>Title</h3>
                            </label>
                            <Input
                              disabled
                              className="form-control-alternative"
                              id="input-username"
                              placeholder="Title"
                              type="text"
                              value={this.state.data.name}
                            />
                          </FormGroup>
                        </Col>
                         <Col lg="6">
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="input-username"
                            >
                             <h3> Description</h3>
                            </label>
                            <span id="quiz_description"></span>
                            {/* <Input
                              disabled
                              className="form-control-alternative"
                              id="quiz_description"                              placeholder="Username"
                              type="text"
                              
                            /> */}
                          </FormGroup>
                        </Col>
                  </Row>


                  <Row>
                    <Col lg="6">
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="input-username"
                            >
                             <h3>From</h3>
                            </label>
                            <Input
                              disabled
                              className="form-control-alternative"
                              id="input-username"
                              placeholder="From"
                              type="text"
                              value= {this.state.data.start_date +
                                " " +
                                this.state.data.start_time}
                            />
                          </FormGroup>
                        </Col>
                         <Col lg="6">
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="input-username"
                            >
                             <h3> To</h3>
                            </label>
                            <Input
                              disabled
                              className="form-control-alternative"
                              id="input-username"
                              placeholder="To"
                              type="text"
                              value={this.state.data.end_date + " " + this.state.data.end_time}

                            />
                          </FormGroup>
                        </Col>
                  </Row>
                
                  <Row><Col lg="12" className="text-center"> <a href={`/UserWorkshop/Quizmain?q_id=${this.state.quiz_id}`}><Button className="mx-auto" color="info" disabled={!active}> {active ? "Attempt Quiz" : "Not Available"}</Button></a></Col></Row>
                 
                </div>
              )}

              
            </CardBody>
          </Card>
        </Container>

        
      </>
    );
  }
}
WorkshopQuizDetails.layout = UserWorkshop;
export default WorkshopQuizDetails;
