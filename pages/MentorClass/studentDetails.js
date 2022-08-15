import React from "react";
import DataTable from "react-data-table-component";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import firebase from "../../config/firebase-tiles";
import MentorClassroom from "layouts/MentorClassroom.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  Container,
  Form,
  Row,
  Col,
  FormGroup,
  Input,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "reactstrap";

// core components
import Header from "components/Headers/Header.js";

class studentDetail extends React.Component {
  constructor(props) {
    super(props);
    var today = new Date(),
      todayDate =
        today.getFullYear() +
        "-" +
        ((today.getMonth() + 1 < 10 ? "0" : "") + (today.getMonth() + 1)) +
        "-" +
        ((today.getDate() + 1 < 10 ? "0" : "") + (today.getDate() + 1));

    this.toggle = this.toggle.bind(this);
    this.search = this.search.bind(this);
    // this.addUser = this.addUser.bind(this);
    this.handlesSelectedClassroom = this.handlesSelectedClassroom.bind(this);
    // this.RemoveClass = this.RemoveClass.bind(this);
    // this.RemoveModal = this.RemoveModal.bind(this);
    // this.onCancel = this.onCancel.bind(this);
    this.toggle2 = this.toggle2.bind(this);
    this.toggleBlock = this.toggleBlock.bind(this);
    this.blockAct = this.blockAct.bind(this);
    this.state = {
      today: todayDate,
      modal: false,
      removeModel: false,
      data: [],
      u_id: "",
      // Enrolled Classrooms
      classData: [],
      // Classrooms Not Enrolled
      classroom: [],
      search_data: [],
      add_classroom: [],
      blockModal: false,
    };
  }

  componentDidMount() {
    var currenturl = window.location.search;
    var currenturlsearch = new URLSearchParams(currenturl);
    var id = currenturlsearch.get("id");

    console.log(id);
    if (id === undefined) {
      window.location.href = "/";
    }
    this.setState({ u_id: id });
    var x = [];
    firebase
      .database()
      .ref("users/" + id)
      .once("value")
      .then((snapshot) => {
        var x = snapshot.val();
        var classData = x.classroom;
        if (x && x !== null && classData !== null) {
          this.setState({
            data: x,
            classData: classData,
          });
        }
        if (
          classData === null &&
          classData === "null" &&
          classData === undefined
        ) {
          this.setState({ classData: [] });
        }
      });
  }

  // Remove Classroom Functions
  toggle2 = () => {
    this.setState((prevState) => ({ removeModal: !prevState.removeModel }));
  };

  onCancel = () => {
    this.toggle();
    this.setState({ search_data: this.state.classroom });
  };

  toggle = () => {
    this.setState((prevState) => ({ modal: !prevState.modal }));
  };

  // Block Modal
  toggleBlock = () => {
    this.setState((prevState) => ({ blockModal: !prevState.blockModal }));
  };

  blockAct = () => {
    if (this.state.data.blocked) {
      firebase
        .database()
        .ref("users/" + this.state.u_id)
        .child("blocked")
        .remove();
      this.toggleBlock();
    } else {
      firebase
        .database()
        .ref("users/" + this.state.u_id)
        .update({
          blocked: 1,
        });
      this.toggleBlock();
    }
    window.location.reload();
  };

  search = (e) => {
    this.setState({ search_data: this.state.classroom });
    var s = [];
    this.state.classroom.map((item) => {
      if (item.classroomName.includes(e.target.value)) {
        s.push(item);
      }
      return null;
    });
    this.setState({ search_data: s });
  };

  handlesSelectedClassroom = (state) => {
    this.setState({ selectedRows: state.selectedRows });
  };

  render() {
    const header = [
      { name: "Classroom Id", selector: "c_id" },
      { name: "Classroom Name", selector: "classroomName", sortable: true },
      { name: "Date Joined", selector: "joined_date", sortable: true },
      { name: "Remove", selector: "remove" },
    ];

    const classroom_header = [
      { name: "Classroom Name", selector: "classroomName" },
      { name: "Classroom Id", selector: "c_id" },
    ];

    return (
      <>
        <Header />
        {/* Page content */}

        {/* <CardBody className="px-2">
              <div className="row align-items-center">
                <div className="align-items-center col-md-3 justify-content-center">
                  <img
                    alt="..."
                    className="rounded-circle"
                    width="100px"
                    src={this.state.data.profilepic}
                  />
                </div>
                <div className="col-md-9 py-sm-3">
                  <b>Name :</b> {this.state.data.username}
                  <br />
                  <b>E-mail :</b> {this.state.data.email}
                  <br />
                  <b>User Id :</b> {this.state.data.user_uid} <br />
                </div>
              </div>
              <br /> */}
        <Container className="mt--7" fluid>
          <Row>
            <Col className="order-xl-2 mb-5 mb-xl-0" xl="4">
              <Card className="card-profile shadow">
                <Row className="justify-content-center">
                  <Col className="order-lg-2" lg="3">
                    <div className="card-profile-image">
                      <a href="#pablo" onClick={(e) => e.preventDefault()}>
                        <img
                          alt="..."
                          className="rounded-circle "
                          height="150"
                          width="150"
                          id="profile"
                          src={this.state.data.profilepic}
                        />
                      </a>
                    </div>
                  </Col>
                </Row>
                <CardHeader className="text-center border-0 pt-8 pt-md-4 pb-0 pb-md-4"></CardHeader>
                <CardBody className="pt-5 mt-5 pt-md-4">
                  <div className="text-center">
                    <h3>{this.state.data.username}</h3>
                    <div className="h5 font-weight-300">
                      <i className="ni location_pin mr-2" />
                      {this.state.data.state + " " + this.state.data.country}
                    </div>
                  </div>
                </CardBody>
              </Card>
            </Col>
            <Col className="order-xl-1" xl="8">
              <Card className="bg-secondary shadow">
                <CardHeader className="bg-white border-0">
                  <Row className="align-items-center">
                    <Col xs="8">
                      <h3 className="mb-0">User Detail</h3>
                    </Col>
                  </Row>
                </CardHeader>
                <CardBody>
                  <Form>
                    <h6 className="heading-small text-muted mb-4">
                      User information
                    </h6>

                    <div className="pl-lg-4">
                      <Row>
                        <Col lg="6">
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="input-username"
                            >
                              Name
                            </label>
                            <Input
                              disabled
                              className="form-control-alternative"
                              value={this.state.data.username}
                              id="input-username"
                              placeholder="Username"
                              type="text"
                            />
                          </FormGroup>
                        </Col>
                      </Row>
                      <Row></Row>
                    </div>
                    <hr className="my-4" />
                    {/* Address */}
                    <h6 className="heading-small text-muted mb-4">
                      Contact information
                    </h6>
                    <div className="pl-lg-4">
                      <Row></Row>
                      <Row>
                        <Col lg="4">
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="input-city"
                            >
                              State
                            </label>
                            <Input
                              disabled
                              className="form-control-alternative"
                              value={this.state.data.state}
                              id="input-city"
                              placeholder="City"
                              type="text"
                            />
                          </FormGroup>
                        </Col>
                        <Col lg="4">
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="input-country"
                            >
                              Country
                            </label>
                            <Input
                              disabled
                              className="form-control-alternative"
                              value={this.state.data.country}
                              id="input-country"
                              placeholder="Country"
                              type="text"
                            />
                          </FormGroup>
                        </Col>
                      </Row>
                    </div>
                    <hr className="my-4" />
                    {/* Description */}
                    <h6 className="heading-small text-muted mb-4">About me</h6>
                    <div className="pl-lg-4">
                      <FormGroup>
                        <label>About Me</label>
                        <Input
                          disabled
                          className="form-control-alternative"
                          rows="4"
                          value={this.state.data.bio}
                          type="textarea"
                        />
                      </FormGroup>
                    </div>
    <div className="pl-lg-4">
                    <Row>
                      <Col lg="6">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-country"
                          >
                            High School
                          </label>
                          <Input
                            disabled
                            className="form-control-alternative"
                            value={this.state.data.hschool}
                            id="input-country"
                            placeholder="Country"
                            type="text"
                          />
                        </FormGroup>
                      </Col>

                      <Col lg="6">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-country"
                          >
                            High Secondary School
                          </label>
                          <Input
                            disabled
                            className="form-control-alternative"
                            value={this.state.data.hsecschool}
                            id="input-country"
                            placeholder="Country"
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row className="align-items-center">
                      <Col lg="6">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-country"
                          >
                            Graduation
                          </label>
                          <Input
                            disabled
                            className="form-control-alternative"
                            value={this.state.data.graduation}
                            id="input-country"
                            placeholder="Country"
                            type="text"
                          />
                        </FormGroup>
                      </Col>

                      <Col lg="6">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-country"
                          >
                            College
                          </label>
                          <Input
                            disabled
                            className="form-control-alternative"
                            value={this.state.data.college}
                            id="input-country"
                            placeholder="Country"
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    </div>
                  </Form>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

studentDetail.layout = MentorClassroom;

export default studentDetail;
