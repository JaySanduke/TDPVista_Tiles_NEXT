import React from "react";
import DataTable from "react-data-table-component";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import firebase from "../../config/firebase-tiles";
import MentorClassroom from "layouts/Admin.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
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


class studentDetail extends React.Component {
  constructor(props) {
    super(props);
    var today = new Date(),
      todayDate =
        today.getFullYear() +
        "-" +
        ((((today.getMonth() + 1) < 10) ? "0" : "") + (today.getMonth() + 1)) +
        "-" +
        ((((today.getDate() + 1) < 10) ? "0" : "") + (today.getDate() + 1));

    this.toggle = this.toggle.bind(this);
    this.search = this.search.bind(this);
    // this.addUser = this.addUser.bind(this);
    this.handlesSelectedClassroom = this.handlesSelectedClassroom.bind(this);
    // this.RemoveClass = this.RemoveClass.bind(this);
    // this.RemoveModal = this.RemoveModal.bind(this);
    // this.onCancel = this.onCancel.bind(this);
    this.toggle2 = this.toggle2.bind(this);
    this.toggleBlock = this.toggleBlock.bind(this);
    this.blockAct = this.blockAct.bind(this);
    this.state = {
      today: todayDate,
      modal: false,
      removeModel: false,
      data: [],
      u_id: "",
      // Enrolled Classrooms
      classData: [],
      // Classrooms Not Enrolled
      classroom: [],
      search_data: [],
      add_classroom: [],
      blockModal: false,
    };
  }

  componentDidMount() {
    var currenturl = window.location.search;
    var currenturlsearch = new URLSearchParams(currenturl);
    var id = currenturlsearch.get("id");
    
    console.log(id);
    if (id === undefined) {
      window.location.href = "/";
    }
    this.setState({ u_id: id });
    var x = [];
    firebase
      .database()
      .ref("users/" + id)
      .once("value")
      .then((snapshot) => {
        var x = snapshot.val();
        var classData = x.classroom;
        if (x && x !== null && classData !== null) {
          this.setState({
            data: x,
            classData: classData,
          });
        }
        if (
          classData === null &&
          classData === "null" &&
          classData === undefined
        ) {
          this.setState({ classData: [] });
        }
      })
      // .then(() => {
      //   var ids = [];
      //   if (
      //     this.state.classData !== undefined &&
      //     this.state.classData !== null
      //   ) {
      //     ids = Object.keys(this.state.classData);
      //   }
      //   firebase
      //     .database()
      //     .ref("Classroom/")
      //     .once("value")
      //     .then((snapshot) => {
      //       snapshot.forEach(function (childSnapshot) {
      //         var childData = childSnapshot.val();
      //         if (!ids.includes(childData.data.c_id)) {
      //           x.push({
      //             c_id: childData.data.c_id,
      //             classroomName: childData.data.classroomName,
      //           });
      //         }
      //       });
      //       this.setState({ classroom: x });
      //       this.setState({ search_data: x });
      //     });
      // });
  }

  // Remove Classroom Functions
  toggle2 = () => {
    this.setState((prevState) => ({ removeModal: !prevState.removeModel }));
  };

  // RemoveClass = (c_id) => {
  //   firebase
  //     .database()
  //     .ref("users/" + this.state.u_id + "/classroom")
  //     .child(c_id)
  //     .remove();
  //   this.toggle2();
  //   alert("User Removed From" + this.state.removeName);
  //   this.setState({ removeName: "", removeId: "" })
  //   window.location.reload();
  // };

  // RemoveModal = (id, Name) => {
  //   this.setState({ removeId: id, removeName: Name });
  //   this.toggle2();
  // };

  // Add User Functions
  // addUser = () => {
  //   this.state.selectedRows.map((item) => {
  //     var id = item.c_id;
  //     if (this.state.classData === null || this.state.classData === undefined || !Object.keys(this.state.classData).includes(id)) {
  //       firebase
  //         .database()
  //         .ref("users/" + this.state.u_id + "/classroom/" + id)
  //         .update({
  //           data: {
  //             c_id: id,
  //             classroomName: item.classroomName,
  //             date_joined: this.state.today,
  //           },
  //         });
  //     }
  //     return null;
  //   });
  //   window.location.reload();
  //   alert("Classrooms Added");
  //   this.toggle();
  //   this.setState({ selectedRows: [] })
  // };

  onCancel = () => {
    this.toggle();
    this.setState({ search_data: this.state.classroom });
  }

  toggle = () => {
    this.setState((prevState) => ({ modal: !prevState.modal }));
  };

  // Block Modal
  toggleBlock = () => {
    this.setState((prevState) => ({ blockModal: !prevState.blockModal }));
  }

  blockAct = () => {
    if (this.state.data.blocked == 1) {
       firebase.database().ref("users/" + this.state.u_id).child("blocked").remove();
      // firebase.database().ref("users/" + this.state.u_id).update({
      //   blocked: 0,
      // })
      this.toggleBlock();
    }
    else {
      firebase.database().ref("users/" + this.state.u_id).update({
        blocked: 1,
      })
      this.toggleBlock();
    }
     window.location.reload();
  }

  search = (e) => {
    this.setState({ search_data: this.state.classroom });
    var s = [];
    this.state.classroom.map((item) => {
      if (item.classroomName.includes(e.target.value)) {
        s.push(item);
      }
      return null;
    })
    this.setState({ search_data: s });
  };

  handlesSelectedClassroom = (state) => {
    this.setState({ selectedRows: state.selectedRows });
  };

  render() {
    const header = [
      { name: "Classroom Id", selector: "c_id" },
      { name: "Classroom Name", selector: "classroomName", sortable: true },
      { name: "Date Joined", selector: "joined_date", sortable: true },
      { name: "Remove", selector: "remove" },
    ];

    const classroom_header = [
      { name: "Classroom Name", selector: "classroomName" },
      { name: "Classroom Id", selector: "c_id" },
    ];

    // let body = [];
    // if (this.state.classData !== null && this.state.classData !== undefined) {
    //   body = Object.keys(this.state.classData).map((key, index) => {
    //     return {
    //       c_id: this.state.classData[key].data.c_id,
    //       classroomName: this.state.classData[key].data.classroomName,
    //       joined_date: this.state.classData[key].data.date_joined,
    //       remove: (
    //         <Button
    //           color="danger"
    //           size="sm"
    //           onClick={() =>
    //             this.RemoveModal(
    //               this.state.classData[key].data.c_id,
    //               this.state.classData[key].data.classroomName
    //             )
    //           }
    //         >
    //           <FontAwesomeIcon
    //                       icon={faTrashAlt}
    //                       className="justify-self-end"
    //                     />
    //         </Button>
    //       ),
    //     };
    //   });
    // }
    // else {
    //   body = [];
    // }

    return (
      <>
        <Header />
        {/* Page content */}
        <Container className="mt--7" fluid>
          <Card>
            <CardHeader>
              <h1>Student</h1>
            </CardHeader>
            <CardBody className="px-2">
              <div className="row align-items-center">
                <div className="align-items-center text-align-center col-md-3 ">
                  <img
                    alt="..."
                    className="rounded-circle mx-auto justify-content-center"
                    width="100px"
                    src={this.state.data.profilepic}
                  />
                </div>
                <div className="col-md-9 py-sm-3">
                  <b>Name :</b> {this.state.data.username}
                  <br />
                  <b>E-mail :</b> {this.state.data.email}
                  <br />
                  <b>User Id :</b> {this.state.data.user_uid} <br />
                </div>
              </div>
              <br />

             
              {/* <DataTable columns={header} data={body} pagination={true} /> */}
              <div className="text-right d-flex justify-content-end">
               
                {!this.state.data.blocked ? (<Button color="danger" size='md' onClick={this.toggleBlock}>Block</Button>) : (<Button color="success" size='md' onClick={this.toggleBlock}>Unblock</Button>)}

              </div>
            </CardBody>
          </Card>
          {/* <Modal isOpen={this.state.modal} toggle={this.toggle}>
            <ModalHeader toggle={this.toggle}>Add Classroom</ModalHeader>
            <ModalBody>
              Add the user to selected classroom(s):
              <Form>
                <Input
                  type="text"
                  onChange={this.search}
                  placeholder="Enter Classroom Name"
                />
              </Form>
              <DataTable
                columns={classroom_header}
                data={this.state.search_data}
                selectableRows
                pagination
                Clicked
                onSelectedRowsChange={this.handlesSelectedClassroom}
              />
            </ModalBody>
            <ModalFooter>
              <Button color="primary" onClick={() => this.addUser()}>
                Add
              </Button>{" "}
              <Button color="secondary" onClick={() => this.onCancel()}>
                Cancel
              </Button>
            </ModalFooter>
          </Modal>
          <Modal isOpen={this.state.removeModal} toggle={this.toggle2}>
            <ModalHeader toggle={this.toggle2}>Remove Classroom</ModalHeader>
            <ModalBody>
              Remove the user from the classroom: {this.state.removeName}
            </ModalBody>
            <ModalFooter>
              <Button
                color="danger"
                onClick={() => this.RemoveClass(this.state.removeId)}
              >
                Remove
              </Button>{" "}
              <Button color="secondary" onClick={this.toggle2}>
                Cancel
              </Button>
            </ModalFooter>
          </Modal> */}
          <Modal isOpen={this.state.blockModal} toggle={this.toggleBlock}>
            <ModalHeader toggle={this.toggleBlock}>{!this.state.data.blocked ? "Block" : "Unblock"}</ModalHeader>
            <ModalBody>
              {!this.state.data.blocked ? "Block" : "Unblock"} the user
            </ModalBody>
            <ModalFooter>
              {!this.state.data.blocked ? (<Button color="danger" size='md' onClick={this.blockAct}>Block</Button>) : (<Button color="success" size='md' onClick={this.blockAct}>Unblock</Button>)}
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

studentDetail.layout = MentorClassroom;

export default studentDetail;