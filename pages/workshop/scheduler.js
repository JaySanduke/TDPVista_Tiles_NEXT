import React from "react";
import FullCalendar from "@fullcalendar/react"; // must go before plugins
import dayGridPlugin from "@fullcalendar/daygrid"; // a plugin!
import { Button, Card, CardHeader, CardBody, Container } from "reactstrap";
import Header from "../../components/Headers/Header";
import firebase from "../../config/firebase-tiles";
import {Link} from 'react-router-dom';

class scheduler extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
        events: [],
        pathname : "",
        r_id : ""
    };
  }

  componentDidMount(){
    var w = [], q = [] ,t = [];
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
          var y ={};
        firebase
          .database()
          .ref("Workshop/")
          .once("value")
          .then((snapshot) => {
            snapshot.forEach(function (childSnapshot) {
              var childData = childSnapshot.val();
              y = {
                  title : childData.data.w_details.workshopTitle,
                  start: childData.data.w_details.starting_date,
                  end : childData.data.w_details.end_date,
                  backgroundColor: "blue",
                extendedProps:{
                  pathname: "/workshop/workshopdetails/", 
                  id: childData.data.w_id 
                }
              }
              w.push(y);
            });
            var data = snapshot.val();
            if (data) {
              this.setState({
                events : w,
              });
            }
          }).then(()=>{
            
          });
        firebase
          .database()
          .ref("Quiz/workshopQ/")
          .once("value")
          .then((snapshot) => {
            snapshot.forEach(function (childSnapshot) {
              var childData = childSnapshot.val();
              y = {
                  title : childData.data.name,
                  start: childData.data.start_date,
                  end : childData.data.end_date,
                  extendedProps: {
                    pathname: "/workshop/wquizdetails",
                    id:childData.data.quiz_id
                  },
                  backgroundColor: "pink",
                  borderColor: "pink",
              }
              q.push(y);
            });
            var a = [...w,...q];
            var data = snapshot.val();
            if (data) {
              this.setState({
                events : a,
              });
            }
          }).then(()=>{
            
          });
        firebase
          .database()
          .ref("Tasks/workshopT/")
          .once("value")
          .then((snapshot) => {
            snapshot.forEach(function (childSnapshot) {
              var childData = childSnapshot.val();
              y = {
                  title : childData.data.task_name,
                  start: childData.data.created_date,
                  end : childData.data.end_date,
                  extendedProps: {
                    pathname: "/workshop/wtaskdetails/",
                    id:childData.data.task_id
                  },
                  backgroundColor: "purple",
                  borderColor: "purple"
              }
              t.push(y);
            });
            var a = [...w,...q,...t];
            var data = snapshot.val();
            if (data) {
              this.setState({
                events : a,
              });
            }
          }).then(()=>{
            
          });
          
      }
      else {
        window.location.href = "/admin";
      }
    });
  }

  handleClick = (info)=>{
    this.setState({pathname: info.event.extendedProps.pathname});
    // console.log(info.event.extendedProps.pathnam/e);
    this.setState({r_id: info.event.extendedProps.id})
    var a = document.getElementById("link").click();
  }

  render() {
    return (
      <div>
        <Header />
        <Container className="mt--7" fluid>
          <Card>
            <CardHeader className="d-flex">
              <h1>Calendar </h1>
            </CardHeader>
            <CardBody className="px-2">
            <FullCalendar
            events = {this.state.events}
            eventClick = {this.handleClick}
        plugins={[ dayGridPlugin ]}
        initialView="dayGridMonth"
      />
            </CardBody>
          </Card>
          <Link to={{ pathname: this.state.pathname, state: { id: this.state.r_id } }} id="link" class="d-none">
              View
            </Link>
        </Container>
      </div>
    );
  }
}

export default scheduler;