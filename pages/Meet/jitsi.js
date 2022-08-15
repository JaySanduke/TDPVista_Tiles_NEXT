import React, { Component } from "react";
// import admin from "layouts/Meet.js";
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
    label,

    Input,
} from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {

    faWindowClose,
} from "@fortawesome/free-solid-svg-icons";
import firebase from "../../config/firebase-tiles";
// import StarRatings from './react-star-ratings';

import StarRatingComponent from 'react-star-rating-component';

class App extends Component {
    constructor() {
        super();
        this.state = {
            id: null,
            userid: '',
            Modal: false,
            meet_id: '',
            class_id: '',
            rating: 0,
            classRating:0,
            users:0,
            editing:true,
            attendance:false,
        }
    }
    componentDidMount() {

        firebase.auth().onAuthStateChanged((user) => {
            firebase.database().ref(`users/${user.uid}`).once("value")
                .then((snap) => {

                    this.setState({ userid: user.uid });
                    var currenturl = window.location.search;
                    var currenturlsearch = new URLSearchParams(currenturl);
                    var id = currenturlsearch.get("id");
                    this.setState({
                        id: id,
                    })

                  

                    var meet_id = localStorage.getItem('meet_id');
                    this.setState({ meet_id: meet_id });
                    var class_id = localStorage.getItem('u_id');
                    this.setState({ class_id: class_id });
                    var work_id = localStorage.getItem('w_id');
                    this.setState({ work_id: work_id });
                    {this.state.class_id &&  firebase.database().ref("Classroom/" + this.state.class_id + "/data/").once("value").then((snapshot)=>{
                        var classroomData = snapshot.val();
                        this.setState({classRating : classroomData.rating.classRating ? classroomData.rating.classRating : 0});
                        this.setState({users : classroomData.rating.users ? classroomData.rating.users : 0});

                     })}


//  {this.state.work_id && 
                   
//                      firebase.database().ref("Workshop/" + this.state.work_id + "/data/").once("value").then((snapshot)=>{
//                         var workData = snapshot.val();
//                         this.setState({classRating : workData.rating.classRating ? workData.rating.classRating : 0});
//                         this.setState({users : workData.rating.users ? workData.rating.users : 0});

//                      })}
//                     if (meet_id) {
//                         setTimeout(() => {
//                             this.setState({ Modal: true })
//                             localStorage.removeItem('meet_id');
//                         }, 3000);
//                     }

                    //   firebase
                    //           .database()
                    //           .ref("Classroom/" + this.state.class_id + "/data/meet/" + this.state.meet_id + "/data/attendance")
                    //           .once("value")
                    //           .then((snapshot) =>{
                    //             var attendeedata = snapshot.val();
                    //           })

                })
        })
    }


    toggleMentor = () => {
        if (this.state.Modal) {
            console.log("Modal Close");
            this.setState({
                Modal: false,
            });
        } else {
            console.log("Modal Open");
            this.setState({
                Modal: true,

            });
        }
    };
    submitAttendance = () => {
        this.setState({attendance : true});
        firebase.auth().onAuthStateChanged((user) => {
            firebase.database().ref(`users/${user.uid}`).once("value")
                .then((snap) => {

                    //     firebase
                    //   .database()
                    //   .ref("Classroom/" + this.state.class_id + "/data/meet/" + this.state.meet_id + "/data/attendance")

                    //   .set(

                    //      [this.state.attendeedata,this.state.userid],


                    //  )

                    firebase.database().ref("Classroom/" + this.state.class_id + "/data/meet/" + this.state.meet_id + "/data/").once('value').then((parentsnapshot) => {

                        if (parentsnapshot.val()) {
                            var ref = firebase.database().ref("Classroom/" + this.state.class_id + "/data/meet/" + this.state.meet_id + "/data/");
                            var x = [];
                            ref.once('value').then((snapshot) => {
                                x = snapshot.val().attendance;
                            }).then(() => {
                                if (x === undefined) { x = []; }
                                x.push(this.state.userid);
                                ref.update({
                                    attendance: x
                                })
                            })
                        }

                        // else {

                        //     var ref = firebase.database().ref("Workshops/" + this.state.work_id + "/data/meet/" + this.state.meet_id + "/data/");
                        //     var x = [];
                        //     var y = [];
                        //     ref.once('value').then((snapshot) => {
                        //         x = snapshot.val();
                        //         y = x.attendance;
                        //     }).then(() => {
                        //         if (y === undefined) { y = []; }
                        //         y.push(this.state.userid);
                        //         ref.update({
                        //             attendance: y
                        //         })
                        //     })

                        // }

                    })

                })
        })
    };

    // changeRating(newRating, name) {
    //     this.setState({
    //         rating: newRating
    //     });
    // }
    onStarClick(nextValue, prevValue, name) {
        this.setState({ rating: nextValue });
        firebase.database().ref("Classroom/" + this.state.class_id + "/data/rating").set({
            classRating: this.state.classRating + nextValue,
           users : this.state.users + 1 ,
        })

        this.setState({editing : false});
        
    }

    // SubmitRating(){

    // }

    render() {
        const { rating } = this.state;

        return (
            <>
                {this.state.id !== null ?


                    <>
                        <Modal isOpen={this.state.Modal} toggle={this.toggleMentor}>

                            <Card style={{ width: '800px', height: "40vh", alignItems: "center", justifyContent: "center", position: 'relative' }}>
                                <Button size="lg" onClick={this.toggleMentor} style={{ position: "absolute", top: "0", left: "0", margin: "5px" }}>
                                    <FontAwesomeIcon
                                        icon={faWindowClose}
                                        style={{
                                            color: "rgb(185, 185, 185)",
                                            marginLeft: "auto",
                                            cursor: "pointer",
                                            fontSize: "20px",
                                            zIndex: '100',
                                        }}
                                    />
                                </Button>

                                <Form>
                                    <label style={{ display: 'flex' }}>
                                       <h2> Submit Attendance</h2>:<br></br>
<br></br>
                                       <span><Input type="checkbox" onClick={this.submitAttendance} disabled={this.state.attendance} name="name" /> Present</span> 

                                    </label>
                                    <label style={{ display: 'flex' }}>
                                        <h2>Rate Class</h2><br></br>
                                        <StarRatingComponent
                                            name="rate1"
                                            starCount={5}
                                            value={rating}
                                            onStarClick={this.onStarClick.bind(this)}
                                            editing={this.state.editing}
                                        />
                                    </label>
                                </Form>
                            </Card>
                        </Modal>
                        <div>
                            <Row>
                                <Col>
                                    <iframe
                                        allow="camera; microphone; fullscreen; display-capture"
                                        src={"https://meet.jit.si/" + this.state.id}
                                        height="650" width="100%"
                                    // style={{height:"100%", width:"100%", border: "0px"}}
                                    ></iframe>
                                </Col>
                            </Row>

                            {/* <Button color="danger">Go back</Button> */}
                        </div>
                    </>
                    :
                    <h3>Loading....</h3>
                }

            </>

        );
    }
}

// App.layout = admin;
export default App; 