import React , { useState,useEffect } from "react";
React.useLayoutEffect = React.useEffect 

import { useRouter } from "next/router";
// reactstrap components
import { Container } from "reactstrap";
// core components
import UserClassNavbar from "components/Navbars/UserClassNavbar.js";
import UserFooter from "components/Footers/UserFooter.js";
import UserSidebar from "components/Sidebar/UserSidebar.js";
import firebase from 'config/firebase-tiles';
import routes from "userclassRoutes.js";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

import '@fullcalendar/common/main.css' // @fullcalendar/react imports @fullcalendar/common
import '@fullcalendar/daygrid/main.css' // @fullcalendar/timegrid imports @fullcalendar/daygrid
import "assets/css/Chatroom.css";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

import "assets/css/classswiper.css";

import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'
// import 'swiper/css';
import 'swiper/components/navigation/navigation.min.css';
import 'swiper/components/pagination/pagination.min.css';
import 'swiper/components/scrollbar/scrollbar.min.css'

import DocumentMeta from "react-document-meta";


// import 'swiper/swiper-bundle.min.css'
// import 'swiper/swiper.min.css'
import "assets/css/classroom.css";
import "assets/css/quizesCards21.css";

function UserClassroom(props) {
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
        <UserSidebar
          {...props}
          routes={routes}
          logo={{
            innerLink: "/userClass/dashboard",
            imgSrc: require("assets/img/brand/nextjs_argon_black.png"),
            imgAlt: "...",
          }}
        />
        <div className="main-content" ref={mainContentRef}>
          <UserClassNavbar {...props} brandText={getBrandText()} />
          {props.children}
          <Container fluid>
            <UserFooter />
          </Container>
        </div>
      </>
    );
}

export default UserClassroom;
