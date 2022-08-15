import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import dynamic from "next/dynamic"
const Editor = dynamic(
  () => import("react-draft-wysiwyg").then((mod) => mod.Editor),
  { ssr: false }
);
import { EditorState, convertToRaw } from "draft-js";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import draftToHtml from "draftjs-to-html";
import getCroppedImg from "utils/cropImage";
import firebase from "../../config/firebase-tiles";
import Cropper from "react-easy-crop";
import Admin from "layouts/Admin.js";
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
import Header from "components/Headers/admin.js";

import DataTable from "react-data-table-component";

class CreateTask extends React.Component {
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
      created_date: todayDate,
      task_name: "",
      due_date: "",
      file: [],
      editorState: EditorState.createEmpty(),
      problem_stat: EditorState.createEmpty(),
      classroom: [],
      assigned: [],
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
      selectedRows: [],
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
        ? this.state.task_id
        : firebase.database().ref().push().key;
      if (!this.state.task_id) {
        this.setState({ task_id: id });
      }
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
            });
        });
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
          ? this.state.task_id
          : firebase.database().ref().push().key;
        if (!this.state.task_id) {
          this.setState({ task_id: id });
        }
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
    var id = this.state.task_id
      ? this.state.task_id
      : firebase.database().ref().push().key;
    if (!this.state.task_id) {
      this.setState({ task_id: id });
    }
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
      firebase.database().ref(`Admin/${user.uid}`).once("value")
        .then((snap) => {
          var d = snap.val();
          if (d && d.type === 1) {
            firebase
              .database()
              .ref("Tasks/classT/" + this.state.task_id + "/data/")
              .child("attachments")
              .remove();
            var x = [];
            firebase
              .database()
              .ref("Classroom/")
              .once("value")
              .then((snapshot) => {
                snapshot.forEach(function (childSnapshot) {
                  var childData = childSnapshot.val();
                  if (childData.data) {
                    x.push({
                      c_id: childData.data.c_id,
                      classroomName: childData.data.classroomName,
                    });
                  }
                });
                this.setState({ classroom: x });
              });
          }
          else {
            alert("only admins allowed ");
            window.location.href = "/";
          }
        })
    })

  }

  componentWillUnmount() {
    if (!this.state.submit) {
      // alert("remove");
      firebase
        .storage()
        .ref("Tasks/classT/" + this.state.task_id)
        .child("attachments")
        .listAll()
        .then(function (result) {
          result.items.forEach(function (file) {
            file.delete();
          });
        });
      firebase
        .database()
        .ref("Tasks/classT/" + this.state.task_id + "/data/")
        .child("attachments")
        .remove();
    }
  }

  handleName = (e) => {
    this.setState({ task_name: e.target.value });
  };

  handleDate = (e) => {
    this.setState({ due_date: e.target.value });
  };

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

  isSubmitAllowed = () => {
    const value =
      this.state.editorState &&
      draftToHtml(convertToRaw(this.state.editorState.getCurrentContent()));
    const problem_stat =
      this.state.problem_stat &&
      draftToHtml(convertToRaw(this.state.problem_stat.getCurrentContent()));

    if (value === null ||
      value === undefined ||
      value === EditorState.createEmpty() ||
      value.trim() === "<p></p>") {
      alert("Enter Task Description properly!");
      return false;
    }

    else if (problem_stat === null ||
      problem_stat === undefined ||
      problem_stat === EditorState.createEmpty() ||
      problem_stat.trim() === "<p></p>") {
      alert("Enter Problem Statement Properly!")
      return false;
    }

    else if (this.state.task_name.trim() === "" ||
      this.state.due_date === "") {
      alert("Complete form Properly!")
      return false;
    }
    else {
      return true;
    }
  } 

  handleSubmit = (e) => {
    e.preventDefault();
    const value =
      this.state.editorState &&
      draftToHtml(convertToRaw(this.state.editorState.getCurrentContent()));
    const problem_stat =
      this.state.problem_stat &&
      draftToHtml(convertToRaw(this.state.problem_stat.getCurrentContent()));
    if (!this.isSubmitAllowed()) {
      console.log("cannot submit");
    } else {
      const db = firebase.database();
      var id = this.state.task_id
        ? this.state.task_id
        : firebase.database().ref().push().key;
      if (!this.state.task_id) {
        this.setState({ task_id: id });
      }
      db.ref("Tasks/classT/" + id + "/data/")
        .update({
          created_date: this.state.created_date,
          task_name: this.state.task_name,
          due_date: this.state.due_date,
          task_desc: value,
          problem_stat: problem_stat,
          classrooms: this.state.displayClassroom,
          task_id: id,
          attachments: this.state.urls,
        })
      this.state.displayClassroom.map(item => {
        var ref = firebase.database().ref("Classroom/" + item.c_id + "/data/");
        var x = [];
        ref.once('value').then((snapshot) => {
          x = snapshot.val().task;
        }).then(() => {
          if (x === undefined) { x = []; }
          x.push(id);
          firebase.database().ref("Classroom/" + item.c_id + "/data/").update({
            task: x
          })
        }).then(() => {
          return null;
        })
        // console.log(item);
        // return null;
      })
      // .then(() => {
      this.setState({ submit: true });
      alert("Task Added Successfully!");
      window.location.href = "/admin/Task";
      // });
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
    var newClassroom = {c_id, classroomName: c_name};

    this.setState({
      displayClassroom: arr,
      classroom: [newClassroom, ...this.state.classroom],
    })
  }

  render() {
    const column = [
      { name: "Classroom Name", selector: "classroomName", sortable: true },
      { name: "Classroom Id", selector: "c_id" },
    ];

    const body = this.state.classroom.map((item) => {
      return {
        classroomName: item.classroomName,
        c_id: item.c_id,
      };
    });
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
                  <h1>Create Task</h1>
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
                        <Input
                          type="file"
                          placeholder="File"
                          onChange={this.handleFile}
                          id="AttachmentFile"
                        />
                      </InputGroup>
                    </FormGroup>
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

                    {this.state.displayClassroom.length > 0 &&
                <Card className="mb-5">
                  <CardHeader><h3>Classroom Selected</h3></CardHeader>
                  <Table className="m-3">
                    <thead>
                      <tr>
                        {/* <th>#</th> */}
                        <th>Id</th>
                        <th>Classroom Name</th>
                        <th>Remove</th>
                      </tr>
                    </thead>
                    {this.state.displayClassroom.map((item, index) => (
                      <tr>
                        {/* <th scope="row"></th> */}
                        <td>{item.c_id}</td>
                        <td>{item.classroomName}</td>
                        <td><Button color="danger" size="sm" onClick={() => this.handleDisplayClassroom(item.c_id, item.classroomName)}>Remove</Button></td>
                      </tr>
                      // <li key={index}>{item.c_id} - {item.classroomName}</li>
                    ))}
                  </Table>
                </Card>
              }

                    <DataTable
                      // title="Classrooms Available"
                      columns={column}
                      data={body}
                      pagination={true}
                      selectableRows
                      Clicked
                      onSelectedRowsChange={this.handleSelectedClassroom}
                    />

                    <div className="text-center">
                      <Button className="mt-4" color="primary" type="submit">
                        Create Task
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

CreateTask.layout = Admin;
export default CreateTask;
