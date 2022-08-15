// import React from "react";
// import DataTable from "react-data-table-component";
// import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
// import { EditorState } from "draft-js";
// import firebase from "../../config/firebase-tiles";
// import MentorClassroom from "layouts/MentorClassroom.js";
// import ReactHtmlParser from "react-html-parser";

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
//   Form,
//   Input,
//   FormGroup,
//   InputGroup,
// } from "reactstrap";


// // core components
// import Header from "components/Headers/Header.js";
// var yx = [];
// class QuizDetails extends React.Component {
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

//     this.RemoveClass = this.RemoveClass.bind(this);
//     this.RemoveModal = this.RemoveModal.bind(this);
//     this.toggleRemove = this.toggleRemove.bind(this);
//     this.toggle = this.toggle.bind(this);
//     this.assignTask = this.assignTask.bind(this);
//     // this.search = this.search.bind(this);
//     this.onCancel = this.onCancel.bind(this);
//     this.handlesSelectedClassroom = this.handlesSelectedClassroom.bind(this);
//     this.deleteQuiz = this.deleteQuiz.bind(this);
//     this.toggleDelete = this.toggleDelete.bind(this);
//     this.handleTask = this.handleTask.bind(this);
//     this.state = {
//       deleteModal: false,
//       modal: false,
//       removeModel: false,
//       todayDate: todayDate,
//       quiz: [],
//       quiz_id: "",
//       editorState: EditorState.createEmpty(),
//       nowTime: time,
//       // Assigned  In Classroom
//       classrooms: [],
//       classroom: [],
//       search_data: [],
//       add_classroom: [],
//       task: "",
      
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
//             var id = currenturlsearch.get("id");
//             console.log(id);
//             if (id === undefined) {
//               // window.location.href = "/admin/studentSearch";
//             }
//             this.setState({ quiz_id: id });
//             // var x = [];
//             firebase
//               .database()
//               .ref("Quiz/classQ/" + id + "/data")
//               .once("value")
//               .then((snapshot) => {
//                 var x = snapshot.val();
                
//                 if (x) {
//                   this.setState({
//                     data: x,
//                     editorState: x.quiz_desc,
//                     classrooms: x.classrooms,
//                   });

//                   document.getElementById("quiz_description").innerHTML = x.quiz_desc;
//                 }
//               })
//               .then(() => {
//                 var ids = [];
               
//                 if (this.state.data && this.state.data.classrooms) {
//                   this.state.data.classrooms.map((item) => {
                    
//                     ids.push(item);
//                   });
//                 }

              
//                 console.log(ids)
//                 firebase
//                   .database()
//                   .ref("Classroom/")
//                   .once("value")
//                   .then((snapshot) => {
//                     snapshot.forEach(function (childSnapshot) {
//                       var childData = childSnapshot.val();
//                       console.log(childData.data.c_id)
//                       if (childData.data &&  childData.data.c_id == ids) {
//                         yx.push({
//                           c_id: childData.data.c_id,
//                           classroomName: childData.data.classroomName,
//                         });
//                       }

//                     });
                   
//                     // this.setState({ classroom: x });
//                     this.setState({ search_data: yx, classroom: yx, });
//                   });
//               });
//           }
//           else {
//             alert("only mentors allowed ");
//               window.location.href = "/";
//           }
//         })
//     })

//   }

//   handleTask = (e) => {
//     this.setState({ task: e.target.value })
//     var data = this.state.classroom.filter((item) =>
//       item.classroomName.includes(e.target.value)
//     );
//     this.setState({ search_data: data });
//   }
//   // Delete Quiz

//   toggleDelete = () => {
//     this.setState((prevState) => ({ deleteModal: !prevState.deleteModal }));
//   };

//   deleteQuiz = () => {
//     firebase.database().ref("Quiz/classQ/").child(this.state.quiz_id).remove();
//     // Update quiz array in Classrooms
//     this.state.classrooms.length>0 && this.state.classrooms.map((item) => {
//       var z = [];
//       firebase.database()
//         .ref("Classroom/" + item.c_id + "/data/")
//         .once('value')
//         .then((snapshot) => {
//           z = snapshot.val().quiz;
//         }).then(() => {
//           var arr = z.filter(i => i !== this.state.quiz_id);
//           // console.log(z);
//           firebase.database().ref("Classroom/" + item.c_id + "/data/")
//           .update({
//             quiz: arr,
//           })
//         }).then(() => {

//           return null;
//         })
//     });
//     this.toggleDelete();
//     window.location.href = "/mentor/Quiz";
//   };

//   // Assign Task

//   assignTask = () => {
//     var x = [];
//     if (this.state.data.classrooms !== undefined) {
//       x = this.state.data.classrooms;
//     }
//     this.state.selectedRows.map((item) => {
//       x.push(item);
//       return null;
//     });
//     // create new this.state.classroom and search_data 
//     // that do consists the assigned task
//     var ids = [];
//     x.map((item) => {
//       ids.push(item.c_id);
//       return null;
//     });
//     var y = [];
//     y = (this.state.classroom) ? (this.state.classroom.filter(item => !ids.includes(item.c_id))) : [];
//     // Assign new classroom to x
//     // Update Classroom array in Quiz
//     firebase
//       .database()
//       .ref("Quiz/classQ/" + this.state.quiz_id + "/data/")
//       .update({
//         classrooms: x,
//       });

//       // Update quiz array in Classrooms
//       this.state.selectedRows.map((item) => {
//         var z = [];
//         firebase.database()
//           .ref("Classroom/" + item.c_id + "/data/")
//           .once('value')
//           .then((snapshot) => {
//             z = snapshot.val().quiz;
//             console.log(z);
//           }).then(() => {
//             if(z === undefined) { z = []; }
//             z.push(this.state.quiz_id);
//             console.log(z);
//             firebase.database().ref("Classroom/" + item.c_id + "/data/")
//             .update({
//               quiz: z
//             })
//           }).then(() => {

//             return null;
//           })
//       });
//     this.setState({ classrooms: x, classroom: y, search_data: y });
//     alert("Quiz Assigned To Classroom(s)");
//     this.toggle();
//     this.setState({ selectedRows: [] });
//     // window.location.reload();
//   };

//   toggle = () => {
//     this.setState((prevState) => ({ modal: !prevState.modal }));
//   };

//   onCancel = () => {
//     this.toggle();
//     this.setState({ search_data: this.state.classroom });
//   };

//   handlesSelectedClassroom = (state) => {
//     this.setState({ selectedRows: state.selectedRows });
//   };

//   // Remove Classroom Functions
//   toggleRemove = () => {
//     this.setState((prevState) => ({ removeModel: !prevState.removeModel }));
//   };

//   RemoveClass = (c_id, c_name) => {
//     //create newClassrooms that is the selected classrooms
//     var newClassrooms = (this.state.classrooms) ? this.state.classrooms.filter(item => item.c_id !== c_id) : [];
//     //create new array that is the classroom list that will be displayed after removing
//     var y = this.state.classroom;
//     y.push({ c_id, classroomName: c_name});

//     firebase
//       .database()
//       .ref("Quiz/classQ/" + this.state.quiz_id + "/data/")
//       .update({
//         classrooms: newClassrooms,
//       });

//     var z = [];
//     firebase
//       .database()
//       .ref("Classroom/" + c_id + "/data/")
//       .once('value')
//       .then((snapshot) => {
//         z = snapshot.val().quiz;
//       }).then(() => {
//           const a = z.filter(i => i !== this.state.quiz_id);
//           firebase
//             .database()
//             .ref("Classroom/" + c_id + "/data/")
//             .update({
//               quiz : a,
//             })
//       })
//     this.toggleRemove();
//     // alert("Quiz Removed From " + this.state.removeName);
//     this.setState({ classrooms: newClassrooms, classroom: y, search_data: y });
//     // window.location.reload();
//   };

//   RemoveModal = (id, Name) => {
//     this.setState({ removeId: id, removeName: Name });
//     this.toggleRemove();
//   };

//   render() {
//     const header = [
//       { name: "Classroom Id", selector: "c_id" },
//       { name: "Classroom Name", selector: "classroomName", sortable: true },
//       // { name: "Date Assigned", selector: "joined_date", sortable: true },
//       { name: "Remove", selector: "remove" },
//     ];

//     const classroom_header = [
//       { name: "Classroom Name", selector: "classroomName" },
//       { name: "Classroom Id", selector: "c_id" },
//     ];

//     let body = [];
//     console.log(yx)
//     if (this.state.classrooms && this.state.classrooms !== undefined) {
//       body = yx.map((item, index) => {
//         return {
//           c_id: item.c_id,
//           classroomName: item.classroomName,
//           remove: (
//             <Button
//               color="danger"
//               size="sm"
//               onClick={() => this.RemoveModal(item.c_id, item.classroomName)}
//             >
//               Remove
//             </Button>
//           ),
//         };
//       });
//     }
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
//               </h1>
//             </CardHeader>
//             <CardBody className="px-2">
//               {this.state.data && (
//                 <div className="col-md-9 py-sm-3">
//                   <a
//                     className="mb-3"
//                     href={"/MentorClass/EditQuiz?id=" + this.state.quiz_id}
//                   >
//                     <Button color="primary" className="mb-2">Edit Quiz</Button>
//                   </a>
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
//                      <b>Updated On :</b> {this.state.data.updatedon}
//                      <br></br>
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
//                           <b>Correct Option:</b> {item.correct}
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
      
//         <Modal isOpen={this.state.removeModel} toggle={this.toggleRemove}>
//           <ModalHeader toggle={this.toggleRemove}>
//             Remove Task From Classroom
//           </ModalHeader>
//           <ModalBody>
//             Remove the task from the classroom: {this.state.removeName}
//           </ModalBody>
//           <ModalFooter>
//             <Button
//               color="danger"
//               onClick={() => this.RemoveClass(this.state.removeId)}
//             >
//               Remove
//             </Button>{" "}
//             <Button
//               color="secondary"
//               onClick={() => this.setState({ removeModel: false })}
//             >
//               Cancel
//             </Button>
//           </ModalFooter>
//         </Modal>
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

// QuizDetails.layout = MentorClassroom;

// export default QuizDetails;

import React from "react";
import DataTable from "react-data-table-component";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { EditorState } from "draft-js";
import firebase from "../../config/firebase-tiles";
import MentorClassroom from "layouts/MentorClassroom.js";
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
import Header from "components/Headers/Header.js";

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
    this.handleTask = this.handleTask.bind(this);
    this.state = {
      block:false,
      blockmodal:false,
      deleteModal: false,
      modal: false,
      removeModel: false,
      todayDate: todayDate,
      quiz: [],
      quiz_id: "",
      editorState: EditorState.createEmpty(),
      nowTime: time,
      // Assigned  In Classroom
      classrooms: [],
      classroom: [],
      search_data: [],
      add_classroom: [],
      task: "",

    };
  }

  componentDidMount() {
    firebase.auth().onAuthStateChanged((user) => {
      firebase.database().ref(`mentors/${user.uid}`).once("value")
        .then((snap) => {
          var d = snap.val();
          if (d && d.type === 2) {
            var currenturl = window.location.search;
            var currenturlsearch = new URLSearchParams(currenturl);
            var id = currenturlsearch.get("id");
            
            if (id === undefined) {
              window.location.href = "/admin/studentSearch";
            }
            this.setState({ quiz_id: id });
            // var x = [];
            firebase
              .database()
              .ref("Quiz/classQ/" + id + "/data")
              .once("value")
              .then((snapshot) => {
                var x = snapshot.val();
                if (x) {
                  this.setState({
                    data: x,
                    editorState: x.quiz_desc,
                    classrooms: x.classrooms,
                    block:x.block,
                  });

                  document.getElementById("quiz_description").innerHTML = x.quiz_desc;
                }
              })
              .then(() => {
                var ids = [];
                if (this.state.data && this.state.data.classrooms) {
                  this.state.data.classrooms.map((item) => {
                    ids.push(item.c_id);
                  });
                }
                var y = [];
                firebase
                  .database()
                  .ref("Classroom/")
                  .once("value")
                  .then((snapshot) => {
                    snapshot.forEach(function (childSnapshot) {
                      var childData = childSnapshot.val();
                      if (childData.data && !ids.includes(childData.data.c_id)) {
                        y.push({
                          c_id: childData.data.c_id,
                          classroomName: childData.data.classroomName,
                        });
                      }

                    });
                    // this.setState({ classroom: x });
                    this.setState({ search_data: y, classroom: y, });
                  });
              });
          }
          else {
            alert("only mentors allowed ");
            window.location.href = "/";
          }
        })
    })

  }

  handleTask = (e) => {
    this.setState({ task: e.target.value })
    var data = this.state.classroom.filter((item) =>
      item.classroomName.includes(e.target.value)
    );
    this.setState({ search_data: data });
  }
  // bltoggleblock Quiz

 
   toggleblock = () => {
        this.setState((prevState) => ({ blockmodal: !prevState.blockmodal }));

   

        
        
  };

  blockquiz = ()=>{
    this.setState((prevState) => ({ block: !prevState.block }))
    firebase.database().ref("Quiz/" + "/classQ/" + this.state.quiz_id + "/data/")
            .update({
              block: !this.state.block,
            }).then(()=>{
              this.toggleblock();
            })
          ;
  }


  // Assign Task

 

 

  toggle = () => {
    this.setState((prevState) => ({ modal: !prevState.modal }));
  };





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
        <Header />
        {/* Page content */}
        
        <Container className="mt--7" fluid>
          <Card >
            <CardHeader style={{justifyContent : "space-between" , zIndex: "5"}} className="col-md-10 py-sm-3 mx-auto my-2  d-flex">
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
                    href={"/MentorClass/EditQuiz?id=" + this.state.quiz_id}
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
                              placeholder="Username"
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

QuizDetails.layout = MentorClassroom;

export default QuizDetails;
