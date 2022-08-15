import React from "react";
import DataTable from "react-data-table-component";
// import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import firebase from "config/firebase-tiles.js";
import { Link } from "react-router-dom";
import Admin from "layouts/Admin.js";
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
// core components
import Header from "components/Headers/admin.js";

class CourseDetail extends React.Component {
    constructor(props) {
        super(props);
        this.handleField = this.handleField.bind(this);
        this.handleMail = this.handleMail.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.reset = this.reset.bind(this);
        this.toggle = this.toggle.bind(this);
        this.blockUserModal = this.blockUserModal.bind(this);
        this.handleUsername = this.handleUsername.bind(this);
        this.handleUserMail = this.handleUserMail.bind(this);
        this.blockUser = this.blockUser.bind(this);
        this.state = {
            createModal: false,
            modal: false,
            field: "",
            user_data: [],
            search_data: [],
            mail: "",
            // Form Values
            username: "",
            email: "",
            user_uid: "",
            repassword: "",
            checkRePassFunction: false,
            password: "",
            checkPass: [false, false, false, false, false, false],
        };
    }

    componentDidMount() {
        var x = [];
        var tts = this;
        firebase
            .database()
            .ref("Courses/")
            .once("value")
            .then((snapshot) => {
                snapshot.forEach(function (childSnapshot) {
                    var childData = childSnapshot.val();
                    x.push({
                        username: childData.course_subtitle,
                        email: childData.course_title,
                        id: childData.c_id,
                        blocked: (childData.blocked === 1) ? false : true,
                    });
                });
                var data = snapshot.val();
                if (data) {
                    console.log(data);
                    tts.setState({
                        user_data: x,
                        search_data: x,
                    });
                }
            });
    }

    reset = (e) => {
        this.setState({ search_data: this.state.user_data, mail: "" });
        document.getElementById("search").value = "";
    };

    toggle = () => {
        this.setState((prevState) => ({ modal: !prevState.modal }));
    };

    handleField = (e) => {
        this.setState({ field: e.target.value });
    };

    handleMail = (e) => {
        this.setState({ mail: e.target.value });
        var data = this.state.user_data.filter((item) =>
            item.email.includes(e.target.value)
        );
        this.setState({ search_data: data });
    };

    // Form Functions

    handleUserMail = (e) => {
        this.setState({ email: e.target.value });
    };

    handleUsername = (e) => {
        this.setState({ username: e.target.value });
    };

    hasLowerCase(str) {
        return /[a-z]/.test(str);
    }
    hasUpperCase(str) {
        return /[A-Z]/.test(str);
    }

    hasNumeric(str) {
        return /[0-9]/.test(str);
    }

    similarity(s1, s2) {
        var longer = s1;
        var shorter = s2;
        if (s1.length < s2.length) {
            longer = s2;
            shorter = s1;
        }
        var longerLength = longer.length;
        if (longerLength === 0) {
            return 1.0;
        }
        return (
            (longerLength - this.editDistance(longer, shorter)) /
            parseFloat(longerLength)
        );
    }

    editDistance(s1, s2) {
        s1 = s1.toLowerCase();
        s2 = s2.toLowerCase();

        var costs = [];
        for (var i = 0; i <= s1.length; i++) {
            var lastValue = i;
            for (var j = 0; j <= s2.length; j++) {
                if (i === 0) costs[j] = j;
                else {
                    if (j > 0) {
                        var newValue = costs[j - 1];
                        if (s1.charAt(i - 1) !== s2.charAt(j - 1))
                            newValue = Math.min(Math.min(newValue, lastValue), costs[j]) + 1;
                        costs[j - 1] = lastValue;
                        lastValue = newValue;
                    }
                }
            }
            if (i > 0) costs[s2.length] = lastValue;
        }
        return costs[s2.length];
    }

    blockUser = (id) => {
        firebase
            .database()
            .ref("Courses/" + this.state.blockId)
            .update({
                blocked: 1,
            });
        this.toggle();
        window.location.reload();
    };

    handleSubmit = (e) => {
        e.preventDefault();
        var s = this.state.mail;
        console.log(s);
        var data = this.state.user_data.filter((item) => item.email === s);
        this.setState({ search_data: data });
    };

    blockUserModal = (id) => {
        this.toggle();
        this.setState({ blockId: id });
    };

    render() {
        const column = [
            { name: "Title", selector: "email" },
            { name: "Subtitle", selector: "username", sortable: true },
            
            { name: "Course ID", selector: "id" },
            { name: "View Details", selector: "btn" },
            { name: "Block", selector: "block" },
        ];

        const body = this.state.search_data.map((item) => {
            const id = item.id;
            var block = item.blocked ? (
                <Button
                    color="danger"
                    onClick={() => this.blockUserModal(id)}
                    size="sm"
                >
                    Block
                </Button>
            ) : (
                <h6 className="text-danger text-center">Blocked</h6>
            );
            return {
                username: item.username,
                email: item.email,
                id: item.id,
                btn: (
                    <Button color="primary">
                        <a
                            style={{ color: "#fff" }}
                            href={"/admin/CourseRead?id=" + id}
                        >
                            View
                        </a>
                    </Button>
                ),
                block: block,
            };
        });

        return (
            <>
                <Header />
                {/* Page content */}
                <Container className="mt--7" fluid>
                    <Card>
                        <CardHeader>
                            <Row className="">
                                <Col xs="12">
                                    <h1 className="mb-0">Courses</h1>
                                </Col>
                                <Col className="col text-right align-self-center">
                                    <Button color="primary" size="sm">
                                        <a style={{ color: "#fff" }}
                                            href={"/admin/courseclass"}>
                                            Create Course
                                        </a>
                                    </Button>
                                </Col>
                            </Row>
                        </CardHeader>
                        <CardBody>
                            <Form role="form" onSubmit={this.handleSubmit} className="mb-4">
                                <FormGroup>
                                    <InputGroup>
                                        <Input
                                            type="text"
                                            placeholder="Enter course name"
                                            onChange={this.handleMail}
                                            id="search"
                                        />
                                    </InputGroup>
                                </FormGroup>
                                <Button type="submit">Search</Button>
                                <Button onClick={this.reset}>Reset</Button>
                            </Form>
                            <DataTable
                                title="Courses"
                                columns={column}
                                data={body}
                                pagination={true}
                            />
                        </CardBody>
                    </Card>
                    <Modal isOpen={this.state.modal} toggle={this.toggle}>
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
                    </Modal>
                </Container>
            </>
        );
    }
}

CourseDetail.layout = Admin;

export default CourseDetail;