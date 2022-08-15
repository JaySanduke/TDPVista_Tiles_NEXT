import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import dynamic from "next/dynamic"
const Editor = dynamic(
  () => import("react-draft-wysiwyg").then((mod) => mod.Editor),
  { ssr: false }
);
import { EditorState, convertToRaw, ContentState } from "draft-js";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import draftToHtml from "draftjs-to-html";
const htmlToDraft = typeof window === 'object' && require('html-to-draftjs').default;
import getCroppedImg from "../../utils/cropImage";
import firebase from "../../config/firebase-tiles";
import Cropper from "react-easy-crop";
import MentorClassroom from 'layouts/MentorClassroom.js';
import DataTable from "react-data-table-component";


import Lottie from 'react-lottie';
  //  import rocket  from '../../assets/lottie/72284-rocket-animation.json'
   import rocket  from '../../assets/lottie/9764-loader.json'
import {
  Table,
  Button,
  Card,
  CardHeader,
  CardBody,
  Container,
  Form,
  FormGroup,
  Label,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
} from "reactstrap";
// core components
import Header from "components/Headers/Header.js";

class EditTask extends React.Component {
  constructor(props) {
    super(props);
    var today = new Date(),
      todayDate =
        today.getFullYear() +
        "-" +
        ((today.getMonth() + 1 < 10 ? "0" : "") + (today.getMonth() + 1)) +
        "-" +
        ((today.getDate() < 10 ? "0" : "") + today.getDate());

    this.handleSelectedClassroom = this.handleSelectedClassroom.bind(this);
    this.handleName = this.handleName.bind(this);
    this.handleDate = this.handleDate.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleFile = this.handleFile.bind(this);
    // Cropper Function
    this.setCropFunction = this.setCropFunction.bind(this);
    this.setZoomFunction = this.setZoomFunction.bind(this);
    this.onCropCompleteFunction = this.onCropCompleteFunction.bind(this);
    this.uploadNewProfilePic = this.uploadNewProfilePic.bind(this);
    this.handleChatFile = this.handleChatFile.bind(this);
    this.handleVideoUpload = this.handleVideoUpload.bind(this);
    this.deleteAttachment = this.deleteAttachment.bind(this);
    this.state = {
      tasks: [],
      created_date: "",
      task_name: "",
      due_date: "",
      file: [],
      createloader:false,
      task_id: "",
      editorState: EditorState.createEmpty(),
      problem_stat: EditorState.createEmpty(),
      urls: [],
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
      classroom: [],
      displayClassroom: [],
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
      .ref("Tasks/classT/" + this.state.task_id + "/attachments")
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
      var id = this.state.task_id
      firebase
        .storage()
        .ref("Tasks/classT/" + id + "/attachments/" + fileName)
        .putString(result, "data_url")
        .then((snapshot) => {
          firebase
            .storage()
            .ref("Tasks/classT/" + id + "/attachments/" + fileName)
            .getDownloadURL()
            .then((url) => {
              var s = this.state.urls;
              s.push({ url: url, name: fileName });
              this.setState({ urls: s });
            }).then(()=>{
              this.setState({createloader: false});
            });
        });
    });
  };

  handleChatFile = (file) => {
    if (file === undefined) {
      return;
    } else {
      this.setState({createloader: true});
      if (
        file.type === "image/jpg" ||
        file.type === "image/jpeg" ||
        file.type === "image/png"
      ) {
        this.setState({
          inputFileData: URL.createObjectURL(file),
          inputFileObject: file,
        });
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
        var id = this.state.task_id
        firebase
          .storage()
          .ref("Tasks/classT/" + id + "/attachments/" + fileName)
          .put(objUrl)
          .then((snapshot) => {
            firebase
              .storage()
              .ref("Tasks/classT/" + id + "/attachments/" + fileName)
              .getDownloadURL()
              .then((url) => {
                var s = this.state.urls;
                s.push({ url: url, name: fileName });
                this.setState({ urls: s });
              }).then(()=>{
                this.setState({createloader: false});
              });
          });
      } else if (file.type === "video/mp4") {
        this.handleVideoUpload(file);
      }
    }
  };

  handleVideoUpload = (file) => {
    var objUrl = file;
    var fileName = file.name;
    var id = this.state.task_id;
    firebase
      .storage()
      .ref("Tasks/classT/" + id + "/attachments/" + fileName)
      .put(objUrl)
      .then((snapshot) => {
        firebase
          .storage()
          .ref("Tasks/classT/" + id + "/attachments/" + fileName)
          .getDownloadURL()
          .then((url) => {
            var s = this.state.urls;
            s.push({ url: url, name: fileName });
            this.setState({ urls: s });
          }).then(()=>{
            this.setState({createloader: false});
          });
      });
  };

  handleFile = (e) => {
    this.handleChatFile(e.target.files[0]);
    document.getElementById("AttachmentFile").value = "";
  };

  // Cropper
  componentDidMount() {
    firebase.auth().onAuthStateChanged((user) => {
      firebase.database().ref(`mentors/${user.uid}`).once("value")
        .then((snap) => {
          var d = snap.val();
          if (d && d.type === 2) {
            var currenturl = window.location.search;
            var currenturlsearch = new URLSearchParams(currenturl);
            var id = currenturlsearch.get("id");

            if (id === undefined || id === null) {
              window.location.href = "/";
            }
            this.setState({ task_id: id });
            var x = [];
            firebase
              .database()
              .ref("Tasks/classT/" + id + "/data/")
              .once('value')
              .then((snapshot) => {
                var data = snapshot.val();
                console.log(data);
                this.setState({
                  task_name: data.task_name,
                  due_date: data.due_date,
                  created_date: data.created_date,
                  urls: data.attachments,
                  tempUrls: data.attachments,
                  displayClassroom: (data.classrooms) ? data.classrooms : [],
                })
                var blocksFromHtml = htmlToDraft(data.problem_stat);
                var { contentBlocks, entityMap } = blocksFromHtml;
                var contentState = ContentState.createFromBlockArray(
                  contentBlocks,
                  entityMap
                );
                var editorState = EditorState.createWithContent(contentState);
                this.setState({ problem_stat: editorState });
                blocksFromHtml = htmlToDraft(data.task_desc);
                var { contentBlocks, entityMap } = blocksFromHtml;
                contentState = ContentState.createFromBlockArray(
                  contentBlocks,
                  entityMap
                );
                editorState = EditorState.createWithContent(contentState);
                this.setState({ editorState: editorState });
              });

            var x = [];
            firebase
              .database()
              .ref("Classroom/")
              .once("value")
              .then((snapshot) => {
                snapshot.forEach(function (childSnapshot) {
                  var childData = childSnapshot.val();
                  if (childData.data) {
                    if (childData.data.task &&
                      childData.data.task.includes(id)) {
                      return;
                    }
                    else {
                      x.push({
                        c_id: childData.data.c_id,
                        classroomName: childData.data.classroomName,
                      });
                    }
                  }
                });
                this.setState({ classroom: x });
              });
          }
          else {
            alert("only mentors allowed ");
            window.location.href = "/";
          }
        })
    })

  }

  handleSelectedClassroom = (s) => {
    let select = s.selectedRows;
    // this.state.selectedRows = select;

    var selectedId = select[0].c_id;
    var arr = this.state.classroom.filter(i => i.c_id !== selectedId);
    var newDisplayClassroom = [...this.state.displayClassroom, select[0]]
    this.setState({
      displayClassroom: newDisplayClassroom,
      classroom: arr,
    })
    // this.setState({selectedRows : select});
    // console.log(this.state.selectedRows);
  }

  // componentWillUnmount() {
  // if (!this.state.submit) {
  //   alert("remove"); 
  // firebase
  //   .storage()
  //   .ref("Tasks/" + this.state.task_id)
  //   .child("attachments")
  //   .listAll()
  //   .then(function (result) {
  //     result.items.forEach(function (file) {
  //       file.delete();
  //     });
  //   });
  // firebase
  //     .database()
  //     .ref("Tasks/" + this.state.task_id + "/data/")
  //     .child("attachments")
  //     .remove();
  // }
  // }

  handleName = (e) => {
    this.setState({ task_name: e.target.value });
  };

  handleDate = (e) => {
    this.setState({ due_date: e.target.value });
  };

  handlesSelectedClassroom = (state) => {
    this.state.assigned = state.selectedRows;
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const value =
      this.state.editorState &&
      draftToHtml(convertToRaw(this.state.editorState.getCurrentContent()));
    const problem_stat =
      this.state.problem_stat &&
      draftToHtml(convertToRaw(this.state.problem_stat.getCurrentContent()));
    if (
      value !== null &&
      problem_stat !== null &&
      value !== undefined &&
      problem_stat !== undefined &&
      value !== EditorState.createEmpty() &&
      problem_stat !== EditorState.createEmpty() &&
      value.trim() !== "<p></p>" &&
      problem_stat.trim() !== "<p></p>"
    ) {
      console.log(this.state.displayClassroom);
      // var ClassRef = firebase.database().ref('/Classroom/')
      // var id = this.state.task_id;
      // ClassRef.once('value').then((snapshot) => {
      //   snapshot.forEach(function (childSnapshot) {
      //     var childData = childSnapshot.val();
      //     if (childData.data && childData.data.task) {
      //       if (childData.data.task.includes(id)) {
      //         var newTaskArr = childData.data.task.filter(i => i !== id);
      //         firebase.database().ref("/Classroom/" + childData.data.c_id + "/data/").update({
      //           task: newTaskArr,
      //         })
      //       }
      //     }
      //   })
      // })
      // .then(() => {
        // this.state.displayClassroom.map(item => {
        //   var ref = firebase.database().ref("Classroom/" + item.c_id + "/data/");
        //   var x = [];
        //   ref.once('value').then((snapshot) => {
        //     x = snapshot.val().task;
        //   }).then(() => {
        //     if (x === undefined) { x = []; }
        //     x.push(this.state.task_id);
        //     firebase.database().ref("Classroom/" + item.c_id + "/data/").update({
        //       task: x
        //     })
        //   }).then(() => {
        //     return null;
        //   })
        // });
      // })
      // .then(() => {
        firebase
          .storage()
          .ref("Tasks/classT/" + this.state.task_id)
          .child("attachments")
          .listAll()
          .then(function (result) {
            // result.items.forEach(function (file) {
            //   file.delete();
            // });
            alert("Ok")
          });
        const db = firebase.database();
        var id = this.state.task_id;
        db.ref("Tasks/classT/" + id + "/data/")
          .update({
            created_date: this.state.created_date,
            task_name: this.state.task_name,
            due_date: this.state.due_date,
            task_desc: value,
            problem_stat: problem_stat,
            task_id: id,
            attachments: (this.state.urls) ? this.state.urls : [],
            classrooms: this.state.displayClassroom ? this.state.displayClassroom : [],
          })
          .then(() => {
            this.setState({ submit: true });
            alert("Task Added Successfully!");
            window.location.href = `/MentorClass/taskDetails?id=${this.state.task_id}`;
          });

      // })

    } else if (
      value === null ||
      value === undefined ||
      value === EditorState.createEmpty() ||
      value.trim() === "<p></p>"
    ) {
      alert("Enter Task Description properly!");
    } else {
      alert("Enter Problem Statement properly!");
    }
  };

  onEditorStateChange = (editorState) => {
    this.setState({
      editorState,
    });
  };

  onEditorProblemStateChange = (problem_stat) => {
    this.setState({
      problem_stat,
    });
  };

  handleDisplayClassroom = (c_id, c_name) => {
    var arr = this.state.displayClassroom.filter(i => i.c_id !== c_id);
    var newClassroom = { c_id, classroomName: c_name };

    this.setState({
      displayClassroom: arr,
      classroom: [newClassroom, ...this.state.classroom],
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

    // const column = [
    //   { name: "Classroom Name", selector: "classroomName", sortable: true },
    //   { name: "Classroom Id", selector: "c_id" },
    // ];

    // const body = this.state.classroom.map((item) => {
    //   return {
    //     classroomName: item.classroomName,
    //     c_id: item.c_id,
    //   };
    // });

    return (
      <>
        {this.state.inputFileData ? (
          <>
            <Header />
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
              <Button color="primary" onClick={this.uploadNewProfilePic}>
                Upload
              </Button>
            </div>
          </>
        ) : null}
        {!this.state.inputFileData ? (
          <>
            <Header />
            <Container className="mt--7" fluid>
              <Card>
                <CardHeader>
                  <h1>Edit Task</h1>
                  <div className="text-right">
                    <p>
                      <b>Date Of Creation: </b>
                      {this.state.created_date}
                    </p>
                  </div>
                </CardHeader>
                <CardBody>
                  <Form role="form" onSubmit={this.handleSubmit}>
                    <FormGroup>
                      <InputGroup>
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>Task Name</InputGroupText>
                        </InputGroupAddon>
                        <Input
                          type="text"
                          placeholder="Task Name"
                          value={this.state.task_name}
                          onChange={this.handleName}
                          id="task_name"
                          required
                        />
                      </InputGroup>
                    </FormGroup>

                    <FormGroup>
                      <InputGroup>
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>Due Date</InputGroupText>
                        </InputGroupAddon>
                        <Input
                          type="date"
                          min={this.state.created_date}
                          value={this.state.due_date}
                          onChange={this.handleDate}
                          id="question"
                          required
                        />
                      </InputGroup>
                    </FormGroup>
                    <p>
                      <b>Task Description</b>
                    </p>
                    <Editor
                      editorState={this.state.editorState}
                      toolbarClassName="toolbar-class"
                      wrapperClassName="wrapper-class"
                      onEditorStateChange={this.onEditorStateChange}
                      editorStyle={{
                        minHeight: "200px",
                        border: "1px solid",
                        padding: "0 10px",
                      }}
                    />
                    <p className="mt-3">
                      <b>Problem Statement</b>
                    </p>
                    <Editor
                      editorState={this.state.problem_stat}
                      toolbarClassName="toolbar-class"
                      wrapperClassName="wrapper-class"
                      // editorClassName="demo-editor"
                      onEditorStateChange={this.onEditorProblemStateChange}
                      editorStyle={{
                        minHeight: "200px",
                        border: "1px solid",
                        padding: "0 10px",
                      }}
                    />
                    <FormGroup className="mt-3">
                      <InputGroup>
                        <Label for="file">Add Attachment:</Label>
                        { this.state.createloader ?  <Lottie options={defaultOptions}
              height={200}
              width={200}></Lottie> : 
                        <Input
                          type="file"
                          placeholder="File"
                          onChange={this.handleFile}
                          id="AttachmentFile"
                        />}
                      </InputGroup>
                    </FormGroup>
                    <ul listStyle="none">
                      {this.state.urls && this.state.urls.map((item, index) => {
                        return (
                          <li className="d-flex">
                            <a href={item.url}>{index + 1}. {item.name}</a>
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

              

                    <div className="text-center">
                      <Button className="mt-4" color="primary" type="submit">
                        Update Task
                      </Button>
                    </div>
                  </Form>
                </CardBody>
              </Card>
            </Container>
          </>
        ) : null}
      </>
    );
  }
}

EditTask.layout = MentorClassroom;
export default EditTask;