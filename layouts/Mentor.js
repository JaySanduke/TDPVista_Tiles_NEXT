import React , { useState,useEffect } from "react";
import { useRouter } from "next/router";
// reactstrap components
import { Container } from "reactstrap";
// core components
import MentorNavbar from "components/Navbars/MentorNavbar.js";
import MentorFooter from "components/Footers/MentorFooter.js";
import MentorSidebar from "components/Sidebar/MentorSidebar.js";
import firebase from 'config/firebase-tiles';
import routes from "mentorRoutes.js";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

function Mentor(props) {
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
    return "Brand";
  };
    return (
      <>
        <MentorSidebar
          {...props}
          routes={routes}
          logo={{
            innerLink: "/mentor/dashboard",
            imgSrc: require("assets/img/brand/nextjs_argon_black.png"),
            imgAlt: "...",
          }}
        />
        <div className="main-content" ref={mainContentRef}>
          <MentorNavbar {...props} brandText={getBrandText()} />
          {props.children}
          <Container fluid>
            <MentorFooter />
          </Container>
        </div>
      </>
    );
}

export default Mentor;
