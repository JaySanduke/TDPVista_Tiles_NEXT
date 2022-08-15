import React from "react";
import DataTable from "react-data-table-component";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import firebase from "../../config/firebase-tiles";
import { Link } from "react-router-dom";
import MentorClassroom from "layouts/MentorWorkshop.js";
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
import Header from "components/Headers/Header.js";

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
      firebase.database().ref(`mentors/${user.uid}`).once("value")
    .then((snap) => {
      var d = snap.val();
      if (d && d.type === 2) {
    var x = [];
    var currenturl = window.location.search;
    var currenturlsearch = new URLSearchParams(currenturl);
    var t_id = currenturlsearch.get("t_id");
    var id = currenturlsearch.get("id");
    firebase
      .database()
      .ref("TaskSubmit/workshopT/"+ id + "/" + t_id + "/")
      .once("value")
      .then((snapshot) => {
        snapshot.forEach(function (childSnapshot) {
          var childData = childSnapshot.val();
          console.log(childData);
          var userData = childData.data;
            for(let e in userData){
                x.push({
                    user_name: userData[e].user_name,
                    SubmittedTask : userData[e].attachments,
                    submitDate : userData[e].submitDate,
                })
            }
        //   childData.data.classrooms.map((item) => {
        //     if (item.c_id == id) {
        //       x.push({
        //         task_name: childData.data.task_name,
        //         task_id: childData.data.task_id,
        //         due_date: childData.data.due_date,
        //       });
        //     }
        //   });
        });
        console.log(x);
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
      item.user_name.includes(e.target.value)
    );
    this.setState({ search_data: data });
  };

  handleSearchSubmit = (e) => {
    e.preventDefault();
    var s = this.state.task;
    var data = this.state.task_data.filter((item) => item.user_name === s);
    this.setState({ search_data: data });
  };

  render() {
    const column = [
      { name: "User Name", selector: "user_name", sortable: true },
      { name: "Submitted Files", selector: "btn" },
      { name: "Submitted Date", selector: "due_date" },
    ];

    const body = this.state.search_data.map((item) => {
    //   const id = item.task_id;
      return {
        user_name: item.user_name,
        due_date: item.submitDate,
        btn: (
            <ul>
                {
                item.SubmittedTask.map(i => {
                    return (
                        <li>
                        <a href={i.url}>{i.name}</a>
                        </li>
                    )
                    
                })
                }
             </ul>
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

Task.layout = MentorClassroom;

export default Task;
