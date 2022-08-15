


 import React from "react";
 
 import classnames from "classnames";
 
 import Chart from "chart.js";
 
import { Line, Bar } from "react-chartjs-2";

import { Doughnut, Pie } from "react-chartjs-2";
 
 import firebase from "../../config/firebase-tiles";

 import {
   Button,
   Card,
   CardHeader,
   CardBody,
   NavItem,
   NavLink,
   Nav,
   Progress,
   Table,
   Container,
   Row,
   Col,
 } from "reactstrap";
  //layout for this page 
  //hAvOUbAX
 import User from "layouts/MentorClassroom.js";
  //core components
 import {
   chartOptions,
   parseOptions,
   chartExample1,
   chartExample2,
 } from "variables/charts.js";

 import Header from "components/Headers/MentorClass.js";
class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    var today = new Date(),
    date =
      today.getFullYear();
 
    this.state = {
      activeNav:"1",
      chartExample1Data:"data1",
      data:"",
      quiz:0,
      task:0,
      student:0,
 taskmonth: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      quizmonth: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      classmonth: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      attendance: 0,
       quizC: 0,
      classC: 0,
      taskC: 0,
      year:date,
    };
  }

  

  componentDidMount(){

       var ID = localStorage.getItem("id");

       
       firebase
         .database()
         .ref(`users/`)
         .once("value")
         .then((snapshot) => {
           var userdata = snapshot.val();
var tts =this;
                   console.log(userdata)

// console.log(userdata);

           snapshot.forEach((childSnapshot) => {
            var childData = childSnapshot.val();
            childData.classroom.map((item)=>{
if(item == ID){
  this.setState({student : this.state.student+1});
}
            })
           })




     })

     
          // **********************task Attendance******************

firebase.auth().onAuthStateChanged((user) => {
      firebase.database().ref(`mentors/${user.uid}`).once("value")
        .then((snap) => {
         

          firebase
            .database()
            .ref("Quiz/classQ/")
            .once("value")
            .then((snapshotquiz) => {
              // console.log(snapshotquiz.val())
              snapshotquiz.forEach((childSnapshotmeet) => {
                var quizData = childSnapshotmeet.val();
                if(quizData.data.mentor== user.uid){
                quizData.data.classrooms.map((item)=>{
 if (item.c_id == ID) {
                  this.setState({ quizC: this.state.quizC + 1 })


                }

                })}
               

              })


            })


          firebase
            .database()
            .ref("Tasks/classT")
            .once("value")
            .then((snapshotquiz) => {

              snapshotquiz.forEach((childSnapshotmeet) => {
                var quizData = childSnapshotmeet.val();
                // console.log(quizData)
                                quizData.data.classrooms.map((item)=>{
if(quizData.data.mentorId== user.uid){
                if (item.c_id == ID) {
                  this.setState({ taskC: this.state.taskC + 1 })


                }}
              })

              })


            })

            
                firebase
                  .database()
                  .ref("Classroom/" + ID + "/data/meet/")
                  .once("value")
                  .then((snapshotmeet) => {

                    snapshotmeet.forEach((childSnapshotmeet) => {
                      // console.log(childSnapshotmeet.val())


                      var meetData = childSnapshotmeet.val();
                      if (user.uid == meetData.data.mentorId) {
                        this.setState({ classC: this.state.classC + 1 })
                      }

                    })

                    // 
                  })



                firebase
                  .database()
                  .ref("Classroom/" + ID + "/data/task/")
                  .once("value")
                  .then((snapshottask) => {

                    snapshottask.forEach((childSnapshottask) => {
                      //  console.log(childSnapshottask.val())


                      var taskData = childSnapshottask.val();
                      firebase
                        .database()
                        .ref("Tasks/classT/" + taskData + "/data/")
                        .once("value")
                        .then((snapshotsubChildtask) => {

                          var mentorcheck = snapshotsubChildtask.val();
                          // console.log(mentorcheck)
                          if (mentorcheck.mentorId == user.uid) {
                            firebase
                              .database()
                              .ref("TaskSubmit/classT/" + ID + "/" + taskData + "/")
                              .once("value")
                              .then((snapshotsupersubChildtask) => {

                                // console.log(snapshotsupersubChildtask.val())
                                snapshotsupersubChildtask.forEach((useritem) => {
                                  //  console.log(useritem.val().data.submitDate);
                                  var submitdate = useritem.val().data.submitDate;
                                  var todayYear = submitdate[0] + submitdate[1]+ submitdate[2] + submitdate[3];
                                  if(todayYear == this.state.year){
                                  var month = submitdate[5] + submitdate[6];

                                  var nummonth = parseInt(month);
                                  nummonth = nummonth - 1;
                                  // taskmonth[nummonth] =  1 ;
                                  //  let taskmonth = [...this.state.taskmonth];
                                  //     let item = {...taskmonth[nummonth]};
                                  //     item = item + 1;
                                  //     taskmonth[1] = item;
                                  //     this.setState({taskmonth});
                                  const newItems = [...this.state.taskmonth];
                                  newItems[nummonth] = newItems[nummonth] + 1;
                                  this.setState({ taskmonth: newItems });
                                  // this.setState({taskmonth : this.state.taskmonth[nummonth] + 1});
                                  }

                                })
                              })
                          }
                        })

                    })

                    // 
                


            })

          // console.log(this.state.taskmonth)
          //*********** */ quiz attendance  **********************


         



                firebase
                  .database()
                  .ref("Classroom/" + ID + "/data/quiz/")
                  .once("value")
                  .then((snapshottask) => {

                    snapshottask.forEach((childSnapshottask) => {
                      // console.log(childSnapshottask.val())


                      var quizData = childSnapshottask.val();
                      console.log(quizData)
                      firebase
                        .database()
                        .ref("Quiz/classQ/" + quizData + "/data/")
                        .once("value")
                        .then((snapshotsubChildtask) => {

                          var mentorcheck = snapshotsubChildtask.val();
                          // console.log(mentorcheck)
                          if (mentorcheck.mentor == user.uid) {
                            firebase
                              .database()
                              .ref("Answers/Classroom/" + ID + "/" + quizData)
                              .once("value")
                              .then((snapshotsupersubChildtask) => {
                                snapshotsupersubChildtask.forEach((quizsubmitdata) => {


                                  var sudate = quizsubmitdata.val();
                                  console.log(sudate);
                                  var submitDates = sudate.submitDate;
                                  var todayYear = submitDates[0] + submitDates[1]+ submitDates[2] + submitDates[3];
                                  if(todayYear == this.state.year){
                                  var month = submitDates[5] + submitDates[6];

                                  var monthnum = parseInt(month);
                                  monthnum = monthnum - 1;
                                  // taskmonth[monthnum] =  1 ;
                                  //  let taskmonth = [...this.state.taskmonth];
                                  //     let item = {...taskmonth[monthnum]};
                                  //     item = item + 1;
                                  //     taskmonth[1] = item;
                                  //     this.setState({taskmonth});
                                  const newItems = [...this.state.quizmonth];
                                  newItems[monthnum] = newItems[monthnum] + 1;
                                  this.setState({ quizmonth: newItems });
                                  // this.setState({taskmonth : this.state.taskmonth[nummonth] + 1});

                                  }

                                })

                              })
                          }
                        })

                    })

                


            })
          // **********class Attendance**********
         


                firebase
                  .database()
                  .ref("Classroom/" + ID + "/data/meet/")
                  .once("value")
                  .then((snapshotclass) => {
                    snapshotclass.forEach((meets) => {
                      var meetdata = meets.val();
                      console.log(meetdata)
                       this.setState({ attendance: meetdata.data.attendance ? meetdata.data.attendance.length : 0 })


                        var submitDates = meetdata.data.date;
                        
                        var month = submitDates[5] + submitDates[6];
                        var todayYear = submitDates[0] + submitDates[1]+ submitDates[2] + submitDates[3];
                        if(todayYear == this.state.year){
                        var monthnum = parseInt(month);
                        monthnum = monthnum - 1;




                        const newItems = [...this.state.classmonth];
                        newItems[monthnum] = newItems[monthnum] + this.state.attendance;
                        this.setState({ classmonth: newItems });
                      


                        }

                    })
                  })
            
   
  
          })
        })
  }

 


   render(){
     
     const bardata = {
      labels: [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",

      ],
      datasets: [
        {
          label: "Classes",
          backgroundColor: "#039BE5",
          borderColor: "rgba(255,99,132,1)",
          borderWidth: 1,
          //stack: 1,
          hoverBackgroundColor: "#039BE5",
          hoverBorderColor: "rgba(255,99,132,1)",
          data: this.state.classmonth,
        },

        {
          label: "Quizes",
          backgroundColor: "#33B679",
          borderColor: "rgba(255,99,132,1)",
          borderWidth: 1,
          //stack: 1,
          hoverBackgroundColor: "#33B679",
          hoverBorderColor: "rgba(255,99,132,1)",
          data: this.state.quizmonth,
        },
        {
          label: "Tasks",
          backgroundColor: "#D50000",
          borderColor: "rgba(255,99,132,1)",
          borderWidth: 1,
          //stack: 1,
          hoverBackgroundColor: "#D50000",
          hoverBorderColor: "rgba(255,99,132,1)",
          data: this.state.taskmonth,
        }
      ]
    }

    const baroptions = {
      responsive: true,
      legend: {
        display: false
      },
      type: "bar"
      //   scales: {
      //     xAxes: [{
      //         stacked: true
      //     }],
      //     yAxes: [{
      //         stacked: true
      //     }]
      // }
    };



    const data = {
      maintainAspectRatio: true,
      responsive: false,
      labels: ["Classes", "Quiz", "Task"],
      datasets: [
        {
          label: 'Activity',
          backgroundColor: [
            '#039BE5',
            '#33B679',
            '#D50000',

          ],

          data: [this.state.classC , this.state.quizC , this.state.taskC ]
        }
      ]
    };
    
    
    return (
     <>
    
       <Header student={this.state.student ? this.state.student : "0"}    />
     
       {/* Page content */}
       <Container className="mt--7" fluid>
         <Row>
           <Col className="mb-5 mb-xl-0" xl="8">
             <Card className="shadow">
               <CardHeader className="bg-transparent">
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
                           onClick={(e) => toggleNavs(e, 1)}
                         >
                           <span className="d-none d-md-block">Month</span>
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
                          //  onClick={(e) => toggleNavs(e, 2)}
                         >
                           <span className="d-none d-md-block">Week</span>
                           <span className="d-md-none">W</span>
                         </NavLink>
                       </NavItem>
                     </Nav>
                   </div>
                 </Row>
               </CardHeader>
               <CardBody>
                 {/* Chart */}
                 <div className="chart">
                   {/* <Line
                    //  data={chartExample1[chartExample1Data]}
                    //  options={chartExample1.options}
                     getDatasetAtEvent={(e) => console.log(e)}
                   /> */}
                     <Bar
                    data={bardata}
                    width={null}
                    height={null}
                    options={baroptions}
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
                      data={data}
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
                 </div>
               </CardBody>
             </Card>
           </Col>
         </Row>
         <Row className="mt-5">
           <Col className="mb-5 mb-xl-0" xl="8">
             <Card className="shadow">
               <CardHeader className="border-0">
                 <Row className="align-items-center">
                   <div className="col">
                     <h3 className="mb-0">Page visits</h3>
                   </div>
                   <div className="col text-right">
                     <Button
                       color="primary"
                       href="#pablo"
                       onClick={(e) => e.preventDefault()}
                       size="sm"
                     >
                       See all
                     </Button>
                   </div>
                 </Row>
               </CardHeader>
               <Table className="align-items-center table-flush" responsive>
                 <thead className="thead-light">
                   <tr>
                     <th scope="col">Page name</th>
                     <th scope="col">Visitors</th>
                     <th scope="col">Unique users</th>
                     <th scope="col">Bounce rate</th>
                   </tr>
                 </thead>
                 <tbody>
                   <tr>
                     <th scope="row">/argon/</th>
                     <td>4,569</td>
                     <td>340</td>
                     <td>
                       <i className="fas fa-arrow-up text-success mr-3" /> 46,53%
                     </td>
                   </tr>
                   <tr>
                     <th scope="row">/argon/index.html</th>
                     <td>3,985</td>
                     <td>319</td>
                     <td>
                       <i className="fas fa-arrow-down text-warning mr-3" />{" "}
                       46,53%
                     </td>
                   </tr>
                   <tr>
                     <th scope="row">/argon/charts.html</th>
                     <td>3,513</td>
                     <td>294</td>
                     <td>
                       <i className="fas fa-arrow-down text-warning mr-3" />{" "}
                       36,49%
                     </td>
                   </tr>
                   <tr>
                     <th scope="row">/argon/tables.html</th>
                     <td>2,050</td>
                     <td>147</td>
                     <td>
                       <i className="fas fa-arrow-up text-success mr-3" /> 50,87%
                     </td>
                   </tr>
                   <tr>
                     <th scope="row">/argon/profile.html</th>
                     <td>1,795</td>
                     <td>190</td>
                     <td>
                       <i className="fas fa-arrow-down text-danger mr-3" />{" "}
                       46,53%
                     </td>
                   </tr>
                 </tbody>
               </Table>
             </Card>
           </Col>
           <Col xl="4">
             <Card className="shadow">
               <CardHeader className="border-0">
                 <Row className="align-items-center">
                   <div className="col">
                     <h3 className="mb-0">Social traffic</h3>
                   </div>
                   <div className="col text-right">
                     <Button
                       color="primary"
                       href="#pablo"
                       onClick={(e) => e.preventDefault()}
                       size="sm"
                     >
                       See all
                     </Button>
                   </div>
                 </Row>
               </CardHeader>
               <Table className="align-items-center table-flush" responsive>
                 <thead className="thead-light">
                   <tr>
                     <th scope="col">Referral</th>
                     <th scope="col">Visitors</th>
                     <th scope="col" />
                   </tr>
                 </thead>
                 <tbody>
                   <tr>
                     <th scope="row">Facebook</th>
                     <td>1,480</td>
                     <td>
                       <div className="d-flex align-items-center">
                         <span className="mr-2">60%</span>
                         <div>
                           <Progress
                             max="100"
                             value="60"
                             barClassName="bg-gradient-danger"
                           />
                         </div>
                       </div>
                     </td>
                   </tr>
                   <tr>
                     <th scope="row">Facebook</th>
                     <td>5,480</td>
                     <td>
                       <div className="d-flex align-items-center">
                         <span className="mr-2">70%</span>
                         <div>
                           <Progress
                             max="100"
                             value="70"
                             barClassName="bg-gradient-success"
                           />
                         </div>
                       </div>
                     </td>
                   </tr>
                   <tr>
                     <th scope="row">Google</th>
                     <td>4,807</td>
                     <td>
                       <div className="d-flex align-items-center">
                         <span className="mr-2">80%</span>
                         <div>
                           <Progress max="100" value="80" />
                         </div>
                       </div>
                     </td>
                   </tr>
                   <tr>
                     <th scope="row">Instagram</th>
                     <td>3,678</td>
                     <td>
                       <div className="d-flex align-items-center">
                         <span className="mr-2">75%</span>
                         <div>
                           <Progress
                             max="100"
                             value="75"
                             barClassName="bg-gradient-info"
                           />
                         </div>
                       </div>
                     </td>
                   </tr>
                   <tr>
                     <th scope="row">twitter</th>
                     <td>2,645</td>
                     <td>
                       <div className="d-flex align-items-center">
                         <span className="mr-2">30%</span>
                         <div>
                           <Progress
                             max="100"
                             value="30"
                             barClassName="bg-gradient-warning"
                           />
                         </div>
                       </div>
                     </td>
                   </tr>
                 </tbody>
               </Table>
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

