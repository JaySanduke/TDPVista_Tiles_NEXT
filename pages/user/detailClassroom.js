import React from "react";
import firebase from "../../config/firebase-tiles";
import User from "layouts/User.js";
import ReactPlayer from 'react-player'
import ReactHtmlParser from "react-html-parser";
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
import "assets/css/detailClassroom.scss";
import logo from 'assets/img/logo1.png'
import successful from 'assets/img/successful.png'
import invoiceTemplate from 'assets/img/invoice_Template.jpg'

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

// Function to load scripts
function loadScript(src) {
    return new Promise((resolve) => {
        const script = document.createElement('script');
        script.src = src;
        document.body.appendChild(script);
        script.onload = () => {
            resolve(true);
        }
        script.onerror = () => {
            resolve(false);
        }
        document.body.appendChild(script);
    })
}

// function to load html2pdf script, 
// It is required for printing the invoice and the bill
function loadhtml2pdf() {
    return new Promise((resolve) => {
        const script = document.createElement('script');
        script.src = "https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.10.1/html2pdf.bundle.min.js";
        script.integrity = "sha512-GsLlZN/3F2ErC5ifS5QtgpiJtWd43JWSuIgh7mbzZ8zBps+dvLusV+eNQATqgA/HdeKFVgA5v3S/cIrLF7QnIg=="
        script.crossOrigin = "anonymous";
        script.referrerPolicy = "no-referrer";
        document.body.appendChild(script);
        script.onload = () => {
            resolve(true);
        }
        script.onerror = () => {
            resolve(false);
        }
        document.body.appendChild(script);
    })
}

var classPayHistory = [];
class classroom extends React.Component {
    constructor(props) {
        super(props);
        var today = new Date(),
            date =
                today.getFullYear() +
                "-" +
                ((today.getMonth() + 1 < 10 ? "0" : "") + (today.getMonth() + 1)) +
                "-" +
                ((today.getDate() < 10 ? "0" : "") + (today.getDate()));

        this.displayRazorpay = this.displayRazorpay.bind(this);
        this.paymentSuccess = this.paymentSuccess.bind(this);
        this.createOrder = this.createOrder.bind(this);
        this.toggle = this.toggle.bind(this);
        this.state = {
            classData: [],
            userData: [],
            x: "",
            uid: "",
            Modal: false,
            invoiceModal: false,
            paymentSuccessful: false,
            invoice: false,
            paymentId: null,
            orderId: null,
            orderDate: null,
            today: date,
            c_id: null,
            ModalOne: false,
        };
    }
    toggle1 = () => {
        this.setState((prevState) => ({ ModalOne: !prevState.ModalOne }));
    };
    componentDidMount() {

        // load();
        firebase.auth().onAuthStateChanged((user) => {
            firebase
                .database()
                .ref(`users/${user.uid}`)
                .once("value")
                .then((snap) => {
                    var data = snap.val();
                    if (data) {
                        this.setState({ userData: data })
                        var s = data.username.split(' ')[0];
                        this.setState({ x: s, uid: user.uid });
                    }


                    var currenturl = window.location.search;
                    var currenturlsearch = new URLSearchParams(currenturl);
                    var c_id = currenturlsearch.get("c_id");


                    if (c_id === undefined) {
                        window.location.href = "/";
                    }
                    if (data.classroom.includes(c_id)) {
                        var orderId = null;
                        var orderDate = null;
                        var paymentId = null;
                        classPayHistory = (data.classPayHistory) ? (data.classPayHistory) : [];
                        for (let i of classPayHistory) {
                            console.log(i);
                            if (i.classroomId === c_id) {
                                orderId = i.orderId;
                                orderDate = i.orderDate;
                                paymentId = i.paymentId;
                                break;
                            }
                        }
                        if (orderId !== null) {
                            this.setState({
                                orderId: orderId,
                                orderDate: orderDate,
                                paymentSuccessful: true,
                                paymentId: paymentId,
                            })
                        }
                    }

                    // Fetches Data About Quiz

                    firebase
                        .database()
                        .ref("Classroom/" + c_id)
                        .once("value")
                        .then(async (snapshot) => {
                            var ClassData = snapshot.val();

                            if (ClassData) {
                                this.setState({ classData: ClassData.data, c_id: c_id });
                                console.log(ClassData.data)
                            }
                        })

                });
        });

        document.getElementById('userHeaderNameId').style.display = 'none';
        document.getElementById('remo').firstChild.style.display = "none";
        document.querySelector(".header").firstElementChild.style.height = '70px';
        document.querySelector(".header").style.minHeight = '70px'

        document.querySelector(".header").classList.remove('pb-8', 'pt-5', 'pt-lg-8');
    }

    // createOrder checks if the order is already created or not,
    // If it is created than we pass the already created orderId,
    // It it is not created than we create new orderID 
    // by post request to "../api/razorpay" and save that to database
    async createOrder() {
        var tth = this;
        var orderId = null;
        var orderDate = null;
        classPayHistory = (this.state.userData.classPayHistory) ? (this.state.userData.classPayHistory) : [];
        for (let i of classPayHistory) {
            console.log(i);
            if (i.classroomId === this.state.c_id) {
                orderId = i.orderId;
                orderDate = i.orderDate;
                break;
            }
        }
        if (orderId !== null) {
            tth.setState({
                orderId: orderId,
                orderDate: orderDate,
                invoice: true,
            })
            tth.invoicetoggle();
            return;
        }
        else {
            const data = await fetch("../api/razorpay", {
                method: "POST",
                amount: "500",
            }).then((t) =>
                t.json()
            );
            console.log(data);
            orderId = data.id;
            if (!data || data.error) {
                alert("Try again later");
                return;
            }
            if (data.id) {
                classPayHistory.push({
                    classroomId: this.state.c_id,
                    classroomName: this.state.classData.classroomName,
                    orderId: data.id,
                    orderDate: this.state.today,
                })
                firebase
                    .database()
                    .ref(`users/${this.state.uid}`)
                    .update({
                        classPayHistory: classPayHistory,
                    }).then(() => {
                        tth.setState({
                            invoice: true,
                            // invoiceModal: true,
                            orderId: data.id,
                        })
                        tth.invoicetoggle();
                    })
            }
        }

    }

    // Function to open razorpay payment gateway modal
    async displayRazorpay() {
        const res = await loadScript("https://checkout.razorpay.com/v1/checkout.js");

        if (!res) {
            alert("Razorpay SDK failed to load");
            return;
        }

        const paymentSuccess = this.paymentSuccess;
        const options = {
            "key": 'rzp_test_0XXxjqrkA8TShn', // Enter the Key ID generated from the Dashboard
            "amount": "50000", // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
            "currency": "INR",
            "name": "classroom",
            "description": "Test Transaction",
            "image": logo,
            "order_id": this.state.orderId, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
            "handler": function (response) {
                paymentSuccess(response);
                // alert(response.razorpay_payment_id);
                // alert(response.razorpay_order_id);
                // alert(response.razorpay_signature)
            },
            "prefill": {
                "name": this.state.userData.username,
                "email": this.state.userData.email,
                "contact": this.state.userData.contact,
            },
            "notes": {
                "address": "Razorpay Corporate Office"
            },
            "theme": {
                "color": "#35075c"
            }
        };

        var rzp1 = new Razorpay(options);
        rzp1.open();
    }

    // This function runs when payment is successfully completed, 
    // here we update the database by the payment details
    // And we open the bill modal
    paymentSuccess = (response) => {
        var x = this.state.userData.classroom ? this.state.userData.classroom : [];
        x.push(this.state.c_id);
        var orderDate;
        for (let i of classPayHistory) {
            if (i.classroomId === this.state.c_id) {
                orderDate = i.orderDate;
                break;
            }
        }
        classPayHistory = classPayHistory.filter((elem) => elem.classroomId !== this.state.c_id);
        classPayHistory.push({
            classroomId: this.state.c_id,
            classroomName: this.state.classData.classroomName,
            orderId: response.razorpay_order_id,
            orderDate: orderDate,
            paymentDate: this.state.today,
            paymentId: response.razorpay_payment_id,
            razorpaySignature: response.razorpay_signature,
            amountPaid: "500",
            paymentSuccessful: true,
        })
        firebase
            .database()
            .ref(`users/${this.state.userData.user_uid}`)
            .update({
                classroom: x,
                classPayHistory: classPayHistory,
            })

        console.log(response);
        this.setState({
            paymentSuccessful: true,
            paymentId: response.razorpay_payment_id,
            orderId: response.razorpay_order_id,
            orderDate: orderDate,
        })
        this.invoicetoggle();
        this.toggle();
    }

    // It is to toggle bill modal
    toggle = () => {
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

    // it is to toggle invoice modal
    invoicetoggle = () => {
        if (this.state.invoiceModal) {
            console.log("Modal Close");
            this.setState({
                invoiceModal: false,
                invoice: false,
            });
        } else {
            console.log("Modal Open");
            this.setState({
                invoiceModal: true,
            });
        }
    };

    // It is to print Invoice
    async printInvoice() {
        const res = await loadhtml2pdf();

        if (!res) {
            alert("htmltopdf failed to load");
            return;
        }
        var element = document.getElementById('element-to-print1');
        var opt = {
            margin: 1.3,
            filename: `my_Invoice.pdf`,
            pagebreak: { mode: 'avoid-all' },
            image: { type: 'jpeg', quality: 0.98 },
            html2canvas: { scale: 2 },
            jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
        };

        // New Promise-based usage:
        html2pdf().set(opt).from(element).save();
        // html2pdf(element);
    }

    // It is to print Bill.
    async printBill() {
        const res = await loadhtml2pdf();

        if (!res) {
            alert("htmltopdf failed to load");
            return;
        }
        var element = document.getElementById('element-to-print2');
        var opt = {
            margin: 1.3,
            filename: `my_Bill.pdf`,
            pagebreak: { mode: 'avoid-all' },
            image: { type: 'jpeg', quality: 0.98 },
            html2canvas: { scale: 2 },
            jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
        };

        // New Promise-based usage:
        html2pdf().set(opt).from(element).save();
        // html2pdf(element);
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
                {/* {this.state.invoice ? */}
                <Modal isOpen={this.state.invoiceModal} toggle={this.invoicetoggle} >
                    <div id="element-to-print1" style={{ width: "100%", border: "2px solid #07071a" }}>
                        <Card style={{ height: "100%", position: "relative" }}>
                            <img src={invoiceTemplate} alt="" />
                            <div class="one" style={{ position: "absolute", top: "35px", left: "75%" }}>
                                <h1 style={{ color: "#fff" }}>
                                    Invoice
                                </h1>
                            </div>

                            <div style={{ position: "absolute", width: "100%" }}>

                                <CardBody style={{ position: "absolute", top: "-50px", left: "50%", transform: "translate(-50%, 50%)", width: "100%" }}>
                                    <Row style={{ marginTop: "2px", marginBottom: "5px" }}>
                                        <Col xs="7">
                                            <div>
                                                <h3 style={{ color: "#256be7" }}>
                                                    INVOICE TO:
                                                </h3>
                                                <h1 style={{ color: "black", marginTop: "-15px" }}>{this.state.userData.username}</h1>
                                                <p style={{ color: "grey", fontSize: "10px" }}><b>phone: {this.state.userData.contact}</b></p>
                                                <p style={{ color: "grey", fontSize: "10px" }}><b>Email: {this.state.userData.email}</b></p>
                                            </div>
                                        </Col>
                                        <Col xs="5">
                                            <h3 style={{ color: "#256be7" }}>
                                                CLASSROOM:
                                            </h3>
                                            <h1 style={{ color: "black", marginTop: "-15px", borderBottom: "1px solid grey" }}>{this.state.classData.classroomName}</h1>
                                            <div style={{ color: "grey", fontSize: "11px" }}>Order Id : {this.state.orderId}</div>
                                        </Col>
                                    </Row>

                                    <div className="pl-1" style={{ textAlign: "left", color: "#FFF", backgroundColor: "#256be7", marginTop: "22px", fontSize: "15px" }}>Classroom Details</div>
                                    <div className="m-3 p-1" style={{ color: "grey", fontSize: "13px" }}>
                                        <Row className="m-1" style={{ backgroundColor: "rgb(243 240 240)" }}>
                                            <Col xs="4" >Classroom : </Col>
                                            <Col xs="8" >{this.state.classData.classroomName}</Col>
                                        </Row>
                                        <Row className="m-1" style={{ backgroundColor: "#fffafa" }}>
                                            <Col xs="4">Start date : </Col>
                                            <Col xs="8">{this.state.classData.starting_date}</Col>
                                        </Row>
                                        <Row className="m-1" style={{ backgroundColor: "rgb(243 240 240)" }}>
                                            <Col xs="4">End date : </Col>
                                            <Col xs="8">{this.state.classData.end_date}</Col>
                                        </Row>
                                    </div>
                                    {/* Payment Details */}
                                    <div className="pl-1" style={{ textAlign: "left", color: "#FFF", backgroundColor: "#256be7", marginTop: "27px", fontSize: "15px" }}>Payment Details</div>
                                    <div className="m-3 p-1" style={{ color: "grey", fontSize: "13px" }}>
                                        <Row className="m-1" style={{ backgroundColor: "rgb(243 240 240)" }}>
                                            <Col xs="4">Payee :</Col>
                                            <Col xs="8">{this.state.userData.username}</Col>
                                        </Row>
                                        <Row className="m-1" style={{ backgroundColor: "#fffafa" }}>
                                            <Col xs="4">Date :</Col>
                                            <Col xs="8">{this.state.orderDate}</Col>
                                        </Row>
                                        <Row className="m-1" style={{ backgroundColor: "rgb(243 240 240)" }}>
                                            <Col xs="4">Amount :</Col>
                                            <Col xs="8">Rs.500</Col>
                                        </Row>
                                        <Row className="m-1" style={{ backgroundColor: "#fffafa" }}>
                                            <Col xs="4">Classroom :</Col>
                                            <Col xs="8">{this.state.classData.classroomName}</Col>
                                        </Row>
                                    </div>
                                    {/* <div className="m-3" style={{fontSize:"13px", color:"grey", textAlign:"center"}}>Start your journey to learn</div> */}
                                </CardBody>

                            </div>
                            {/* ,alignContent: "center", margin: "5px", width:"50%" */}
                        </Card>
                    </div>
                    <Row className="mb-2" style={{ zIndex: "1", marginTop: "-62px" }} >
                        <Col xs="8"></Col>
                        <Col xs="4" style={{ textAlign: "right" }}>
                            <Button size="sm" color="primary" onClick={this.printInvoice} style={{ color: "#fff" }}>
                                Print
                            </Button>
                            <Button className="mr-2" size="sm" onClick={this.displayRazorpay} style={{ backgroundColor: "#4BB543", color: "#fff" }}>
                                Pay Rs.500
                            </Button>
                        </Col>

                    </Row>
                </Modal>

                {/* : null} */}

                {/* ************************************* */}

                {/* {this.state.paymentSuccessful ? */}
                <Modal isOpen={this.state.Modal} toggle={this.toggle} >
                    <div id="element-to-print2" style={{ width: "100%", border: "2px solid #07071a" }}>
                        <Card style={{ position: "relative" }}>
                            <img src={invoiceTemplate} alt="" />
                            <div class="one" style={{ position: "absolute", top: "25px", left: "65%" }}>
                                <h1 style={{ color: "#fff", fontSize: "20px" }}>
                                    Payment Successful
                                </h1>
                            </div>

                            <div style={{ position: "absolute", width: "100%" }}>

                                <CardBody style={{ position: "absolute", top: "-120px", left: "50%", transform: "translate(-50%, 50%)", width: "100%" }}>
                                    <Row style={{ marginTop: "2px", marginBottom: "5px" }}>
                                        <Col xs="7">
                                            <div>
                                                <h3 style={{ color: "#256be7" }}>
                                                    INVOICE TO:
                                                </h3>
                                                <h1 style={{ color: "black", marginTop: "-15px", width: "50%", borderBottom: "1px solid grey" }}>{this.state.userData.username}</h1>
                                                <p style={{ color: "grey", fontSize: "10px" }}><b>phone: {this.state.userData.contact}</b></p>
                                                <p style={{ color: "grey", fontSize: "10px" }}><b>Email: {this.state.userData.email}</b></p>
                                            </div>
                                        </Col>
                                        <Col xs="5">
                                            <h3 style={{ color: "#256be7" }}>
                                                CLASSROOM:
                                            </h3>
                                            <h1 style={{ color: "black", marginTop: "-15px", borderBottom: "1px solid grey" }}>React</h1>
                                            <div style={{ color: "grey", fontSize: "10px" }}>Order Id : {this.state.orderId}</div>
                                            <div style={{ color: "grey", fontSize: "10px" }}>Payment Id : {this.state.paymentId}</div>
                                        </Col>
                                    </Row>

                                    <div className="pl-1" style={{ textAlign: "left", color: "#FFF", backgroundColor: "#256be7", marginTop: "22px", fontSize: "15px" }}>Classroom Details</div>
                                    <div className="m-3 p-1" style={{ color: "grey", fontSize: "13px" }}>
                                        <Row className="m-1" style={{ backgroundColor: "rgb(243 240 240)" }}>
                                            <Col xs="4" >Classroom : </Col>
                                            <Col xs="8" >{this.state.classData.classroomName}</Col>
                                        </Row>
                                        <Row className="m-1" style={{ backgroundColor: "#fffafa" }}>
                                            <Col xs="4">Start date : </Col>
                                            <Col xs="8">{this.state.classData.starting_date}</Col>
                                        </Row>
                                        <Row className="m-1" style={{ backgroundColor: "rgb(243 240 240)" }}>
                                            <Col xs="4">End date : </Col>
                                            <Col xs="8">{this.state.classData.end_date}</Col>
                                        </Row>
                                    </div>
                                    {/* Payment Details */}
                                    <div className="pl-1" style={{ textAlign: "left", color: "#FFF", backgroundColor: "#256be7", marginTop: "27px", fontSize: "15px" }}>Payment Details</div>
                                    <div className="m-3 p-1" style={{ color: "grey", fontSize: "13px" }}>
                                        <Row className="m-1" style={{ backgroundColor: "rgb(243 240 240)" }}>
                                            <Col xs="4">Payee :</Col>
                                            <Col xs="8">{this.state.userData.username}</Col>
                                        </Row>
                                        <Row className="m-1" style={{ backgroundColor: "#fffafa" }}>
                                            <Col xs="4">Date :</Col>
                                            <Col xs="8">{this.state.today}</Col>
                                        </Row>
                                        <Row className="m-1" style={{ backgroundColor: "rgb(243 240 240)" }}>
                                            <Col xs="4">Amount :</Col>
                                            <Col xs="8">Rs.500</Col>
                                        </Row>
                                        <Row className="m-1" style={{ backgroundColor: "#fffafa" }}>
                                            <Col xs="4">Classroom :</Col>
                                            <Col xs="8">{this.state.classData.classroomName}</Col>
                                        </Row>
                                        <Row className="m-1" style={{ backgroundColor: "rgb(243 240 240)" }}>
                                            <Col xs="4">Order Date :</Col>
                                            <Col xs="8">{this.state.orderDate}</Col>
                                        </Row>
                                    </div>
                                    <h3 className="mt-2"><b>Thank you! Your payment of Rs.500 has been received</b></h3>
                                    {/* <div className="m-3" style={{fontSize:"13px", color:"grey", textAlign:"center"}}>Start your journey to learn</div> */}
                                </CardBody>

                            </div>
                            {/* ,alignContent: "center", margin: "5px", width:"50%" */}
                        </Card>
                    </div>
                    <Row className="mb-2" style={{ zIndex: "1", marginTop: "-43px" }}>
                        <Col xs="8"></Col>
                        <Col xs="4" style={{ textAlign: "center" }}>
                            <Button size="sm" color="success" onClick={this.printBill}>
                                Print and proceed
                            </Button>
                        </Col>

                    </Row>

                </Modal>

                {/* : null}  */}
                {/* ********************************************* */}

                <div className="DetailClassroom"
                //  style={{backgroundImage:`url(${course})`,backgroundRepeat:"none",backgroundSize:"cover",backgroundPosition:"cover"}}
                >
                    <div className="courseCard">
                        <h2>{this.state.classData.classroomName}</h2>
                        <h1>
                            {/* {this.state.classData.description} */}
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni, corrupti.
                        </h1>

                        <Row className="sideDates">
                            <Col md={6}>
                                <div className="sidebarDates">
                                    <div>Start Date</div>
                                    <div style={{ fontWeight: "800" }}>{this.state.classData.starting_date} </div>
                                </div>
                                <div className="sidebarDates">
                                    <div>End Date</div>
                                    <div style={{ fontWeight: "800" }}>{this.state.classData.end_date} </div>
                                </div>
                                <div className="sidebarDates">
                                    <div>Duration</div>
                                    <div style={{ fontWeight: "800" }}>{this.state.classData.classroom_duration}</div>
                                </div>
                            </Col>
                            <Col md={6} className="rate">
                                <div>
                                    <h3 className="rating">4.7 <span className="star"> &#9733;  &#9733;  &#9733;  &#9733;  &#9733; <p className="users">(420)</p></span></h3>
                                </div>
                            </Col>
                        </Row>
                        <div className="buy">

                            {!this.state.paymentSuccessful ?
                                <>
                                    <div className="d-flex align-items-center">
                                        <h1>₹ 500</h1>
                                        <div className="position-relative">
                                            <h3 className="mx-2" style={{ color: "grey" }} ><del>₹ 999</del> <span style={{ color: "var(--default)" }}>60% off</span></h3>
                                        </div>

                                    </div>
                                    <div>
                                        <button onClick={this.createOrder}>Enroll Now</button>
                                    </div>
                                </>
                                :
                                <div>
                                    <Button onClick={this.toggle}>Invoice</Button>
                                    <a href={`UserClass/dashboard?c_id=${this.state.c_id}`}>
                                        <Button>Go to classroom</Button>
                                    </a>
                                </div>
                            }
                        </div>
                    </div>
                    <div className="side">
                        <div className="playBtn">
                            <span class="play-icon" onClick={() => {
                                this.setState({
                                    ModalOne: true
                                })
                            }}></span>
                        </div>
                    </div>

                </div>
                {/* <div>
                    <div className="div1">
                        <div className="div11">

                        </div>
                    </div>
                    <div className="div2">
                        <div className="div11">

                        </div>
                        <div className="decp">
                            <h2>Description</h2>
                            <p>
                            {this.state.classData.price}
                            </p>
                    </div>
                    <div className="div3">
                        <div className="div11">

                        </div>
                    </div>
                </div> */}
                <div className="d-flex justify-content-center flex-wrap mentorCards">
                    <div className="mentorDetail mx-2">
                        <div className="mentorIcon">
                            <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="52" height="52" viewBox="0 0 52 52">
                                <defs>
                                    <path id="rti8rz5spa" d="M35 23h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.44-1.06L28.17 16l-6.58 6.59c-.37.36-.59.86-.59 1.41v10c0 1.1.9 2 2 2h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-2c0-1.1-.9-2-2-2zm0 4l-3 7h-9V24l4.34-4.34L26.23 25H35v2zm-20-3h4v12h-4V24z" />
                                </defs>
                                <g fill="none" fill-rule="evenodd">
                                    <g>
                                        <g transform="translate(-267 -770) translate(267 770)">
                                            <rect width="52" height="52" fill="#00C48C" fill-opacity=".7" rx="26" />
                                            <use fill="#FFF" fill-rule="nonzero" xlinkHref="#rti8rz5spa" />
                                        </g>
                                    </g>
                                </g>
                            </svg>
                        </div>
                        {this.state.classData.mentor ? <div className="mentorData">
                            <h3 className="font-weight-bold" style={{ fontSize: "1.5em" }}>{this.state.classData.mentor.length}+ {" "} Mentors</h3>
                        </div> : null}

                    </div>
                    <div className="mentorDetail mx-2">
                        <div className="mentorIcon">
                            <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="52" height="52" viewBox="0 0 52 52">
                                <defs>
                                    <path id="go6333jdga" d="M34 21h-3v-2c0-1.11-.89-2-2-2h-6c-1.11 0-2 .89-2 2v2h-3c-1.11 0-2 .89-2 2v11c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V23c0-1.11-.89-2-2-2zm-11-2h6v2h-6v-2zm11 15H18v-2h16v2zm0-5H18v-6h3v2h2v-2h6v2h2v-2h3v6z" />
                                </defs>
                                <g fill="none" fill-rule="evenodd">
                                    <g>
                                        <g transform="translate(-593 -771) translate(593 771)">
                                            <rect width="52" height="52" fill="#6979F8" fill-opacity=".7" rx="26" />
                                            <use fill="#FFF" fill-rule="nonzero" xlinkHref="#go6333jdga" />
                                        </g>
                                    </g>
                                </g>
                            </svg>
                        </div>
                        {this.state.classData.courses ? <div className="mentorData">
                            <h3 className="font-weight-bold" style={{ fontSize: "1.5em" }}>{this.state.classData.courses.length}+ {" "} Courses</h3>
                        </div> : null}

                    </div>
                    <div className="mentorDetail mx-2">
                        <div className="mentorIcon">
                            <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="52" height="52" viewBox="0 0 52 52">
                                <defs>
                                    <path id="o3r9xsxeaa" d="M30.333 19L33.005 21.672 27.312 27.365 22.645 22.698 14 31.355 15.645 33 22.645 26 27.312 30.667 34.662 23.328 37.333 26 37.333 19z" />
                                </defs>
                                <g fill="none" fill-rule="evenodd">
                                    <g>
                                        <g transform="translate(-919 -771) translate(919 771)">
                                            <rect width="52" height="52" fill="#FF647C" fill-opacity=".7" rx="26" />
                                            <use fill="#FFF" fill-rule="nonzero" xlinkHref="#o3r9xsxeaa" />
                                        </g>
                                    </g>
                                </g>
                            </svg>

                        </div>
                        {this.state.classData.quiz ? <div className="mentorData">
                            <h3 className="font-weight-bold" style={{ fontSize: "1.5em" }}>{this.state.classData.quiz.length}+ {" "} Quizes</h3>
                        </div> : null}
                    </div>



                </div>
                <div>
                    <h1 style={{ fontSize: "2rem", marginLeft: "5%", marginTop: "50px" }}>Description</h1>
                    <h3 style={{ fontSize: "1rem", marginLeft: "5%" }}>
                        {ReactHtmlParser(this.state.classData.Description)}
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente perspiciatis, officiis saepe ex, voluptas laudantium voluptatibus atque eveniet rerum deleniti animi voluptates. Iste exercitationem eaque inventore, pariatur unde laborum error reiciendis assumenda repudiandae odio adipisci nam temporibus quaerat nesciunt rerum ab, provident placeat perferendis consequuntur fugit explicabo a! Voluptatum odit alias in explicabo id repellendus! Iure, soluta. Veniam eius assumenda odio amet omnis, ipsam perspiciatis! Perspiciatis voluptatibus reprehenderit, alias quae, ex laborum optio quidem dolores eum nobis velit fugiat quod officia exercitationem laudantium praesentium iste eaque maxime dolorum ipsum quam. Maxime fuga hic aliquid accusantium, cum quos iste repellat eveniet.</p>
                    </h3>
                </div>

                <h1 style={{ fontSize: "2rem", marginLeft: "5%", marginTop: "50px" }}>Mentors</h1>
                <div style={{ marginLeft: "5%" }}>
                    <div>
                        <Swiper
                            modules={[Navigation, Pagination, Scrollbar]}
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
                            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", padding: "20px" }}>
                                {this.state.classData.mentor ? this.state.classData.mentor.map((data, index) => {
                                    return (
                                        <SwiperSlide style={{ display: "contents" }}>
                                            {/* <div className="mentorCard text-center">
                                                <h1 className="p-3 text-primary">{data.username}</h1>
                                                <h2 className="p-3" style={{ color: "var(--default)" }}>{data.email}</h2>
                                                <h2 className="p-3" style={{ color: "var(--default)" }}>{data.expertise}</h2>
                                            </div> */}
                                            <div class="d-flex justify-content-center  col-sm-12 col-md-4 col-lg-4">
                                                <div class="mentor_graphic_parent_div">
                                                    <div class="mentor_graphic_div">
                                                        <div className="mentorImage">
                                                        <img src={require("assets/img/Avatar-Water-Symbols.jpg")} class="mentor_img"/>
                                                        </div>
                                                        <div class="mentor_name_div">{data.username}
                                                        </div>
                                                        <div class="mentor_desig_div">{data.expertise}</div>
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
                </div>
                <h1 style={{ fontSize: "2rem", marginLeft: "5%", marginTop: "50px" }}>Courses</h1>
                <div style={{ marginLeft: "5%" }}>
                    <div>
                        <Swiper
                            modules={[Navigation, Pagination, Scrollbar]}
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
                            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", padding: "20px" }}>
                                {this.state.classData.courses ? this.state.classData.courses.map((data, index) => {
                                    return (
                                        <SwiperSlide style={{ display: "contents" }}>
                                            <div class="d-flex justify-content-center  col-sm-12 col-md-4 col-lg-4">
                                                <div class="mentor_graphic_parent_div">
                                                    <div class="mentor_graphic_div">
                                                        <div className="mentorImage">
                                                            <img src={data.coverimg} class="mentor_img"  />
                                                        </div>
                                                        <div class="mentor_name_div">{data.course_title}
                                                        </div>
                                                        <div class="mentor_desig_div">{data.Description}</div>
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
                </div>

                <div className="d-flex justify-content-center m-5">
                    <button className="enrollButtton">Enroll Now</button>
                </div>
                <Modal className='modalSecond' isOpen={this.state.ModalOne} toggle={this.toggle1}>
                    <ModalBody className="mt-0 pt-4">
                        <ReactPlayer width="100%" controls={false} url='https://www.youtube.com/watch?v=oMesPehN_Do&list=RDoMesPehN_Do&start_radio=1' />
                    </ModalBody>
                </Modal>
            </>
        );
    }
}

classroom.layout = User;

export default classroom;