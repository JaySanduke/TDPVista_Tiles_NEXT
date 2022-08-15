import React from "react";
import DataTable from "react-data-table-component";
// import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import firebase from "config/firebase-tiles.js";
import { Link } from "react-router-dom";
import Admin from "layouts/Admin.js";
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

class classroom extends React.Component {
  constructor(props) {
    super(props);
    this.handleField = this.handleField.bind(this);

    this.handleSubmit = this.handleSubmit.bind(this);
   
    this.toggle = this.toggle.bind(this);
    this.blockUserModal = this.blockUserModal.bind(this);
    this.handleUsername = this.handleUsername.bind(this);
   
  
    this.toggle2 = this.toggle2.bind(this);
    this.editclass = this.editclass.bind(this);
    
    this.blockUser = this.blockUser.bind(this);
    this.state = {
      createModal: false,
      modal: false,
      field: "",
      user_data: [],
      search_data: [],
      blockId:"",
      // Form Values
      classroomname: "",
      coursename: "",
      createddate: "",

    };
  }

  componentDidMount() {
    firebase.auth().onAuthStateChanged((user) => {
      firebase.database().ref(`Admin/${user.uid}`).once("value")
      .then((snap) => {
        var d = snap.val();
        if(d && d.type === 1) {
          var x = [];
          var tts = this;
          firebase
            .database()
            .ref("Classroom/")
            .once("value")
            .then((snapshot) => {
              
             
              snapshot.forEach(
                
                
                function (childSnapshot) {
      
               
                var childData = childSnapshot.val();
      
                
                if(childData.data !== undefined){
                x.push({
                  classroomname: childData.data.classroomName,
                  coursename: childData.data.courses[0].course_title,
                  c_id: childData.data.c_id,
                  blocked: (childData.blocked===1)? false : true,
                });
              }
              
               })
               
              
      
              
              var dataps = snapshot.val();
             
              if (dataps) {
                
                tts.setState({
                  user_data: x,
                  search_data: x,
                });
              }
            });
        }
        else {
          alert("only admins allowed ");
          window.location.href = "/";
        }
      })
    })

    
  }



  toggle = () => {
    this.setState((prevState) => ({ modal: !prevState.modal }));
  };

  handleField = (e) => {
    this.setState({ field: e.target.value });
  };



  // Form Functions
  toggle2 = () => {
    this.setState((prevState) => ({ createModal: !prevState.createModal }));
  };



  handleUsername = (e) => {
    this.setState({ classroomname: e.target.value });
  };



 

 



  blockUser = (c_id) => {
    firebase
      .database()
      .ref("Classroom/" + this.state.blockId)
      .update({
        blocked: 1,
      });
    this.toggle();
    window.location.reload();
  };

  editclass = ()=>{
    window.location.href = "/admin/editclassroom";
  }

  handleSubmit = (e) => {
    e.preventDefault();
    var s = this.state.mail;
    console.log(s);
    var data = this.state.user_data.filter((item) => item.coursename === s);
    // this.setState({ search_data: data });
  };

  blockUserModal = (c_id) => {
    this.toggle();
    this.setState({ blockId: c_id });
  };

  unblockUserModal = (c_id) => {
    this.toggle();
    
  };

  render() {
    const column = [
      { name: "Classroom", selector: "classroomname", sortable: true },
      { name: "Course Name", selector: "coursename" },
      { name: "class ID", selector: "c_id" },
      { name: "Edit", selector: "edit" },
      { name: "View Details", selector: "btn" },
      { name: "Block", selector: "block" },
    ];

    const body = this.state.search_data.map((item) => {
      const c_id = item.c_id;
      var block = item.blocked ? (
        <Button
          color="danger"
          onClick={() => this.blockUserModal(c_id)}
          size="sm"
        >
          Block
        </Button>
      ) : (
        <Button className="text-danger text-center"  onClick={() => this.unblockUserModal(c_id)}
        size="sm">Unblock</Button>
      );
      return {
        classroomname: item.classroomname,
        coursename: item.coursename,
        c_id: item.c_id,
        btn: (
          <Button color="primary">
            <a
              style={{ color: "#fff" }}
              href={"/admin/ClassroomDetails?c_id="+c_id}
            >
              View
            </a>
          </Button>
        ),
        block: block,
        edit:(
          <a
            style={{ color: "#333" }}
            href={"/admin/editclassroom?c_id="+c_id}
          >
          <Button color="#fff" title="This is Edit Button">
            <FontAwesomeIcon
                          icon={faEdit}
                          className="justify-self-end"
                        />
        </Button>
          
          </a>
        )
      };
    });

    return (
      <>
        <Header />
        {/* Page content */}
        <Container className="mt--7" fluc_id>
          <Card>
            <CardHeader>
              <Row className="">
                <Col xs="12">
                  <h1 className="mb-0">Classrooms</h1>
                </Col>
                <Col className="col text-right align-self-center">
                
                </Col>
              </Row>
            </CardHeader>
            <CardBody>
              
               
               
              <DataTable
                title="Classroom"
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

classroom.layout = Admin;

export default classroom;