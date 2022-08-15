import React, { Component } from "react";
import "assets/css/mentorRegister.css";
import Select from "react-select";
// import makeAnimated from "react-select/animated";
import getCroppedImg from "utils/cropImage";
import Cropper from "react-easy-crop";
import defaultIcon from "assets/img/defaultIcon.png";
import firebase from "config/firebase-tiles.js";
import axios from 'axios';
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
  Label,
  FormText,
} from "reactstrap";
export default class mentorRegister extends Component {
  constructor(props) {
    super(props);

    var today = new Date(),
    date =
      today.getFullYear() +
      "-" +
      ((today.getMonth() + 1 < 10 ? "0" : "") + (today.getMonth() + 1)) +
      "-" +
      ((today.getDate() < 10 ? "0" : "") + (today.getDate()));



    this.setCropFunction = this.setCropFunction.bind(this);
    this.setZoomFunction = this.setZoomFunction.bind(this);
    this.onCropCompleteFunction = this.onCropCompleteFunction.bind(this);
    this.getNewImg = this.getNewImg.bind(this);
    this.uploadNewProfilePic = this.uploadNewProfilePic.bind(this);
    this.handleDropChange = this.handleDropChange.bind(this);
    this.uploadNewIdentityPic = this.uploadNewIdentityPic.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      options: [
        { value: "Frontend Master", label: "Frontend Master" },
        { value: "Backend Master", label: "Backend Master" },
        { value: "Fullstack Master", label: "Fullstack Master" },
        { value: "Django Master", label: "Django Master" },
        { value: "React Master", label: "React Master" },
        { value: "Angular Master", label: "Angular Master" },
        { value: "Laravel Master", label: "Laravel Master" },
        { value: "Vue Master", label: "Vue Master" },
        { value: "Ionic Master", label: "Ionic Master" },
      ],
      skills: [],
      // animatedComponents: makeAnimated(),
      name: "",
      email: "",
      contact: "",
      selOption: "Select",
      selAns: "",
      pHouse: "",
      pStreet: "",
      pLandmark: "",
      pNearby: "",
      pCity: "",
      pState: "",
      pPincode: "",
      pCountry: "",
      lHouse: "",
      lStreet: "",
      lLandmark: "",
      lNearby: "",
      lCity: "",
      lState: "",
      lPincode: "",
      lCountry: "",
      sameP: false,
      eduDetails: "",
      whyJoin: "",
      mentorDetails: "",
      bio: "",
      profilepic: null,
      newprofilepic: null,
      identityPic: null,
      newidentity: null,
      identity: null,
      profile: null,
      croppedArea: null,
      croppedAreaPixels: null,
      crop: {
        x: 0,
        y: 0,
        width: 250,
        height: 250,
      },
      zoom: 1,
      password:'',
      type:'',
      joiningDate:date,
    };
  }

  handleDropChange = (e) => {
    console.log(e);
    this.setState({ skills: e });
  };

  getNewImg = (e) => {
    this.setState({
      newprofilepic: URL.createObjectURL(e.target.files[0]),
    });
  };
  getNewIdentity = (e) => {
    this.setState({
      newidentity: URL.createObjectURL(e.target.files[0]),
    });
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
    });
  };
  uploadNewIdentityPic = () => {
    getCroppedImg(this.state.newidentity, this.state.croppedAreaPixels, 0).then(
      (result) => {
        this.setState({
          newidentity: null,
          identityPic: result,
        });
      }
    );
  };

   sendData = ()=>{

    var generator = require('generate-password');

    var password = generator.generate({
      length: 8,
      numbers: true
    });
    
      let formData = new FormData();
      
      formData.append('email', this.state.email);
      formData.append('password', password);

     
  
      const config = {
          headers: { 'content-type': 'multipart/form-data' }
      }
  
      axios.post('https://tdpvista.com/tiles/registermentor', formData, config)
          .then(response => {
              console.log(response);
          })
          .catch(error => {
          });
    
   }

 
  handleSubmit  = async (e)  => {
    e.preventDefault();
    // var m_id = firebase.database().ref("mentors").push().key;

    // var generator = require('generate-password');

    // var password = generator.generate({
    //   length: 8,
    //   numbers: true
    // });



    firebase.auth().createUserWithEmailAndPassword(this.state.email, password)
    .then((userCredential) => {
      // Signed in 
      var user = userCredential.user;
      firebase
      .storage()
      .ref("mentors/" + user.uid + "/profile.jpeg")
      .putString(this.state.profilepic, "data_url")
      .then((snapshot) => {
        firebase
          .storage()
          .ref("mentors/" + user.uid + "/identity.jpeg")
          .putString(this.state.identityPic, "data_url")
          .then((snapshot) => {
            firebase
              .storage()
              .ref("mentors")
              .child(user.uid + "/profile.jpeg")
              .getDownloadURL()
              .then((ur1) => {
                firebase
                  .storage()
                  .ref("mentors")
                  .child(user.uid + "/identity.jpeg")
                  .getDownloadURL()
                  .then((url2) => {
                    firebase
                      .database()
                      .ref("mentors/" + user.uid)
                      .set({
                        uid: user.uid,
                        name: this.state.name,
                        email: this.state.email,
                        contact: this.state.contact,
                        selOption: this.state.selOption,
                        selAns: this.state.selAns,
                        pHouse: this.state.pHouse,
                        pStreet: this.state.pStreet,
                        pLandmark: this.state.pLandmark,
                        pNearby: this.state.pNearby,
                        pCity: this.state.pCity,
                        pState: this.state.pState,
                        pPincode: this.state.pPincode,
                        pCountry: this.state.pCountry,
                        lHouse: this.state.lHouse,
                        lStreet: this.state.lStreet,
                        lLandmark: this.state.lLandmark,
                        lNearby: this.state.lNearby,
                        lCity: this.state.lCity,
                        lState: this.state.lState,
                        lPincode: this.state.lPincode,
                        lCountry: this.state.lCountry,
                        sameP: this.state.sameP,
                        eduDetails: this.state.eduDetails,
                        whyJoin: this.state.whyJoin,
                        mentorDetails: this.state.mentorDetails,
                        bio: this.state.bio,
                        profilepic: ur1,
                        identityPic: url2,
                        skills: this.state.skills,
                        verified: 1,
                        type:2,
                        password:password,
                        joiningDate:this.state.joiningDate,
                      })
                      .then(() => {
                        alert("Mail aaya hoga dekh lena!");
                        window.location.href = "/";
                      });


                  });
              });
          });
      })
    });
      
    
 
    
 
   



  }

  render() {
    return (
      <>
        {this.state.newprofilepic ? (
          <>
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
              <Button color="primary" onClick={this.uploadNewProfilePic}>
                Upload
              </Button>
            </div>
          </>
        ) : null}
        {this.state.newidentity ? (
          <>
            <div className="imgCropperParentDiv2">
              <Cropper
                className="cropperClass2"
                image={this.state.newidentity}
                crop={this.state.crop}
                zoom={this.state.zoom}
                aspect={1 / 1}
                onCropChange={this.setCropFunction}
                onCropComplete={this.onCropCompleteFunction}
                onZoomChange={this.setZoomFunction}
              />
              <Button color="primary" onClick={this.uploadNewIdentityPic}>
                Upload
              </Button>
            </div>
          </>
        ) : null}
        <div class="form-box">
          <h1>Mentor Registration Form</h1>
          <h2>Basic Information</h2>
          <Form className="mt-4">
            <FormGroup>
              <Label for="nameLabel">Name</Label>
              <Input
                required={true}
                id="mName"
                name="text"
                placeholder="Enter your name"
                type="text"
                value={this.state.name}
                onChange={(e) => this.setState({ name: e.target.value })}
              />
            </FormGroup>
            <FormGroup>
              <Label for="emailLabel">Email</Label>
              <Input
                required={true}
                id="mEmail"
                name="email"
                placeholder="with a placeholder"
                type="email"
                value={this.state.email}
                onChange={(e) => this.setState({ email: e.target.value })}
              />
            </FormGroup>
            <FormGroup>
              <Label for="phoneLabel">Contact Number</Label>
              <Input
                required={true}
                id="mContact"
                name="contact"
                placeholder="Enter your contact number"
                type="number"
                value={this.state.contact}
                onChange={(e) => this.setState({ contact: e.target.value })}
              />
            </FormGroup>
            <FormGroup>
              <Label for="emailLabel">Select option</Label>
              <Input
                required={true}
                id="exampleSelect"
                name="select"
                type="select"
                value={this.state.selOption}
                onChange={(e) => {
                  this.setState({ selOption: e.target.value });
                  console.log(e.target.value);
                }}
              >
                <option>Select</option>
                <option>s/o</option>
                <option>d/o</option>
                <option>w/f</option>
              </Input>
              <Input
                required={true}
                disabled={this.state.selOption === "Select" ? true : false}
                className="mt-3"
                id="mAnswer"
                name="familyDetail"
                placeholder="Enter above selected details"
                type="text"
                value={this.state.selAns}
                onChange={(e) => this.setState({ selAns: e.target.value })}
              />
            </FormGroup>
            <h2>Address Details</h2>
            <h3>Permanent Address</h3>
            <FormGroup>
              <Label for="nameLabel">House No.</Label>
              <Input
                required={true}
                id="mpHouse"
                name="text"
                placeholder="Enter House No."
                type="text"
                value={this.state.pHouse}
                onChange={(e) => this.setState({ pHouse: e.target.value })}
              />
            </FormGroup>
            <FormGroup>
              <Label for="nameLabel">Street Address</Label>
              <Input
                required={true}
                id="mpStreet"
                name="text"
                placeholder="Enter Street Address"
                type="text"
                value={this.state.pStreet}
                onChange={(e) => this.setState({ pStreet: e.target.value })}
              />
            </FormGroup>
            <FormGroup>
              <Label for="nameLabel">Landmark</Label>
              <Input
                required={true}
                id="mpLandmark"
                name="text"
                placeholder="Enter a Landmark"
                type="text"
                value={this.state.pLandmark}
                onChange={(e) => this.setState({ pLandmark: e.target.value })}
              />
            </FormGroup>
            <FormGroup>
              <Label for="nameLabel">Nearby</Label>
              <Input
                required={true}
                id="mpNearby"
                name="text"
                placeholder="Enter Here"
                type="text"
                value={this.state.pNearby}
                onChange={(e) => this.setState({ pNearby: e.target.value })}
              />
            </FormGroup>
            <FormGroup>
              <Label for="nameLabel">City</Label>
              <Input
                required={true}
                id="mpCity"
                name="text"
                placeholder="Enter City"
                type="text"
                value={this.state.pCity}
                onChange={(e) => this.setState({ pCity: e.target.value })}
              />
            </FormGroup>
            <FormGroup>
              <Label for="nameLabel">State</Label>
              <Input
                required={true}
                id="mpState"
                name="text"
                placeholder="Enter State"
                type="text"
                value={this.state.pState}
                onChange={(e) => this.setState({ pState: e.target.value })}
              />
            </FormGroup>
            <FormGroup>
              <Label for="nameLabel">Pincode</Label>
              <Input
                required={true}
                id="mpPincode"
                name="text"
                placeholder="Enter Pincode"
                type="text"
                value={this.state.pPincode}
                onChange={(e) => this.setState({ pPincode: e.target.value })}
              />
            </FormGroup>
            <FormGroup>
              <Label for="nameLabel">Country</Label>
              <Input
                required={true}
                id="mpCountry"
                name="text"
                placeholder="Enter Country"
                type="text"
                value={this.state.pCountry}
                onChange={(e) => this.setState({ pCountry: e.target.value })}
              />
            </FormGroup>
            <h3>Local Address</h3>
            <FormGroup check className="my-2">
              <Input
                required={true}
                type="checkbox"
                value={this.state.sameP}
                onChange={(e) => {
                  this.setState({ sameP: e.target.checked });
                  console.log(e.target.checked);
                  if (e.target.checked) {
                    this.setState({
                      lHouse: this.state.pHouse,
                      lStreet: this.state.pStreet,
                      lLandmark: this.state.pLandmark,
                      lNearby: this.state.pNearby,
                      lCity: this.state.pCity,
                      lState: this.state.pState,
                      lPincode: this.state.pPincode,
                      lCountry: this.state.pCountry
                    });
                  } else {
                    this.setState({
                      lHouse: "",
                      lStreet: "",
                      lLandmark: "",
                      lNearby: "",
                      lCity: "",
                      lState: "",
                      lPincode: "",
                      lCountry: ""
                    });
                  }
                }}
              />
              <Label check>Same as permanent address</Label>
            </FormGroup>
            <FormGroup>
              <Label for="nameLabel">House No.</Label>
              <Input
                required={true}
                disabled={this.state.sameP ? true : false}
                id="mlHouse"
                name="text"
                placeholder="Enter House No."
                type="text"
                value={this.state.sameP ? this.state.pHouse : this.state.lHouse}
                onChange={(e) => this.setState({ lHouse: e.target.value })}
              />
            </FormGroup>
            <FormGroup>
              <Label for="nameLabel">Street Address</Label>
              <Input
                required={true}
                disabled={this.state.sameP ? true : false}
                id="mlStreet"
                name="text"
                placeholder="Enter Street Address"
                type="text"
                value={
                  this.state.sameP ? this.state.pStreet : this.state.lStreet
                }
                onChange={(e) => this.setState({ lStreet: e.target.value })}
              />
            </FormGroup>
            <FormGroup>
              <Label for="nameLabel">Landmark</Label>
              <Input
                required={true}
                disabled={this.state.sameP ? true : false}
                id="mlLandmark"
                name="text"
                placeholder="Enter a Landmark"
                type="text"
                value={
                  this.state.sameP ? this.state.pLandmark : this.state.lLandmark
                }
                onChange={(e) => this.setState({ lLandmark: e.target.value })}
              />
            </FormGroup>
            <FormGroup>
              <Label for="nameLabel">Nearby</Label>
              <Input
                required={true}
                disabled={this.state.sameP ? true : false}
                id="mlNearby"
                name="text"
                placeholder="Enter Here"
                type="text"
                value={
                  this.state.sameP ? this.state.pNearby : this.state.lNearby
                }
                onChange={(e) => this.setState({ lNearby: e.target.value })}
              />
            </FormGroup>
            <FormGroup>
              <Label for="nameLabel">City</Label>
              <Input
                required={true}
                disabled={this.state.sameP ? true : false}
                id="mlCity"
                name="text"
                placeholder="Enter City"
                type="text"
                value={this.state.sameP ? this.state.pCity : this.state.lCity}
                onChange={(e) => this.setState({ lCity: e.target.value })}
              />
            </FormGroup>
            <FormGroup>
              <Label for="nameLabel">State</Label>
              <Input
                required={true}
                disabled={this.state.sameP ? true : false}
                id="mlState"
                name="text"
                placeholder="Enter State"
                type="text"
                value={this.state.sameP ? this.state.pState : this.state.lState}
                onChange={(e) => this.setState({ lState: e.target.value })}
              />
            </FormGroup>
            <FormGroup>
              <Label for="nameLabel">Pincode</Label>
              <Input
                required={true}
                disabled={this.state.sameP ? true : false}
                id="mlPincode"
                name="text"
                placeholder="Enter Pincode"
                type="text"
                value={
                  this.state.sameP ? this.state.pPincode : this.state.lPincode
                }
                onChange={(e) => this.setState({ lPincode: e.target.value })}
              />
            </FormGroup>
            <FormGroup>
              <Label for="nameLabel">Country</Label>
              <Input
                required={true}
                disabled={this.state.sameP ? true : false}
                id="mlCountry"
                name="text"
                placeholder="Enter Country"
                type="text"
                value={
                  this.state.sameP ? this.state.pCountry : this.state.lCountry
                }
                onChange={(e) => this.setState({ lCountry: e.target.value })}
              />
            </FormGroup>
            <h2>Education and Skills</h2>
            <FormGroup>
              <Label for="exampleText">
                Describe your Education in details
              </Label>
              <Input
                required={true}
                id="eduDesc"
                name="text"
                type="textarea"
                placeholder="Enter your answer here"
                value={this.state.eduDetails}
                onChange={(e) => this.setState({ eduDetails: e.target.value })}
              />
            </FormGroup>
            <FormGroup>
              <Label for="skillsLabel">Enter your skills</Label>
              <Select
                required={true}
                closeMenuOnSelect={false}
                components={this.state.animatedComponents}
                isMulti
                options={this.state.options}
                onChange={this.handleDropChange}
              />
            </FormGroup>
            <FormGroup>
              <Label for="skillsLabel">
                Why you want to join TDPVista Tiles?
              </Label>
              <Input
                required={true}
                id="whyId"
                name="text"
                type="textarea"
                placeholder="Enter your answer here"
                value={this.state.whyJoin}
                onChange={(e) => this.setState({ whyJoin: e.target.value })}
              />
            </FormGroup>
            <FormGroup>
              <Label for="exampleText">Describe your mentorship skills</Label>
              <Input
                required={true}
                id="skillsDesc"
                name="text"
                type="textarea"
                placeholder="Enter your answer here"
                value={this.state.mentorDetails}
                onChange={(e) =>
                  this.setState({ mentorDetails: e.target.value })
                }
              />
            </FormGroup>
            <FormGroup>
              <Label for="exampleText">Enter Bio</Label>
              <Input
                required={true}
                id="bioDesc"
                name="text"
                type="textarea"
                placeholder="Enter your answer here"
                value={this.state.bio}
                onChange={(e) => this.setState({ bio: e.target.value })}
              />
            </FormGroup>
            <h2>Identity Files</h2>
            <FormGroup>
              <Label for="exampleFile">Identity proof</Label>
              <Input
                id="exampleFile"
                name="file"
                type="file"
                onChange={this.getNewIdentity}
              />
              <FormText>Enter a valid image file. Only jpg, jpeg, png</FormText>
              <img
                alt="..."
                className="rounded-circle"
                style={{
                  width: "100px",
                  height: "100px",
                  margin: "0 20px",
                }}
                src={
                  this.state.identityPic ? this.state.identityPic : defaultIcon
                }
              />
            </FormGroup>
            <FormGroup>
              <Label for="exampleFile">Profile Photo</Label>
              <Input
                id="exampleFile"
                name="file"
                type="file"
                onChange={this.getNewImg}
              />
              <FormText>Enter a valid image file. Only jpg, jpeg, png</FormText>
            </FormGroup>
            <img
              alt="..."
              className="rounded-circle"
              style={{
                width: "100px",
                height: "100px",
                margin: "0 20px",
              }}
              src={this.state.profilepic ? this.state.profilepic : defaultIcon}
            />

            <Button color="primary" onClick={this.handleSubmit}>
              Submit
            </Button>
            <Button color="primary" onClick={this.sendData}>
              Send Password
            </Button>
          </Form>
        </div>
      </>
    );
  }
}
