import React from 'react';
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
// import { Calendar } from '@fullcalendar/core'; // include this line
import "assets/scss/calendar.scss";
import $ from "jquery";
if (typeof window !== "undefined") {
  require("bootstrap/dist/js/bootstrap.min.js");
}


let CalendarComponent;
let display = [];
const FullCalendar = (props) => {
  const [calendarLoaded, setCalendarLoaded] = useState(false);


  // function attendstart (cid){
  //   localStorage.setItem("meet_id" , cid)
  // }


  useEffect(() => {
    console.log(props.events);
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
      // console.log(events);
      var count = 0;
      for (var i = 0; i < events.length; i++) {
        if (events[i].start === arg.dateStr) {
          count++;
          if (events[i].eventType === "Quiz") {
            if (events[i].classroom === true) {
              if (events[i].status == "Active") {
                display.push(
                  `<h2>${events[i].title}</h2> Start Time :- ${events[i].start_time}    End Time :- ${events[i].end_time} <br> Status :-  ${events[i].status}
              
               <a href="/UserClass/Quizmain?q_id=${events[i].token}"> <button style="background-color: #33B377; color: white; border : none; padding: 15px; border-radius: 7px;">Start Quiz</button></a>
               <hr>
            `
                )
              }
              else {
                display.push(
                  `<h2>${events[i].title}</h2> Start Time :- ${events[i].start_time}    End Time :- ${events[i].end_time} <br> Status :-  ${events[i].status}
              
              No Quiz Available <hr>
            `
                )
              }
            } else if (events[i].classroom != true) {
              if (events[i].status == "Active") {

                // 
                display.push(
                  `<h2>${events[i].title}</h2>  <b>Start Time</b> :- ${events[i].start_time}    <b>End Time</b> :- ${events[i].end_time} <br> <b>Status</b> :-  ${events[i].blocked ? "Blocked" : events[i].status} <br/> <a href="/UserWorkshop/Quizmain?q_id=${events[i].token}"><button style="background-color: #4CAF50; padding:10px;border:none; color: white;">Quiz Details</button></a> 
              <hr/>
             
          `
                )

                // setquiz(quiz+1);
              }
              else {
                display.push(
                  `<h2>${events[i].title}</h2>  <b>Start Time</b> :- ${events[i].start_time}    <b>End Time</b> :- ${events[i].end_time} <br> <b>Status</b> :-  ${events[i].blocked ? "Blocked" : events[i].status}<br/> <a href="/UserWorkshop/Quizmain?q_id=${events[i].token}"><button style="background-color: #4CAF50; padding:10px;border:none; color: white;">Quiz Details</button></a> 
            
            Quiz InActive
              <hr/>
          `
                )
              }
            }
          } else if (events[i].eventType === "Task") {
            if (events[i].classroom === true) {
              display.push(`<h2>${events[i].title}</h2>  Due Date :- ${events[i].start} 
                
               <a href="/UserClass/taskSubmit?id=${events[i].token}"> <button style="background-color: #4CAF50; border: 2px solid #4CAF50; color: white">Submit Task</button></a>
              <hr>
               `)
            }
            else {
              if (events[i].admin === true) {
                display.push(`<h2>${events[i].title}</h2> Due Date :- ${events[i].start} 
                
                <a href="/workshop/workshopTaskDetails?id=${events[i].w_id}&t_id=${events[i].token}"> <button style="background-color: #4CAF50; border: 2px solid #4CAF50; color: white">Submit Task</button></a>
               <hr>`)
              }
              else {
                display.push(`<h2>${events[i].title}</h2> Due Date :- ${events[i].start} 
                  
                 <a href="/UserWorkshop/taskSubmit?id=${events[i].w_id}&t_id=${events[i].token}"> <button style="background-color: #4CAF50; border: 2px solid #4CAF50; color: white">Submit Task</button></a>
               <hr> `)
              }
            }
          }
          else {

            if(events[i].classroom === true)


{
            var enable = enableMeet(events[i]);

            if (enable === 0) {
              display.push(`  <h2>${events[i].title}</h2>
                              <a><button disabled style="background-color: grey; color: white">Meet Expired</button></a>
                          <hr> `);
            }
            else if (enable === 2  || events[i].meet_started === 1) {
              display.push(`<h2>${events[i].title}</h2> 
              <a href="/Meet/jitsi?id=${events[i].token}"><button style="background-color: #4CAF50; border: 2px solid #4CAF50; color: white" onClick= ${attendclass(events[i].token)} >Join Meet </button></a>
           <hr>`);
            }
            else if (enable === 1 || events[i].meet_started === 0) {
              display.push(`<h2>${events[i].title}</h2>
                <a ><button style="background-color: grey;  color: white">Meet Not yet started</button></a>
             <hr> `);
            }
        
          }

            else{

              var enable = enableMeet(events[i]);

              if (enable === 0) {
                display.push(`  <h2>${events[i].title}</h2>
                                <a><button disabled style="background-color: grey; color: white">Meet Expired</button></a>
                            <hr> `);
              }
              else if (enable === 2  || events[i].meet_started === 1) {
                display.push(`<h2>${events[i].title}</h2> 
                <a href="/Meet/WorkshopJitsi?id=${events[i].token}"><button style="background-color: #4CAF50; border: 2px solid #4CAF50; color: white" onClick= ${attendclass(events[i].token)} >Join Meet </button></a>
             <hr>`);
              }
             else  if (enable === 1 || events[i].meet_started === 0) {
                display.push(`<h2>${events[i].title}</h2>
                  <a ><button style="background-color: grey;  color: white">Meet Not yet started</button></a>
               <hr> `);
              }
         


            }

          }

        } else if (events[i].end === arg.dateStr) {
          count++;
          display.push(
            `<h2>${events[i].title}</h2> End Time :- ${events[i].end_time}               <hr>
`
          );
        }
      }

      if (count === 0) {
        display.push("Nothing Scheduled Here!");
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
const attendclass = (cid) => {
  localStorage.setItem("meet_id", cid)

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
    }
    if (todayHour === meetEndHour && todayMinutes <= meetEndMinutes) {
      enableJoin = 2;
    }
    if (todayHour >= meetStartHour
       && todayHour <= meetEndHour
    ) {
      enableJoin = 2;
    }

    if (todayHour === meetEndHour && todayMinutes > meetEndMinutes) {
      enableJoin = 0;


    }
    if (todayHour <= meetStartHour && todayMinutes < meetstartMinutes) {
      enableJoin = 1;

      // msg = "Not yet Started"
    }
  }
  if (todayYear > meetYear || todayMonth > meetMonth || todayDay > meetDay) {
    // msg = "Meet has ended";
    enableJoin = 0;
  } else {
    // msg = "Not yet Started"
    enableJoin = 1;
  }
  console.log(enableJoin);
  return enableJoin;
}


export default FullCalendar;
