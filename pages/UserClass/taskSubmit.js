import React from "react";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { EditorState } from "draft-js";
import firebase from "../../config/firebase-tiles";
import ReactHtmlParser from "react-html-parser";
import DocumentMeta from "react-document-meta";

import getCroppedImg from "utils/cropImage";
import Cropper from "react-easy-crop";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  Container,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  FormGroup,
  InputGroup,
  Label,
  Input,
  Row,
  Col,
} from "reactstrap";
import {

  faWindowClose,
} from "@fortawesome/free-solid-svg-icons";
// core components
import Header from "components/Headers/UserClassDashboard.js";
import User from 'layouts/UserClassroom.js';
import "../../assets/css/cropper.css"


class taskSubmit extends React.Component {
  constructor(props) {
    super(props);
    var today = new Date(),
      todayDate =
        today.getFullYear() +
        "-" +
        ((today.getMonth() + 1 < 10 ? "0" : "") + (today.getMonth() + 1)) +
        "-" +
        ((today.getDate() < 10 ? "0" : "") + today.getDate());


    // this.RemoveModal = this.RemoveModal.bind(this);
    // this.deleteTask = this.deleteTask.bind(this);
    // this.toggleDelete = this.toggleDelete.bind(this);
    this.state = {
      user_name: "",
      c_id: "",
      today: todayDate,
      modal: false,
      removeModel: false,
      deleteModal: false,
      data: [],
      task_id: "",
      desc: "",
      // this.props.location.state !== undefined
      //   ? this.props.location.state.id
      //   : "",
      editorState: EditorState.createEmpty(),
      // Assigned in Classrooms
      attachment: [],
      urls: [],
      disabled:false,
      // Cropper
      inputFileData: null,
      inputTextFileData: null,
      inputFileObject: null,
      croppedAreaPixels: null,
      crop: {
        x: 0,
        y: 0,
        width: 250,
        height: 250,
      },
      zoom: 1,
      inputData: null,
      uid: "",
      SubmittedTask: [],
      progress: 0,
      mentorModal: false,
      displayProgress:'none',
    };
  }


  // Cropper

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

  deleteAttachment = (index, name) => {
    firebase
      .storage()
      .ref("TaskSubmit/classT/" + this.state.c_id + "/" + this.state.task_id + "/" + this.state.uid + "/attachments/")
      .child(name).delete();
    var s = this.state.urls;
    s.splice(index, 1);
    this.setState({ urls: s });
  }

  uploadNewProfilePic = () => {
    getCroppedImg(
      this.state.inputFileData,
      this.state.croppedAreaPixels,
      0
    ).then((result) => {
      var img = this.state.inputFileObject;
      var fileName = img.name;
      this.setState({
        inputFileData: null,
        inputData: result,
      });
      // var id = this.state.task_id
      //   ? this.state.task_id
      //   : firebase.database().ref().push().key;
      // if (!this.state.task_id) {
      //   this.setState({ task_id: id });
      // }

      firebase
        .storage()
        .ref("TaskSubmit/classT/" + this.state.c_id + "/" + this.state.task_id + "/" + this.state.uid + "/attachments/" + fileName)
        .put(img)
        .on('state_changed', (snapshot)=>{
          var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          this.setState({progress: progress});
     console.log('Upload is ' + progress + '% done');
        })
      firebase
        .storage()
        .ref("TaskSubmit/classT/" + this.state.c_id + "/" + this.state.task_id + "/" + this.state.uid + "/attachments/" + fileName)
        .putString(result, "data_url")
        .then((snapshot) => {


          firebase
            .storage()
            .ref("TaskSubmit/classT/" + this.state.c_id + "/" + this.state.task_id + "/" + this.state.uid + "/attachments/" + fileName)
            .getDownloadURL()
            .then((url) => {
              var s = this.state.urls;
              s.push({ url: url, name: fileName });
              this.setState({ urls: s });
            }).then(()=>{
              this.setState({disabled:false})
            })

        });
        

      // firebase
      // .storage()
      // .ref("TaskSubmit/classT/" + this.state.c_id + "/"+ this.state.task_id + "/" + this.state.uid + "/attachments/" + fileName)
      // .put(result)
      // .on(
      //   "state_changed",
      //   (snapshot) => {
      //     const progress = Math.round(
      //       (snapshot.bytesTransferred / snapshot.totalBytes) * 100
      //       );
      //       this.setState({ progress });
      //       console.log(this.state.progress)
      //     },
      //     (error) => this.setState({ error: error.message })
      //     );



    });
  };

  handleChatFile = (file) => {
    if (file === undefined) {
      return;
    } else {
      if (
        file.type === "image/jpg" ||
        file.type === "image/jpeg" ||
        file.type === "image/png"
      ) {
        this.setState({
          inputFileData: URL.createObjectURL(file),
          inputFileObject: file,
        });
        this.setState({ mentorModal: true , disabled:true});

      } else if (
        file.type === "text/plane" ||
        file.type === "text/javascript" ||
        file.type === "text/html" ||
        file.type === "text/css" ||
        file.type === "text/docx" ||
        (file.type !== "video/mp4" &&
          true)
      ) {
        var objUrl = file;
        var fileName = file.name;
        // var id = this.state.task_id
        //   ? this.state.task_id
        //   : firebase.database().ref().push().key;
        // if (!this.state.task_id) {
        //   this.setState({ task_id: id });
        // }
        firebase
          .storage()
          .ref("TaskSubmit/classT/" + this.state.c_id + "/" + this.state.task_id + "/" + this.state.uid + "/attachments/" + fileName)
          .put(objUrl)
          .on('state_changed', (snapshot)=>{
            var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            this.setState({progress: progress});
    console.log('Upload is ' + progress + '% done');
          })

          firebase
          .storage()
          .ref("TaskSubmit/classT/" + this.state.c_id + "/" + this.state.task_id + "/" + this.state.uid + "/attachments/" + fileName)
          .put(objUrl)
          .then((snapshot) => {
            firebase
              .storage()
              .ref("TaskSubmit/classT/" + this.state.c_id + "/" + this.state.task_id + "/" + this.state.uid + "/attachments/" + fileName)
              .getDownloadURL()
              .then((url) => {
                var s = this.state.urls;
                s.push({ url: url, name: fileName });
                this.setState({ urls: s });
                this.setState({disabled:false})

              });
          });
          firebase
          .storage()
          .ref("TaskSubmit/classT/" + this.state.c_id + "/" + this.state.task_id + "/" + this.state.uid + "/attachments/" + fileName)
          .put(objUrl)
          .on('state_changed', (snapshot)=>{
            var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            this.setState({progress: progress});
    console.log('Upload is ' + progress + '% done');
          })
      } else if (file.type === "video/mp4") {
        this.handleVideoUpload(file);
      }
    }
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

  handleVideoUpload = (file) => {
    var objUrl = file;
    var fileName = file.name;
    // var id = this.state.task_id
    //   ? this.state.task_id
    //   : firebase.database().ref().push().key;
    // if (!this.state.task_id) {
    //   this.setState({ task_id: id });
    // }

    firebase
    .storage()
    .ref("TaskSubmit/classT/" + this.state.c_id + "/" + this.state.task_id + "/" + this.state.uid + "/attachments/" + fileName)
    .put(objUrl)
    .on('state_changed', (snapshot)=>{
      var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      this.setState({progress: progress});
console.log('Upload is ' + progress + '% done');
    })
    firebase
      .storage()
      .ref("TaskSubmit/classT/" + this.state.c_id + "/" + this.state.task_id + "/" + this.state.uid + "/attachments/" + fileName)
      .put(objUrl)
      .then((snapshot) => {
        firebase
          .storage()
          .ref("TaskSubmit/classT/" + this.state.c_id + "/" + this.state.task_id + "/" + this.state.uid + "/attachments/" + fileName)
          .getDownloadURL()
          .then((url) => {
            var s = this.state.urls;
            s.push({ url: url, name: fileName });
            this.setState({ urls: s });
          });
      });
  };

  handleFile = (e) => {
    this.handleChatFile(e.target.files[0]);
    document.getElementById("AttachmentFile").value = "";
    this.setState({displayProgress : 'display'})
  };




  componentDidMount() {

    firebase.auth().onAuthStateChanged((user) => {
      firebase.database().ref(`users/${user.uid}`).once("value")
        .then((snap) => {
          var d = snap.val();
          if (d && d.verification === 1) {
            let user_name = d.username;
            let id = localStorage.getItem("u_id");
            this.setState({ id: id });
            var tts = this;
            if (id === undefined) {
              window.location.href = "/";
            }
            this.setState({ c_id: id, uid: user.uid, user_name: user_name });

            var currenturl = window.location.search;
            var currenturlsearch = new URLSearchParams(currenturl);
            var t_id = currenturlsearch.get("id");
            console.log(id);
            if (id === undefined || id === null) {
              window.location.href = "/";
            }
            this.setState({ task_id: t_id });

            var x = [];
            firebase
              .database()
              .ref("Tasks/classT/" + t_id + "/")
              .once("value")
              .then((snapshot) => {
                x = snapshot.val();
                if (x) {
                  console.log(x);
                  this.setState({
                    data: x,
                    //  editorState: x.data.task,
                  });

                  document.getElementById("task_description").innerHTML =
                    x.data.task_desc;
                  document.getElementById("problem_statement").innerHTML =
                    x.data.problem_stat;
                }

              }).then(() => {
                let SubmittedTask = [];
                firebase
                  .database()
                  .ref("TaskSubmit/classT/" + id + "/" + t_id + "/" + user.uid + "/data/")
                  .once("value")
                  .then((snapshot) => {
                    var data = snapshot.val();
                    if (data) {
                      console.log(data);
                      for (var i = 0; i < data.attachments.length; i++) {
                        SubmittedTask.push(data.attachments[i]);
                        console.log(SubmittedTask);
                      }
                      // SubmittedTask.map(item => console.log(item.name, item.url));
                    }
                  }).then(() => {
                    this.setState({
                      SubmittedTask: SubmittedTask,
                    })
                  })
              });
            if (this.state.data === undefined || this.state.data === null) {
              window.location.href = `/userClass/task`;
            }
          }
          else {
            alert("only admins allowed ");
            window.location.href = "/";
          }
        })
    })
  }

  isSubmitAllowed = () => {
    if (this.state.urls.length > 0) {
      return true;
    }
    else {
      alert("Upload your task first");
      return true;
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();
    if (!this.isSubmitAllowed()) {
      console.log("cannot submit");
    } else {

      const db = firebase.database();
      db.ref("TaskSubmit/classT/" + this.state.c_id + "/" + this.state.task_id + "/" + this.state.uid + "/data/")
        .set({
          submitDate: this.state.today,
          attachments: this.state.urls,
          classroom_id: this.state.c_id,
          task_id: this.state.task_id,
          user_name: this.state.user_name,
        })
        .then(() => {
          this.setState({ submit: true });
          alert("Task Added Successfully!");
          window.location.href = '/UserClass/task';
        });
    }
  };

  render() {
    const meta = {
      title: "Task Submission",
      description: "TDPVista",
      canonical: "https://tiles.tdpvista.in",
      meta: {
        charset: "utf-8",
        name: {
          keywords:
            "tdpvista,support,contact,form,registration,learning,education,call,helpline,helpdesk,query",
        },
      },
    };
    const Progress_bar = ({bgcolor,progress,height,display}) => {

      if(progress == 100){
        display = 'none';
      }
	
      const Parentdiv = {
        height: height,
        width: '40%',
        backgroundColor: '#d7d7d7',
        borderRadius: 40,
        marginTop:10,
        marginbottom:10,
        display:display,
      }
      
      const Childdiv = {
        height: '100%',
        width: `${progress}%`,
        backgroundColor: '#2DCE89',
      borderRadius:40,
        textAlign: 'right'
      }
      
      const progresstext = {
        padding: 20,
        color: 'white',
        fontWeight: 500,
            display: 'none',
      }
        
      return (
      <div style={Parentdiv}>
      <div style={Childdiv}>
        <span style={progresstext}>{`${progress}%`}</span>
      </div>
      </div>
      )
    }
    return (
      <>
<DocumentMeta {...meta} />

        <Header />
        {/* Page content */}
        {this.state.inputFileData ? (
          <>
           
            {/* <Card className="mt-4" style={{ height: "500px" }}>
              <div className="imgCropperParentDiv">
                <Row>
                  <Cropper
                    className="cropperClass"
                    image={this.state.inputFileData}
                    crop={this.state.crop}
                    zoom={this.state.zoom}
                    aspect={1 / 1}
                    onCropChange={this.setCropFunction}
                    onCropComplete={this.onCropCompleteFunction}
                    onZoomChange={this.setZoomFunction}
                  />
                  <Button color="primary" size="lg" onClick={this.uploadNewProfilePic} style={{ marginLeft: "38vw", marginTop: "70vh" }}>
                    Upload
                  </Button>
                </Row>
              </div>

            </Card> */}
            <Modal isOpen={this.state.mentorModal} toggle={this.toggleMentor}>
              <Card className="cropperCard" style={{ width: '800px', height: "80vh", alignItems: "center", marginRight: "100px", justifyContent: "center", position: 'relative' }}>
                {/* <CardHeader> */}
                <Button size="lg" onClick={this.toggleMentor} style={{ position: "absolute", top: "0", left: "0", margin: "5px" }}>
                  <FontAwesomeIcon
                    icon={faWindowClose}
                    style={{
                      color: "rgb(185, 185, 185)",
                      marginLeft: "auto",
                      cursor: "pointer",

                      fontSize: "20px",
                      zIndex: '100',
                    }}
                  />
                </Button>
                {/* </CardHeader> */}
                <div className="imgCropperParentDiv">
                  <Cropper
                    className="cropperClass"
                    image={this.state.inputFileData}
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
        
          <>
            <Container className="mt--7" fluid>
              <Card>
                <CardHeader className="d-flex text-center">
                  <h1>
                    Task Details:{" "}
                    {this.state.data.data ? this.state.data.data.task_name : ""}
                  </h1>

                </CardHeader>
                <CardBody className="px-2 justify-content-center align-items-center">
                  {/* <a
                href={"/workshop/WorkshopEditTask?id=" + this.state.c_id + "&t_id=" + this.state.task_id}
              >
                Edit Task
              </a> */}
                  {this.state.data.data && (
                    <div className="col-md-9 py-sm-3 mx-auto">
                      {/* <b>Name :</b> {this.state.data.data.task_name}
                  <br />
                  <b>Created On :</b> {this.state.data.data.created_date}
                  <br />
                  <b>Due Date :</b> {this.state.data.data.due_date} <br />
                  <br />
                  <b>Task Description:</b>
                  <p id="task_description"></p>
                  <br />
                  <b>Problem Statement:</b>
                  <p id="problem_statement"></p>
                  <br /> */}
                      <div>
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
                                value={this.state.data.data.task_name}
                              />
                            </FormGroup>
                          </Col> <Col lg="6">
                            <FormGroup>
                              <label
                                className="form-control-label"
                                htmlFor="input-username"
                              >
                                <h3>Due Date</h3>
                              </label>
                              <Input
                                disabled
                                className="form-control-alternative"
                                id="input-username"
                                placeholder="From"
                                type="text"
                                value={this.state.data.data.due_date}
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
                                <h3> Description</h3>
                              </label>
                              <p id="task_description"></p>
                              {/* <Input
                              disabled
                              className="form-control-alternative"
                              // id="quiz_description" 
                                                           placeholder="Description"
                              type="text"
                              value={this.state.desc}
                              
                            /> */}
                            </FormGroup>
                          </Col>


                        </Row>

                        <br></br>
                        <b>Problem Statement:</b>
                        <p id="problem_statement"></p>
                      </div>
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
                    </div>
                  )}
                  <br />

                  {this.state.SubmittedTask.length === 0
                    ?
                    <FormGroup className="mt-3 ml-9 text-center" style={{ justifyContent: 'center', textAlign: 'center' }}>
                      <InputGroup>
                        <Label for="file">Add Attachment:</Label>
                        <Input
                          type="file"
                          placeholder="File"
                          onChange={this.handleFile}
                          id="AttachmentFile"
                        />
                      </InputGroup>
                      <Progress_bar  display={this.state.displayProgress}  progress={this.state.progress} height={10} />
                    </FormGroup>

                    : <></>
                  }
                  <ul listStyle="none">
                    {this.state.urls.map((item, index) => {
                      return (
                        <li className="d-flex">
                          <a href={item.url} target="_blank">{index + 1}. {item.name}</a>
                          <Button
                            className="text-danger ml-auto"
                            onClick={() => {
                              this.deleteAttachment(index, item.name)
                            }}
                          >
                            <FontAwesomeIcon
                              icon={faTrashAlt}
                              className="justify-self-end"
                            />
                          </Button>
                          <br />
                        </li>);
                    })}
                  </ul>

                </CardBody>
              </Card>
              <Card>
                {this.state.SubmittedTask.length > 0 ?
                  <>
                    <CardHeader>This Task Has Been Submitted</CardHeader>
                    <ul>
                      {/* <li>{this.state.SubmittedTask[0].name}</li> */}
                      {this.state.SubmittedTask.map(item => {
                        return (
                          <li>
                            <a href={item.url}>{item.name}</a>
                          </li>
                        )
                      })}
                    </ul>
                  </>
                  :
                  <div style={{ justifyContent: 'center', textAlign: 'center' }}><Button color="success" style={{ width: "15%", margin: '25px' }} onClick={this.handleSubmit} disabled={this.state.disabled}>Submit</Button></div>
                }

              </Card>
            </Container>
          </>
        

      </>
    );
  }
}
taskSubmit.layout = User;
export default taskSubmit;
