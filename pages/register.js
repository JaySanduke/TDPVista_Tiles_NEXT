import React from "react";
import firebase from "config/firebase-tiles";
import "assets/css/style.css";
import AuthNavbar from "components/Navbars/AuthNavbar.js";
import AuthFooter from "components/Footers/AuthFooter.js";
import "../assets/css/style.css";
import axios from "axios";
// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  Container,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Row,
  Col,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Label,
} from "reactstrap";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      username: "",
      keyModal: false,
      otp: -1,
      checkVerification: 0,
      checkCorrectOtp: false,
      repassword: "",
      checkRePassFunction: false,
    };
    this.handleEmail = this.handleEmail.bind(this);
    this.handleUsername = this.handleUsername.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
    this.handleRePassword = this.handleRePassword.bind(this);
    this.handleRegisterEmailPassword = this.handleRegisterEmailPassword.bind(this);
    this.manageGoogleRegister = this.manageGoogleRegister.bind(this);
    this.manageGithubRegisters = this.manageGithubRegisters.bind(this);
    this.keyModalFunction = this.keyModalFunction.bind(this);
    this.sendEmailFunction = this.sendEmailFunction.bind(this);
    this.checkUserVerification = this.checkUserVerification.bind(this);
    this.resendEmailFunction = this.resendEmailFunction.bind(this);
    this.showPassFunction = this.showPassFunction.bind(this);
  }

  handleEmail = (e) => {
    this.setState({ email: e.target.value });
  };

  handleUsername = (e) => {
    this.setState({ username: e.target.value });
  };

  handlePassword = (e) => {
    this.setState({ password: e.target.value });
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

  handleRegisterEmailPassword = () => {
    firebase
      .auth()
      .signInWithEmailAndPassword(this.state.email, this.state.password)
      .then((userCredential) => {
        window.location.href = "/dashboard/index";
      })
      .catch((error) => {
        firebase
          .auth()
          .createUserWithEmailAndPassword(this.state.email, this.state.password)
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
              })
              .then(() => {
                window.location.href = "/dashboard/index";
              });
          })
          .catch((error) => {
            alert("User Not Created!");
          });
      });
  };

  checkUserVerification = () => {
    var x = document.getElementById("optInput").value;
    var y = x.toString();
    var otp = this.state.otp;
    var z = otp.toString();
    console.log(y);
    console.log(z);
    if (y === z) {
      this.setState({ keyModal: false });
      this.handleRegisterEmailPassword();
    } else {
      this.setState({ checkCorrectOtp: false });
    }
  };

  keyModalFunction = () => {
    if (this.state.keyModal) {
      this.setState({ keyModal: false });
    } else {
      this.setState({ keyModal: true });
    }
  };

  resendEmailFunction = () => {
    var otp = this.state.otp;
    this.setState({
      checkCorrectOtp: true,
    });
    let formData = new FormData();
    formData.append("email", this.state.email);
    formData.append("otp", otp);
    const config = {
      headers: { "content-type": "multipart/form-data" },
    };
    axios
      .post("https://tdpvista.com/tiles/verifyemail", formData, config)
      .then((res) => {
        this.setState({ keyModal: true });
      });
  };

  sendEmailFunction = () => {
    if (this.state.password === this.state.repassword) {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.state.email, this.state.password)
        .then((userCredential) => {
          firebase
            .database()
            .ref("users/" + userCredential.user.uid)
            .once("value")
            .then((snapshot) => {
              var data = snapshot.val();
              if (data.verification) {
                window.location.href = "/dashboard/index";
              } else {
                var otp = Math.floor(100000 + Math.random() * 899999);
                this.setState({
                  otp: otp,
                  checkCorrectOtp: true,
                });
                let formData = new FormData();
                formData.append("email", this.state.email);
                formData.append("otp", otp);
                const config = {
                  headers: { "content-type": "multipart/form-data" },
                };
                axios
                  .post(
                    "https://tdpvista.com/tiles/verifyemail",
                    formData,
                    config
                  )
                  .then((res) => {
                    this.setState({ keyModal: true });
                    console.log("CHECK OTP");
                  });
              }
            });
        })
        .catch((error) => {
          var otp = Math.floor(100000 + Math.random() * 899999);
          this.setState({
            otp: otp,
            checkCorrectOtp: true,
          });
          let formData = new FormData();
          formData.append("email", this.state.email);
          formData.append("otp", otp);
          const config = {
            headers: { "content-type": "multipart/form-data" },
          };
          axios
            .post("https://tdpvista.com/tiles/verifyemail", formData, config)
            .then((res) => {
              this.setState({ keyModal: true });
            });
        });
    } else {
      this.setState({ checkRePassFunction: true });
      console.log("checking this");
    }
  };

  manageGoogleRegister = () => {
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((result) => {
        /** @type {firebase.auth.OAuthCredential} */
        var user = result.user;
        var id = user.uid;
        console.log(user);
        firebase
          .database()
          .ref("users/" + id)
          .once("value")
          .then((snapshot) => {
            if (snapshot.exists()) {
            } else {
              firebase
                .database()
                .ref("users/" + id)
                .set({
                  username: user.displayName,
                  email: user.email,
                  user_uid: id,
                  profilepic: user.photoURL,
                  verification: 1,
                });
            }
          })
          .then(() => {
            window.location.href = "/user/dashboard";
          });
      })
      .catch((error) => {});
  };

  manageGithubRegisters = () => {
    var provider = new firebase.auth.GithubAuthProvider();
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((result) => {
        /** @type {firebase.auth.OAuthCredential} */
        var user = result.user;
        console.log(user);
        var id = user.uid;
        console.log(user);
        firebase
          .database()
          .ref("users/" + id)
          .once("value")
          .then((snapshot) => {
            if (snapshot.exists()) {
            } else {
              firebase
                .database()
                .ref("users/" + id)
                .set({
                  email: user.email,
                  user_uid: id,
                  profilepic: user.photoURL,
                  verification: 1,
                });
            }
          })
          .then(() => {
            window.location.href = "/user/dashboard";
          });
      })
      .catch((error) => {});
  };
  render() {
    return (
      <>
        <div className="main-content login-back">
          <AuthNavbar />
          <div className="header py-7 py-lg-8"></div>
          {/* Page content */}
          <Container className="mt--8 pb-5">
            <Row className="justify-content-start">
              <div>
                <Modal
                  isOpen={this.state.keyModal}
                  toggle={this.keyModalFunction}
                >
                  {this.state.checkCorrectOtp ? (
                    <Form
                      role="form"
                      onSubmit={(e) => {
                        e.preventDefault();
                        this.checkUserVerification();
                      }}
                    >
                      <ModalHeader toggle={this.checkUserVerification}>
                        Email Verification
                      </ModalHeader>

                      <ModalBody>
                        Lorem ipsum dolor sit amet,
                        <FormGroup>
                          <Label for="exampleEmail">Enter OTP</Label>
                          <Input
                            type="number"
                            name="otp"
                            id="optInput"
                            placeholder="Enter OTP here"
                            required
                          />
                        </FormGroup>
                      </ModalBody>
                      <ModalFooter>
                        <Button type="submit" color="primary">
                          Verify
                        </Button>
                      </ModalFooter>
                    </Form>
                  ) : (
                    <>
                      <ModalHeader toggle={this.checkUserVerification}>
                        Email Verification
                      </ModalHeader>
                      <ModalBody>
                        Click here to send OTP again
                        <Button
                          type="button"
                          color="primary"
                          onClick={this.resendEmailFunction}
                        >
                          Verify
                        </Button>
                      </ModalBody>
                    </>
                  )}
                </Modal>
              </div>
              <Col lg="6" md="8">
                <Card className="bg-secondary shadow border-0">
                  <CardHeader className="bg-transparent pb-5">
                    <div className="text-muted text-center mt-2 mb-4">
                      <small>Sign up with</small>
                    </div>
                    <div className="text-center">
                      <Button
                        className="btn-neutral btn-icon mr-4"
                        color="default"
                        href="#pablo"
                        onClick={this.manageGithubRegisters}
                      >
                        <span className="btn-inner--icon">
                          <img
                            alt="..."
                            src={require("assets/img/icons/common/github.svg")}
                          />
                        </span>
                        <span className="btn-inner--text">Github</span>
                      </Button>
                      <Button
                        className="btn-neutral btn-icon"
                        color="default"
                        href="#pablo"
                        onClick={this.manageGoogleRegister}
                      >
                        <span className="btn-inner--icon">
                          <img
                            alt="..."
                            src={require("assets/img/icons/common/google.svg")}
                          />
                        </span>
                        <span className="btn-inner--text">Google</span>
                      </Button>
                    </div>
                  </CardHeader>
                  <CardBody className="px-lg-5 py-lg-5">
                    <div className="text-center text-muted mb-4">
                      <small>Or sign up with credentials</small>
                    </div>
                    <Form
                      role="form"
                      onSubmit={(e) => {
                        e.preventDefault();
                        this.sendEmailFunction();
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
                            onChange={this.handleEmail}
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
                      {/* <div className="text-muted font-italic">
                        <small>
                          password strength:{" "}
                          <span className="text-success font-weight-700">
                            strong
                          </span>
                        </small>
                      </div> */}
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
                                <a
                                  href="#pablo"
                                  onClick={(e) => e.preventDefault()}
                                >
                                  Privacy Policy
                                </a>
                              </span>
                            </label>
                          </div>
                        </Col>
                      </Row>
                      <div className="text-center">
                        <Button className="mt-4" color="primary" type="submit">
                          Create account
                        </Button>
                      </div>
                    </Form>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
        <AuthFooter />
      </>
    );
  }
}

export default Login;
