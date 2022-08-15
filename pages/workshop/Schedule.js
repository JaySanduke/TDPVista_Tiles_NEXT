import React, { Component } from 'react'
import { Card, Form, FormGroup, Input, label, Button } from 'reactstrap'
import { useState } from 'react';
import Workshop from "layouts/Workshop.js";
import Header from "components/Headers/admin.js";

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
            start: "",
            end: "",
            w_id: "",
            meet_data: [],
            today_date: date,
        }
    }

    componentDidMount() {

        firebase.auth().onAuthStateChanged((user) => {
            firebase.database().ref(`Admin/${user.uid}`).once("value")
                .then((snap) => {
                    var d = snap.val();
                    if (d && d.type === 1) {
                        // var currenturl = window.location.search;
                        // var currenturlsearch = new URLSearchParams(currenturl);
                        // var id = currenturlsearch.get("id");
                        var id = localStorage.getItem("w_id");

                        this.setState({ w_id: id });

                        var x = [];
                        const db = firebase.database();
                        const ref = db.ref(`Workshops/${id}/data/meet`);
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
        firebase.database().ref(`Workshops/${this.state.w_id}/data/meet`).child(id).remove();
        var x = this.state.meet_data.filter((item) => item.data.id !== id);
        this.setState({
            meet_data: x,
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
            }
            firebase
                .database()
                .ref(`Workshops/${this.state.w_id}/data/meet/${meet_id}`)
                .set({
                    data: x,
                }).then(() => {
                    alert("Meeting Scheduled Successfully");
                    this.setState({
                        title: "",
                        Date: "",
                        start: "",
                        end: "",
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
        ];

        const body = this.state.meet_data.map((item) => {
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
                )
            }
        })

        return (
            <>
                <div>
                    <html>

                        <Header />
                        <div>
                            <Form style={{ width: '500px', margin: 'auto', background: '#fff', padding: '20px 70px', marginTop: '10%', alignItems: 'center', justifyContent: 'center' }}>
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
                                            //   defaultValue="10:30:00"
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
                        </div>

                        <Card className="m-5  ">
                            <DataTable
                                title="Meets"
                                columns={header}
                                data={body}
                                pagination={true}
                            />
                        </Card>
                    </html>
                </div>
            </>
        )
    }
}

export default AdminCalendar;

AdminCalendar.layout = Workshop;

