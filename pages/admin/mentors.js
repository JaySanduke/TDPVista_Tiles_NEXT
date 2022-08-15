import React from "react";
import DataTable from 'react-data-table-component';
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import firebase from "../../config/firebase-tiles";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import {
    Button,
    Card,
    CardHeader,
    CardBody,
    Container,
    Form,
    FormGroup,
    Input,
    InputGroup,
    Modal,
    Row,
    Col,
    ModalBody,
    ModalFooter,
    ModalHeader
} from "reactstrap";
// core components
import Header from "components/Headers/admin.js";

import Admin from 'layouts/Admin.js';

class Mentors extends React.Component {
    constructor(props) {
        super(props);

        this.handleField = this.handleField.bind(this);
        this.handleMail = this.handleMail.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        // this.submit = this.submit.bind(this);
        this.reset = this.reset.bind(this);
        this.toggle = this.toggle.bind(this);
        this.toggle1 = this.toggle1.bind(this);
        this.handleFName = this.handleFName.bind(this);
        this.handleLName = this.handleLName.bind(this);
        this.handleEmail = this.handleEmail.bind(this);
        this.handleAddress = this.handleAddress.bind(this);
        this.handleCity = this.handleCity.bind(this);
        this.handleState = this.handleState.bind(this);
        this.handleCountry = this.handleCountry.bind(this);
        this.handlePincode = this.handlePincode.bind(this);
        this.handleQualification = this.handleQualification.bind(this);
        this.handleContact = this.handleContact.bind(this);
        this.handleDOB = this.handleDOB.bind(this);
        this.handleExpertise = this.handleExpertise.bind(this);
        this.handleSkills = this.handleSkills.bind(this);
        this.blockUser = this.blockUser.bind(this);
        this.blockUserModal = this.blockUserModal.bind(this);
        this.state = {
            fname: '',
            lname: '',
            email: '',
            address: '',
            city: '',
            state: '',
            country: '',
            pincode: '',
            qualification: '',
            expertise: '',
            skills: '',
            contact: '',
            dob: '',
            field: "",
            user_data: [],
            search_data: [],
            mail: "",
            mentor: "",
            Mentors: [],
            modal: false,
            modal1:false,
            verified: 1,
        };
    }

    reset = (e) => {
        this.setState({ search_data: this.state.Mentors, mail: '' });
        document.getElementById("search").value = "";
    }

    handleField = (e) => {
        this.setState({ field: e.target.value });
    }
    handleFName = (e) => {
        this.setState({ fname: e.target.value });
    }
    handleLName = (e) => {
        this.setState({ lname: e.target.value });
    }
    handleEmail = (e) => {
        this.setState({ email: e.target.value });
    }
    handleAddress = (e) => {
        this.setState({ address: e.target.value });
    }
    handleCity = (e) => {
        this.setState({ city: e.target.value });

    }
    handleState = (e) => {
        this.setState({ state: e.target.value });

    }
    handleCountry = (e) => {
        this.setState({ country: e.target.value });

    }
    handlePincode = (e) => {
        this.setState({ pincode: e.target.value });

    }
    handleQualification = (e) => {
        this.setState({ qualification: e.target.value });

    }
    handleExpertise = (e) => {
        this.setState({ expertise: e.target.value });

    }
    handleContact = (e) => {
        this.setState({ contact: e.target.value });

    }
    handleDOB = (e) => {
        this.setState({ dob: e.target.value });

    }
    handleSkills = (e) => {
        this.setState({ skills: e.target.value });

    }

    blockUser = (id) => {
        firebase.database().ref("mentors/" + this.state.blockId).update({
            blocked: 1,
        })
        console.log('object')
        this.toggle1();
    }

    //mentor data retrieve
    componentDidMount() {
        var x = [];
        firebase
            .database()
            .ref("mentors/")
            .once("value")
            .then((snapshot) => {
                snapshot.forEach(function (childSnapshot) {
                    var childData = childSnapshot.val();
                    x.push(childData);
                });
                var data = snapshot.val();
                if (data) {
                    this.setState({
                        Mentors: x,
                        search_data: x,
                        // verified: (x.verified) ? x.verified : 1 ,
                    });
                }

            });

    }
    handleMail = (e) => {
        this.setState({ mail: e.target.value });
        var data = this.state.Mentors.filter(item => (item.fname).toLowerCase().includes(e.target.value.toLowerCase()));
        console.log(data);
        this.setState({ search_data: data });

        console.log(this.state.search_data);

    }
    handleSubmit = (e) => {
        // var s = this.state.mail;
        // var data = this.state.Mentors.filter(item => item.email === s);
        // this.setState({ search_data: data });
        // this.setState({ mail: e.target.value });
        // var data = this.state.Mentors.filter(item => item.email.includes(e.target.value));
        // console.log(data);
        // this.setState({ search_data: data });
        e.preventDefault();
    }
    toggle = () => {
        this.setState((prevState) => ({ modal: !prevState.modal }));
    };
    toggle1 = () => {
        this.setState((prevState) => ({ modal1: !prevState.modal1 }));
    };
    // submit = () => {

    //     const db = firebase.database();
    //     const ref = db.ref("mentors/");
    //     const a = ref.push({
    //         fname: this.state.fname,
    //         lname: this.state.lname,
    //         email: this.state.email,
    //         address: this.state.address,
    //         city: this.state.city,
    //         state: this.state.state,
    //         country: this.state.country,
    //         qualification: this.state.qualification,
    //         expertise: this.state.expertise,
    //         skills: this.state.skills,
    //         contact: this.state.country,
    //         dob: this.state.dob,
    //     })

    //     const id = a.key;
    //     db.ref("mentors/" + id)
    //         .update({
    //             m_id: id,
    //         })
    //         .then(() => {
    //             alert("Mentor Created Successfully!");
    //             window.location.href = "/admin/mentors";
    //         });
    // };

    blockUserModal = (id) => {
        this.toggle1();
        console.log('pqr')
        this.setState({ blockId: id });
    }

    verifyUser = (id) => {
        var toVerify = confirm("Are you sure, you want to verify this mentor?");
        if(toVerify){
            firebase
                .database()
                .ref("mentors/"+id)
                .update({ 
                    verified: 1,
                }).then(() => {
                    this.setState({
                        search_data: this.state.search_data,
                    })
                    window.location.reload();
                })
        }
    }
    render() {
        const column = [
            // { name: "Mentor ID", selector: 'm_id', sortable: true },
            { name: "Name", selector: 'fname' },
            { name: "Email", selector: 'email' },
            { name: "Block", selector: "block" },
            { name: "status", selector: "status"},
            { name: "view details", selector: "view"},
        ];

        const body = this.state.search_data.map((item) => {
            const id = (item.m_id) ? item.m_id : item.uid;
            var block = !item.blocked ? (
            <Button color="danger" onClick={() => this.blockUserModal(id)} size='sm'>
                Block
            </Button>) : (<h6 className="text-danger text-center">Blocked</h6>);
            var status = (item.verified === 0) ? (
                // <Button size="sm" onClick={() => this.verifyUser(id)} color="success" >Verify</Button>
                <h6 className="text-danger text-center">Pending..</h6>
            ) : (
                <h6 className="text-success text-center">Verified</h6>
            );
            var view = ( 
                <a href={"MentorDetails?id="+id}>
                    <Button size="sm" color="info"><FontAwesomeIcon
                          icon={faEdit}
                          className="justify-self-end"
                        /></Button>
                </a>
            )
            return {
                // m_id: (item.m_id) ? item.m_id : item.uid,
                fname: item.name,
                email: item.email,
                block: (
                    block
                ),
                status: ( status),
                view: (view),
            };
        });
        /* const options=[
             {
                 label:"email",
                 value:"email",
             },
             {
                 label:"name",
                 value:"name",
             },
             {
                 label:"id",
                 value:"id",
             }
         ];*/
        return (
            <>
                <Header />
                {/* Page content */}
                <Container className="mt--7" fluid>
                    <Card>
                        <CardHeader>
                            <h1>Search Mentors</h1>
                        </CardHeader>
                        <CardBody>
                            <Form role="form" onSubmit={this.handleSubmit} className="mb-4">
                                <FormGroup>
                                    <InputGroup>
                                        <Input type="text" placeholder="Enter Name" onChange={this.handleMail} id="search" /></InputGroup>
                                </FormGroup>
                                {/* <Button type="submit">Search</Button> */}
                                <Button onClick={this.reset}>Reset</Button>
                                {/*<select>
                       {options.map((option) => (
                            <option value={option.value}>{option.label}</option>
                        ))}
                    </select*/}

                            </Form>
                            <div className="text-right">
                                <a href="/mentor-register">
                                <Button className="m-4"  color="primary" type="submit">
                                    Create Mentor
                                </Button>
                                </a>
                            </div>

                            <DataTable
                                title="Mentors"
                                columns={column}
                                data={body}
                                pagination={true}
                                // progressPending={this.state.pending}
                                persistTableHead
                            // progressComponent={<LinearIndeterminate />}
                            />
                            {/* <Modal isOpen={this.state.modal} toggle={this.toggle}>
                                <ModalHeader toggle={this.toggle}>
                                    Create Mentor
                                </ModalHeader>
                                <ModalBody>
                                    <Form onSubmit={this.submit} id="mentorform">
                                        <FormGroup>
                                            <div className="mntr-form">
                                                <Row>
                                                    <Col xl="12">
                                                        <h2 style={{ fontSize: 30 }}>Create Mentor </h2>
                                                    </Col>
                                                    <Col xl="6" className="mb-4">
                                                        <div className="col-inp-3 input-effect">
                                                            <Input className="effect-21" type="text" value={this.state.fname} onChange={this.handleFName} placeholder="First Name" />

                                                            <span className="focus-border">
                                                                <i></i>
                                                            </span>
                                                        </div>
                                                    </Col>
                                                    <Col xl="6" className="mb-4">
                                                        <div className="col-inp-3 input-effect">
                                                            <Input className="effect-21" type="text" value={this.state.lname} onChange={this.handleLName} placeholder="Last Name" />

                                                            <span className="focus-border">
                                                                <i></i>
                                                            </span>
                                                        </div>
                                                    </Col>
                                                    <Col xl="12" className="mb-4">
                                                        <div className="col-inp-3 input-effect">
                                                            <Input className="effect-21" type="text" value={this.state.email} onChange={this.handleEmail} placeholder="Your Email ID" />

                                                            <span className="focus-border">
                                                                <i></i>
                                                            </span>
                                                        </div>
                                                    </Col>
                                                    <Col xl="12" className="mb-4">
                                                        <div className="col-inp-3 input-effect">
                                                            <Input className=" effect-21" type="text" value={this.state.address} onChange={this.handleAddress} placeholder="Your Address" />

                                                            <span className="focus-border">
                                                                <i></i>
                                                            </span>
                                                        </div>
                                                    </Col>
                                                    <Col xl="6" className="mb-4">
                                                        <div className="col-inp-3 input-effect">
                                                            <Input className=" effect-21" type="text" value={this.state.city} onChange={this.handleCity} placeholder="City" />

                                                            <span className="focus-border">
                                                                <i></i>
                                                            </span>
                                                        </div>
                                                    </Col>
                                                    <Col xl="6" className="mb-4">
                                                        <div className="col-inp-3 input-effect">
                                                            <input className=" effect-21" type="text" value={this.state.state} onChange={this.handleState} placeholder="State" />

                                                            <span className="focus-border">
                                                                <i></i>
                                                            </span>
                                                        </div>
                                                    </Col>
                                                    <Col xl="6" className="mb-4">
                                                        <div className="col-inp-3 input-effect">
                                                            <input className=" effect-21" type="text" value={this.state.country} onChange={this.handleCountry} placeholder="Country" />

                                                            <span className="focus-border">
                                                                <i></i>
                                                            </span>
                                                        </div>
                                                    </Col>
                                                    <Col xl="6" className="mb-4">
                                                        <div className="col-inp-3 input-effect">
                                                            <input className=" effect-21" type="text" value={this.state.pincode} onChange={this.handlePincode} placeholder="Pincode" />

                                                            <span className="focus-border">
                                                                <i></i>
                                                            </span>
                                                        </div>
                                                    </Col>
                                                    <Col xl="12" className="mb-4">
                                                        <div className="col-inp-3 input-effect">
                                                            <input className=" effect-21" type="text" value={this.state.qualification} onChange={this.handleQualification} placeholder="Qualification" />

                                                            <span className="focus-border">
                                                                <i></i>
                                                            </span>
                                                        </div>
                                                    </Col>
                                                    <Col xl="6" className="mb-4">
                                                        <Row className="m-0 p-0">

                                                            <Col xs="10" className="m-0 p-0">
                                                                <div className="col-inp-3 input-effect">
                                                                    <input className=" effect-21" type="text" value={this.state.contact} onChange={this.handleContact} placeholder="Contact Number" />

                                                                    <span className="focus-border">
                                                                        <i></i>
                                                                    </span>
                                                                </div>
                                                            </Col>
                                                        </Row>
                                                    </Col>
                                                    <Col xl="6" className="mb-4">
                                                        <div className="col-inp-3 input-effect">
                                                            <input className="effect-21" type="date" value={this.state.dob} onChange={this.handleDOB} placeholder="Date-Of-Birth" />

                                                        </div>
                                                    </Col>
                                                    <Col xl="12" className="mb-4">
                                                        <div className="col-inp-3 input-effect">
                                                            <input className=" effect-21" type="text" value={this.state.expertise} onChange={this.handleExpertise} placeholder="Expertise" />

                                                            <span className="focus-border">
                                                                <i></i>
                                                            </span>
                                                        </div>
                                                    </Col>
                                                    <Col xl="12" className="mb-4">
                                                        <div className="col-inp-3 input-effect">
                                                            <input className=" effect-21" type="text" value={this.state.skills} onChange={this.handleSkills} placeholder="Skills/Hobbites" />

                                                            <span className="focus-border">
                                                                <i></i>
                                                            </span>
                                                        </div>
                                                    </Col>
                                                </Row>
                                            </div>

                                        </FormGroup>
                                    </Form>
                                </ModalBody>
                                <ModalFooter>
                                    <Button
                                        color="primary"
                                        onSubmit={this.submit}
                                        form="mentorform"
                                    >
                                        Create
                                    </Button>{" "}
                                    <Button color="secondary" onClick={this.toggle1}>
                                        Cancel
                                    </Button>
                                </ModalFooter>
                            </Modal> */}
                        </CardBody>
                    </Card>
                    {/* <Modal isOpen={this.state.modal} toggle={this.toggle}>
                        <ModalHeader toggle={this.toggle}>Block User</ModalHeader>
                        <ModalBody>
                            Do You Want To Block the user {this.state.blockId} ?<br />
                            This will do the following things!!
                        </ModalBody>
                        <ModalFooter>
                            <Button color="danger" onClick={() => this.blockUser()}>
                                Block
                            </Button>{" "}
                            <Button color="secondary" onClick={this.toggle}>
                                Cancel
                            </Button>
                        </ModalFooter>
                    </Modal> */}
                    <Modal isOpen={this.state.modal1} toggle={this.toggle1}>
                        <ModalHeader toggle={this.toggle1}>Block Mentor</ModalHeader>
                        <ModalBody>
                            Do You Want To Block the Mentor {this.state.blockId} ?<br />
                            This will do the following things!!
                        </ModalBody>
                        <ModalFooter>
                            <Button color="danger" onClick={() => this.blockUser(id)}>
                                Block
                            </Button>{" "}
                            <Button color="secondary" onClick={this.toggle1}>
                                Cancel
                            </Button>
                        </ModalFooter>
                    </Modal>
                </Container>
            </>
        );
    }
}

Mentors.layout = Admin;

export default Mentors;