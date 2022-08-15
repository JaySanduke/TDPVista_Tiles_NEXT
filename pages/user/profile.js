import React from "react";
import firebase from "config/firebase-tiles";
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  Container,
  Row,
  Col,
} from "reactstrap";
import DocumentMeta from "react-document-meta";
import UserHeader from "components/Headers/UserHeader.js";
import { Link } from "react-router-dom";
import defaultIcon from "../../assets/img/defaultIcon.png";
import User from "layouts/User";
class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userData: {},
    };
  }

  componentDidMount() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        firebase
          .database()
          .ref("users/" + user.uid)
          .once("value")
          .then((snapshot) => {
            var data = snapshot.val();
            console.log(data);
            this.setState({ userData: data });
          })
          .then(() => { 
            document.getElementById("userHeaderNameId").innerHTML =
              "Hello " + this.state.userData.username;
          });
      } else {
        window.location.href = "/";
      }
    });
  }

  // OpenImage =()=>{

  // }

  render() {
    const meta = {
      title: "Profile",
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
      <>
              <DocumentMeta {...meta} />

        <UserHeader />
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
                          className="rounded-circle"
                          width="150px"
                          // onClick={OpenImage}
                          src={
                            this.state.userData.profilepic
                              ? this.state.userData.profilepic
                              : defaultIcon
                          }
                        />
                      </a>
                    </div>
                  </Col>
                </Row>
                <CardBody className="pt-0 pt-md-4 mt-5">
                  <div className="text-center my-5">
                    <h3 style={{ marginTop: "30%" }}>
                      {this.state.userData.username}
                    </h3>
                    <div className="h5 font-weight-300">
                      <i className="ni location_pin mr-2" />
                      {this.state.userData.state
                        ? this.state.userData.state
                        : "--"}
                      ,
                      {this.state.userData.country
                        ? this.state.userData.country
                        : "--"}
                    </div>
                    <div>
                      <i className="ni education_hat mr-2" />
                      {this.state.userData.college
                        ? this.state.userData.college
                        : "--"}
                    </div>
                    <div className="h5 mt-4">
                      <i className="ni business_briefcase-24 mr-2" />
                      {this.state.userData.bio ? this.state.userData.bio : "--"}
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
                      <h3 className="mb-0">Your account</h3>
                    </Col>
                    <Col className="text-right" xs="4">
                      {/* <Button
                        color="primary"
                        href="#"
                        onClick={(e) => e.preventDefault()}
                        size="sm"
                      > */}
                        <a
                          href="/user/edit-profile"
                          className="text-black"
                          // style={{ color: "black !important" }}
                        ><Button color="info">Edit Profile</Button>
                          
                        </a>
                      {/* </Button> */}
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
                              id="input-username"
                              placeholder="Username"
                              type="text"
                              value={
                                this.state.userData.username
                                  ? this.state.userData.username
                                  : "null"
                              }
                            />
                          </FormGroup>
                        </Col>
                        <Col lg="6">
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="input-email"
                            >
                              Email
                            </label>
                            <Input
                              disabled
                              className="form-control-alternative"
                              id="input-email"
                              placeholder="Email"
                              type="email"
                              value={
                                this.state.userData.email
                                  ? this.state.userData.email
                                  : "null"
                              }
                            />
                          </FormGroup>
                        </Col>
                      </Row>
                      <Row>
                        <Col lg="6">
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="input-first-name"
                            >
                              Contact Numbers
                            </label>
                            <Input
                              disabled
                              className="form-control-alternative"
                              id="input-first-name"
                              placeholder="Contact"
                              type="text"
                              value={
                                this.state.userData.contact
                                  ? this.state.userData.contact
                                  : "null"
                              }
                            />
                          </FormGroup>
                        </Col>
                      </Row>
                    </div>
                    <hr className="my-4" />
                    <h6 className="heading-small text-muted mb-4">
                      Contact information
                    </h6>
                    <div className="pl-lg-4">
                      <Row>
                        <Col md="12">
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="input-address"
                            >
                              Address
                            </label>
                            <Input
                              disabled
                              className="form-control-alternative"
                              defaultValue="A Learner"
                              id="input-address"
                              placeholder="Home Address"
                              type="text"
                              value={
                                this.state.userData.address
                                  ? this.state.userData.address
                                  : "null"
                              }
                            />
                          </FormGroup>
                        </Col>
                      </Row>
                      <Row>
                        <Col lg="6">
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="input-city"
                            >
                              City
                            </label>
                            <Input
                              disabled
                              className="form-control-alternative"
                              defaultValue="New York"
                              id="input-city"
                              placeholder="City"
                              type="text"
                              value={
                                this.state.userData.city
                                  ? this.state.userData.city
                                  : "null"
                              }
                            />
                          </FormGroup>
                        </Col>
                        <Col lg="6">
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="input-country"
                            >
                              State
                            </label>
                            <Input
                              disabled
                              className="form-control-alternative"
                              id="input-state"
                              placeholder="State"
                              type="text"
                              value={
                                this.state.userData.state
                                  ? this.state.userData.state
                                  : "null"
                              }
                            />
                          </FormGroup>
                        </Col>
                      </Row>
                      <Row>
                        <Col lg="6">
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
                              id="input-country"
                              placeholder="Country"
                              type="text"
                              value={
                                this.state.userData.country
                                  ? this.state.userData.country
                                  : "null"
                              }
                            />
                          </FormGroup>
                        </Col>
                        <Col lg="6">
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="input-country"
                            >
                              Postal Code
                            </label>
                            <Input
                              disabled
                              className="form-control-alternative"
                              id="input-postal-code"
                              placeholder="Postal code"
                              type="text"
                              value={
                                this.state.userData.postal
                                  ? this.state.userData.postal
                                  : "null"
                              }
                            />
                          </FormGroup>
                        </Col>
                      </Row>
                    </div>
                    <hr className="my-4" />
                    <h6 className="heading-small text-muted mb-4">About me</h6>
                    <div className="pl-lg-4">
                      <FormGroup>
                        <label>About Me</label>
                        <Input
                          disabled
                          className="form-control-alternative"
                          placeholder="A few words about you ..."
                          rows="4"
                          type="textarea"
                          value={
                            this.state.userData.bio
                              ? this.state.userData.bio
                              : "null"
                          }
                        />
                      </FormGroup>
                    </div>
                    <hr className="my-4" />
                    <h6 className="heading-small text-muted mb-4">Education</h6>
                    <div className="pl-lg-4">
                      <Row>
                        <Col lg="6">
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="input-city"
                            >
                              High School
                            </label>
                            <Input
                              disabled
                              className="form-control-alternative"
                              defaultValue="New York"
                              id="input-hschool"
                              placeholder="High School"
                              type="text"
                              value={
                                this.state.userData.hschool
                                  ? this.state.userData.hschool
                                  : "null"
                              }
                            />
                          </FormGroup>
                        </Col>
                        <Col lg="6">
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="input-country"
                            >
                              Higher Secondary School
                            </label>
                            <Input
                              disabled
                              className="form-control-alternative"
                              id="input-hsecschool"
                              placeholder="Higher Secondary School"
                              type="text"
                              value={
                                this.state.userData.hsecschool
                                  ? this.state.userData.hsecschool
                                  : "null"
                              }
                            />
                          </FormGroup>
                        </Col>
                      </Row>
                      <Row>
                        <Col lg="6">
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="input-country"
                            >
                              Graduation Status
                            </label>
                            <Input
                              disabled
                              className="form-control-alternative"
                              id="input-graduation"
                              placeholder="Graduation Status"
                              type="text"
                              value={
                                this.state.userData.graduation
                                  ? this.state.userData.graduation
                                  : "null"
                              }
                            />
                          </FormGroup>
                        </Col>
                        <Col lg="6">
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="input-country"
                            >
                              University Name
                            </label>
                            <Input
                              disabled
                              className="form-control-alternative"
                              id="input-university"
                              placeholder="University Name"
                              type="text"
                              value={
                                this.state.userData.college
                                  ? this.state.userData.college
                                  : "null"
                              }
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
Profile.layout = User;
export default Profile;
