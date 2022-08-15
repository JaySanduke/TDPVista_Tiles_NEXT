import React from "react";

// import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import firebase from "../../config/firebase-tiles";
import DocumentMeta from "react-document-meta";
import User from "layouts/User.js";
import {
    Button,
    Card,
    CardHeader,
    CardBody,
    Container,
    Form,
    FormGroup,
    Input,
    Row,
    Col,
    InputGroup,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
    InputGroupAddon,
    InputGroupText
} from "reactstrap";
import UserHeader from "components/Headers/UserHeader.js";
import "assets/css/detailClassroom.css";

import course from 'assets/img/courses/1.png'
import stars from 'assets/img/star1.png'

// import 'swiper/swiper-bundle.min.css'
// import 'swiper/swiper.min.css'


class classroom extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            w_detail:{},
            workData: [],
            userData: [],
            x:"",
        };
    }
    componentDidMount() {
        firebase.auth().onAuthStateChanged((user) => {
            firebase
                .database()
                .ref(`users/${user.uid}`)
                .once("value")
                .then((snap) => {
                    var data = snap.val();
                    if (data) {
                        this.setState({ userData: data })
                        var s=data.username.split(' ')[0];
                        this.setState({x:s});
                    }


                    var currenturl = window.location.search;
                    var currenturlsearch = new URLSearchParams(currenturl);
                    var w_id = currenturlsearch.get("w_id");

                    if (w_id === undefined) {
                        window.location.href = "/";
                    }



                    // Fetches Data About Quiz

                    firebase
                        .database()
                        .ref("Workshops/"+w_id)
                        .once("value")
                        .then((snapshot) => {
                            var workData = snapshot.val();
                            if (workData) {
                                this.setState({ workData: workData.data,
                                
                                     w_detail:workData.data.w_details,
                                })
                                
                                
                            }
                        }).then(()=>{
                            console.log(this.state.workData.workshopCategory)
                        })

                });
        });

        document.getElementById('userHeaderNameId').style.display = 'none';
        document.getElementById('remo').firstChild.style.display = "none";
        document.querySelector(".header").firstElementChild.style.height = '70px';
        document.querySelector(".header").style.minHeight = '70px'
        document.querySelector(".header").style.zIndex = '5'
        document.querySelector(".header").classList.remove('pb-8', 'pt-5', 'pt-lg-8');
        const progress5 = document.querySelector('#rate5');
        const progress4 = document.querySelector('#rate4');
        const progress3 = document.querySelector('#rate3');
        const progress2 = document.querySelector('#rate2');
        const progress1 = document.querySelector('#rate1');
        progress5.style.width = progress5.getAttribute('data-done') + '%';
        progress5.style.opacity = 1;
        progress4.style.width = progress4.getAttribute('data-done') + '%';
        progress4.style.opacity = 1;
        progress3.style.width = progress3.getAttribute('data-done') + '%';
        progress3.style.opacity = 1;
        progress2.style.width = progress2.getAttribute('data-done') + '%';
        progress2.style.opacity = 1;
        progress1.style.width = progress1.getAttribute('data-done') + '%';
        progress1.style.opacity = 1;

        var r = document.querySelector(':root');
        r.style.setProperty('--percentage', '66');
    }

    render() {
        const meta = {
            title: "Enroll Now",
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
            {  this.state.workData ? <div>
                    <div className="studentInfo">
                        <h1>Hii {this.state.x}</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque dolorum sunt placeat alias porro, possimus saepe quas.</p>
                    </div>
                    <div className="mainDiv">

                        <div className="rating">
                            <div className="ratingLeft">
                                <h1>4.5</h1>
                                <img src={stars} alt="" style={{ width: "100px" }} />
                                <p>2353 votes</p>
                            </div>
                            <div className="ratingRight">
                                <div style={{ display: "flex", alignItems: "center" }}>
                                    <span style={{ padding: "3px" }}>5</span>
                                    <div class="progress">
                                        <div class="progress-done" id="rate5" data-done="70">
                                        </div>
                                    </div>
                                </div>
                                <div style={{ display: "flex", alignItems: "center" }}>
                                    <span style={{ padding: "3px" }}>4</span>
                                    <div class="progress">
                                        <div class="progress-done" id="rate4" data-done="30">
                                        </div>
                                    </div>
                                </div>
                                <div style={{ display: "flex", alignItems: "center" }}>
                                    <span style={{ padding: "3px" }}>3</span>
                                    <div class="progress">
                                        <div class="progress-done" id="rate3" data-done="50">
                                        </div>
                                    </div>
                                </div>
                                <div style={{ display: "flex", alignItems: "center" }}>
                                    <span style={{ padding: "3px" }}>2</span>
                                    <div class="progress">
                                        <div class="progress-done" id="rate2" data-done="20">
                                        </div>
                                    </div>
                                </div>
                                <div style={{ display: "flex", alignItems: "center" }}>
                                    <span style={{ padding: "3px" }}>1</span>
                                    <div class="progress">
                                        <div class="progress-done" id="rate1" data-done="10">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="sideGraph">
                            <div>
                                <h1 style={{ fontSize: '2rem', color: "white" }}>Students</h1>
                            </div>
                            <div>
                                <figure class="chart-two animate">
                                    <svg role="img" xmlns="http://www.w3.org/2000/svg">
                                        <title>[title here]</title>
                                        <desc>[long description here]</desc>
                                        <circle class="circle-background" />
                                        <circle class="circle-foreground" />
                                    </svg>
                                    <figcaption>50% of all males like donuts.</figcaption>
                                </figure>
                            </div>
                        </div>
                    </div>
                    <div className="classSidebar" >
                        <h1>
                           { this.state.w_detail.workshopTitle}
                        </h1>
                        <div className="sidebarImg">
                            <img src={course} alt="" />
                        </div>
                        <div className="decp">
                            <h2>Description</h2>
                            <p>
                            {this.state.w_detail.Wdesc}
                            </p>
                        </div>
                        <div className="sideDates">
                            <div className="sidebarDates">
                                <div>Start Date</div>
                                <div style={{ fontWeight: "800" }}>{this.state.w_detail.starting_date} </div>
                            </div>
                            <div className="sidebarDates">
                                <div>End Date</div>
                                <div style={{ fontWeight: "800" }}>{this.state.w_detail.end_date} </div>
                            </div>
                            <div className="sidebarDates">
                                <div>Duration</div>
                                <div style={{ fontWeight: "800" }}>{this.state.w_detail.Workshop_duration}</div>
                            </div> 
                        </div>
                        <div className="checkoutButton">
                            <div className="priceTag">
                                <span>&#8377;</span>500
                            </div>
                            <button className="preorder">
                                <p>Enroll Now</p>
                                <div className="buttonaction">
                                    <svg
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M23.0677 11.9929L18.818 7.75739L17.4061 9.17398L19.2415 11.0032L0.932469 11.0012L0.932251 13.0012L19.2369 13.0032L17.4155 14.8308L18.8321 16.2426L23.0677 11.9929Z"
                                            fill="currentColor"
                                        />
                                    </svg>
                                </div>
                            </button>
                        </div>
                    </div>
                </div>:null}
                <div className="classContent">

                </div>


            </>
        );
    }
}

classroom.layout = User;

export default classroom;