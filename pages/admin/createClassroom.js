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

import DataTable from "react-data-table-component";
import Router from "next/router";
import Header from "components/Headers/admin.js";

import InputGroup from "reactstrap/lib/InputGroup";

import dynamic from "next/dynamic"
const Editor = dynamic(
  () => import("react-draft-wysiwyg").then((mod) => mod.Editor),
  { ssr: false }
);
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {

    faWindowClose,
} from "@fortawesome/free-solid-svg-icons";
import { EditorState, convertToRaw } from "draft-js";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import draftToHtml from "draftjs-to-html";
import ReactHtmlParser from "react-html-parser";
// const htmlToDraft = typeof window === 'object' && require('html-to-draftjs').default;


import course from 'assets/img/courses/1.png'

import Lottie from 'react-lottie';
  //  import rocket  from '../../assets/lottie/72284-rocket-animation.json'
   import rocket  from '../../assets/lottie/9764-loader.json'
// Images

import c from "assets/img/pngegg.png";

import getCroppedImg from "utils/cropImage";
import Cropper from "react-easy-crop";
import "../../assets/css/cropper.css"
// import "../AdminStyles/createClassroom.css";

let s;
let p;

class CreateClassroom extends React.Component {
  constructor(props) {
    super(props);
    var today = new Date(),
      date =
        today.getFullYear() +
        "-" +
        ((today.getMonth() + 1 < 10 ? "0" : "") + (today.getMonth() + 1)) +
        "-" +
        ((today.getDate() < 10 ? "0" : "") + (today.getDate()));


    this.handleName = this.handleName.bind(this);
    this.handleStartingDate = this.handleStartingDate.bind(this);
    this.handleEndDate = this.handleEndDate.bind(this);
    this.handlePrice = this.handlePrice.bind(this);

    this.handleClassroomDuration = this.handleClassroomDuration.bind(this);
    this.handleCourseName = this.handleCourseName.bind(this);
    this.handleMentor = this.handleMentor.bind(this);
    this.handleCourse = this.handleCourse.bind(this);
    this.handleAssignedmentors = this.handleAssignedmentors.bind(this);
    this.handleAssignedcourses = this.handleAssignedcourses.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);

    this.deletecourse = this.deletecourse.bind(this);
    this.deletementor = this.deletementor.bind(this);

    this.toggle = this.toggle.bind(this);
    this.togglecourse = this.togglecourse.bind(this);


    this.setCropFunction = this.setCropFunction.bind(this);
    this.setZoomFunction = this.setZoomFunction.bind(this);
    this.onCropCompleteFunction = this.onCropCompleteFunction.bind(this);
    this.getNewImg = this.getNewImg.bind(this);
    this.uploadNewProfilePic = this.uploadNewProfilePic.bind(this);

    this.state = {
      Description: "",
      classroomName: "",
      created_date: date,
      c_id: "",
      mentor: "",
      courses: "",
      starting_date: "",
      end_date: "",
      classroom_duration: "",
      Mentors: [],
      Courses: [],
      price: '',
      assignedmentors: [],
      assignedcourses: [],
      mentortemp: [],
      modal: false,
      modalcourse: false,
      selectedData: [],
      editorState: EditorState.createEmpty(),
      s: [],
      p: [],
      profilepic: {course},
      newprofilepic: null,
      mentorModal: false,
      submitModal: false,
      Modal: false,
      profile: '',
      croppedArea: null,
      croppedAreaPixels: null,
      crop: {
        x: 0,
        y: 0,
        width: 250,
        height: 250,
      },
      zoom: 1,
      createloader:false,

    };
  }



  componentDidMount() {
    firebase.auth().onAuthStateChanged((user) => {
      firebase.database().ref(`Admin/${user.uid}`).once("value")
        .then((snap) => {
          var d = snap.val();
          if (d && d.type === 1) {
            var x = [];
            firebase
              .database()
              .ref("mentors/")
              .once("value")
              .then((snapshot) => {
                snapshot.forEach(function (childSnapshot) {
                  var childData = childSnapshot.val();
                  x.push(childData);
                  // console.log(childData)
                });
                var data = snapshot.val();
                if (data) {
                  this.setState({
                    Mentors: x,
                  });
                }
                // console.log(x);
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
                // console.log(x);
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
  handlePrice = (e) => {
    this.setState({ price: e.target.value });
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

  getNewImg = (e) => {
    this.setState({
      newprofilepic: URL.createObjectURL(e.target.files[0]),
    });
    this.setState({ mentorModal: true });

  };

  setCropFunction = (newcrop) => {
    this.setState({
      crop: newcrop,
    });
  };
  setZoomFunction = (newzoom) => {
    this.setState({
      zoom: newzoom,
    });
  };
  onCropCompleteFunction = (croppedArea, croppedAreaPixels) => {
    this.setState({
      croppedArea: croppedArea,
      croppedAreaPixels: croppedAreaPixels,
    });

  };
  uploadNewProfilePic = () => {
    getCroppedImg(
      this.state.newprofilepic,
      this.state.croppedAreaPixels,
      0
    ).then((result) => {
      this.setState({
        newprofilepic: null,
        profilepic: result,
      })
    }).then(() => {
      console.log(this.state.profilepic);
    })
  };


  toggleMentor = () => {
    if (this.state.mentorModal) {
      console.log("Modal Close");
      this.setState({
        mentorModal: false,
      });
    } else {
      console.log("Modal Open");
      this.setState({
        mentorModal: true,

      });
    }
  };

  // openModal = () =>{

  //     this.setState({mentorModal: true});
  // }==]





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
    const value =
      this.state.editorState &&
      draftToHtml(convertToRaw(this.state.editorState.getCurrentContent()));
    if (
      value === null ||
      value === undefined ||
      value === EditorState.createEmpty() ||
      value.trim() === "<p></p>"
    ) {
      alert("Enter Task Description properly!");
    }
    this.setState({createloader: true});

    const db = firebase.database();
    const ref = db.ref("Classroom/");
    const a = ref.push({
      data: {
        classroomName: this.state.classroomName,
        Description: value,
        starting_date: this.state.starting_date,
        end_date: this.state.end_date,
        classroom_duration: this.state.classroom_duration,
        created_date: this.state.created_date,
        mentor: this.state.assignedmentors,
        courses: this.state.assignedcourses,
        price:this.state.price,
        c_id: "",
        profilepic:"",
      },
    });

    const id = a.key;

    this.state.assignedmentors.map((item) => {
      firebase.database().ref(`mentors/${item.m_id}`).once("value").then((snapshot) => {
        var data = snapshot.val();
        var x = (data.classrooms) ? data.classrooms : [];
        x.push(id);
        firebase.database().ref(`mentors/${item.m_id}`).update({
          classrooms: x,
        })
      }).then(() => {
        return null;
      })
    })



   




  


      firebase
      .storage()
      .ref("Classroom/" + id + "/cover.jpeg")
      .putString(this.state.profilepic, "data_url")
      .then((snapshot) => {

        firebase
          .storage()
          .ref("Classroom")
          .child(id + "/cover.jpeg")
          .getDownloadURL()
          .then((urls) => {

            const db = firebase.database();
            db.ref("Classroom/" + id + "/data/")
              .update({
                profilepic: urls,
              })

          })
      }).then(()=>{
          db.ref("Classroom/" + id + "/data/")
      .update({
        c_id: id,
      })
      })
      .then(() => {
        this.setState({createloader: false});
        Router.push("/admin/classroom");
      });


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
console.log(this.state.assignedcourses);

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
    const defaultOptions = {
      loop: true,
      autoplay: true, 
      animationData: rocket,
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
      }
    };

    //data of Datatable of mentor modal
    const column = [
      { name: "Mentor ID", selector: "m_id", sortable: true },
      { name: "Username", selector: "username" },
      { name: "Email", selector: "email" },
      { name: "Expertise", selector: "expertise" },
    ];
    ``
    const body = this.state.Mentors.map((item) => {
      return {
        m_id: item.m_id ? item.m_id : item.uid,
        username: item.name,
        email: item.email,
        expertise: item.eduDetails,
      };
    });

    //Data of datatable of modal
    const column1 = [
      { name: "username", selector: "username", sortable: true },
      { name: "Email", selector: "email" },
      { name: "Expertise", selector: "expertise" },
      { name: "", selector: "removebtn" },


    ];

    const body1 = this.state.assignedmentors.map((item) => {
      return {
        username: item.username,
        email: item.email,
        expertise: item.expertise,
        removebtn: (
          <Button size="sm" onClick={() => this.deletementor(item.m_id)} color="danger">
            Remove
          </Button>
        ),
      };
    });
    //data of Datatable of Courses modal
    const columncourses = [
      { name: "Cover Image", selector: "coverimg" },
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
         coverimg:(item.attachments ? item.attachments[0].url: "No Image Available"),
      };
    });



    //Data of datatable of courses modal
    const columnCoursesTable = [
      { name: "CourseName", selector: "course_title" },
      { name: "Description", selector: "Description" },
      { name: "StartDate", selector: "start_data" },
      { name: "EndDate", selector: "end_date" },
      { name: "Cover Image", selector: "coverimg" },
      { name: "", selector: "removebtn" },

    ];

    let bodyCoursesTable = this.state.assignedcourses.map((item) => {

      return {
        course_title: item.course_title,
        Description: item.Description,
        start_data: item.start_data,
        end_date: item.end_date,
        coverimg:(item.attachments ? item.attachments[0].url : "No Image Available"),

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
        
        {this.state.newprofilepic ? (
                    <>
                        <Modal isOpen={this.state.mentorModal} toggle={this.toggleMentor}>
                            <Card className="cropperCard" style={{ width: '800px', height: "80vh", alignItems: "center", marginRight: "100px", justifyContent:"center" , position:'relative'}}>
                                {/* <CardHeader> */}
                                <Button size="lg" onClick={this.toggleMentor} style={{ position: "absolute", top: "0", left: "0", margin: "5px" }}>
                                    <FontAwesomeIcon
                                        icon={faWindowClose}
                                        style={{
                                            color: "rgb(185, 185, 185)",
                                            marginLeft: "auto",
                                            cursor: "pointer",
                                            fontSize: "20px",
                                            zIndex:'100',
                                        }}
                                    />
                                </Button>
                                {/* </CardHeader> */}
                                <div className="imgCropperParentDiv">
                                    <Cropper
                                        className="cropperClass"
                                        image={this.state.newprofilepic}
                                        crop={this.state.crop}
                                        zoom={this.state.zoom}
                                        aspect={1 / 1}
                                        onCropChange={this.setCropFunction}
                                        onCropComplete={this.onCropCompleteFunction}
                                        onZoomChange={this.setZoomFunction}
                                    />
                                   
                                </div>
 <Button color="primary" className="cancel" onClick={this.uploadNewProfilePic}>
                                        Upload
                                    </Button>
                                {/* </CardFooter> */}
                            </Card>
                        </Modal>
                    </>
                ) : null}
        {/* Page content */}

        {this.state.createloader ?  <Lottie options={defaultOptions}
              height={300}
              width={300}></Lottie> :
        <Container className="mt--7" fluid>
          <Card>
            <CardHeader>
              <h1>Create Classroom </h1>
            </CardHeader>
            <CardBody>
              <Form role="form" >
                <FormGroup>
                  <Label htmlFor="classroomName">Classroom Name</Label>
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
                  <Label htmlFor="Description">Description</Label>
                  <Editor
                    editorState={this.state.editorState}
                    toolbarClassName="toolbar-class"
                    wrapperClassName="wrapper-class"
                    onEditorStateChange={this.onEditorStateChange}
                    editorStyle={{
                      width: "100%",

                      border: "1px solid",
                      padding: "0 10px",
                    }}
                  />
                </FormGroup>
                <FormGroup>
                  <Label htmlFor="StartingDate">Starting Date</Label>
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
                  <Label htmlFor="EndDate">End Date</Label>
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
                  <Label htmlFor="Price">Price (in &#8377;)</Label>
                  <InputGroup className="input-group-alternative mb-3">
                    <Input
                      required
                      placeholder='0'
                      id="Price"
                      type="number"
                      value={this.state.price}
                      onChange={this.handlePrice}
                    />
                  </InputGroup>
                </FormGroup>
                {/* <p>
                  <b>Date Of Creation</b>
                  <br />
                  {this.state.created_date}
                </p> */}
                <FormGroup>
                  <Label htmlFor="ClassroomDuration">Classroom Duration</Label>
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
                  {/* <InputGroup className="input-group-alternative duration mb-3"> */}
                  <div className="d-block w-100">
                    {this.state.assignedcourses[0] && <DataTable
                      title="Assigned Courses"
                      columns={columnCoursesTable}
                      data={bodyCoursesTable}

                      // onSelectedRowsChange={this.deletecourse}


                      pagination={true}
                      // progressPending={this.state.pending}
                      persistTableHead
                    // progressComponent={<LinearIndeterminate />}
                    />}
                  </div>
                  <div className="d-block p-0 mt-4">
                    <Button className="" color="primary" onClick={this.togglecourse}>
                      Select Courses
                    </Button>
                  </div>
                  <Modal isOpen={this.state.modalcourse} toggle={this.togglecourse} style={{ width: '100vw' }}>
                    <ModalHeader className="" toggle={this.togglecourse}>
                      Add Courses
                    </ModalHeader>
                    <ModalBody className="mt-0 pt-0">
                      <DataTable
                      width='20%'
                        title="Courses"
                        selectableRows
                        onSelectedRowsChange={this.handleChange}

                        columns={columncourses}
                        data={bodycourses}
                        pagination={true}
                        selectableRowsSingle selectableRowsComponentProps={{ type: 'radio' }}
                        // progressPending={this.state.pending}
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
                      // onSelectedRowsChange={updateState}                         
                      columns={column1}
                      data={body1}

                      pagination={true}
                      // progressPending={this.state.pending}
                      persistTableHead
                    // progressComponent={<LinearIndeterminate />}
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
                <div>
                  <FormGroup>
                    <label htmlFor="exampleFile">Cover Photo</label>
                    <Input
                      id="exampleFile"
                      name="file"
                      type="file"
                      onChange={this.getNewImg}
                    />


                    <img
                      alt="..."
                      id="profile"
                      style={{
                        width: "100px",
                        height: "100px",
                        margin: "0 20px",
                      }}
                      src={this.state.profilepic ? this.state.profilepic : course}
                    />
                  </FormGroup>
                </div>
                <div className="text-center">
                  <Button className="mt-4" color="primary" type="submit" onClick={this.handleSubmit}>
                    Create Classroom
                  </Button>
                </div>
              </Form>
            </CardBody>
          </Card>
        </Container>

                    }
      </>

    );

  }

}
CreateClassroom.layout = Admin;
export default CreateClassroom;
