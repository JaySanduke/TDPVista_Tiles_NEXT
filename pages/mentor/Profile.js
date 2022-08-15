import React, { Profiler } from "react";
import DataTable from "react-data-table-component";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { EditorState } from "draft-js";
import UserHeader from "../../components/Headers/UserHeader";
import firebase from "../../config/firebase-tiles";
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  Container,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  Row,
  Col,
  FormGroup,
  Form,

  Input,
} from "reactstrap";
import Mentor from "layouts/Mentor.js";

// core components
import Header from "components/Headers/Header.js";
import { data } from "jquery";

class Mprofile extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      mentor_id: "",
      data: [],
      skills: [],
      verified: 1,
      blocked: 1,
    }
  }
  componentDidMount() {



    firebase.auth().onAuthStateChanged((user) => {
      firebase.database().ref(`mentors/${user.uid}`).once("value")
        .then((snap) => {
          
          var d = snap.val();
          if (d && d.type === 2) {

          this.setState({ mentor_id: user.uid })
          firebase
            .database()
            .ref("mentors/" + user.uid)
            .once("value")
            .then((snapshot) => {
              var data = snapshot.val();
              this.setState({
                data: data,
                skills: data.skills,

              })



           
            })


          // var storageRef = firebase.storage().ref();
          // var spaceRef = storageRef.child("mentors/" + user.uid + "/profile.jpeg");
          // storageRef.child("mentors/" + user.uid + "/profile.jpeg").getDownloadURL().then(function (url) {
          //   var test = url;

          //   document.querySelector("#profile").src = test;

          // }).catch(function (error) {

          // });

         } else {
          alert("only mentors allowed ");
          window.location.href = "/";
        }
         })
      

      })
  }





  
  render() {
    return (
      <>
   

        <UserHeader name={this.state.data.name} />
        {/* Page content */}
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
                         
                          src={this.state.data.profilepic}
                        />
                      </a>
                    </div>
                  </Col>
                </Row>
                <CardHeader className="text-center border-0 pt-8 pt-md-4 pb-0 pb-md-4">

                </CardHeader>
                <CardBody className="pt-5 mt-5 pt-md-4">

                  <div className="text-center">
                    <h3>
                      {this.state.data.name}

                    </h3>
                    <div className="h5 font-weight-300">
                      <i className="ni location_pin mr-2" />
                      {this.state.data.pCity + " " + this.state.data.pState}
                    </div>

                    
                    <Button
                      color="info"
                     

                    > <a  style={{color:"#fff"}} href="/mentor/editProfile">Edit profile</a>
                    </Button>
                  </div>


                </CardBody>
              </Card>
            </Col>
            <Col className="order-xl-1" xl="8">
              <Card className="bg-secondary shadow">
                <CardHeader className="bg-white border-0">
                  <Row className="align-items-center">
                    <Col xs="8">
                      <h3 className="mb-0">My Account</h3>
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
                              value={this.state.data.name}
                              id="input-username"
                              placeholder="Username"
                              type="text"

                            />
                          </FormGroup>
                        </Col>
                        <Col lg="6">
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="input-email"
                            >
                              Email address
                            </label>
                            <Input
                              disabled
                              className="form-control-alternative"
                              id="input-email"
                              placeholder={this.state.data.email}
                              type="email"
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
                              {this.state.data.selOption}
                            </label>
                            <Input
                              
                               disabled
                              className="form-control-alternative"
                              value={this.state.data.selAns}
                              id="input-first-name"
                              placeholder="First name"
                              type="text"
                            />
                          </FormGroup>
                        </Col>
                        <Col lg="6">
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="input-last-name"
                            >
                              Contact
                            </label>
                            <Input
                              disabled
                              className="form-control-alternative"
                              value={this.state.data.contact}
                              id="input-last-name"
                              placeholder="Last name"
                              type="text"
                            />
                          </FormGroup>
                        </Col>
                      </Row>
                    </div>
                    <hr className="my-4" />
                    {/* Address */}
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
                              value={this.state.data.pHouse + " " + this.state.data.pStreet + " " + this.state.data.pLandmark + " " + this.state.data.pNearby}
                              id="input-address"
                              placeholder="Home Address"
                              type="text"
                            />
                          </FormGroup>
                        </Col>
                      </Row>
                      <Row>
                        <Col lg="4">
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
                              value={this.state.data.pCity}
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
                              value={this.state.data.pCountry}
                              id="input-country"
                              placeholder="Country"
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
                              Postal code
                            </label>
                            <Input
                              disabled
                              className="form-control-alternative"
                              id="input-postal-code"
                              placeholder={this.state.data.pPincode}
                              type="number"
                            />
                          </FormGroup>
                        </Col>
                      </Row>
                    </div>
                    <hr className="my-4" />
                    {/* Description */}
                    <h6 className="heading-small text-muted mb-4">About </h6>
                    <div className="pl-lg-4">
                      <FormGroup>
                        <label>About </label>
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
                      <FormGroup>
                        <label>Education Details</label>
                        <Input
                          disabled
                          className="form-control-alternative"

                          rows="4"
                          value={this.state.data.eduDetails}
                          type="textarea"
                        />
                      </FormGroup>
                    </div>
                    <div className="pl-lg-4">
                      <FormGroup>
                        <label>Skills </label>

                        <div>

                          {this.state.skills ? this.state.skills.map((data, index) => 

                             <div>
                            
                            <div>
                              <p key={index}>{data.value}</p>
                            </div>
                            </div>

                          ) : null
                          }
                        </div>
                      </FormGroup>
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

Mprofile.layout = Mentor;

export default Mprofile;