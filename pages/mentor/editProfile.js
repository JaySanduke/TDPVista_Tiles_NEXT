import React, { Profiler } from "react";
import "assets/css/EditProfile.css";
import dynamic from "next/dynamic";
const Select = dynamic(() => import('react-select'));
// import Select from "react-select";
//  import makeAnimated from "react-select/animated";
//  import Select from "react-dropdown-select";
// import Dropdown from 'react-dropdown';
// import 'react-dropdown/style.css';
// import Multiselect from 'multiselect-react-dropdown';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {

    faWindowClose,
} from "@fortawesome/free-solid-svg-icons";




import getCroppedImg from "utils/cropImage";
import Cropper from "react-easy-crop";
import defaultIcon from "assets/img/defaultIcon.png";
import DataTable from "react-data-table-component";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { EditorState } from "draft-js";
import UserEditHeader from "../../components/Headers/UserEditHeader";
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
import "../../assets/css/cropper.css"



class Mupdate extends React.Component {
    constructor(props) {
        super(props)
        this.setCropFunction = this.setCropFunction.bind(this);
        this.setZoomFunction = this.setZoomFunction.bind(this);
        this.onCropCompleteFunction = this.onCropCompleteFunction.bind(this);
        this.getNewImg = this.getNewImg.bind(this);
        this.uploadNewProfilePic = this.uploadNewProfilePic.bind(this);
        this.handleDropChange = this.handleDropChange.bind(this);
                this.submitmodal = this.submitmodal.bind(this);

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
            profilepic: '',
            newprofilepic: null,
            mentorModal: false,
            submitModal: false,
            Modal: false,
            profile: '',
            croppedArea: null,
            croppedAreaPixels: null,
            crop: {
                x: 0,
                y: 0,
                width: 250,
                height: 250,
            },
            zoom: 1,




        };
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
                                    name: data.name,

                                    contact: data.contact,
                                    selAns: data.selAns,
                                    pHouse: data.pHouse,
                                    selOption: data.selOption,
                                    pStreet: data.pStreet,
                                    pLandmark: data.pLandmark,
                                    pNearby: data.pNearby,
                                    eduDetails: data.eduDetails,
                                    pCity: data.pCity,
                                    pCountry: data.pCountry,
                                    pPincode: data.pPincode,
                                    bio: data.bio,
                                    skills: data.skills,
                                    profilepic: data.profilepic,
                                    profile: data.profilepic

                                })




                            }).then(() => {
                                console.log(this.state.profilepic);
                            })


                        // var storageRef = firebase.storage().ref();
                        // var spaceRef = storageRef.child("mentors/" + user.uid + "/profile.jpeg");
                        // storageRef.child("mentors/" + user.uid + "/profile.jpeg").getDownloadURL().then(function (url) {
                        //     var test = url;

                        //     document.querySelector("#profile").src = test;

                        // }).catch(function (error) {

                        // });

                    } else {
                        alert("only mentors allowed ");
                        window.location.href = "/";
                    }
                })

        })
    }





    handleName = (e) => {
        this.setState({ name: e.target.value });
    };
    handleContact = (e) => {
        this.setState({ contact: e.target.value });
    };

    handleselAns = (e) => {
        this.setState({ selAns: e.target.value });
    };

    handleCity = (e) => {
        this.setState({ pCity: e.target.value });
    };

    handleCountry = (e) => {
        this.setState({ pCountry: e.target.value });
    };

    handleStreet = (e) => {
        this.setState({ pStreet: e.target.value });
    };

    handleHouse = (e) => {
        this.setState({ pHouse: e.target.value });
    };
    handleNearby = (e) => {
        this.setState({ pNearby: e.target.value });
    };

    handleLandmark = (e) => {
        this.setState({ pLandmark: e.target.value });
    };
    handlePincode = (e) => {
        this.setState({ pPincode: e.target.value });
    };
    handleEdudetails = (e) => {
        this.setState({ eduDetails: e.target.value });
    };

    handleBio = (e) => {
        this.setState({ bio: e.target.value });
    };

    handleDropChange = (e) => {
        console.log(e);
        this.setState({ skills: e });
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
            })
        }).then(() => {
            console.log(this.state.profilepic);
        })
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

    // openModal = () =>{
        
    //     this.setState({mentorModal: true});
    // }

  submitmodal = ()=>{
      this.setState({submitModal: true})
  }

    handleSubmit = (e) => {
        e.preventDefault();

        firebase.auth().onAuthStateChanged((user) => {
            firebase.database().ref(`mentors/${user.uid}`).once("value")
                .then((snap) => {

                    if (this.state.profilepic !== this.state.profile) {
                        firebase
                            .storage()
                            .ref("mentors/" + user.uid + "/profile.jpeg")
                            .putString(this.state.profilepic, "data_url")
                            .then((snapshot) => {

                                firebase
                                    .storage()
                                    .ref("mentors")
                                    .child(user.uid + "/profile.jpeg")
                                    .getDownloadURL()
                                    .then((urls) => {

                                        const db = firebase.database();
                                        db.ref("mentors/" + user.uid)
                                            .update({
                                                profilepic: urls,
                                            })

                                    })
                            })
                    }
                    

                    const db = firebase.database();
                    db.ref("mentors/" + user.uid)
                        .update({
                            name: this.state.name,

                            contact: this.state.contact,
                            selAns: this.state.selAns,
                            pHouse: this.state.pHouse,

                            pStreet: this.state.pStreet,
                            pLandmark: this.state.pLandmark,
                            pNearby: this.state.pNearby,
                            eduDetails: this.state.eduDetails,
                            pCity: this.state.pCity,
                            pCountry: this.state.pCountry,
                            pPincode: this.state.pPincode,
                            bio: this.state.bio,
                            skills: this.state.skills,


                        })
                       


                }) .then(() => {
                            //   alert("Mentor Updated Successfully!");
                            // window.location.href = "/mentor/Profile";
                            this.submitmodal();
                        });
        })

    };





    render() {

       
        return (
            <>

                {this.state.newprofilepic ? (
                    <>
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
                             
                             <h2>Mentor Succesfully Updated</h2>
                             
                             <a href="/mentor/Profile"><Button color="info">Return To Profile</Button></a>
                             </Card>
                             </Modal>

                <UserEditHeader name={this.state.name} profile={this.state.profilepic} />
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

                                                    src={this.state.profile}
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
                                            {this.state.name}

                                        </h3>
                                        <div className="h5 font-weight-300">
                                            <i className="ni location_pin mr-2" />
                                            {this.state.pCity + " " + this.state.pState}
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
                                                            onChange={this.handleName}

                                                            className="form-control-alternative"
                                                            value={this.state.name}
                                                            id="input-username"
                                                            placeholder="Username"
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
                                                            htmlFor="input-first-name"
                                                        >
                                                            {this.state.selOption}
                                                        </label>
                                                        <Input
                                                            onChange={this.handleselAns}

                                                            className="form-control-alternative"
                                                            value={this.state.selAns}
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
                                                            onChange={this.handleContact}

                                                            className="form-control-alternative"
                                                            value={this.state.contact}
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
                                                            House No.
                                                        </label>
                                                        <Input
                                                            onChange={this.handleHouse}

                                                            className="form-control-alternative"
                                                            value={this.state.pHouse}
                                                            id="input-address"
                                                            placeholder="Home Address"
                                                            type="text"
                                                        />
                                                    </FormGroup>
                                                    <FormGroup>
                                                        <label
                                                            className="form-control-label"
                                                            htmlFor="input-address"
                                                        >
                                                            Street
                                                        </label>
                                                        <Input
                                                            onChange={this.handleStreet}

                                                            className="form-control-alternative"
                                                            value={this.state.pStreet}
                                                            id="input-address"
                                                            placeholder="Home Address"
                                                            type="text"
                                                        />
                                                    </FormGroup>
                                                    <FormGroup>
                                                        <label
                                                            className="form-control-label"
                                                            htmlFor="input-address"
                                                        >
                                                            Landmark
                                                        </label>
                                                        <Input
                                                            onChange={this.handleLandmark}

                                                            className="form-control-alternative"
                                                            value={this.state.pLandmark}
                                                            id="input-address"
                                                            placeholder="Home Address"
                                                            type="text"
                                                        />
                                                    </FormGroup>
                                                    <FormGroup>
                                                        <label
                                                            className="form-control-label"
                                                            htmlFor="input-address"
                                                        >
                                                            Nearby
                                                        </label>
                                                        <Input
                                                            onChange={this.handleNearby}

                                                            className="form-control-alternative"
                                                            value={this.state.pNearby}
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
                                                            onChange={this.handleCity}

                                                            className="form-control-alternative"
                                                            value={this.state.pCity}
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
                                                            onChange={this.handleCountry}

                                                            className="form-control-alternative"
                                                            value={this.state.pCountry}
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
                                                            onChange={this.handlePincode}

                                                            className="form-control-alternative"
                                                            id="input-postal-code"
                                                            placeholder={this.state.pPincode}
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
                                                <label>About Me</label>
                                                <Input
                                                    onChange={this.handleBio}

                                                    className="form-control-alternative"

                                                    rows="4"
                                                    value={this.state.bio}
                                                    type="textarea"
                                                />
                                            </FormGroup>
                                        </div>


                                        <div className="pl-lg-4">
                                            <FormGroup>
                                                <label>Education Details</label>
                                                <Input
                                                    onChange={this.handleEdudetails}

                                                    className="form-control-alternative"

                                                    rows="4"
                                                    value={this.state.eduDetails}
                                                    type="textarea"
                                                />
                                            </FormGroup>
                                        </div>
                                        <div className="pl-lg-4">
                                            <FormGroup>
                                                <label>Skills </label>

                                                <Select
                                                    value={this.state.skills}

                                                    closeMenuOnSelect={false}

                                                    isMulti
                                                    options={this.state.options}
                                                    onChange={this.handleDropChange}
                                                />

                                                {/* <List >
                                                    {this.state.options.map((value , index) => (
                                                        <ListItem
                                                            ket={index}
                                                            disableGutters
                                                           
                                                        >
                                                            <ListItemText primary={`Line item ${value}`} />
                                                        </ListItem>
                                                    ))}
                                                </List> */}
                                            </FormGroup>
                                        </div>
                                        <div>
                                            <FormGroup>
                                                <label for="exampleFile">Profile Photo</label>
                                                <Input
                                                    id="exampleFile"
                                                    name="file"
                                                    type="file"
                                                    onChange={this.getNewImg}
                                                />
                                               
                                                
                                                <img
                                                    alt="..."
                                                    className="rounded-circle"
                                                    id="profile"
                                                    style={{
                                                        width: "100px",
                                                        height: "100px",
                                                        margin: "0 20px",
                                                    }}
                                                    src={this.state.profilepic ? this.state.profilepic : defaultIcon}
                                                />
                                            </FormGroup>
                                        </div>
                                        <Button color="primary" onClick={this.handleSubmit}>
                                            Submit
                                        </Button>
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

Mupdate.layout = Mentor;

export default Mupdate;