import React from "react";
import { Link } from "react-router-dom";
import firebase from "../../config/firebase-tiles";
import defaultIcon from "../../assets/img/defaultIcon.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import Cropper from "react-easy-crop";
import "assets/css/EditProfile.css";
import getCroppedImg from "utils/cropImage";
import User from "layouts/User";
import DocumentMeta from "react-document-meta";

import {

    faWindowClose,
} from "@fortawesome/free-solid-svg-icons";
import {
  Button,
 
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
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


import "../../assets/css/cropper.css"
import Lottie from 'react-lottie';
  //  import rocket  from '../../assets/lottie/72284-rocket-animation.json'
   import rocket  from '../../assets/lottie/9764-loader.json'

class EditProfile extends React.Component {
  constructor(props) {
    super(props);
    this.handleusername = this.handleusername.bind(this);
    this.handlecontact = this.handlecontact.bind(this);
    this.handlelname = this.handlelname.bind(this);
    this.handleaddress = this.handleaddress.bind(this);
    this.handlecity = this.handlecity.bind(this);
    this.handlestate = this.handlestate.bind(this);
    this.handlecountry = this.handlecountry.bind(this);
    this.handlepostal = this.handlepostal.bind(this);
    this.handlebio = this.handlebio.bind(this);
    this.handlehschool = this.handlehschool.bind(this);
    this.handlehsecschool = this.handlehsecschool.bind(this);
    this.handlegraduation = this.handlegraduation.bind(this);
    this.handlecollege = this.handlecollege.bind(this);
    this.updateUserProfile = this.updateUserProfile.bind(this);
    this.setCropFunction = this.setCropFunction.bind(this);
    this.setZoomFunction = this.setZoomFunction.bind(this);
    this.onCropCompleteFunction = this.onCropCompleteFunction.bind(this);
    this.getNewImg = this.getNewImg.bind(this);
    this.uploadNewProfilePic = this.uploadNewProfilePic.bind(this);
    this.state = {
      userData: {},
      uid: "",
      username: "",
      fname: "",
      lname: "",
      email: "",
      address: "",
      city: "",
      state: "",
      country: "",
      postal: "",
      bio: "",
      hschool: "",
      hsecschool: "",
      graduation: "",
      college: "",
      contact: "",
      mentorModal: false,
      submitModal: false,
      Modal: false,
      profilepic: "",
      prevprofile:"",
      newprofilepic: null,
      croppedArea: null,
      croppedAreaPixels: null,
      crop: {
        x: 0,
        y: 0,
        width: 250,
        height: 250,
      },
      zoom: 1,
      createloader:false,

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
            if (data.username) {
              this.setState({
                userData: data,
                uid: data.user_uid,
                username: data.username,
                fname: data.username,
                lname: data.username,
                email: data.email,
                address: data.address,
                city: data.city,
                state: data.state,
                country: data.country,
                postal: data.postal,
                bio: data.bio,
                hschools: data.hschools,
                hscschools: data.hscschools,
                graduation: data.graduation,
                college: data.college,
                contact: data.contact,
              });
              if (data.profilepic) {
                this.setState({
                  profilepic: data.profilepic,
                  prevprofile: data.profilepic,
                  userData: data,
                  username: data.username,
                  email: data.email,
                });
              } else {
                this.setState({
                  userData: data,
                  username: data.username,
                  email: data.email,
                });
              }
            }
          });
      } else {
        window.location.href = "/";
      }
    });
    document.querySelector('.mask').style.height='250px';
  }
  handleusername = (e) => {
    this.setState({ username: e.target.value });
  };
  handlecontact = (e) => {
    this.setState({ contact: e.target.value });
  };
  handlelname = (e) => {
    this.setState({ lname: e.target.value });
  };
  handleaddress = (e) => {
    this.setState({ address: e.target.value });
  };
  handlecity = (e) => {
    this.setState({ city: e.target.value });
  };
  handlestate = (e) => {
    this.setState({ state: e.target.value });
  };
  handlecountry = (e) => {
    this.setState({ country: e.target.value });
  };
  handlepostal = (e) => {
    this.setState({ postal: e.target.value });
  };
  handlebio = (e) => {
    this.setState({ bio: e.target.value });
  };
  handlehschool = (e) => {
    this.setState({ hschool: e.target.value });
  };
  handlehsecschool = (e) => {
    this.setState({ hsecschool: e.target.value });
  };
  handlegraduation = (e) => {
    this.setState({ graduation: e.target.value });
  };
  handlecollege = (e) => {
    this.setState({ college: e.target.value });
  };
  submitmodal = ()=>{
    this.setState({submitModal: true})
}

  updateUserProfile = () => {

    firebase.auth().onAuthStateChanged((user) => {
      firebase.database().ref(`users/${user.uid}`).once("value")
          .then((snap) => {
            this.setState({createloader: true});


//                   firebase
//                       .storage()
//                       .ref("users/" + user.uid + "/profile.jpeg")
//                       .putString(this.state.profilepic, "data_url")
//                       .then((snapshot) => {
// console.log(this.state.profilepic)
//                           firebase
//                               .storage()
//                               .ref("users/")
//                               .child(user.uid + "/profile.jpeg")
//                               .getDownloadURL()
//                               .then((urls) => {

//                                   const db = firebase.database();
//                                   db.ref("users/" + user.uid)
//                                       .update({
//                                           profilepic: urls,
//                                       })

// console.log("ok")
//                               })

//                               console.log(this.state.profilepic);
//                       }).then(()=>{
//                         firebase
//                         .database()
//                         .ref("users/" + user.uid)
//                         .update({
//                           username: this.state.username,
//                           contact: this.state.contact,
//                           address: this.state.address,
//                           city: this.state.city,
//                           state: this.state.state,
//                           country: this.state.country,
//                           postal: this.state.postal,
//                           bio: this.state.bio,
//                           hschool: this.state.hschool,
//                           hsecschool: this.state.hsecschool,
//                           graduation: this.state.graduation,
//                           college: this.state.college,
//                         })
//                       }).then(() => {
//                         alert("Profile Updated Successfully!");
//                         window.location.href = "/user/profile";
//                       });
              
              
//             })


   firebase
       .database()
       .ref("users/" + this.state.userData.user_uid)
       .update({
         username: this.state.username,
         contact: this.state.contact,
         address: this.state.address,
         city: this.state.city,
         state: this.state.state,
         country: this.state.country,
         postal: this.state.postal,
         bio: this.state.bio,
         hschool: this.state.hschool,
         hsecschool: this.state.hsecschool,
         graduation: this.state.graduation,
         college: this.state.college,
       }).then(() => {
           if(this.state.profilepic !== this.state.prevprofile){
         firebase
           .storage()
           .ref("users/" + this.state.userData.user_uid + "/profile.jpeg")
           .putString(this.state.profilepic, "data_url")
           .then((snapshot) => {
            

             firebase
               .storage()
               .ref("users")
               .child(this.state.userData.user_uid + "/profile.jpeg")
               .getDownloadURL()
               .then((url) => {

                 firebase
                   .database()
                   .ref("users/" + this.state.userData.user_uid)
                   .update({
                     profilepic: url,
                   }).then(()=>{
                    this.setState({createloader: false});
                    this.submitmodal();

                   })
                 
               });
           });
          } else{
            this.submitmodal();
            this.setState({createloader: false});

          }
       })
      





          })



        })


    // firebase
    //   .database()
    //   .ref("users/" + this.state.userData.user_uid)
    //   .update({
    //     username: this.state.username,
    //     contact: this.state.contact,
    //     address: this.state.address,
    //     city: this.state.city,
    //     state: this.state.state,
    //     country: this.state.country,
    //     postal: this.state.postal,
    //     bio: this.state.bio,
    //     hschool: this.state.hschool,
    //     hsecschool: this.state.hsecschool,
    //     graduation: this.state.graduation,
    //     college: this.state.college,
    //   }).then(() => {
    //       console.log("ok")
    //     firebase
    //       .storage()
    //       .ref("users/" + this.state.userData.user_uid + "/profile.jpeg")
    //       .putString(this.state.profilepic, "data_url")
    //       .then((snapshot) => {
    //         firebase
    //           .storage()
    //           .ref("users/")
    //           .child(this.state.userData.user_uid + "/profile.jpeg")
    //           .getDownloadURL()
    //           .then((url) => {

    //             firebase
    //               .database()
    //               .ref("users/" + this.state.userData.user_uid)
    //               .update({
    //                 profilepic: url,
    //               })
                 
    //           });
    //       });
        
      // }).then(() => {
      //   alert("Profile Update Successfully!");
      //   window.location.href = "/user/profile";
      // });
  };
  getNewImg = (e) => {
    this.setState({
      newprofilepic: URL.createObjectURL(e.target.files[0]),
    });
    this.setState({mentorModal: true});
  };
  setCropFunction = (newcrop) => {
    this.setState({
      crop: newcrop,
    });
  };
  setZoomFunction = (newzoom) => {
    this.setState({
      zoom: newzoom,
    });
  };
  onCropCompleteFunction = (croppedArea, croppedAreaPixels) => {
    this.setState({
      croppedArea: croppedArea,
      croppedAreaPixels: croppedAreaPixels,
    });
    console.log(croppedArea);
    console.log(croppedAreaPixels);
  };
  uploadNewProfilePic = () => {
    getCroppedImg(
      this.state.newprofilepic,
      this.state.croppedAreaPixels,
      0
    ).then((result) => {
      this.setState({
        newprofilepic: null,
        profilepic: result,
      });
      // firebase
      //   .storage()
      //   .ref("users/" + this.state.userData.user_uid + "/profile.jpeg")
      //   .putString(result, "data_url")
      //   .then((snapshot) => {
      //     firebase
      //       .storage()
      //       .ref("users")
      //       .child(this.state.userData.user_uid + "/profile.jpeg")
      //       .getDownloadURL()
      //       .then((url) => {
      //         firebase
      //           .database()
      //           .ref("users/" + this.state.userData.user_uid)
      //           .update({
      //             profilepic: url,
      //           })
      //           .then(() => {
      //             alert("Profile Pic Update Successfully!");
      //           });
      //       });
      //   });
    });
  };
  toggleMentor = () => {
    if (this.state.mentorModal) {
        console.log("Modal Close");
        this.setState({
            mentorModal: false,
        });
    } else {
        console.log("Modal Open");
        this.setState({
            mentorModal: true,
            
        });
    }
};
  render() {
    const defaultOptions = {
      loop: true,
      autoplay: true, 
      animationData: rocket,
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
      }
    };
    const meta = {
      title: "Edit-Profile",
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
        {this.state.newprofilepic ? (
          <>
            {/* <div className="imgCropperParentDiv">
              <Cropper
                className="cropperClass"
                image={this.state.newprofilepic}
                crop={this.state.crop}
                zoom={this.state.zoom}
                aspect={1 / 1}
                onCropChange={this.setCropFunction}
                onCropComplete={this.onCropCompleteFunction}
                onZoomChange={this.setZoomFunction}
              />
              <Button color="primary" onClick={this.uploadNewProfilePic}>
                Upload
              </Button>
            </div> */}
                    <DocumentMeta {...meta} />

             <Modal isOpen={this.state.mentorModal} toggle={this.toggleMentor}>
                            <Card className="cropperCard" style={{ width: '800px', height: "80vh", alignItems: "center", marginRight: "100px", justifyContent:"center" , position:'relative'}}>
                                {/* <CardHeader> */}
                                <Button size="lg" onClick={this.toggleMentor} style={{ position: "absolute", top: "0", left: "0", margin: "5px" }}>
                                    <FontAwesomeIcon
                                        icon={faWindowClose}
                                        style={{
                                            color: "rgb(185, 185, 185)",
                                            marginLeft: "auto",
                                            cursor: "pointer",
                                            fontSize: "20px",
                                            zIndex:'100',
                                        }}
                                    />
                                </Button>
                                {/* </CardHeader> */}
                                <div className="imgCropperParentDiv">
                                    <Cropper
                                        className="cropperClass"
                                        image={this.state.newprofilepic}
                                        crop={this.state.crop}
                                        zoom={this.state.zoom}
                                        aspect={1 / 1}
                                        onCropChange={this.setCropFunction}
                                        onCropComplete={this.onCropCompleteFunction}
                                        onZoomChange={this.setZoomFunction}
                                    />
                                   
                                </div>
 <Button color="primary" className="cancel" onClick={this.uploadNewProfilePic}>
                                        Upload
                                    </Button>
                                {/* </CardFooter> */}
                            </Card>
                        </Modal>
          </>
        ) : null}
         <Modal isOpen={this.state.submitModal} toggle={this.toggleSubmit}>
                            <Card  style={{ width: '100%', height: "30vh", alignItems: "center",justifyContent:'center', position:'relative'}}>
                             
                             <h2>Profile Updated Succesfully</h2>
                             
                             <a href="/user/profile"><Button color="info">Return To Profile</Button></a>
                             </Card>
                             </Modal>
                             {this.state.createloader ?  <Lottie options={defaultOptions}
              height={300}
              width={300}></Lottie> : <div
          className="header d-flex align-items-center pb-7"
          style={{
            minHeight: "400px",
            backgroundPosition: "center top",
          }}
        >
          <span className="mask bg-gradient-default opacity-8" />
          <Container className="mt-9" fluid>
            <Row>
              <Col className="border-xl-1">
                <Card className="bg-secondary shadow">
                  <CardHeader className="bg-white border-0">
                    <Row className="align-items-center">
                      <Col xs="8">
                        <h3 className="mb-0">Edit Profile</h3>
                      </Col>
                      <Col className="text-right" xs="4">
                        <Button
                          color="primary"
                          href="#pablo"
                          onClick={this.updateUserProfile}
                          size="sm"
                          className="mx-3 my-2"
                        >
                          Save
                        </Button>
                        <Button
                          color="primary"
                          onClick={(e) => e.preventDefault()}
                          size="sm"
                          className="mx-3 my-2"
                        >
                          <a
                            href="/user/profile"
                            className="text-white"
                          >
                            Cancel
                          </a>
                        </Button>
                      </Col>
                    </Row>
                  </CardHeader>
                  <div
                    style={{
                      display: "flex",
                      width: "fit-content",
                      position: "relative",
                    }}
                    className="align-items-center"
                  >
                    <img
                      alt="..."
                      className="rounded-circle"
                      style={{
                        width: "100px",
                        height: "100px",
                        margin: "0 20px",
                      }}
                      src={
                        this.state.profilepic
                          ? this.state.profilepic
                          : defaultIcon
                      }
                    />
                    <div
                      style={{
                        position: "absolute",
                        bottom: "-10px",
                        right: "0",
                        width: "30px",
                      }}
                    >
                      <div className="image-upload">
                        <label htmlFor="file-input" style={{ display: "block" }}>
                          <FontAwesomeIcon
                            icon={faPen}
                            style={{
                              fontSize: "30px",
                              color: "#5E72E4",
                              backgroundColor: "#DEE1E6",
                              borderRadius: "50%",
                              padding: "30%",
                              cursor: "pointer",
                            }}
                          />
                        </label>
                        <input
                          id="file-input"
                          type="file"
                          style={{ display: "none" }}
                          onChange={this.getNewImg}
                        />
                      </div>
                    </div>
                  </div>
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
                                Username
                              </label>
                              <Input
                                className="form-control-alternative"
                                id="input-username"
                                placeholder="Username"
                                value={this.state.username}
                                onChange={this.handleusername}
                                type="text"
                              />
                            </FormGroup>
                          </Col>
                          <Col lg="6">
                            <FormGroup>
                              <label
                                className="form-control-label"
                                htmlFor="input-first-name"
                              >
                                Contact Number
                              </label>
                              <Input
                                className="form-control-alternative"
                                id="input-first-name"
                                value={this.state.contact}
                                onChange={this.handlecontact}
                                placeholder="Contact"
                                type="number"
                              />
                            </FormGroup>
                          </Col>
                        </Row>
                      </div>
                      <h6 className="heading-small text-muted mb-4">
                        Contact Information
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
                                className="form-control-alternative"
                                id="input-address"
                                placeholder="Home Address"
                                value={this.state.address}
                                onChange={this.handleaddress}
                                type="text"
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
                                className="form-control-alternative"
                                id="input-city"
                                placeholder="City"
                                value={this.state.city}
                                onChange={this.handlecity}
                                type="text"
                              />
                            </FormGroup>
                          </Col>
                          <Col lg="6">
                            <FormGroup>
                              <label
                                className="form-control-label"
                                htmlFor="input-state"
                              >
                                State
                              </label>
                              <Input
                                className="form-control-alternative"
                                id="input-state"
                                placeholder="State"
                                value={this.state.state}
                                onChange={this.handlestate}
                                type="text"
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
                                className="form-control-alternative"
                                id="input-country"
                                placeholder="Country"
                                value={this.state.country}
                                onChange={this.handlecountry}
                                type="text"
                              />
                            </FormGroup>
                          </Col>
                          <Col lg="6">
                            <FormGroup>
                              <label
                                className="form-control-label"
                                htmlFor="input-postal-code"
                              >
                                Postal Code
                              </label>
                              <Input
                                className="form-control-alternative"
                                id="input-postal-code"
                                placeholder="Postal code"
                                type="text"
                                value={this.state.postal}
                                onChange={this.handlepostal}
                              />
                            </FormGroup>
                          </Col>
                        </Row>
                      </div>
                      <h6 className="heading-small text-muted mb-4">
                        Enter Your Bio
                      </h6>
                      <div className="pl-lg-4">
                        <FormGroup>
                          <label>Biography</label>
                          <Input
                            className="form-control-alternative"
                            placeholder="A few words about you ..."
                            rows="4"
                            type="textarea"
                            value={this.state.bio}
                            onChange={this.handlebio}
                          />
                        </FormGroup>
                      </div>
                      <h6 className="heading-small text-muted mb-4">
                        Education
                      </h6>
                      <div className="pl-lg-4">
                        <Row>
                          <Col lg="6">
                            <FormGroup>
                              <label
                                className="form-control-label"
                                htmlFor="input-hschool"
                              >
                                High School
                              </label>
                              <Input
                                className="form-control-alternative"
                                id="input-hschool"
                                placeholder="High School"
                                value={this.state.hschool}
                                onChange={this.handlehschool}
                                type="text"
                              />
                            </FormGroup>
                          </Col>
                          <Col lg="6">
                            <FormGroup>
                              <label
                                className="form-control-label"
                                htmlFor="input-hsecschool"
                              >
                                High Sec School
                              </label>
                              <Input
                                className="form-control-alternative"
                                id="input-hsecschool"
                                placeholder="High Sec School"
                                value={this.state.hsecschool}
                                onChange={this.handlehsecschool}
                                type="text"
                              />
                            </FormGroup>
                          </Col>
                        </Row>
                        <Row>
                          <Col lg="6">
                            <FormGroup>
                              <label
                                className="form-control-label"
                                htmlFor="input-graduation"
                              >
                                Graduation (UG/PG) (Not Necessary)
                              </label>
                              <Input
                                className="form-control-alternative"
                                id="input-graduation"
                                placeholder="graduation"
                                value={this.state.graduation}
                                onChange={this.handlegraduation}
                                type="text"
                              />
                            </FormGroup>
                          </Col>
                          <Col lg="6">
                            <FormGroup>
                              <label
                                className="form-control-label"
                                htmlFor="input-college"
                              >
                                College (Fill 'No' if not)
                              </label>
                              <Input
                                className="form-control-alternative"
                                id="input-college"
                                placeholder="college"
                                value={this.state.college}
                                onChange={this.handlecollege}
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
        </div>
  }
      </>
    );
  }
}
EditProfile.layout = User;
export default EditProfile;
