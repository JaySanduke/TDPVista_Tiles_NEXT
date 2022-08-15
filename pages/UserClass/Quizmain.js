import React, { useState, useEffect } from "react";
import Quiz from "./Quiz";
import Submit from "../UserClass/Submit";
import "../../assets/css/quiz.css";
import logo from "assets/img/logo.png";

import ReactHtmlParser, {
    processNodes,
    convertNodeToElement,
    htmlparser2,
} from "react-html-parser";
import Header from "components/Headers/Header.js";
import { Editor, EditorState } from "draft-js";
import firebase from "../../config/firebase-tiles";
import { Container, Row, Col } from "reactstrap";
import { parse } from "path";
function Quizmain() {
    const [quizmainData, setquizmain_data] = useState([]);
    const [endDate, setEndDate] = useState();
    const [AnsD, setAnsD] = useState();
    const [timeInt, setTimeInt] = useState();
    const [MinTime, setMinTime] = useState();
    const [classID, setClassID] = useState();
    const [quizFooter, setQuizFooter] = useState(true);
    const [timeLeft, setTimeLeft] = useState();
    const [editorState, setEditorState] = useState(() =>
        EditorState.createEmpty()
    );
    //  const[desc, setDesc]=useState("");
    var y = [];

    let crrDate = new Date();
    let endDateObj = null;
    let display = null;
    let local = "";
    let storage = "";
    let quizTime = null;
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

                    if (q_id === undefined) {
                        window.location.href = "/";
                    }

                    var index = 0;

                    // Fetches Data About Quiz

                    firebase
                        .database()
                        .ref("Quiz/classQ/" + q_id)
                        .once("value")
                        .then(async (snapshot) => {
                            snapshot.forEach(function (childSnapshot) {
                                var childData = childSnapshot.val();
                                setquizmain_data(childData);
                                setEditorState(childData.quiz_desc);
                                let date = childData.end_date.split("-");
                                let endTime = childData.end_time.split(":");
                                quizTime = parseInt(childData.duration);
                                setTimeInt(quizTime);
                                // var endTimeSec =(endTime[0]*60*60+endTime[1]*60)*1000;
                                endDateObj = new Date(date[0], date[1] - 1, date[2]);
                                endDateObj.setHours(endDateObj.getHours() + endTime[0]);
                                endDateObj.setMinutes(endDateObj.getMinutes() + endTime[1]);
                                setEndDate(endDateObj);
                                if (parseInt((crrDate.getTime() - endDateObj.getTime()) / (1000 * 60))) {
                                    setTimeLeft(parseInt(Math.abs(crrDate.getTime() - endDateObj.getTime()) / (1000 * 60)));
                                }
                            });

                            //   setDesc(editorState);
                            console.log(quizmainData);
                        }).then(() => {
                            var currenturl = window.location.search;
                            var currenturlsearch = new URLSearchParams(currenturl);
                            var q_id = currenturlsearch.get("q_id");
                            var class_id = localStorage.getItem("u_id");
                            setClassID(class_id);
                            firebase
                                .database()
                                .ref("Answers/Classroom/" + class_id + `/${q_id}/` + `${user.uid}/`)
                                .once("value")
                                .then(async (snapshot) => {

                                    var Ans_Data = snapshot.val();
                                    setAnsD(Ans_Data);

                                });

                            firebase
                                .database()
                                .ref("Responses/Classroom/" + class_id + `/${q_id}/` + `${user.uid}/`)
                                .once("value")
                                .then(async (snapshot) => {

                                    snapshot.forEach(function (childSnapshot) {
                                        var childData = childSnapshot.val();
                                        display = childData;
                                        console.log(childData);
                                        localStorage.setItem(childData[0], JSON.stringify(childData));

                                    });

                                }).then(() => {
                                    let minTime = [];

                                    for (let i = 0; i < localStorage.length; i++) {
                                        let Nam = localStorage.getItem(i);
                                        Nam = JSON.parse(localStorage.getItem(i));
                                        if (Nam) {
                                            minTime.push(Nam[7]);
                                        }
                                        // console.log(minTime)
                                    }
                                    setMinTime(Math.min(...minTime));
                                    if (crrDate > endDateObj) {
                                        if (display) {
                                            document.getElementById("resume").style.display = "none";
                                        } else {
                                            document.getElementById("startQuiz").style.display = "none";
                                        }
                                    }

                                })



                        })
                });
        });




    }, []);



    useEffect(() => {
        window.onbeforeunload = function () {
            localStorage.removeItem('sd')
        };
        // window.onunload = () => {
        //     localStorage.removeItem('sd');
        //     // localStorage.setItem('len',JSON.stringify(quizmainData.quiz_data));
        //     // for (let i = 0; i < quizmainData.quiz_data.length; i++) {
        //     //     if (localStorage.getItem(i)) {
        //     //         localStorage.removeItem(i);
        //     //     }
        //     //     else{
        //     //         continue;
        //     //     }
        //     // }
        //  }
    }, []);








    // const onChange = () => {
    // //save code to go here
    //   setEditorState(quizmainData.quiz_desc)
    // }

    // return <Editor editorState={editorState} onChange={setEditorState} />;



    if (typeof window !== "undefined") {
        local = localStorage;
        storage = localStorage.getItem(0);
    }

    const [bool, setBool] = useState(false);
    const [submit, setSubmit] = useState(false);
    const change = async () => {
        setBool(true);
    };
    const resume = async () => {
        await setBool(true);
    };
    return (
        <div>
            {!bool ? (
                <div style={{ marginTop: "100px", padding: "0" }}>
                    <Container>
                        <Row style={{ display: "flex", justifyContent: "center" }}>
                            <Col className="instructionCard" md={10}>
                                <h2 style={{ color: "#172b4d" }} className="title">
                                    {quizmainData.name}
                                </h2>
                                <br />
                                <h3 className="titl">
                                    {/* {ReactHtmlParser(quizmainData.quiz_desc)} */}
                                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam deserunt unde ex facilis perferendis consequuntur ipsa pariatur nemo omnis repellat fugit distinctio eius quibusdam, qui perspiciatis eaque eveniet dolore consectetur.</p>
                                </h3>
                                <img src={require("assets/img/brand/logoTiles.png")} alt="" width={'100px'} className="p-2" style={{ position: "absolute", top: "7%", right: "5%" }} />
                                {/* <div style={{display:"flex",justifyContent:"space-evenly"}}>
                                <h2>Start date : {quizmainData.start_date}</h2>
                                <h2>End date : {quizmainData.end_date}</h2>
                                </div> */}

                            </Col>
                            {/* <Col md={3} className="instructionCard">
                                <h2>Start date : {quizmainData.start_date}</h2>
                                <h2>End date : {quizmainData.end_date}</h2>
                                <h1>
                                    <i className="far fa-clock" /> {quizmainData.duration} Minutes
                                </h1>
                            </Col> */}

                        </Row>
                    </Container>
                    <Container>
                        <Row style={{ display: "flex", justifyContent: "center" }}>

                            <Col md={10} className="instructionCard" style={{ padding: "0" }}>
                                <div style={{ backgroundColor: "var(--default)", display: "flex", justifyContent: "space-between", padding: "25px", borderRadius: "10px 10px 0 0" }}>
                                    <h2 style={{ color: "white", }}>Start date : {quizmainData.start_date}</h2>
                                    <div className="text-center" style={{ backgroundColor: "white", display: "inline-block", borderRadius: "5px", padding: "6px 5px", boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}>
                                        <h1 style={{ color: "var(--default)", fontSize: "1.3em", marginBottom: "0" }}>
                                            <i className="far fa-clock" /> {quizmainData.duration} Minutes
                                        </h1>
                                    </div>
                                    <h2 style={{ color: "white", }}>End date : {quizmainData.end_date}</h2>
                                </div>
                                <div style={{ padding: "25px" }}>


                                    <h1 style={{ color: "#172b4d", padding: "10px 0px" }}>Instructions</h1>
                                    <ul style={{ color: "#172b4d", fontSize: "1.2em" }}>
                                        <li><h3 style={{ color: "#172b4d" }}>Do not Cheat</h3></li>
                                        <li><h3 style={{ color: "#172b4d" }}>Do not Cheat With Google</h3></li>
                                        <li><h3 style={{ color: "#172b4d" }}>Do not Cheat with Discord</h3></li>
                                        <li><h3 style={{ color: "#172b4d" }}>OPen Your Camera</h3></li>
                                        <li><h3 style={{ color: "#172b4d" }}>Do not Cheat</h3></li>
                                        <li><h3 style={{ color: "#172b4d" }}>Do not Cheat With Google hbvhjbh knfjnjkv jenfkjec nfjenf enfjkenfckjenfkjcewnfkjn</h3></li>
                                        <li><h3 style={{ color: "#172b4d" }}>Do not Cheat with Discord</h3></li>
                                        <li><h3 style={{ color: "#172b4d" }}>OPen Your Camera</h3></li>
                                        <li><h3 style={{ color: "#172b4d" }}>Do not Cheat</h3></li>
                                        <li><h3 style={{ color: "#172b4d" }}>Do not Cheat With Google</h3></li>


                                    </ul>
                                </div>
                            </Col>

                        </Row>
                    </Container>
                    <div style={{ position: "fixed", top: "0%", width: "100%" }}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#32325d" fill-opacity="1" d="M0,192L720,64L1440,96L1440,0L720,0L0,0Z"></path></svg>
                    </div>
                    <div style={{ position: "fixed", top: "0%", width: "100%" }}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#32325d" fill-opacity="1" d="M0,32L720,192L1440,96L1440,0L720,0L0,0Z"></path></svg>
                    </div>

                    {AnsD ? <h1>Submitted</h1> : storage ? (
                        <button
                            onClick={resume}
                            className="btn main-btn "
                            id="resume"
                            style={{

                                zIndex: "2",
                                margin: "50px auto",
                                color: "#172b4d",
                                background: "white",
                                padding: "7px 10px",
                                border: "2px solid #172b4d",
                                borderRadius: "5px",
                                fontSize: "20px",
                                display: "block",

                            }}
                        >
                            Resume
                        </button>

                    ) : AnsD === null ? (
                        <button
                            className="btn main-btn "
                            onClick={change}
                            id="startQuiz"
                            style={{


                                zIndex: "2",
                                margin: "50px auto",
                                color: "#172b4d",
                                background: "white",
                                padding: "3px 5px",
                                border: "2px solid #172b4d",
                                borderRadius: "5px",
                                fontSize: "20px",
                                display: "block",
                            }}
                        >
                            Start Quiz
                        </button>
                    ) : <h1 style={{ marginTop: "50px" }}>Submitted</h1>}
                </div>
            ) : (
                <Quiz sd={timeLeft < timeInt ? timeLeft : storage ? MinTime / 60 : quizmainData.duration} nm={quizmainData.name} SetQuizFooter={setQuizFooter} />
            )}
            {/* {submit ? <Submit /> : null} */}
            <br /><br />
            {quizFooter ? <footer className="quizFooter d-flex justify-content-between">
                <img src={require("assets/img/brand/logoTiles.png")} alt="" width={'90px'} height={'50px'} className="p-2 ml-3" />
                <div style={{ fontSize: "1em", display: "flex", alignItems: "center", fontWeight: "bold" }} >
                    Powered By
                    <img src={'https://tdpvista.in/static/media/fulllogo.ac4a5e58.png'} alt="" width={'120px'} className="p-2 mr-3" />
                </div>
            </footer> : null}
        </div>
    );
}

export default Quizmain;
