import React from "react";
 
// import FullCalendar from "@fullcalendar/react"; // must go before plugins
// import dayGridPlugin from "@fullcalendar/daygrid"; // a plugi
// import interactionPlugin from "@fullcalendar/interaction";
// import "assets/css/global-stylescalendar.css";
// import "@fullcalendar/common/main.css"; // @fullcalendar/react imports @fullcalendar/common
// import "@fullcalendar/daygrid/main.css"; // @fullcalendar/timegrid imports @fullcalendar/daygrid

import FullCalendar from "../../components/fullCalendar";
import DocumentMeta from "react-document-meta";

import {
  Button,
  Card,
  CardHeader,
  CardBody,
  Container,
  Row,
  Col,
  Form,
  FormGroup,
  InputGroup,
  Input,
} from "reactstrap";

// import 'bootstrap/dist/css/bootstrap.min.css';
if (typeof window !== "undefined") {
  require("bootstrap/dist/js/bootstrap.min.js");
  // require("popper.js");
  // require("bootstrap");
}
// import 'bootstrap/dist/js/bootstrap.min.js';
//jquery, popper.js libraries for bootstrap modal
// import 'jquery/dist/jquery.min.js';
// import 'popper.js/dist/umd/popper.min.js'
// import $ from "jquery";
import UserClassroom from "layouts/UserClassroom.js";
import { useState } from "react";
import Header from "components/Headers/Header.js";

import firebase from "../../config/firebase-tiles";

let display = [];
function getRandomColor() {
  var letters = "BCDEF".split("");
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * letters.length)];
  }
  return color;
}

// FullCalendar('refetchEvents');

class DemoApp extends React.Component {
  constructor(props) {
    super(props);
    var today = new Date(),
      todayDate =
        today.getFullYear() +
        "-" +
        ((today.getMonth() + 1 < 10 ? "0" : "") + (today.getMonth() + 1)) +
        "-" +
        ((today.getDate() < 10 ? "0" : "") + today.getDate());
    var time = today.getHours() + ":" + today.getMinutes();
    this.state = {
      quiz_data: [],
      task_data: [],
      c_id: "",
      arr: [],
      todayDate: todayDate,
      nowTime: time,
    };
  }

  componentDidMount() {
    firebase.auth().onAuthStateChanged((user) => {
      firebase
        .database()
        .ref(`users/${user.uid}`)
        .once("value")
        .then((snap) => {
          var data = snap.val();
          {
            let id = localStorage.getItem("u_id");
            this.setState({ id: id });
            var tts = this;
            if (id === undefined) {
              window.location.href = "/";
            }
            this.setState({ c_id: id });
            var index = 0;

            // Fetches Data About Quiz
            const db = firebase.database();
            const ref = db.ref(`Classroom/${id}/data/quiz`);
            ref.once("value").then((snapshot) => {
              var events = [];
              snapshot.forEach(function (childSnapshot) {
                var Qid = childSnapshot.val();
                console.log(Qid);
                firebase
                  .database()
                  .ref("Quiz/classQ/" + Qid + "/data/")
                  .once("value")
                  .then((snapshot) => {
                    var events = [];
                    console.log(snapshot.val());
                    var childData = snapshot.val();
                    if(!childData.block){
                    if (childData) {
                      var a = new Date(
                        childData.start_date + " " + childData.start_time
                      );
                      var b = new Date(
                        tts.state.todayDate + " " + tts.state.nowTime
                      );
                      var c = new Date(
                        childData.end_date + " " + childData.end_time
                      );
                    }
                    var active = false;
                    if (childData) {
                      if (a <= b && c >= b) {
                        active = true;
                      }
                    }
                    if (childData) {
                      var x = {
                        id: index,
                        title: childData.name,
                        start: childData.start_date,
                        end: childData.end_date,
                        color: "#33B679",
                        textColor: "white",
                        token: childData.quiz_id,
                        start_time: childData.start_time,
                        end_time: childData.end_time,
                        eventType: "Quiz",
                         className:"evedisplay",
                         classroom:true,
                        status: active ? "Active" : "Inactive",
                        // display:'list-item',
                      };
                      events.push(x);

                      index++;
                    }
                    tts.setState({
                      arr: [...tts.state.arr, ...events],
                    });
                  }
                  });
              });
            });

            // Fetches Data about Tasks
            firebase
              .database()
              .ref("Tasks/classT")
              .once("value")
              .then((snapshot) => {
                var events = [];
                snapshot.forEach(function (childSnapshot) {
                  var childData = childSnapshot.val();
                  var arr = childData.data.classrooms;
                  var isTask = false;
                  for(let i of arr){
                    if(i.c_id === id){
                      isTask = true;
                      break;
                    }
                  }
                  if (isTask) {
                    var x = {
                      id: index,
                      title: childData.data.task_name,
                      start: childData.data.due_date,
                      color: "#D50000",
                      textColor: "white",
                      token: childData.data.task_id,
                      time: "00:00Am",
                      eventType: "Task",
                      classroom: true,
                       className:"evedisplay",
                      // display:'list-item',
                    };
                    events.push(x);
                    index++;
                  }
                });
                this.setState({
                  arr: [...this.state.arr, ...events],
                });
              });

            // fetches Meet Data
            firebase
              .database()
              .ref(`Classroom/${id}/data/meet`)
              .once("value")
              .then((snapshot) => {
                var events = [];
                snapshot.forEach(function (childSnapshot) {
                  var childData = childSnapshot.val();
                  if (childData) {
                    var x = {
                      id: index,
                      title: childData.data.title,
                      start: childData.data.date,
                      color: "#039BE5",
                      textColor: "white",
                      token: childData.data.id,
                      time: childData.data.start_time,
                      end_time: childData.data.end_time,
                      eventType: "Meet",
                      className:"evedisplay",
                      classroom:true,
                      // display:'list-item',
                      
                      meet_started: childData.data.meet_started ? childData.data.meet_started : 0,
                    };
                    events.push(x);
                    index++;
                  }
                });
                console.log(events);
                this.setState({
                  arr: [...this.state.arr, ...events],
                });
              });
          }
        });
    });
  }

  render() {
    const meta = {
      title: "Enroll Now",
      description: "TDPVista",
      canonical: "https://tiles.tdpvista.in",
      meta: {
        charset: "utf-8",
        name: {
          keywords:
            "tdpvista,support,contact,form,registration,learning,education,call,helpline,helpdesk,query",
        },
      },
    };
    return (
      <div className="MainDiv">
        <DocumentMeta {...meta} />

          <br></br><br></br><br></br><br></br>
        <Container>
          <Card className="mt--3 p-4">
            <FullCalendar
              // plugins={[dayGridPlugin, interactionPlugin]}
              initialView="dayGridMonth"
              dateClick={this.handleDateClick}
              events={this.state.arr}
            ></FullCalendar>
          </Card>
        </Container>

        </div>
    );
  }

  // handleDateClick = (arg) => {
  //   $("#myModal").modal("show");
  //   $(".modal-body").html("");
  //   $(".modal-title").html("<h3>" + arg.dateStr + "</h3>");
  //   display = [];
  //   console.log(arg.dateStr);

  //   var events = this.state.arr;
  //   var count = 0;
  //   for (var i = 0; i < events.length; i++) {
  //     if (events[i].start === arg.dateStr) {
  //       count++;
  //       if (events[i].eventType === "Quiz") {

  //         if(events[i].status == "Active"){
  //         display.push(

  //           `${events[i].title} <br> Start Time :- ${events[i].start_time}    End Time :- ${events[i].end_time} <br> Status :-  ${events[i].status}<br>
              
  //            <a href="/UserClass/Quizmain"> <button>Start Quiz</button></a>
  //           `
  //         )}
  //         else{

  //            display.push(
  //           `${events[i].title} <br> Start Time :- ${events[i].start_time}    End Time :- ${events[i].end_time} <br> Status :-  ${events[i].status}<br>
              
  //             Quiz Not Started
  //           `
  //         )
  //         }
       
        
  //       } else if (events[i].eventType === "Task") {

            
          

  //         display.push(`${events[i].title}: Token :- ${events[i].token} `);
  //       } 

  //       else {
  //         // check if month is old disable join button
  //         if (
  //           parseInt(arg.dateStr.substr(5, 7)) <
  //           parseInt(events[i].start.substr(5, 7))
  //         ) {
  //           display.push(`${events[i].title}: Token :- ${events[i].token} 
  //                           <a href="https://meet.jit.si/${events[i].token}"><button disabled style="background-color: #4CAF50; border: 2px solid #4CAF50; color: white">Join Meet</button></a> Expired
  //                        `);
  //         }
  //         // If month same but date is old disable join button
  //         else if (
  //           parseInt(arg.dateStr.substr(8, 10)) <
  //           parseInt(events[i].start.substr(8, 10))
  //         ) {
  //           display.push(`${events[i].title}: Token :- ${events[i].token} 
  //                           <a href="https://meet.jit.si/${events[i].token}"><button disabled style="background-color: #4CAF50; border: 2px solid #4CAF50; color: white">Join Meet</button></a> Expired
  //                        `);
  //         } else {
  //           if(events[i].meet_started === 0){
  //             display.push(`${events[i].title}: Token :- ${events[i].token} 
  //                           <a href="https://meet.jit.si/${events[i].token}"><button style="background-color: #4CAF50; border: 2px solid #4CAF50; color: white">Meet Not yet started</button></a>
  //                        `);  
  //           }
  //           else {
  //             display.push(`${events[i].title}: Token :- ${events[i].token} 
  //                             <a href="https://meet.jit.si/${events[i].token}"><button style="background-color: #4CAF50; border: 2px solid #4CAF50; color: white">Join Meet</button></a>
  //                          `);
  //           }
  //         }
  //       }
  //     } else if (events[i].end === arg.dateStr) {
  //       count++;
  //       display.push(
  //         `${events[i].title}: Token :- ${events[i].token} <br> End Time :- ${events[i].end_time}`
  //       );
  //     }
  //   }

  //   if (count === 0) {
  //     display.push("Nothing Scheduled Here!");
  //   }

  //   $(".modal-body").html(display.join("\n \n"));
  // };
}

DemoApp.layout = UserClassroom;
export default DemoApp;
