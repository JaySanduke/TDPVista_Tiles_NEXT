import React from "react";
import{ 
    Button,
    Card,
    CardHeader,
    CardBody,
    Input,
    InputGroup,
    InputGroupAddon,
    InputGroupText,
    Form,
    FormGroup,
} from "reactstrap";

import firebase from "../config/firebase-tiles";

import "assets/css/Adminlogin.css"

class Adminlogin extends React.Component {
    constructor() {
        super();
        this.state = {
            email: "",
            password: "",
            adminData: [],
            allowed: "",
        };
        this.handleUserID = this.handleUserID.bind(this);
        this.handlePass = this.handlePass.bind(this);
        this.login = this.login.bind(this);
    }

    componentDidMount() {
        var x = [];
        firebase
            .database()
            .ref("Admin/")
            .once("value")
            .then((snapshot) => {
                snapshot.forEach(function (childSnapshot) {
                    var childData = childSnapshot.val();
                    x.push(childData.admin_email);
                });
                var data = snapshot.val();
                if (data) {
                    this.setState({
                        adminData: x,
                    });
                }
                console.log(this.state.adminData);
            });
    }

    handleUserID = (e) => {
        this.setState({ email: e.target.value });
    };
    handlePass = (e) => {
        this.setState({ password: e.target.value });
    };
    login = () => {
        if (this.state.adminData.includes(this.state.email)) {
        firebase
            .auth()
            .signInWithEmailAndPassword(this.state.email, this.state.password)
            .then((res) => {
                window.location.href = "/admin/index";
            })
            .catch((error) => {
                alert("Login Unsuccessful");
            })
        }
        else {alert("Login Unsuccessful");}
    };


    render() {
        return (
            <>
                <div className="containerMain">
                    <Card className="cardMain" color="primary">
                        <CardHeader className="cardHeader">ADMIN LOGIN</CardHeader>
                        <CardBody className="cardBody">

                            <Form role="form">
                                <FormGroup className="mb-3">
                                    <InputGroup className="input-group-alternative username">
                                        <InputGroupAddon addonType="prepend">
                                            <InputGroupText>
                                                <i className="ni ni-email-83" />
                                            </InputGroupText>
                                        </InputGroupAddon>
                                        <Input
                                            placeholder="User ID"
                                            type="text"
                                            value={this.state.userid}
                                            onChange={this.handleUserID}
                                        />
                                    </InputGroup>
                                </FormGroup>
                                <FormGroup>
                                    <InputGroup className="input-group-alternative password">
                                        <InputGroupAddon addonType="prepend">
                                            <InputGroupText>
                                                <i className="ni ni-lock-circle-open" />
                                            </InputGroupText>
                                        </InputGroupAddon>
                                        <Input
                                            placeholder="Password"
                                            type="password"
                                            value={this.state.password}
                                            onChange={this.handlePass}
                                        />
                                    </InputGroup>
                                </FormGroup>
                                <div className="text-center">
                                    <Button
                                        className=""
                                        color="dark"
                                        onClick={this.login}
                                        type="button"
                                    >
                                        Login
                                    </Button>
                                </div>
                            </Form>
                        </CardBody>
                    </Card>
                </div>
            </>
        );
    }
}


export default Adminlogin;