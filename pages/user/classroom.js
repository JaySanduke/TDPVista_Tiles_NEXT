import React from "react";
import DataTable from "react-data-table-component";
// import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import firebase from "../../config/firebase-tiles";
// import { Link } from "react-router-dom";
import User from "layouts/User.js";
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
// import ProgressBar from 'react-bootstrap/ProgressBar'
import defaultIcon from "../../assets/img/defaultIcon.png";

import "assets/css/classswiper.css";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Scrollbar } from "swiper";
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'
import "assets/css/card.scss";
// import 'swiper/css';
import 'swiper/components/navigation/navigation.min.css';
import 'swiper/components/pagination/pagination.min.css';
import 'swiper/components/scrollbar/scrollbar.min.css'

import c from "assets/img/pngegg.png"
import course from 'assets/img/courses/1.png'
import reactlogo from 'assets/img/logo/react.png'


// import 'swiper/swiper-bundle.min.css'
// import 'swiper/swiper.min.css'
import "assets/css/classroom.css";
import "assets/css/card.css";

import card1 from 'assets/img/card1.jpg'
import Progressbar from '../UserClass/progress';
import router from "next/router";

SwiperCore.use([Pagination, Navigation]);
class classroom extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userData: {},
            classroom_data: [],
            classroomDataArr: [],
            mail: "",
            search_data: [],
            searchData: [],
            enrolledData: [],
            user_id: "",
            checkUser: false
        };
    }
    componentDidMount() {
        document.getElementById('userHeaderNameId').style.display = 'none';
        document.getElementById('remo').firstChild.style.display = "none";
        document.querySelector(".header").firstElementChild.style.height = '75px';
        document.querySelector(".header").style.minHeight = '75px';
        document.querySelector(".header").classList.remove('pb-8', 'pt-5', 'pt-lg-8');
        var x = [];
        let y = [];
        var tts = this;
        firebase
            .database()
            .ref("Classroom/")
            .once("value")
            .then((snapshot) => {
                snapshot.forEach(function (childSnapshot) {
                    var childData = childSnapshot.val();

                    if (childData.blocked !== 1) {
                        x.push({
                            d: childData.data
                        });
                    }
                });
                var data = snapshot.val();
                if (data) {
                    console.log(data);
                    tts.setState({
                        classroom_data: x,
                        search_data: x,
                    });
                    // console.log(this.state.classroom_data);
                }
            });

        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                this.setState({
                    user_id: user.uid,
                    checkUser: true
                });
                setTimeout(() => {
                    console.log(this.state.user_id)
                }, 500)
                firebase.database().ref(`users/${user.uid}`).once("value")
                    .then((snap) => {
                        console.log("User id - " + user.uid);
                        var d = [];
                        var d = snap.val();
                        {
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
                                            if (chilData.blocked !== 1) {
                                                y.push({
                                                    d: chilData.data,
                                                    user_id: user.uid,
                                                })
                                            }
                                            // console.log(x);
                                        }).then(() => {
                                            console.log(y)
                                            this.setState({
                                                enrolledData: y,
                                                searchData: y,
                                            })
                                            // console.log(this.state.enrolledData)
                                            return null;
                                        })




                                })
                            }
                        }

                    })
            } else {
                router.push('/')
            }





        })
    }

    render() {
        const meta = {
            title: "View Classrooms",
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
        // let userid = H1mSIvPQrvgNVDRa1IWuPtdLZ3k1;
        return (
            <>
                    <DocumentMeta {...meta} />

                <UserHeader />

                <div>
                    <h1 className="ClassHead">Your Classroom</h1>
                    <a href="/user/allClassroom?en=enroll" className="classbtn">View More</a>
                    <div className="ClassroomHead mb-3">
                    </div>

                    <Card>

                    </Card>
                    <Swiper
                        modules={[Navigation, Pagination, Scrollbar]}

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
                        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
                            {this.state.enrolledData && this.state.checkUser ? this.state.enrolledData.map((data, index) => {
                                var x = this.state.user_id;
                                // console.log(x);
                                //  console.log(data.d.UserProgress);
                                if (data.d.UserProgress) {
                                    var y = Object.keys(data.d.UserProgress);
                                    for (var i = 0; i < y.length; i++) {
                                        if (y[i] == x) {
                                            var z = data.d.UserProgress[y[i]];

                                            ;
                                        }
                                    }
                                }

                                // // console.log(data.d.UserProgress.userid.progress);
                                // console.log(data.d.UserProgress.x);
                                return (
                                    <SwiperSlide>


                                        <div className="card card-custom bg-white border-white border-0">
                                            <div className="card-custom-img" style={{ backgroundImage: `url('${data.d.profilepic ? data.d.profilepic : course}')` }}></div>
                                            <div className="card-custom-avatar">

                                                <img className="img-fluid" src={
                                                    data.d.courses[0].coverimg ? data.d.courses[0].coverimg : reactlogo
                                                    } alt="Avatar" style={{ backgroundSize: "80% 80%" }} />
                                            </div>
                                            <div className="card-body" style={{ overflowy: "auto" }}>

                                                <h2 className="card-title"> {data.d.classroomName} </h2>
                                                <h3 className="card-text">{data.d.courses[0].course_title}</h3>
                                                <h3 className="rating">{data.d.rating ? Math.round((data.d.rating.classRating + 100) / (data.d.rating.users + 20)) : 4.7}<span className="star"> &#9733;  &#9733;  &#9733;  &#9733;  &#9733; <p className="users">({data.d.rating ? (data.d.rating.users + 500) : 568})</p></span></h3>
                                            </div>


                                            <div className="card-footer" style={{ background: "inherit" }}>
                                                <h3 style={{ textAlign: "left", padding: "10px" }}>Your Progress</h3>
                                                <div className="progressdetail">
                                                    <Progressbar bgcolor="#99ccff" display="none" progress={z ? z.progress * 100 : 0} height={10} />
                                                    <br></br>
                                                    {/* <div class="progress">
                                                        <div class="progress-bar" role="progressbar" style={{ width: `${data.d.classroomName}%`,backgroundColor:"#172b4d" }}></div>
                                                    </div> */}
                                                    {/* <a href="#" className="btn btn-primary">Option</a>
                                                <a href="#" className="btn btn-outline-primary">Other option</a> */}
                                                    <a href={`/UserClass/dashboard?c_id=${data.d.c_id}`} className="enrolledclass">
                                                        <button className="preorder mt-3" onClick={() => {
                                                            localStorage.setItem("u_id", data.d.c_id)
                                                        }}>
                                                            <p>View</p>
                                                        </button>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                );
                            }
                            )
                                : null}
                        </div>


                        {/* <SwiperSlide>Slide 2</SwiperSlide>
                        <SwiperSlide>Slide 3</SwiperSlide>
                        <SwiperSlide>Slide 4</SwiperSlide> */}

                    </Swiper>

                </div>

                <div>
                    <h1 className="ClassHead">Classroom recommend to you</h1>
                    <a href="/user/allClassroom" className="classbtn">View More</a>
                    <div className="ClassroomHead mb-3">
                    </div>

                    <Card>

                    </Card>
                    <Swiper
                        modules={[Navigation, Pagination, Scrollbar]}

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
                                slidesPerView: 3,
                            },
                            1300: {
                                width: 1300,
                                slidesPerView: 4,
                            },
                        }}
                    >
                        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
                            {this.state.search_data ? this.state.search_data.map((data, index) => {
                                return (
                                    <div style={{ width: "75%", margin: "0 auto" }}>
                                        <SwiperSlide>
                                            {/* <div className="MainCard">
                                            <div className="wrapper">

                                                <div>
                                                    <img src={course} alt="" />
                                                </div>



                                                <div className="productSpecifications">
                                                    <h2> {data.d.classroomName} </h2>
                                                    <h3 style={{ color: "black", fontWeight: "400" }}>Technologies</h3>
                                                    <div style={{ display: "flex", flexWrap: "wrap" }}>
                                                        <img src={c} alt="" style={{ width: "40px", height: "40px" }} />
                                                        <img src={c} alt="" style={{ width: "40px", height: "40px" }} />
                                                        <img src={c} alt="" style={{ width: "40px", height: "40px" }} />
                                                        <img src={c} alt="" style={{ width: "40px", height: "40px" }} />
                                                        <img src={c} alt="" style={{ width: "40px", height: "40px" }} />
                                                    </div>

                                                    <div className="productFeatures">
                                                        <div className="feature">
                                                            <div className="featureIcon" style={{ display: "flex", justifyContent: "center", alignItems: "center" }} >
                                                                &#11088;&#11088;&#11088;&#11088;
                                                            </div>
                                                            <div className="featureText">
                                                                <p> <strong>Rating</strong></p>
                                                            </div>
                                                        </div>

                                                    </div>

                                                    <div className="checkoutButton">
                                                        <div className="priceTag">
                                                            <span>&#8377; </span>500
                                                        </div>
                                                        <a href={"/user/detailClassroom?c_id=" + data.d.c_id}>
                                                            <button className="preorder">
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
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div> */}
                                            <div className="card card-custom bg-white border-white border-0">
                                                <div className="card-custom-img" style={{ backgroundImage: `url('${data.d.profilepic ? data.d.profilepic : course}')` }}></div>
                                                <div className="card-custom-avatar">

                                                    <img className="img-fluid" src={
                                                        data.d.courses[0].coverimg ? data.d.courses[0].coverimg : reactlogo
                                                        } alt="Avatar" style={{ backgroundSize: "80% 80%" }} />
                                                </div>
                                                <div className="card-body" style={{ overflowy: "auto" }}>

                                                    <h2 className="card-title"> {data.d.classroomName} </h2>
                                                    <h3 className="card-text">{data.d.courses[0].course_title}</h3>
                                                    {/* <h3 className="rating">{(data.d.rating.classRating)/ (data.d.rating.users)}<span className="star"> &#9733;  &#9733;  &#9733;  &#9733;  &#9733; <p className="users">({data.d.rating.users})</p></span></h3> */}
                                                </div>


                                                <div className="card-footer" style={{ background: "inherit" }}>

                                                    <div className="pdetail">
                                                        <div className="priceTag">
                                                            <span>&#8377; </span>{data.d.price}
                                                        </div>

                                                        {/* <a href="#" className="btn btn-primary">Option</a>
                                                <a href="#" className="btn btn-outline-primary">Other option</a> */}
                                                        <a href={"/user/detailClassroom?c_id=" + data.d.c_id} className="enrolledclass">
                                                            <button className="preorder" >
                                                                <p>View</p>

                                                            </button>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                    </div>
                                );
                            }
                            )
                                : null}
                        </div>


                        {/* <SwiperSlide>Slide 2</SwiperSlide>
                        <SwiperSlide>Slide 3</SwiperSlide>
                        <SwiperSlide>Slide 4</SwiperSlide> */}

                    </Swiper>

                </div >

                <div>
                    <h1 className="ClassHead">Trending Classroom</h1>
                    <a href="/user/allClassroom" className="classbtn">View More</a>
                    <div className="ClassroomHead mb-3">
                    </div>

                    <Card>

                    </Card>
                    <Swiper
                        modules={[Navigation, Pagination, Scrollbar]}

                        navigation={true}
                        className="mySwiper"
                        style={{ position: "relative", top: "20px" }}
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
                                slidesPerView: 4,
                            },
                        }}
                    >
                        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
                            {this.state.search_data ? this.state.search_data.map((data, index) => {
                                return (
                                    <SwiperSlide>
                                        {/* <div className="MainCard">
                                            <div className="wrapper">

                                                <div>
                                                    <img src={course} alt="" />
                                                </div>



                                                <div className="productSpecifications">
                                                    <h2> {data.d.classroomName} </h2>
                                                    <h3 style={{ color: "black", fontWeight: "400" }}>Technologies</h3>
                                                    <div style={{ display: "flex", flexWrap: "wrap" }}>
                                                        <img src={c} alt="" style={{ width: "40px", height: "40px" }} />
                                                        <img src={c} alt="" style={{ width: "40px", height: "40px" }} />
                                                        <img src={c} alt="" style={{ width: "40px", height: "40px" }} />
                                                        <img src={c} alt="" style={{ width: "40px", height: "40px" }} />
                                                        <img src={c} alt="" style={{ width: "40px", height: "40px" }} />
                                                    </div>

                                                    <div className="productFeatures">
                                                        <div className="feature">
                                                            <div className="featureIcon" style={{ display: "flex", justifyContent: "center", alignItems: "center" }} >
                                                                &#11088;&#11088;&#11088;&#11088;
                                                            </div>
                                                            <div className="featureText">
                                                                <p> <strong>Rating</strong></p>
                                                            </div>
                                                        </div>

                                                    </div>

                                                    <div className="checkoutButton">
                                                        <div className="priceTag">
                                                            <span>&#8377;</span>500
                                                        </div>
                                                        <a href={"/user/detailClassroom?c_id=" + data.d.c_id}>
                                                            <button className="preorder">
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
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div> */}
                                        <div className="card card-custom bg-white border-white border-0">
                                            <div className="card-custom-img" style={{ backgroundImage: `url('${data.d.profilepic ? data.d.profilepic : course}')` }}></div>
                                            <div className="card-custom-avatar">

                                                <img className="img-fluid" src={
                                                    data.d.courses[0].coverimg ? data.d.courses[0].coverimg : reactlogo
                                                    } alt="Avatar" style={{ backgroundSize: "80% 80%" }} />
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
                                    </SwiperSlide>
                                );
                            }
                            )
                                : null}
                        </div>


                        {/* <SwiperSlide>Slide 2</SwiperSlide>
                        <SwiperSlide>Slide 3</SwiperSlide>
                        <SwiperSlide>Slide 4</SwiperSlide> */}

                    </Swiper>

                </div>
            </>
        );
    }
}

classroom.layout = User;

export default classroom;