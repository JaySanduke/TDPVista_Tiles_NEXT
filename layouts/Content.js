import React, { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
// reactstrap components
// core components
import Navbar from "components/Navbars/ContentNavbar.js";
import ContentFooter from "components/Footers/ContentFooter.js";

import firebase from 'config/firebase-tiles.js';


// import { Editor } from "react-draft-wysiwyg";
// import {EditorState , convertToRaw } from 'draft-js';
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";

// Demo styles, see 'Styles' section below for some notes on use.
import "react-accessible-accordion/dist/fancy-example.css";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import {
  Card,
  CardHeader,
  CardBody,
  Container,
  Form,
  FormGroup,
  Input,
  InputGroup,
  Button,
  Label,
} from "reactstrap";



function Content(props) {
  // used for checking current route
  const router = useRouter();
  let mainContentRef = React.createRef();
  const [course, setCourse] = useState([]);
  const [id, setID] = useState();
  const [prev, setPrev] = useState();
  const [next, setNext] = useState();
  const [name, setName] = useState();
  const [paths, setPaths] = useState();

  var x = [];
  var z = [];

  React.useEffect(() => {
    var currenturl = window.location.search;
    var currenturlsearch = new URLSearchParams(currenturl);
    var ID = currenturlsearch.get("id");
    var Name = currenturlsearch.get("name");
    setID(ID);
    setName(Name);
    firebase
      .database()
      .ref("Courses/" + ID)
      .on("value", (snapshot) => {
        if (snapshot.val() !== null) {

          x = snapshot.val().content;

          setCourse(x);
          // console.log(x);
          // console.log(course);


        }
        else {
          setCourse({});
        }

      });
  }, [course]);
  React.useEffect( () => {
    if (course) {
      for (let i = 0; i < course.length; i++) {
        let p = course[i].modules;
        for (let j = 0; j < p.length; j++) {
          z.push(p[j].path);

        }
      }
      setPaths(z)
      

    }
  }, [course])
  
  
  React.useEffect(() => {
    if (paths) {
      for (let i = 0; i < paths.length; i++) {
        if (paths[i] == name) {
          setPrev(paths[i - 1]);
          setNext(paths[i + 1]);
        }
      }
      
    }
  },[course])





  const getBrandText = () => {
    for (var i = 0; i < course.length; i++) {
      if (router.route.indexOf(course[i].layout + course[i].component) !== -1) {
        return course[i].name;
      }
    }
    return "Brand";
  };
  return (
    <>
      <div>

        {/* <ContentSidebar
        {...props}
        routes={course}
        logo={{
          innerLink: "/Content/HTML/HTML-1",
          imgSrc: require("assets/img/brand/nextjs_argon_black.png"),
          imgAlt: "...",
        }}
      /> */}
        <div style={{ position: "absolute", top: "0%", left: "0%", width: "20%", minHeight: "100vh", backgroundColor: "#f4f4f4" }}>
          {course ? course.map((data, index) =>
            <div key={index}>
              <h1>{data.contentTitle}</h1>
              <Accordion allowZeroExpanded>
                <AccordionItem>
                  <AccordionItemHeading>
                    <AccordionItemButton>
                      {data.contentTitle}
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    {data.modules.map((DATA, i) =>

                    (


                      <div className="d-flex" key={i}>

                        <a href={`/${DATA.path}?id=${id}&name=${DATA.path}`} key={DATA.path}>

                          <span style={{ color: "black" }}>{DATA.name}</span>

                        </a>

                      </div>
                    )

                    )}
                  </AccordionItemPanel>
                </AccordionItem>
              </Accordion>
            </div>
          ) : null}
        </div>

        <div style={{ padding: "5px", width: "100%", display: "flex", justifyContent: "flex-end", position: "fixed", zIndex: "7", float: "right" }}>

          <a href={`/${prev}?id=${id}&name=${prev}`} style={{ padding: "5px" }}>
            <button className="btn btn-primary">Prev</button>
          </a>
          <a href={`/${next}?id=${id}&name=${next}`} style={{ padding: "5px" }}>
            <button className="btn btn-secondary">Next</button>
          </a>
        </div>
        <div className="main-content" ref={mainContentRef} style={{ width: "80%", padding: "5px", position: "relative", float: "right", marginTop: "40px" }}>
          <Navbar {...props} brandText={getBrandText()} />
          {props.children}
          <Container fluid>

            <ContentFooter />
          </Container>
        </div>
        <div style={{ padding: "5px", width: "80%", display: "flex", justifyContent: "space-evenly" }}>

          <a href={`/${prev}?id=${id}&name=${prev}`} style={{ padding: "5px" }}>
            <button className="btn btn-primary">Prev</button>
          </a>
          <a href={`/${next}?id=${id}&name=${next}`} style={{ padding: "5px" }}>
            <button className="btn btn-secondary">Next</button>
          </a>
        </div>
      </div>
    </>
  );
}

export default Content;
