


import React from "react";

import classnames from "classnames";

import Chart from "chart.js";

import { Line, Bar } from "react-chartjs-2";
import { Doughnut, Pie } from "react-chartjs-2";

import firebase from "../../config/firebase-tiles";
import Progressbar from '../UserClass/progress';

import {
  Button,
  Card,
  CardHeader,
  CardBody,
  NavItem,
  NavLink,
  Nav,
 
  Table,
  Container,
  Row,
  Col,
} from "reactstrap";
//layout for this page 
//hAvOUbAX
import User from "layouts/UserWorkshop.js";
//core components
import {
  chartOptions,
  parseOptions,
  chartExample1,
  chartExample2,
} from "variables/charts.js";

import Header from "components/Headers/UserWorkshop.js";
class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    var today = new Date(), date = today.getFullYear();

    this.state = {
      activeNav: "1",
      chartExample1Data: "data1",
      userdata: "",
      user_id:"",
      totalProgress: 0,
      progress: 0,
      classes:0,
      quiz: 0,
      task: 0,
      barColor:'darkgreen',
      backBar:'lightgreen',
      totalarray:[],
      arraymonth: [],
      taskmonth: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      quizmonth: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      classmonth: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      totalquiz: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      totaltask: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
w_id:"",
      totalmeets: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      year:date,

    };
  }



  componentDidMount() {
    firebase.auth().onAuthStateChanged((user) => {
      firebase
        .database()
        .ref(`users/${user.uid}`)
        .once("value")
        .then((snap) => {
          var userdata = snap.val();
          //  console.log(userdata);
          this.setState({user_id : user.uid})

          var tts = this;
          this.setState({ userdata: userdata })
          let id = localStorage.getItem("w_id");
          this.setState({ w_id: id });
          if (id === undefined) {
            window.location.href = "/";
          }

// **************** Total data ***************

          
            firebase
              .database()
              .ref("Workshops/" + id + "/data/quiz")
              .once("value")
              .then((snapshot) => {
                snapshot.forEach((Childsnapshot) => {
                  var data = Childsnapshot.val();
                  firebase
                    .database()
                    .ref("Quiz/workshopQ/" + data + "/data/")
                    .once("value")
                    .then((ChildSubsnapshot) => {
                      var totalquizdata = ChildSubsnapshot.val();
                      // console.log(totalquizdata)
                      if(totalquizdata){


                        this.setState({ totalProgress: this.state.totalProgress + 1 });

                      var submitDates = totalquizdata.end_date;
                      var month = submitDates[5] + submitDates[6];
                      var todayYear = submitDates[0] + submitDates[1]+ submitDates[2] + submitDates[3];
                      if(todayYear == this.state.year){
                      var nummonth = parseInt(month);
                      nummonth = nummonth - 1;
                      const newItems = [...tts.state.totalquiz];

                      newItems[nummonth] = newItems[nummonth] + 1;
                      this.setState({ totalquiz: newItems , totalarray: newItems});
                      }
                    }

                    })


                })
              })
          

         
            firebase
              .database()
              .ref("Workshops/" + id + "/data/task")
              .once("value")
              .then((snapshot) => {
                snapshot.forEach((Childsnapshot) => {
                  var data = Childsnapshot.val();
                  firebase
                    .database()
                    .ref("Tasks/workshopT/" + data + "/data/")
                    .once("value")
                    .then((ChildSubsnapshot) => {
                      this.setState({ totalProgress: this.state.totalProgress + 1 });


                      var totalquizdata = ChildSubsnapshot.val();
                      //  console.log(totalquizdata)
                      var submitDates = totalquizdata.due_date;
                      var month = submitDates[5] + submitDates[6];
                      var todayYear = submitDates[0] + submitDates[1]+ submitDates[2] + submitDates[3];
                      if(todayYear == this.state.year){
                      var nummonth = parseInt(month);
                      nummonth = nummonth - 1;
                      const newItems = [...tts.state.totaltask];

                      newItems[nummonth] = newItems[nummonth] + 1;
                      this.setState({ totaltask: newItems });
                      }
                    })


                })
              })
          

         
            firebase
              .database()
              .ref("Workshops/" + id +"/data/meet")
              .once("value")
              .then((snapshot) => {
                var ClassData = snapshot.val();
                tts = this;
                snapshot.forEach((childSnapshot) => {

                  //  console.log(childSnapshot.val())
                   var meetData = childSnapshot.val();

                   childSnapshot.forEach((totalmeets)=>{
                    this.setState({ totalProgress: this.state.totalProgress + 1 });
                    // console.log(totalmeets.val());
var meetdates= totalmeets.val();

                      var submitDates = meetdates.date;
                      // console.log(submitDates);
                      var month = submitDates[5] + submitDates[6];
                        // console.log(month)
                        var todayYear = submitDates[0] + submitDates[1]+ submitDates[2] + submitDates[3];
                      if(todayYear == this.state.year){
                      var nummonth = parseInt(month);
                      nummonth = nummonth - 1;
                      //  console.log(nummonth)
                      const newItems = [...tts.state.totalmeets];

                      newItems[nummonth] = newItems[nummonth] + 1;
                      this.setState({ totalmeets: newItems });
                      }

                   })
                 
                 
                    

                  
                    
                   


                  

              
                  //  console.log(childSnapshot.hasChild(user.uid));

                })
              })
          

          



// ******************indiviaual data*************

          // console.log(userdata);
        
            firebase
              .database()
              .ref("Workshops/" + id +"/data/meet")
              .once("value")
              .then((snapshot) => {
                var ClassData = snapshot.val();
                tts = this;
                snapshot.forEach((childSnapshot) => {

                    //  console.log(childSnapshot.val())
                   var meetData = childSnapshot.val();
                   meetData.data.attendance ? meetData.data.attendance.map((userItem)=>{
                    if(userItem == user.uid){
                      this.setState({classes: this.state.classes + 1});
                       var submitDates = meetData.data.date;
                     var month = submitDates[5] + submitDates[6];
                     var todayYear = submitDates[0] + submitDates[1]+ submitDates[2] + submitDates[3];
                      if(todayYear == this.state.year){
                     var nummonth = parseInt(month);
                     nummonth = nummonth - 1;

                     const newItems = [...tts.state.classmonth];

                     newItems[nummonth] = newItems[nummonth] + 1;
                     this.setState({ classmonth: newItems });
                      }
                    }

                  })  : null
                    
                   
                  this.setState({ progress: this.state.progress + this.state.classes });

                  

              
                  //  console.log(childSnapshot.hasChild(user.uid));

                })
              })
          

         
            firebase
              .database()
              .ref("Answers/Workshops/" + id)
              .once("value")
              .then((snapshot) => {
                var ClassData = snapshot.val();
                tts = this;
                snapshot.forEach((childSnapshot) => {

                  // console.log(childSnapshot.val())
                  if (childSnapshot.child(user.uid)) {
                    var sudate = childSnapshot.child(user.uid).val();
                    // console.log(sudate);
                    var submitDates = sudate.submitDate;
                    console.log(submitDates);
                    var month = submitDates[3] + submitDates[4];
                    //  console.log(month)
                    var todayYear = submitDates[5] + submitDates[6]+ submitDates[7] + submitDates[8];
                      if(todayYear == this.state.year){
                    var nummonth = parseInt(month);
                    nummonth = nummonth - 1;
                    // console.log(nummonth)
                    const newItems = [...tts.state.quizmonth];

                    newItems[nummonth] = newItems[nummonth] + 1;
                    this.setState({ quizmonth: newItems, arraymonth: newItems });
                      }

                  }

                  if (childSnapshot.hasChild(user.uid)) {
                    tts.setState({ quiz: tts.state.quiz + 1 })
                  }
                  //  console.log(childSnapshot.hasChild(user.uid));

                  this.setState({ progress: this.state.progress + this.state.quiz });

                })
              })
          

          
            firebase
              .database()
              .ref("TaskSubmit/workshopT/" + id)
              .once("value")
              .then((snapshot) => {
                var ClassData = snapshot.val();

                snapshot.forEach(function (childSnapshot) {



                  console.log(childSnapshot.val())
                  childSnapshot.forEach((useritem) => {
                    var sudate = useritem.val();
                    var submitdate = sudate.data.submitDate;
                    // console.log(submitdate)
                    var month = submitdate[5] + submitdate[6];
                    var todayYear = submitdate[0] + submitdate[1]+ submitdate[2] + submitdate[3];
                    if(todayYear == tts.state.year){
                    var nummonth = parseInt(month);
                   //  console.log(month)
                    nummonth = nummonth - 1;
                  
                    const newItems = [...tts.state.taskmonth];
                    newItems[nummonth] = newItems[nummonth] + 1;
                    tts.setState({ taskmonth: newItems });
                    // this.setState({taskmonth : this.state.taskmonth[nummonth] + 1});
                    }


                  })


                  var childData = childSnapshot.val();
                  //  console.log(childData);
                  if (childSnapshot.hasChild(user.uid)) {
                    tts.setState({ task: tts.state.task + 1 })
                  }
                  //  console.log(childSnapshot.hasChild(user.uid));

                })

                this.setState({ progress: this.state.progress + this.state.task });
              })
          



        })




    })



  }

  toggleArr = (id) => {
    // task , id=1;
    if (id === 1) {
      this.setState({
        arraymonth: this.state.taskmonth,
        totalarray: this.state.totaltask,
        barColor:'Red',
        backBar:'#ffcccb',
      })
    }
    else if (id === 0) {
      this.setState({
        arraymonth: this.state.quizmonth,
        totalarray: this.state.totalquiz,
        barColor:'DarkGreen',
        backBar:'lightgreen',


      })
    }
    else if (id === 2) {
      this.setState({
        arraymonth: this.state.classmonth,
        totalarray: this.state.totalmeets,
        barColor:'Blue',
        backBar:'skyblue',


      })
    }

  }
  
  loadprogress =()=>{
    if(this.state.w_id){
    firebase.database().ref().child("Workshops/" + this.state.w_id +"/data/UserProgress/"+ this.state.user_id).set({
      progress: (this.state.totalProgress !==0 ? this.state.progress/this.state.totalProgress : 0) }) ; 
     
     
    }
  }


  render() {



    var data = {
      labels: ["January", "Feburary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
      datasets: [
        {
          label: "Attempted",
          backgroundColor: this.state.barColor,
          borderWidth: 1,
          data: this.state.arraymonth,
          xAxisID: "bar-x-axis1",
          yAxisID: "bar-y-axis1",
          stack: 1
        },
        {
          label: "Total",
          backgroundColor: this.state.backBar,
          borderWidth: 1,
          data: this.state.totalarray,
          yAxisID: "bar-y-axis2",
          xAxisID: "bar-x-axis1",
          stack: 1
        },
      ]
    };

    var options = {
      scales: {
        xAxes: [{
          stacked: true,
          id: "bar-x-axis1",
          barThickness: 15,
        },
        ],

        yAxes: [{
          id: "bar-y-axis1",
          stacked: false,
          ticks: {
            beginAtZero: true,
            max: 10,
          },
        },
        {
          id: "bar-y-axis2",
          display: false,
          stacked: true,
          ticks: {
            beginAtZero: true,
            max: 10,
          },
        }]

      }, legend: {
        display: false
      },
    };
    const piedata = {
      maintainAspectRatio: true,
      responsive: false,
      labels: ["Quiz", "Task", "Classes"],
      datasets: [
        {
          label: 'Activity',
          backgroundColor: [
            '#039BE5',
            '#33B679',
            '#D50000',

          ],

          data: [this.state.quiz, this.state.task, this.state.classes]
        }
      ]
    };



    return (
      <>

        <Header/>

        {/* Page content */}
        <Container className="mt--7" fluid>
          <Row>
            <Col className="mb-5 mb-xl-0" xl="8">
              <Card className="shadow">
                <CardHeader className="bg-transparent">
                  

                  <br></br>

<div style={{width:'50%',margin:'auto'}}> 
<h2>Your Progress</h2>
<Progressbar  display="visible" onChange={this.loadprogress()} progress={this.state.totalProgress !==0 ? Math.floor((this.state.progress/ this.state.totalProgress)*100) :0 } height={30} />

    </div>





    <Row className="align-items-center">
                    <div className="col">
                      <h6 className="text-uppercase text-light ls-1 mb-1">
                        Overview
                      </h6>
                      <h2 className="text-white mb-0">Sales value</h2>
                    </div>
                    <div className="col">
                      <Nav className="justify-content-end" pills>
                        <NavItem>
                          <NavLink
                            className={classnames("py-2 px-3", {
                              active: this.state.activeNav === 1,
                            })}
                            href="#pablo"
                            onClick={() => this.toggleArr(0)}
                          >
                            <span className="d-none d-md-block">Quiz</span>
                            <span className="d-md-none">M</span>
                          </NavLink>
                        </NavItem>
                        <NavItem>
                          <NavLink
                            className={classnames("py-2 px-3", {
                              active: this.state.activeNav === 2,
                            })}
                            data-toggle="tab"
                            href="#pablo"
                            onClick={() => this.toggleArr(1)}
                          >
                            <span className="d-none d-md-block">Task</span>
                            <span className="d-md-none">W</span>
                          </NavLink>
                        </NavItem>
                        <NavItem>
                          <NavLink
                            className={classnames("py-2 px-3", {
                              active: this.state.activeNav === 2,
                            })}
                            data-toggle="tab"
                            href="#pablo"
                            onClick={() => this.toggleArr(2)}
                          >
                            <span className="d-none d-md-block">Classes</span>
                            <span className="d-md-none">W</span>
                          </NavLink>
                        </NavItem>
                      </Nav>
                    </div>
                  </Row>
                </CardHeader>
                <CardBody style={{ padding: '1.5rem' }}>
                  {/* Chart */}
                  <div className="chart">
                  <div style={{ display: "flex", margin: 'auto', justifyContent: 'center', alignItems: "center" }}>
                    <span style={{ display: "flex", padding: "10px", alignItems: "center" }}><div style={{ height: "15px", width: '15px', backgroundColor: `${this.state.barColor}`, marginRight: "15px" }}></div> Attempted</span>
                    <span style={{ display: "flex", padding: "10px", alignItems: "center" }}><div style={{ height: "15px", width: '15px', backgroundColor: `${this.state.backBar}`, marginRight: "15px" }}></div> Total</span>
                  </div>
                    <Bar
                      data={data}
                      width={null}
                      height={null}
                      options={options}
                    />
                  </div>
                </CardBody>
              </Card>
            </Col>
            <Col xl="4">
              <Card className="shadow">
                <CardHeader className="bg-transparent">
                  <Row className="align-items-center">
                    <div className="col">
                      <h6 className="text-uppercase text-muted ls-1 mb-1">
                        Performance
                      </h6>
                      <h2 className="mb-0">Total orders</h2>
                    </div>
                  </Row>
                </CardHeader>
                <CardBody>
                  {/* Chart */}
                  <div className="chart">
                  <Pie style={{ height: "100%", width: '100%', padding: '0px' }}
                      data={piedata}
                      options={{
                        title: {
                          display: false,

                          fontSize: 20
                        },
                        legend: {
                          display: false,
                          position: 'right',
                          width: '10%',
                          fontSize: 25,
                        }
                      }}
                    />
                     <div className="legends" style={{ textAlign: 'center', alignItems: 'center', justifyContent: 'center', marginTop: "40px",paddingTop:'20px', margin: 'auto', width: '30%' }}>
                      <div style={{ display: 'flex', alignItems: 'center', margin: 'auto' }}> <div class="circle" style={{ height: '15px', width: '15px', backgroundColor: '#039BE5', borderRadius: '50%', marginRight: '20px' }}></div><h3>Classes</h3></div>
                      <div style={{ display: 'flex', alignItems: 'center', margin: 'auto' }}> <div class="circle" style={{ height: '15px', width: '15px', backgroundColor: '#33B679', borderRadius: '50%', marginRight: '20px' }}></div><h3>Task</h3></div>
                      <div style={{ display: 'flex', alignItems: 'center', margin: 'auto' }}> <div class="circle" style={{ height: '15px', width: '15px', backgroundColor: '#D50000', borderRadius: '50%', marginRight: '20px' }}></div><h3>Quiz</h3></div>
                    </div>
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>
       
        </Container>


      </>
    )
  };
};
Dashboard.layout = User;

export default Dashboard;

