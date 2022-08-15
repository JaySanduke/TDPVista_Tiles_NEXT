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
  const [workshop_id, setWorkshop_id] = useState();
  const [condition, setCondition] = useState(true);
  const [second, setSecond] = React.useState(localStorage.getItem('sd') ? localStorage.getItem('sd') : props.sd * 60);
  const [activeQuestion, setActiveQuestion] = useState(0);
  const [seenQues, setSeenQues] = useState(1);
  const [markedQues, setMarkedQues] = useState(0);
  const [submitBool, setSubmitBool] = useState(false);
  const [answered, setAnswered] = useState(0);
  const [unMarked, setUnMarked] = useState(0);
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
          setWorkshop_id(localStorage.getItem('w_id'))
          if (q_id === undefined) {
            window.location.href = "/";
          }

          var index = 0;

          // Fetches Data About Quiz

          firebase
            .database()
            .ref("Quiz/workshopQ/" + q_id + "/data/quiz_data")
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
          if (ANS[6] != null) {
            var x = unMarked;
            x++;
            setUnMarked(x);
            document.getElementById(`${i}`).style.borderColor =
              "rgb(53, 255, 24)";
            document.getElementById(`${i}`).style.backgroundColor =
              "rgb(53, 255, 24)";
            document.getElementById(`${i}`).style.borderRadius = "10%";
          } else {
            var y = answered;
            y++;
            setAnswered(y);
            document.getElementById(`${i}`).style.borderColor =
              "rgb(255, 243, 18)";
            document.getElementById(`${i}`).style.backgroundColor =
              "rgb(255, 243, 18)";
            document.getElementById(`${i}`).style.borderRadius = "10%";
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

  }, []);
  useEffect(() => {
    var x = 0;
    var y = 0;
    for (let i = 0; i < quesData.length; i++) {
      let ANS = JSON.parse(localStorage.getItem(i));
      if (ANS && document.getElementById(`${i}`)) {
        if (ANS[6]){
          if (ANS[6].length == 0) {
            x++;
            setUnMarked(x);
          } else {
            y++;
            setAnswered(y);
          }
        }
      }
    }

  });


  React.useEffect(() => {
    localStorage.setItem('sd', second);

    if (second > 0) {
      setTimeout(() => setSecond(second - 1), 1000);
    } else {
      setSecond(0);
      var ar = [];
      var key = firebase.database().ref("Answers/Workshop").push().key;
      if (localStorage.length) {
        for (let i = 0; i < quesData.length; i++) {
          if (localStorage.getItem(i)) {
            ar.push(JSON.parse(localStorage.getItem(i)))
          }
        }
        firebase
          .database()
          .ref()
          .child("Answers/Workshop/" + workshop_id + `/${quiz_id}/` + `${user_id}/`)
          .set({ data: ar }).then(() => {
            // setSubmitBool(true);
            Router.push('/UserWorkshop/Submission?j=' + quesData.length)
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
          style={{ display: "flex", zIndex: "3", backgroundColor: "var(--default)" }}
        >
          <img src={require("assets/img/brand/logoTiles.png")} alt="" width={'70px'} className="p-2" style={{ position: "absolute", top: "0", left: "0" }} />
          <h1
            style={{
              position: "relative",
              left: "50%",
              transform: "translate(-50%)", color: "white"
            }}
          >
            {props.nm}
          </h1>
        </div>
        <div className="  bg-white" expand="md" id="sideNav-Main">
          <Container>
            <h1 className="text-center av">Questions</h1>
            <h2 className="text-center">
              <i class="far fa-clock" /> {hr < 10 ? `0${hr}` : hr}:
              {min < 10 ? `0${min}` : min}:{sec < 10 ? `0${sec}` : sec}
              {/* <MyTimer expiryTimestamp={time} /> */}
            </h2>
            <p className="text-center h2">Questions</p>
            <div
              className="my-2"
              style={{ borderBottom: "1px solid black" }}
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
                        style={{ cursor: "pointer"}}
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
                borderBottom: "1px solid black",
                marginBottom: "20px",
              }}
            />
            <div style={{ padding: "20px" }}>
              <table class="table" >
                <tbody>
                  <tr>
                    <th scope="row"><div style={{ width: "15px", height: "15px", backgroundColor: "#35ff18", borderRadius: "3px" }}></div></th>
                    <td>Answered</td>
                    <td>{answered}</td>
                  </tr>
                  <tr>
                    <th scope="row"><div style={{ width: "15px", height: "15px", backgroundColor: "#fff312", borderRadius: "3px" }}></div></th>
                    <td>UnMarked</td>
                    <td>{unMarked}</td>
                  </tr>
                  <tr>
                    <th scope="row"><div style={{ width: "15px", height: "15px", borderRadius: "3px", border: "1px solid black" }}></div></th>
                    <td>UnRead</td>
                    <td>{quesData.length - answered - unMarked}</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="text-center">
              <button
                className="btn  submitButton"
                onClick={() => {
                  var ar = [];
                  var key = firebase.database().ref("Answers/Workshop").push().key;

                  if (localStorage.length) {
                    for (let i = 0; i < quesData.length; i++) {
                      if (localStorage.getItem(i)) {
                        ar.push(JSON.parse(localStorage.getItem(i)))
                      }
                    }
                    firebase
                      .database()
                      .ref()
                      .child("Answers/Workshop/" + workshop_id + `/${quiz_id}/` + `${user_id}/`)
                      .set({ data: ar })
                    // setSubmitBool(true);
                    Router.push('/UserWorkshop/Submission?j=' + quesData.length)

                  }
                }}
              >
                Submit
              </button>
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
