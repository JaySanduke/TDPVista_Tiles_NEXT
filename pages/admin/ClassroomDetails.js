import React from "react";

import firebase from "../../config/firebase-tiles";

import DataTable from "react-data-table-component";
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  Container,
  Form,
  Input,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "reactstrap";
// core components
import Admin from "layouts/Admin.js";
import Header from "components/Headers/admin.js";
import ReactHtmlParser from "react-html-parser";
import { EditorState, convertToRaw } from "draft-js";

class ClassroomDetails extends React.Component {
  constructor(props) {
    super(props);

    // this.handleSubmit = this.handleSubmit.bind(this);
    this.toggleBlock = this.toggleBlock.bind(this);
    this.blockAct = this.blockAct.bind(this);
    this.state = {

      classroomData: [],
      Description: "",
      classroomName: "",

      c_id: "",
      mentor: [],
      courses: [],
      starting_date: "",
      end_date: "",
      courseName: "",
      classroom_duration: "",
      Mentors: [],
      Courses: [],
      assignedmentors: [],
      assignedcourses: [],
      editorState: EditorState.createEmpty(),
      coverimg:'',
      s: [],
      p: [],
      BLOCKED: [],

    }
  }
  componentDidMount() {

    firebase.auth().onAuthStateChanged((user) => {
      firebase.database().ref(`Admin/${user.uid}`).once("value")
        .then((snap) => {
          var d = snap.val();
          if (d && d.type === 1) {
            var currenturl = window.location.search;
            var currenturlsearch = new URLSearchParams(currenturl);
            var c_id = currenturlsearch.get("c_id");
            if (c_id === undefined) {
              window.location.href = "/admin/classroom";
            }
            this.setState({ c_id: c_id });


            var tts = this;
            firebase.database().ref("Classroom/" + c_id + "/data/").once("value").then((snapshot) => {
              var data = snapshot.val();
              console.log(data)
              tts.setState({
                classroomData: data,
                starting_date: data.starting_date,
                end_date: data.end_date,
                assignedmentors: (data.mentor) ? data.mentor : [],
                s: data.courses,
                p: data.mentor,
                coverimg:data.profilepic,
                classroomName: data.classroomName,

                assignedcourses: data.courses,
                editorState: data.Description,
              })


            })




            var ttsp = this;
            firebase.database().ref("Classroom/" + c_id).once("value").then((snapshot) => {
              var datap = snapshot.val();
              console.log(datap)
              ttsp.setState({
                BLOCKED: datap,

              })
            })


            var x = [];
            firebase
              .database()
              .ref("Mentors/")
              .once("value")
              .then((snapshot) => {
                snapshot.forEach(function (childSnapshot) {
                  var childData = childSnapshot.val();
                  x.push(childData);

                });
                var data = snapshot.val();
                if (data) {
                  this.setState({
                    Mentors: x,
                  });
                }

              });

            var y = [];
            firebase
              .database()
              .ref("Courses/")
              .once("value")
              .then((snapshot) => {
                snapshot.forEach(function (childSnapshot) {
                  var childDatacourse = childSnapshot.val();
                  y.push(childDatacourse);

                });
                var datacourse = snapshot.val();
                if (datacourse) {
                  this.setState({
                    Courses: y,
                  });
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






  // Block Modal
  toggleBlock = () => {
    this.setState((prevState) => ({ blockModal: !prevState.blockModal }));
  }

  blockAct = () => {
    if (this.state.BLOCKED.blocked) {
      firebase.database().ref("Classroom/" + this.state.c_id).child("blocked").remove();
      this.toggleBlock();
    }


    else {
      firebase.database().ref("Classroom/" + this.state.c_id).update({
        blocked: 1,
      })
      this.toggleBlock();
    }
    window.location.reload();
  }


  handleChange = (state) => {

    this.state.s = (state.selectedRows)
    // console.log(s);
    return s;
  }

  handleChangeMentors = (state) => {
    this.state.p = (state.selectedRows)



    return p;
  }

  handleAssignedmentors = (state) => {


    var data = this.state.Mentors;
    this.state.assignedmentors = this.state.p;



    this.setState((prevState) => ({ modal: !prevState.modal }));
  }


  handleAssignedcourses = (state) => {


    let datap = this.state.Courses;

    datap.map((item, index) => {
      return (
        this.state.s.map(item2 => {
          if (item.c_id === item2.c_id) {

            this.state.assignedcourses = this.state.s;

          }


          return null;
        })
      )
    })
    var spdata = datap;
    this.setState({
      Courses: spdata,

    });

    this.setState((prevState) => ({ modalcourse: !prevState.modalcourse }));
  }

  deletecourse = (state) => {


    this.state.s.map((item, index) => {

      this.state.assignedcourses.map((item2, index) => {

        if (item.c_id === item2.c_id) {
          console.log(this.state.s);
          this.setState({
            assignedcourses: this.state.s.splice(1, 1),
          })

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
  }




  render() {
    const {
      Content
    } = this.state;



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
      <>
        <Header />
        {/* Page content */}
        <Container className="mt--7" fluid>
          <Card>
            <CardHeader>
              <h1>Classroom</h1>
            </CardHeader>
            <CardBody className="px-2">
              <div className="row align-items-center">
                <div className="align-items-center col-md-3 justify-content-center">
<img style={{width:'100%',height:"100%"}} src={this.state.coverimg}></img>
                </div>
                <div className="col-md-9 py-sm-3">
                  <b>Title :</b> {this.state.classroomName}
                  <br />

                  <b>Decription :</b> <span id="Description"></span>

                  <b>User Id :</b> {this.state.c_id} <br />
                  <b>Starting Date :</b> {this.state.starting_date}
                  <br />
                  <b>Ending Date :</b> {this.state.end_date}
                  <br />
                </div>
              </div>
              <br />



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
              <div className="text-right d-flex justify-content-end">

                {!this.state.BLOCKED.blocked ? (<Button color="danger" size='md' onClick={this.toggleBlock}>Block</Button>) : (<Button color="success" size='md' onClick={this.toggleBlock}>Unblock</Button>)}

              </div>
            </CardBody>
          </Card>
          <Modal isOpen={this.state.blockModal} toggle={this.toggleBlock}>
            <ModalHeader toggle={this.toggleBlock}>{!this.state.BLOCKED.blocked ? "Block" : "Unblock"}</ModalHeader>
            <ModalBody>
              {!this.state.BLOCKED.blocked ? "Block" : "Unblock"} the user
            </ModalBody>
            <ModalFooter>
              {!this.state.BLOCKED.blocked ? (<Button color="danger" size='md' onClick={this.blockAct}>Block</Button>) : (<Button color="success" size='md' onClick={this.blockAct}>Unblock</Button>)}
              <Button color="secondary" onClick={this.toggleBlock}>
                Cancel
              </Button>
            </ModalFooter>
          </Modal>
        </Container>
      </>
    );
  }
}

ClassroomDetails.layout = Admin;

export default ClassroomDetails;