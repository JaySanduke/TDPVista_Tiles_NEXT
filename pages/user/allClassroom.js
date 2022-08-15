import React from "react";
import firebase from "config/firebase-tiles";
import "assets/css/card.scss";
import c from "assets/img/pngegg.png"
import course from 'assets/img/courses/1.png'
import reactlogo from 'assets/img/logo/react.png'
import DocumentMeta from "react-document-meta";

import {
    Button,
    Card,
    CardHeader,
    CardBody,
    FormGroup,
    Form,
    Input,
    Container,
    InputGroup,
    Row,
    Col,
} from "reactstrap";
import UserHeader from "components/Headers/UserHeader.js";
import { Link } from "react-router-dom";
import defaultIcon from "../../assets/img/defaultIcon.png";
import User from "layouts/User";
class classroom extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleMail = this.handleMail.bind(this);
        this.reset = this.reset.bind(this);
        this.state = {
            userData: {},
            classroom_data: [],
            classroomDataArr: [],
            mail: "",
            search_data: [],
        };
    }

    componentDidMount() {
        var currenturl = window.location.search;
        var currenturlsearch = new URLSearchParams(currenturl);
        var en = currenturlsearch.get("en");
        document.getElementById('userHeaderNameId').style.display = 'none';
        document.getElementById('remo').firstChild.style.display = "none";
        document.querySelector(".header").firstElementChild.style.height = '70px';
        document.querySelector(".header").style.minHeight = '70px'
        document.querySelector(".header").classList.remove('pb-8', 'pt-5', 'pt-lg-8');
        var x = [];
        var tts = this;
        if (en == 'enroll') {
            firebase.auth().onAuthStateChanged((user) => {
                firebase.database().ref(`users/${user.uid}`).once("value")
                    .then((snap) => {
                        var d = [];
                        var d = snap.val();
                        {
                            console.log(d);
                            if (d.classroom) {
                                console.log(d.classroom);
                                d.classroom.map(item => {
                                    // console.log(item);
                                    firebase
                                        .database()
                                        .ref(`Classroom/${item}`)
                                        .once("value")
                                        .then((snapshot) => {
                                            var chilData = snapshot.val();
                                            // console.log(childData); 
                                            x.push({
                                                d: chilData.data
                                            });
                                            // console.log(x);
                                        }).then(() => {
                                            this.setState({
                                                classroom_data: x,
                                                search_data: x,
                                            })
                                            // console.log(this.state.enrolledData)
                                            return null;
                                        })
                                })
                            }
                        }

                    })
            })
        } else {
            firebase
                .database()
                .ref("Classroom/")
                .once("value")
                .then((snapshot) => {
                    snapshot.forEach(function (childSnapshot) {
                        var childData = childSnapshot.val();
                        x.push({
                            d: childData.data
                        });
                    });
                    var data = snapshot.val();
                    if (data) {
                        console.log(data);
                        tts.setState({
                            classroom_data: x,
                            search_data: x,
                        });
                        console.log(this.state.classroom_data);
                    }
                });
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();
        var s = this.state.mail;
        console.log(s);
        var data = this.state.classroom_data.filter((item) => item.d.classroomName === s);
        this.setState({ search_data: data });
        console.log(this.search_data)
    };
    handleMail = (e) => {
        this.setState({ mail: e.target.value });
        var data = this.state.classroom_data.filter((item) =>
            item.d.classroomName.includes(e.target.value)
        );
        this.setState({ search_data: data });
    };
    reset = (e) => {
        this.setState({ search_data: this.state.classroom_data, mail: "" });
        document.getElementById("search").value = "";
    };


    render() {
        const meta = {
            title: "Search Classroom",
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
                <Form role="form" onSubmit={this.handleSubmit} className="m-4 searchBar">
                    <FormGroup className="search">
                        <InputGroup>
                            <Input
                                type="text"
                                placeholder="Enter classroom name"
                                onChange={this.handleMail}
                                id="search"
                            />
                        </InputGroup>
                    </FormGroup>
                </Form>
                <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
                    {this.state.search_data ? this.state.search_data.map((data, index) => {
                        return (
                            <div className="card card-custom bg-white border-white border-0">
                                <div className="card-custom-img" style={{ backgroundImage: `url('${course}')` }}></div>
                                <div className="card-custom-avatar">

                                    <img className="img-fluid" src={reactlogo} alt="Avatar" style={{ backgroundSize: "80% 80%" }} />
                                </div>
                                <div className="card-body" style={{ overflowy: "auto" }}>

                                    <h2 className="card-title"> {data.d.classroomName} </h2>
                                    <h3 className="card-text">{data.d.courses[0].course_title}</h3>
                                    <h3 className="rating">4.7 <span className="star"> &#9733;  &#9733;  &#9733;  &#9733;  &#9733; <p className="users">(420)</p></span></h3>
                                </div>


                                <div className="card-footer" style={{ background: "inherit" }}>

                                    <div className="pdetail">
                                        <div className="priceTag">
                                            <span>&#8377; </span>500
                                        </div>

                                        {/* <a href="#" className="btn btn-primary">Option</a>
                                                <a href="#" className="btn btn-outline-primary">Other option</a> */}
                                        <a href={"/user/detailClassroom?c_id=" + data.d.c_id} className="enrolledclass">
                                            <button className="preorder"
                                            >
                                                <p>View</p>
                                            </button>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        );
                    }
                    )
                        : null}
                </div>
            </>
        );
    }
}
classroom.layout = User;
export default classroom;
