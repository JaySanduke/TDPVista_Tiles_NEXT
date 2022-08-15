import React from "react";
import DataTable from "react-data-table-component";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import firebase from "../../config/firebase-tiles";
import User from 'layouts/User.js';
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
} from "reactstrap";
// core components
import Header from "components/Headers/admin.js";
// import InvoiceModal from "../../components/invoiceModal";

// import Workshop from "../../layouts/Workshop";

class WorkshopTask extends React.Component {
  constructor(props) {
    super(props);

    this.handleSearchSubmit = this.handleSearchSubmit.bind(this);
    this.handleTask = this.handleTask.bind(this);
    this.reset = this.reset.bind(this);
    this.state = {
      task_data: [],
      search_data: [],
      task: "",
      uid: "",
      invoice: false,
    };
  }

  componentDidMount() {
    firebase.auth().onAuthStateChanged((user) => {
      firebase.database().ref(`users/${user.uid}`).once("value")
        .then((snap) => {
          var d = snap.val();
          if (d) {

            this.setState({ uid: user.uid });

            var x = [];
            firebase
              .database()
              .ref(`users/${user.uid}/`)
              .once("value")
              .then((snapshot) => {
                  var data = snapshot.val();
                  var classList = (data.classPayHistory) ? data.classPayHistory : [] ;
                  console.log(classList);
                if (data) {
                  this.setState({
                    task_data: classList,
                    search_data: classList,
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

  reset = (e) => {
    this.setState({ search_data: this.state.task_data, task: "" });
    document.getElementById("search").value = "";
  };

  handleTask = (e) => {
    this.setState({ task: e.target.value });
    var data = this.state.task_data.filter((item) =>
      item.task_name.includes(e.target.value)
    );
    this.setState({ search_data: data });
  };

  handleSearchSubmit = (e) => {
    e.preventDefault();
    var s = this.state.task;
    var data = this.state.task_data.filter((item) => item.task_name === s);
    this.setState({ search_data: data });
  };

  showInvoice = (item) => {
    this.setState({
      invoice: true,
      orderId: item.orderId,


    })
  }

  toggle = () => {
    if (this.state.Modal) {
        console.log("Modal Close");
        this.setState({
            Modal: false,
        });
    } else {
        console.log("Modal Open");
        this.setState({
            Modal: true,
        });
    }
};
invoicetoggle = () => {
  if (this.state.invoiceModal) {
      console.log("Modal Close");
      this.setState({
          invoiceModal: false,
          invoice: false,
      });
  } else {
      console.log("Modal Open");
      this.setState({
          invoiceModal: true,
      });
  }
};

  render() {
    const column = [
      { name: "Classroom Name", selector: "classroom_name", sortable: true },
      { name: "status", selector: "status"},
      // { name: "order Id", selector:"order_id"},
      { name: "Order Date", selector:"order_date"},
      // { name: "payment Id", selector:"payment_id"},
      // { name: "date", selector: "date"},
      { name: "Details", selector: "btn" },
    ];

    const body = this.state.search_data.map((item) => {
      return {
        classroom_name: item.classroomName,
        status: (item.paymentId) ? "PAID" : "NOT PAID" ,
        // order_id: item.orderId,
        order_date: item.orderDate,
        // payment_id: item.paymentId ? item.paymentId : "",
        // date: item.date ? item.date : "",
        btn: (
          // <Link to={{ pathname: "/user/detailClassroom", state: { id: id } }}>
          //   View
          // </Link>
          // <Button color="success">Enrolled</Button>
          <a href={"/user/detailClassroom?c_id=" + item.classroomId}>view</a>
        ),
      };
    });

    return (
      <>
        <Header />
        <Container className="mt--7" fluid>
          <Card>
            <CardHeader>
              <Row className="">
                <Col xs="12">
                  <h1 className="mb-0">Invoices</h1>
                </Col>
                {/* <Col className="col text-right align-self-center">
                  <Button
                    color="primary"
                    size="sm"
                    onClick={() => {
                      window.location.href = "/workshop/createtask";
                    }}
                  >
                    Create Task
                  </Button>
                </Col> */}
              </Row>
            </CardHeader>
            <CardBody>
              <Form
                role="form"
                onSubmit={this.handleSearchSubmit}
                className="mb-4"
              >
                <FormGroup>
                  <InputGroup>
                    <Input
                      type="text"
                      placeholder="Enter Name"
                      onChange={this.handleTask}
                      id="search"
                    />
                  </InputGroup>
                </FormGroup>
                <Button onClick={this.reset}>Reset</Button>
              </Form>
              <DataTable
                title="Task Data"
                columns={column}
                data={body}
                pagination={true}
                persistTableHead
              />
            </CardBody>
          </Card>
        </Container>
      </>
    );
  }
}
WorkshopTask.layout = User;
export default WorkshopTask; 