import React from "react";
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  Container,
  Badge,
  Form,
  FormGroup,
  Input,
  InputGroup,
} from "reactstrap";

import DataTable from "react-data-table-component";

import { Link } from "react-router-dom";

import Header from "components/Headers/admin.js";

import firebase from "../../config/firebase-tiles";

class Classroom extends React.Component {
  constructor() {
    super();
    var today = new Date(),
      date =
        today.getFullYear() +
        "-" +
        ((today.getMonth() + 1 < 10 ? "0" : "") + (today.getMonth() + 1)) +
        "-" +
        ((today.getDate() + 1 < 10 ? "0" : "") + (today.getDate()));

    this.handleSort = this.handleSort.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
      user_id: "",
      classroomData: [],
      tdate: date,
      search_data: [],
      cname: "",

    };
  }

  componentDidMount() {
    var x = [];
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        firebase
          .database()
          .ref("Classroom/")
          .once("value")
          .then((snapshot) => {
            snapshot.forEach(function (childSnapshot) {
              var childData = childSnapshot.val();
              x.push(childData);
            });
            var data = snapshot.val();
            if (data) {
              this.setState({
                classroomData: x,
                search_data: x,
              });
            } console.log(x)
          });
      }
      else {
        window.location.href = "/admin";
      }
    });
  }

  reset = (e) => {
    this.setState({ search_data: this.state.classroomData, cname: '' });
    document.getElementById("search").value = "";
  }

  handleSubmit = (e) => {
    e.preventDefault();
  };

  handleSort = (e) => {
    this.setState({ cname: e.target.value });
    var data = this.state.classroomData.filter(item => (item.data.classroomName).toLowerCase().includes(e.target.value.toLowerCase()));
    this.setState({ search_data: data });
  };

  render() {
    const column = [
      { name: "Classroom Id", selector: "c_id", sortable: true },
      { name: "Classroom Name", selector: "classroomName" },
      { name: "Course Name", selector: "courseName" },
      { name: "Starting Date", selector: "starting_date" },
      { name: "End Date", selector: "end_date" },
      { name: "View Details", selector: "btn" },
      { name: "Edit", selector: "editbtn" },
      { name: "Classroom Status", selector: "cstatus" },
    ];

    const body = this.state.search_data.map((item) => {
      const Id = item.data.c_id;
      const sdate = item.data.starting_date;
      const tdate = this.state.tdate;
      const edate = item.data.end_date;
      // alert(sdate +" "+ tdate +" "+edate);
      if (sdate <= tdate && tdate < edate) {
        return {
          c_id: item.data.c_id,
          classroomName: item.data.classroomName,
          courseName: item.data.courseName,
          starting_date: item.data.starting_date,
          end_date: item.data.end_date,
          classroom_duration: item.data.classroom_duration,
          mentor: item.data.mentor,
          btn: item.data.btn,
          //eslint-disable-next-line
          btn: (
            <Link to={{ pathname: "/dashboard/pcourse", state: { id: item.data.c_id } }}>
              View
            </Link>
          ),
          editbtn: (
            <Button color="warning p-1">
              <Link to={{ pathname: "/admin/editClassroom", state: { id: item.data.c_id } }}>
                Edit
              </Link>
            </Button>
          ),
          cstatus: (<Badge color="success p-2">&ensp;Active&ensp;</Badge>),
          // <Badge color="success p-2">Active</Badge>
        };
      }
      else {
        return {
          c_id: item.data.c_id,
          classroomName: item.data.classroomName,
          courseName: item.data.courseName,
          starting_date: item.data.starting_date,
          end_date: item.data.end_date,
          classroom_duration: item.data.classroom_duration,
          mentor: item.data.mentor,
          btn: item.data.btn,
          //eslint-disable-next-line
          btn: (
            <Link to={{ pathname: "/dashboard/pcourse", state: { id: item.data.c_id } }}>
              View
            </Link>
          ),
          editbtn: (
            <Button color="warning p-1">
              <Link to={{ pathname: "/admin/editClassroom", state: { id: item.data.c_id } }}>
                Edit
              </Link>
            </Button>
          ),
          cstatus: (<Badge color="danger p-2">Inactive</Badge>),
          // <Badge color="success p-2">Active</Badge>
        };
      }

    });
    return (
      <>
        <Header />
        <Container>
          <Card className="mt--6 shadow shadow-4">
            <CardHeader className="">
              Classroom
              <div className="col text-right">
                <Button
                  color="primary"
                  onClick={(e) => e.preventDefault()}
                  size="sm">
                  <Link to="/admin/createClassroom" class="text-white">
                    Create Classroom
                  </Link>
                </Button>
              </div>
            </CardHeader>
            <CardBody className="">
              <Form role="form" onSubmit={this.handleSubmit} className="mb-4">
                <FormGroup>
                  <InputGroup>
                    <Input
                      type="text"
                      placeholder="Enter Classroom Name"
                      onChange={this.handleSort}
                      id="search"
                    />
                  </InputGroup>
                </FormGroup>

                {/* <Button type="submit">Search</Button> */}
                <Button onClick={this.reset}>Reset</Button>
              </Form>
              <DataTable
                title="Classrooms"
                columns={column}
                data={body}
                pagination={true}
                // progressPending={this.state.pending}
                persistTableHead
              // progressComponent={<LinearIndeterminate />}
              />
            </CardBody>
          </Card>
        </Container>
      </>
    );
  }
}

export default Classroom;
