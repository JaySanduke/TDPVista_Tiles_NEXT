import React, { Component } from 'react'
import { Card, Form, FormGroup, Input, label, Button, Container, CardBody } from 'reactstrap'
import { useState } from 'react';
import MentorClassroom from "layouts/MentorClassroom.js";
import Header from "components/Headers/Header.js";
import firebase from "config/firebase-tiles";
import DataTable from 'react-data-table-component';
let events = [];

class AdminCalendar extends React.Component {
    constructor(props) {
        super(props);
        var today = new Date(),
            date =
                today.getFullYear() +
                "-" +
                ((today.getMonth() + 1 < 10 ? "0" : "") + (today.getMonth() + 1)) +
                "-" +
                ((today.getDate() < 10 ? "0" : "") + today.getDate());

        this.handleTitle = this.handleTitle.bind(this);
        this.handleDate = this.handleDate.bind(this);
        this.handleStartTime = this.handleStartTime.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleEndTime = this.handleEndTime.bind(this);
        this.state = {
            title: "",
            Date: "",
            start: "00:00:59",
            end: "00:00:59",
            c_id: "",
            meet_data: [],
            today_date: date,
            mentorId:"",
        }
    }

    componentDidMount() {

        firebase.auth().onAuthStateChanged((user) => {
            firebase.database().ref(`mentors/${user.uid}`).once("value")
                .then((snap) => {
                    this.setState({mentorId: user.uid});
                    var d = snap.val();
                    if (d && d.type === 2) {
                        let id = localStorage.getItem("id");
                        this.setState({ id: id });
                        this.setState({ c_id: id });

                        var x = [];
                        const db = firebase.database();
                        const ref = db.ref(`Classroom/${id}/data/meet`);
                        ref.once("value").then((snapshot) => {
                            snapshot.forEach(function (childSnapshot) {
                                console.log(childSnapshot);
                                var childData = childSnapshot.val();
                                x.push(childData);
                            })
                            var data = snapshot.val();
                            if (data) {
                                console.log(x);
                                this.setState({ meet_data: x })
                            }
                        })

                    }
                    else {
                        alert("only admins allowed ");
                        window.location.href = "/";
                    }
                })
        })
    }

    handleTitle = (e) => {
        this.setState({ title: e.target.value });
    }

    handleDate = (e) => {
        this.setState({ Date: e.target.value });
    }

    handleStartTime = (e) => {
        this.setState({ start: e.target.value });
    }

    handleEndTime = (e) => {
        this.setState({ end: e.target.value });
    }

    deleteMeet = (id) => {
        firebase.database().ref(`Classroom/${this.state.c_id}/data/meet`).child(id).remove();
        var x = this.state.meet_data.filter((item) => item.data.id !== id);
        this.setState({
            meet_data: x,
        })
    }

    enableMeet = (id) => {
        firebase.database().ref(`Classroom/${this.state.c_id}/data/meet/${id}/data`).update({
            meet_started: 1,
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        if (this.state.title === "") alert("Enter Title");
        else if (this.state.Date === "") alert("Enter Date");
        else if (this.state.start === "") alert("Enter Start Time");
        else if (this.state.end === "") alert("Enter End Time");
        else {
            var meet_id = firebase.database().ref("blogs").push().key;
            var x = {
                title: this.state.title,
                date: this.state.Date,
                start_time: this.state.start,
                end_time: this.state.end,
                id: meet_id,
                meet_started: 0,
                mentorId:this.state.mentorId,
            }
            firebase
                .database()
                .ref(`Classroom/${this.state.c_id}/data/meet/${meet_id}`)
                .set({
                    data: x,
                }).then(() => {
                    alert("Meeting Scheduled Successfully");
                    this.setState({
                        title: "",
                        Date: "",
                        start: "00:00:59",
                        end: "00:00:59",
                        meet_data: [...this.state.meet_data, { data: x }],
                    })
                }).then(() => {
                    console.log(this.state.meet_data);
                });
        }

    };

    render() {
        const header = [
            { name: "Title", selector: "title" },
            { name: "Date", selector: "date" },
            { name: "Start Time", selector: "start_time" },
            { name: "End Time", selector: "end_time" },
            { name: "Delete", selector: "btn" },
            { name: "Join", selector: "joinBtn" },
        ];

    
        var today = new Date(),
            todayDate =
                today.getFullYear() +
                "-" +
                ((today.getMonth() + 1 < 10 ? "0" : "") + (today.getMonth() + 1)) +
                "-" +
                ((today.getDate() < 10 ? "0" : "") + today.getDate());

                var time = today.getHours() + ":" + today.getMinutes();

                var todayHour = parseInt(today.getHours());
                var todayMinutes = parseInt(today.getMinutes());
        var todayYear = parseInt(today.getFullYear());
        var todayMonth = parseInt(today.getMonth);
        var todayDay = parseInt(today.getDate());

        const body = this.state.meet_data.map((item) => {
            console.log(item.data.start_time);
            console.log(todayDate, item.data.date);
            var meetStartHour = parseInt(item.data.start_time.slice(0, 2));
            var meetEndHour = parseInt(item.data.end_time.slice(0, 2));
            var meetstartMinutes = parseInt(item.data.start_time.slice(2, 5));
            var meetEndMinutes = parseInt(item.data.end_time.slice(2, 5));
            var meetYear = parseInt(item.data.date.slice(0, 4));
            var meetMonth = parseInt(item.data.date.slice(5, 7 ));
            var meetDay = parseInt(item.data.date.slice(8, 10));
            var enableJoin = false;
            var msg = "";
            if(item.data.date === todayDate ){
                if(todayHour === meetStartHour && todayMinutes >= meetstartMinutes){
                    enableJoin = true; 
                }
                else if(todayHour === meetEndHour && todayMinutes <= meetEndMinutes){
                    enableJoin = true; 
                }
                else if(todayHour >= meetStartHour 
                    // && todayHour <= meetEndHour
                    ){
                    enableJoin = true; 
                }
            }
            else if(todayYear > meetYear || todayMonth > meetMonth || todayDay > meetDay){
                msg = "Meet has ended";
            } else {
                msg = "Not yet Started"
            }
            return {
                title: item.data.title,
                date: item.data.date,
                start_time: item.data.start_time,
                end_time: item.data.end_time,
                btn: (
                    <Button size="sm" color="danger"
                        onClick={() => this.deleteMeet(item.data.id)}
                    >Delete
                    </Button>
                ),
                joinBtn: ( enableJoin ?
                    <a href={"/Meet/jitsi?id=" + item.data.id}><Button onClick={() => this.enableMeet(item.data.id)} color="success">Start Meet</Button></a>
                    : <Button>{msg}</Button>
                )
            }
        })

        return (
            <>
                
                    

                        <Header />
                        <Container className='mt--7' style={{zIndex: 100 , width: '60%',}} fluid>
                            <Card>
                                <CardBody>
                            <Form style={{ width: '500px', margin: 'auto', background: '#fff', padding: '20px 70px', alignItems: 'center', justifyContent: 'center' , zIndex:10}}>
                                <h1 style={{ textAlign: 'center' }}>Class Scheduler</h1>
                                <hr />
                                <FormGroup style={{}}>
                                    <label htmlFor="exampleFormControlInput1">Subject</label>
                                    <Input
                                        id="exampleFormControlInput1"
                                        placeholder="Title"
                                        onChange={this.handleTitle}
                                        value={this.state.title}
                                        name="title"
                                        type="text"
                                        required
                                    ></Input>
                                </FormGroup>
                                <FormGroup>
                                    <label className=" form-control-label" htmlFor="example-date-input">
                                        Date
                                    </label>
                                    <Input
                                        min={this.state.today_date}
                                        defaultValue="2018-11-23"
                                        id="example-date-input"
                                        type="date"
                                        name="start"
                                        onChange={this.handleDate}
                                        value={this.state.Date}
                                        required
                                    ></Input>
                                </FormGroup>
                                <FormGroup style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap' }}>
                                    <div>
                                        <label className=" form-control-label" htmlFor="example-time-input">
                                            Start Time
                                        </label>
                                        <Input
                                        //   Defaultvalue="16:32:55"
                                            id="example-time-input"
                                            style={{ width: '150px' }}
                                            value={this.state.start}
                                            name="time"
                                            onChange={this.handleStartTime}
                                            type="time"
                                            
                                            required
                                        ></Input>
                                    </div>
                                    <div>

                                        <label className=" form-control-label" htmlFor="example-time-input">
                                            End Time
                                        </label>
                                        <Input
                                            //   defaultValue="10:30:00"
                                            min={this.state.start}
                                            id="example-time-input"
                                            style={{ width: '150px' }}
                                            type="time"
                                            onChange={this.handleEndTime}
                                            value={this.state.end}
                                            required

                                        ></Input>

                                    </div>

                                </FormGroup>
                                <FormGroup style={{ justifyContent: 'center', alignItems: 'center', }}>
                                    <Button onClick={this.handleSubmit} style={{ margin: 'auto', width: '100px', }} color="primary" type="button">
                                        Schedule Class
                                    </Button>
                                </FormGroup>
                            </Form>
                            </CardBody>
                            </Card>
                        </Container>

                        <Card className="m-5  ">
                            <DataTable
                                title="Meets"
                                columns={header}
                                data={body}
                                pagination={true}
                            />
                        </Card>
                    
                
            </>
        )
    }
}

export default AdminCalendar;

AdminCalendar.layout = MentorClassroom;

