import React , { useState,useEffect } from "react";
import { useRouter } from "next/router";
// reactstrap components
import { Container } from "reactstrap";
// core components
import MentorClassNavbar from "components/Navbars/MentorClassNavbar.js";
import MentorFooter from "components/Footers/MentorFooter.js";
import MentorSidebar from "components/Sidebar/MentorSidebar.js";
import firebase from 'config/firebase-tiles';
import routes from "mentorclassRoutes.js";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

import '@fullcalendar/common/main.css' // @fullcalendar/react imports @fullcalendar/common
import '@fullcalendar/daygrid/main.css' // @fullcalendar/timegrid imports @fullcalendar/daygrid
import "assets/css/Chatroom.css";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
function MentorClassroom(props) {
  // used for checking current route
  const router = useRouter();
  let mainContentRef = React.createRef();
  React.useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    mainContentRef.current.scrollTop = 0;
  }, []);
  const getBrandText = () => {
    for (let i = 0; i < routes.length; i++) {
      if (router.route.indexOf(routes[i].layout + routes[i].path) !== -1) {
        return routes[i].name;
      }
    }
    return "Classroom";
  };
    return (
      <>
        <MentorSidebar
          {...props}
          routes={routes}
          logo={{
            innerLink: "/mentorClass/dashboard",
            imgSrc: require("assets/img/brand/nextjs_argon_black.png"),
            imgAlt: "...",
          }}
        />
        <div className="main-content" ref={mainContentRef}>
          <MentorClassNavbar {...props} brandText={getBrandText()} />
          {props.children}
          <Container fluid>
            <MentorFooter />
          </Container>
        </div>
      </>
    );
}

export default MentorClassroom;
