import React, { Component } from "react";
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  Container,
  Col,
  Row,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
 
  Form,
  Input,
  FormGroup,
  InputGroup,
} from "reactstrap";
import Header from "components/Headers/admin.js";
import firebase from "../../config/firebase-tiles";
import Workshop from 'layouts/Workshop.js';
import DataTable from "react-data-table-component";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
class Workshopdetails extends Component {
  constructor(props) {
    super(props);
    // this.deleteQuiz = this.deleteQuiz.bind(this);
    // this.toggleDelete = this.toggleDelete.bind(this);
        this.toggleblock = this.toggleblock.bind(this);
    this.blockquiz = this.blockquiz.bind(this);
    this.state = {
      w_id: "",
     
      data: [],
      quiz_ids: [], 
      quiz_data: [],
      task_ids: [],
      task_data: [],
      deleteModal: false,
      modal: false,
      removeModel: false,
       blocked:false,
      blockmodal:false,
     
      courses: [],
      courseName: "",
      Courses: [],
      assignedcourses: [],
      mentor: [],
      Mentors: [],
      assignedmentors: [],
      s: [],
      p: [],
      BLOCKED: [],
    };
  }
  componentDidMount() {
    firebase.auth().onAuthStateChanged((user) => {
      firebase.database().ref(`Admin/${user.uid}`).once("value")
        .then((snap) => {
          var d = snap.val();
          if (d && d.type === 1) {

            // var currenturl = window.location.search;
            // var currenturlsearch = new URLSearchParams(currenturl);
            // var id = currenturlsearch.get("id");
            var id = localStorage.getItem("w_id");
            console.log(id);
            if (id === undefined) {
              window.location.href = "/";
            }
            this.setState({ w_id: id });

            var x = [];
            firebase
              .database()
              .ref("Workshops/" + id)
              .once("value")
              .then((snapshot) => {
                x = snapshot.val();
                if (x) {
                  this.setState({
                    data: x,
                    s: x.data.courses? x.data.courses: [],
                    assignedcourses: x.data.courses? x.data.courses: [],
                    p: (x.data.mentor) ? x.data.mentor : [],
                    assignedmentors: (x.data.mentor) ? x.data.mentor : [],
                    editorState: x.data.task,
                    blocked:x.data.blocked,
                  });
                  console.log(this.state.blocked);
                  document.getElementById("task_description").innerHTML =
                    x.data.w_details.Wdesc;
                }

              })
          }
          else {
            alert("only admins allowed ");
            window.location.href = "/";
          }
        })
    })
  }

  // Delete Quiz

  // toggleDelete = () => {
  //   this.setState((prevState) => ({ deleteModal: !prevState.deleteModal }));
  // };

  // deleteQuiz = () => {
  //   console.log("Called");
  //   firebase.database().ref(`Workshops/${this.state.w_id}`).remove();
  //   var QuizList = [];
  //   var ref = firebase.database()
  //     .ref("Quiz/workshopQ");
  //   ref
  //     .once("value")
  //     .then((snapshot) => {
  //       QuizList = snapshot.val();
  //       for (var key in QuizList) {
  //         if (QuizList.hasOwnProperty(key)) {
  //           if (QuizList[key].data.w_id === this.state.w_id) {
  //             firebase.database().ref(`Quiz/workshopQ/${key}`).remove();
  //           }
  //         }
  //       }
  //       // console.log(QuizList);
  //     });
  //   var taskList = [];
  //   var ref = firebase.database()
  //     .ref("Task/workshopQ");
  //   ref.once("value")
  //     .then((snapshot) => {
  //       taskList = snapshot.val();
  //       for (var key in taskList) {
  //         if (taskList.hasOwnProperty(key)) {
  //           if (taskList[key].data.w_id === this.state.w_id) {
  //             if (taskList[key].data.attachments) {
  //               firebase.storage().ref("Tasks/workshopT/" + key).child("attachments").listAll().then(function (result) {
  //                 result.items.forEach(function (file) {
  //                   file.delete();
  //                 });
  //               });
  //             }
  //             firebase.database().ref(`Task/workshopT/${key}`).remove();
  //           }
  //         }
  //       }
  //     })
  //   this.toggleDelete();
  //   window.location.href = `/admin/Workshops/`;
  // };


   toggleblock = () => {
        this.setState((prevState) => ({ blockmodal: !prevState.blockmodal }));

   

        
        
  };

  blockquiz = ()=>{
    this.setState((prevState) => ({ blocked: !prevState.blocked}))
      firebase.database().ref("Workshops/"+ this.state.w_id + "/data/")
            .update({
              blocked: !this.state.blocked,
            }).then(()=>{
              this.toggleblock();
            })
  }

  deletecourse = (state) => {


    this.state.s.map((item, index) => {

      this.state.assignedcourses.map((item2, index) => {

        if (item.c_id === item2.c_id) {
          console.log(this.state.s);
          this.setState({
            assignedcourses: this.state.s.splice(1, 1),
          })
          firebase.database().ref(`Workshops/${this.state.w_id}/data/courses`)
          .remove()
        }

      })
    })
  }
  deletementor = (id) => {
    var array = this.state.p.filter((element) => element.m_id !== id);
    this.setState({
      p: array,
      assignedmentors: array,
    })

    firebase.database().ref(`Workshops/${this.state.w_id}/data/`)
    .update({
      mentor: array,
    })
  }

  render() {
    // const header = [
    //   { name: "Quiz Name", selector: "quiz_name", sortable: true },
    //   { name: "Available From", selector: "start" },
    //   { name: "Available Till", selector: "end" },
    //   { name: "View Details", selector: "btn" },
    // ];

    // var body = [];
    // if (this.state.quiz_data !== undefined && this.state.quiz_data !== null) {
    //   var x = this.state.quiz_data;
    //   body = x.map((item) => {
    //     const id = item.data.quiz_id;
    //     console.log(id);
    //     return {
    //       quiz_name: item.data.name,
    //       start: item.data.start_date + " " + item.data.start_time,
    //       end: item.data.end_date + " " + item.data.end_time,
    //       btn: (
    //         <a
    //           href={"/workshop/WorkshopQuizDetails?id="+this.state.w_id+"&q_id="+id}
    //         >
    //           View Details
    //         </a>
    //       ),
    //     };

    //   });
    // }

    //   const column = [
    //     { name: "Task Name", selector: "task_name", sortable: true },
    //     { name: "View Details", selector: "btn" },
    //     { name: "Due Date", selector: "due_date" },
    //   ];
    //   var body1 = [];
    //   if (this.state.task_data !== undefined && this.state.task_data !== null) {
    //   body1 = this.state.task_data.map((item) => {
    //     const id = item.data.task_id;
    //     const d = item.data.due_date;
    //     return {
    //       task_name: item.data.task_name,
    //       due_date: d,  
    //       btn: (
    //         // <a to={"/workshop/wtaskdetails?id="+id}>
    //         //   View
    //         // </a>
    //         <a href={"/workshop/WorkshopTaskDetails?id="+this.state.w_id+"&t_id="+id}>View Details</a>
    //       ),
    //     };
    //   });
    // }
        //Data of datatable of modal
        const column1 = [
          { name: "username", selector: "username", sortable: true },
          { name: "Email", selector: "email" },
          { name: "Expertise", selector: "expertise" },
    
          { name: "", selector: "removebtn" },
        ];
    
        const body1 = this.state.assignedmentors.map((item, index) => {
          return {
            username: item.username,
            email: item.email,
            expertise: item.expertise,
            removebtn: (
    
              <Button size="sm" onClick={() => this.deletementor(item.m_id)} color="danger">
    
                remove
    
              </Button>)
          };
        });
    
    //Data of datatable of courses modal
    const columnCoursesTable = [
      { name: "CourseName", selector: "course_title" },
      { name: "Description", selector: "Description" },
      { name: "StartDate", selector: "start_data" },
      { name: "EndDate", selector: "end_date" },
      { name: "", selector: "removebtn" },
    ];

    let bodyCoursesTable = this.state.assignedcourses.map((item) => {

      return {
        course_title: item.course_title,
        Description: item.Description,
        start_data: item.start_data,
        end_date: item.end_date,
        removebtn: (
          <Button
            size="sm"
            color="danger"
            onClick={this.deletecourse}

          >
            Remove
          </Button>)

      };


    });

    return (
      <div>
        <Header />
        {/* Page content */}
        <Container className="mt--7" fluid>
          <Card>
            <CardHeader >
              <Row className="text-center" >
              <Col lg="12" ><h1>Workshop </h1>
              {this.state.blocked ? <h5 className="text-danger px-5">Blocked</h5> : <h5 className="text-primary px-5">Active</h5>}
              
              </Col>
              
                
              </Row>
            </CardHeader>
            <CardBody className="px-2 ">
              {this.state.data.data && (
                <div className="col-md-9 py-sm-3 mx-auto">
                  {/* <b>Title:</b> {this.state.data.data.w_details.workshopTitle}
                  <br />
                  <b>Subtitle :</b>{" "}
                  {this.state.data.data.w_details.workshopSubTitle} <br />
                  <b>Workshop Catergory </b>{" "}
                  {this.state.data.data.workshopCategory} <br />
                  <b>Starting Date :</b>{" "}
                  {this.state.data.data.w_details.starting_date} <br />
                  <b>Ending Date :</b> {this.state.data.data.w_details.end_date}{" "}
                  <br />
                  <b>Workshop Duration :</b>{" "}
                  {this.state.data.data.w_details.Workshop_duration} <br />
                  <b>Registration Starting Date :</b>{" "}
                  {this.state.data.data.w_details.reg_starting_date} <br />
                  <b>Registration Ending Date :</b>{" "}
                  {this.state.data.data.w_details.reg_end_date} 
                  <br />
                  <b>Workshop Description:</b>
                  <p id="task_description"></p>
                  <br /> */}
                   <Row style={{justifyContent : "space-between"}}>
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
                              placeholder="Username"
                              type="text"
                              value={this.state.data.data.w_details.workshopTitle}
                            />
                          </FormGroup>
                        </Col>
                         <Col lg="6">
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="input-username"
                            >
                             <h3> Subtitle</h3>
                            </label>
                            <Input
                              disabled
                              className="form-control-alternative"
                              id="input-username"
                              placeholder="Username"
                              type="text"
                              value={
                               this.state.data.data.w_details.workshopSubTitle
                              }
                            />
                          </FormGroup>
                        </Col>
                  </Row>
                   <Row style={{justifyContent : "space-between"}}>
                    <Col lg="6">
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="input-username"
                            >
                             <h3>Workshop Category</h3>
                            </label>
                            <Input
                              disabled
                              className="form-control-alternative"
                              id="input-username"
                              placeholder="Username"
                              type="text"
                              value={this.state.data.data.workshopCategory}
                            />
                          </FormGroup>
                        </Col>
                         <Col lg="6">
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="input-username"
                            >
                             <h3> Starting Date</h3>
                            </label>
                            <Input
                              disabled
                              className="form-control-alternative"
                              id="input-username"
                              placeholder="Username"
                              type="text"
                              value={this.state.data.data.w_details.starting_date}
                            />
                          </FormGroup>
                        </Col>
                  </Row>
                   <Row style={{justifyContent : "space-between"}}>
                    <Col lg="6">
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="input-username"
                            >
                             <h3>Ending Date</h3>
                            </label>
                            <Input
                              disabled
                              className="form-control-alternative"
                              id="input-username"
                              placeholder="Username"
                              type="text"
                              value={this.state.data.data.w_details.end_date}
                            />
                          </FormGroup>
                        </Col>
                         <Col lg="6">
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="input-username"
                            >
                             <h3>Workshop Duration</h3>
                            </label>
                            <Input
                              disabled
                              className="form-control-alternative"
                              id="input-username"
                              placeholder="Username"
                              type="text"
                              value={this.state.data.data.w_details.Workshop_duration}
                            />
                          </FormGroup>
                        </Col>
                  </Row>
                   <Row style={{justifyContent : "space-between"}}>
                    <Col lg="6">
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="input-username"
                            >
                             <h3>Registration Starting Date</h3>
                            </label>
                            <Input
                              disabled
                              className="form-control-alternative"
                              id="input-username"
                              placeholder="Username"
                              type="text"
                              value=                  {this.state.data.data.w_details.reg_starting_date} 

                            />
                          </FormGroup>
                        </Col>
                         <Col lg="6">
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="input-username"
                            >
                             <h3> Registration Ending Date</h3>
                            </label>
                            <Input
                              disabled
                              className="form-control-alternative"
                              id="input-username"
                              placeholder="Username"
                              type="text"
                              value=                  {this.state.data.data.w_details.reg_end_date} 

                            />
                          </FormGroup>
                        </Col>
                  </Row>
                   <Row style={{justifyContent : "space-between"}}>
                    <Col lg="6">
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="input-username"
                            >
                             <h3>Workshop Description</h3>
                            </label>
                           <p  id="task_description"></p>
                          </FormGroup>
                        </Col>
                        
                  </Row>
                  
                <Col lg="12" className=" d-flex ml-auto">
                  <div className=" ml-auto px-3" >
                  <a href={"/workshop/Editworkshop?id=" + this.state.w_id}>
                    <Button className="text-primary">
                      <FontAwesomeIcon
                        icon={faEdit}
                        className="justify-self-end"
                      />
                    </Button>
                  </a>
               </div>
              
                
                   <Button color="danger" size="md" onClick={this.toggleblock}>
                {this.state.blocked ? "Unblock" : "Block"} Workshop
                </Button>
                </Col>
                  {this.state.data.data.attachments && (
                    <div>
                      <b>Attachment:</b>
                      {this.state.data.data.attachments.map((item, index) => {
                        return (
                          <p>
                            {index + 1}.{" "}
                            <a href={item.url} download={item.name}>
                              Attachment {index + 1}
                            </a>
                          </p>
                        );
                      })}
                    </div>
                  )}
              <div className="d-block w-100">
                {this.state.assignedcourses[0] && <DataTable
                  title="Assigned Courses"
                  columns={columnCoursesTable}
                  data={bodyCoursesTable}




                  pagination={true}

                  persistTableHead

                />}
              </div>

              <div id="" className="d-block w-100">
                {this.state.assignedmentors[0] && <DataTable
                  title="Assigned Mentors"

                  columns={column1}
                  data={body1}
                  pagination={true}

                  persistTableHead

                />}
              </div>

                  {/* <Card>
                    <DataTable
                      title="Quizes"
                      columns={header}
                      data={body}
                      pagination={true}
                    />
                    <a
                      href={"/workshop/WorkshopCreatequiz?id="+this.state.w_id}
                    >
                      <Button color="primary" class="my-5">Create Quiz</Button>
                      <br/>
                    </a>
                  </Card> */}

                  {/* <Card className="mt-5">
                    <DataTable
                      class="mt-5"
                      title="Task Data"
                      columns={column}
                      data={body1}
                      pagination={true}
                      persistTableHead
                    />
                    <a
                      href={"/workshop/WorkshopCreateTask?id="+this.state.w_id}
                    >
                      <Button color="primary mt-5">Create Task</Button>
                    </a>
                  </Card> */}
                </div>
              )}

            </CardBody>
          </Card>
        </Container>
         <Modal isOpen={this.state.blockmodal} toggle={this.toggleblock}>
          <ModalHeader toggle={this.toggleblock}>Block</ModalHeader>
          <ModalBody>Are you sure you want to {this.state.blocked ? "Unblock" : "Block"} the Workshop!</ModalBody>
          <ModalFooter>
            <Button color="danger" onClick={this.blockquiz}>
             Yes
            </Button>{" "}
            <Button color="secondary" onClick={this.toggleblock}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
{/* 
        <Modal isOpen={this.state.deleteModal} toggle={this.toggleDelete}>
          <ModalHeader toggle={this.toggleDelete}>Delete</ModalHeader>
          <ModalBody>Delete the Workshop!</ModalBody>
          <ModalFooter>
            <Button color="danger" onClick={this.deleteQuiz}>
              Delete
            </Button>{" "}
            <Button color="secondary" onClick={this.toggleDelete}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal> */}
      </div>
    );
  }
}

Workshopdetails.layout = Workshop;

export default Workshopdetails;