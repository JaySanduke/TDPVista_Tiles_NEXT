import React from "react";
import DataTable from "react-data-table-component";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import firebase from "../../config/firebase-tiles";
import { Link } from "react-router-dom";
import User from "layouts/UserClassroom.js";
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
import Header from "components/Headers/UserClassDashboard.js";
import DocumentMeta from "react-document-meta";

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
    // firebase.auth().onAuthStateChanged((user) => {
    //   firebase.database().ref(`Admin/${user.uid}`).once("value")
        // .then((snap) => {
        //   var d = snap.val();
        //   if (d && d.type === 1) {
          let id = localStorage.getItem("u_id");
            this.setState({ id: id });
            var tts = this;
            if (id === undefined) {
              window.location.href = "/";
            }
            this.setState({ c_id: id });

            var x = [];
            
            // Fetches Data about Tasks
            firebase
              .database()
              .ref("Tasks/classT")
              .once("value")
              .then((snapshot) => {
                
                snapshot.forEach(function (childSnapshot) {
                  var childData = childSnapshot.val();
                  var arr = childData.data.classrooms;
                  var isTask = false;
                  for(let i of arr){
                    if(i.c_id === id){
                      isTask = true;
                      break;
                    }
                  }
                  if (isTask) {
                    var y = {
                      task_id: childData.data.task_id,
                      task_name: childData.data.task_name,
                      due_date: childData.data.due_date,
                    };
                    x.push(y);
                    // index++;
                  }
                });
                this.setState({
                  task_data: x,
                  search_data: x,
                });
              });
             
                
              
              //   }
        //   else {
        //     alert("only admins allowed ");
        //     window.location.href = "/";
        //   }
        // })
    // })
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
          <a href={"/UserClass/taskSubmit?id=" + id}>
            View
          </a>
        ),
      };
    });

    const meta = {
      title: "Tasks",
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

    return (
      <><DocumentMeta {...meta} />

        <Header />
        {/* Page content */}
        <Container className="mt--7" fluid>
          <Card>
            <CardHeader>
              <Row className="">
                <Col xs="12">
                  <h1 className="mb-0">Tasks</h1>
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

Task.layout = User;

export default Task;