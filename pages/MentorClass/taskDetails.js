import React from "react";
import DataTable from "react-data-table-component";
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
  Form,
  Input,
} from "reactstrap";
import MentorClassroom from "layouts/MentorClassroom.js";


// core components
import Header from "components/Headers/Header.js";

class taskDetails extends React.Component {
  constructor(props) {
    super(props);
    var today = new Date(),
      todayDate =
        today.getFullYear() +
        "-" +
        ((today.getMonth() + 1 < 10 ? "0" : "") + (today.getMonth() + 1)) +
        "-" +
        ((today.getDate() < 10 ? "0" : "") + today.getDate());

    this.RemoveClass = this.RemoveClass.bind(this);
    this.RemoveModal = this.RemoveModal.bind(this);
    this.toggle = this.toggle.bind(this);
    this.assignTask = this.assignTask.bind(this);
    this.search = this.search.bind(this);
    this.onCancel = this.onCancel.bind(this);
    this.toggleRemove = this.toggleRemove.bind(this);
    this.handlesSelectedClassroom = this.handlesSelectedClassroom.bind(this);
    this.deleteTask = this.deleteTask.bind(this);
    this.toggleDelete = this.toggleDelete.bind(this);
    this.setData = this.setData.bind(this);
    this.state = {
      today: todayDate,
      modal: false,
      removeModel: false,
      deleteModal: false,
      data: [],
      task_id: "",
      editorState: EditorState.createEmpty(),
      // Assigned in Classrooms
      attachment: [],
      // Not Assgined in
      assigned: [],
      classroom: [],
      classrooms: [],
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
            console.log(id);
            if (id === undefined) {
              window.location.href = "/MentorClass/studentSearch";
            }
            this.setState({ task_id: id });
            // var x = [];
            firebase
              .database()
              .ref("Tasks/classT/" + id + "/data")
              .once("value")
              .then((snapshot) => {
                var x = snapshot.val();
                if (x) {
                  this.setState({
                    data: x,
                    editorState: x.task_desc,
                    classrooms: x.classrooms,
                  });
                  document.getElementById("task_description").innerHTML =
                    x.task_desc;
                  document.getElementById("problem_statement").innerHTML =
                    x.problem_stat;
                }
              })
              .then(() => {
                var ids = [];
                if (this.state.data.classrooms) {
                  this.state.data.classrooms.map((item) => {
                    ids.push(item.c_id);
                    return null;
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
                    this.setState({ search_data: y, classroom: y });
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


  // Delete Task

  toggleDelete = () => {
    this.setState((prevState) => ({ deleteModal: !prevState.deleteModal }));
  }

  deleteTask = () => {
    firebase.database().ref("Tasks/classT").child(this.state.task_id).remove();
    if (this.state.data.attachments) {
      firebase.storage().ref("Tasks/classT/" + this.state.task_id).child("attachments").listAll().then(function (result) {
        result.items.forEach(function (file) {
          file.delete();
        });
      });
    }

    // Update task array in Classrooms
    this.state.classrooms.length>0 && this.state.classrooms.map((item) => {
      var z = [];
      firebase.database()
        .ref("Classroom/" + item.c_id + "/data/")
        .once('value')
        .then((snapshot) => {
          z = snapshot.val().task;
        }).then(() => {
          var arr = z.filter(i => i !== this.state.task_id);
          // console.log(z);
          firebase.database().ref("Classroom/" + item.c_id + "/data/")
          .update({
            task: arr,
          })
        }).then(() => {

          return null;
        })
    });

    this.toggleDelete();
    window.location.href = "/MentorClass/Task";
  }

  // Remove Classroom Functions
  toggleRemove = () => {
    this.setState((prevState) => ({ removeModel: !prevState.removeModel }));
  };

  RemoveClass = (c_id, c_name) => {
    var newClassrooms = (this.state.classrooms) ? this.state.classrooms.filter(item => item.c_id !== c_id) : [];

    var y = this.state.classroom;
    y.push({ c_id, classroomName: c_name});

    firebase
      .database()
      .ref("Tasks/classT/" + this.state.task_id + "/data/")
      .update({
        classrooms: newClassrooms
      })

      var z = [];
    firebase
      .database()
      .ref("Classroom/" + c_id + "/data/")
      .once('value')
      .then((snapshot) => {
        z = snapshot.val().task;
      }).then(() => {
          const a = z.filter(i => i !== this.state.task_id);
          firebase
            .database()
            .ref("Classroom/" + c_id + "/data/")
            .update({
              task : a,
            })
      })

    this.toggleRemove();
    alert("Task Removed From " + this.state.removeName);
    this.setState({ classrooms: newClassrooms, });
    // window.location.reload();
  };

  RemoveModal = (id, Name) => {
    this.setState({ removeId: id, removeName: Name });
    this.toggleRemove();
  };

  // Assign Task

  assignTask = () => {
    var x = [];
    if (this.state.data.classrooms !== undefined) {
      x = this.state.data.classrooms;
    }
    this.state.selectedRows.map((item) => {
      x.push(item);
      return null;
    });
    // create new this.state.classroom and search_data 
    // that do consists the assigned task
    var ids = [];
    x.map((item) => {
      ids.push(item.c_id);
      return null;
    });
    var y = [];
    y = (this.state.classroom) ? (this.state.classroom.filter(item => !ids.includes(item.c_id))) : [];
    // Assign new classroom to x
    firebase
      .database()
      .ref("Tasks/classT/" + this.state.task_id + "/data/")
      .update({
        classrooms: x,
      });

      this.state.selectedRows.map((item) => {
        var z = [];
        firebase.database()
          .ref("Classroom/" + item.c_id + "/data/")
          .once('value')
          .then((snapshot) => {
            z = snapshot.val().task;
            console.log(z);
          }).then(() => {
            if(z === undefined) { z = []; }
            z.push(this.state.task_id);
            console.log(z);
            firebase.database().ref("Classroom/" + item.c_id + "/data/")
            .update({
              task: z
            })
          }).then(() => {

            return null;
          })
      });
    this.setState({ classrooms: x, classroom: y, search_data: y });
    alert("Task Assigned To Classroom(s)");
    this.toggle();
    this.setState({ selectedRows: [] });
    // window.location.reload();
  };

  setData = () => {
    var temp = this.state.assigned;
    firebase.database().ref("Tasks/classT/" + this.state.task_id).child("data/")
      .update({
        classrooms: temp,
      });
    // console.log(this.state.assgined);
    window.location.reload();
    alert("Task Assigned To Classroom(s)");
    this.toggle();
  }

  toggle = () => {
    this.setState((prevState) => ({ modal: !prevState.modal }));
  };

  onCancel = () => {
    this.toggle();
    this.setState({ search_data: this.state.classroom });
  };

  search = (e) => {
    this.setState({ task: e.target.value })
    var data = this.state.classroom.filter((item) =>
      item.classroomName.includes(e.target.value)
    );
    this.setState({ search_data: data });
    // this.setState({ search_data: this.state.classroom });
    // var s = [];
    // this.state.classroom.map((item) => {
    //   if (item.classroomName.includes(e.target.value)) {
    //     s.push(item);
    //   }
    //   return null;
    // });
    // this.setState({ search_data: s });
  };

  handlesSelectedClassroom = (state) => {
    this.setState({ selectedRows: state.selectedRows });
  };


  render() {
    const header = [
      { name: "Classroom Id", selector: "c_id" },
      { name: "Classroom Name", selector: "classroomName", sortable: true },
      // { name: "Date Assigned", selector: "joined_date", sortable: true },
      { name: "Remove", selector: "remove" },
    ];

    const classroom_header = [
      { name: "Classroom Name", selector: "classroomName" },
      { name: "Classroom Id", selector: "c_id" },
    ];

    let body = [];
    if (this.state.data && this.state.data.classrooms !== undefined) {
      body = this.state.classrooms.map((item, index) => {
        return {
          c_id: item.c_id,
          classroomName: item.classroomName,
          remove: (
            <Button
              color="danger"
              size="sm"
              onClick={() => this.RemoveModal(item.c_id, item.classroomName)}
            >
              Remove
            </Button>
          ),
        };
      });
    }
    return (
      <>
        <Header />
        {/* Page content */}
        <Container className="mt--7" fluid>
          <Card>
            <CardHeader className="d-flex">
              <h1>
                Task Details:{" "}
                {this.state.data ? this.state.data.task_name : ""}
              </h1>

              
              
              
            </CardHeader>
            <CardBody className="px-2">
              {this.state.data && (
                <div className="col-md-9 py-sm-3">
                  <b>Name :</b> {this.state.data.task_name}
                  <br />
                  <b>Created On :</b> {this.state.data.created_date}
                  <br />
                  <b>Due Date :</b> {this.state.data.due_date} <br />
                  <br />
                  <b>Task Description:</b>
                  <p id="task_description"></p>
                  <br />
                  <b>Problem Statement:</b>
                  <p id="problem_statement"></p>
                  <br />
                  {this.state.data.attachments && (
                    <div>
                      <b>Attachment:</b>
                      {this.state.data.attachments.map((item, index) => {
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
              {/* <h3>Assigned In Classrooms:</h3>
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
                <a href={"/MentorClass/EditTask?id=" + this.state.task_id}> <Button color="info">Edit Task</Button> </a>
                <a href={"/MentorClass/TasksSubmitted?id=" + this.state.task_id}> <Button color="primary">Tasks Submitted</Button> </a>
                <Button className="mx-auto" color="danger" size="md" onClick={this.toggleDelete}>Delete Task</Button>
              </div>
            </CardBody>
          </Card>
        </Container>
        {/* <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>Add Task To Classroom</ModalHeader>
          <ModalBody>
            Assign The Task to Following Classrooms:
            <br />
            <Form>
              <Input
                type="text"
                onChange={this.search}
                placeholder="Enter Classroom Name"
              />
            </Form>
            <DataTable
              columns={classroom_header}
              data={this.state.search_data}
              selectableRows
              pagination
              Clicked
              onSelectedRowsChange={this.handlesSelectedClassroom}
            />
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={() => this.assignTask()}>
              Assign
            </Button>{" "}
            <Button color="secondary" onClick={() => this.onCancel()}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
        <Modal isOpen={this.state.removeModel} toggle={this.toggleRemove}>
          <ModalHeader toggle={this.toggleRemove}>
            Remove Task From Classroom
          </ModalHeader>
          <ModalBody>
            Remove the task from the classroom: {this.state.removeName}
          </ModalBody>
          <ModalFooter>
            <Button
              color="danger"
              onClick={() => this.RemoveClass(this.state.removeId)}
            >
              Remove
            </Button>{" "}
            <Button
              color="secondary"
              onClick={() => this.setState({ removeModel: false })}
            >
              Cancel
            </Button>
          </ModalFooter>
        </Modal> */}
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
              onClick={() => this.deleteTask}
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

taskDetails.layout = MentorClassroom;

export default taskDetails;
