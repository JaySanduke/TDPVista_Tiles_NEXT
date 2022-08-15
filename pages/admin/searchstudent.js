import React from "react";
import DataTable from "react-data-table-component";
// import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import firebase from "config/firebase-tiles.js";
import { Link } from "react-router-dom";
import Admin from "layouts/Admin.js";

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
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  InputGroupAddon,
  InputGroupText
} from "reactstrap";
// core components
import Header from "components/Headers/admin.js";


class Search extends React.Component {
  constructor(props) {
    super(props);
    this.handleField = this.handleField.bind(this);
    this.handleMail = this.handleMail.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.reset = this.reset.bind(this);
    this.toggle = this.toggle.bind(this);
    this.blockUserModal = this.blockUserModal.bind(this);
    this.handleUsername = this.handleUsername.bind(this);
    this.handleUserMail = this.handleUserMail.bind(this);
    this.showPassFunction = this.showPassFunction.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
    this.handleRePassword = this.handleRePassword.bind(this);
    this.toggle2 = this.toggle2.bind(this);
    this.handleCreate = this.handleCreate.bind(this);
    this.blockUser = this.blockUser.bind(this);
    this.state = {
      createModal: false,
      modal: false,
      field: "",
      user_data: [],
      search_data: [],
      mail: "",
      // Form Values
      username: "",
      email: "",
      user_uid: "",
      repassword: "",
      checkRePassFunction: false,
      password: "",
      checkPass: [false, false, false, false, false, false],
    };
  }

  componentDidMount() {
    firebase.auth().onAuthStateChanged((user) => {
      firebase.database().ref(`Admin/${user.uid}`).once("value")
        .then((snap) => {
          var d = snap.val();
          if (d && d.type === 1) {

            var x = [];
            var tts = this;
            firebase
              .database()
              .ref("users/")
              .once("value")
              .then((snapshot) => {
                snapshot.forEach(function (childSnapshot) {
                  var childData = childSnapshot.val();
                  x.push({
                    username: childData.username,
                    email: childData.email,
                    id: childData.user_uid,
                    blocked: (childData.blocked === 1) ? false : true,
                  });
                });
                var data = snapshot.val();
                if (data) {
                  console.log(data);
                  tts.setState({
                    user_data: x,
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
    this.setState({ search_data: this.state.user_data, mail: "" });
    document.getElementById("search").value = "";
  };

  toggle = () => {
    this.setState((prevState) => ({ modal: !prevState.modal }));
  };

  handleField = (e) => {
    this.setState({ field: e.target.value });
  };

  handleMail = (e) => {
    this.setState({ mail: e.target.value });
    var data = this.state.user_data.filter((item) =>
      item.username.includes(e.target.value)
    );
    this.setState({ search_data: data });
  };

  // Form Functions
  toggle2 = () => {
    this.setState((prevState) => ({ createModal: !prevState.createModal }));
  };

  handleUserMail = (e) => {
    this.setState({ email: e.target.value });
  };

  handleUsername = (e) => {
    this.setState({ username: e.target.value });
  };

  hasLowerCase(str) {
    return /[a-z]/.test(str);
  }
  hasUpperCase(str) {
    return /[A-Z]/.test(str);
  }

  hasNumeric(str) {
    return /[0-9]/.test(str);
  }

  similarity(s1, s2) {
    var longer = s1;
    var shorter = s2;
    if (s1.length < s2.length) {
      longer = s2;
      shorter = s1;
    }
    var longerLength = longer.length;
    if (longerLength === 0) {
      return 1.0;
    }
    return (
      (longerLength - this.editDistance(longer, shorter)) /
      parseFloat(longerLength)
    );
  }

  editDistance(s1, s2) {
    s1 = s1.toLowerCase();
    s2 = s2.toLowerCase();

    var costs = [];
    for (var i = 0; i <= s1.length; i++) {
      var lastValue = i;
      for (var j = 0; j <= s2.length; j++) {
        if (i === 0) costs[j] = j;
        else {
          if (j > 0) {
            var newValue = costs[j - 1];
            if (s1.charAt(i - 1) !== s2.charAt(j - 1))
              newValue = Math.min(Math.min(newValue, lastValue), costs[j]) + 1;
            costs[j - 1] = lastValue;
            lastValue = newValue;
          }
        }
      }
      if (i > 0) costs[s2.length] = lastValue;
    }
    return costs[s2.length];
  }

  handlePassword = (e) => {
    var pass = e.target.value;
    var check = [false, false, false, false, false, false];
    // [length>=8, lowercase, uppercase, specialSymbol(@*.), numeric, notSimilar  ]
    if (pass.length >= 8) {
      check[0] = true;
    }
    if (this.hasLowerCase(pass)) {
      check[1] = true;
    }
    if (this.hasUpperCase(pass)) {
      check[2] = true;
    }
    if (pass.includes("@") || pass.includes("*") || pass.includes(".")) {
      check[3] = true;
    }
    if (this.hasNumeric(pass)) {
      check[4] = true;
    }
    if (this.similarity(pass, this.state.email) < 0.5) {
      check[5] = true;
    }
    this.setState({ password: e.target.value, checkPass: check });
  };

  handleRePassword = (e) => {
    this.setState({
      repassword: e.target.value,
      checkRePassFunction: false,
    });
  };

  showPassFunction = () => {
    if (
      document.getElementById("showPassIconId").getAttribute("class") ===
      "fas fa-eye"
    ) {
      document.getElementById("passwordId").setAttribute("type", "text");
      document
        .getElementById("showPassIconId")
        .setAttribute("class", "fas fa-eye-slash");
    } else {
      document.getElementById("passwordId").setAttribute("type", "password");
      document
        .getElementById("showPassIconId")
        .setAttribute("class", "fas fa-eye");
    }
  };

  handleCreate = () => {
    if (this.state.password === this.state.repassword) {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.state.email, this.state.password)
        .then((userCredential) => {
          window.location.href = "/dashboard/index";
        })
        .catch((error) => {
          firebase
            .auth()
            .createUserWithEmailAndPassword(
              this.state.email,
              this.state.password
            )
            .then((userCredential) => {
              var userObj = userCredential.user;
              firebase
                .database()
                .ref("users/" + userObj.uid)
                .set({
                  username: this.state.username,
                  email: this.state.email,
                  user_uid: userObj.uid,
                  verification: 1,
                  profilepic:
                    "https://firebasestorage.googleapis.com/v0/b/tdp-vista-tiles-af85a.appspot.com/o/Assets%2FProfilePicture%2FDefaultProfile.png?alt=media&token=8cda5bf3-349e-4502-b229-9de856f22693",
                })
                .then(() => {
                  window.location.href = "/dashboard/index";
                });
            })
            .catch((error) => {
              alert("User Not Created!");
            });
        });
    } else {
      this.setState({ checkRePassFunction: true });
      console.log("checking this");
    }
  };

  blockUser = (id) => {
    firebase
      .database()
      .ref("users/" + this.state.blockId)
      .update({
        blocked: 1,
      });
    this.toggle();
    window.location.reload();
  };

  handleSubmit = (e) => {
    e.preventDefault();
    var s = this.state.mail;
    console.log(s);
    var data = this.state.user_data.filter((item) => item.email === s);
    this.setState({ search_data: data });
  };

  blockUserModal = (id) => {
    this.toggle();
    this.setState({ blockId: id });
  };

  render() {
    const column = [
      { name: "Username", selector: "username", sortable: true },
      // { name: "E-mail", selector: "email" },
      // { name: "UserID", selector: "id" },
      { name: "View Details", selector: "btn" },
      { name: "Block", selector: "block" },
    ];

    const body = this.state.search_data.map((item) => {
      const id = item.id;
      var block = item.blocked ? (
        <Button
          color="danger"
          onClick={() => this.blockUserModal(id)}
          size="sm"
        >
          Block
        </Button>
      ) : (
        <h6 className="text-danger text-center">Blocked</h6>
      );
      return {
        username: item.username,
        // email: item.email,
        // id: item.id,
        btn: (
          <Button color="primary">
            <a
              style={{ color: "#fff" }}
              href={"/admin/studentDetails?id=" + id}
            >
              View
            </a>
          </Button>
        ),
        block: block,
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
                  <h1 className="mb-0">Student</h1>
                </Col>
                <Col className="col text-right align-self-center">
                  <Button color="primary" onClick={this.toggle2} size="sm">
                    Create Student
                  </Button>
                </Col>
              </Row>
            </CardHeader>
            <CardBody>
              <Form role="form" onSubmit={this.handleSubmit} className="mb-4">
                <FormGroup>
                  <InputGroup>
                    <Input
                      type="text"
                      placeholder="Enter Username"
                      onChange={this.handleMail}
                      id="search"
                    />
                  </InputGroup>
                </FormGroup>
                <Button type="submit">Search</Button>
                <Button onClick={this.reset}>Reset</Button>
              </Form>
              <DataTable
                title="Student Data"
                columns={column}
                data={body}
                pagination={true}
              />
            </CardBody>
          </Card>
          <Modal isOpen={this.state.modal} toggle={this.toggle}>
            <ModalHeader toggle={this.toggle}>Block User</ModalHeader>
            <ModalBody>
              Do You Want To Block the user {this.state.blockId} ?<br />
              This will do the following things!!
            </ModalBody>
            <ModalFooter>
              <Button color="danger" onClick={() => this.blockUser()}>
                Block
              </Button>{" "}
              <Button color="secondary" onClick={this.toggle}>
                Cancel
              </Button>
            </ModalFooter>
          </Modal>

          <Modal isOpen={this.state.createModal} toggle={this.toggle2}>
            <ModalHeader toggle={this.toggle2}>Add Student</ModalHeader>
            <ModalBody>
              <h2>Add a new student</h2>
              <Form
                role="form"
                id="createStudentForm"
                onSubmit={(e) => {
                  e.preventDefault();
                  this.handleCreate();
                }}
              >
                <FormGroup>
                  <InputGroup className="input-group-alternative mb-3">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="ni ni-hat-3" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      placeholder="Name"
                      type="text"
                      value={this.state.username}
                      onChange={this.handleUsername}
                    />
                  </InputGroup>
                </FormGroup>
                <FormGroup>
                  <InputGroup className="input-group-alternative mb-3">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="ni ni-email-83" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      placeholder="Email"
                      type="email"
                      autoComplete="new-email"
                      value={this.state.email}
                      onChange={this.handleUserMail}
                      required
                    />
                  </InputGroup>
                </FormGroup>
                <FormGroup>
                  <InputGroup className="input-group-alternative">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="ni ni-lock-circle-open" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      placeholder="Password"
                      type="password"
                      id="passwordId"
                      autoComplete="new-password"
                      value={this.state.password}
                      onChange={this.handlePassword}
                      required
                    />
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i
                          className="fas fa-eye"
                          id="showPassIconId"
                          onClick={this.showPassFunction}
                        />
                      </InputGroupText>
                    </InputGroupAddon>
                  </InputGroup>
                </FormGroup>
                <FormGroup>
                  <InputGroup className="input-group-alternative">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="ni ni-lock-circle-open" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      placeholder="Re-enter Password"
                      type="password"
                      id="repasswordId"
                      autoComplete="new-password"
                      value={this.state.repassword}
                      onChange={this.handleRePassword}
                      required
                    />
                  </InputGroup>
                </FormGroup>
                {this.state.checkRePassFunction ? (
                  <div className="text-muted font-italic">
                    <small>
                      <span className="text-danger font-weight-700">
                        Password and Re-enter Password must be equal
                      </span>
                    </small>
                  </div>
                ) : null}
                <div className="text-muted font-italic">
                  <small>
                    password strength:{" "}
                    {!this.state.checkPass.includes(false) && (
                      <span className="text-success font-weight-700">
                        strong
                      </span>
                    )}
                    {this.state.checkPass.includes(false) &&
                      this.state.password !== "" && (
                        <span className="text-danger font-weight-700">
                          weak
                        </span>
                      )}
                    <br />
                    <span className="font-weight-700">
                      Password should have:
                      <ul>
                        <li
                          className={
                            this.state.checkPass[0]
                              ? "text-success"
                              : "text-danger"
                          }
                        >
                          Length greater than or equal to 8 characters
                        </li>
                        <li
                          className={
                            this.state.checkPass[1]
                              ? "text-success"
                              : "text-danger"
                          }
                        >
                          Lowercase
                        </li>
                        <li
                          className={
                            this.state.checkPass[2]
                              ? "text-success"
                              : "text-danger"
                          }
                        >
                          Uppercase
                        </li>
                        <li
                          className={
                            this.state.checkPass[3]
                              ? "text-success"
                              : "text-danger"
                          }
                        >
                          Special Character (@, *, .)
                        </li>
                        <li
                          className={
                            this.state.checkPass[4]
                              ? "text-success"
                              : "text-danger"
                          }
                        >
                          Numeric Character
                        </li>
                        <li
                          className={
                            this.state.checkPass[5]
                              ? "text-success"
                              : "text-danger"
                          }
                        >
                          Should not be similar to email
                        </li>
                      </ul>
                    </span>
                  </small>
                </div>
                <Row className="my-4">
                  <Col xs="12">
                    <div className="custom-control custom-control-alternative custom-checkbox">
                      <input
                        className="custom-control-input"
                        id="customCheckRegister"
                        type="checkbox"
                        required
                      />
                      <label
                        className="custom-control-label"
                        htmlFor="customCheckRegister"
                      >
                        <span className="text-muted">
                          I agree with the{" "}
                          <a href="#pablo" onClick={(e) => e.preventDefault()}>
                            Privacy Policy
                          </a>
                          on the behalf of Student
                        </span>
                      </label>
                    </div>
                  </Col>
                </Row>
              </Form>
            </ModalBody>
            <ModalFooter>
              <Button color="primary" type="submit" form="createStudentForm">
                Create Student
              </Button>{" "}
              <Button color="secondary" onClick={this.toggle2}>
                Cancel
              </Button>
            </ModalFooter>
          </Modal>
        </Container>
      </>
    );
  }
}

Search.layout = Admin;

export default Search;