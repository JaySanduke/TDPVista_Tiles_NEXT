import React, { useState, useEffect, useRef } from "react";
import Quiz from "./quiz";
import Submit from "../UserClass/Submit";
import "../../assets/css/quiz.css";
import logo from "assets/img/logo.png";
import "../../assets/css/quiz.css";

import ReactHtmlParser, {
    processNodes,
    convertNodeToElement,
    htmlparser2,
} from "react-html-parser";
import UserHeader from "components/Headers/UserHeader.js";
import UserClassroom from "layouts/UserClassroom";
import { Editor, EditorState } from "draft-js";
import firebase from "../../config/firebase-tiles";

function QuizReview() {
    const radiosWrapper = useRef();
    const [quizReviewData, setquizReview_data] = useState([]);
    const [quesData, setquesData] = useState([]);
    const [check, setCheck] = useState(true);
    const [answer, setAnswer] = useState([]);
    const [crtAns, setCrtAns] = useState([]);
    const [editorState, setEditorState] = useState(() =>
        EditorState.createEmpty()
    );
    //  const[desc, setDesc]=useState("");
    var x = [];
    var y = [];
    useEffect(() => {
        document.getElementById('userHeaderNameId').style.display = 'none';
        document.getElementById('remo').firstChild.style.display = "none";
        document.querySelector(".header").firstElementChild.style.height = '100px';
        document.querySelector(".header").style.minHeight = '100px'
        document.querySelector(".header").classList.remove('pb-8', 'pt-5', 'pt-lg-8');
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
                    var class_id = localStorage.getItem("u_id");

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


                            setquizReview_data(x);

                        });
                    firebase
                        .database()
                        .ref("Answers/Classroom/" + class_id + "/" + q_id + "/" + user.uid + "/data")
                        .once("value")
                        .then(async (snapshot) => {
                            var quesdata = snapshot.val();
                            setquesData(quesdata);
                            console.log(quesdata);
                            if (quesData) {

                                snapshot.val().map((DATA, index) => {
                                    let p = 0;

                                    console.log(DATA)
                                    let ANS = DATA;
                                    if (ANS) {
                                        y.push(ANS[4]);
                                        if (ANS[6]) {

                                            for (let i = 0; i < ANS[6].length; i++) {
                                                if (document.getElementById(`${index}O${ANS[6][i]}`)) {
                                                    document.getElementById(`${index}O${ANS[6][i]}`).checked = true;
                                                    document.getElementById(`${index}O${ANS[6][i]}`).style.boxShadow = 'rgba(0, 0, 0, 0.24) 0px 3px 8px;';
                                                }
                                            }


                                            if (ANS[6].length != ANS[4].length) {

                                                setCheck(false);
                                                p = 1;
                                            }

                                            var stringArray = ANS[6];
                                            const arr2 = [];
                                            length = stringArray.length;
                                            for (var i = 0; i < length; i++) {
                                                arr2.push(parseInt(stringArray[i]));
                                            }
                                            const arr3 = arr2.sort();
                                            const arr1 = ANS[4].sort();
                                            setAnswer(ANS[4]);


                                            console.log(arr3)
                                            console.log(arr1)

                                            for (let i = 0; i < arr1.length; i++) {

                                                if (arr1[i] !== arr3[i]) {
                                                    console.log('object', i)
                                                    setCheck(false);
                                                    p = 1;
                                                    break;
                                                }

                                            }
                                            if (p === 0) {
                                                document.getElementById(`cardBg${index}`).style.backgroundColor = '#b0ffb0';
                                            }
                                            else {
                                                document.getElementById(`cardBg${index}`).style.backgroundColor = '#ffbcb0';

                                            }
                                        }
                                    }
                                })
                            }


                        });
                });
        });
        setCrtAns(y);
    }, []);

    // const onChange = () => {
    // //save code to go here
    //   setEditorState(quizReviewData.quiz_desc)
    // }

    // return <Editor editorState={editorState} onChange={setEditorState} />;
    return (
        <>
            <UserHeader />
            <div>
                <h1 className="p-3">Quiz Review</h1>
                {quizReviewData ? quizReviewData.map((data, Index) => (

                    <div className="card-content p-3" >
                        <div className="content" id={`cardBg${Index}`}>
                            <h2 className="m-3">{Index + 1}. {ReactHtmlParser(data.question)}</h2>

                            <div className="control m-1" ref={radiosWrapper}>
                                {
                                    data.correct === 1 ?
                                        data.options.map((choice, index) => (
                                            <label className="radio" key={index} style={{ display: "flex", justifyContent: "flex-start", alignItems: "center", textAlign: 'left' }}>
                                                <div className="choiceNo ">{index + 1}</div>
                                                <input type="radio" id={`${Index}O${index}`} className="uncheck" name="answer" value={index} disabled />
                                                {ReactHtmlParser(choice)}
                                            </label>
                                        ))
                                        : data.options.map((choice, index) => (
                                            <label className="radio" key={index} style={{ display: "flex", justifyContent: "flex-start", alignItems: "center" }}>
                                                <div className="choiceNo ">{index + 1}</div>
                                                <input type="checkbox" id={`${Index}O${index}`} className="uncheck" name="answer" value={index} disabled />
                                                {ReactHtmlParser(choice)}
                                            </label>
                                        ))
                                    //   : null
                                    // <TextField id="outlined-basic"
                                    //   label="Outlined"
                                    //   variant="outlined"
                                    //   fullWidth
                                    //   multiline
                                    //   rows={10}
                                    // />
                                }
                            </div>
                        </div>

                        {crtAns[Index] ? <div className="content my-3">
                            <h1>Answers:</h1>
                            <div className="p-3"><h2>Correct Answers</h2> {crtAns[Index].map((res) => (<h3>Option - {res + 1}</h3>))}</div>

                        </div> : null}
                    </div>
                )) : null}

            </div>
        </>
    );
}
QuizReview.layout = UserClassroom;

export default QuizReview;
