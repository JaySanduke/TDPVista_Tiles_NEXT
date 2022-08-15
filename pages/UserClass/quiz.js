import React, { useState, useEffect } from "react";
import { NavLink as NavLinkRRD, Link } from "react-router-dom";
import firebase from "../../config/firebase-tiles";
import "../../assets/css/quiz.css";
import { Card, CardHeader, Table, Container, Row } from "reactstrap";
import dynamic from 'next/dynamic'
import Router from 'next/router';
const Question = dynamic(
  () => import('./Question'),
  { loading: () => <p>Loading...</p> },

)

//  import Question from "./Question";
import Submit from "./Submit";
import ReactHtmlParser from "react-html-parser";
import { EditorState, convertToRaw } from "draft-js";







// import { updateStatement } from 'typescript';
// import { useTimer } from 'react-timer-hook';
// let sec=0;
// function MyTimer({ expiryTimestamp }) {
//   const {
//     seconds,
//     minutes,
//     hours,

//   } = useTimer({ expiryTimestamp, onExpire: () => console.warn('onExpire called') });

//   sec=seconds + hours*60*60 + minutes*60;

//   return (
//     <>
//       <span>{hours<10 ? `0${hours}`:hours}</span>:<span>{minutes<10 ? `0${minutes}`:minutes}</span>:<span>{seconds<10 ? `0${seconds}`:seconds}</span>
//     </>
//   );
// };

function Quiz(props) {

  const [quesData, setques_data] = useState([]);
  const [quiz_id, setQuiz_id] = useState();
  const [user_id, setUser_id] = useState();
  const [class_id, setClass_id] = useState();
  const [condition, setCondition] = useState(true);
  const [second, setSecond] = React.useState(localStorage.getItem('sd') ? localStorage.getItem('sd') : props.sd * 60);
  const [activeQuestion, setActiveQuestion] = useState(0);
  const [seenQues, setSeenQues] = useState(1);
  const [markedQues, setMarkedQues] = useState(0);
  const [submitBool, setSubmitBool] = useState(false);
  const [answered, setAnswered] = useState(0);
  const [unMarked, setUnMarked] = useState(0);
  const [totalQues, setTotalQues] = useState(0);
  const [startUser, setStartUser] = useState();
  const [endTime, setEndTime] = useState();

  var today = new Date(),
    todayDate =
      today.getFullYear() +
      "-" +
      ((today.getMonth() + 1 < 10 ? "0" : "") + (today.getMonth() + 1)) +
      "-" +
      ((today.getDate() < 10 ? "0" : "") + today.getDate());
  var time = today.getHours() + ":" + today.getMinutes();
  const [TodayDate, setTodayDate] = useState(todayDate);
  const [nowTime, setTime] = useState(time);
  var x = [];
  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      firebase
        .database()
        .ref(`users/${user.uid}`)
        .once("value")
        .then((snap) => {
          var data = snap.val();

          var currenturl = window.location.search;
          var currenturlsearch = new URLSearchParams(currenturl);
          var q_id = currenturlsearch.get("q_id");
          setQuiz_id(q_id);
          setUser_id(user.uid);
          setClass_id(localStorage.getItem('u_id'))
          if (q_id === undefined) {
            window.location.href = "/";
          }

          var index = 0;

          // Fetches Data About Quiz

          firebase
            .database()
            .ref("Quiz/classQ/" + q_id + "/data/quiz_data")
            .once("value")
            .then(async (snapshot) => {

              snapshot.forEach(function (childSnapshot) {
                var childData = childSnapshot.val();

                x.push(childData);
              })



              // console.log(x)


              setques_data(x);

            });
        });
    });

  });



  // const markedDATA = [
  //   { id: '0', type: 1, question: 'What is your name?', "choices": ["Ram", "Vivek", "Tushar", "Govind"], ans: [2, 3], marks: 5 },
  //   { id: '1', type: 0, question: 'languages?', "choices": ["Java", "C++", "Swift", "Go"], ans: [2], marks: 5 },
  //   { id: '2', type: 1, question: 'There are two correct answers. What is 8+8?', "choices": ["16", "18", "Sixteen", "Thirteen"], ans: [2, 3], marks: 5 },
  //   { id: '3', type: 0, question: '1+5=6?', "choices": ["True", "False"], ans: [0], marks: 5 },
  //   { id: '4', type: 1, question: 'cout<<"Hello World!"<<endl;', "choices": ["Hello World!", "Hello", "World!", "endl"], ans: [2, 3], marks: 5 }
  // ]


  useEffect(() => {
    if (condition) {
      for (let i = 0; i < quesData.length; i++) {
        let ANS = JSON.parse(localStorage.getItem(i));
        if (ANS && document.getElementById(`${i}`)) {
          setCondition(false);
          if (ANS[6]) {
            if (ANS[6].length != 0) {
              document.getElementById(`${i}`).style.borderColor =
                "rgb(53, 255, 24)";
              document.getElementById(`${i}`).style.backgroundColor =
                "rgb(53, 255, 24)";
              document.getElementById(`${i}`).style.borderRadius = "10%";
            } else {
              document.getElementById(`${i}`).style.borderColor =
                "rgb(255, 243, 18)";
              document.getElementById(`${i}`).style.backgroundColor =
                "rgb(255, 243, 18)";
              document.getElementById(`${i}`).style.borderRadius = "10%";
            }
          }
        }
      }
    }
  });
  // let minTime = [];

  // for (let i = 0; i < localStorage.length; i++) {
  //   let Nam = localStorage.getItem(i);
  //   Nam = JSON.parse(localStorage.getItem(i));
  //   if (Nam) {
  //     minTime.push(Nam[7]);
  //   }
  //   // console.log(minTime)
  // }

  useEffect(() => {
    if (localStorage.getItem('sd')) {
      setSecond(localStorage.getItem('sd'));
    }
    var today = new Date();
    var futureDate = new Date(today.getTime() + second * 1000);
    setEndTime(futureDate);
    setStartUser(today);
    props.SetQuizFooter(true);
  }, []);
  useEffect(() => {
    var x = 0;
    var y = 0;
    setTotalQues(quesData.length);
    for (let i = 0; i < quesData.length; i++) {
      let ANS = JSON.parse(localStorage.getItem(i));
      if (ANS && document.getElementById(`${i}`)) {
        if (ANS[6]) {
          if (ANS[6].length !== 0) {
            y++;
          } else {
            x++;
          }
        }
      }
    }
    setAnswered(y);
    setUnMarked(x);
  });


  React.useEffect(() => {
    localStorage.setItem('sd', second);

    if (second > 0) {
      setTimeout(() => setSecond(second - 1), 1000);
    } else {
      setSecond(0);
      var ar = [];
      var key = firebase.database().ref("Answers/Classroom").push().key;
      if (localStorage.length) {
        for (let i = 0; i < quesData.length; i++) {
          if (localStorage.getItem(i)) {
            ar.push(JSON.parse(localStorage.getItem(i)))
          }
          firebase
            .database()
            .ref()
            .child("Answers/Classroom/" + class_id + `/${quiz_id}/` + `${user_id}/`)
            .set({
              data: ar,

              submitDate: todayDate,
            })
          setSubmitBool(true);
        }
        firebase
          .database()
          .ref()
          .child("Answers/Classroom/" + class_id + `/${quiz_id}/` + `${user_id}/`)
          .set({ data: ar }).then(() => {
            // setSubmitBool(true);
            Router.push('/UserClass/Submission?j=' + quesData.length)
          })


      }

    }
  });
  var hr = Math.floor(second / (60 * 60));
  var min = Math.floor((second - hr * 60 * 60) / 60);
  var sec = Math.floor(second - hr * 60 * 60 - min * 60);
  // const time = new Date();
  // time.setSeconds(time.getSeconds() + 10800);

  return (
    <>
      {/* {!submitBool ? ( */}
      <div>
        <div
          className="w-100 py-1"
          style={{ position: "sticky", top: "0", left: "0", display: "flex", zIndex: "3", backgroundColor: "var(--default)", flexDirection: "row-reverse" }}
        >

          <h1
            style={{
              position: "relative",
              left: "-50%",
              transform: "translate(50%)",
              color: "white"
            }}
          >
            {props.nm}
          </h1>
        </div>
        <div className="bg-white" expand="md" id="sideNav-Main">
          <Container>
            <h1 className="text-center av">Questions</h1>

            <div className="d-flex justify-content-between">
              {startUser ? <h2 className="text-center" style={{ fontSize: "0.9em" }}>
                <span >Start - </span>
                {/* <i class="far fa-clock" />  */}
                {startUser.getHours() < 10 ? `0${startUser.getHours()}` : startUser.getHours()}:
                {startUser.getMinutes() < 10 ? `0${startUser.getMinutes()}` : startUser.getMinutes()}:{startUser.getSeconds() < 10 ? `0${startUser.getSeconds()}` : startUser.getSeconds()}
                {/* <MyTimer expiryTimestamp={time} /> */}
              </h2> : null}
              {endTime ? <h2 className="text-center" style={{ fontSize: "0.9em" }}>
                <span>End - </span>
                {/* <i class="far fa-clock" />  */}
                {endTime.getHours() < 10 ? `0${endTime.getHours()}` : endTime.getHours()}:
                {endTime.getMinutes() < 10 ? `0${endTime.getMinutes()}` : endTime.getMinutes()}:{endTime.getSeconds() < 10 ? `0${endTime.getSeconds()}` : endTime.getSeconds()}
                {/* <MyTimer expiryTimestamp={time} /> */}
                {/* <MyTimer expiryTimestamp={time} /> */}
              </h2> : null}
            </div>
            <h2 className="text-center">
              <i class="far fa-clock" />
              {" "}{hr < 10 ? `0${hr}` : hr}:
              {min < 10 ? `0${min}` : min}:{sec < 10 ? `0${sec}` : sec}
              {/* <MyTimer expiryTimestamp={time} /> */}
            </h2>
            {/* <p className="text-center h2">Questions</p> */}
            <div
              className="my-2"
              style={{ borderBottom: "2px solid var(--default)", borderRadius: "100px", width: "115%", marginLeft: "-5.5%" }}
            />

            <div className="pagination container navb">
              {quesData
                ? quesData.map((data, id) => (
                  <div
                    key={id}
                    className="row  p-2"
                    style={{ position: "relative", left: "6%" }}
                  >
                    <div
                      className="col "
                      id={id}
                      style={{
                        width: "10px",
                        height: "35px",
                        border: "2px solid black",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        marginRight: "10px",
                        marginLeft: "10px",
                        borderRadius: "5%",
                      }}
                    >
                      <h3
                        className="quesCard"
                        style={{ cursor: "pointer" }}
                        onClick={() => {
                          setActiveQuestion(id);
                        }}
                      >
                        {id + 1}
                      </h3>
                    </div>
                  </div>
                ))
                : ""}
            </div>
            <div
              className="my-2"
              style={{
                borderBottom: "2px solid var(--default)",
                marginBottom: "20px",
                borderRadius: "100px",
                width: "115%",
                marginLeft: "-5.5%"
              }}
            />
            <div className="p-4">
              <div className="container" style={{ fontSize: "0.8em" }}>
                <div className="row mb-2">
                  <div className="col-2 text-center">
                    <div style={{ width: "15px", height: "15px", backgroundColor: "#35ff18", borderRadius: "3px" }}></div>
                  </div>
                  <div className="col-7">
                    Answered
                  </div>
                  <div className="col-3 text-center">
                    {answered}
                  </div>
                </div>
                <div className="row mb-2">
                  <div className="col-2 text-center">
                    <div style={{ width: "15px", height: "15px", backgroundColor: "#fff312", borderRadius: "3px" }}></div>
                  </div>
                  <div className="col-7 ">
                    UnMarked
                  </div>
                  <div className="col-3 text-center">
                    {unMarked}
                  </div>
                </div>
                <div className="row">
                  <div className="col-2 text-center">
                    <div style={{ width: "15px", height: "15px", borderRadius: "3px", border: "1px solid black" }}></div>
                  </div>
                  <div className="col-7">
                    UnRead
                  </div>
                  <div className="col-3 text-center">
                    {totalQues - answered - unMarked}
                  </div>
                </div>
              </div>
            </div>
            <div className="text-center">
              {/* <button
                className="btn  submitButton"
                onClick={() => {
                  var ar = [];
                  var key = firebase.database().ref("Answers/Classroom").push().key;

                  if (localStorage.length) {
                    for (let i = 0; i < quesData.length; i++) {
                      if (localStorage.getItem(i)) {
                        ar.push(JSON.parse(localStorage.getItem(i)))
                      }
                    }
                    firebase
                      .database()
                      .ref()
                      .child("Answers/Classroom/" + class_id + `/${quiz_id}/` + `${user_id}/`)
                      .set({ data: ar })
                    // setSubmitBool(true);
                    Router.push('/UserClass/Submission?j=' + quesData.length)

                  }
                }}
              >
                Submit
              </button> */}
              <button class="button-57" role="button" style={{ border: "0px" }} onClick={() => {
                var ar = [];
                var key = firebase.database().ref("Answers/Classroom").push().key;

                if (localStorage.length) {
                  for (let i = 0; i < quesData.length; i++) {
                    if (localStorage.getItem(i)) {
                      ar.push(JSON.parse(localStorage.getItem(i)))
                    }
                  }
                  firebase
                    .database()
                    .ref()
                    .child("Answers/Classroom/" + class_id + `/${quiz_id}/` + `${user_id}/`)
                    .set({ data: ar, submitDate: TodayDate })
                  // setSubmitBool(true);
                  Router.push('/UserClass/Submission?j=' + quesData.length)

                }
              }} ><span class="text">Submit</span><span><i class="far fa-clock" />
                  {" "}{hr < 10 ? `0${hr}` : hr}:
                  {min < 10 ? `0${min}` : min}:{sec < 10 ? `0${sec}` : sec} left</span></button>
            </div>
          </Container>
        </div>

        {quesData.length !== 0 ?


          <div className="mainQues" >
            <Question
              data={quesData[activeQuestion]}
              numberOfQuestions={quesData.length}
              activeQuestion={activeQuestion}
              onSetActiveQuestion={setActiveQuestion}
              seenQues={seenQues}
              onSetSeenQues={setSeenQues}
              markedQues={markedQues}
              onSetMarkedQues={setMarkedQues}
              second={second}
              onSetSecond={setSecond}
              userID={user_id}
            />
          </div> : ""}

      </div>


      {/* ) : (
      <Submit />
       )} */}
    </>
  );
}

export default Quiz;
