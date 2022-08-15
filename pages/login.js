import React from "react";
import firebase from "config/firebase-tiles";
import 'assets/css/style.css';
import AuthNavbar from "components/Navbars/AuthNavbar.js";
import AuthFooter from "components/Footers/AuthFooter.js";
import "../assets/css/style.css";
// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Container,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Row,
  Col,
} from "reactstrap";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
    this.handleEmail = this.handleEmail.bind(this);
    this.handlePass = this.handlePass.bind(this);
    this.login = this.login.bind(this);
    this.manageGoogleLogin = this.manageGoogleLogin.bind(this);
    this.manageGithubLogin = this.manageGithubLogin.bind(this);
  }
  handleEmail = (e) => {
    this.setState({ email: e.target.value });
  };
  handlePass = (e) => {
    this.setState({ password: e.target.value });
  };
  login = () => {
    firebase
      .auth()
      .signInWithEmailAndPassword(this.state.email, this.state.password)
      .then((res) => {
        window.location.href = "/user/dashboard";
      })
      .catch((error) => {
        alert("Login Unsuccessful");
      });
  };
  // googleLogin(){
  //   var provider = new firebase.auth.GoogleAuthProvider();
  //   provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
  //   firebase.auth()
  //   .signInWithPopup(provider)
  //   .then((result) => {
  //   }).catch((error) => {
  //   });
  // }
  manageGoogleLogin = () => {
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
                });
            }
          })
          .then(() => {
            window.location.href = "/user/dashboard";
          });
      })
      .catch((error) => {});
  };
  manageGithubLogin = () => {
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
              <Col lg="5" md="7">
                <Card className="bg-secondary shadow border-0">
                  <CardHeader className="bg-transparent pb-5">
                    <div className="text-muted text-center mt-2 mb-3">
                      <small>Sign in with</small>
                    </div>
                    <div className="btn-wrapper text-center">
                      <Button
                        className="btn-neutral btn-icon"
                        color="default"
                        href="#pablo"
                        onClick={this.manageGithubLogin}
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
                        type="button"
                        onClick={this.manageGoogleLogin}
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
                      <small>Or sign in with credentials</small>
                    </div>
                    <Form role="form">
                      <FormGroup className="mb-3">
                        <InputGroup className="input-group-alternative">
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                              <i className="ni ni-email-83" />
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input
                            placeholder="Email"
                            type="email"
                            value={this.state.email}
                            onChange={this.handleEmail}
                            autoComplete="new-email"
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
                            value={this.state.password}
                            onChange={this.handlePass}
                            autoComplete="new-password"
                          />
                        </InputGroup>
                      </FormGroup>
                      <div className="custom-control custom-control-alternative custom-checkbox">
                        <input
                          className="custom-control-input"
                          id=" customCheckLogin"
                          type="checkbox"
                        />
                        <label
                          className="custom-control-label"
                          htmlFor=" customCheckLogin"
                        >
                          <span className="text-muted">Remember me</span>
                        </label>
                      </div>
                      <div className="text-center">
                        <Button
                          className="my-4"
                          color="primary"
                          onClick={this.login}
                          type="button"
                        >
                          Sign in
                        </Button>
                      </div>
                    </Form>
                  </CardBody>
                </Card>
                <Row className="mt-3">
                  <Col xs="6">
                    <a
                      className="text-light"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <small>Forgot password?</small>
                    </a>
                  </Col>
                  <Col className="text-right" xs="6">
                    <a
                      className="text-light"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <small>Create new account</small>
                    </a>
                  </Col>
                </Row>
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
