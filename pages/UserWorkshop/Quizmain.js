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
function Quizmain() {
    const [quizmainData, setquizmain_data] = useState([]);
    const [endDate, setEndDate] = useState();
    const [AnsD, setAnsD] = useState();
    const [MinTime, setMinTime] = useState();
    const [classID, setClassID] = useState();
    const [editorState, setEditorState] = useState(() =>
        EditorState.createEmpty()
    );
    //  const[desc, setDesc]=useState("");
    var y = [];
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
                        .ref("Quiz/workshopQ/" + q_id)
                        .once("value")
                        .then(async (snapshot) => {
                            snapshot.forEach(function (childSnapshot) {
                                var childData = childSnapshot.val();
                                console.log(childData);
                                setquizmain_data(childData);
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
                                .ref("Answers/Workshop/" + class_id + `/${q_id}/` + `${user.uid}/`)
                                .once("value")
                                .then(async (snapshot) => {

                                    var Ans_Data = snapshot.val();
                                    setAnsD(Ans_Data);

                                });

                            firebase
                                .database()
                                .ref("Responses/Workshop/" + class_id + `/${q_id}/` + `${user.uid}/`)
                                .once("value")
                                .then(async (snapshot) => {

                                    snapshot.forEach(function (childSnapshot) {
                                        var childData = childSnapshot.val();
                                        console.log(childData);
                                        localStorage.setItem(childData[0], JSON.stringify(childData))
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

                                })



                        })
                });
        });
        setEditorState(quizmainData.quiz_desc);
        setEndDate(quizmainData.end_date);
        if (quizmainData.end_date) {
            setEndDate(quizmainData.end_date.slice(-2));
        }
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

    let startDate = 3;


    let crrDate = new Date();
    let local = "";
    let storage = "";
    console.log(endDate)
    useEffect(() => {
        if (crrDate.getDate() > endDate) {
            setSubmit(true);
            if (localStorage.length) {
                document.getElementById("resume").style.display = "none";
            } else {
                document.getElementById("startQuiz").style.display = "none";
            }
        }
    }, []);
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
                <div style={{ margin: "0", padding: "0", textAlign: "center", alignItems: "center" }}>
                    <div style={{ backgroundColor: "#172b4d" }} className="instruction">
                        
                        <div style={{ display: "flex", justifyContent: "space-around", alignItems: "center", marginTop: "-50px" }}>
                            <div style={{ textAlign: "center" }}>
                                <h2 style={{ fontSize: "3.5rem", color: "white" }} className="title">
                                    {quizmainData.name}
                                </h2>
                                <br />
                                <h3 className="titl">
                                    {ReactHtmlParser(quizmainData.quiz_desc)}
                                </h3>
                            </div>

                            <div className="detailRight">
                                <h2>Start date : {quizmainData.start_date}</h2>
                                <h2>End date : {quizmainData.end_date}</h2>
                                <h1>
                                    <i class="far fa-clock" /> {quizmainData.duration} Minutes
                                </h1>
                            </div>
                        </div>
                        <h1 style={{ color: "white",padding:"10px 0px" }}>Instructions</h1>
                        <ol >
                            <li><h3 style={{ color: "white" }}>Do not Cheat</h3></li>
                            <li><h3 style={{ color: "white" }}>Do not Cheat With Google</h3></li>
                            <li><h3 style={{ color: "white" }}>Do not Cheat with Discord</h3></li>
                            <li><h3 style={{ color: "white" }}>OPen Your Camera</h3></li>
                            <li><h3 style={{ color: "white" }}>Do not Cheat</h3></li>
                            <li><h3 style={{ color: "white" }}>Do not Cheat With Google hbvhjbh knfjnjkv jenfkjec nfjenf enfjkenfckjenfkjcewnfkjn</h3></li>
                            <li><h3 style={{ color: "white" }}>Do not Cheat with Discord</h3></li>
                            <li><h3 style={{ color: "white" }}>OPen Your Camera</h3></li>
                            <li><h3 style={{ color: "white" }}>Do not Cheat</h3></li>
                            <li><h3 style={{ color: "white" }}>Do not Cheat With Google</h3></li>


                        </ol>
                    </div>
                    <div style={{ position: "absolute", top: "0%", width: "100%" }}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#32325d" fill-opacity="1" d="M0,192L720,64L1440,96L1440,0L720,0L0,0Z"></path></svg>
                    </div>
                    <div style={{ position: "absolute", top: "0%", width: "100%" }}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#32325d" fill-opacity="1" d="M0,32L720,192L1440,96L1440,0L720,0L0,0Z"></path></svg>
                    </div>
                    <br></br><br></br>
                    {AnsD ? <h1>Submitted</h1> : storage ? (
                        <button
                            onClick={resume}
                            className="btn main-btn "
                            id="resume"
                            style={{

                                width: "15rem",
                                margin: "50px auto",
                                zIndex: "2",

                                color: "white",
                                background: "#172b4d",
                                borderRadius: "50px",
                                fontSize: "20px",
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
                                color: "white",
                                background: "#172b4d",
                                padding: "20px",
                                borderRadius: "50px",
                                fontSize: "20px",
                            }}
                        >
                            Start Quiz
                        </button>
                    ) : <h1 style={{ marginTop: "50px" }}>Submitted</h1>}
                </div>
            ) : (
                <Quiz sd={storage ? MinTime / 60 : quizmainData.duration} nm={quizmainData.name} />
            )}
            {submit ? <Submit /> : null}
        </div>
    );
}

export default Quizmain;
