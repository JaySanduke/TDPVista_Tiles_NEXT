import React, { useEffect } from "react";
import Link from "next/link";
import firebase from "config/firebase-tiles.js";
import {
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  DropdownToggle,
  Form,
  FormGroup,
  InputGroupAddon,
  InputGroupText,
  Input,
  InputGroup,
  Navbar,
  Nav,
  Container,
  Media,
  Button,
} from "reactstrap";
import UserHeader from "../Headers/UserHeader";

class MentorNavbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedInUser: null,
      loggedInUsername:null,
      mentorsData: {},
      profilepic:"",
    };
  }

  componentDidMount() {
    firebase.auth().onAuthStateChanged((user) => {
      if(user) {
        firebase.database().ref(`mentors/${user.uid}`).once("value")
        .then((snap) => {
        if (user) {
          console.log(user.uid);
          firebase
            .database()
            .ref("mentors/" + user.uid)
            .once("value")
            .then((snapshot) => {
              if(snapshot.val()){
                var data = snapshot.val();
                this.setState({
                  loggedInUsername: data.name,
                  mentorsData: data,
                  profilepic: data.profilepic,
                });console.log(data);
              }else{
                console.log("NO USER");
                 window.location.href = "/";
              }
            });
        } 

        //  var storageRef = firebase.storage().ref();
        //   var spaceRef = storageRef.child("mentors/" + user.uid + "/profile.jpeg");
        //   storageRef.child("mentors/" + user.uid + "/profile.jpeg").getDownloadURL().then(function (url) {
        //     var test = url;

        //     document.querySelector("#profile").src = test;

        //   }).catch(function (error) {

        //   });
      })
      }
      else {
        console.log("NO USER");
         window.location.href = "/";
      }
  });
  }

  logoutAdmin = (e) => {
    e.preventDefault();
    firebase
      .auth()
      .signOut()
      .then(() => {
        window.location.href = "/";
      })
      .catch((error) => {
        // An error happened.
      });
  }

  render() {
    return (
      <>
        <Navbar className="navbar-top navbar-dark" expand="md" id="navbar-main">
          <Container flm_id>
            <Link href="/mentor/dashboard">
              <a className="h4 mb-0 text-white text-uppercase d-none d-lg-inline-block">
                {this.props.brandText}
              </a>
            </Link>
            {/* <Button color="info" className="m-3 ml-auto" onClick={this.logoutAdmin}> Logout</Button> */}
            {/* <Button color="info" className="m-3 ml-auto" ><a style={{color:"#fff"}} href="../../mentor/dashboard" >Go Back</a></Button> */}

            {/* <Form className="navbar-search navbar-search-dark form-inline mr-3 d-none d-md-flex ml-lg-auto">
              <FormGroup className="mb-0">
                <InputGroup className="input-group-alternative">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="fas fa-search" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input placeholder="Search" type="text" />
                </InputGroup>
              </FormGroup>
            </Form> */}
            <Nav className="align-items-center d-none d-md-flex" navbar>
              <UncontrolledDropdown nav>
                <DropdownToggle className="pr-0" nav>
                  <Media className="align-items-center">
                    <span className="avatar avatar-sm rounded-circle">
                      <img
                        alt="..." 
                        src={this.state.profilepic}
                      />
                    </span>
                    <Media className="ml-2 d-none d-lg-block">
                      <span className="mb-0 text-sm font-weight-bold">
                        { this.state.loggedInUsername }
                      </span>
                    </Media>
                  </Media>
                </DropdownToggle>
                <DropdownMenu className="dropdown-menu-arrow" right>
                  <DropdownItem className="noti-title" header tag="div">
                    <h6 className="text-overflow m-0">Welcome!</h6>
                  </DropdownItem>
                  <Link href="/admin/profile">
                    <DropdownItem>
                      <i className="ni ni-single-02" />
                      <span>My profile</span>
                    </DropdownItem>
                  </Link>
                  <Link href="/admin/profile">
                    <DropdownItem>
                      <i className="ni ni-settings-gear-65" />
                      <span>Settings</span>
                    </DropdownItem>
                  </Link>
                  <Link href="/admin/profile">
                    <DropdownItem>
                      <i className="ni ni-calendar-grid-58" />
                      <span>Activity</span>
                    </DropdownItem>
                  </Link>
                  <Link href="/admin/profile">
                    <DropdownItem>
                      <i className="ni ni-support-16" />
                      <span>Support</span>
                    </DropdownItem>
                  </Link>
                  <DropdownItem divider />
                  <DropdownItem href="#pablo" onClick={this.logoutAdmin}>
                    <i className="ni ni-mentors-run" />
                    <span>Logout</span>
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Container>
        </Navbar>
      </>
    );
  }
}

export default MentorNavbar;
