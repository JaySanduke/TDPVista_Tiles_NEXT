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
import Admin from "layouts/Admin.js";
//core components
import {
  chartOptions,
  parseOptions,
  chartExample1,
  chartExample2,
} from "variables/charts.js";

import Header from "components/Headers/admin.js";


class Dashboard extends React.Component {

  constructor(props) {
    super(props);
    var today = new Date(),
    date =
      today.getFullYear();
console.log(date);
    this.state = {
    
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
      mentormonth: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      usermonth: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      arraymonth: [],
      barColor:'lightgreen',
      backBar:"Darkgreen",
      year:date,



    };
  }




  componentDidMount() {
    firebase.auth().onAuthStateChanged((user) => {
      firebase.database().ref(`Admin/${user.uid}`).once("value")
        .then((snap) => {
          var d = snap.val();
          if(d && d.type === 1) {
          var tts = this;
         

            firebase.database().ref("users/").once("value").then((Snapshot)=>{
                  Snapshot.forEach((users)=>{
                    var userData =  users.val();
                    var submitDates = userData.enrollmentDate;
                    var month = submitDates[5] + submitDates[6];
                    var todayYear = submitDates[0] + submitDates[1]+ submitDates[2] + submitDates[3];
                    if(todayYear == this.state.year){
                    var monthnum = parseInt(month);
                    monthnum = monthnum - 1;
                    
                    const newItems = [...this.state.usermonth];
                    newItems[monthnum] = newItems[monthnum] + 1;
                    this.setState({ usermonth: newItems , arraymonth: newItems});
                    }
                  })

            })

            
            firebase.database().ref("mentors/").once("value").then((Snapshot)=>{
              Snapshot.forEach((users)=>{
                var userData =  users.val();
                console.log(userData);
                var submitDates = userData.joiningDate;
                var month = submitDates[5] + submitDates[6];
                var todayYear = submitDates[0] + submitDates[1]+ submitDates[2] + submitDates[3];

                if(todayYear == this.state.year){
                var monthnum = parseInt(month);
                monthnum = monthnum - 1;
                
                const newItems = [...this.state.mentormonth];
                newItems[monthnum] = newItems[monthnum] + 1;
                this.setState({ mentormonth: newItems });
                }
              })

        })


            
            firebase
            .database()
            .ref("Classroom/")
            .once("value")
            .then((snapshotmeet) => {

              snapshotmeet.forEach((childSnapshotmeet) => {
                // console.log(childSnapshotmeet.val())


                var meetData = childSnapshotmeet.val();
              
                  tts.setState({ classC: tts.state.classC + 1 })
                

              })

              // 
            })
 
            firebase
            .database()
            .ref("Classroom/")
            .once("value")
            .then((snapshotmeet) => {

              snapshotmeet.forEach((childSnapshotmeet) => {
                // console.log(childSnapshotmeet.val())


                var meetData = childSnapshotmeet.val();
              
                  tts.setState({ classC: tts.state.classC + 1 })
                

              })

              // 
            })
            firebase
            .database()
            .ref("Workshops/")
            .once("value")
            .then((snapshotmeet) => {

              snapshotmeet.forEach((childSnapshotmeet) => {
                // console.log(childSnapshotmeet.val())


                var meetData = childSnapshotmeet.val();
              
                  tts.setState({ work: tts.state.work + 1 })
                

              })

              // 
            })

            firebase
            .database()
            .ref("Quiz/classQ")
            .once("value")
            .then((snapshotmeet) => {

              snapshotmeet.forEach((childSnapshotmeet) => {
                // console.log(childSnapshotmeet.val())


                var meetData = childSnapshotmeet.val();
              
                  tts.setState({ quizC: tts.state.quizC + 1 })
                

              })

              // 
            })

            
            firebase
            .database()
            .ref("Quiz/workshopQ")
            .once("value")
            .then((snapshotmeet) => {

              snapshotmeet.forEach((childSnapshotmeet) => {
                // console.log(childSnapshotmeet.val())


                var meetData = childSnapshotmeet.val();
              
                  tts.setState({ quizW: tts.state.quizW + 1 })
                

              })

              // 
            })

      


          }
  })
})
  }

   toggleArr = (id) => {
    // task , id=1;
    if (id === 0) {
      this.setState({
        arraymonth: this.state.usermonth,
        barColor:'lightGreen',
        backBar:'Darkgreen',
      })
    }
    else if (id === 1) {
      this.setState({
        arraymonth: this.state.mentormonth,
        barColor:'#ffcccb',
        backBar:'Red',


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
          label: "Students",
          backgroundColor: this.state.barColor,
          // borderColor: "rgba(255,99,132,1)",
          borderWidth: 1,
          barPercentage: 0.5,
          //stack: 1,
          hoverBackgroundColor: this.state.backBar,
          data: this.state.arraymonth,
        },

        
        // {
        //   label: "Tasks",
        //   backgroundColor: "#D50000",
        //   borderColor: "rgba(255,99,132,1)",
        //   borderWidth: 1,
        //   //stack: 1,
        //   hoverBackgroundColor: "#D50000",
        //   hoverBorderColor: "rgba(255,99,132,1)",
        //   data: this.state.taskmonth,
        // }
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
      labels: ["Classes", "Quiz", "Workshops"],
      datasets: [
        {
          label: 'Activity',
          backgroundColor: [
            '#039BE5',
            '#33B679',
            '#D50000',

          ],

          data: [this.state.classC, this.state.quizC + this.state.quizW, this.state.work]
        }
      ]
    };

   


    return (
      <>

        <Header />

        {/* Page content */}
        <Container className="mt--7" fluid>
          <Row>
            <Col className="mb-5 mb-xl-0" xl="8">
              <Card className="shadow">
                <CardHeader className="bg-transparent">
                  <Row className="align-items-center">
                    <div className="col">
                      <h6 className="text-uppercase text-light ls-1 mb-1">
                        Student Enrollment
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
                            <span className="d-none d-md-block">Students</span>
                            <span className="d-md-none">S</span>
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
                            <span className="d-none d-md-block">Mentors</span>
                            <span className="d-md-none">M</span>
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
                <div className="mx-auto my-2">
                <div style={{ display: 'flex', width: '100%', textAlign: 'center' }}><div className="circle" style={{ height: '10px', width: '10px', backgroundColor: '#33B679', borderRadius: '50%', margin: '7px' }}></div>Quiz</div>
                <div style={{ display: 'flex' }}><div className="circle" style={{ height: '10px', width: '10px', backgroundColor: '#D50000', borderRadius: '50%', margin: '7px' }}></div> Workshops</div>
                <div style={{ display: 'flex' }}><div className="circle" style={{ height: '10px', width: '10px', backgroundColor: '#039BE5', borderRadius: '50%', margin: '7px' }}></div>Classes</div>
                </div>
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

Dashboard.layout = Admin;

export default Dashboard;
