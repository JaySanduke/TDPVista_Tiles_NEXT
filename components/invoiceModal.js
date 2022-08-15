import React from "react";
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
import "assets/css/detailClassroom.scss";
import logo from 'assets/img/logo1.png'
import invoiceTemplate from 'assets/img/invoice_Template.jpg'

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

class invoiceModal extends React.Component {
    constructor(props) {
        super(props);
        var today = new Date(),
        date =
            today.getFullYear() +
            "-" +
            ((today.getMonth() + 1 < 10 ? "0" : "") + (today.getMonth() + 1)) +
            "-" +
            ((today.getDate() < 10 ? "0" : "") + (today.getDate()));
    
        this.state = {
            classData: [],
            userData: [],
            x: "",
            uid:"",
            Modal: true,
            invoiceModal: true,
            paymentSuccessful: false,
            invoice: true,
            paymentId: null,
            orderId: null,
            today: date,
            c_id: null,
        };
    }

    invoicetoggle = () => {
        if (this.state.invoiceModal) {
            console.log("Modal Close");
            this.setState({
                invoiceModal: false,
            });
        } else {
            console.log("Modal Open");
            this.setState({
                invoiceModal: true,
            });
        }
    };

    render() {
        return(
            <>
                  {this.state.invoice ?
                    <Modal isOpen={this.state.invoiceModal} toggle={this.invoicetoggle} >
                        <div id="element-to-print1">
                        <Card   style={{height: "100%", width: '150%', position:"relative" }}>
                            <img src={invoiceTemplate} alt="" />
                                <div class="one" style={{position:"absolute", top:"35px", left:"75%"}}>
                                    <h1 style={{color:"#fff"}}>
                                        Invoice
                                    </h1>
                                </div>
                                
                            <div style={{position:"absolute", width:"100%"}}>
                                
                                <CardBody style={{ backgroundColor: "#FFFF", position:"absolute",top: "-80px",left: "50%",transform: "translate(-50%, 50%)", width:"100%"}}>
                                    <Row style={{marginTop:"-20px", marginBottom:"45px"}}>
                                        <Col xs="8">
                                            <div>
                                                <h3 style={{color:"#256be7"}}>
                                                    INVOICE TO:
                                                </h3>
                                                <h1 style={{color:"black", marginTop:"-15px"}}>Adnan Saif</h1>
                                                <p style={{color:"grey", fontSize:"10px"}}><b>phone: 73547719388</b></p>
                                                <p style={{color:"grey", fontSize:"10px"}}><b>Email: malekasaif135@gmail.com</b></p>
                                            </div>
                                        </Col>
                                        <Col xs="4">
                                            <h3 style={{color:"#256be7"}}>
                                                CLASSROOM:
                                            </h3>
                                            <h1 style={{color:"black", marginTop:"-15px", borderBottom:"1px solid grey"}}>React</h1>
                                            <div style={{color:"grey"}}>Order Id : {this.state.orderId}</div>
                                        </Col>
                                    </Row>
                                    
                                    {/* <h3><b>Order has been created. You can proceed to buy</b></h3> */}
                                    {/* <Row className="ml-4" style={{ fontSize: "12px" }}>
                                        <Col>
                                            <div>Order Id : {this.state.orderId}</div>
                                        </Col>
                                    </Row> */}
                                    {/* Classroom Details */}
                                    <div className="mt-2 mb-2 p-2" style={{ textAlign: "left", color: "#FFF", backgroundColor:"#256be7" }}>Classroom Details</div>
                                    <Card className="p-3" style={{ color: "grey", boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px", fontSize: "15px" }}>
                                        <Row className="m-1 p-1" style={{backgroundColor:"rgb(243 240 240)"}}>
                                            <Col xs="4" >Classroom : </Col>
                                            <Col xs="8" >{this.state.classData.classroomName}</Col>
                                        </Row>
                                        <Row className="m-1 p-1" style={{backgroundColor:"#fffafa"}}>
                                            <Col xs="4">Start date : </Col>
                                            <Col xs="8">{this.state.classData.starting_date}</Col>
                                        </Row>
                                        <Row className="m-1 p-1" style={{backgroundColor:"rgb(243 240 240)"}}>
                                            <Col xs="4">End date : </Col>
                                            <Col xs="8">{this.state.classData.end_date}</Col>
                                        </Row>
                                    </Card>
                                    {/* Payment Details */}
                                    <div className="mb-2 p-2" style={{ textAlign: "left", color: "#FFF", backgroundColor:"#256be7", marginTop:"80px" }}>Payment Details</div>
                                    <Card className="p-3" style={{ color: "grey", boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px", fontSize: "15px" }}>
                                        <Row className="m-1 p-1" style={{backgroundColor:"rgb(243 240 240)"}}>
                                            <Col xs="4">Payee :</Col>
                                            <Col xs="8">{this.state.userData.username}</Col>
                                        </Row>
                                        <Row className="m-1 p-1" style={{backgroundColor:"#fffafa"}}>
                                            <Col xs="4">Date :</Col>
                                            <Col xs="8">{this.state.today}</Col>
                                        </Row>
                                        <Row className="m-1 p-1" style={{backgroundColor:"rgb(243 240 240)"}}>
                                            <Col xs="4">Amount :</Col>
                                            <Col xs="8">Rs.500</Col>
                                        </Row>
                                        <Row className="m-1 p-1" style={{backgroundColor:"#fffafa"}}>
                                            <Col xs="4">Classroom :</Col>
                                            <Col xs="8">{this.state.classData.classroomName}</Col>
                                        </Row>
                                    </Card>
                                    {/* <div className="m-3" style={{fontSize:"13px", color:"grey", textAlign:"center"}}>Start your journey to learn</div> */}
                                </CardBody>

                            </div>
                            {/* ,alignContent: "center", margin: "5px", width:"50%" */}
                        </Card>
                        </div>
                            <Row className="mb-2" style={{zIndex:"1",marginTop: "-100px"}}>
                                <Col style={{textAlign: "right"}}>
                                    <Button color="primary" onClick={this.printInvoice} style={{ color: "#fff" }}>
                                        Print
                                    </Button>
                                </Col>
                                <Col style={{textAlign: "right"}}>
                                    <Button onClick={this.displayRazorpay} style={{ backgroundColor: "#4BB543", color: "#fff" }}>
                                        Pay Rs.500
                                    </Button>
                                </Col>
                            </Row>
                            
                    </Modal>
                : null}
            </>
        )
    }
}

export default invoiceModal;