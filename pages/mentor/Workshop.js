import React from "react";
import DataTable from "react-data-table-component";
import Mentor from "layouts/Mentor.js";
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
import { Link } from "react-router-dom";

class Workshops extends React.Component {
  constructor(props) {
    super(props);

    this.handleSearchSubmit = this.handleSearchSubmit.bind(this);
    this.handleTask = this.handleTask.bind(this);
    this.reset = this.reset.bind(this);
    this.state = {
      w_data: [],
      search_data: [],
      task: "",
    };
  }

  componentDidMount() {
    var x = [];
    firebase.auth().onAuthStateChanged((user) => {
      firebase.database().ref(`mentors/${user.uid}`).once("value")
        .then((snap) => {
          var d = snap.val();
          if (d && d.type === 2) {
            if(d.workshops){
              d.workshops.map(item => {
                  firebase
                    .database()
                    .ref(`Workshops/${item}`)
                    .once("value")
                    .then((snapshot) => {
                      var childData = snapshot.val();
                      x.push({
                        title: childData ? childData.data.w_details.workshopTitle : "",
                        duration: childData ? childData.data.w_details.Workshop_duration : "",
                        starting_date: childData ? childData.data.w_details.starting_date : "",
                        end_date:childData ?  childData.data.w_details.end_date : "",
                        w_id:childData ? childData.data.w_id : "",
                        blocked:childData ? childData.data.blocked : false ,

                      });
                    }).then(() => {
                      this.setState({ w_data: x, search_data: x });
                      return null;
                    })
              })
            }
            // firebase.database()
            //   .ref("Workshops/")
            //   .once("value").then((snapshot) => {
            //     snapshot.forEach(function (childSnapshot) {
            //       var childData = childSnapshot.val();
            //       x.push(childData);
            //     });
            //     var data = snapshot.val();
            //     if (data) {
                  // this.setState({ w_data: x, search_data: x });
            //     }
            //   });
          }
          else {
            window.location.href = "/";
          }
        })
    })
  }

  reset = (e) => {
    this.setState({ search_data: this.state.w_data, task: "" });
    document.getElementById("search").value = "";
  };

  handleTask = (e) => {
    this.setState({ task: e.target.value });
    var data = this.state.w_data.filter((item) =>
      item.data.w_details.workshopTitle.includes(e.target.value)
    );
    this.setState({ search_data: data });
  };

  handleSearchSubmit = (e) => { 
    e.preventDefault();
    var s = this.state.task;
    var data = this.state.w_data.filter((item) => item.data.w_details.workshopTitle === s);
    this.setState({ search_data: data });
  };

  render() {
    const header = [
      { name: "Title", selector: "workshop_name", sortable: true },
      { name: "Duration", selector: "workshop_duration", sortable: true },
      { name: "Starting Date", selector: "start" },
      { name: "End Date", selector: "end" },
      { name: "View Details", selector: "btn" },
    ];

    const body = this.state.search_data.map((item) => {
      const id = item.w_id;
      return {
        workshop_name: item.title,
        workshop_duration: item.duration,
        start: item.starting_date,
        end: item.end_date,
        btn: (item.blocked ? <Button color="danger">Blocked</Button> : <Button  href={"/MentorWorkshop/Workshopdetails?id=" + id} color="primary"><a>View Details</a></Button>),
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
                      <h3 className="mb-0">Workshop</h3>
                    </Col>
                    <Col className="col text-right">
                      <Button
                        color="primary"
                        onClick={(e) => e.preventDefault()}
                      >
                        <a href="/mentor/CreateWorkshop" className="text-white">
                          Create Workshop
                        </a>
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
                    <Button onClick={this.reset}>Reset</Button>
                  </Form>
                  <DataTable
                    title="Workshops"
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

Workshops.layout = Mentor;

export default Workshops;
