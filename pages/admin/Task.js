import React from "react";
import DataTable from "react-data-table-component";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import firebase from "../../config/firebase-tiles";
import { Link } from "react-router-dom";
import Admin from "layouts/Admin.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  Container,
  Form,
  FormGroup,
  Input,
  Row,
  Col,
  InputGroup,
} from "reactstrap";
// core components
import Header from "components/Headers/admin.js";


class Task extends React.Component {
  constructor(props) {
    super(props);

    this.handleSearchSubmit = this.handleSearchSubmit.bind(this);
    this.handleTask = this.handleTask.bind(this);
    this.reset = this.reset.bind(this);
    this.state = {
      task_data: [],
      search_data: [],
      task: "",
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
              .ref("Tasks/classT/")
              .once("value")
              .then((snapshot) => {
                snapshot.forEach(function (childSnapshot) {
                  var childData = childSnapshot.val();
                  x.push({
                    task_name: childData.data.task_name,
                    task_id: childData.data.task_id,
                    due_date: childData.data.due_date,
                  });
                });
                var data = snapshot.val();
                if (data) {
                  this.setState({
                    task_data: x,
                    search_data: x,
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

  reset = (e) => {
    this.setState({ search_data: this.state.task_data, task: "" });
    document.getElementById("search").value = "";
  };

  handleTask = (e) => {
    this.setState({ task: e.target.value });
    var data = this.state.task_data.filter((item) =>
      item.task_name.includes(e.target.value)
    );
    this.setState({ search_data: data });
  };

  handleSearchSubmit = (e) => {
    e.preventDefault();
    var s = this.state.task;
    var data = this.state.task_data.filter((item) => item.task_name === s);
    this.setState({ search_data: data });
  };

  render() {
    const column = [
      { name: "Task Name", selector: "task_name", sortable: true },
      { name: "View Details", selector: "btn" },
      { name: "Due Date", selector: "due_date" },
    ];

    const body = this.state.search_data.map((item) => {
      const id = item.task_id;
      return {
        task_name: item.task_name,
        due_date: item.due_date,
        btn: (
          <a href={"/admin/taskDetails?id=" + id}>
            <Button color="info">
            <FontAwesomeIcon
                          icon={faEdit}
                          className="justify-self-end"
                        />
            </Button>
            
          </a>
        ),
      };
    });

    return (
      <>
        <Header />
        {/* Page content */}
        <Container className="mt--7" fluid>
          <Card>
            <CardHeader>
              <Row className="">
                <Col xs="12">
                  <h1 className="mb-0">Tasks</h1>
                </Col>
                <Col className="col text-right align-self-center">
                  <Button
                    color="primary"
                    size="sm"
                    onClick={() => {
                      window.location.href = "/admin/createTask";
                    }}
                  >
                    Create Task
                  </Button>
                </Col>
              </Row>
            </CardHeader>
            <CardBody>
              <Form
                role="form"
                onSubmit={this.handleSearchSubmit}
                className="mb-4"
              >
                <FormGroup>
                  <InputGroup>
                    <Input
                      type="text"
                      placeholder="Enter Task Name"
                      onChange={this.handleTask}
                      id="search"
                    />
                  </InputGroup>
                </FormGroup>
                <Button type="submit">Search</Button>
                <Button onClick={this.reset}>Reset</Button>
              </Form>
              <DataTable
                title="Task Data"
                columns={column}
                data={body}
                pagination={true}
                persistTableHead
              />
            </CardBody>
          </Card>
        </Container>
      </>
    );
  }
}

Task.layout = Admin;

export default Task;