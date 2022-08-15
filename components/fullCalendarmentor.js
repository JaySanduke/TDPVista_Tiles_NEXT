
import React from 'react';
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
// import { Calendar } from '@fullcalendar/core'; // include this line
import "assets/scss/calendar.scss";
import $ from 'jquery';
// export for others scripts to use

// window.jQuery = jQuery;
if (typeof window !== "undefined") {
  require("bootstrap/dist/js/bootstrap.min.js");
  window.$ = $;
}

import firebase from "config/firebase-tiles";

let CalendarComponent;
let display = [];
const FullCalendar = (props) => {
  const [calendarLoaded, setCalendarLoaded] = useState(false);
  // const [classes, setclasses] = useState(0);
  // const [quiz, setquiz] = useState(0);
  // const [task, settask] = useState(0);






  useEffect(() => {
    // console.log(props.events);
    CalendarComponent = dynamic({
      modules: () => ({
        calendar: import("@fullcalendar/react"),
        dayGridPlugin: import("@fullcalendar/daygrid"),
        timeGridPlugin: import("@fullcalendar/timegrid"),
        interactionPlugin: import("@fullcalendar/interaction"),
      }),
      render: (props, { calendar: Calendar, ...plugins }) => (
        <>
          <Calendar
            {...props}
            plugins={Object.values(plugins)}
            dateClick={(arg) => handleDateClick(arg, props.events)}
            ref={props.myRef}
          />

          <div className="modal" id="myModal">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h4 className="modal-title align-center"></h4>
                  <button type="button" className="close" data-dismiss="modal">
                    &times;
                  </button>
                </div>

                <div
                  style={{
                    padding: "15px",
                    fontSize: "16px",
                    width: "100%",
                    lineHeight: "1.5",
                    display: "block",
                  }}
                >
                  <div
                    className="modal-body "
                    style={{ whiteSpace: "pre-line" }}
                  >
                    <h3></h3>
                  </div>
                </div>

                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-danger"
                    data-dismiss="modal"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      ),

      ssr: false,
    });

    let handleDateClick = (arg, eventsList) => {
      $("#myModal").modal("show");
      $(".modal-body").html("");
      $(".modal-title").html("<h3>" + arg.dateStr + "</h3>");
      display = [];
      // console.log(arg.dateStr);

      var events = eventsList;

      var count = 0;
      for (var i = 0; i < events.length; i++) {
        if (events[i].start === arg.dateStr) {
          count++;
          if (events[i].eventType === "Quiz") {
            if (events[i].classroom === true) {
              if (events[i].status == "Active") {

                // 
                display.push(
                  `<h2>${events[i].title}</h2>  <b>Start Time</b> :- ${events[i].start_time}    <b>End Time</b> :- ${events[i].end_time} <br> <b>Status</b> :-  ${events[i].blocked ? "Blocked" : events[i].status} <br/> <a href="/MentorClass/quizDetails?id=${events[i].token}"><button style="background-color: #4CAF50; padding:10px;border:none; color: white;">Quiz Details</button></a> 
                <hr/>
               
            `
                )

                // setquiz(quiz+1);
              }
              else {
                display.push(
                  `<h2>${events[i].title}</h2>  <b>Start Time</b> :- ${events[i].start_time}    <b>End Time</b> :- ${events[i].end_time} <br> <b>Status</b> :-  ${events[i].blocked ? "Blocked" : events[i].status}<br/> <a href="/MentorClass/quizDetails?id=${events[i].token}"><button style="background-color: #4CAF50; padding:10px;border:none; color: white;">Quiz Details</button></a> 
              
              Quiz InActive
                <hr/>
            `
                )
              }
            }
          
            else if (events[i].classroom != true) {
              if (events[i].status == "Active") {

                // 
                display.push(
                  `<h2>${events[i].title}</h2>  <b>Start Time</b> :- ${events[i].start_time}    <b>End Time</b> :- ${events[i].end_time} <br> <b>Status</b> :-  ${events[i].blocked ? "Blocked" : events[i].status} <br/> <a href="/MentorWorkshop/WorkshopQuizDetails?id=${events[i].token}"><button style="background-color: #4CAF50; padding:10px;border:none; color: white;">Quiz Details</button></a> 
                <hr/>
               
            `
                )

                // setquiz(quiz+1);
              }
              else {
                display.push(
                  `<h2>${events[i].title}</h2>  <b>Start Time</b> :- ${events[i].start_time}    <b>End Time</b> :- ${events[i].end_time} <br> <b>Status</b> :-  ${events[i].blocked ? "Blocked" : events[i].status}<br/> <a href="/MentorWorkshop/WorkshopQuizDetails?id=${events[i].token}"><button style="background-color: #4CAF50; padding:10px;border:none; color: white;">Quiz Details</button></a> 
              
              Quiz InActive
                <hr/>
            `
                )
              }
            }
        } else if (events[i].eventType === "Task") {
          if (events[i].classroom === true) {

            display.push(`<h2>${events[i].title}</h2>  <b>Due Date</b> :- ${events[i].start}  <a href="/MentorClass/taskDetails?id=${events[i].token}"><button>Task Details</button></a>               <hr/>
`)
          }
          else {
            display.push(`<h2>${events[i].title}</h2>  <b>Due Date</b> :- ${events[i].start}  <a href="/MentorWorkshop/WorkshopTaskDetails?id=${events[i].w_id}&t_id=${events[i].token}"><button>Task Details</button></a>                <hr/>
`)
          }
        }
        else {

         
          var enable = enableMeet(events[i]);
        //   if(events[i].meet_started === 0){
        //     display.push(`<h2>${events[i].title}</h2>
        //     <a><button disabled style="background-color: grey;  color: white">Meet Not Yet Started</button></a>               <hr/>

        //  `);
        //   }

          if (enable === 0) {

            display.push(`<h2>${events[i].title}</h2><b>Start Time</b> :- ${events[i].time}    <b>End Time</b> :- ${events[i].end_time} <br> 
                              <a><button disabled style="background-color: grey;  color: white">Meet Expired</button></a>               <hr/>

                           `);
          } else if (enable === 2) {


            display.push(`<h2>${events[i].title}</h2> 
            <b>Start Time</b> :- ${events[i].time}    <b>End Time</b> :- ${events[i].end_time} <br> 
               <a href="/Meet/jitsi?id=${events[i].token}"><button onClick= ${events[i].classroom ? startMeet(events[i].token) : startWMeet(events[i].token)} style="background-color: #4CAF50; padding:15px;border:none; color: white;">Start Meet</button></a>          
     <hr/>`




            );
          }
          else if (enable === 1 || events[i].meet_started === 0) {
            display.push(`<h2>${events[i].title}</h2> <b>Start Time</b> :- ${events[i].time}    <b>End Time</b> :- ${events[i].end_time} <br> 
                <a><button style="background-color: grey;color: white">Meet Not yet started</button></a>               <hr/>

              `);
          
        }
       


        }

      }else if (events[i].end === arg.dateStr) {
        count++;
        display.push(
          `<h2>${events[i].title}</h2>  End Time :- ${events[i].end_time}               <hr/>
`
        );
      }
    }

    if (count === 0) {
      display.push("<h2>Nothing Scheduled Here! </h2>");
    }

    $(".modal-body").html(display.join(""));
  };
  setCalendarLoaded(true);
});

let showCalendar = (props) => {
  if (!calendarLoaded) return <div>Loading ...</div>;
  return <CalendarComponent {...props} />;
};

return <div>{showCalendar(props)}</div>;
}

 const startMeet = (id) => {
   var ID = localStorage.getItem("id");

   firebase.database().ref(`Classroom/${ID}/data/meet/${id}/data`).update({
     meet_started: 1,
   })
 }

const startWMeet = (id) => {
  var ID = localStorage.getItem("w_id");

  firebase.database().ref(`Workshops/${ID}/data/meet/${id}/data`).update({
    meet_started: 1,
  })
}

const enableMeet = (item) => {

  var today = new Date(),
    todayDate =
      today.getFullYear() +
      "-" +
      ((today.getMonth() + 1 < 10 ? "0" : "") + (today.getMonth() + 1)) +
      "-" +
      ((today.getDate() < 10 ? "0" : "") + today.getDate());

  var time = today.getHours() + ":" + today.getMinutes();
  var todayHour = parseInt(today.getHours());
  var todayMinutes = parseInt(today.getMinutes());
  var todayYear = parseInt(today.getFullYear());
  var todayMonth = parseInt(today.getMonth);
  var todayDay = parseInt(today.getDate());

  var meetStartHour = parseInt(item.time.slice(0, 2));
  var meetEndHour = parseInt(item.end_time.slice(0, 2));
  var meetstartMinutes = parseInt(item.time.slice(3, 6));
  var meetEndMinutes = parseInt(item.end_time.slice(3, 6));
  var meetYear = parseInt(item.start.slice(0, 4));
  var meetMonth = parseInt(item.start.slice(5, 7));
  var meetDay = parseInt(item.start.slice(8, 10));







  var enableJoin = 0;
  var msg = "";
  if (item.start === todayDate) {
    if (todayHour === meetStartHour && todayMinutes >= meetstartMinutes) {
      enableJoin = 2;
      // console.log("ok")

    }
     if (todayHour === meetEndHour && todayMinutes <= meetEndMinutes) {
      enableJoin = 2;
    }
     if (todayHour >= meetStartHour
      // && todayHour <= meetEndHour
    ) {
      enableJoin = 2;

    }


     if(todayHour === meetEndHour && todayMinutes > meetEndMinutes){
      enableJoin = 0; 
      console.log(todayMinutes)
      console.log(meetEndMinutes)

    }
     if(todayHour <= meetStartHour && todayMinutes < meetstartMinutes){
      enableJoin = 1;
      console.log(todayMinutes)
      console.log(meetStartHour)
      // msg = "Not yet Started"
    }
  }
   if (todayYear > meetYear || todayMonth > meetMonth || todayDay > meetDay || todayHour >= meetEndHour ) {
    // msg = "Meet has ended";
    enableJoin = 0;
   
  }  else{
    // msg = "Not yet Started"
    enableJoin = 1;
  
  }
  // // console.log(enableJoin);  enableJoin ?
  //                   <a href={"/Meet/jitsi?id=" + item.data.id}><Button onClick={() => this.enableMeet(item.data.id)} color="success">Start Meet</Button></a>
  //                   : <Button>{msg}</Button>
  return enableJoin;
}


export default FullCalendar;
