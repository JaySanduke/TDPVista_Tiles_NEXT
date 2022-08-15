import React from "react";
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  Form,
  FormGroup,
  Input,
  InputGroup,
  Container
} from "reactstrap";
import DataTable from "react-data-table-component";
import { Link } from "react-router-dom";
import Header from "components/Headers/admin.js";

import firebase from "../../config/firebase-tiles";
class Workshopoverview extends React.Component {
  constructor() {
    super();
    this.handleMail = this.handleMail.bind(this);
    this.reset = this.reset.bind(this);

    var today = new Date(),
      date =
        today.getFullYear() +
        "-" +
        ((today.getMonth() + 1 < 10 ? "0" : "") + (today.getMonth() + 1)) +
        "-" +
        ((today.getDate() + 1 < 10 ? "0" : "") + (today.getDate()));
    this.state = {
      user_id: "",
      workshopData: [],
      tdate: date,
      search_data:[],
      mail:"",
    };
  }
  handleMail = (e) => {
    e.preventDefault();
    // this.setState({quiz:e.target.value});
    var data = this.state.workshopData.filter(item=>(item.data.w_details.workshopTitle).toLowerCase().includes(e.target.value.toLowerCase()));
               
    this.setState({search_data:data});    
  };
  
  reset = (e) => {
    this.setState({ search_data: this.state.workshopData, mail: "" });
    document.getElementById("search").value = "";
  };

  componentDidMount() {
    
    var x = [];
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        firebase
          .database()
          .ref("Workshop/")
          .once("value")
          .then((snapshot) => {
            snapshot.forEach(function (childSnapshot) {
              var childData = childSnapshot.val();
              x.push(childData);
            });
            var data = snapshot.val();
            if (data) {
              this.setState({
                workshopData: x,
                search_data: x,
              });
            }
          }).then(()=>{
            console.log(this.state.workshopData);
          });
      }
      else {
        window.location.href = "/admin";
      }
    });
  }

  render() {
    console.log(this.state.workshopData[0]);
    const column = [
      { name: "Workshop Title", selector: "workshopTitle", sortable: true },
      { name: "Workshop Category", selector: "workshopCategory" },
      { name: "Starting Date", selector: "starting_date" },
      { name: "End Date", selector: "end_date" },
      { name: "Reg Starting Date", selector: "reg_starting_date" },
      { name: "Reg End Date", selector: "reg_end_date" },
      { name: "View Details", selector: "btn" },
      { name: "Edit" , selector: "editbtn"},

    ];

    const body = this.state.search_data.map((item) => {
     
        return {
          workshopTitle: item.data.w_details.workshopTitle,
          workshopCategory: item.data.workshopCategory,
          starting_date: item.data.w_details.starting_date,
          end_date: item.data.w_details.end_date,
          reg_starting_date: item.data.w_details.reg_starting_date,
          reg_end_date: item.data.w_details.reg_end_date,
          btn: item.data.btn,
          //eslint-disable-next-line
          btn: (
            <Link to={{ pathname: "/workshop/workshopdetails", state: { id: item.data.w_id } }}>
              View
            </Link>
          ),editbtn: (<Button color="warning p-1"><Link to={{ pathname: "/workshop/editworkshop", state: { id: item.data.w_id  } }}>
          Edit
        </Link></Button>),
          
        
          
        };
      
     
    });
    return (
      <>
        <Header />
        <Container className="mt--7" fluid>
       
          <Card className="mt--6 shadow shadow-4">
          
            <CardHeader className="">
              Workshops
              <div className="col text-right">
                <Button
                  color="primary"
                  onClick={(e) => e.preventDefault()}
                  >
                  <Link to="/admin/createworkshop" class="text-white">
                    Create Workshop
                  </Link>
                </Button>
              </div>
            </CardHeader>
            <CardBody className="">
            <Form role="form" className="mb-4">
            <FormGroup>
              <InputGroup>
                <Input
                  type="text"
                  placeholder="Enter Workshop Title"
                  onChange={this.handleMail}
                  id="search"
                />
              </InputGroup>    
            </FormGroup>
            
            {/* <Button type="submit">Search</Button> */}
            <Button onClick={this.reset}>Reset</Button>
          </Form>
              <DataTable
                title="Workshops"
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

export default  Workshopoverview;
