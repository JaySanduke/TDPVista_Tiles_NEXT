

import React from "react";

import firebase from "../../config/firebase-tiles";
import Admin from "layouts/Admin.js";
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  Container,
  Form,
  FormGroup,
  Input,
  Label,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "reactstrap";
// core components
import { EditorState, convertToRaw, ContentState } from "draft-js";
import dynamic from "next/dynamic"
const Editor = dynamic(
  () => import("react-draft-wysiwyg").then((mod) => mod.Editor),
  { ssr: false }
);
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import draftToHtml from "draftjs-to-html";
// import htmlToDraft from "html-to-draftjs";
const htmlToDraft = typeof window === 'object' && require('html-to-draftjs').default;
import DataTable from "react-data-table-component";

import Header from "components/Headers/admin.js";

import InputGroup from "reactstrap/lib/InputGroup";
import ReactHtmlParser from "react-html-parser";

// import "../AdminStyles/createClassroom.css";

let s;
let p;
class CreateClassroom extends React.Component {
  constructor(props) {
    super(props);
    var today = new Date(),
      dateim =
        today.getFullYear() +
        "-" +
        ((today.getMonth() + 1 < 10 ? "0" : "") + (today.getMonth() + 1)) +
        "-" +
        ((today.getDate() < 10 ? "0" : "") + (today.getDate()));
    var date;
    if (dateim >= 0) { date === dateim };

    this.handleName = this.handleName.bind(this);
    this.handleStartingDate = this.handleStartingDate.bind(this);
    this.handleEndDate = this.handleEndDate.bind(this);
    this.handleClassroomDuration = this.handleClassroomDuration.bind(this);
    this.handleCourseName = this.handleCourseName.bind(this);
    this.handleMentor = this.handleMentor.bind(this);
    this.handleCourse = this.handleCourse.bind(this);
    this.handleAssignedmentors = this.handleAssignedmentors.bind(this);
    this.handleAssignedcourses = this.handleAssignedcourses.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);

    this.deletecourse = this.deletecourse.bind(this);
    //  this.deletementor = this.deletementor.bind(this);

    this.toggle = this.toggle.bind(this);
    this.togglecourse = this.togglecourse.bind(this);
    this.state = {
      Description: "",
      classroomName: "",
      created_date: date,
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
      mentortemp: [],
      modal: false,
      modalcourse: false,
      selectedData: [],
      editorState: EditorState.createEmpty(),
      m_id: "",
      s: [],
      p: [],
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
                starting_date: data.starting_date,
                end_date: data.end_date,
                assignedmentors: (data.mentor) ? data.mentor : [],
                s: data.courses,
                p: data.mentor,

                classroomName: data.classroomName,
                Description: data.Description,
                assignedcourses: data.courses,

              })
              const blocksFromHtml = htmlToDraft(data.Description);
              const { contentBlocks, entityMap } = blocksFromHtml;
              const contentState = ContentState.createFromBlockArray(
                contentBlocks,
                entityMap
              );
              const editorState = EditorState.createWithContent(contentState);
              this.setState({ editorState: editorState });
            })

            var x = [];
            firebase
              .database()
              .ref("mentors/")
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

                console.log(x);



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
                  // console.log(childDatacourse)
                });
                var datacourse = snapshot.val();
                if (datacourse) {
                  this.setState({
                    Courses: y,
                  });
                }
                // 
              });


          }
          else {
            alert("only admins allowed ");
            window.location.href = "/";
          }
        })
    })



  }




  handleName = (e) => {
    this.setState({ classroomName: e.target.value });
  };
  handleDescription = (e) => {
    this.setState({ Description: e.target.value });
  };

  handleStartingDate = (e) => {
    this.setState({ starting_date: e.target.value });
  };

  handleEndDate = (e) => {
    this.setState({ end_date: e.target.value });
  };

  handleClassroomDuration = (e) => {
    this.setState({ classroom_duration: e.target.value });
  };

  handleCourseName = (e) => {
    this.setState({ courseName: e.target.value });
  };

  handleMentor = (e) => {
    this.setState({ mentor: e.target.value });
  };
  handleCourse = (e) => {
    this.setState({ course: e.target.value });
  };

  toggle = () => {
    this.setState((prevState) => ({ modal: !prevState.modal }));
  };
  togglecourse = () => {
    this.setState((prevState) => ({ modalcourse: !prevState.modalcourse }));
  };



  onEditorStateChange = (editorState) => {
    this.setState({
      editorState,
    });
  };




  handleSubmit = (e) => {
    e.preventDefault();
    if (true) {
      const db = firebase.database();
      const value = draftToHtml(
        convertToRaw(this.state.editorState.getCurrentContent())
      )

      if (
        value === null ||
        value === undefined ||
        value === EditorState.createEmpty() ||
        value.trim() === "<p></p>"
      ) {
        alert("Enter Task Description properly!");
      }


      // const ref = db.ref("Classroom/");
      // const a = ref.update({
      //  ,
      // })




     
      db.ref("Classroom/" + this.state.c_id )
        .update({
          data: {
            classroomName: this.state.classroomName,
            Description: value,
            starting_date: this.state.starting_date,
            end_date: this.state.end_date,
            classroom_duration: this.state.classroom_duration,
  
            courseName: this.state.courseName,
            mentor: this.state.assignedmentors,
            courses: this.state.assignedcourses,
            c_id:  this.state.c_id,
          }
          
        })
        .then(() => {
          alert("Classroom Updated Successfully!");
          window.location.href = "/admin/classroom";
        });
    }
  };



  handleChange = (state) => {

    this.state.s = (state.selectedRows)
    // console.log(s);
    return s;
  }

  handleChangeMentors = (state) => {
    this.state.p = (state.selectedRows)
    // p.map((item,Index) => {
    //   if(item.m_id != state.selectedRows.m_id){


    //   }
    // })


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

    const { editorState } = this.state;

    const column = [
      { name: "Mentor ID", selector: "m_id", sortable: true },
      { name: "Username", selector: "username" },
      { name: "Email", selector: "email" },
      { name: "Expertise", selector: "expertise" },
    ];

    const body = this.state.Mentors.map((item) => {
      return {
        m_id: item.m_id,
        username: item.fname + " " + item.lname,
        email: item.email,
        expertise: item.expertise,
      };
    });

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
        expertise: item.eduDetails,

        removebtn: (

          <Button size="sm" onClick={() => this.deletementor(item.m_id)} color="danger">

            remove

          </Button>)
      };
    });

    //data of Datatable of Courses modal
    const columncourses = [
      { name: "Course ID", selector: "c_id", sortable: true },
      { name: "Course Name", selector: "course_title" },
      { name: "Description", selector: "Description" },
      { name: "Start Date", selector: "start_data" },
      { name: "End Date", selector: "end_date" },
    ];

    let bodycourses = this.state.Courses.map((item) => {
      return {
        c_id: item.c_id,
        course_title: item.course_title,
        Description: item.Description,
        start_data: item.start_data,
        end_date: item.end_date,
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
    console.log(s)




    var d1 = new Date(this.state.starting_date);
    var d2 = new Date(this.state.end_date);
    var diff = d2.getTime() - d1.getTime();
    var daydiff = 0;
    daydiff = diff / (1000 * 60 * 60 * 24);

    var week = parseInt(daydiff / 7);
    if (week <= 1) {
      var w = " Week, ";
    }
    else {
      w = " Weeks, "
    }
    var day = parseInt(daydiff % 7);
    if (day <= 1) {
      var d = " Day";
    }
    else {
      d = " Days"
    }

    if (week === 0) {
      var duration = day + d;
    }
    else if (day === 0) {
      duration = week + " Weeks";
    }
    else if (week < 0 || day < 0) {
      duration = "Please check the End Date";
    }
    else {
      duration = week + w + day + d;
    }
    this.state.classroom_duration = duration;

    return (
      <>
        <Header />
        {/* Page content */}
        <Container className="mt--7" fluid>
          <Card>
            <CardHeader>
              <h1>Update Classroom </h1>
            </CardHeader>
            <CardBody>
              <Form role="form" >
                <FormGroup>
                  <Label for="classroomName">Classroom Name</Label>
                  <InputGroup className="input-group-alternative classroomName">
                    <Input
                      required
                      placeholder="Enter classroom Name"
                      id="classroomName"
                      type="text"
                      value={this.state.classroomName}
                      onChange={this.handleName}
                    />
                  </InputGroup>
                </FormGroup>
                <FormGroup>
                  <Label for="Description">Description</Label>
                  <div className="" id="descEdit">
                    <Editor
                      editorState={editorState}
                      wrapperClassName="demo-wrapper"
                      editorClassName="demo-editor"
                      onEditorStateChange={this.onEditorStateChange}
                      value={this.state.editorState}
                      required
                      editorStyle={{

                        border: "1px solid",
                        padding: "10px",
                      }}
                    />
                  </div>
                </FormGroup>
                <FormGroup>
                  <Label for="StartingDate">Starting Date</Label>
                  <InputGroup className="input-group-alternative mb-3">
                    <Input
                      min={this.state.created_date}
                      required
                      placeholder
                      id="StartingDate"
                      type="date"
                      value={this.state.starting_date}
                      onChange={this.handleStartingDate}
                    />
                  </InputGroup>
                </FormGroup>
                <FormGroup>
                  <Label for="EndDate">End Date</Label>
                  <InputGroup className="input-group-alternative mb-3">
                    <Input
                      min={this.state.starting_date !== "" ? this.state.starting_date : this.state.end_date}
                      required
                      placeholder
                      id="EndDate"
                      type="date"
                      value={this.state.end_date}
                      onChange={this.handleEndDate}
                    />
                  </InputGroup>
                </FormGroup>

                <FormGroup>
                  <Label for="ClassroomDuration">Classroom Duration</Label>
                  <InputGroup className="input-group-alternative text-muted duration mb-3">
                    <Input
                      disabled
                      required
                      placeholder="Classroom Duration"
                      id="duration"
                      type="text"
                      value={(this.state.starting_date !== "" && this.state.end_date !== "") ? (this.state.classroom_duration) : ""}
                      onChange={this.handleClassroomDuration}
                    />
                  </InputGroup>
                </FormGroup>


                <FormGroup className="w-100">
                  <div>Courses</div>

                  <div className="d-block w-100">
                    {this.state.assignedcourses[0] && <DataTable
                      title="Assigned Courses"
                      columns={columnCoursesTable}
                      data={bodyCoursesTable}




                      pagination={true}

                      persistTableHead
                    // progressComponent={<LinearIndeterminate />}
                    />}
                  </div>
                  <div className="d-block p-0 mt-4">
                    <Button className="" color="primary" onClick={this.togglecourse}>
                      Select Courses
                    </Button>
                  </div>
                  <Modal isOpen={this.state.modalcourse} toggle={this.togglecourse} style={{ width: '70vw' }}>
                    <ModalHeader className="" toggle={this.togglecourse}>
                      Add Courses
                    </ModalHeader>
                    <ModalBody className="mt-0 pt-0">
                      <DataTable
                        title="Courses"
                        selectableRows
                        onSelectedRowsChange={this.handleChange}

                        columns={columncourses}
                        data={bodycourses}
                        pagination={true}
                        selectableRowsSingle selectableRowsComponentProps={{ type: 'radio' }}

                        persistTableHead
                      // progressComponent={<LinearIndeterminate />}
                      />
                    </ModalBody>
                    <ModalFooter>
                      <Button
                        color="success"

                        onClick={this.handleAssignedcourses}

                      >
                        Add
                      </Button>{" "}
                      <Button color="secondary" onClick={() => this.setState({ modalcourse: false })}>
                        Cancel
                      </Button>
                    </ModalFooter>
                  </Modal>

                  {/* </InputGroup> */}
                </FormGroup>
                <FormGroup className="w-100">
                  <div>Mentors</div>
                  {/* <InputGroup className="input-group-alternative duration mb-3"> */}
                  <div id="" className="d-block w-100">
                    {this.state.assignedmentors[0] && <DataTable
                      title="Assigned Mentors"

                      columns={column1}
                      data={body1}
                      pagination={true}

                      persistTableHead

                    />}
                  </div>
                  <div className="d-block p-0 mt-4">
                    <Button className="" color="primary" onClick={this.toggle}>
                      Add Mentors
                    </Button>
                  </div>
                  <Modal isOpen={this.state.modal} toggle={this.toggle}>
                    <ModalHeader className="" toggle={this.toggle}>
                      Add Mentors
                    </ModalHeader>
                    <ModalBody className="mt-0 pt-0">
                      <DataTable
                        title="Mentors"
                        selectableRows
                        clicked
                        onSelectedRowsChange={this.handleChangeMentors}
                        columns={column}
                        data={body}
                        pagination={true}
                        // progressPending={this.state.pending}
                        persistTableHead
                      // progressComponent={<LinearIndeterminate />}
                      />
                    </ModalBody>
                    <ModalFooter>
                      <Button
                        color="success"
                        onClick={this.handleAssignedmentors}
                      >
                        Add
                      </Button>{" "}
                      <Button color="secondary" onClick={() => this.setState({ modal: false })}>
                        Cancel
                      </Button>
                    </ModalFooter>
                  </Modal>

                  {/* </InputGroup> */}
                </FormGroup>
                <div className="text-center">
                  <Button className="mt-4" color="primary" type="submit" onClick={this.handleSubmit}>
                    Update Classroom
                  </Button>
                </div>
              </Form>
            </CardBody>
          </Card>
        </Container>
      </>

    );

  }

}
CreateClassroom.layout = Admin;
export default CreateClassroom;
