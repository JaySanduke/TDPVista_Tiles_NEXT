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
import Mentor from "layouts/Mentor.js";
import Router from "next/router";

//core components
import {
  chartOptions,
  parseOptions,
  chartExample1,
  chartExample2,
} from "variables/charts.js";

import Header from "components/Headers/mentor.js";


class Dashboard extends React.Component {

  constructor(props) {
    super(props);

    var today = new Date(),
    date =
      today.getFullYear();

    this.state = {
      activeNav: "1",
      chartExample1Data: "data1",
      classroom: 0,
      work: 0,
      userC: 0,
      userW: 0,
      quizC: 0,
      classC: 0,
      taskC: 0,
      quizW: 0,
      taskW: 0,
      classW: 0,
      taskmonth: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      quizmonth: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      meetsmonth: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],

      classTask: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      classQuiz: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      classMeets: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],

      workTask: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      workQuiz: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      workMeets: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      attendance: 0,
      year:date,



    };
  }




  componentDidMount() {
    firebase.auth().onAuthStateChanged((user) => {
      firebase.database().ref(`mentors/${user.uid}`).once("value")
        .then((snap) => {
         var mentorCheck = snap.val();
         if(mentorCheck.blocked == 1){
           Router.push("/");
         }
          var tts = this;
          firebase
            .database()
            .ref("mentors/" + user.uid + "/classrooms/")
            .once("value")
            .then((snapshot) => {

              this.setState({ classroom: snapshot.numChildren() })

              console.log(snapshot.val());

            })

          firebase
            .database()
            .ref("mentors/" + user.uid + "/workshops/")
            .once("value")
            .then((snapshot) => {

              this.setState({ work: snapshot.numChildren() })
            })


          //    firebase
          // .database()
          // .ref("Mentors")
          // .once("value")
          // .then((snapshot) => {

          //   setmentor(snapshot.numChildren())

          // })

          firebase
            .database()
            .ref("mentors/" + user.uid + "/classrooms/")
            .once("value")
            .then((snapshot) => {
              // console.log(snapshot.val());
              var mentordata = snapshot.val();

              mentordata.map((item2) => {
                // console.log(item2);


                firebase
                  .database()
                  .ref("users")
                  .once("value")
                  .then((snapshot) => {
                    var data = snapshot.val();
                    snapshot.forEach(function (childSnapshot) {
                      var childData = childSnapshot.val();
                      // console.log(childData);
                      childData.classroom.map((item) => {
                        //  console.log(item);
                        if (item == item2) {
                          tts.setState({ userC: tts.state.userC + 1 })
                        }
                      })


                    })
                  })
              })

            })



          firebase
            .database()
            .ref("mentors/" + user.uid + "/workshops/")
            .once("value")
            .then((snapshot) => {
              //  console.log(snapshot.val());
              var mentordata = snapshot.val();

              mentordata.map((item3) => {
                // console.log(item2);


                firebase
                  .database()
                  .ref("users")
                  .once("value")
                  .then((snapshot) => {
                    var data = snapshot.val();
                    snapshot.forEach(function (childSnapshot) {
                      var childData = childSnapshot.val();
                       console.log(childData);
                       childData.workshop ? childData.workshop.map((item4) => {
                        //  console.log(item);
                        if (item4 == item3) {
                          tts.setState({ userW: tts.state.userW + 1 })
                        }
                      }) : null;


                    })
                  })
              })

            })


          firebase
            .database()
            .ref("Quiz/classQ")
            .once("value")
            .then((snapshotquiz) => {
              // console.log(snapshotquiz.val())
              snapshotquiz.forEach((childSnapshotmeet) => {
                var quizData = childSnapshotmeet.val();
                if (quizData.data.mentor == user.uid) {
                  tts.setState({ quizC: tts.state.quizC + 1 })


                }


              })


            })

          firebase
            .database()
            .ref("Quiz/workshopQ")
            .once("value")
            .then((snapshotquizw) => {
              // console.log(snapshotquizw.val())
              snapshotquizw.forEach((childSnapshotmeetw) => {
                var quizData = childSnapshotmeetw.val();
                if (quizData.data.mentor == user.uid) {
                  tts.setState({ quizW: tts.state.quizW + 1 })


                }


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
                if (quizData.data.mentorId == user.uid) {
                  tts.setState({ taskC: tts.state.taskC + 1 })


                }


              })


            })

          firebase
            .database()
            .ref("Tasks/workshopT")
            .once("value")
            .then((snapshotquiz) => {

              snapshotquiz.forEach((childSnapshotmeet) => {
                var quizData = childSnapshotmeet.val();
                // console.log(quizData)
                if (quizData.data.mentorId == user.uid) {
                  tts.setState({ taskW: tts.state.taskW + 1 })


                }


              })


            })




          firebase
            .database()
            .ref("mentors/" + user.uid + "/classrooms/")
            .once("value")
            .then((snapshot) => {

              //console.log(snapshot.val());
              var childClass = snapshot.val();

              childClass.map((item) => {



                firebase
                  .database()
                  .ref("Classroom/" + item + "/data/meet/")
                  .once("value")
                  .then((snapshotmeet) => {

                    snapshotmeet.forEach((childSnapshotmeet) => {
                      // console.log(childSnapshotmeet.val())


                      var meetData = childSnapshotmeet.val();
                      if (user.uid == meetData.data.mentorId) {
                        tts.setState({ classC: tts.state.classC + 1 })
                      }

                    })

                    // 
                  })




              })


            })



          firebase
            .database()
            .ref("mentors/" + user.uid + "/workshops/")
            .once("value")
            .then((snapshot) => {

              // console.log(snapshot.val());
              var childClass = snapshot.val();

              childClass.map((item) => {



                firebase
                  .database()
                  .ref("Workshop/" + item + "/data/meet/")
                  .once("value")
                  .then((snapshotmeet) => {

                    snapshotmeet.forEach((childSnapshotmeet) => {
                      // console.log(childSnapshotmeet.val())


                      var meetData = childSnapshotmeet.val();
                      if (user.uid == meetData.data.mentorId) {
                        tts.setState({ classW: tts.state.classW + 1 })
                      }

                    })

                    // 
                  })




              })


            })


          // **********************task Attendance******************


          firebase
            .database()
            .ref("mentors/" + user.uid + "/classrooms/")
            .once("value")
            .then((snapshot) => {

              // console.log(snapshot.val());
              var childClass = snapshot.val();

              childClass.map((item) => {



                firebase
                  .database()
                  .ref("Classroom/" + item + "/data/task/")
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
                              .ref("TaskSubmit/classT/" + item + "/" + taskData + "/")
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
                                  
                                  const newItems = [...this.state.classTask];
                                  newItems[nummonth] = newItems[nummonth] + 1;
                                  this.setState({ classTask: newItems , taskmonth: newItems });
                                  // this.setState({taskmonth : this.state.taskmonth[nummonth] + 1});
                                  }

                                })
                              })
                          }
                        })

                    })

                    // 
                  })




              })


            })

          // console.log(this.state.taskmonth)
          //*********** */ quiz attendance  **********************


          firebase
            .database()
            .ref("mentors/" + user.uid + "/classrooms/")
            .once("value")
            .then((snapshot) => {

              // console.log(snapshot.val());
              var childClass = snapshot.val();

              childClass.map((item) => {



                firebase
                  .database()
                  .ref("Classroom/" + item + "/data/quiz/")
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
                              .ref("Answers/Classroom/" + item + "/" + quizData)
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
                                
                                  const newItems = [...this.state.classQuiz];
                                  newItems[monthnum] = newItems[monthnum] + 1;
                                  this.setState({ classQuiz: newItems , quizmonth: newItems });
                                  // this.setState({taskmonth : this.state.taskmonth[nummonth] + 1});

                                  }

                                })

                              })
                          }
                        })

                    })

                    // 
                  })




              })


            })
          // **********class Attendance**********
          firebase
            .database()
            .ref("mentors/" + user.uid + "/classrooms/")
            .once("value")
            .then((snapshot) => {

              // console.log(snapshot.val());
              var childClass = snapshot.val();

              childClass.map((item) => {



                firebase
                  .database()
                  .ref("Classroom/" + item + "/data/meet/")
                  .once("value")
                  .then((snapshotclass) => {
                    snapshotclass.forEach((meets) => {
                      var meetdata = meets.val();
                      console.log(meetdata)
                         this.setState({ attendance:meetdata.data.attendance? meetdata.data.attendance.length :0 })
                       

                        var submitDates = meetdata.data.date;
                        var month = submitDates[5] + submitDates[6];
                        var todayYear = submitDates[0] + submitDates[1]+ submitDates[2] + submitDates[3];
                        if(todayYear == this.state.year){
                        var monthnum = parseInt(month);
                        monthnum = monthnum - 1;

                        console.log(this.state.attendance);


                        const newItems = [...this.state.classMeets];
                        newItems[monthnum] = newItems[monthnum] + this.state.attendance;
                        this.setState({classMeets: newItems, meetsmonth: newItems });
                        }
                      

})


                    
                  })
              })
            })



            // ************ Workshops ***************

            // workshop Task
            firebase
            .database()
            .ref("mentors/" + user.uid + "/workshops/")
            .once("value")
            .then((snapshot) => {

              // console.log(snapshot.val());
              var childClass = snapshot.val();

              childClass.map((item) => {



                firebase
                  .database()
                  .ref("Workshops/" + item + "/data/task/")
                  .once("value")
                  .then((snapshottask) => {

                    snapshottask.forEach((childSnapshottask) => {
                      //  console.log(childSnapshottask.val())


                      var taskData = childSnapshottask.val();
                      firebase
                        .database()
                        .ref("Tasks/workshopT/" + taskData + "/data/")
                        .once("value")
                        .then((snapshotsubChildtask) => {

                          var mentorcheck = snapshotsubChildtask.val();
                          // console.log(mentorcheck)
                          if (mentorcheck.mentor == user.uid) {
                            firebase
                              .database()
                              .ref("TaskSubmit/workshopT/" + item + "/" + taskData + "/")
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
                                  
                                  const newItems = [...this.state.workTask];
                                  newItems[nummonth] = newItems[nummonth] + 1;
                                  this.setState({ workTask: newItems });
                                  }

                                })
                              })
                          }
                        })

                    })

                    // 
                  })




              })


            })


            // workshop quiz
            firebase
            .database()
            .ref("mentors/" + user.uid + "/workshops/")
            .once("value")
            .then((snapshot) => {

              // console.log(snapshot.val());
              var childClass = snapshot.val();

              childClass.map((item) => {



                firebase
                  .database()
                  .ref("Workshops/" + item + "/data/meet/")
                  .once("value")
                  .then((snapshotclass) => {
                    snapshotclass.forEach((meets) => {
                      var meetdata = meets.val();
                      // console.log(meetdata)
                         this.setState({ attendance: meetdata.data.attendance ?  meetdata.data.attendance.length  : 0})
                       console.log(this.state.attendance);

                        var submitDates = meetdata.data.date;
                        console.log(submitDates);
                        var month = submitDates[5] + submitDates[6];
                        var todayYear = submitDates[0] + submitDates[1]+ submitDates[2] + submitDates[3];
                        if(todayYear == this.state.year){
                        var monthnum = parseInt(month);
                        monthnum = monthnum - 1;




                        const newItems = [...this.state.workMeets];
                        newItems[monthnum] = newItems[monthnum] + this.state.attendance;
                        this.setState({workMeets: newItems });
                        }
                      

})


                    
                  })
              })
            })



        })
    })


  }

  toggleArr = (id) => {
    // task , id=1;
    if (id === 0) {
      this.setState({
        taskmonth: this.state.classTask,
        quizmonth: this.state.classQuiz,
        meetsmonth: this.state.classMeets,
        
      })
    }
    else if (id === 1) {
      this.setState({
        taskmonth: this.state.workTask,
        quizmonth: this.state.workQuiz,
        meetsmonth: this.state.workMeets,


      })
    }
   

  }


  render() {


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
          data: this.state.meetsmonth,
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

          data: [this.state.classC + this.state.classW, this.state.quizC + this.state.quizW, this.state.taskC + this.state.taskW]
        }
      ]
    };


    return (
      <>

        <Header classroom={this.state.classroom ? this.state.classroom : "0"} work={this.state.work ? this.state.work : "0"} userC={this.state.userC ? this.state.userC : "0"} userW={this.state.userW ? this.state.userW : "0"} />

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
                            onClick={() => this.toggleArr(0)}
                          >
                            <span className="d-none d-md-block">Classroom</span>
                            <span className="d-md-none">C</span>
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
                          onClick={() => this.toggleArr(1)}
                          >
                            <span className="d-none d-md-block">Workshop</span>
                            <span className="d-md-none">W</span>
                          </NavLink>
                        </NavItem>
                      </Nav>
                    </div>
                  </Row>
                </CardHeader>
                <CardBody>
                  {/* Chart */}
                  {/* <div className="chart">
                   <Line
                    //  data={chartExample1[chartExample1Data]}
                    //  options={chartExample1.options}
                     getDatasetAtEvent={(e) => console.log(e)}
                   />
                 </div> */}

                  <Bar
                    data={bardata}
                    width={null}
                    height={null}
                    options={baroptions}
                  />
                </CardBody>
              </Card>
            </Col>
            <Col xl="4">
              <Card className="shadow">
                <CardHeader className="bg-transparent">
                  <Row className="align-items-center">
                    <div className="col">
                      <h3 className="text-uppercase text-muted ls-1 mb-1">
                        Activity Chart
                      </h3>

                    </div>
                  </Row>
                </CardHeader>
                <div style={{ display: 'flex', width: '100%', textAlign: 'center' }}><div className="circle" style={{ height: '10px', width: '10px', backgroundColor: '#33B679', borderRadius: '50%', margin: '7px' }}></div>Quiz</div>
                <div style={{ display: 'flex' }}><div className="circle" style={{ height: '10px', width: '10px', backgroundColor: '#D50000', borderRadius: '50%', margin: '7px' }}></div> Tasks</div>
                <div style={{ display: 'flex' }}><div className="circle" style={{ height: '10px', width: '10px', backgroundColor: '#039BE5', borderRadius: '50%', margin: '7px' }}></div>Classes</div>

                <CardBody style={{ margin: '0px' }}>
                  {/* Chart */}
                  <div className="chart" >
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

Dashboard.layout = Mentor;

export default Dashboard;
