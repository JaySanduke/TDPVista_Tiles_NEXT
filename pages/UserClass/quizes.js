import React from "react";
import DataTable from "react-data-table-component";
// import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import firebase from "../../config/firebase-tiles";
import DocumentMeta from "react-document-meta";


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
import { Link } from "react-router-dom";
import defaultIcon from "../../assets/img/defaultIcon.png";
import UserClassroom from "layouts/UserClassroom";

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Scrollbar } from "swiper";
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'
// import "assets/css/card.scss";
// import 'swiper/css';
import 'swiper/components/navigation/navigation.min.css';
import 'swiper/components/pagination/pagination.min.css';
import 'swiper/components/scrollbar/scrollbar.min.css'

import c from "assets/img/pngegg.png"
import course from 'assets/img/courses/1.png'
import reactlogo from 'assets/img/logo/react.png'


// import 'swiper/swiper-bundle.min.css'
// import 'swiper/swiper.min.css'


// import "assets/css/classroom.css";
import "assets/css/quizesCards21.css";
import card1 from 'assets/img/card1.jpg'
import Progressbar from '../UserClass/progress';
import router from "next/router";

SwiperCore.use([Pagination, Navigation]);
class classroom extends React.Component {
    constructor(props) {
        super(props);
        var today = new Date(),
            todayDate =
                today.getFullYear() +
                "-" +
                ((today.getMonth() + 1 < 10 ? "0" : "") + (today.getMonth() + 1)) +
                "-" +
                ((today.getDate() < 10 ? "0" : "") + today.getDate());
        var time = today.getHours() + ":" + today.getMinutes();
        this.state = {
            userData: {},
            classroom_data: [],
            classroomDataArr: [],
            mail: "",
            search_data: [],
            quiz_data: [],
            todayDate: todayDate,
            nowTime: time,
            status: "",
        };
    }
    componentDidMount() {
        document.getElementById('userHeaderNameId').style.display = 'none';
        document.getElementById('remo').firstChild.style.display = "none";
        document.querySelector(".header").firstElementChild.style.height = '75px';
        document.querySelector(".header").style.minHeight = '75px';
        document.querySelector(".header").classList.remove('pb-8', 'pt-5', 'pt-lg-8');
        // var x = [];
        // var tts = this;
        // firebase
        //     .database()
        //     .ref("Classroom/")
        //     .once("value")
        //     .then((snapshot) => {
        //         snapshot.forEach(function (childSnapshot) {
        //             var childData = childSnapshot.val();
        //             x.push({
        //                 d: childData.data
        //             });
        //         });
        //         var data = snapshot.val();
        //         if (data) {
        //             console.log(data);
        //             tts.setState({
        //                 classroom_data: x,
        //                 search_data: x,
        //             });
        //             console.log(this.state.classroom_data);
        //         }
        //     });
        firebase.auth().onAuthStateChanged((user) => {
            firebase
                .database()
                .ref(`users/${user.uid}`)
                .once("value")
                .then((snap) => {
                    var data = snap.val();
                    {
                        let id = localStorage.getItem("u_id");
                        this.setState({ c_id: id });
                        // console.log(this.state.c_id);
                        var tts = this;
                        var x = [];
                        const db = firebase.database();
                        const ref = db.ref("Classroom/" + this.state.c_id + "/data/quiz");
                        ref.once("value").then((snapshot) => {



                            var quizIds = snapshot.val();
                            quizIds.map((ids) => {
                                console.log(ids);
                                const db = firebase.database();
                                const ref = db.ref("Quiz/classQ/" + ids);
                                ref.once("value").then((Childsnapshot) => {

                                    console.log(Childsnapshot.val());
                                    var childData = Childsnapshot.val();
                                    if (!childData.data.block) {
                                        x.push(childData);
                                    }

                                })
                            })

                            // snapshot.forEach(function (childSnapshot) {
                            //     var childData = childSnapshot.val();
                            //     console.log(childData);




                            //     // if (!childData.data.block) {
                            //     //     x.push(childData);
                            //     // }

                            // });



                        }).then(() => {
                            this.setState({ quiz_data: x });
                            console.log(this.state.quiz_data)
                        }).then(() => {
                            if (true) {

                                var b = new Date(
                                    this.state.todayDate + " " + this.state.nowTime
                                );
                                this.setState({ status: b });
                            }
                            console.log(this.state.status)


                        });



                        //  if (true) {
                        //           var a = new Date(
                        //             childData.start_date + " " + childData.start_time
                        //           );
                        //           var b = new Date(
                        //             tts.state.todayDate + " " + tts.state.nowTime
                        //           );
                        //           var c = new Date(
                        //             childData.end_date + " " + childData.end_time
                        //           );
                        //         }
                        //         var active = false;
                        //         if (childData) {
                        //           if (a <= b && c >= b) {
                        //             active = true;
                        //           }
                        //         }




                    }
                })
        })
    }



    render() { 
        const meta = {
        title: "Quizes",
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
            
            
<>  <DocumentMeta {...meta} />

                <UserHeader />

                <Container fluid>
                <div>
                    <h2 className="ClassHead">Active Quiz</h2>
                    {/* <a href=""><Button color="info" justifyContent="left">View More</Button></a> */}
                    <div className="ClassroomHead mb-3">
                        <h2>Quizes Active</h2>
                    </div>
                    <Card>
<h2>quizes</h2>
</Card>

                    <Swiper
                        modules={[Navigation, Pagination, Scrollbar]}
                         pagination={{
                             "type": "progressbar"
                         }}
                        navigation={true}
                        className="mySwiper"
                        spaceBetween={50}
                        slidesPerView={4}
                        onSlideChange={() => console.log('slide change')}
                        onSwiper={(swiper) => console.log(swiper)}
                        breakpoints={{
                            // when window width is >= 640px

                            // when window width is >= 768px
                            340: {
                                width: 340,
                                slidesPerView: 1,
                            },
                            400: {
                                width: 400,
                                slidesPerView: 1,
                            },
                            1040: {
                                width: 1047,
                                slidesPerView: 2,
                            },
                            1300: {
                                width: 1300,
                                slidesPerView: 3,
                            },
                        }}
                    >
                        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }} className="test_class_slider">
                            {console.log(this.state.quiz_data)}
                            {this.state.quiz_data ? this.state.quiz_data.map((item) => {
console.log(item)
                                var a = new Date(
                                    item.data.start_date + " " + item.data.start_time
                                );
                                var c = new Date(
                                    item.data.end_date + " " + item.data.end_time
                                );
                                var cname = "";


                                 console.log("ok")
                                // if (a <= this.state.status && c >= this.state.status)


                                // console.log(this.state.status)
                                console.log(item.data)
                                return (<SwiperSlide>


                                    {/* <div className="card-body" style={{ overflowy: "auto", height: '200px' }}>
                                                        <h2 className="card-title"> {item.data.name} </h2>
                                                        <h3 className="card-text">Quizes</h3>
                                                        <h3 className="rating">5<span className="star"> &#9733;  &#9733;  &#9733;  &#9733;  &#9733; <p className="users">400</p></span></h3>
                                                    </div>


                                                    <div className="card-footer" style={{ background: "inherit" }}>



                                                     

                                                    </div>
                                                </div>  */}

                                    <div className="quiz">

                                        <p className="quiz-title">
                                            <h1>{item.data.name && console.log(item.data.name)} </h1>
                                        </p>
                                        <p className="quiz-content">
                                            Lorem ipsum dolor sit amet,
                                            consectetur adipiscing elit.
                                            Quisque scelerisque.
                                        </p>
                                        <a href='#'>
                                            <button className="quiz-btn">SEE MORE</button>
                                        </a>
                                    </div>

                                </SwiperSlide>

                                );



                            }
                            )

                            : <h2>Loading...</h2>}


                        </div>
                    </Swiper>
                </div>

                <div>
                    <h2 className="ClassHead">Upcoming Quiz</h2>
                    {/* <a href=""><Button color="info" justifyContent="left">View More</Button></a> */}
                    {/* <div className="ClassroomHead mb-3">
                    </div> */}


                    <Swiper
                        modules={[Navigation, Pagination, Scrollbar]}
                        pagination={{
                            "type": "progressbar"
                        }}
                        navigation={true}
                        className="mySwiper"
                        spaceBetween={50}
                        slidesPerView={3}
                        onSlideChange={() => console.log('slide change')}
                        onSwiper={(swiper) => console.log(swiper)}
                        breakpoints={{
                            // when window width is >= 640px

                            // when window width is >= 768px
                            340: {
                                width: 340,
                                slidesPerView: 1,
                            },
                            400: {
                                width: 400,
                                slidesPerView: 1,
                            },
                            1040: {
                                width: 1047,
                                slidesPerView: 2,
                            },
                            1300: {
                                width: 1300,
                                slidesPerView: 3,
                            },
                        }}
                    >
                        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
                            {this.state.quiz_data ? this.state.quiz_data.map((item, index) => {

                                var a = new Date(
                                    item.data.start_date + " " + item.data.start_time
                                );

                                var c = new Date(
                                    item.data.end_date + " " + item.data.end_time
                                );

                                var cname = "";

                                item.data.classrooms.map((it) => {
                                    cname = it.c_id;
                                })
                                let u_id = localStorage.getItem("u_id");
                                if (cname == u_id) {
                                    console.log(this.state.status)
                                    if (a > this.state.status) {


                                        return (
                                            <SwiperSlide>
                                                {/* <div className="MainCard">
                                                    <div className="wrapper">

                                                        <div>
                                                            <img src={course} alt="" />
                                                        </div>



                                                        <div className="productSpecifications">
                                                            <h1> {item.data.data.name} </h1>
                                                            <h3 style={{ color: "black", fontWeight: "400" }}> Start :- {item.data.data.start_date} Time:- {item.data.data.start_time}</h3>
                                                            <h3 style={{ color: "black", fontWeight: "400" }}> End :- {item.data.data.end_date} Time:- {item.data.data.end_time}</h3>

                                                            <h3>Duration :- {item.data.data.duration} Minutes</h3>
                                                            {/* <div className="productFeatures">
                                                                <div className="feature">
                                                                    <div className="featureIcon" style={{ display: "flex", justifyContent: "center", alignItems: "center" }} >

                                                                    </div>
                                                                    <div className="featureText">
                                                                        <p> <strong></strong></p>
                                                                    </div>
                                                                </div>
                                                                <div className="feature">
                                                                    <div className="featureIcon" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>

                                                                    </div>
                                                                    <div className="featureText">
                                                                        <p> </p>
                                                                    </div>
                                                                </div>
                                                            </div> 

                                                            <div className="checkoutButton">
                                                                <div className="priceTag">

                                                                </div>
                                                                <button disabled className="preorder">
                                                                    <p>View</p>
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
                                                    </div>
                                                </div> */}
                                            </SwiperSlide>
                                        );
                                    }
                                }
                            }
                            )
                                : null}

                            {this.state.quiz_data.length === 0 &&
                                (<div>No Active Quiz </div>)}
                        </div>



                        {/* <SwiperSlide>Slide 2</SwiperSlide>
                        <SwiperSlide>Slide 3</SwiperSlide>
                        <SwiperSlide>Slide 4</SwiperSlide> */}

                    </Swiper>

                </div>

                <div>
                    <h2 className="ClassHead">Quiz Over</h2>
                    {/* <a href=""><Button color="info" justifyContent="left">View More</Button></a> */}
                    <div className="ClassroomHead mb-3">
                    </div>


                    <Swiper
                        modules={[Navigation, Pagination, Scrollbar]}
                        pagination={{
                            "type": "progressbar"
                        }}
                        navigation={true}
                        className="mySwiper"
                        spaceBetween={50}
                        slidesPerView={3}
                        onSlideChange={() => console.log('slide change')}
                        onSwiper={(swiper) => console.log(swiper)}
                        breakpoints={{
                            // when window width is >= 640px

                            // when window width is >= 768px
                            340: {
                                width: 340,
                                slidesPerView: 1,
                            },
                            400: {
                                width: 400,
                                slidesPerView: 1,
                            },
                            1040: {
                                width: 1047,
                                slidesPerView: 2,
                            },
                            1300: {
                                width: 1300,
                                slidesPerView: 3,
                            },
                        }}
                    >
                        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
                            {this.state.quiz_data ? this.state.quiz_data.map((item, index) => {

                                var a = new Date(
                                    item.data.start_date + " " + item.data.start_time
                                );

                                var c = new Date(
                                    item.data.end_date + " " + item.data.end_time
                                );

                                var cname = "";

                                item.data.classrooms.map((it) => {
                                    cname = it.c_id;
                                })
                                let u_id = localStorage.getItem("u_id");
                                if (cname == u_id) {

                                    if (this.state.status > c) {


                                        return (
                                            <SwiperSlide>
                                                {/* <div className="MainCard">
                                                    <div className="wrapper">

                                                        <div>
                                                            <img src={course} alt="" />
                                                        </div>



                                                        <div className="productSpecifications">
                                                            <h1> {item.data.data.name} </h1>
                                                            <h3 style={{ color: "black", fontWeight: "400" }}> Start :- {item.data.data.start_date} Time:- {item.data.data.start_time}</h3>
                                                            <h3 style={{ color: "black", fontWeight: "400" }}> End :- {item.data.data.end_date} Time:- {item.data.data.end_time}</h3>

                                                            <h3>Duration :- {item.data.data.duration} Minutes</h3>
                                                            {/* <div className="productFeatures">
                                                                <div className="feature">
                                                                    <div className="featureIcon" style={{ display: "flex", justifyContent: "center", alignItems: "center" }} >

                                                                    </div>
                                                                    <div className="featureText">
                                                                        <p> <strong></strong></p>
                                                                    </div>
                                                                </div>
                                                                <div className="feature">
                                                                    <div className="featureIcon" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>

                                                                    </div>
                                                                    <div className="featureText">
                                                                        <p> </p>
                                                                    </div>
                                                                </div>
                                                            </div> 

                                                            <div className="checkoutButton">
                                                                <div className="priceTag">

                                                                </div>
                                                                <button disabled className="preorder">
                                                                    <p>View</p>
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
                                                    </div>
                                                </div> */}
                                            </SwiperSlide>
                                        );
                                    }
                                }
                            }
                            )
                                : null}

                            {this.state.quiz_data.length === 0 &&
                                (<div>No Active Quiz </div>)}
                        </div>



                        {/* <SwiperSlide>Slide 2</SwiperSlide>
                        <SwiperSlide>Slide 3</SwiperSlide>
                        <SwiperSlide>Slide 4</SwiperSlide> */}

                    </Swiper>

                </div>
                </Container>
            </>)



        
    }
}

classroom.layout = UserClassroom;

export default classroom;