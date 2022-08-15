import React from "react";
import DataTable from 'react-data-table-component';
import Admin from "layouts/Admin.js";
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  Container,
  Row,
  Col,
} from "reactstrap";

import firebase from "../../config/firebase-tiles";
import Header from "components/Headers/admin.js";

import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrashAlt } from "@fortawesome/free-solid-svg-icons";

class Quiz extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quiz_data: [],
    };
  }

  componentDidMount() {
    firebase.auth().onAuthStateChanged((user) => {
      firebase.database().ref(`Admin/${user.uid}`).once("value")
        .then((snap) => {
          var d = snap.val();
          if (d && d.type === 1) {

            var x = [];
            const db = firebase.database();
            const ref = db.ref("Quiz/classQ");
            ref.once("value").then((snapshot) => {
              snapshot.forEach(function (childSnapshot) {
                var childData = childSnapshot.val();
                x.push(childData);
              });
              var data = snapshot.val();
              if (data) {
                this.setState({ quiz_data: x });
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

  render() {
    const header = [
      { name: "Quiz Name", selector: "quiz_name", sortable: true },
      { name: "Available From", selector: "start" },
      { name: "Available Till", selector: "end" },
      { name: "View Details", selector: "btn" },
    ];

    const body = this.state.quiz_data.map((item) => {
      const id = item.data.quiz_id;
      return {
        quiz_name: item.data.name,
        start: item.data.start_date + " " + item.data.start_time,
        end: item.data.end_date + " " + item.data.end_time,
        btn: (
          <a href={"/admin/quizDetails?id=" + id}>
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
          <Row>
            <Col className="border-xl-1">
              <Card className="bg-secondary shadow">
                <CardHeader>
                  <Row className="align-items-center">
                    <Col xs="12">
                      <h3 className="mb-0">Quiz</h3>
                    </Col>
                    <Col className="col text-right">
                      <a href="/admin/CreateQuiz" className="text-white">
                        <Button
                          color="primary"
                        // onClick={(e) => e.preventDefault()}
                        >
                          Create Quiz
                        </Button>
                      </a>
                    </Col>
                  </Row>
                </CardHeader>
                <CardBody>
                  <DataTable
                    title="Quizes"
                    columns={header}
                    data={body}
                    pagination={true}
                  />
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

Quiz.layout = Admin;

export default Quiz;