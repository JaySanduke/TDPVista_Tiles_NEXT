import React from "react";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { EditorState } from "draft-js";
import firebase from "../../config/firebase-tiles";
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
} from "reactstrap";

// core components
import Header from "components/Headers/Header.js";
import Workshop from 'layouts/MentorWorkshop.js';

class WorkshoptaskDetails extends React.Component {
  constructor(props) {
    super(props);
    var today = new Date(),
      todayDate =
        today.getFullYear() +
        "-" +
        ((today.getMonth() + 1 < 10 ? "0" : "") + (today.getMonth() + 1)) +
        "-" +
        ((today.getDate() < 10 ? "0" : "") + today.getDate());


    this.RemoveModal = this.RemoveModal.bind(this);
    this.deleteTask = this.deleteTask.bind(this);
    this.toggleDelete = this.toggleDelete.bind(this);
    this.state = {
      w_id: "",
      today: todayDate,
      modal: false,
      removeModel: false,
      deleteModal: false,
      data: [],
      task_id: "",
      // this.props.location.state !== undefined
      //   ? this.props.location.state.id
      //   : "",
      editorState: EditorState.createEmpty(),
      // Assigned in Classrooms
      attachment: [],
    };
  }

  // Delete Task

  toggleDelete = () => {
    this.setState((prevState) => ({ deleteModal: !prevState.deleteModal }));
  }

  deleteTask = () => {
    console.log("a");
    firebase.database().ref("Workshops/" + this.state.data.data.w_id + "/data/").once("value").then((snapshot) => {
      console.log("a");
      var data = snapshot.val();
      var x = data.task;
      if (x === undefined) { x = []; }
      else {
        var i = x.indexOf(this.state.task_id);
        x.splice(i, 1);
      }
      firebase.database().ref("Workshops/" + this.state.data.data.w_id + "/data/").update({
        task: x
      });
    })
    firebase.database().ref("Tasks/workshopT").child(this.state.task_id).remove();
    if (this.state.data.data.attachments) {
      firebase.storage().ref("Tasks/workshopT/" + this.state.task_id).child("attachments").listAll().then(function (result) {
        result.items.forEach(function (file) {
          file.delete();
        });
      });
    }
    this.toggleDelete();
    window.location.href = `/MentorWorkshop/WorkshopsTask?id=${this.state.w_id}`;
  }

  RemoveModal = (id, Name) => {
    this.setState({ removeId: id, removeName: Name });
    this.toggleRemove();
  };


  componentDidMount() {

    firebase.auth().onAuthStateChanged((user) => {
      firebase.database().ref(`mentors/${user.uid}`).once("value")
        .then((snap) => {
          var d = snap.val();
          if (d && d.type === 2) {
            var currenturl = window.location.search;
            var currenturlsearch = new URLSearchParams(currenturl);
            var id = currenturlsearch.get("t_id");
            var w_id = currenturlsearch.get("id");
            console.log(id);
            if (id === undefined || id === null) {
              window.location.href = "/";
            }
            this.setState({ task_id: id, w_id: w_id });

            var x = [];
            firebase
              .database()
              .ref("Tasks/workshopT/" + id + "/")
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

              });
            if (this.state.data === undefined || this.state.data === null) {
              window.location.href = `/MentorWorkshop/WorkshopTask?id=${w_id}`;
            }
          }
          else {
            alert("only admins allowed ");
            window.location.href = "/";
          }
        })
    })
  }

  render() {
    return (
      <>
        <Header />
        {/* Page content */}
        <Container className="mt--7" fluid>
          <Card>
            <CardHeader className="d-flex">
              <h1>
                Task Details:{" "}
                {this.state.data.data ? this.state.data.data.task_name : ""}
              </h1>

            </CardHeader>
            <CardBody className="px-2">
              
              
              {this.state.data.data && (
                <div className="col-md-9 py-sm-3">
                  <b>Name :</b> {this.state.data.data.task_name}
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
                  <br />
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

              <div className="text-right">
              <a
                href={"/MentorWorkshop/WorkshopEditTask?id=" + this.state.w_id + "&t_id=" + this.state.task_id}
              >
                <Button color="info" className="mr-2">Edit Task</Button>
                
              </a>
              <a
                href={"/MentorWorkshop/TasksSubmitted?id=" + this.state.w_id + "&t_id=" + this.state.task_id}
              >
                <Button color="primary" className="mr-2">Tasks Submitted</Button>
                
              </a>
                <Button className="mx-auto" color="danger" size="md" onClick={this.toggleDelete}>Delete Task</Button>
              </div>
            </CardBody>
          </Card>
        </Container>
        <Modal isOpen={this.state.deleteModal} toggle={this.toggleDelete}>
          <ModalHeader toggle={this.toggleDelete}>
            Delete
          </ModalHeader>
          <ModalBody>
            Delete the task !
          </ModalBody>
          <ModalFooter>
            <Button
              color="danger"
              onClick={this.deleteTask}
            >
              Delete
            </Button>{" "}
            <Button
              color="secondary"
              onClick={this.toggleDelete}
            >
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
      </>
    );
  }
}
WorkshoptaskDetails.layout = Workshop;
export default WorkshoptaskDetails;
