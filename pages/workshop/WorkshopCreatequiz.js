import React from "react";

import {
  Alert,
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
  Row,
  Col,
  Modal,
  ModalBody,
  ModalHeader,
  ModalFooter,
} from "reactstrap";
// core components
import Header from "components/Headers/admin.js";

import firebase from "config/firebase-tiles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import Workshop from 'layouts/Workshop.js';
import dynamic from "next/dynamic"
const Editor = dynamic(
  () => import("react-draft-wysiwyg").then((mod) => mod.Editor),
  { ssr: false }
);
import { EditorState, convertToRaw, ContentState } from "draft-js";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import draftToHtml from "draftjs-to-html";
import ReactHtmlParser from "react-html-parser";
const htmlToDraft = typeof window === 'object' && require('html-to-draftjs').default;

class CreateQuiz extends React.Component {
  constructor(props) {
    super(props);
    var today = new Date(),
      todayDate =
        today.getFullYear() +
        "-" +
        ((today.getMonth() + 1 < 10 ? "0" : "") + (today.getMonth() + 1)) +
        "-" +
        ((today.getDate() < 10 ? "0" : "") + today.getDate());

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleName = this.handleName.bind(this);
    this.handleQuestion = this.handleQuestion.bind(this);
    this.handleOption = this.handleOption.bind(this);
    this.handleCorrect = this.handleCorrect.bind(this);
    this.handleStartDate = this.handleStartDate.bind(this);
    this.handleStartTime = this.handleStartTime.bind(this);
    this.handleEndDate = this.handleEndDate.bind(this);
    this.handleEndTime = this.handleEndTime.bind(this);
    this.handleDuration = this.handleDuration.bind(this);
    this.handleMarks = this.handleMarks.bind(this);
    this.addQuestion = this.addQuestion.bind(this);
    this.toggle = this.toggle.bind(this);
    this.editQuestion = this.editQuestion.bind(this);
    this.onCancel = this.onCancel.bind(this);
    this.handleModalEditQuestion = this.handleModalEditQuestion.bind(this);
    this.handleQuizDesc = this.handleQuizDesc.bind(this);
    this.SaveModalEdit = this.SaveModalEdit.bind(this);
    this.state = {
      block:false,
      w_id: "",
      selectedRows: [],
      quiz_name: "",
      quiz_desc: "",
      created_date: todayDate,
      start_date: "",
      end_date: "",
      start_time: "",
      end_time: "",
      question: "",
      marks: "",
      options: [],
      quiz_data: [],
      question_count: 0,
      option: "",
      correct: [],
      modal: false,
      editIndex: null,
      modalQuestion: "",
      modalOptions: [],
      modalCorrect: [],
      modalMarks: "",
      modalEditOption: null,
      duration: "",
      durationAlert: false,
      quizes: [],
      editorState: EditorState.createEmpty(),
      questionState: EditorState.createEmpty(),
      optionState: EditorState.createEmpty(),
      questionEditState: EditorState.createEmpty(),
      optionEditState: EditorState.createEmpty(),
      dropdownOpen: false,
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
            var id = currenturlsearch.get("id");
            if (id === undefined) {
              window.location.href = "/";
            }
            this.setState({ w_id: id });
            var ref = firebase.database().ref("Workshops/" + id + "/data/");
            var x = [];
            ref.once("value").then((snapshot) => {
              var dat = snapshot.val();
              if (dat.quiz) {
                x = dat.quiz;
                this.setState({ quizes: x });
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

  handleQuizDesc = (e) => {
    this.setState({ quiz_desc: e.target.value });
  }

  isSubmitAllowed = () => {
    const value =
      this.state.editorState &&
      draftToHtml(convertToRaw(this.state.editorState.getCurrentContent()));
    if (
      value === null ||
      value === undefined ||
      value === EditorState.createEmpty() ||
      value.trim() === "<p></p>"
    ) {
      alert("Enter Quiz Description properly!");
      return false;
    }
    else if (this.state.quiz_name.trim() === "" ||
      this.state.start_date === "" ||
      this.state.start_time === "" ||
      this.state.end_date === "" ||
      this.state.end_time === "") {
      alert("Fill the form properly");
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
    if (!this.isSubmitAllowed()) {
      console.log("not allowed");
    }
    else {

      if (this.state.quiz_data[0]) {
        var wQid = firebase.database().ref("blogs").push().key;
        firebase
          .database()
          .ref("Quiz/workshopQ/" + wQid)
          .set({
            data: {
              name: this.state.quiz_name,
              start_date: this.state.start_date,
              start_time: this.state.start_time,
              end_date: this.state.end_date,
              end_time: this.state.end_time,
              created_date: this.state.created_date,
              quiz_data: this.state.quiz_data,
              quiz_desc: value,
              // classrooms: this.state.selectedRows,
              duration: this.state.duration,
              w_id: this.state.w_id,
              block:false,

            },
          });
        var x = this.state.quizes;
        x.push(wQid);
        firebase
          .database()
          .ref("Workshops/" + this.state.w_id + "/data/")
          .update({
            quiz: x,
          });
        firebase
          .database()
          .ref("Quiz/workshopQ/" + wQid + "/data/")
          .update({
            quiz_id: wQid,
          })
          .then(() => {
            alert("Quiz Created Sucessfully!");
            window.location.href = `/workshop/Workshopquiz?id=${this.state.w_id}`;
          });
      } else {
        alert("Enter Questions");
      }
    }
  };

  // Edit Modal

  SaveModalEdit = (index) => {
    const value =
      this.state.questionEditState &&
      draftToHtml(convertToRaw(this.state.questionEditState.getCurrentContent()));

    if (this.state.modalOptions.length >= 2) {
      var question = value;
      var options = this.state.modalOptions;
      var correct = this.state.modalCorrect;
      var marks = this.state.modalMarks;
      var data = { question, options, correct, marks };

      var quiz = this.state.quiz_data;
      quiz[index] = data;
      this.setState({ quiz_data: quiz });

      this.toggle();
    } else {
      alert("Alteast 2 options required");
    }
  };

  editQuestion = (index) => {

    var blocksFromHtml = htmlToDraft(this.state.quiz_data[index].question);
    var { contentBlocks, entityMap } = blocksFromHtml;
    var contentState = ContentState.createFromBlockArray(
      contentBlocks,
      entityMap
    );
    var editorState = EditorState.createWithContent(contentState);
    this.setState({ questionEditState: editorState });

    this.setState({
      editIndex: index,
      modalQuestion: this.state.quiz_data[index].question,
      modalOptions: this.state.quiz_data[index].options,
      modalCorrect: this.state.quiz_data[index].correct,
      modalMarks: this.state.quiz_data[index].marks,
    });
    this.toggle();
  };

  handleModalEditQuestion = (e) => {
    this.setState({ modalQuestion: e.target.value });
  };

  handleModalCorrect = (i, e) => {
    // this.setState({ modalCorrect: e.target.value });
    var x = this.state.modalCorrect;
    if (e.target.checked) {
      x = (x.length > 0) ? [...x, i] : [i];
      console.log(x);
      this.setState((prevState) => ({ modalCorrect: x }));
    }
    else {
      x = x.filter(item => item !== i);
      console.log(x);
      this.setState((prevState) => ({ modalCorrect: x }));
    }
  };

  handleModalMarks = (e) => {
    this.setState({ modalMarks: e.target.value });
  };

  toggle = () => {
    this.setState((prevState) => ({ modal: !prevState.modal }));
  };

  dropdownToggle() {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen,
    }));
  }
  // Quiz Form

  handleDuration = (e) => {
    this.setState({ duration: e.target.value });
  };

  handleName = (e) => {
    this.setState({ quiz_name: e.target.value });
  };

  handleQuestion = (e) => {
    this.setState({ question: e.target.value });
  };

  handleOption = (e) => {
    const optionValue =
      this.state.optionState &&
      draftToHtml(convertToRaw(this.state.optionState.getCurrentContent()));

    this.setState({ options: [...this.state.options, optionValue] });
    // document.getElementById("option").value = "";
    this.setState({ optionState: EditorState.createEmpty() });
  };

  handleModalOption = (e) => {
    const optionValue =
      this.state.optionEditState &&
      draftToHtml(convertToRaw(this.state.optionEditState.getCurrentContent()));

    this.setState({ modalOptions: [...this.state.modalOptions, optionValue] });
    this.setState({ optionEditState: EditorState.createEmpty() });
  }

  handleStartDate = (e) => {
    this.setState({ start_date: e.target.value });
  };

  handleStartTime = (e) => {
    this.setState({ start_time: e.target.value });
  };

  handleEndDate = (e) => {
    this.setState({ end_date: e.target.value });
  };

  handleEndTime = (e) => {
    this.setState({ end_time: e.target.value });
  };

  handleCorrect = (i, e) => {
    // console.log(e);
    var x = this.state.correct;
    if (e.target.checked) {
      x = (x.length > 0) ? [...x, i] : [i];
      console.log(x);
      this.setState((prevState) => ({ correct: x }));
    }
    else {
      x = x.filter(item => item !== i);
      console.log(x);
      this.setState((prevState) => ({ correct: x }));
    }
  };

  handleMarks = (e) => {
    this.setState({ marks: e.target.value });
  };
  onCancel = () => {
    this.setState({
      editIndex: "",
      modalOptions: [],
      modalQuestion: [],
      modalCorrect: [],
      modalMarks: [],
    });
    this.toggle();
  };

  addQuestion = (e) => {
    e.preventDefault();
    const questionState =
      this.state.questionState &&
      draftToHtml(convertToRaw(this.state.questionState.getCurrentContent()));
    if (
      questionState === null ||
      questionState === undefined ||
      questionState === EditorState.createEmpty() ||
      questionState.trim() === "<p></p>"
    ) {
      alert("Enter Question Properly");
    }
    else if (parseInt(this.state.correct) > this.state.options.length) {
      alert("Enter Correct Answer number correctly!!");
    }
    else if (this.state.options.length < 2) {
      alert("Atleast 2 options required!");
    } else {
      var question = questionState;
      var options = this.state.options;
      var correct = this.state.correct;
      var marks = this.state.marks;
      var data = { question, options, correct, marks };
      this.state.quiz_data.push(data);
      this.setState({
        questionState: EditorState.createEmpty(),
        options: [],
        correct: [],
        option: "",
        marks: "",
      });
      // this.state.question_count += 1;
      this.setState((prevState) => ({
        question_count: prevState.question_data + 1,
      }));
    }
  };


  onEditorStateChange = (editorState) => {
    this.setState({
      editorState,
    });
  };

  onEditorQuestionStateChange = (questionState) => {
    this.setState({
      questionState,
    });
  };

  onEditorQuestionEditStateChange = (questionEditState) => {
    this.setState({
      questionEditState,
    })
  }

  onEditorOptionStateChange = (optionState) => {
    this.setState({ optionState, });
  };

  onEditorOptionEditStateChange = (optionEditState) => {
    this.setState({
      optionEditState,
    });
  }

  // timeDifference = (date2, date1) => {
  //   var difference = date1.getTime() - date2.getTime();

  //   var daysDifference = Math.floor(difference / 1000 / 60 / 60 / 24);
  //   difference -= daysDifference * 1000 * 60 * 60 * 24;

  //   var hoursDifference = Math.floor(difference / 1000 / 60 / 60);
  //   difference -= hoursDifference * 1000 * 60 * 60;

  //   var minutesDifference = Math.floor(difference / 1000 / 60);
  //   difference -= minutesDifference * 1000 * 60;

  //   var secondsDifference = Math.floor(difference / 1000);

  //   return [hoursDifference, minutesDifference, secondsDifference];
  // };

  render() {
    var option_data = this.state.options;
    var question_data = this.state.quiz_data;

    return (
      <>
        <Header />
        {/* Page content */}
        <Container className="mt--7" fluid>
          <Card>
            <CardHeader>
              <h1>Create Quiz</h1>
              <div className="text-right">
                <p>
                  <b>Date Of Creation: </b>
                  {this.state.created_date}
                </p>
              </div>
            </CardHeader>
            <CardBody>
              <Form role="form" onSubmit={this.handleSubmit} id="quizForm">
                <FormGroup>
                  <Label for="quizName">Quiz Name</Label>
                  <InputGroup className="input-group-alternative mb-3">
                    <Input
                      placeholder="Quiz Name"
                      id="quizName"
                      type="text"
                      value={this.state.quiz_name}
                      onChange={this.handleName}
                      required
                    />
                  </InputGroup>
                </FormGroup>
                <p>
                  <Label for="quizName">Quiz Description</Label>
                  <FormGroup>
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
                  </FormGroup>
                </p>
                <br />
                <p>
                  <b>Quiz Available From:</b>
                </p>
                <Row>
                  <br />
                  <Col lg="6" md="6" sm="12">
                    <FormGroup>
                      <Label for="dueDate">Date:</Label>
                      <InputGroup className="input-group-alternative mb-3">
                        <Input
                          placeholder="Start"
                          min={this.state.created_date}
                          max={this.state.end_date !== ""
                            ? this.state.end_date
                            : ""}
                          id="startDate"
                          type="date"
                          value={this.state.start_date}
                          onChange={this.handleStartDate}
                          required
                        />
                      </InputGroup>
                    </FormGroup>
                  </Col>

                  <Col lg="6" md="6" sm="12">
                    <FormGroup>
                      <Label for="dueDate">Time:</Label>
                      <InputGroup className="input-group-alternative mb-3">
                        <Input
                          placeholder="Start"
                          id="startTime"
                          type="time"
                          value={this.state.start_time}
                          onChange={this.handleStartTime}
                          required
                        />
                      </InputGroup>
                    </FormGroup>
                  </Col>
                </Row>
                <p>
                  <b>Quiz Available Till:</b>
                </p>
                <Row>
                  <br />
                  <Col lg="6" md="6" sm="12">
                    <FormGroup>
                      <Label for="dueDate">Date:</Label>
                      <InputGroup className="input-group-alternative mb-3">
                        <Input
                          placeholder="End"
                          id="dueDate"
                          type="date"
                          value={this.state.end_date}
                          min={this.state.start_date}
                          onChange={this.handleEndDate}
                          required
                        // disabled
                        />
                      </InputGroup>
                    </FormGroup>
                  </Col>

                  <Col lg="6" md="6" sm="12">
                    <FormGroup>
                      <Label for="dueDate">Time:</Label>
                      <InputGroup className="input-group-alternative mb-3">
                        <Input
                          placeholder="End"
                          id="dueTime"
                          type="time"
                          value={this.state.end_time}
                          onChange={this.handleEndTime}
                          required
                          // disabled
                          min={
                            this.state.start_date === this.state.end_date
                              ? this.state.start_time
                              : null
                          }
                        />
                      </InputGroup>
                    </FormGroup>
                  </Col>
                </Row>
                <FormGroup>
                  <Label for="duration">Time Duration: (in minutes)</Label>
                  <InputGroup>
                    <Input
                      type="text"
                      id="dur"
                      placeholder="duration in minutes"
                      onChange={this.handleDuration}
                      value={this.state.duration}
                      required
                    // disabled
                    />
                  </InputGroup>

                  <Alert
                    color="secondary"
                    className="mt-3 d-none"
                    id="timeAlert"
                  >
                    The time limit should be within the given hours and should
                    be less than or equal to 3 hours.
                  </Alert>
                </FormGroup>
              </Form>
              <p>
                <b>Questions</b>{" "}
              </p>
              {question_data.map((item, index) => {
                return (
                  <div key={index} className="mt-4 mb-3">
                    <div className="d-flex">
                      <span className="text-black">
                        <b>Question {index + 1}.</b>
                        <span> {ReactHtmlParser(item.question)}</span>
                      </span>
                      <Button
                        className="text-primary ml-auto"
                        onClick={() => this.editQuestion(index)}
                      >
                        <FontAwesomeIcon
                          icon={faEdit}
                          className="justify-self-end"
                        />
                      </Button>
                    </div>
                    <div className="mb-2">Marks: {item.marks} M</div>
                    {item.file && (
                      <img src={item.file} width="75vw" alt="..." />
                    )}
                    <ol>
                      {item.options.map((opt, Oindex) => {
                        return (
                          <div key={Oindex}>
                            <li>
                              {ReactHtmlParser(opt)}
                            </li>
                          </div>
                        );
                      })}
                    </ol>
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
              <Form
                className="shadow-lg p-5 mb-5 bg-body rounded border-primary border"
                id="questionForm"
                onSubmit={this.addQuestion}
              >
                <FormGroup>
                  <Card className="mb-8">
                    <InputGroup className="d-flex">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          Question {question_data.length+1}
                        </InputGroupText>
                      </InputGroupAddon>
                      <Editor
                        editorState={this.state.questionState}
                        toolbarClassName="toolbar-class"
                        wrapperClassName="wrapper-class"
                        // editorClassName="demo-editor"
                        onEditorStateChange={this.onEditorQuestionStateChange}
                        editorStyle={{
                          minHeight: "100px",
                          border: "1px solid",
                          padding: "0 10px",
                        }}
                      />
                    </InputGroup>
                  </Card>
                </FormGroup>
                <div className="mt-5">
                  <ol>
                    {option_data.map((item, index, key) => {
                      return (
                        <div key={index} >
                          <Row>
                            <Col >

                              <li> {ReactHtmlParser(item)}</li>

                            </Col>
                            <Col>
                              <Button
                                className="text-primary ml-auto"
                                onClick={() => {
                                  var s = option_data.splice(index, 1);
                                  var x = this.state.correct.filter(i => i !== index);
                                  for (let i = 0; i < x.length; i++) {
                                    if (x[i] > index) x[i]--;
                                  }
                                  console.log(x);
                                  this.setState({ option_data: s, correct: x });
                                }}
                              >
                                <FontAwesomeIcon
                                  icon={faTrashAlt}
                                  className="justify-self-end text-danger"
                                />
                              </Button>
                            </Col>
                          </Row>
                        </div>
                      );
                    })}
                  </ol>
                </div>
                {this.state.options.length < 4 && (
                  <Card className="mb-8">
                    <InputGroup className="mt-2" style={{ width: "100%" }}>
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          Option {this.state.options.length + 1}
                        </InputGroupText>
                        <div className="text-right" style={{ marginLeft: "10vw" }}>
                          <Button
                            className="mb-1"
                            color="primary"
                            onClick={this.handleOption}
                            size="lg"
                          >
                            Add option
                          </Button>
                        </div>
                      </InputGroupAddon>
                      <Editor
                        editorState={this.state.optionState}
                        toolbarClassName="toolbar-class"
                        wrapperClassName="wrapper-class"
                        // editorClassName="demo-editor"
                        onEditorStateChange={this.onEditorOptionStateChange}
                        editorStyle={{
                          minHeight: "100px",
                          border: "1px solid",
                          padding: "0 10px",
                        }} />
                    </InputGroup>
                  </Card>
                )}


                {option_data.length > 0 &&
                  <Card>
                    <CardHeader>Check Correct Options</CardHeader>
                    <CardBody>
                      {option_data.map((opt, Oindex) => {
                        return (
                          <div key={Oindex} className="ml-5">
                            <input type="checkbox" value={opt} name="options" onChange={(e) => this.handleCorrect(Oindex, e)} id={opt} />
                            <label htmlFor={opt}>
                              {ReactHtmlParser(opt)}
                            </label>
                          </div>
                        );
                      })}
                    </CardBody>
                  </Card>
                }

                <InputGroup className="mt-2">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>Marks</InputGroupText>
                  </InputGroupAddon>
                  <Input
                    type="number"
                    min="0"
                    placeholder="Enter Marks"
                    value={this.state.marks}
                    onChange={this.handleMarks}
                    id="correct"
                    required
                  />
                </InputGroup>
                <div className="text-right">
                  <Button
                    className="mt-4"
                    color="primary"
                    type="submit"
                    form="questionForm"
                  >
                    Add Question
                  </Button>
                </div>
              </Form>
              <div className="text-center">
                <Button
                  className="mt-4"
                  color="primary"
                  type="submit"
                  form="quizForm"
                  id="submitBtn"
                  onClick={this.handleSubmit}
                >
                  Create Quiz
                </Button>
              </div>
            </CardBody>
          </Card>
        </Container>
        {this.state.quiz_data !== [] && this.state.editIndex !== null && (
          <Modal size="lg" style={{ maxWidth: '700px', width: '100%' }} isOpen={this.state.modal} toggle={this.toggle}>
            <ModalHeader toggle={this.toggle}>Edit Question</ModalHeader>
            <ModalBody>
              Edit Question
              <Form
                role="form"
                id="ModalForm"
                onSubmit={(e) => {
                  e.preventDefault();
                  this.SaveModalEdit(this.state.editIndex);
                }}
              >
                <Card className="mb-8">
                  <br />
                  Question
                  <br />
                  <InputGroup>
                    <Editor
                      editorState={this.state.questionEditState}
                      toolbarClassName="toolbar-class"
                      wrapperClassName="wrapper-class"
                      // editorClassName="demo-editor"
                      onEditorStateChange={this.onEditorQuestionEditStateChange}
                      editorStyle={{
                        minHeight: "100px",
                        border: "1px solid",
                        padding: "0 10px",
                      }} />
                  </InputGroup>
                </Card>
                <br />
                <b>Marks: </b>
                <InputGroup>
                  <Input
                    type="number"
                    min="0"
                    onChange={this.handleModalMarks}
                    value={this.state.modalMarks}
                  />
                </InputGroup>
                <ol>
                  {this.state.modalOptions.map((item, index, key) => {
                    return (
                      <div key={index} >
                        <Row>
                          <Col>
                            <li>{ReactHtmlParser(item)}</li>
                          </Col>
                          <Col>
                            <Button
                              className="text-primary ml-auto"
                              onClick={() => {
                                var modalOptionData = this.state.modalOptions;
                                var deleteOption = modalOptionData[index];
                                var s = modalOptionData.filter((element) => element !== deleteOption);
                                var x = this.state.modalCorrect.filter(i => i !== index);
                                for (let i = 0; i < x.length; i++) {
                                  if (x[i] > index) x[i]--;
                                }
                                console.log(x);
                                this.setState({ modalOptions: s, modalCorrect: x });
                              }}
                            >
                              <FontAwesomeIcon
                                icon={faTrashAlt}
                                className="justify-self-end text-danger"
                              />
                            </Button>
                          </Col>
                        </Row>
                      </div>
                    )
                  })}
                </ol>

                {this.state.modalOptions.length < 4 && (
                  <>
                    <Card className="mb-8">
                      <InputGroup className="mt-2" style={{ width: "100%" }}>
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            Option {this.state.options.length + 1}
                          </InputGroupText>
                        </InputGroupAddon>
                        <Editor
                          editorState={this.state.optionEditState}
                          toolbarClassName="toolbar-class"
                          wrapperClassName="wrapper-class"
                          // editorClassName="demo-editor"
                          onEditorStateChange={this.onEditorOptionEditStateChange}
                          editorStyle={{
                            minHeight: "100px",
                            border: "1px solid",
                            padding: "0 10px",
                          }} />
                      </InputGroup>
                    </Card>

                    <div className="text-right">
                      <Button
                        className="mt-4"
                        color="primary"
                        onClick={this.handleModalOption}
                        size="sm"
                      >
                        Add option
                      </Button>
                    </div>

                  </>
                )}

                {this.state.modalOptions.length > 0 &&
                  <Card>
                    <CardHeader>Check Correct Options</CardHeader>
                    <CardBody>
                      {this.state.modalOptions.map((opt, Oindex) => {
                        return (
                          <div key={Oindex} className="ml-5">
                            {this.state.modalCorrect.includes(Oindex) ?
                              <input type="checkbox" value={opt} name="option" onChange={(e) => this.handleModalCorrect(Oindex, e)} id={opt} checked /> :
                              <input type="checkbox" value={opt} name="option" onChange={(e) => this.handleModalCorrect(Oindex, e)} id={opt} />
                            }
                            <label htmlFor={opt}>
                              {ReactHtmlParser(opt)}
                            </label>
                          </div>
                        );
                      })}
                    </CardBody>
                  </Card>
                }

                <br />

              </Form>
            </ModalBody>
            <ModalFooter>
              <Button color="primary" type="submit" form="ModalForm">
                Save
              </Button>
              <Button color="secondary" onClick={() => this.onCancel()}>
                Cancel
              </Button>
            </ModalFooter>
          </Modal>
        )}
      </>
    );
  }
}
CreateQuiz.layout = Workshop;
export default CreateQuiz;
