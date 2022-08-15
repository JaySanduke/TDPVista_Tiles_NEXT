import React, { useState, useEffect } from 'react'
import firebase from "../../config/firebase-tiles";
import "../../assets/css/submit.css"



function Submit() {

    const [marks, setMarks] = useState();
    const [score, setScore] = useState(0);
    const [check, setCheck] = useState(true);
    const [correct, setCorrect] = useState(0);
    const [answered, setAnswered] = useState(0);
    const [tQues, setTQues] = useState(0);
    const [class_id, setClass_id] = useState(localStorage.getItem("u_id"));
    const [q_id, setQ_id] = useState();




    // useEffect(() => {
    //     const contactData = firebase.database().ref('Answers');
    //     contactData.on('value', async (snapshot) => {
    //         const Answers = snapshot.val();
    //         const markedData = [];
    //         const realData = [];
    //         const Marks = [];

    //         for (let id in Answers) {
    //             markedData.push(Answers[id][6]);
    //             Marks.push(Answers[id][5])
    //             realData.push(Answers[id][4]);

    //         }
    //         await setAnsData(realData);
    //         await setMarks(Marks);
    //         await setMarked(markedData);
    //     })
    // }, [])




    useEffect(async () => {
        let total = 0;
        let x = 0;
        let y = 0;
        let z = 0;
        let p = 0;
        for (let j = 0; j < localStorage.length - 1; j++) {

            let ANS = JSON.parse(localStorage.getItem(j))
            if (ANS) {

                z++;
                setTQues(z);
                if (ANS[6].length) {
                    x++;
                    setAnswered(x);
                }
                if (ANS[6].length != ANS[4].length) {

                    setCheck(false);
                    p = 1;
                    localStorage.removeItem(j);
                    continue;
                }

                var stringArray = ANS[6];
                const arr2 = [];
                length = stringArray.length;
                for (var i = 0; i < length; i++) {
                    arr2.push(parseInt(stringArray[i]));
                }
                const arr3 = await arr2.sort();
                const arr1 = await ANS[4].sort();

                console.log(arr3)
                console.log(arr1)

                for (let i = 0; i < arr1.length; i++) {

                    if (arr1[i] !== arr3[i]) {
                        console.log('object', i)
                        setCheck(false);
                        p = 1;
                        localStorage.removeItem(j);
                        break;
                    }

                }
                if (p === 0) {
                    console.log('object')
                    total += parseInt(ANS[5]);
                    setScore(total);
                    y++;
                    setCorrect(y);
                    localStorage.removeItem(j);
                }
            }
            else {
                continue;
            }
        }
        var currenturl = window.location.search;
        var currenturlsearch = new URLSearchParams(currenturl);
        var q_id = currenturlsearch.get("q_id");
        setQ_id(q_id);
        var class_id = (localStorage.getItem('u_id'));
        if (score) {
            firebase.auth().onAuthStateChanged((user) => {
                firebase
                    .database()
                    .ref()
                    .child("Answers/Classroom/" + class_id + `/${q_id}/` + `${user.uid}/`)
                    .push({q_id})


            });
        }


    }, [])






    return (
        <>
            {/* <div className="submit">
                <h1>SUBMITTED!!</h1>
                <p>Your Quiz Is Submitted Successfully!!</p>
                <div>
                    <h1>20/30</h1>
                </div>
            </div> */}
            <div class="wrapper" style={{ zIndex: "2" }}>
                <div class="main_card">
                    <div class="card_left">
                        <div class="card_datails">
                            <h1>Your Quiz Has Been Submitted Successfully!!</h1>
                            <div class="card_cat">
                                <p class="PG">{score}</p>
                                <p class="year">{answered}</p>
                                <p class="genre">{tQues - answered}</p>
                                <p class="time">{correct}</p>
                            </div>

                            <div class="social-btn">
                                <a href={"/UserClass/dashboard?u_id="+class_id}>
                                <button>
                                    <i class="ni ni-collection"></i> Back to classroom
                                </button>
                                </a>
                                <a href={"/UserClass/QuizReview?q_id="+q_id}>
                                <button>
                                    <i class="ni ni-paper-diploma"></i> Review
                                </button>
                                </a>
                                <button>
                                    <i class="ni ni-book-bookmark"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div class="card_right">
                        <div class="img_container">
                            <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=387&q=80" alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="margin">
            </div>
        </>
    )
}

export default Submit