import React from "react";
import DataTable from "react-data-table-component";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { EditorState } from "draft-js";
import firebase from "../../config/firebase-tiles";
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  Container,
  Col,
  Row,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
   Form,
  Input,
  FormGroup,
  InputGroup,
} from "reactstrap";
import Admin from "layouts/Admin.js";


// core components
import Header from "components/Headers/admin.js";


class MentorDetails extends React.Component {
    constructor(props) {
        super(props)
        this.toggleBlock = this.toggleBlock.bind(this);

        this.state = {
            mentor_id: "",
            data: "",
            skills: [],
            verified: 1,
            blocked: 1,
            blockModal: false,

        }
    }
    componentDidMount() {
        var currenturl = window.location.search;
        var currenturlsearch = new URLSearchParams(currenturl);
        var id = currenturlsearch.get("id");
        
        console.log(id);
        if (id === undefined || id === null) {
          window.location.href = "/";
        }
        this.setState({ mentor_id: id});
        
        firebase
            .database()
            .ref("mentors/" + id)
            .once("value")
            .then((snapshot) => {
                var data = snapshot.val();
                this.setState({
                    data : data,
                    skills: data.skills,
                    verified: data.verified,
                    block: (data.blocked) ? data.blocked : 1,
                })
                
                
            })
     
    }

    toggleBlock = () => {
      this.setState((prevState) => ({ blockModal: !prevState.blockModal }));
    }
  

    verify=()=> {
      firebase
        .database()
        .ref("mentors/"+this.state.mentor_id)
        .update({
          verified: 1,
        }).then(() => {
          this.setState({
            verified: 1,
          })
        })
    }

    unblock=()=> {
      // var sure = confirm("Are you sure to unblock the mentor" + this.state.data.name);
      
        firebase
          .database()
          .ref("mentors/"+this.state.mentor_id)
          .update({
            blocked: 0,
          }).then(() => {
            this.setState({
              blocked: 0,
            })
            this.toggleBlock();
          })
      
    }

    block=()=> {
      // var sure = confirm("Are you sure to block the mentor" + this.state.data.name);
    
        firebase
          .database()
          .ref("mentors/"+this.state.mentor_id)
          
          .update({
            blocked: 1,
          }).then(() => {
            this.setState({
              blocked: 1,
            })
            this.toggleBlock();

          })
      
    }
 render() {
    return (
      <>
        <Header />
        {/* Page content */}
        <Container className="mt--7" fluid>
          <Card className="mx-5">
            <CardHeader className="d-flex justify-content-between">
              <h1>
                Mentor Details:{" "}
              </h1>

              {this.state.verified === 0 &&
                <Button color="success" onClick={this.verify}>Verify</Button>
              }
              {this.state.blocked === 1 && 
                <Button color="info" onClick={this.toggleBlock}>UnBlock</Button>
              }
              {this.state.blocked === 0 && 
                <Button color="danger" onClick={this.toggleBlock}>Block</Button>
              }
            </CardHeader>
            <CardBody>
                {/* <h2>Name: {this.state.data.name + " " + this.state.data.selOption + " " + this.state.data.selAns}</h2>
                <h2>Email: {this.state.data.email} </h2>
                <h2>Contact Number: {this.state.data.contact}</h2>
                <h2>Address Details: {this.state.data.pHouse + " " + this.state.data.pStreet + " " + this.state.data.pLandmark + " "+ this.state.data.pNearby }</h2>
                <h2>City: {this.state.data.pState} </h2>
                <h2>Pincode: {this.state.data.pPincode}</h2>
                <h2>Country: {this.state.pCountry}</h2>
                <h2>Local Address: 
              { this.state.data.pHouse + " " + this.state.data.pStreet + " " + this.state.data.pLandmark + " "+ this.state.data.pNearby }</h2>
                <h2>Education: {this.state.data.eduDetails}</h2>
                <h2>Skills: </h2>
               {this.state.skills.map((item, i) => {
                  
                    <li key={i}><h5>{(i+1) + item.label}</h5><br/></li> 
                      console.log(item.label + i)
                })}
                <h2>Mentorship skills: {this.state.data.mentorDetails} </h2>
                <h2>Bio: {this.state.data.bio}</h2> */
                <Form>
                {/* <h6 className="heading-small text-muted mb-4">
                  User information
                </h6> */}
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
                          value={this.state.data.name}
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
                            this.state.data.email
                              ? this.state.data.email
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
                            this.state.data.contact
                              ? this.state.data.contact
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
                          value={this.state.data.pHouse + " " + this.state.data.pStreet + " " + this.state.data.pLandmark + " "+ this.state.data.pNearby }
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
                          value={this.state.data.pState} 
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
                            this.state.data.pPincode
                              ? this.state.data.pPincode
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
                            this.state.data.pCountry
                              ? this.state.data.pCountry
                              : "null"
                          }
                        />
                      </FormGroup>
                    </Col>
                   
                  </Row>
                </div>
                <hr className="my-4" />
                <h6 className="heading-small text-muted mb-4">About Mentor</h6>
                <div className="pl-lg-4">
                  <FormGroup>
                    <label>Bio</label>
                    <Input
                      disabled
                      className="form-control-alternative"
                      placeholder="A few words about you ..."
                      rows="4"
                      type="textarea"
                      value= {this.state.data.bio}
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
                          htmlFor="input-country"
                        >
                          Education
                        </label>
                        <Input
                          disabled
                          className="form-control-alternative"
                          id="input-postal-code"
                          placeholder="Postal code"
                          type="text"
                          value={
                            this.state.data.eduDetails
                              ? this.state.data.eduDetails
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
                          Skills
                        </label>
                    {this.state.skills.map((item, i) => {
                  
                  <li key={i}><h5>{(i+1) + item.label}</h5><br/></li> 
                    console.log(item.label + i)
              })}
                      
                      </FormGroup></Col>
                   </Row>
                </div>
              </Form>  
                }
            </CardBody>
        </Card>

        <Modal isOpen={this.state.blockModal} toggle={this.toggleBlock}>
            <ModalHeader toggle={this.toggleBlock}>{!this.state.blocked == 1 ? "Block" : "Unblock"}</ModalHeader>
            <ModalBody>
              {this.state.data.blocked == 0 ? "Block" : "Unblock"} the user
            </ModalBody>
            <ModalFooter>
              {this.state.blocked == 0 ? (<Button color="danger" size='md' onClick={this.block}>Block</Button>) : (<Button color="success" size='md' onClick={this.unblock}>Unblock</Button>)}
              <Button color="secondary" onClick={this.toggleBlock}>
                Cancel
              </Button>
            </ModalFooter>
          </Modal> 
        </Container>
      </>
    );
  }
}

MentorDetails.layout = Admin;

export default MentorDetails;
