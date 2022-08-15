

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
import reactlogo from 'assets/img/logo/react.png'

 import "assets/css/classswiper.css";
 import { Swiper, SwiperSlide } from "swiper/react";
 import SwiperCore, { Navigation, Pagination, Scrollbar } from "swiper";
 import 'swiper/swiper-bundle.min.css'
 import 'swiper/swiper.min.css'
 import "assets/css/card.scss";
  //import 'swiper/css';
 import 'swiper/components/navigation/navigation.min.css';
 import 'swiper/components/pagination/pagination.min.css';
 import 'swiper/components/scrollbar/scrollbar.min.css'

 import c from "assets/img/pngegg.png"
 import course from 'assets/img/courses/1.png'

 // import 'swiper/swiper-bundle.min.css'
  //import 'swiper/swiper.min.css'
 import "assets/css/classroom.css";
 import card1 from 'assets/img/card1.jpg'
 import Progressbar from '../UserClass/progress';



 import Lottie from 'react-lottie';
  //  import rocket  from '../../assets/lottie/72284-rocket-animation.json'
   import rocket  from '../../assets/lottie/Workinprogress.json'

SwiperCore.use([Pagination, Navigation]);
class Workshops extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userData: {},
            w_data: [],
            classroomDataArr: [],
            mail: "",
            search_data: [],
            searchData: [],
            enrolledData: [],
            user_id:'',
        };
    }
    componentDidMount() {
        // document.getElementById('userHeaderNameId').style.display = 'none';
        // document.getElementById('remo').firstChild.style.display = "none";
        // document.querySelector(".header").firstElementChild.style.height = '100px';
        // document.querySelector(".header").style.minHeight = '100px'
        // document.querySelector(".header").classList.remove('pb-8', 'pt-5', 'pt-lg-8');
        
        let y = [];
        var tts = this;
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
        firebase.database().ref(`users/${user.uid}`).once("value")
          .then((snap) => {
            var d = snap.val();
              this.setState({user_id: user.uid})
              var x = [];
            //   firebase.database()
            //     .ref("Workshops/")
            //     .once("value").then((snapshot) => {
            //       snapshot.forEach(function (childSnapshot) {
            //         var childData = childSnapshot.val();
            //         console.log(childData)
            //         if(!childData.data.blocked){
            //         x.push(childData);
            //         }
            //       });
            //       console.log(x)
                  
            //       var data = snapshot.val();
                  
                  
            //         this.setState({ w_data: x, search_data: x });
                  
                 
            //     });
            
    

                    
                        // if (d.workshop) {
                        //     console.log(d.workshop);
                        //     d.workshop.map(item => {
                        //         // console.log(item);
                        //         firebase
                        //             .database()
                        //             .ref(`Workshops/${item}`)
                        //             .once("value")
                        //             .then((snapshot) => {
                        //                 var chilData = snapshot.val();
                        //                  console.log(chilData); 
                        //                  if(!chilData.data.blocked){
                        //                 y.push({
                        //                     d: chilData.data
                        //                 });
                        //             }
                        //             }).then(() => {
                        //                 this.setState({
                        //                     enrolledData: y,
                        //                     searchData: y,
                        //                 })

                                       
                                        
                        //                 return null;
                        //             })
                        //     })
                        // }
                    
     })
      })

      
        
    }

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
            title: "Workshops",
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

             <div className="ClassroomHead mb-3">
                   
<Container style={{margin:'auto', textAlign:'center'}}> <Lottie options={defaultOptions}

              height={300}
              width={300}></Lottie> <h2>Work In Progress</h2></Container>
             </div>
                {/* <UserHeader />

               
                   

                    <Card>

                    </Card>
                    <Swiper
                        modules={[Navigation, Pagination, Scrollbar]}

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
                            {this.state.enrolledData  ? this.state.enrolledData.map((item, index) => { 
                                   var x = this.state.user_id;
                                   // console.log(x);
                                   //  console.log(data.d.UserProgress);
                                   if(item.d.UserProgress){
                                   var y = Object.keys(item.d.UserProgress);
                                   for(var i=0; i<y.length; i++){
                                       if(y[i] == x){
                                           var z= item.d.UserProgress[y[i]];
   
                                     }
                                   }
                               }

                                
                                return (
                                    <SwiperSlide>
                                       

                                         <div className="card card-custom bg-white border-white border-0">
                                            <div className="card-custom-img" style={{ backgroundImage: `url('${course}')` }}></div>
                                            <div className="card-custom-avatar">

                                                <img className="img-fluid" src={reactlogo} alt="Avatar" style={{ backgroundSize: "80% 80%" }} />
                                            </div>
                                            <div className="card-body" style={{ overflowy: "auto" }}>

                                                <h2 className="card-title"> {item.d.w_details.workshopTitle} </h2>
                                                <h3 className="card-text"> {item.d.workshopCategory}</h3>
                                                <h3 className="rating">{item.d.rating ? ((item.d.rating.classRating +100)/ (item.d.rating.users +20)) : 4.7} <span className="star"> &#9733;  &#9733;  &#9733;  &#9733;  &#9733; <p className="users">{item.d.rating ? (item.d.rating.users + 500) : 568}</p></span></h3>
                                            </div>
                                           

                                         <div className="card-footer" style={{ background: "inherit" }}>
<h3 style={{textAlign:"left", paddingLeft:"10px"}}>Your Progress</h3>
                                            <div className="progressdetail">
                                            <Progressbar bgcolor="#99ccff" display="none" progress={z ? z.progress *100 : 0} height={10} />
                                            <br></br>
                                              
                                                <a href={`/UserWorkshop/dashboard?w_id=${item.d.w_id}`} className="enrolledclass">
                                                    <button className="preorder" onClick={() => {
                                                        localStorage.setItem("w_id", item.d.w_id)}}>
                                                        <p>View</p>
                                                        <div className="buttonaction">
                                                            <svg
                                                                width="15"
                                                                height="15"
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
                                    </SwiperSlide>
                                );
                            }
                            )
                                : null}
                        </div>


                        
                         
                    </Swiper>

                </div>

                <div>
                    <h1 className="ClassHead">Workshop recommend to you</h1>
                    <a href="" className="classbtn">View More</a>
                    <div className="ClassroomHead mb-3">
                    </div>

                    <Card>

                    </Card>
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
                            {this.state.w_data ? this.state.w_data.map((item, index) => {
                                return (
                                    <SwiperSlide>
                                      
                                         <div className="card card-custom bg-white border-white border-0">
                                            <div className="card-custom-img" style={{ backgroundImage: `url('${course}')` }}></div>
                                            <div className="card-custom-avatar">

                                                <img className="img-fluid" src={reactlogo} alt="Avatar" style={{ backgroundSize: "80% 80%" }} />
                                            </div>
                                            <div className="card-body" style={{ overflowy: "auto" }}>

                                                <h2 className="card-title"> {item.data.w_details.workshopTitle} </h2>
                                                <h3 className="card-text"> {item.data.workshopCategory}</h3>
                                                <h3 className="rating">4.7 <span className="star"> &#9733;  &#9733;  &#9733;  &#9733;  &#9733; <p className="users">(420)</p></span></h3>
                                            </div>
                                           

                                         <div className="card-footer" style={{ background: "inherit" }}>

                                            <div className="pdetail">
                                                 <div className="priceTag">
                                                            <span>&#8377; </span>500
                                                        </div>
                                               
                                                
                                              
                                              
                                                <a href={`/UserWorkshop/dashboard?w_id=${item.data.w_id}`} className="enrolledclass">
                                                    <button className="preorder" onClick={() => {
                                                        localStorage.setItem("w_id", item.data.w_id)}}>
                                                        <p>View</p>
                                                        <div className="buttonaction">
                                                            <svg
                                                                width="15"
                                                                height="15"
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
                                    </SwiperSlide>
                                );
                            }
                            )
                                : null}
                        </div>


                         
                    </Swiper>

                </div>

                <div>
                    <h1 className="ClassHead">Trending Workshop</h1>
                    <a href="" className="classbtn">View More</a>
                    <div className="ClassroomHead mb-3">
                    </div>

                    <Card>

                    </Card>
                    <Swiper
                        modules={[Navigation, Pagination, Scrollbar]}
                        pagination={{
                            "type": "progressbar"
                        }}
                        navigation={true}
                        className="mySwiper"
                        style={{ position: "relative", top: "20px" }}
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
                            {this.state.w_data ? this.state.w_data.map((item, index) => {
                                return (
                                    <SwiperSlide>
                                       

                                         <div className="card card-custom bg-white border-white border-0">
                                            <div className="card-custom-img" style={{ backgroundImage: `url('${course}')` }}></div>
                                            <div className="card-custom-avatar">

                                                <img className="img-fluid" src={reactlogo} alt="Avatar" style={{ backgroundSize: "80% 80%" }} />
                                            </div>
                                            <div className="card-body" style={{ overflowy: "auto" }}>

                                                <h2 className="card-title"> {item.data.w_details.workshopTitle} </h2>
                                                <h3 className="card-text"> {item.data.workshopCategory}</h3>
                                                <h3 className="rating">4.7 <span className="star"> &#9733;  &#9733;  &#9733;  &#9733;  &#9733; <p className="users">(420)</p></span></h3>
                                            </div>
                                           

                                         <div className="card-footer" style={{ background: "inherit" }}>

                                            <div className="pdetail">
                                                 <div className="priceTag">
                                                            <span>&#8377; </span>500
                                                        </div>
                                               
                                                
                                              
                                                <a href={`/UserWorkshop/dashboard?w_id=${item.data.w_id}`} className="enrolledclass">
                                                    <button className="preorder" onClick={() => {
                                                        localStorage.setItem("w_id", item.data.w_id)}}>
                                                        <p>View</p>
                                                        <div className="buttonaction">
                                                            <svg
                                                                width="15"
                                                                height="15"
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

                                    </SwiperSlide>
                                );
                            }
                            )
                                : null}
                        </div>
 
                      
                         
                    </Swiper>

                </div> */}
            </>
        );
    }
}

Workshops.layout = User;

export default Workshops;
