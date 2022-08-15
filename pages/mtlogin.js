import React from "react";
import 'assets/css/style.css';
import AuthNavbar from "components/Navbars/AuthNavbar.js";
import AuthFooter from "components/Footers/AuthFooter.js";
import "../assets/css/style.css";
import {
    Button,
    Card,
    CardHeader,
    CardBody,
    Row,
  Col,
    Container,
    Input,
    InputGroup,
    InputGroupAddon,
    InputGroupText,
    Form,
    FormGroup,
} from "reactstrap";

import firebase from "../config/firebase-tiles";

// import "assets/css/Adminlogin.css"

class Mentorlogin extends React.Component {
    constructor() {
        super();
        this.state = {
            email: "",
            password: "",
            mentorData: [],
            allowed: "",
            u_id: "",

        };
        this.handleUserID = this.handleUserID.bind(this);
        this.handlePass = this.handlePass.bind(this);
        this.login = this.login.bind(this);
    }

    componentDidMount() {
        var x = [];
        var y = [];
        firebase
            .database()
            .ref("mentors/")
            .once("value")
            .then((snapshot) => {
                snapshot.forEach(function (childSnapshot) {
                    var childData = childSnapshot.val();
                    x.push(childData.email);
                    y.push(childData.password);

                });


                var data = snapshot.val();
                console.log(data)
                if (data) {
                    this.setState({
                        mentorData: x,
                        mentorpass: y,
                    });

                }

            });


        //         firebase.auth().onAuthStateChanged((user) => {
        //             firebase.database().ref(`Mentor/${user.uid}`).once("value")
        //             .then((snap) => {
        //               var d = snap.val();
        //               if(d && d.type === 1) {
        //                 var x = [];
        //                 var tts = this;
        //                 firebase
        //                   .database()
        //                   .ref("mentors/")
        //                   .once("value")
        //                   .then((snapshot) => {

        //                     snapshot.forEach(function (childSnapshot) {
        //                         var childData = childSnapshot.val();
        //                         x.push(childData.email);
        //                         y.push(childData.uid);

        //                     });


        //                     var data = snapshot.val();
        //                     console.log(data)
        //                     if (data) {
        //                         this.setState({
        //                             mentorData: x,
        //                             u_id:y,
        //                         });

        //                     }

        //                 });


        // }})

    }



    handleUserID = (e) => {
        this.setState({ email: e.target.value });
    };
    handlePass = (e) => {
        this.setState({ password: e.target.value });
    };


    login = () => {

        firebase.auth().onAuthStateChanged(user => {
            if (user) {
                this.setState({
                    u_id: user.uid,
                })
                console.log(user.uid);
            }
        })
        if (this.state.mentorData.includes(this.state.email)) {



            console.log(this.state.email + this.state.password);
            firebase
                .auth()
                .signInWithEmailAndPassword(this.state.email, this.state.password)
                .then((res) => {
                    window.location.href = "/mentor/dashboard";
                })
                .catch((error) => {
                    alert("Login Unsuccessful");
                })
        }
        else { alert("Login unsuccessful"); }
    };


    render() {
        return (
            <>
                {/* <div className="containerMain">
                    <Card className="cardMain" color="primary">
                        <CardHeader className="cardHeader">MENTOR LOGIN</CardHeader>
                        <CardBody className="cardBody">

                            <Form role="form">
                                <FormGroup className="mb-3">
                                    <InputGroup className="input-group-alternative username">
                                        <InputGroupAddon addonType="prepend">
                                            <InputGroupText>
                                                <i className="ni ni-email-83" />
                                            </InputGroupText>
                                        </InputGroupAddon>
                                        <Input
                                            placeholder="User ID"
                                            type="text"
                                            value={this.state.userid}
                                            onChange={this.handleUserID}
                                        />
                                    </InputGroup>
                                </FormGroup>
                                <FormGroup>
                                    <InputGroup className="input-group-alternative password">
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
                                        />
                                    </InputGroup>
                                </FormGroup>
                                <div className="text-center">
                                    <Button
                                        className=""
                                        color="dark"
                                        onClick={this.login}
                                        type="button"
                                    >
                                        Login
                                    </Button>
                                </div>
                            </Form>
                        </CardBody>
                    </Card>
                </div> */}
                <div className="main-content login-back" >
                    <AuthNavbar />
                    <div className="header py-7 py-lg-8"></div>
                    {/* Page content */}
                    <Container className="mt--8 pb-5">
                        <Row className="justify-content-start">
                            <Col lg="5" md="7">
                                <Card className="bg-secondary shadow border-0">
                                    {/* <CardHeader className="bg-transparent pb-5">
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
                  </CardHeader> */}
                                    <CardBody className="px-lg-5 py-lg-5" style={{height:'60vh'}}>
                                        <div className="text-center text-muted mb-4">
                                            <h2>Sign in with Credentials</h2>
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
                                                        placeholder="User ID"
                                                        type="text"
                                                        value={this.state.userid}
                                                        onChange={this.handleUserID}
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
                                                    className=""
                                                    color="dark"
                                                    onClick={this.login}
                                                    type="button"
                                                >
                                                    Login
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


export default Mentorlogin;