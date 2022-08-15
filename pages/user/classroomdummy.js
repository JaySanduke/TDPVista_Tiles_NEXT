import React from "react";
import DataTable from "react-data-table-component";
// import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import firebase from "../../config/firebase-tiles";
import { Link } from "react-router-dom";
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
// core components
import Header from "components/Headers/Header.js";

class classroom extends React.Component {
  constructor(props) {
    super(props);
    this.handleField = this.handleField.bind(this);

    this.handleSubmit = this.handleSubmit.bind(this);
   
    this.toggle = this.toggle.bind(this);

    this.handleUsername = this.handleUsername.bind(this);
   
  
    this.toggle2 = this.toggle2.bind(this);
 
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
    var x = [];
    firebase.auth().onAuthStateChanged((user) => {
      firebase.database().ref(`users/${user.uid}`).once("value")
      .then((snap) => {
        var d=[];
        var d = snap.val();
        {
           console.log(d);
          if(d.classroom){
             console.log(d.classroom);
            d.classroom.map(item => {
              // console.log(item);
              firebase
                .database()
                .ref(`Classroom/${item}`)
                .once("value")
                .then((snapshot) => {
                  var childData = snapshot.val();
                  // console.log(childData); 
                  x.push({
                    classroomname: childData.data.classroomName,
                    coursename: childData.data.courses[0].course_title,
                    c_id: childData.data.c_id,
                    blocked: (childData.blocked===1)? false : true,
                  });
                  // console.log(x);
                }).then(() => {
                  this.setState({
                    user_data: x,
                    search_data: x,
                  })        
                    return null;
                })
            })
          }
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



 

 





  handleSubmit = (e) => {
    e.preventDefault();
    var s = this.state.mail;
    console.log(s);
    var data = this.state.user_data.filter((item) => item.coursename === s);
    // this.setState({ search_data: data });
  };



  render() {
    const column = [
      { name: "Classroom", selector: "classroomname", sortable: true },
      { name: "Course Name", selector: "coursename" },
      { name: "class ID", selector: "c_id" },
    
      { name: "View Details", selector: "btn" },
    
    ];

    const body = this.state.search_data.map((item) => {
      const c_id = item.c_id;
     
      return {
        classroomname: item.classroomname,
        coursename: item.coursename,
        c_id: item.c_id,
        btn: (
          <Button color="primary">
            <a
              style={{ color: "#fff" }}
              href={"/UserClass/dashboard?c_id="+c_id}
            >
              Go to Classroom
            </a>
          </Button>
        ),
      
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
      
         
        </Container>
      </>
    );
  }
}

classroom.layout = User;

export default classroom;