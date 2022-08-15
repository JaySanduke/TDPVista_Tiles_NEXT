import firebase from "firebase";
import "firebase/storage";
var firebaseConfig = {
  apiKey: "AIzaSyCpH1OV4BOnqP3zLse_RhLUnZ30JN6I2Sc",
  authDomain: "tdp-vista-tiles-af85a.firebaseapp.com",
  projectId: "tdp-vista-tiles-af85a",
  storageBucket: "tdp-vista-tiles-af85a.appspot.com",
  messagingSenderId: "81930218945",
  appId: "1:81930218945:web:4a3e644eff2ebef37a5340",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app(); // if already initialized, use that one
}

const storage = firebase.storage();
export { storage, firebase as default };





