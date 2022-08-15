import React from "react";
import { storage } from "../../config/firebase-tiles";
import dynamic from "next/dynamic"
const Editor = dynamic(
  () => import("react-draft-wysiwyg").then((mod) => mod.Editor),
  { ssr: false }
);
import { EditorState, convertToRaw } from "draft-js";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import draftToHtml from "draftjs-to-html";
import getCroppedImg from "utils/cropImage";
import Cropper from "react-easy-crop";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
// import { Editor } from "react-draft-wysiwyg";
// import {EditorState , convertToRaw } from 'draft-js';
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";

// Demo styles, see 'Styles' section below for some notes on use.
import "react-accessible-accordion/dist/fancy-example.css";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import {
  Card,
  CardHeader,
  CardBody,
  Container,
  Form,
  FormGroup,
  Input,
  InputGroup,
  Button,
  Label,
} from "reactstrap";
// core components
import content from "./content.json";
import firebase from "config/firebase-tiles";
import Header from "components/Headers/admin.js";

import Admin from "layouts/Admin.js";
// import draftToHtml from "draftjs-to-html";
class CreateCourse extends React.Component {
  constructor(props) {
    super(props);
    this.handleTitle = this.handleTitle.bind(this);
    this.handleSubtitle = this.handleSubtitle.bind(this);
    this.handleStartingDate = this.handleStartingDate.bind(this);
    this.handleEndDate = this.handleEndDate.bind(this);
    this.handleDesc = this.handleDesc.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCheckboxes = this.handleCheckboxes.bind(this);
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
      input: "",
      search_data: content,
      editorState: EditorState.createEmpty(),
      course: [],
      file: [],
      title: "",
      subtitle: "",
      starting_date: "",
      end_date: "",
      desc: "",
      contente: [],
      section: [],
      source: "",
      selectedCourse: [],
      e_id: "",
      progress: 0,
      image: null,
      url: "",
      urls: [],
      // Cropper
      task_id: "",
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
      croppedAreaPixels: croppedAreaPixels,
    });
  };

  deleteAttachment = (index, name) => {
    firebase
      .storage()
      .ref("Courses/" + this.state.task_id + "/attachments")
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
        .ref("Courses/" + id + "/attachments/" + fileName)
        .put(img)
        .then((snapshot) => {
          firebase
            .storage()
            .ref("Courses/" + id + "/attachments/" + fileName)
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
          .ref("Courses/" + id + "/attachments/" + fileName)
          .put(objUrl)
          .then((snapshot) => {
            firebase
              .storage()
              .ref("Courses/" + id + "/attachments/" + fileName)
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
      .ref("Courses/" + id + "/attachments/" + fileName)
      .put(objUrl)
      .then((snapshot) => {
        firebase
          .storage()
          .ref("Courses/" + id + "/attachments/" + fileName)
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

  handleStartingDate = (e) => {
    this.setState({ starting_date: e.target.value });
  };

  handleEndDate = (e) => {
    this.setState({ end_date: e.target.value });
  };
  handleTitle = (e) => {
    this.setState({ title: e.target.value });
  };

  handleSubtitle = (e) => {
    this.setState({ subtitle: e.target.value });
  };
  handleDesc = (e) => {
    this.setState({ desc: e.target.value });
  };

  toggle(e) {
    let event = e.target.dataset.event;
    this.setState({
      collapse: this.state.collapse === Number(event) ? 0 : Number(event),
    });
  }
  handleCheckboxes = (role, item, e) => {
    if (e.target.checked) {
      var currentCourseArray = this.state.selectedCourse;
      var contentTitle = item.course_title;
      var check = 0;
      var x = 0;
      for (var i = 0; i < currentCourseArray.length; i++) {
        if (currentCourseArray[i].contentTitle === contentTitle) {
          check = 1;
          x = i;
          break;
        }
      }
      if (check) {
        var d = currentCourseArray[x];
        let p = 0;
        for (let i = 0; i < d.modules.length; i++) {
          console.log(role.ind, d.modules[i].ind);
          if (role.ind < d.modules[i].ind) {
            d.modules.splice(i, 0, role);
            console.log('hsr');
            p = 1;
            break;
          }
        }
        // currentCourseArray[x].modules.push(role);
        if (!p) {
          console.log('abc')
          d.modules.push(role);
        }
        console.log(currentCourseArray);
        this.setState({ selectedCourse: currentCourseArray });

      }
      else {
        currentCourseArray.push({
          contentTitle: contentTitle,
          pages: item.pages,
          contentVideos: item.content_videos,
          modules: [role]
        });
        console.log(currentCourseArray);
        this.setState({ selectedCourse: currentCourseArray });
      }
    }
    else {
      var currentCourseArray = this.state.selectedCourse;
      var contentTitle = item.course_title;
      var check = 0;
      var x = 0;
      for (var i = 0; i < currentCourseArray.length; i++) {
        if (currentCourseArray[i].contentTitle === contentTitle) {
          check = 1;
          x = i;
          break;
        }
      }
      if (check) {
        var d = currentCourseArray[x];
        if (d.modules.length === 1) {
          currentCourseArray.splice(x, 1);
          console.log(currentCourseArray);
          this.setState({ selectedCourse: currentCourseArray });
        } else {

          for (var i = 0; i < 43; i++) {
            console.log(i)
            if (d.modules[i]) {
              if (d.modules[i].name === role.name) {
                d.modules.splice(i, 1)
                break;
              }
            }
          }
          // d.modules.splice(x, 1);
          console.log(d);
          currentCourseArray[x] = d;
          console.log(currentCourseArray);
          this.setState({ selectedCourse: currentCourseArray })
        }
      }
    }
  };

  // onEditorStateChange = (editorState) => {
  //   this.setState({
  //     editorState,
  //   });
  // };

  handleSubmit = (e) => {
    var currenturl = window.location.search;
    var currenturlsearch = new URLSearchParams(currenturl);
    var ID = currenturlsearch.get("id");
    const value =
      this.state.editorState &&
      draftToHtml(convertToRaw(this.state.editorState.getCurrentContent()));
    e.preventDefault();
    if (!ID) {
      var id = this.state.task_id
      ? this.state.task_id
      : firebase.database().ref().push().key;
      firebase
        .database()
        .ref("Courses/" + id)
        .set({
          course_title: this.state.title,
          course_subtitle: this.state.subtitle,
          start_data: this.state.starting_date,
          end_date: this.state.end_date,
          Description: value,
          content: this.state.selectedCourse,
          c_id: id,
          attachments: this.state.urls,
        })
        .then(() => {
          alert("COURSE CREATED SUCCESSFULLY");
          window.location.href = `/admin/CourseDetail`;
        });
    }
    else {
      firebase
        .database()
        .ref("Courses/" + ID)
        .update({
          course_title: this.state.title,
          course_subtitle: this.state.subtitle,
          start_data: this.state.starting_date,
          end_date: this.state.end_date,
          Description: value,
          content: this.state.selectedCourse,
          c_id: ID,
        })
        .then(() => {
          alert("COURSE UPDATED SUCCESSFULLY");
          window.location.href = `/admin/CourseDetail`;
        });
    }
    // console.log(this.state.contente);
    // const id = a.key;
    // db.ref("Courses/" + id + "/data/")
    //   .update({
    //     c_id: id,
    //   })
    //   .then(() => {
    //     alert("Course Created Successfully!");
    //     window.location.href = "/admin/course_class";
    //   });
  };

  onEditorStateChange = (editorState) => {
    this.setState({
      editorState,
    });
  };

  handleSelection = (e) => {
    console.log("hello");
    this.setState({ checkes: !this.state.checkes });
  };
  handlecontent = (e) => {
    this.setState({ source: e.target.value });
    console.log(e.target.value);
    var content = this.state.content_data.Module;
    console.log("content");
    console.log(content);
    var data = content.filter((item) => {
      item.course_title.includes(this.state.source);
    });
    this.setState({ search_data: data });
    console.log(this.state.search_data);
  };


  componentDidMount() {
    var currenturl = window.location.search;
    var currenturlsearch = new URLSearchParams(currenturl);
    var ID = currenturlsearch.get("id");
    if (ID === undefined) {
      window.location.href = "/admin/CourseDetail";
    }
    this.setState({ e_id: ID });
    firebase
      .database()
      .ref("Courses/" + this.state.task_id)
      .child("attachments")
      .remove();
    var x = [];
    firebase
      .database()
      .ref("Courses/" + ID)
      .once("value")
      .then((snapshot) => {
        var x = snapshot.val();
        if (x !== null && x) {
          this.setState({
            title: x.course_title,
            subtitle: x.course_subtitle,
            starting_date: x.start_data,
            end_date: x.end_date,
            selectedCourse: x.content,
          })

          for (let i = 0; i < x.content.length; i++) {
            let ar = x.content[i].modules;
            for (let j = 0; j < ar.length; j++) {
              for (let z = 0; z < 44; z++) {
                if (document.getElementById(`${i}` + `${z}`) && ar[j]) {
                  if (ar[j].name === document.getElementById(`${i}` + `${z}`).parentElement.textContent) {
                    document.getElementById(`${i}` + `${z}`).checked = true;
                  }
                }
              }
            }

          }

        }
      })

  }

  


  handleChange = e => {
    if (e.target.files[0]) {

      this.setState({ image: e.target.files[0] })
    }
  };

  handleUpload = () => {
    const uploadTask = storage.ref(`Course/${this.state.image.name}`).put(this.state.image);
    uploadTask.on(
      "state_changed",
      snapshot => {
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        this.setState({ progress: progress })

      },
      error => {
        console.log(error);
      },
      () => {
        storage
          .ref("Course")
          .child(this.state.image.name)
          .getDownloadURL()
          .then(url => {
            this.setState({ url: url })
            console.log(url)
          });
      }
    );
  }





  render() {
    const {
      editorState,
      contente,

      section,
      search_data,
    } = this.state;
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
        <Container className="mt--7">
          <Card>
            <CardHeader>
              <h1 style={{ paddingLeft: "20px" }}>{!this.state.e_id ? "Create Course" : "Edit Course"}</h1>
            </CardHeader>
            <CardBody>
              <Form
                style={{ padding: "20px" }}
                role="form"
                onSubmit={this.handleSubmit}
              >
                <FormGroup>
                  <Label for="StartingDate">Title</Label>
                  <InputGroup className="input-group-alternative mb-3">
                    <Input
                      required
                      placeholder="Enter Title"
                      id="StartingDate"
                      type="text"
                      value={this.state.title || ""}
                      onChange={this.handleTitle}
                    />
                  </InputGroup>
                </FormGroup>
                <FormGroup>
                  <Label for="StartingDate">Sub-Title</Label>
                  <InputGroup className="input-group-alternative mb-3">
                    <Input
                      required
                      placeholder="Enter Subtitle"
                      id="StartingDate"
                      type="text"
                      value={this.state.subtitle}
                      onChange={this.handleSubtitle}
                    />
                  </InputGroup>
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
                      min={
                        this.state.starting_date !== ""
                          ? this.state.starting_date
                          : this.state.end_date
                      }
                      required
                      placeholder
                      id="EndDate"
                      type="date"
                      value={this.state.end_date}
                      onChange={this.handleEndDate}
                    />
                  </InputGroup>
                </FormGroup>
                <Label style={{ paddingTop: "20px" }}>Description:</Label>
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
                <div style={{ paddingTop: "20px" }}>
                  {/* <Label>Classroom</Label>
                  <Input
                    placeholder="Search Classroom"
                    type="text"
                    onChange={this.handlecontent}
                  /> */}
                  {/* <div> */}
                    {/* <progress value={progress} max="100" /> */}
                    {/* <br />
                    <br />
                    <input type="file" onChange={this.handleChange} />
                    <button onClick={this.handleUpload}>Upload</button>
                    <br />
                  </div> */}
                  <FormGroup className="mt-3">
                      <InputGroup>
                        <Label for="file">Upload image:</Label>
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
                  {search_data.Module.map((item, I) => {
                    return (
                      <div key={I}>
                        <Accordion allowZeroExpanded>
                          <AccordionItem>
                            <AccordionItemHeading>
                              <AccordionItemButton>
                                {item.course_title}
                              </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel>
                              {/* <Label>
                                <Input
                                  type="checkbox"
                                  onChange={this.handleSelectall}
                                  value={item.course_title}
                                />
                                Select all
                              </Label> */}
                              {item.routes.map((role, i) => {
                                return (
                                  <div key={i} className="d-flex">
                                    <Label>
                                      <Input
                                        type="checkbox"
                                        id={`${I}` + `${i}`}
                                        onChange={(e) => {
                                          this.handleCheckboxes(role, item, e);
                                        }}
                                        value={this.state.contente}
                                      />
                                      {role.name}
                                    </Label>
                                  </div>
                                );
                              })}
                            </AccordionItemPanel>
                          </AccordionItem>
                        </Accordion>
                      </div>
                    );
                  })}
                </div>
                <div className="text-center">
                  <Button
                    className="mt-4"
                    onSubmit={this.handleSubmit}
                    color="primary"
                    type="submit"
                  >
                    {!this.state.e_id ? "Create Course" : "Update Course"}
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

CreateCourse.layout = Admin;

export default CreateCourse;
