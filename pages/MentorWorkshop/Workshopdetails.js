import React, { Component } from "react";
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  Container,
  Col,
  Row,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
    Form,
  Input,
  FormGroup,
  InputGroup,
} from "reactstrap";
 
import { Line, Bar } from "react-chartjs-2";

import { Doughnut, Pie } from "react-chartjs-2";
import Header from "../../components/Headers/MentorWorkshop";
import firebase from "../../config/firebase-tiles";
import MentorWorkshop from 'layouts/MentorWorkshop.js';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
class Workshopdetails extends Component {
  constructor(props) {
    super(props);
    var today = new Date(),
    date =
      today.getFullYear();
    this.state = {
      w_id: "",
      data: [],
      quiz_ids: [],
      quiz_data: [],
      task_ids: [],
      task_data: [],
      deleteModal: false,
      modal: false,
      removeModel: false,
      meets:0,
      quizes:0,
      tasks:0,
       taskmonth: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      quizmonth: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      classmonth: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            attendance: 0,
            attendancew: 0,
            year:date,

    };
  }
  componentDidMount() {
    firebase.auth().onAuthStateChanged((user) => {
      firebase.database().ref(`mentors/${user.uid}`).once("value")
        .then((snap) => {
          var d = snap.val();
          if (d && d.type === 2) {

            var currenturl = window.location.search;
            var currenturlsearch = new URLSearchParams(currenturl);
            var id = currenturlsearch.get("id");
           
            localStorage.setItem("w_id", id);
          
            console.log(id);
            if (id === undefined) {
              window.location.href = "/";
            }
            this.setState({ w_id: id });

            var x = [];
            firebase
              .database()
              .ref("Workshops/" + id)
              .once("value")
              .then((snapshot) => {
                x = snapshot.val();
                console.log(x)
                if (x) {
                  this.setState({
                    data: x,
                    editorState: x.data.task,
                  });
                  document.getElementById("task_description").innerHTML =
                    x.data.w_details.Wdesc;
                }

              })

              
          firebase
            .database()
            .ref("Quiz/workshopQ/")
            .once("value")
            .then((snapshotquiz) => {
               console.log(snapshotquiz.val())
              snapshotquiz.forEach((childSnapshotmeet) => {
                var quizData = childSnapshotmeet.val();
                if(quizData.data.mentor== user.uid){
                
 if (quizData.data.w_id == id) {
                  this.setState({ quizes: this.state.quizes + 1 })


                }

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
                 console.log(quizData)
                              
if(quizData.data.mentor== user.uid){
                if (quizData.data.w_id == id) {
                  this.setState({ tasks: this.state.tasks + 1 })


                }}
             

              })


            })

            
                firebase
                  .database()
                  .ref("Workshops/" + id + "/data/meet/")
                  .once("value")
                  .then((snapshotmeet) => {

                    snapshotmeet.forEach((childSnapshotmeet) => {
                     console.log(childSnapshotmeet.val());


                      var meetData = childSnapshotmeet.val();
                      console.log(meetData);
                      if (user.uid == meetData.data.mentor) {
                        this.setState({ meets: this.state.meets + 1 })
                      }

                    })

                    // 
                  })



    //  firebase
    //           .database()
    //           .ref("Workshops/" + id + "/data/meet/")
    //           .once("value")
    //           .then((snapshot) => {

    //             this.setState({meets: snapshot.numChildren()})
    //           })

    

                firebase
                  .database()
                  .ref("Workshops/" + id + "/data/task/")
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
                           console.log(mentorcheck)
                          if (mentorcheck.mentor == user.uid) {
                            firebase
                              .database()
                              .ref("TaskSubmit/workshopT/" + id + "/" + taskData + "/")
                              .once("value")
                              .then((snapshotsupersubChildtask) => {

                                 console.log(snapshotsupersubChildtask.val())
                                snapshotsupersubChildtask.forEach((useritem) => {
                                    console.log(useritem.val().data.submitDate);
                                  var submitdate = useritem.val().data.submitDate;
                                  var month = submitdate[5] + submitdate[6];
                                  var todayYear = submitdate[0] + submitdate[1]+ submitdate[2] + submitdate[3];
                                  if(todayYear == this.state.year){
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


         



            //     firebase
            //       .database()
            //       .ref("Workshops/" + id + "/data/quiz/")
            //       .once("value")
            //       .then((snapshottask) => {

            //         snapshottask.forEach((childSnapshottask) => {
            //           // console.log(childSnapshottask.val())


            //           var quizData = childSnapshottask.val();
            //           console.log(quizData)
            //           firebase
            //             .database()
            //             .ref("Quiz/workshopQ/" + quizData + "/data/")
            //             .once("value")
            //             .then((snapshotsubChildtask) => {

            //               var mentorcheck = snapshotsubChildtask.val();
            //               // console.log(mentorcheck)
            //               if (mentorcheck.mentor == user.uid) {
            //                 firebase
            //                   .database()
            //                   .ref("Answers/Workshop/" + id + "/" + quizData)
            //                   .once("value")
            //                   .then((snapshotsupersubChildtask) => {
            //                     snapshotsupersubChildtask.forEach((quizsubmitdata) => {


            //                       var sudate = quizsubmitdata.val();
            //                       console.log(sudate);
            //                       var submitDates = sudate.submitDate;
            //                       var month = submitDates[5] + submitDates[6];

            //                       var monthnum = parseInt(month);
            //                       monthnum = monthnum - 1;
            //                       // taskmonth[monthnum] =  1 ;
            //                       //  let taskmonth = [...this.state.taskmonth];
            //                       //     let item = {...taskmonth[monthnum]};
            //                       //     item = item + 1;
            //                       //     taskmonth[1] = item;
            //                       //     this.setState({taskmonth});
            //                       const newItems = [...this.state.quizmonth];
            //                       newItems[monthnum] = newItems[monthnum] + 1;
            //                       this.setState({ quizmonth: newItems });
            //                       // this.setState({taskmonth : this.state.taskmonth[nummonth] + 1});



            //                     })

            //                   })
            //               }
            //             })

            //         })

                


            // })
          // **********class Attendance**********
         


                firebase
                  .database()
                  .ref("Workshops/" + id + "/data/meet/")
                  .once("value")
                  .then((snapshotclass) => {
                    snapshotclass.forEach((meets) => {
                      var meetdata = meets.val();
                      console.log(meetdata)
                       this.setState({ attendancew: meetdata.data.attendance ? meetdata.data.attendance.length :0})


                        var submitDates = meetdata.data.date;
                        var month = submitDates[5] + submitDates[6];
                        var todayYear = submitDates[0] + submitDates[1]+ submitDates[2] + submitDates[3];
                        if(todayYear == this.state.year){
                        var monthnum = parseInt(month);
                        monthnum = monthnum - 1;




                        const newItems = [...this.state.classmonth];
                        newItems[monthnum] = newItems[monthnum] + parseInt(this.state.attendancew);
                        this.setState({ classmonth: newItems });
                      
                        }



                    })
                  })


              

          }
          else {
            alert("only admins allowed ");
            window.location.href = "/";
          }
        })
    })
  }

  // Delete Quiz



 

  render() {
    // const header = [
    //   { name: "Quiz Name", selector: "quiz_name", sortable: true },
    //   { name: "Available From", selector: "start" },
    //   { name: "Available Till", selector: "end" },
    //   { name: "View Details", selector: "btn" },
    // ];

    // var body = [];
    // if (this.state.quiz_data !== undefined && this.state.quiz_data !== null) {
    //   var x = this.state.quiz_data;
    //   body = x.map((item) => {
    //     const id = item.data.quiz_id;
    //     console.log(id);
    //     return {
    //       quiz_name: item.data.name,
    //       start: item.data.start_date + " " + item.data.start_time,
    //       end: item.data.end_date + " " + item.data.end_time,
    //       btn: (
    //         <a
    //           href={"/workshop/WorkshopQuizDetails?id="+this.state.w_id+"&q_id="+id}
    //         >
    //           View Details
    //         </a>
    //       ),
    //     };

    //   });
    // }
 
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

          data: [this.state.meets , this.state.quizes , this.state.tasks]
        }
      ]
    };
  
    return (
      <div>
        <Header workshop={this.state.data.data ? this.state.data.data.w_details.workshopTitle : ''}
        quiz={this.state.quizes} task={this.state.tasks} meets={this.state.meets}
        
        />
        {/* Page content */}
       <Container className="mt--7" fluid>
          <Card>
            <CardHeader >
              <Row className="text-right align-items-right justify-content-right" >
              <Col lg="6" ><h1>Workshop: </h1></Col>
              
                
                <Col lg="6" className=" d-flex mx-auto">
                  <div className=" mx-auto " >
                  <a href={"/workshop/Editworkshop?id=" + this.state.w_id}>
                    <Button className="text-primary">
                      <FontAwesomeIcon
                        icon={faEdit}
                        className="justify-self-end"
                      />
                    </Button>
                  </a>
               </div>
          
              
                </Col>
              </Row>
              <Row style={{marginTop:"40px"}}>
                 <Col xl='8'>
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
                  <Pie style={{ width: '100%', padding: '0px' }}
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
            </CardHeader>
            <CardBody className="px-2 ">
              {this.state.data.data && (
                <div className="col-md-9 py-sm-3 mx-auto">
                  {/* <b>Title:</b> {this.state.data.data.w_details.workshopTitle}
                  <br />
                  <b>Subtitle :</b>{" "}
                  {this.state.data.data.w_details.workshopSubTitle} <br />
                  <b>Workshop Catergory </b>{" "}
                  {this.state.data.data.workshopCategory} <br />
                  <b>Starting Date :</b>{" "}
                  {this.state.data.data.w_details.starting_date} <br />
                  <b>Ending Date :</b> {this.state.data.data.w_details.end_date}{" "}
                  <br />
                  <b>Workshop Duration :</b>{" "}
                  {this.state.data.data.w_details.Workshop_duration} <br />
                  <b>Registration Starting Date :</b>{" "}
                  {this.state.data.data.w_details.reg_starting_date} <br />
                  <b>Registration Ending Date :</b>{" "}
                  {this.state.data.data.w_details.reg_end_date} 
                  <br />
                  <b>Workshop Description:</b>
                  <p id="task_description"></p>
                  <br /> */}
                   <Row style={{justifyContent : "space-between"}}>
                    <Col lg="6">
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="input-username"
                            >
                             <h3>Title</h3>
                            </label>
                            <Input
                              disabled
                              className="form-control-alternative"
                              id="input-username"
                              placeholder="Username"
                              type="text"
                              value={this.state.data.data.w_details.workshopTitle}
                            />
                          </FormGroup>
                        </Col>
                         <Col lg="6">
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="input-username"
                            >
                             <h3> Subtitle</h3>
                            </label>
                            <Input
                              disabled
                              className="form-control-alternative"
                              id="input-username"
                              placeholder="Username"
                              type="text"
                              value={
                               this.state.data.data.w_details.workshopSubTitle
                              }
                            />
                          </FormGroup>
                        </Col>
                  </Row>
                   <Row style={{justifyContent : "space-between"}}>
                    <Col lg="6">
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="input-username"
                            >
                             <h3>Workshop Category</h3>
                            </label>
                            <Input
                              disabled
                              className="form-control-alternative"
                              id="input-username"
                              placeholder="Username"
                              type="text"
                              value={this.state.data.data.workshopCategory}
                            />
                          </FormGroup>
                        </Col>
                         <Col lg="6">
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="input-username"
                            >
                             <h3> Starting Date</h3>
                            </label>
                            <Input
                              disabled
                              className="form-control-alternative"
                              id="input-username"
                              placeholder="Username"
                              type="text"
                              value={this.state.data.data.w_details.starting_date}
                            />
                          </FormGroup>
                        </Col>
                  </Row>
                   <Row style={{justifyContent : "space-between"}}>
                    <Col lg="6">
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="input-username"
                            >
                             <h3>Ending Date</h3>
                            </label>
                            <Input
                              disabled
                              className="form-control-alternative"
                              id="input-username"
                              placeholder="Username"
                              type="text"
                              value={this.state.data.data.w_details.end_date}
                            />
                          </FormGroup>
                        </Col>
                         <Col lg="6">
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="input-username"
                            >
                             <h3>Workshop Duration</h3>
                            </label>
                            <Input
                              disabled
                              className="form-control-alternative"
                              id="input-username"
                              placeholder="Username"
                              type="text"
                              value={this.state.data.data.w_details.Workshop_duration}
                            />
                          </FormGroup>
                        </Col>
                  </Row>
                   <Row style={{justifyContent : "space-between"}}>
                    <Col lg="6">
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="input-username"
                            >
                             <h3>Registration Starting Date</h3>
                            </label>
                            <Input
                              disabled
                              className="form-control-alternative"
                              id="input-username"
                              placeholder="Username"
                              type="text"
                              value=                  {this.state.data.data.w_details.reg_starting_date} 

                            />
                          </FormGroup>
                        </Col>
                         <Col lg="6">
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="input-username"
                            >
                             <h3> Registration Ending Date</h3>
                            </label>
                            <Input
                              disabled
                              className="form-control-alternative"
                              id="input-username"
                              placeholder="Username"
                              type="text"
                              value=                  {this.state.data.data.w_details.reg_end_date} 

                            />
                          </FormGroup>
                        </Col>
                  </Row>
                   <Row style={{justifyContent : "space-between"}}>
                    <Col lg="6">
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="input-username"
                            >
                             <h3>Workshop Description</h3>
                            </label>
                           <p  id="task_description"></p>
                          </FormGroup>
                        </Col>
                        
                  </Row>
                  {this.state.data.data.attachments && (
                    <div>
                      <b>Attachment:</b>
                      {this.state.data.data.attachments.map((item, index) => {
                        return (
                          <p>
                            {index + 1}.{" "}
                            <a href={item.url} download={item.name}>
                              Attachment {index + 1}
                            </a>
                          </p>
                        );
                      })}
                    </div>
                  )}
                  {/* <Card>
                    <DataTable
                      title="Quizes"
                      columns={header}
                      data={body}
                      pagination={true}
                    />
                    <a
                      href={"/workshop/WorkshopCreatequiz?id="+this.state.w_id}
                    >
                      <Button color="primary" class="my-5">Create Quiz</Button>
                      <br/>
                    </a>
                  </Card> */}

                  {/* <Card className="mt-5">
                    <DataTable
                      class="mt-5"
                      title="Task Data"
                      columns={column}
                      data={body1}
                      pagination={true}
                      persistTableHead
                    />
                    <a
                      href={"/workshop/WorkshopCreateTask?id="+this.state.w_id}
                    >
                      <Button color="primary mt-5">Create Task</Button>
                    </a>
                  </Card> */}
                </div>
              )}

            </CardBody>
          </Card>
        </Container>


        <Modal isOpen={this.state.deleteModal} toggle={this.toggleDelete}>
          <ModalHeader toggle={this.toggleDelete}>Delete</ModalHeader>
          <ModalBody>Delete the Workshop!</ModalBody>
          <ModalFooter>
            <Button color="danger" onClick={this.deleteQuiz}>
              Delete
            </Button>{" "}
            <Button color="secondary" onClick={this.toggleDelete}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

Workshopdetails.layout = MentorWorkshop;

export default Workshopdetails;