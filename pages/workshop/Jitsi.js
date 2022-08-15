
import React, {
    Component
 } from 'react';
 import {
   Card,
 } from "reactstrap";
 import Jitsi from 'react-jitsi'
 import Workshop from "layouts/Workshop.js";
 import firebase from "../../config/firebase-tiles";
 

 const VideoConference = () => {
    const jitsiContainerId = "jitsi-container-id";
    const [jitsi, setJitsi] = React.useState({});
  
    const loadJitsiScript = () => {
      let resolveLoadJitsiScriptPromise = null;
  
      const loadJitsiScriptPromise = new Promise(resolve => {
        resolveLoadJitsiScriptPromise = resolve;
      });
  
      const script = document.createElement("script");
      script.src = "https://meet.jit.si/external_api.js";
      script.async = true;
      script.onload = () => resolveLoadJitsiScriptPromise(true);
      document.body.appendChild(script);
  
      return loadJitsiScriptPromise;
    };
  
    const initialiseJitsi = async () => {
      if (!window.JitsiMeetExternalAPI) {
        await loadJitsiScript();
      }
  
      const _jitsi = new window.JitsiMeetExternalAPI("meet.jit.si", {
        parentNode: document.getElementById(jitsiContainerId)
      });
  
      setJitsi(_jitsi);
    };
  
    React.useEffect(() => {
      firebase.auth().onAuthStateChanged((user) => {
        firebase.database().ref(`Admin/${user.uid}`).once("value")
        .then((snap) => {
          var d = snap.val();
          if(d && d.type === 1) {
              initialiseJitsi();
          }
          else {
            alert("only admins allowed ");
            window.location.href = "/";
          }
        })
      })
      
  
      return () => jitsi?.dispose?.();
    }, []);
  
    return (
      <>
        
        
          <div id={jitsiContainerId} style={{  height: 720, width: "100%" }}  />
        
          
      </>
      );
      
  };

  VideoConference.layout = Workshop;
  
  export default VideoConference;
  