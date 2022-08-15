// import React from "react";
// import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
// import { EditorState } from "draft-js";
// import firebase from "../../config/firebase-tiles";
// import Workshop from 'layouts/Workshop.js';
// import {
//   Button,
//   Card,
//   CardHeader,
//   CardBody,
//   Container,
//   Row,
//   Col,
//   Modal,
//   ModalBody,
//   ModalFooter,
//   ModalHeader,
// } from "reactstrap";

// import { Link } from "react-router-dom";
// // core components
// import Header from "components/Headers/admin.js";

// import ReactHtmlParser from "react-html-parser";

// class WorkshopQuizDetails extends React.Component {
//   constructor(props) {
//     super(props);
//     var today = new Date(),
//       todayDate =
//         today.getFullYear() +
//         "-" +
//         ((today.getMonth() + 1 < 10 ? "0" : "") + (today.getMonth() + 1)) +
//         "-" +
//         ((today.getDate() < 10 ? "0" : "") + today.getDate());
//     var time = today.getHours() + ":" + today.getMinutes();

//     this.deleteQuiz = this.deleteQuiz.bind(this);
//     this.toggleDelete = this.toggleDelete.bind(this);
//     this.state = {
//       deleteModal: false,
//       modal: false,
//       removeModel: false,
//       todayDate: todayDate,
//       quiz: [],
//       quiz_id: "",
//       // this.props.location.state !== undefined
//       //   ? this.props.location.state.id
//       //   : "",
//       editorState: EditorState.createEmpty(),
//       nowTime: time,
//       // Assigned  In Classroom
//       classrooms: [],
//       classroom: [],
//       search_data: [],
//       add_classroom: [],
//       data: [],
//     };
//   }

//   componentDidMount() {

//     firebase.auth().onAuthStateChanged((user) => {
//       firebase.database().ref(`Admin/${user.uid}`).once("value")
//         .then((snap) => {
//           var d = snap.val();
//           if (d && d.type === 1) {
//             var currenturl = window.location.search;
//             var currenturlsearch = new URLSearchParams(currenturl);
//             var id = currenturlsearch.get("q_id");
//             console.log(id);
//             if (id === undefined || id === null) {
//               window.location.href = "/";
//             }
//             this.setState({ quiz_id: id });
//             console.log(this.state.quiz_id);

//             var x = [];
//             firebase
//               .database()
//               .ref(`Quiz/workshopQ/${id}/data`)
//               .once("value")
//               .then((snapshot) => {
//                 x = snapshot.val();
//                 if (x) {
//                   this.setState({
//                     data: x,
//                     editorState: x.quiz_desc,
//                   });
//                   document.getElementById("quiz_description").innerHTML = x.quiz_desc;
//                 }
//               });
//           }
//           else {
//             alert("only admins allowed ");
//             window.location.href = "/";
//           }
//         })
//     })

//   }

//   // Delete Quiz

//   toggleDelete = () => {
//     this.setState((prevState) => ({ deleteModal: !prevState.deleteModal }));
//   };

//   deleteQuiz = () => {
//     console.log("Called");
//     firebase.database().ref("Quiz/workshopQ/").child(this.state.quiz_id).remove();
//     var data = [];
//     var ref = firebase
//       .database()
//       .ref("Workshops/" + this.state.data.w_id + "/data/");
//     ref
//       .once("value")
//       .then((snapshot) => {
//         data = snapshot.val().quiz;
//         var d = data.indexOf(this.state.quiz_id);
//         data.splice(d, 1);
//       })
//       .then((snapshot) => {
//         console.log(data);
//         if (data === []) {
//           firebase
//             .database()
//             .ref("Workshops/" + this.state.data.w_id + "/data/quiz")
//             .remove();
//         } else {
//           firebase
//             .database()
//             .ref("Workshops/" + this.state.data.w_id + "/data/")
//             .update({
//               quiz: data,
//             });
//         }
//         window.location.href = `/workshop/Workshopquiz?id=${this.state.data.w_id}`;
//       });
//     this.toggleDelete();
//   };
//   render() {
//     if (this.state.data) {
//       var a = new Date(
//         this.state.data.start_date + " " + this.state.data.start_time
//       );
//       var b = new Date(this.state.todayDate + " " + this.state.nowTime);
//       var c = new Date(
//         this.state.data.end_date + " " + this.state.data.end_time
//       );
//     }
//     var active = false;
//     if (this.state.data) {
//       if (a <= b && c >= b) {
//         active = true;
//       }
//     }
//     return (
//       <>
//         <Header />
//         {/* Page content */}
//         <Container className="mt--7" fluid>
//           <Card>
//             <CardHeader>
//               <h1>
//                 Quiz Details : {this.state.data ? this.state.data.name : ""}
//                 {active ? (
//                   <h5 className="text-success">Active</h5>
//                 ) : (
//                   <h5 className="text-danger">Inactive </h5>
//                 )}

//                 <a
//                   href={"/workshop/WorkshopEditQuiz?id=" + this.state.data.w_id + "&q_id=" + this.state.quiz_id}
//                 >
//                   <Button>
//                     Edit Quiz
//                   </Button>
//                 </a>
//               </h1>
//             </CardHeader>
//             <CardBody className="px-2">
//               {this.state.data && (
//                 <div className="col-md-9 py-sm-3">
//                   {/* <Link
//                     className="mb-3"
//                     to={{
//                       pathname: "/workshop/weditquiz",
//                       state: { id: this.state.quiz_id },
//                     }}
//                   >
//                     <Button color="primary" className="mb-2">
//                       Edit Quiz
//                     </Button>
//                   </Link> */}

//                   <div>
//                     <b>Name :</b> {this.state.data.name}
//                     <br />
//                     <b>Created On :</b> {this.state.data.created_date}
//                     <br />
//                     <b>From :</b>{" "}
//                     {this.state.data.start_date +
//                       " " +
//                       this.state.data.start_time}
//                     <br />
//                     <b>To :</b>{" "}
//                     {this.state.data.end_date + " " + this.state.data.end_time}
//                     <br />
//                     <br />
//                     <b>Quiz Description:</b>
//                     <span id="quiz_description"></span>
//                     <br />
//                   </div>
//                   <div>
//                     <h2>Quiz Data:</h2>
//                     {this.state.data.quiz_data && this.state.data.quiz_data.map((item, index) => {
//                       return (
//                         <div className="shadow p-5 mb-3 bg-white rounded">
//                           <b>Question {index + 1}. </b>
//                           <span id="question">{ReactHtmlParser(item.question)}</span>
//                           <br />
//                           <b>Marks: </b> {item.marks}
//                           <br />
//                           <Row className="mt-3">
//                             <ol>
//                               {item.options.map((op, Oindex) => {
//                                 return (
//                                   // <Col lg="4" md="6">
//                                   <li>{ReactHtmlParser(op)}</li>
//                                   // </Col>
//                                 );
//                               })}
//                             </ol>
//                           </Row>
//                           <br />
//                           <ol>
//                             Correct Answer: {item.correct.map((i, j) => {
//                               return (
//                                 <div key={j}><li> {ReactHtmlParser(item.options[i])}</li></div>
//                               )
//                             })}
//                           </ol>
//                           <br />
//                         </div>
//                       );
//                     })}
//                   </div>
//                 </div>
//               )}

//               <div className="text-right">
//                 <Button
//                   className="mx-auto"
//                   color="danger"
//                   size="md"
//                   onClick={this.toggleDelete}
//                 >
//                   Delete Quiz
//                 </Button>
//               </div>
//             </CardBody>
//           </Card>
//         </Container>

//         <Modal isOpen={this.state.deleteModal} toggle={this.toggleDelete}>
//           <ModalHeader toggle={this.toggleDelete}>Delete</ModalHeader>
//           <ModalBody>Delete the Quiz!</ModalBody>
//           <ModalFooter>
//             <Button color="danger" onClick={this.deleteQuiz}>
//               Delete
//             </Button>{" "}
//             <Button color="secondary" onClick={this.toggleDelete}>
//               Cancel
//             </Button>
//           </ModalFooter>
//         </Modal>
//       </>
//     );
//   }
// }
// WorkshopQuizDetails.layout = Workshop;
// export default WorkshopQuizDetails;
// import React from "react";
// import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
// import { EditorState } from "draft-js";
// import firebase from "../../config/firebase-tiles";
// import Workshop from 'layouts/MentorWorkshop.js';
// import {
//   Button,
//   Card,
//   CardHeader,
//   CardBody,
//   Container,
//   Row,
//   Col,
//   Modal,
//   ModalBody,
//   ModalFooter,
//   ModalHeader,
// } from "reactstrap";

// import { Link } from "react-router-dom";
// // core components
// import Header from "components/Headers/admin.js";

// import ReactHtmlParser from "react-html-parser";

// class WorkshopQuizDetails extends React.Component {
//   constructor(props) {
//     super(props);
//     var today = new Date(),
//       todayDate =
//         today.getFullYear() +
//         "-" +
//         ((today.getMonth() + 1 < 10 ? "0" : "") + (today.getMonth() + 1)) +
//         "-" +
//         ((today.getDate() < 10 ? "0" : "") + today.getDate());
//     var time = today.getHours() + ":" + today.getMinutes();

//     this.deleteQuiz = this.deleteQuiz.bind(this);
//     this.toggleDelete = this.toggleDelete.bind(this);
//     this.state = {
//       deleteModal: false,
//       modal: false,
//       removeModel: false,
//       todayDate: todayDate,
//       quiz: [],
//       quiz_id: "",
//       // this.props.location.state !== undefined
//       //   ? this.props.location.state.id
//       //   : "",
//       editorState: EditorState.createEmpty(),
//       nowTime: time,
//       // Assigned  In Classroom
//       classrooms: [],
//       classroom: [],
//       search_data: [],
//       add_classroom: [],
//       data: [],
//     };
//   }

//   componentDidMount() {

//     firebase.auth().onAuthStateChanged((user) => {
//       firebase.database().ref(`mentors/${user.uid}`).once("value")
//         .then((snap) => {
//           var d = snap.val();
//           if (d && d.type === 2) {
//             var currenturl = window.location.search;
//             var currenturlsearch = new URLSearchParams(currenturl);
//             var id = currenturlsearch.get("q_id");
//             console.log(id);
//             if (id === undefined || id === null) {
//               window.location.href = "/";
//             }
//             this.setState({ quiz_id: id });
//             console.log(this.state.quiz_id);

//             var x = [];
//             firebase
//               .database()
//               .ref(`Quiz/workshopQ/${id}/data`)
//               .once("value")
//               .then((snapshot) => {
//                 x = snapshot.val();
//                 if (x) {
//                   this.setState({
//                     data: x,
//                     editorState: x.quiz_desc,
//                   });
//                   document.getElementById("quiz_description").innerHTML = x.quiz_desc;
//                 }
//               });
//           }
//           else {
//             alert("only admins allowed ");
//             window.location.href = "/";
//           }
//         })
//     })

//   }

//   // Delete Quiz

//   toggleDelete = () => {
//     this.setState((prevState) => ({ deleteModal: !prevState.deleteModal }));
//   };

//   deleteQuiz = () => {
//     console.log("Called");
//     firebase.database().ref("Quiz/workshopQ/").child(this.state.quiz_id).remove();
//     var data = [];
//     var ref = firebase
//       .database()
//       .ref("Workshops/" + this.state.data.w_id + "/data/");
//     ref
//       .once("value")
//       .then((snapshot) => {
//         data = snapshot.val().quiz;
//         var d = data.indexOf(this.state.quiz_id);
//         data.splice(d, 1);
//       })
//       .then((snapshot) => {
//         console.log(data);
//         if (data === []) {
//           firebase
//             .database()
//             .ref("Workshops/" + this.state.data.w_id + "/data/quiz")
//             .remove();
//         } else {
//           firebase
//             .database()
//             .ref("Workshops/" + this.state.data.w_id + "/data/")
//             .update({
//               quiz: data,
//             });
//         }
//         window.location.href = `/workshop/Workshopquiz?id=${this.state.data.w_id}`;
//       });
//     this.toggleDelete();
//   };
//   render() {
//     if (this.state.data) {
//       var a = new Date(
//         this.state.data.start_date + " " + this.state.data.start_time
//       );
//       var b = new Date(this.state.todayDate + " " + this.state.nowTime);
//       var c = new Date(
//         this.state.data.end_date + " " + this.state.data.end_time
//       );
//     }
//     var active = false;
//     if (this.state.data) {
//       if (a <= b && c >= b) {
//         active = true;
//       }
//     }
//     return (
//       <>
//         <Header />
//         {/* Page content */}
//         <Container className="mt--7" fluid>
//           <Card>
//             <CardHeader>
//               <h1>
//                 Quiz Details : {this.state.data ? this.state.data.name : ""}
//                 {active ? (
//                   <h5 className="text-success">Active</h5>
//                 ) : (
//                   <h5 className="text-danger">Inactive </h5>
//                 )}

//                 <a
//                   href={"/MentorWorkshop/WorkshopEditQuiz?id=" + this.state.data.w_id + "&q_id=" + this.state.quiz_id}
//                 >
//                   <Button>
//                     Edit Quiz
//                   </Button>
//                 </a>
//               </h1>
//             </CardHeader>
//             <CardBody className="px-2">
//               {this.state.data && (
//                 <div className="col-md-9 py-sm-3">
//                   {/* <Link
//                     className="mb-3"
//                     to={{
//                       pathname: "/workshop/weditquiz",
//                       state: { id: this.state.quiz_id },
//                     }}
//                   >
//                     <Button color="primary" className="mb-2">
//                       Edit Quiz
//                     </Button>
//                   </Link> */}

//                   <div>
//                     <b>Name :</b> {this.state.data.name}
//                     <br />
//                     <b>Created On :</b> {this.state.data.created_date}
//                     <br />
//                     <b>From :</b>{" "}
//                     {this.state.data.start_date +
//                       " " +
//                       this.state.data.start_time}
//                     <br />
//                     <b>To :</b>{" "}
//                     {this.state.data.end_date + " " + this.state.data.end_time}
//                     <br />
//                     <br />
//                     <b>Quiz Description:</b>
//                     <span id="quiz_description"></span>
//                     <br />
//                   </div>
//                   <div>
//                     <h2>Quiz Data:</h2>
//                     {this.state.data.quiz_data && this.state.data.quiz_data.map((item, index) => {
//                       return (
//                         <div className="shadow p-5 mb-3 bg-white rounded">
//                           <b>Question {index + 1}. </b>
//                           <span id="question">{ReactHtmlParser(item.question)}</span>
//                           <br />
//                           <b>Marks: </b> {item.marks}
//                           <br />
//                           <Row className="mt-3">
//                             <ol>
//                               {item.options.map((op, Oindex) => {
//                                 return (
//                                   // <Col lg="4" md="6">
//                                   <li>{ReactHtmlParser(op)}</li>
//                                   // </Col>
//                                 );
//                               })}
//                             </ol>
//                           </Row>
//                           <br />
//                           <ol>
//                             Correct Answer: {item.correct.map((i, j) => {
//                               return (
//                                 <div key={j}><li> {ReactHtmlParser(item.options[i])}</li></div>
//                               )
//                             })}
//                           </ol>
//                           <br />
//                         </div>
//                       );
//                     })}
//                   </div>
//                 </div>
//               )}

//               <div className="text-right">
//                 <Button
//                   className="mx-auto"
//                   color="danger"
//                   size="md"
//                   onClick={this.toggleDelete}
//                 >
//                   Delete Quiz
//                 </Button>
//               </div>
//             </CardBody>
//           </Card>
//         </Container>

//         <Modal isOpen={this.state.deleteModal} toggle={this.toggleDelete}>
//           <ModalHeader toggle={this.toggleDelete}>Delete</ModalHeader>
//           <ModalBody>Delete the Quiz!</ModalBody>
//           <ModalFooter>
//             <Button color="danger" onClick={this.deleteQuiz}>
//               Delete
//             </Button>{" "}
//             <Button color="secondary" onClick={this.toggleDelete}>
//               Cancel
//             </Button>
//           </ModalFooter>
//         </Modal>
//       </>
//     );
//   }
// }
// WorkshopQuizDetails.layout = Workshop;
// export default WorkshopQuizDetails;

import React from "react";
import DataTable from "react-data-table-component";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { EditorState } from "draft-js";
import firebase from "../../config/firebase-tiles";
 import Workshop from 'layouts/Workshop.js';
import ReactHtmlParser from "react-html-parser";

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




// core components
import Header from "components/Headers/admin.js";


class QuizDetails extends React.Component {
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

    // this.search = this.search.bind(this);
   
    this.toggleblock = this.toggleblock.bind(this);
    this.blockquiz = this.blockquiz.bind(this);
        

    this.state = {
      block:false,
      blockmodal:false,
     
      todayDate: todayDate,
       quiz: [],
       quiz_id: "",
       // this.props.location.state !== undefined
       //   ? this.props.location.state.id
       //   : "",
       editorState: EditorState.createEmpty(),
       nowTime: time,
        //Assigned  In Classroom
       classrooms: [],
       classroom: [],
       search_data: [],
       add_classroom: [],
       data: [],
    };
  }

  componentDidMount() {

      firebase.auth().onAuthStateChanged((user) => {
        firebase.database().ref(`Admin/${user.uid}`).once("value")
          .then((snap) => {
            var d = snap.val();
            if (d && d.type === 1) {
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
                      block:x.block,
                    });
                    // console.log(this.state.data);
                    document.getElementById("quiz_description").innerHTML = x.quiz_desc;
                  }
                });
            }
            else {
              alert("only admins allowed ");
              window.location.href = "/";
            }
          })
      })

    }

 
  // bltoggleblock Quiz

 
   toggleblock = () => {
        this.setState((prevState) => ({ blockmodal: !prevState.blockmodal }));

   

        
        
  };

  blockquiz = ()=>{
    this.setState((prevState) => ({ block: !prevState.block }))
      firebase.database().ref("Quiz/" + "/workshopQ/" + this.state.quiz_id + "/data/")
            .update({
              block: !this.state.block,
            }).then(()=>{
              this.toggleblock();
            })
  }

 
 


  // Assign Task

 

 

 





  render() {
    const header = [
      { name: "Classroom Id", selector: "c_id" },
      { name: "Classroom Name", selector: "classroomName", sortable: true },
      // { name: "Date Assigned", selector: "joined_date", sortable: true },
      // { name: "Remove", selector: "remove" },
    ];

    const classroom_header = [
      { name: "Classroom Name", selector: "classroomName" },
      { name: "Classroom Id", selector: "c_id" },
    ];

    let body = [];
    if (this.state.classrooms && this.state.classrooms !== undefined) {
      body = this.state.classrooms.map((item, index) => {
        return {
          c_id: item.c_id,
          classroomName: item.classroomName,
          // remove: (
          //   <Button
          //     color="danger"
          //     size="sm"
          //     onClick={() => this.RemoveModal(item.c_id, item.classroomName)}
          //   >
          //     Remove
          //   </Button>
          // ),
        };
      });
    }
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
        {/* <Header /> */}
        {/* Page content */}
        
        <Container className="mt-7" fluid>
          <Card >
            <CardHeader style={{justifyContent : "space-between" , zIndex: "5"}} className="col-md-10 py-sm-3 mt-7 mx-auto my-2  d-flex">
              <h1>
                Quiz Details : {this.state.data ? this.state.data.name : ""}
                {this.state.block ? <h5 className="text-danger">Blocked</h5> : (active ? (
                  <h5 className="text-success">Active</h5>
                ) : (
                  <h5 className="text-danger">Inactive </h5>
                ))}
              </h1>
                <a
                    className="mb-3"
                    href={"/workshop/WorkshopEditQuiz?id=" + this.state.data.w_id + "&q_id=" + this.state.quiz_id}
                  >
                    <Button color="primary" className="mb-2">Edit Quiz</Button>
                  </a>
            </CardHeader>
            <CardBody className="col-md-10 py-sm-3 mx-auto">
              {this.state.data && (
                <div >
                
                  {/* <div>
                    <b>Name :</b> {this.state.data.name}
                    <br />
                    <b>Created On :</b> {this.state.data.created_date}
                    <br />
                    <b>From :</b>{" "}
                    {this.state.data.start_date +
                      " " +
                      this.state.data.start_time}
                    <br />
                    <b>To :</b>{" "}
                    {this.state.data.end_date + " " + this.state.data.end_time}
                    <br />
                    <br />
                     <b>Status :</b> {this.state.block ? "Blocked" : "Unblocked"}
                    <br />
                    <b>Quiz Description:</b>
                    <span id="quiz_description"></span>
                    <br />
                  </div> */}
                  <Row style={{justifyContent : "space-between"}}>
                    <Col lg="6">
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="input-username"
                            >
                             <h3>Name</h3>
                            </label>
                            <Input
                              disabled
                              className="form-control-alternative"
                              id="input-username"
                              placeholder="Username"
                              type="text"
                              value={
                                this.state.data.name
                                  ? this.state.data.name
                                  : "null"
                              }
                            />
                          </FormGroup>
                        </Col>
                         <Col lg="6">
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="input-username"
                            >
                             <h3> Created On</h3>
                            </label>
                            <Input
                              disabled
                              className="form-control-alternative"
                              id="input-username"
                              placeholder="Username"
                              type="text"
                              value={
                                this.state.data.created_date
                                  ? this.state.data.created_date
                                  : "null"
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
                             <h3> From :</h3> 
                            </label>
                            <Input
                              disabled
                              className="form-control-alternative"
                              id="input-username"
                              placeholder="Username"
                              type="text"
                              value={
                                this.state.data.start_date +
                      " " +
                      this.state.data.start_time
                                  ? this.state.data.start_date +
                      " " +
                      this.state.data.start_time
                                  : "null"
                              }
                            />
                          </FormGroup>
                        </Col>
                         <Col lg="6">
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="input-username"
                            >
                              <h3>To :</h3>
                            </label>
                            <Input
                              disabled
                              className="form-control-alternative"
                              id="input-username"
                              placeholder="Username"
                              type="text"
                              value={
                                this.state.data.end_date + " " + this.state.data.end_time
                                  ? this.state.data.end_date + " " + this.state.data.end_time
                                  : "null"
                              }
                            />
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
                             <h3> Updated On :</h3> 
                            </label>
                            <Input
                              disabled
                              className="form-control-alternative"
                              id="input-username"
                              
                              type="text"
                              value={
                                this.state.data.updatedon ? this.state.data.updatedon : "Not Yet Updated"
                              }
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
                          </FormGroup>
                        </Col>
                  </Row>
                  <div>
                    <h2>Quiz Data:</h2>
                    {this.state.data.quiz_data && this.state.data.quiz_data.map((item, index) => {
                      return (
                        <div className="shadow p-6 mb-3 bg-white rounded">
                          <b>Question {index + 1}. </b>
                          <span id="question">{ReactHtmlParser(item.question)}</span>
                          <br />
                          <b>Marks: </b> {item.marks}
                          <br />
                          <Row className="mt-3">
                            <ol>
                              {item.options.map((op, Oindex) => {
                                return (
                                  // <Col lg="4" md="6">
                                  <li>{ReactHtmlParser(op)}</li>
                                  // </Col>
                                );
                              })}
                            </ol>
                          </Row>
                          <br />
                          <ol>
                            Correct Answer: {item.correct.map((i, j) => {
                              return (
                                <div key={j}><li> {ReactHtmlParser(item.options[i])}</li></div>
                              )
                            })}
                          </ol>
                          <br />
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

{/*               
              <h3>Assinged In Classrooms:</h3>
              <DataTable
                columns={header}
                data={body}
                pagination={true}
                persistTableHead
              /> */}
              <div className="text-right">
                {/* <Button color="primary" size="md" onClick={this.toggle}>
                  Add Classroom
                </Button> */}
                 <Button color="danger" size="md" onClick={this.toggleblock}>
                {this.state.block ? "Unblock" : "Block"} Quiz
                </Button>
                {/* <Button
                  className="mx-auto"
                  color="danger"
                  size="md"
                  onClick={this.toggleDelete}
                >
                  Delete Quiz
                </Button> */}
              </div>
            </CardBody>
          </Card>
        </Container>
       
       
     
          <Modal isOpen={this.state.blockmodal} toggle={this.toggleblock}>
          <ModalHeader toggle={this.toggleblock}>Block</ModalHeader>
          <ModalBody>Are you sure you want to {this.state.block ? "Unblock" : "Block"} the Quiz!</ModalBody>
          <ModalFooter>
            <Button color="danger" onClick={this.blockquiz}>
             Yes
            </Button>{" "}
            <Button color="secondary" onClick={this.toggleblock}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
        
      </>
    );
  }
}

QuizDetails.layout = Workshop;

export default QuizDetails;
