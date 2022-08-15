import React from "react";
import DataTable from "react-data-table-component";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import firebase from "../../config/firebase-tiles";
import Admin from "layouts/Admin.js";
import Link from "next/link";
import ReactHtmlParser from "react-html-parser";

import {
    Button,
    Card,
    CardHeader,
    CardBody,
    Container,
    Form,
    Input,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
} from "reactstrap";

// core components
import Header from "components/Headers/admin.js";
import c from "assets/img/pngegg.png"

let url = "";
class CourseRead extends React.Component {
    constructor(props) {
        super(props);
        var today = new Date(),
            todayDate =
                today.getFullYear() +
                "-" +
                ((((today.getMonth() + 1) < 10) ? "0" : "") + (today.getMonth() + 1)) +
                "-" +
                ((((today.getDate() + 1) < 10) ? "0" : "") + (today.getDate() + 1));

        this.toggleBlock = this.toggleBlock.bind(this);
        this.blockAct = this.blockAct.bind(this);
        this.state = {
            today: todayDate,
            data: [],
            u_id: "",
            courseData: [],
            Content: [],
            Path:"",
            name:"",
            url: "",
        };
    }
    componentDidMount() {
        var currenturl = window.location.search;
        var currenturlsearch = new URLSearchParams(currenturl);
        var id = currenturlsearch.get("id");
        console.log(id);
        if (id === undefined) {
            window.location.href = "/admin/CourseDetail";
        }
        this.setState({ u_id: id });
        var x = [];
        firebase
            .database()
            .ref("Courses/" + id)
            .once("value")
            .then((snapshot) => {
                var x = snapshot.val();

                if (x !== null && x) {
                     console.log(x);
                    this.setState({
                        url : x.attachments !== undefined ? x.attachments[0].url : c ,
                        courseData: x,
                        Content: x.content,
                    })
                }
                 console.log(this.state.Content)
                this.setState({
                    Path:this.state.Content[0].modules[0].path ? this.state.Content[0].modules[0].path:'',
                    name:this.state.Content[0].modules[0].name
                            })
            })

    };

    // Block Modal
    toggleBlock = () => {
        this.setState((prevState) => ({ blockModal: !prevState.blockModal }));
    }

    blockAct = () => {
        if (this.state.courseData.blocked) {
            firebase.database().ref("Courses/" + this.state.u_id).child("blocked").remove();
            this.toggleBlock();
        }
        else {
            firebase.database().ref("Courses/" + this.state.u_id).update({
                blocked: 1,
            })
            this.toggleBlock();
        }
        window.location.reload();
    }

    render() {
        const {
            Content
        } = this.state;
        
        return (
            <>
                <Header />
                {/* Page content */}
                <Container className="mt--7" fluid>
                    <Card>
                        <CardHeader>
                            <h1>Course</h1>
                        </CardHeader>
                        <CardBody className="px-2">
                            <div className="row align-items-center">
                                <div className="align-items-center col-md-3 justify-content-center">
                                    <img
                                        alt="..."
                                        // className="rounded-circle"
                                        width="100%"
                                        src={this.state.url!==""?this.state.url:null}
                                    />
                                </div>
                                <div className="col-md-9 py-sm-3">
                                    <b>Title :</b> {this.state.courseData.course_title}
                                    <br />
                                    <b>Subtitle :</b> {this.state.courseData.course_subtitle}
                                    <br />
                                    <b>Decription :</b> {ReactHtmlParser(this.state.courseData.Description)}
                                    
                                    <b>Course Id :</b> {this.state.courseData.c_id} <br />
                                </div>
                            </div>
                            <br />

                            <h3>Course Content</h3>
                            <div>
                                {Content ? Content.map((data, index) => {
                                    return (
                                        <div>
                                            <h3 key={index}>{data.contentTitle}</h3>
                                            <div style={{display:"flex",flexWrap:"wrap"}}>
                                                {data.modules.map((dta, index) => {
                                                    return (
                                                        <div key={index} className="hvr" style={{padding:"5px 10px",border:"1px solid black",borderRadius:"5px",margin:"5px"}}>
                                                            <h5>{dta.name}</h5>
                                                        </div>
                                                    );
                                                })}
                                            </div>
                                        </div>
                                    );

                                }
                                ) : null
                                }
                            </div>
                            <div className="text-right d-flex justify-content-end">
                            <Button color="info" size="md">
                                    <Link
                                        style={{ color: "#fff" }}
                                        // href={`/${this.state.Path}?id=` + this.state.courseData.c_id +`?name=`+ this.state.name}
                                        href={`/${this.state.Path}?id=${this.state.courseData.c_id}&name=${this.state.Path}`}
                                    >
                                        Detail
                                    </Link>
                                </Button>
                                <Button color="primary" size="md">
                                    <a
                                        style={{ color: "#fff" }}
                                        href={"/admin/courseclass?id=" + this.state.courseData.c_id}
                                    >
                                        Edit
                                    </a>
                                </Button>
                                {!this.state.courseData.blocked ? (<Button color="danger" size='md' onClick={this.toggleBlock}>Block</Button>) : (<Button color="success" size='md' onClick={this.toggleBlock}>Unblock</Button>)}

                            </div>
                        </CardBody>
                    </Card>
                    <Modal isOpen={this.state.blockModal} toggle={this.toggleBlock}>
                        <ModalHeader toggle={this.toggleBlock}>{!this.state.courseData.blocked ? "Block" : "Unblock"}</ModalHeader>
                        <ModalBody>
                            {!this.state.courseData.blocked ? "Block" : "Unblock"} the user
                        </ModalBody>
                        <ModalFooter>
                            {!this.state.courseData.blocked ? (<Button color="danger" size='md' onClick={this.blockAct}>Block</Button>) : (<Button color="success" size='md' onClick={this.blockAct}>Unblock</Button>)}
                            <Button color="secondary" onClick={this.toggleBlock}>
                                Cancel
                            </Button>
                        </ModalFooter>
                    </Modal>
                </Container>
            </>
        );
    }
}

CourseRead.layout = Admin;

export default CourseRead;