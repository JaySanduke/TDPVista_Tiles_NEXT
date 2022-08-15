import React from "react";
import { useRouter } from "next/router";
// reactstrap components
import { Container } from "reactstrap";
// core components
import WorkshopNavbar from "components/Navbars/UserNavbar.js";
import WorkshopFooter from "components/Footers/WorkshopFooter.js";
import Sidebar from "components/Sidebar/UserWorkshopSidebar.js";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import routes from "UserWorkshopRoutes.js";

import '@fullcalendar/common/main.css' // @fullcalendar/react imports @fullcalendar/common
import '@fullcalendar/daygrid/main.css' // @full
function UserWorkshop(props) {
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
    return "Workshop";
  };
  return (
    <>
      <Sidebar
        {...props}
        routes={routes}
        logo={{
          innerLink: "/UserWorkshop/Workshopdetails",
          imgSrc: require("assets/img/brand/nextjs_argon_black.png"),
          imgAlt: "...",
        }}
      />
      <div className="main-content" ref={mainContentRef}>
        <WorkshopNavbar {...props} brandText={getBrandText()} />
        {props.children}
        <Container fluid>
          <WorkshopFooter />
        </Container>
      </div>
    </>
  );
}

export default UserWorkshop;
