import React from "react";
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
//import dynamic from "next/dynamic";
import FullCalendar from "../../components/fullCalendarAdmin";
// const FullCalendar = dynamic(() => import("Components/Navbars/WorkshopNavbar.js"))
// const dayGridPlugin = dynamic(() => import("@fullcalendar/daygrid"))
// const interactionPlugin = dynamic(() => import('@fullcalendar/interaction'))
// import FullCalendar from '@fullcalendar/react' // must go before plugins
// import {FullCalendar} from 
// import dayGridPlugin from '@fullcalendar/daygrid' // a plugi
// import interactionPlugin from '@fullcalendar/interaction'
// import 'bootstrap/dist/css/bootstrap.min.css';
// if (typeof window !== "undefined" && FullCalendar) {
//     require('bootstrap/dist/js/bootstrap.min.js');
// require("popper.js");
// require("bootstrap");
// }
// import 'bootstrap/dist/js/bootstrap.min.js';
//jquery, popper.js libraries for bootstrap modal
// import 'jquery/dist/jquery.min.js'; 
// import 'popper.js/dist/umd/popper.min.js'
//import $ from 'jquery';
import Workshop from "layouts/Workshop.js";
import { useState } from 'react';
import Header from "components/Headers/admin.js";


import firebase from "../../config/firebase-tiles";

let display = [];
// function getRandomColor() {
//     var letters = 'BCDEF'.split('');
//     var color = '#';
//     for (var i = 0; i < 6; i++) {
//         color += letters[Math.floor(Math.random() * letters.length)];
//     }
//     return color;
// }

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
            w_id: "",
            arr: [],
            todayDate: todayDate,
            nowTime: time,
            quizes: 0,
            classes: 0,
            tasks: 0,
        }
    }

    componentDidMount() {

        firebase.auth().onAuthStateChanged((user) => {
            firebase.database().ref(`Admin/${user.uid}`).once("value")
                .then((snapshot) => {
                    var data = snapshot.val();
                    if (data.type === 1) {
                        var tts = this;
                        // var currenturl = window.location.search;
                        // var currenturlsearch = new URLSearchParams(currenturl);
                        // var id = currenturlsearch.get("id");
                        let id = localStorage.getItem("w_id");

                        if (id === undefined) {
                            window.location.href = "/";
                        }
                        this.setState({ w_id: id });
                        var index = 0;

                        // Fetches Data About Quiz
                        const db = firebase.database();
                        const ref = db.ref("Quiz/workshopQ");
                        ref.once("value").then((snapshot) => {
                            var events = [];
                            snapshot.forEach(function (childSnapshot) {
                                var childData = childSnapshot.val();
                                if (childData.data.w_id === id) {
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

                                    var x = {
                                        id: index,
                                        title: childData.data.name,
                                        start: childData.data.start_date,
                                        end: childData.data.end_date,
                                        color: "#33B679",
                                        textColor: "white",
                                        token: childData.data.quiz_id,
                                        start_time: childData.data.start_time,
                                        end_time: childData.data.end_time,
                                        className: "evedisplay",
                                        eventType: "Quiz",
                                        status: active ? "Active" : "Inactive",
                                        blocked: childData.data.block,
                                    }
                                    // var x = {
                                    //     id: index,
                                    //     title: childData.data.name,
                                    //     start: childData.data.start_date,
                                    //     end: childData.data.end_date,
                                    //     color: "#33B679",
                                    //     textColor: 'white',
                                    //     token: childData.data.quiz_id,
                                    //     start_time: childData.data.start_time,
                                    //     end_time: childData.data.end_time,
                                    //     className:"evedisplay",
                                    //     eventType: "Quiz",
                                    // }
                                    events.push(x);
                                    index++;

                                }
                            });
                            this.setState({
                                arr: [...events],
                            })
                        });

                        // Fetches Data about Tasks
                        firebase.database()
                            .ref("Tasks/workshopT")
                            .once("value")
                            .then((snapshot) => {
                                var events = [];
                                snapshot.forEach(function (childSnapshot) {
                                    var childData = childSnapshot.val();
                                    if (childData.data.w_id === id) {
                                        var x = {
                                            id: index,
                                            w_id: id,
                                            title: childData.data.task_name,
                                            start: childData.data.due_date,
                                            color: "#D50000",
                                            textColor: "white",
                                            token: childData.data.task_id,
                                            time: "00:00Am",
                                            eventType: "Task",
                                            classroom: false,
                                            admin: true,
                                            className: "evedisplay",
                                        }
                                        events.push(x);
                                        index++;
                                    }
                                });
                                this.setState({
                                    arr: [...this.state.arr, ...events],
                                })
                            });

                        // fetches Meet Data
                        firebase.database()
                            .ref(`Workshops/${id}/data/meet`)
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
                                            className: "evedisplay",
                                            meet_started: childData.data.meet_started ? childData.data.meet_started : 0,
                                        }
                                        events.push(x);
                                        index++;
                                    }
                                });
                                this.setState({
                                    arr: [...this.state.arr, ...events],
                                })
                            });
                    }
                    else {
                        window.location.href = "/";
                    }
                })

        })



    }
    render() {
        return (
            <div className="MainDiv">
                <Header />
                <Container>
                    <Card className="mt--7 p-4">
                        <FullCalendar
                            // plugins={[dayGridPlugin, interactionPlugin]}
                            initialView="dayGridMonth"
                            dateClick={this.handleDateClick}
                            events={this.state.arr}
                        />
                    </Card>

                </Container>

                {/* <div className="modal" id="myModal">
                    <div className="modal-dialog">
                        <div className="modal-content">

                            <div className="modal-header">
                                <h4 className="modal-title align-center"></h4>
                                <button type="button" className="close" data-dismiss="modal">&times;</button>
                            </div>

                            <div style={{ padding: '15px', fontSize: '16px', width: '100%', lineHeight: '1.5', display: 'block' }}>
                                <div className="modal-body " style={{ whiteSpace: 'pre-line' }}>
                                    <h3></h3>
                                </div>
                            </div>

                            <div className="modal-footer">
                                <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
                            </div>
                        </div>
                    </div>
                </div> */}

            </div>

        )
    }


    //     handleDateClick = (arg) => {

    //         $("#myModal").modal("show");
    //         $(".modal-body").html("");
    //         $(".modal-title").html("<h3>" + arg.dateStr + "</h3>");
    //         display = [];
    //         console.log(arg.dateStr);

    //         var events = this.state.arr;
    //         var count = 0;
    //         for (var i = 0; i < events.length; i++) {
    //             if (events[i].start === arg.dateStr) {
    //                 count++;
    //                 if (events[i].eventType === "Quiz") {
    //                     display.push(`${events[i].title}: Token :- ${events[i].token} <br> Start Time :- ${events[i].start_time}`)
    //                 }
    //                 else if (events[i].eventType === "Task") {
    //                     display.push(`${events[i].title}: Token :- ${events[i].token} `)
    //                 }
    //                 else {
    //                     // check if month is old disable join button
    //                     if (parseInt(arg.dateStr.substr(5, 7)) < parseInt(events[i].start.substr(5, 7))) {
    //                         display.push(`${events[i].title}: Token :- ${events[i].token} 
    //                             <a href="https://meet.jit.si/${events[i].token}"><button disabled style="background-color: #4CAF50; border: 2px solid #4CAF50; color: white">Join Meet</button></a> Expired
    //                          `)
    //                     }
    //                     // If month same but date is old disable join button
    //                     else if (parseInt(arg.dateStr.substr(8, 10)) < parseInt(events[i].start.substr(8, 10))) {
    //                         display.push(`${events[i].title}: Token :- ${events[i].token} 
    //                             <a href="https://meet.jit.si/${events[i].token}"><button disabled style="background-color: #4CAF50; border: 2px solid #4CAF50; color: white">Join Meet</button></a> Expired
    //                          `)
    //                     }
    //                     else {
    //                         display.push(`${events[i].title}: Token :- ${events[i].token} 
    //                             <a href="https://meet.jit.si/${events[i].token}"><button style="background-color: #4CAF50; border: 2px solid #4CAF50; color: white">Join Meet</button></a>
    //                          `)
    //                     }

    //                 }
    //             }
    //             else if (events[i].end === arg.dateStr) {
    //                 count++;
    //                 display.push(`${events[i].title}: Token :- ${events[i].token} <br> End Time :- ${events[i].end_time}`)
    //             }

    //         }

    //         if(count === 0){
    //             display.push("Nothing Scheduled Here!");
    //         }


    //         $(".modal-body").html(display.join("\n \n"))

    //     }
}

DemoApp.layout = Workshop;
export default DemoApp;