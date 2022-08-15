import React from "react";
import DataTable from 'react-data-table-component';
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  Container,
  Row,
  Col,
  Form,
  FormGroup,
  InputGroup,
  Input,
} from "reactstrap";

import firebase from "../../config/firebase-tiles";
import Header from "components/Headers/Header.js";
import { Link } from 'react-router-dom';
import MentorWorkshop from 'layouts/MentorWorkshop.js';

class WorkshopQuiz extends React.Component {
  constructor(props) {
    super(props);
    this.handleSearchSubmit = this.handleSearchSubmit.bind(this);
    this.reset = this.reset.bind(this);
    this.handleTask = this.handleTask.bind(this);
    this.state = {
      quiz_data: [],
      search_data: [],
      task: "",
      w_id: "",
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
            if (id === undefined) {
              window.location.href = "/";
            }
            this.setState({ w_id: id });
            // console.log(this.state.w_id);

            var x = [];
            const db = firebase.database();
            const ref = db.ref("Quiz/workshopQ");
            ref.once("value").then((snapshot) => {
              snapshot.forEach(function (childSnapshot) {
                var childData = childSnapshot.val();
                if (childData.data.w_id === id) {
                  x.push(childData);
                  // console.log(childData);
                }
              });
              var data = snapshot.val();
              if (data) {
                this.setState({ quiz_data: x, search_data: x });
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
    this.setState({ search_data: this.state.quiz_data, task: "" });
    document.getElementById("search").value = "";
  };

  handleTask = (e) => {
    this.setState({ task: e.target.value });
    console.log(this.state.quiz_data);
    var data = this.state.quiz_data.filter((item) =>
      item.data.name.includes(e.target.value)
    );
    this.setState({ search_data: data });
  };

  handleSearchSubmit = (e) => {
    e.preventDefault();
    var s = this.state.task;
    var data = this.state.quiz_data.filter((item) => item.name === s);
    this.setState({ search_data: data });
  };

  render() {
    const header = [
      { name: "Quiz Name", selector: "quiz_name", sortable: true },
      { name: "Available From", selector: "start" },
      { name: "Available Till", selector: "end" },
      { name: "View Details", selector: "btn" },
    ];

    const body = this.state.search_data.map((item) => {
      const id = item.data.quiz_id;
      return {
        quiz_name: item.data.name,
        start: item.data.start_date + " " + item.data.start_time,
        end: item.data.end_date + " " + item.data.end_time,
        btn: (
          <a
            href={"/MentorWorkshop/WorkshopQuizDetails?id=" + this.state.w_id + "&q_id=" + id}
          >
            View Details
          </a>
        ),
      };
    });

    return (
      <>
        <Header />
        {/* Page content */}
        <Container className="mt--7" fluid>
          <Row>
            <Col className="border-xl-1">
              <Card className="bg-secondary shadow">
                <CardHeader>
                  <Row className="align-items-center">
                    <Col xs="12">
                      <h3 className="mb-0">Quiz</h3>
                    </Col>
                    <Col className="col text-right">

                      {/* <Link to="/admin/createQuiz" className="text-white">Create Quiz</Link> */}
                      <a href={"/MentorWorkshop/CreateQuiz"}>
                        <Button
                          color="primary"
                          onClick={(e) => e.preventDefault()}
                        >
                          Create Quiz
                        </Button>
                      </a>
                    </Col>
                  </Row>
                </CardHeader>
                <Card className="m-4">

                  <Form
                    role="form"
                    onSubmit={this.handleSearchSubmit}
                    className="mb-4"
                  >
                    <FormGroup>
                      <InputGroup>
                        <Input
                          type="text"
                          placeholder="Enter Quiz Name"
                          onChange={this.handleTask}
                          id="search"
                        />
                      </InputGroup>
                    </FormGroup>
                    <Button onClick={this.reset}>Reset</Button>
                  </Form>
                </Card>
                <CardBody>
                  <DataTable title="Quizes" columns={header} data={body} pagination={true} />
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}
WorkshopQuiz.layout = MentorWorkshop;
export default WorkshopQuiz;