import React, { useState, useEffect, useRef } from 'react';
import "../../assets/css/quiz.css"
import firebase from "../../config/firebase-tiles";
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';
// import { TextField } from '@mui/material';
const Question = ({ data, numberOfQuestions, activeQuestion, onSetActiveQuestion, seenQues, onSetSeenQues, markedQues, onSetMarkedQues, second, userID }) => {
  const [answer, setAnswer] = useState([]);
  const [error, setError] = useState('');

  let ans = JSON.parse(localStorage.getItem(activeQuestion))
  const radiosWrapper = useRef();
  // const ansData = [
  //   { id: '0', type: 1, question: 'ad@gmail.com', choices: ["Split", "Osijek", "Zagreb", "Rijeka"], ans: [2, 3], markedByUser: [], marks: 'aabb' },
  //   { id: '1', type: 0, question: 'harvanshrathore20@gmail.com', choices: ["Celje", "Ljubljana", "Maribor", "Koper"], ans: [2], markedByUser: [], marks: 'demo' },
  //   { id: '2', type: 1, question: 'abcd@gmail.com', choices: ["Split", "Osijek", "Zagreb", "Rijeka"], ans: [2, 3], markedByUser: [], marks: 'aabb' },
  //   { id: '3', type: 0, question: 'harvanshrathore20@gmail.com', choices: ["Celje", "Ljubljana", "Maribor", "Koper"], ans: [2], markedByUser: [], marks: 'demo' },
  //   { id: '4', type: 1, question: 'abcd@gmail.com', choices: ["Split", "Osijek", "Zagreb", "Rijeka"], ans: [2, 3], markedByUser: [], marks: 'aabb' }
  // ]





  useEffect(() => {
    for (let i = 0; i < 4; i++) {
      const findCheckedInput = radiosWrapper.current.querySelector('input:checked');
      if (findCheckedInput) {
        findCheckedInput.checked = false;
      }
    }
    if (document.getElementById(`${activeQuestion}`).style.borderColor === 'black') {
      document.getElementById(`${activeQuestion}`).style.borderColor = 'rgb(255, 243, 18)';
      document.getElementById(`${activeQuestion}`).style.backgroundColor = 'rgb(255, 243, 18)';
      document.getElementById(`${activeQuestion}`).style.borderRadius = "10%";
    }
    // if (localStorage.length) {
    //   if (ans) {
    //     if (ans[6].length) {
    //       document.getElementById(`${activeQuestion}`).style.borderColor = 'rgb(53, 255, 24)';
    //       document.getElementById(`${activeQuestion}`).style.backgroundColor = 'rgb(53, 255, 24)';
    //       document.getElementById(`${activeQuestion}`).style.borderRadius = "10%";
    //     }
    //     else {
    //       document.getElementById(`${activeQuestion}`).style.borderColor = 'rgb(255, 243, 18)';
    //       document.getElementById(`${activeQuestion}`).style.backgroundColor = 'rgb(255, 243, 18)';
    //       document.getElementById(`${activeQuestion}`).style.borderRadius = "10%";
    //     }
    //   }
    // }
    if (ans) {
      if (ans[6]) {
        if (ans[6].length) {
          for (let i = 0; i < ans[6].length; i++) {
            if (document.getElementById(`${activeQuestion}O${ans[6][i]}`)) {
              document.getElementById(`${activeQuestion}O${ans[6][i]}`).checked = true
            }
          }
        }
      }
    }
  }, [data.question]);
  // useEffect(() => {
  //   const findCheckedInput = radiosWrapper.current.querySelector('input:checked');
  //   if(findCheckedInput) {
  //     findCheckedInput.checked = false;
  //   }
  // }, [data.question]);


  useEffect(async () => {
    // if (document.getElementById(`${activeQuestion}`).style.borderColor != 'rgb(53, 255, 24)') {
    //   console.log('abc')
    //   setAnswer([]);
    // }
    const findCheckedInput = radiosWrapper.current.querySelector('input:checked');
    if (!findCheckedInput) {
      setAnswer([]);
    }
    else {
      if (ans) {
        setAnswer(ans[6])
        await console.log(findCheckedInput.checked)
        document.getElementById(`${activeQuestion}`).style.borderColor = 'rgb(53, 255, 24)';
        document.getElementById(`${activeQuestion}`).style.borderColor = 'rgb(53, 255, 24)';
        document.getElementById(`${activeQuestion}`).style.backgroundColor = 'rgb(53, 255, 24)';
        document.getElementById(`${activeQuestion}`).style.borderRadius = "10%";
      }
    }
  }, [activeQuestion]);

  const send = [
    activeQuestion,
    data.type,
    data.question,
    data.options,
    data.correct,
    data.marks,
    answer,
    second
  ]


  // setInterval(() => {
  { localStorage.setItem(activeQuestion, JSON.stringify(send)); }
  // }, 100);

  let arr = []
  // let minTime = [];
  {
    for (let i = 0; i < localStorage.length; i++) {
      let nam = localStorage.getItem(i)
      nam = JSON.parse(localStorage.getItem(i));
      arr.push(nam);
      // if (nam) {
      //   minTime.push(nam[7])
      // }

      // console.log(minTime)
    }
  }

  // const check=(e)=>{
  // e.target.checked=false;
  // }

  const changeHandler = (e) => {

    const findCheckedInput = radiosWrapper.current.querySelector('input:checked');
    if (findCheckedInput && answer.length === 0) {
      answer.push(findCheckedInput.value)
      findCheckedInput.checked = false;
    }
    else {

      answer.pop()
      answer.push(findCheckedInput.value)
    }
    if (error) {
      setError('');
    }

  }

  const multipleChangeHandler = (e) => {
    if (e.target.checked) {
      answer.push(e.target.value)
      answer.sort();
      setAnswer(answer);
    }
    else {
      // if (ans[6][ans[6].length - 1] === e.target.value) {
      //   answer.pop(e.target.value)
      //   setAnswer(answer);
      // }
      // else {
      //   // const findCheckedInput = radiosWrapper.current.querySelector('input:checked');
      //   // console.log(findCheckedInput)
      //   // findCheckedInput.checked=false;
      //   // setAnswer([]);
      //   for (let i = 0; i < ans[6].length; i++) {
      //     if (document.getElementById(`${activeQuestion}O${ans[6][i]}`).checked) {
      //       document.getElementById(`${activeQuestion}O${ans[6][i]}`).checked = false;
      //       document.getElementById(`${activeQuestion}`).style.borderColor = 'rgb(255, 243, 18)';
      //       document.getElementById(`${activeQuestion}`).style.backgroundColor = 'rgb(255, 243, 18)';
      //       document.getElementById(`${activeQuestion}`).style.borderRadius = "10%";
      //       setAnswer([]);
      //     }
      //   }

      // }
      answer.splice(parseInt(answer.indexOf(e.target.value)), 1);

    }
    if (error) {
      setError('');
    }
  }


  useEffect(() => {
    var classId = localStorage.getItem('u_id');
    var currenturl = window.location.search;
    var currenturlsearch = new URLSearchParams(currenturl);
    var q_id = currenturlsearch.get("q_id");
    firebase
      .database()
      .ref()
      .child("Responses/Classroom/" + classId + "/" + q_id + "/" + userID + "/" + activeQuestion + "/")
      .set(JSON.parse(localStorage.getItem(activeQuestion)))

  });






  // useEffect(() => {
  //   if (minTime.length) {
  //     const time = Math.min(...minTime);
  //     onSetSecond(time)
  //   }
  // }, [])

  //   var max=10800;
  // for (let i = 0; i < arr.length; i++) {
  //   if (max>=arr[i][1]) {
  //     max=arr[i][1];
  //   }
  // }
  // onSetSeconds(max)
  const nextClickHandler = (e) => {

    if (activeQuestion < numberOfQuestions - 1) {
      onSetActiveQuestion(activeQuestion + 1);
    }
  }

  const prevClickHandler = (e) => {
    if (activeQuestion > 0) {
      onSetActiveQuestion(activeQuestion - 1);
    }
  }
  const submitClickHandler = async (e) => {

    const findCheckedInput = radiosWrapper.current.querySelector('input:checked');
    if (findCheckedInput) {
      document.getElementById(`${activeQuestion}`).style.borderColor = 'rgb(53, 255, 24)';
      document.getElementById(`${activeQuestion}`).style.backgroundColor = 'rgb(53, 255, 24)';

      document.getElementById(`${activeQuestion}`).style.borderRadius = "10%";
    }
    else {
      document.getElementById(`${activeQuestion}`).style.borderColor = 'rgb(255, 243, 18)';
      document.getElementById(`${activeQuestion}`).style.backgroundColor = 'rgb(255, 243, 18)';
      document.getElementById(`${activeQuestion}`).style.borderRadius = "10%";
    }
    // firebase
    //   .database()
    //   .ref()
    //   .child("Responses/" + activeQuestion + "/")
    //   .set(JSON.parse(localStorage.getItem(activeQuestion)))

  }
  // useEffect(() => {
  //   var key = firebase.database().ref("response/Classroom").push().key;
  //   firebase
  //           .database()
  //           .ref()
  //           .child("Response/Classroom/" + localStorage.getItem('u_id') + `/` + `data/`)
  //           .push(JSON.parse(localStorage.getItem(activeQuestion)));
  //           localStorage.removeItem(activeQuestion);
  // },[data.question])
  const clearBtn = () => {
    for (let i = 0; i < 4; i++) {
      const findCheckedInput = radiosWrapper.current.querySelector('input:checked');
      console.log(findCheckedInput);
      if (findCheckedInput) {
        findCheckedInput.checked = false;
        setAnswer([]);
        document.getElementById(`${activeQuestion}`).style.borderColor = 'rgb(255, 243, 18)';
        document.getElementById(`${activeQuestion}`).style.backgroundColor = 'rgb(255, 243, 18)';
        document.getElementById(`${activeQuestion}`).style.borderRadius = "10%";
      }
    }
  }


  return (
    <div className="card " id={`Q${data.id}`} style={{minHeight:"85vh",backgroundColor: "#deebf2" }}>
      <div className="btnPrevNext">
        <button className="btn  bntPrev" onClick={prevClickHandler}>&lt;</button>
        {/* <div className="quesno" style={{color:"white"}}><strong>Question<br></br><span  style={{color:"white"}} >{activeQuestion+1} / {numberOfQuestions}</span></strong></div> */}
        <button className="btn  bntNext" onClick={nextClickHandler}>&gt;</button>
      </div>
      <div className="card-content p-3">
        <div className="content">
          <h2 className="m-3 d-flex align-items-center quesPara">{activeQuestion + 1}. {ReactHtmlParser(data.question)}
          </h2>

          <div className="control m-1" ref={radiosWrapper}>
            {
              data.correct.length === 1 ?
                data.options.map((choice, index) => (
                  <label className="radio" key={index} style={{ display: "flex", justifyContent: "flex-start", alignItems: "center", textAlign: 'left' }}>
                    <div className={!answer.map(Number).includes(index)?"choiceNo":"choiceNo choiceNoSelect"}>{index + 1}</div>
                    <input type="radio" id={`${activeQuestion}O${index}`} className="uncheck d-none" name="answer" value={index} onClick={submitClickHandler} onChange={changeHandler}/>
                    {ReactHtmlParser(choice)}
                  </label>
                ))
                : data.options.map((choice, index) => (
                  <label className="radio" key={index} style={{ display: "flex", justifyContent: "flex-start" }}>
                    <div className={!answer.map(Number).includes(index)?"choiceNo":"choiceNo choiceNoSelect"} >{index + 1}</div>
                    <input type="checkbox" id={`${activeQuestion}O${index}`} className="uncheck d-none" name="answer" value={index} onClick={submitClickHandler} onChange={multipleChangeHandler} />
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
          {
              data.correct.length === 1 ?
          <div className='d-flex justify-content-end align-items-center'>
            <button 
            // id="buttonClear"
            className='button-17'
             onClick={clearBtn}>Clear</button>
          </div>:null}
        </div>
      </div>
    </div>
  );
}

export default Question;