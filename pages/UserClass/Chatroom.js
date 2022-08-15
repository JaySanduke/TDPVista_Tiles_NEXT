import React, { lazy, Suspense } from "react";
import firebase from "../../config/firebase-tiles";
import Header from "../../components/Headers/Header";
import "assets/css/Chatroom.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPaperclip,
  faSmile,
  faPaperPlane,
  faEllipsisH,
  faDownload,
  faPlay,
  faTimes,
  faWindowClose,
} from "@fortawesome/free-solid-svg-icons";
// import Picker from "emoji-picker-react";
import 'emoji-mart/css/emoji-mart.css'
import { Picker } from 'emoji-mart'
import DocumentMeta from "react-document-meta";

import getCroppedImg from "../../utils/cropImage";
import Cropper from "react-easy-crop";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Card, CardFooter, CardHeader } from "reactstrap";

import MentorClassroom from "layouts/UserClassroom.js";
let limit = 6;
let once = true;
let latestChat = "";
let chatComplete = false;
var x = [];
let isEmpty = false;
class Chatroom extends React.Component {
  constructor(props) {
    super(props);
    this.imagePreview = this.imagePreview.bind(this);
    this.displayMsgs = this.displayMsgs.bind(this);
    this.handleMsgInputChange = this.handleMsgInputChange.bind(this);
    this.handleMsgSend = this.handleMsgSend.bind(this);
    this.onEmojiClick = this.onEmojiClick.bind(this);
    this.fetchDataFunction = this.fetchDataFunction.bind(this);
    this.fetchNextChat = this.fetchNextChat.bind(this);
    this.toggleEmojiBar = this.toggleEmojiBar.bind(this);
    this.handleChatFile = this.handleChatFile.bind(this);
    this.setCropFunction = this.setCropFunction.bind(this);
    this.setZoomFunction = this.setZoomFunction.bind(this);
    this.onCropCompleteFunction = this.onCropCompleteFunction.bind(this);
    this.uploadNewProfilePic = this.uploadNewProfilePic.bind(this);
    this.toggleMsgBoxMenu = this.toggleMsgBoxMenu.bind(this);
    this.deleteMsg = this.deleteMsg.bind(this);
    this.handleVideoUpload = this.handleVideoUpload.bind(this);
    this.handleReplyMsg = this.handleReplyMsg.bind(this);
    this.closeReplyMsg = this.closeReplyMsg.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.handleReplyMsgSend = this.handleReplyMsgSend.bind(this);
    this.changeStyle = this.changeStyle.bind(this);
    this.state = {
      msgInputValue: "",
      chatMsgsData: [],
      mentorModal: false,
      Modal: false,
      chosenEmoji: null,
      userData: null,
      showEmoji: false,
      msgStartAt: 0,
      msgEndAt: 5,
      msgLimit: 5,
      chatMsgDataDisplay: [],
      inputFileData: null,
      inputTextFileData: null,
      inputFileObject: null,
      croppedAreaPixels: null,
      latestMsgId: "",
      crop: {
        x: 0,
        y: 0,
        width: 250,
        height: 250,
      },
      zoom: 1,
      inputData: null,
      currentDropdown: "",
      showReplyMsgObj: null,
      replyUsername: "",
      replyContent: "",
      replyId: "",
      checkReplyInput: false,
      replyInput: "",
      id: "",
      style: {},
      user_id: "",
      limit: 6,
      url: null,
      type: null,
    };
  }
  componentDidMount() {
    var chatWindow = document.querySelector(".chatMainDiv");
    chatWindow.addEventListener('scroll', () => {
      // console.log("scrolled");
      // console.log("scollTop: ", chatWindow.scrollTop);
      if (chatWindow.scrollTop === 0) {
        this.fetchNextChat();
      }
    });
    let ID = localStorage.getItem("u_id");
    this.setState({ id: ID });
    // document.querySelector('.card').parentElement.style.display = 'none';
    // document.querySelector(".navbar-search").remove();

    document.querySelector(".header").classList.remove("pb-8");
    document.querySelector(".header").classList.remove("pt-5");
    document.querySelector(".header").classList.remove("pt-md-8");
    document.querySelector(".header").classList.add("pt-md-6");
    document.querySelector(".header").classList.add("pt-0");
    document.querySelector(".footer").classList.add("d-none");
    document.querySelector(".footer").classList.remove("d-block");
    // document.getElementById("adminNavTextId").innerHTML =
    //   "Dashboard Course Chatroom";
    // if (limit === 6) {
    //   console.log("Fetch Data Function is running")
      this.fetchDataFunction();
    // }
    // else {
    //   console.log("Fetch New is running")
    //   this.fetchNew();
    // }
  }
  fetchDataFunction = () => {
    x = [];
    document.getElementById("msgContentId").focus();
    firebase.auth().onAuthStateChanged((user) => {
      console.log(user)
      if (user) {
        firebase
          .database()
          .ref("users/" + user.uid)
          .once("value")
          .then((snapshotData) => {
            this.setState({
              userData: snapshotData.val(),
            });
            console.log(this.state.userData)
          })
          .then(() => {
            firebase
              .database()
              .ref(`Classroom/${this.state.id}/chatroom/`)
              .orderByKey().limitToLast(50)
              .once("value", (snapshot) => {

                snapshot.forEach((element) => {
                  var data = element.val();
                  x.push(data);
                });

                if (x.length < 50) {
                  chatComplete = true;
                  if(x.length == 0){
                    isEmpty = true;
                  }
                }
                this.setState({ chatMsgsData: x, user_id: user.uid, limit: 1 });
                var elem = document.getElementById("chatMainDivId");
                elem.scrollTop = elem.scrollHeight;
                var Data = snapshot.val();
                // console.log(x[x.length - 1].msg_id);
                for (const id in Data) {
                  latestChat = id;
                  break;
                }
                console.log(latestChat);


              })
          }).then(() => {

            firebase
              .database()
              .ref(`Classroom/${this.state.id}/chatroom/`)
              .orderByKey().limitToLast(1)
              .on("value", (snapshot) => {
                console.log(x.length);
                snapshot.forEach((element) => {
                  var data = element.val();
                  if (!once) {
                    if (x.length > 0 && x[x.length - 1].msg_id !== data.msg_id) {
                      console.log("x[x.length-1]:", x[x.length - 1]);
                      console.log("data:", data);
                      x.push(data);
                    }
                  }
                  else {
                    if(isEmpty){
                      x.push(data);
                      isEmpty = false;
                    }
                    console.log("already in x");
                  }
                });
                limit = 1;
                console.log("limit:", limit);
                // if(x.length < 50) {
                //   chatComplete = true;
                // }
                this.setState({ chatMsgsData: x });
                var elem = document.getElementById("chatMainDivId");
                elem.scrollTop = elem.scrollHeight;
                var Data = snapshot.val();
                console.log(Data);
                console.log(latestChat);
                once = false;

              })
          });
      } else {
        window.location.href = "/";
      }
    });
  };

  fetchNextChat = () => {
    var chat = [];
    if (chatComplete === false) {
      // 
      firebase
        .database()
        .ref(`Classroom/${this.state.id}/chatroom/`)
        .orderByKey().endBefore(latestChat).limitToLast(50)
        .once("value", (snapshot) => {

          snapshot.forEach((element) => {
            var data = element.val();
            chat.push(data);
          });
          if (chat.length < 50) {
            chatComplete = true;
          }
          x.forEach((element) => {
            chat.push(element);
          })
          x = chat;
          this.setState({ chatMsgsData: x });
          var elem = document.getElementById("chatMainDivId");
          elem.scrollTop = elem.scrollHeight;
          var Data = snapshot.val();
          console.log(Data);
          for (const id in Data) {
            latestChat = id;
            break;
          }
          console.log(latestChat);
          var chatWindow = document.querySelector(".chatMainDiv");
          // chatWindow.scrollTo({top:1000});
          chatWindow.scrollTop = chatWindow.scrollTop / 3;
        })
    }
    else {
      console.log("chatComplete");
    }
  }
  imagePreview = (url) => {
    return (
      <></>

    );
  }

  displayMsgs = (item, key) => {
    if (item.msg_sender_uid === this.state.user_id) {
      if (item.msg_replied === "yes") {
        if (
          item.msg_type === "image/jpg" ||
          item.msg_type === "image/jpeg" ||
          item.msg_type === "image/png"
        ) {
          return (
            <>
              <div className="userMsgbox" key={item.msg_id}>
                <div className="userReplyMsgFlap"></div>
                <div
                  className="senderName"
                  style={{
                    display: "flex",
                    justifyContent: "end",
                    position: "relative",
                  }}
                >
                  <FontAwesomeIcon
                    icon={faEllipsisH}
                    style={{
                      color: "rgb(185, 185, 185)",
                      marginLeft: "auto",
                      cursor: "pointer",
                    }}
                    onClick={() => {
                      this.toggleMsgBoxMenu(item.msg_id);
                    }}
                  />
                  <div className="userMsgBoxDropdown d-none" id={item.msg_id}>
                    <div className="p-2 dropdownDivUser">
                      <p
                        style={{
                          fontSize: "12px",
                          color: "#000",
                          fontWeight: "bold",
                        }}
                      >
                        Reply
                      </p>
                    </div>
                    <div
                      className="p-2 dropdownDivUser"
                      onClick={() => {
                        this.deleteMsg(item.msg_id, "text", "null");
                      }}
                    >
                      <p
                        style={{
                          fontSize: "12px",
                          color: "#000",
                          fontWeight: "bold",
                        }}
                      >
                        Delete
                      </p>
                    </div>
                  </div>
                </div>
                <div className="showReplyImgMsgDiv" onClick={() => { var data = this.state.chatMsgsData.filter((a) => { if (a.msg_id == item.msg_reply_id) { var index = this.state.chatMsgsData.indexOf(a); document.getElementById("msg" + index).scrollIntoView({ behaviour: "smooth" }); return null; } }); }} style={{ cursor: "pointer" , borderRadius: "none"}} >
                  <p
                    className="my-0 mx-2"
                    style={{ fontSize: "10px", color: "#000" }}
                  >
                    {item.msg_replied_user}
                  </p>
                  {/* <a href={item.msg_replied_download_url} target="_blank"> */}
                  <img
                    className="mt-0 mx-2 userImgMsgContent"
                    src={item.msg_replied_download_url}
                    style={{
                      width: "90px",
                      height: "90px",
                      borderRadius: "10px",
                    }}
                    alt="..."
                  />
                  {/* </a> */}
                </div>
                <p className="userMsgContent" style={{borderRadius:"0px 0px 10px 10px"}}>{item.msg_content}</p>
                <div
                  className="msgSendTimeDivClass"
                // style={{ marginTop: "-25px" }}
                >
                  <p className="userMsgTimeClass">{item.msg_time}</p>
                </div>
              </div>
            </>
          );
        } else {
          return (
            <>
              <div className="userMsgbox" key={item.msg_id}>
                <div className="userReplyMsgFlap"></div>
                <div
                  className="senderName"
                  style={{
                    display: "flex",
                    justifyContent: "end",
                    position: "relative",
                  }}
                >
                  <FontAwesomeIcon
                    icon={faEllipsisH}
                    style={{
                      color: "rgb(185, 185, 185)",
                      marginLeft: "auto",
                      cursor: "pointer",
                    }}
                    onClick={() => {
                      this.toggleMsgBoxMenu(item.msg_id);
                    }}
                  />
                  <div className="userMsgBoxDropdown d-none" id={item.msg_id}>
                    <div className="p-2 dropdownDivUser">
                      <p
                        style={{
                          fontSize: "12px",
                          color: "#000",
                          fontWeight: "bold",
                        }}
                      >
                        Reply
                      </p>
                    </div>
                    <div
                      className="p-2 dropdownDivUser"
                      onClick={() => {
                        this.deleteMsg(item.msg_id, "text", "null");
                      }}
                    >
                      <p
                        style={{
                          fontSize: "12px",
                          color: "#000",
                          fontWeight: "bold",
                        }}
                      >
                        Delete
                      </p>
                    </div>
                  </div>
                </div>
                <div className="showReplyMsgDivSender" onClick={() => { var data = this.state.chatMsgsData.filter((a) => { if (a.msg_id == item.msg_reply_id) { var index = this.state.chatMsgsData.indexOf(a); document.getElementById("msg" + index).scrollIntoView({ behaviour: "smooth" }); return null; } }); }} style={{ cursor: "pointer" }} >
                  <p
                    className="my-0 mx-2"
                    style={{ fontSize: "10px", color: "#000" }}
                  >
                    {item.msg_replied_user}
                  </p>
                  <p
                    className="mt-0 mx-2"
                    style={{
                      fontSize: "12px",
                      color: "#000",
                      fontWeight: "bold",
                    }}
                  >
                    {item.msg_replied_content}
                  </p>
                </div>
                <p className="userMsgContent" style={{borderRadius:"0px 0px 10px 10px"}}>{item.msg_content}</p>
                <div
                  className="msgSendTimeDivClass"
                // style={{ marginTop: "-25px" }}
                >
                  <p className="userMsgTimeClass">{item.msg_time}</p>
                </div>
              </div>
            </>
          );
        }
      } else if (item.msg_type === "text") {
        return (
          <div className="userMsgbox" key={item.msg_id} id={"msg" + key}>
            <div className="userMsgFlap"></div>
            <div
              className="senderName"
              style={{
                display: "flex",
                justifyContent: "end",
                flexDirection: "row !important",
                position: "relative",
              }}
            >
              <FontAwesomeIcon
                icon={faEllipsisH}
                style={{
                  color: "rgb(185, 185, 185)",
                  marginLeft: "auto",
                  cursor: "pointer",
                }}
                onClick={() => {
                  this.toggleMsgBoxMenu(item.msg_id);
                }}
              />
              <div className="userMsgBoxDropdown d-none" id={item.msg_id}>
                <div className="p-2 dropdownDivUser">
                  <p
                    style={{
                      fontSize: "12px",
                      color: "#000",
                      fontWeight: "bold",
                    }}
                    onClick={() => {
                      this.handleReplyMsg(item);
                    }}
                  >
                    Reply
                  </p>
                </div>
                <div
                  className="p-2 dropdownDivUser"
                  onClick={() => {
                    this.deleteMsg(item.msg_id, "text", "null");
                  }}
                >
                  <p
                    style={{
                      fontSize: "12px",
                      color: "#000",
                      fontWeight: "bold",
                    }}
                  >
                    Delete
                  </p>
                </div>
              </div>
            </div>
            <p className="userMsgContent">{item.msg_content}</p>
            <div
              className="msgSendTimeDivClass"
            // style={{ marginTop: "-25px" }}
            >
              <p className="userMsgTimeClass">{item.msg_time}</p>
            </div>
          </div>
        );
      } else if (
        item.msg_type === "image/jpg" ||
        item.msg_type === "image/jpeg" ||
        item.msg_type === "image/png"
      ) {
        return (
          <div className="userMsgbox" key={item.msg_id} id={"msg" + key}>
            <div className="userMsgFlap"></div>
            <div
              className="senderName"
              style={{
                display: "flex",
                justifyContent: "end",
                position: "relative",
              }}
            >
              <FontAwesomeIcon
                icon={faEllipsisH}
                style={{
                  color: "rgb(185, 185, 185)",
                  marginLeft: "auto",
                  cursor: "pointer",
                }}
                onClick={() => {
                  this.toggleMsgBoxMenu(
                    item.msg_id,
                    "file",
                    item.msg_file_name
                  );
                }}
              />
              <div className="userMsgBoxDropdown d-none" id={item.msg_id}>
                <div className="p-2 dropdownDivUser">
                  <p
                    style={{
                      fontSize: "12px",
                      color: "#000",
                      fontWeight: "bold",
                    }}
                    onClick={() => {
                      this.handleReplyMsg(item);
                    }}
                  >
                    Reply
                  </p>
                </div>
                <div className="p-2 dropdownDivUser">
                  <p
                    style={{
                      fontSize: "12px",
                      color: "#000",
                      fontWeight: "bold",
                    }}
                    onClick={() => {
                      this.deleteMsg(item.msg_id, "file", item.msg_file_name);
                    }}
                  >
                    Delete
                  </p>
                </div>
              </div>
            </div>
            {/* <a href={item.msg_content} download="image"  > */}
            {/* <Button onClick={() => { this.toggle(item.msg_content) }}> */}
              <img
                className="userImgMsgContent"
                style={{ width: "200px", height: "200px", borderRadius: "10px", }}
                src={item.msg_content}
                alt="..."
                onClick={() => { this.toggle(item.msg_content, "image") }}
                title="Click to preview and download"
              />
            {/* </Button> */}
            {/* </a> */}
            <div className="msgSendTimeDivClass"
            // style={{ marginTop: "-10px" }}
            >
              <p className="userMsgTimeClass">{item.msg_time}</p>
            </div>
          </div>
        );
      } else if (
        item.msg_type === "text/html" ||
        item.msg_type === "text/plain" ||
        item.msg_type === "text/javascript" ||
        item.msg_type === "text/css"
      ) {
        return (
          <>
            <div className="userMsgbox" key={item.msg_id} id={"msg" + key}>
              <div className="userMsgFlap"></div>
              <div
                className="senderName"
                style={{
                  display: "flex",
                  justifyContent: "end",
                  position: "relative",
                }}
              >
                <FontAwesomeIcon
                  icon={faEllipsisH}
                  style={{
                    color: "rgb(185, 185, 185)",
                    marginLeft: "auto",
                    cursor: "pointer",
                  }}
                  onClick={() => {
                    this.toggleMsgBoxMenu(item.msg_id);
                  }}
                />
                <div className="userMsgBoxDropdown d-none" id={item.msg_id}>
                  <div className="p-2 dropdownDivUser">
                    <p
                      style={{
                        fontSize: "12px",
                        color: "#000",
                        fontWeight: "bold",
                      }}
                      onClick={() => {
                        this.handleReplyMsg(item);
                      }}
                    >
                      Reply
                    </p>
                  </div>
                  <div className="p-2 dropdownDivUser">
                    <p
                      style={{
                        fontSize: "12px",
                        color: "#000",
                        fontWeight: "bold",
                      }}
                      onClick={() => {
                        this.deleteMsg(item.msg_id, "file");
                      }}
                    >
                      Delete
                    </p>
                  </div>
                </div>
              </div>
              <div className="d-flex">
                <p className="userMsgContent">{item.msg_content}
                <a
                  href={item.msg_download_url}
                  download={item.msg_id}
                  // target="_blank"
                  rel="noopener noreferrer"
                  >
                  <FontAwesomeIcon
                    icon={faDownload}
                    className="mx-3 mt-2"
                    style={{ color: "#000A", marginLeft: "auto" }}
                    />
                </a>
                </p>
              </div>
              <div className="msgSendTimeDivClass">
                <p className="userMsgTimeClass"
                // style={{ marginTop: "-15px" }}
                >
                  {item.msg_time}
                </p>
              </div>
            </div>
          </>
        );
      } else if (item.msg_type === "video/mp4") {
        return (
          <>
            <div className="userMsgbox" key={item.msg_id} id={"msg" + key}>
              <div className="userMsgFlap"></div>
              <div
                className="senderName"
                style={{
                  display: "flex",
                  justifyContent: "end",
                  position: "relative",
                }}
              >
                <FontAwesomeIcon
                  icon={faEllipsisH}
                  style={{
                    color: "rgb(185, 185, 185)",
                    marginLeft: "auto",
                    cursor: "pointer",
                  }}
                  onClick={() => {
                    this.toggleMsgBoxMenu(item.msg_id);
                  }}
                />
                <div className="userMsgBoxDropdown d-none" id={item.msg_id}>
                  <div className="p-2 dropdownDivUser">
                    <p
                      style={{
                        fontSize: "12px",
                        color: "#000",
                        fontWeight: "bold",
                      }}
                      onClick={() => {
                        this.handleReplyMsg(item);
                      }}
                    >
                      Reply
                    </p>
                  </div>
                  <div className="p-2 dropdownDivUser">
                    <p
                      style={{
                        fontSize: "12px",
                        color: "#000",
                        fontWeight: "bold",
                      }}
                      onClick={() => {
                        this.deleteMsg(item.msg_id, "file", item.msg_content);
                      }}
                    >
                      Delete
                    </p>
                  </div>
                </div>
              </div>
              <div className="d-flex">
                <p className="userMsgContent">{item.msg_content}
                {/* <a
                  href={item.msg_download_url}
                  download={item.msg_id}
                  // target="_blank"
                  rel="noopener noreferrer"

                > */}
                  <FontAwesomeIcon
                    icon={faPlay}
                    className="mx-3 mt-2"
                    style={{ color: "#000A", marginLeft: "auto" }}
                    onClick={() => { this.toggle(item.msg_download_url, "video") }}
                  />
                {/* </a> */}
                <a
                  href={item.msg_download_url}
                  download={item.msg_id}
                  // target="_blank"
                  rel="noopener noreferrer"
                  >
                  <FontAwesomeIcon
                    icon={faDownload}
                    className="mx-3 mt-2"
                    style={{ color: "#000A", marginLeft: "auto" }}
                    />
                </a>
                </p>
              </div>
              <div className="msgSendTimeDivClass">
                <p className="userMsgTimeClass"
                // style={{ marginTop: "-15px" }}
                >
                  {item.msg_time}
                </p>
              </div>
            </div>
          </>
        );
      }
    } else {
      if (item.msg_replied === "yes") {
        if (
          item.msg_type === "image/jpg" ||
          item.msg_type === "image/jpeg" ||
          item.msg_type === "image/png"
        ) {
          return (
            <>
              <div className="senderMsgbox" key={item.msg_id} id={"msg" + key}>
                <div className="senderReplyMsgFlap" style={{ top: "29px" }}></div>
                <div
                  className="senderName"
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    position: "relative",
                  }}
                >
                  <p className="senderNameClass">{item.msg_sender_name}</p>
                  <FontAwesomeIcon
                    icon={faEllipsisH}
                    style={{
                      marginTop: "1px",
                      color: "rgb(185, 185, 185)",
                      cursor: "pointer",
                    }}
                    onClick={() => {
                      this.toggleMsgBoxMenu(item.msg_id);
                    }}
                  />
                  <div className="senderMsgBoxDropdown d-none" id={item.msg_id}>
                    <div className="p-2 dropdownDiv">
                      <p
                        style={{
                          fontSize: "12px",
                          color: "#000",
                          fontWeight: "bold",
                        }}
                        onClick={() => {
                          this.handleReplyMsg(item);
                        }}
                      >
                        Reply
                      </p>
                    </div>
                  </div>
                </div>
                <div className="showReplyImgMsgDivSender" onClick={() => { var data = this.state.chatMsgsData.filter((a) => { if (a.msg_id == item.msg_reply_id) { var index = this.state.chatMsgsData.indexOf(a); document.getElementById("msg" + index).scrollIntoView({ behaviour: "smooth" }); return null; } }); }} style={{ cursor: "pointer" }} >
                  <p
                    className="my-0 mx-2"
                    style={{ fontSize: "10px", color: "#000" }}
                  >
                    {item.msg_replied_user}
                  </p>
                  {/* <a href={item.msg_replied_download_url} download={item.msg_id} > */}
                    <img
                      className="mt-0 mx-2"
                      src={item.msg_replied_download_url}
                      style={{
                        width: "90px",
                        height: "90px",
                        borderRadius: "10px",
                      }}
                      alt="..."
                      // onClick={() => { this.toggle(item.msg_content) }}
                    />
                  {/* </a> */}
                </div>
                <p className="msgContent" style={{borderRadius:"0px 0px 10px 10px"}}>{item.msg_content}</p>
                <div
                  className="msgSendTimeDivClass my-0"
                  style={{ marginTop: "-25px" }}
                >
                  <p className="msgTimeClass mt-0">{item.msg_time}</p>
                </div>
              </div>
            </>
          );
        } else {
          return (
            <>
              <div className="senderMsgbox" key={item.msg_id} id={"msg" + key}>
                <div className="senderReplyMsgFlap"></div>
                <div
                  className="senderName"
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    position: "relative",
                  }}
                >
                  <p className="senderNameClass">{item.msg_sender_name}</p>
                  <FontAwesomeIcon
                    icon={faEllipsisH}
                    style={{
                      marginTop: "1px",
                      color: "rgb(185, 185, 185)",
                      cursor: "pointer",
                    }}
                    onClick={() => {
                      this.toggleMsgBoxMenu(item.msg_id);
                    }}
                  />
                  <div className="senderMsgBoxDropdown d-none" id={item.msg_id}>
                    <div className="p-2 dropdownDiv">
                      <p
                        style={{
                          fontSize: "12px",
                          color: "#000",
                          fontWeight: "bold",
                        }}
                        onClick={() => {
                          this.handleReplyMsg(item);
                        }}
                      >
                        Reply
                      </p>
                    </div>
                  </div>
                </div>
                <div className="showReplyMsgDiv mt-2" onClick={() => { var data = this.state.chatMsgsData.filter((a) => { if (a.msg_sender_name === item.msg_replied_user && a.msg_content === item.msg_replied_content) { var index = this.state.chatMsgsData.indexOf(a); document.getElementById("msg" + index).scrollIntoView(); return null; } }); }} style={{ cursor: "pointer" }}>
                  <p
                    className="my-0 mx-2"
                    style={{ fontSize: "10px", color: "#000" }}
                  >
                    {item.msg_replied_user}
                  </p>
                  <p
                    className="mt-0 mx-2"
                    style={{
                      fontSize: "12px",
                      color: "#000",
                      fontWeight: "bold",
                    }}
                  >
                    {item.msg_replied_content}
                  </p>
                </div>
                <p className="msgContent" style={{borderRadius:"0px 0px 10px 10px"}}>{item.msg_content}</p>
                <div
                  className="msgSendTimeDivClass my-0"
                  style={{ marginTop: "-25px" }}
                >
                  <p className="msgTimeClass mt-0">{item.msg_time}</p>
                </div>
              </div>
            </>
          );
        }
      } else if (item.msg_type === "text") {
        return (
          <div className="senderMsgbox" key={item.msg_id} id={"msg" + key}>
            <div className="senderMsgFlap"></div>
            <div
              className="senderName"
              style={{
                display: "flex",
                justifyContent: "space-between",
                position: "relative",
              }}
            >
              <p className="senderNameClass">{item.msg_sender_name}</p>
              <FontAwesomeIcon
                icon={faEllipsisH}
                style={{ marginTop: "1px", color: "rgb(185, 185, 185)", cursor: "pointer" }}
                onClick={() => {
                  this.toggleMsgBoxMenu(item.msg_id);
                }}
              />
              <div className="senderMsgBoxDropdown d-none" id={item.msg_id}>
                <div className="p-2 dropdownDiv">
                  <p
                    style={{
                      fontSize: "12px",
                      color: "#000",
                      fontWeight: "bold",
                    }}
                    onClick={() => {
                      this.handleReplyMsg(item);
                    }}
                  >
                    Reply
                  </p>
                </div>
              </div>
            </div>
            <p className="msgContent">{item.msg_content}</p>
            <div
              className="msgSendTimeDivClass my-0"
              style={{ marginTop: "-25px" }}
            >
              <p className="msgTimeClass mt-0">{item.msg_time}</p>
            </div>
          </div>
        );
      } else if (
        item.msg_type === "image/jpg" ||
        item.msg_type === "image/jpeg" ||
        item.msg_type === "image/png"
      ) {
        return (
          <div className="senderMsgbox" key={item.msg_id} id={"msg" + key}>
            <div className="senderMsgFlap"></div>
            <div
              className="senderName"
              style={{
                display: "flex",
                justifyContent: "space-between",
                position: "relative",
              }}
            >
              <p className="senderNameClass">{item.msg_sender_name}</p>
              <FontAwesomeIcon
                icon={faEllipsisH}
                style={{ marginTop: "1px", color: "rgb(185, 185, 185)", cursor: "pointer" }}
                onClick={() => {
                  this.toggleMsgBoxMenu(item.msg_id);
                }}
              />
              <div className="senderMsgBoxDropdown d-none" id={item.msg_id}>
                <div className="p-2 dropdownDiv">
                  <p
                    style={{
                      fontSize: "12px",
                      color: "#000",
                      fontWeight: "bold",
                    }}
                    onClick={() => {
                      this.handleReplyMsg(item);
                    }}
                  >
                    Reply
                  </p>
                </div>
              </div>
            </div>
            {/* <a href={item.msg_content} download={item.msg_id}> */}
              <img
                className="imgMsgContent"
                style={{ width: "200px", height: "200px", borderRadius: "10px", }}
                src={item.msg_content}
                alt="..."
                onClick={() => { this.toggle(item.msg_content, "image") }}
                title="Click to preview and download"
              />
            {/* </a> */}
            <div
              className="msgSendTimeDivClass my-0"
              style={{ marginTop: "-10px" }}
            >
              <p className="msgTimeClass">{item.msg_time}</p>
            </div>
          </div>
        );
      } else if (
        item.msg_type === "text/html" ||
        item.msg_type === "text/plain" ||
        item.msg_type === "text/javascript" ||
        item.msg_type === "text/css"
      ) {
        return (
          <div className="senderMsgbox" key={item.msg_id} id={"msg" + key}>
            <div className="senderMsgFlap"></div>
            <div
              className="senderName"
              style={{
                display: "flex",
                justifyContent: "space-between",
                position: "relative",
              }}
            >
              <p className="senderNameClass">{item.msg_sender_name}</p>
              <FontAwesomeIcon
                icon={faEllipsisH}
                style={{ marginTop: "1px", color: "rgb(185, 185, 185)", cursor: "pointer" }}
                onClick={() => {
                  this.toggleMsgBoxMenu(item.msg_id);
                }}
              />
              <div className="senderMsgBoxDropdown d-none" id={item.msg_id}>
                <div className="p-2 dropdownDiv">
                  <p
                    style={{
                      fontSize: "12px",
                      color: "#000",
                      fontWeight: "bold",
                    }}
                    onClick={() => {
                      this.handleReplyMsg(item);
                    }}
                  >
                    Reply
                  </p>
                </div>
              </div>
            </div>
            <div className="d-flex">
              <p className="msgContent">{item.msg_content}
                <a
                  href={item.msg_download_url}
                  download={item.msg_id}
                  // target="_blank"
                  rel="noopener noreferrer"
                  >
                  <FontAwesomeIcon
                    icon={faDownload}
                    className="mx-3 mt-2"
                    style={{ color: "#fffA", marginLeft: "auto" }}
                    />
                </a>
              </p>
            </div>
            <div
              className="msgSendTimeDivClass my-0"
              // style={{ marginTop: "-10px" }}
            >
              <p className="msgTimeClass"
              //  style={{ marginTop: "-15px" }}
               >
                {item.msg_time}
              </p>
            </div>
          </div>
        );
      } else if (item.msg_type === "video/mp4") {
        return (
          <div className="senderMsgbox" key={item.msg_id} id={"msg" + key}>
            <div className="senderMsgFlap"></div>
            <div
              className="senderName"
              style={{
                display: "flex",
                justifyContent: "space-between",
                position: "relative",
              }}
            >
              <p className="senderNameClass">{item.msg_sender_name}</p>
              <FontAwesomeIcon
                icon={faEllipsisH}
                style={{ marginTop: "1px", color: "rgb(185, 185, 185)", cursor: "pointer" }}
                onClick={() => {
                  this.toggleMsgBoxMenu(item.msg_id);
                }}
              />
              <div className="senderMsgBoxDropdown d-none" id={item.msg_id}>
                <div className="p-2 dropdownDiv">
                  <p
                    style={{
                      fontSize: "12px",
                      color: "#000",
                      fontWeight: "bold",
                    }}
                    onClick={() => {
                      this.handleReplyMsg(item);
                    }}
                  >
                    Reply
                  </p>
                </div>
              </div>
            </div>
            <div className="d-flex">
              <p className="msgContent">{item.msg_content}
              {/* <a
                href={item.msg_download_url}
                download=""
                // target="_blank"
                rel="noopener noreferrer"
                > */}
                <FontAwesomeIcon
                  icon={faPlay}
                  className="mx-3 mt-2"
                  style={{ color: "#fffA", marginLeft: "auto" }}
                  onClick={() => { this.toggle(item.msg_download_url, "video") }}
                  />

                <a
                  href={item.msg_download_url}
                  download={item.msg_id}
                  // target="_blank"
                  rel="noopener noreferrer"
                  >
                  <FontAwesomeIcon
                    icon={faDownload}
                    className="mx-3 mt-2"
                    style={{ color: "#fffA", marginLeft: "auto" }}
                    />
                </a>
              {/* </a> */}
              </p>
            </div>
            <div
              className="msgSendTimeDivClass my-0"
              // style={{ marginTop: "-10px" }}
            >
              <p className="msgTimeClass" 
              // style={{ marginTop: "-15px" }}
              >
                {item.msg_time}
              </p>
            </div>
          </div>
        );
      }
    }
  };
  handleReplyMsg = (item) => {
    document
      .getElementById(this.state.currentDropdown)
      .classList.toggle("d-none");
    this.setState({
      currentDropdown: "",
      replyUsername: item.msg_sender_name,
      replyContent: item.msg_content,
      replyId: item.msg_id,
      showReplyMsgObj: item,
      checkReplyInput: true,
    });
  };
  handleInput = (e) => {
    this.setState({
      replyInput: e.target.value,
    });
    console.log("reply");
  };
  closeReplyMsg = () => {
    this.setState({
      replyUsername: "",
      replyContent: "",
      replyId: "",
      showReplyMsgObj: null,
      checkReplyInput: false,
    });
  };
  toggleMsgBoxMenu = (box_id) => {
    if (this.state.currentDropdown === "") {
      document.getElementById(box_id).classList.toggle("d-none");
      this.setState({ currentDropdown: box_id });
    } else if (this.state.currentDropdown === box_id) {
      document.getElementById(box_id).classList.toggle("d-none");
      this.setState({ currentDropdown: "" });
    } else {
      document
        .getElementById(this.state.currentDropdown)
        .classList.toggle("d-none");
      document.getElementById(box_id).classList.toggle("d-none");
      this.setState({ currentDropdown: box_id });
    }
  };
  deleteMsg = async (msg_id, type, filename) => {
    if (type === "text") {
      if (this.state.currentDropdown === msg_id) {
        document
          .getElementById(this.state.currentDropdown)
          .classList.toggle("d-none");
        this.setState({ currentDropdown: "" });
      }
      firebase
        .database()
        .ref(`Classroom/${this.state.id}/chatroom/` + msg_id)
        .remove();
    } else if (type === "file") {
      if (this.state.currentDropdown === msg_id) {
        document
          .getElementById(this.state.currentDropdown)
          .classList.toggle("d-none");
        this.setState({ currentDropdown: "" });
      }
      console.log("file");
      firebase
        .storage()
        .ref(`Classroom/${this.state.id}/chatroom/` + msg_id + "/" + filename)
        .delete()
        .then(() => {
          firebase
            .database()
            .ref(`Classroom/${this.state.id}/chatroom/` + msg_id)
            .remove();
        });
    }
    x = x.filter(item => item.msg_id !== msg_id);
    this.setState({ chatMsgsData: x });
  };
  handleMsgInputChange = (e) => {
    this.setState({
      msgInputValue: e.target.value,
    });
  };
  handleEnterKeyPress = (e) => {
    if (e.which === 13 && !e.shiftKey) {
      if (this.state.msgInputValue.trim() === "") {
        e.preventDefault();
      } else if (this.state.msgInputValue.trim() !== "") {
        e.preventDefault();
        this.handleMsgSend();
      }
      if (this.state.msgInputValue === "" && this.state.replyInput !== "") {
        e.preventDefault();
        this.handleReplyMsgSend();
      } else {
        e.preventDefault();
      }
    }
  };
  handleReplyMsgSend = () => {
    var replyObj = this.state.showReplyMsgObj;
    console.log(replyObj);
    var daySec = "am";
    var d = new Date();
    var h = d.getHours();
    var m = d.getMinutes();
    var day = d.getDay();
    var month = d.getMonth();
    if (h >= 12) {
      h -= 12;
      daySec = "pm";
    }
    if (m < 10) {
      m = "0" + m;
    }

    if (day < 10) {
      day = "0" + day;
    }

    if (month < 10) {
      month = "0" + month;
    }
    var msgSendTime = h + ":" + m + daySec + "  " + day + "/" + month;
    var msgId = firebase.database().ref().push().key;
    if (
      replyObj.msg_type === "text/html" ||
      replyObj.msg_type === "text/css" ||
      replyObj.msg_type === "text/javascript1" ||
      replyObj.msg_type === "text/plain"
    ) {
      firebase
        .database()
        .ref(`Classroom/${this.state.id}/chatroom/` + msgId)
        .set({
          msg_content: this.state.replyInput,
          msg_sender_email: this.state.userData.email,
          msg_sender_name: this.state.userData.username,
          msg_time: msgSendTime,
          msg_id: msgId,
          msg_type: replyObj.msg_type,
          msg_sender_uid: this.state.user_id,
          msg_replied: "yes",
          msg_replied_content: replyObj.msg_content,
          msg_replied_download_url: replyObj.msg_download_url,
          msg_replied_user: replyObj.msg_sender_name,
          msg_replied_user_uid: replyObj.msg_sender_uid,
          msg_reply_id: this.state.replyId,
        })
        .then(() => {
          this.setState({
            latestMsgId: msgId,
            msgInputValue: "",
            replyInput: "",
            replyUsername: "",
            replyContent: "",
            replyId: "",
            showReplyMsgObj: null,
            checkReplyInput: false,
          });
        })
        .then(() => {
          var elem = document.getElementById("chatMainDivId");
          elem.scrollTop = elem.scrollHeight;
        });
    } else if (
      replyObj.msg_type === "image/jpg" ||
      replyObj.msg_type === "image/jpeg" ||
      replyObj.msg_type === "image/png"
    ) {
      firebase
        .database()
        .ref(`Classroom/${this.state.id}/chatroom/` + msgId)
        .set({
          msg_content: this.state.replyInput,
          msg_sender_email: this.state.userData.email,
          msg_sender_name: this.state.userData.username,
          msg_time: msgSendTime,
          msg_id: msgId,
          msg_type: replyObj.msg_type,
          msg_sender_uid: this.state.user_id,
          msg_replied: "yes",
          msg_replied_download_url: replyObj.msg_content,
          msg_replied_user: replyObj.msg_sender_name,
          msg_replied_user_uid: replyObj.msg_sender_uid,
          msg_reply_id: this.state.replyId,
        })
        .then(() => {
          this.setState({
            latestMsgId: msgId,
            msgInputValue: "",
            replyInput: "",
            replyUsername: "",
            replyContent: "",
            replyId: "",
            showReplyMsgObj: null,
            checkReplyInput: false,
          });
        })
        .then(() => {
          var elem = document.getElementById("chatMainDivId");
          elem.scrollTop = elem.scrollHeight;
        });
    } else if (replyObj.msg_type === "video/mp4") {
      firebase
        .database()
        .ref(`Classroom/${this.state.id}/chatroom/` + msgId)
        .set({
          msg_content: this.state.replyInput,
          msg_sender_email: this.state.userData.email,
          msg_sender_name: this.state.userData.username,
          msg_time: msgSendTime,
          msg_id: msgId,
          msg_type: replyObj.msg_type,
          msg_sender_uid: this.state.user_id,
          msg_replied: "yes",
          msg_replied_content: replyObj.msg_content,
          msg_replied_download_url: replyObj.msg_download_url,
          msg_replied_user: replyObj.msg_sender_name,
          msg_replied_user_uid: replyObj.msg_sender_uid,
          msg_reply_id: this.state.replyId,
        })
        .then(() => {
          this.setState({
            latestMsgId: msgId,
            msgInputValue: "",
            replyInput: "",
            replyUsername: "",
            replyContent: "",
            replyId: "",
            showReplyMsgObj: null,
            checkReplyInput: false,
          });
        })
        .then(() => {
          var elem = document.getElementById("chatMainDivId");
          elem.scrollTop = elem.scrollHeight;
        });
    } else if (replyObj.msg_type === "text") {
      firebase
        .database()
        .ref(`Classroom/${this.state.id}/chatroom/` + msgId)
        .set({
          msg_content: this.state.replyInput,
          msg_sender_email: this.state.userData.email,
          msg_sender_name: this.state.userData.username,
          msg_time: msgSendTime,
          msg_id: msgId,
          msg_type: "text",
          msg_sender_uid: this.state.user_id,
          msg_replied: "yes",
          msg_replied_content: replyObj.msg_content,
          msg_replied_user: replyObj.msg_sender_name,
          msg_replied_user_uid: replyObj.msg_sender_uid,
          msg_reply_id: this.state.replyId,
        })
        .then(() => {
          this.setState({
            latestMsgId: msgId,
            msgInputValue: "",
            replyInput: "",
            replyUsername: "",
            replyContent: "",
            replyId: "",
            showReplyMsgObj: null,
            checkReplyInput: false,
          });
        })
        .then(() => {
          var elem = document.getElementById("chatMainDivId");
          elem.scrollTop = elem.scrollHeight;
        });
    }
  };
  handleMsgSend = () => {
    if(this.state.msgInputValue.trim() === ""){
      return;
    }
    var daySec = "am";
    var d = new Date();
    var h = d.getHours();
    var m = d.getMinutes();
    var day = d.getDay();
    var month = d.getMonth();
    if (h >= 12) {
      h -= 12;
      daySec = "pm";
    }
    if (m < 10) {
      m = "0" + m;
    }

    if (day < 10) {
      day = "0" + day;
    }

    if (month < 10) {
      month = "0" + month;
    }
    var msgSendTime = h + ":" + m + daySec + "  " + day + "/" + month;
    var msgId = firebase.database().ref().push().key;
    firebase
      .database()
      .ref(`Classroom/${this.state.id}/chatroom/` + msgId)
      .set({
        msg_content: this.state.msgInputValue,
        msg_sender_email: this.state.userData.email,
        msg_sender_name: this.state.userData.username,
        msg_time: msgSendTime,
        msg_id: msgId,
        msg_type: "text",
        msg_sender_uid: this.state.user_id,
      })
      .then(() => {
        this.setState({
          latestMsgId: msgId,
          msgInputValue: "",
        });
      })
      .then(() => {
        var elem = document.getElementById("chatMainDivId");
        elem.scrollTop = elem.scrollHeight;
      });
  };
  toggleMentor = () => {
    if (this.state.mentorModal) {
      console.log("Modal Close");
      this.setState({
        mentorModal: false,
      });
    } else {
      console.log("Modal Open");
      this.setState({
        mentorModal: true,
        inputFileData: null,
      });
    }
  };
  toggle = (url, type) => {
    if (this.state.Modal) {
      console.log("Modal Close");
      this.setState({
        Modal: false,
        url: null,
        type: null,
      });
    } else {
      console.log("Modal Open");
      this.setState({
        Modal: true,
        url: url,
        type: type,
      });
    }
  };
  onEmojiClick = (emojiObject) => {
    console.log(emojiObject);
    if (this.state.checkReplyInput) {
      var selectedEmoji = emojiObject.native;
      var tillString = this.state.replyInput;
      tillString += selectedEmoji;
      this.setState({
        replyInput: tillString,
      });
    } else {
      var selectedEmoji = emojiObject.native;
      var tillString = this.state.msgInputValue;
      tillString += selectedEmoji;
      this.setState({
        msgInputValue: tillString,
      });
    }
  };
  toggleEmojiBar = () => {
    if (this.state.showEmoji) {
      this.setState({ showEmoji: false });
    } else {
      this.setState({ showEmoji: true });
    }
  };
  handleChatFile = (e) => {
    if (e.target.files[0] === undefined) {
      return;
    } else {
      this.toggleMentor();
      console.log(e.target.files[0]);
      this.setState({ mentorModal: true });
      if (
        e.target.files[0].type === "image/jpg" ||
        e.target.files[0].type === "image/jpeg" ||
        e.target.files[0].type === "image/png"
      ) {
        this.setState({
          inputFileData: URL.createObjectURL(e.target.files[0]),
          inputFileObject: e.target.files[0],
        });
      } else if (
        e.target.files[0].type === "text/plane" ||
        e.target.files[0].type === "text/javascript" ||
        e.target.files[0].type === "text/html" ||
        e.target.files[0].type === "text/css"
      ) {
        var daySec = "am";
        var d = new Date();
        var h = d.getHours();
        var m = d.getMinutes();
        var day = d.getDay();
        var month = d.getMonth();
        if (h >= 12) {
          h -= 12;
          daySec = "pm";
        }
        if (m < 10) {
          m = "0" + m;
        }

        if (day < 10) {
          day = "0" + day;
        }

        if (month < 10) {
          month = "0" + month;
        }
        var msgSendTime = h + ":" + m + daySec + "  " + day + "/" + month;
        var objUrl = e.target.files[0];
        var fileName = e.target.files[0].name;
        var fileType = e.target.files[0].type;
        var msgId = firebase.database().ref().push().key;
        firebase
          .storage()
          .ref(`Classroom/${this.state.id}/chatroom/` + msgId + "/" + fileName)
          .put(objUrl)
          .then((snapshot) => {
            firebase
              .storage()
              .ref(`Classroom/${this.state.id}/chatroom/` + msgId + "/" + fileName)
              .getDownloadURL()
              .then((url) => {
                firebase
                  .database()
                  .ref(`Classroom/${this.state.id}/chatroom/` + msgId)
                  .set({
                    msg_content: fileName,
                    msg_download_url: url,
                    msg_sender_email: this.state.userData.email,
                    msg_sender_name: this.state.userData.username,
                    msg_time: msgSendTime,
                    msg_id: msgId,
                    msg_type: fileType,
                    msg_sender_uid: this.state.user_id,
                  });
              });
          });
      } else if (e.target.files[0].type === "video/mp4") {
        this.handleVideoUpload(e);
      }
    }
  };
  handleVideoUpload = (e) => {
    var daySec = "am";
    var d = new Date();
    var h = d.getHours();
    var m = d.getMinutes();
    var day = d.getDay();
    var month = d.getMonth();
    if (h >= 12) {
      h -= 12;
      daySec = "pm";
    }
    if (m < 10) {
      m = "0" + m;
    }

    if (day < 10) {
      day = "0" + day;
    }

    if (month < 10) {
      month = "0" + month;
    }
    var msgSendTime = h + ":" + m + daySec + "  " + day + "/" + month;
    var objUrl = e.target.files[0];
    var fileName = e.target.files[0].name;
    var fileType = e.target.files[0].type;
    var msgId = firebase.database().ref().push().key;
    firebase
      .storage()
      .ref(`Classroom/${this.state.id}/chatroom/` + msgId + "/" + fileName)
      .put(objUrl)
      .then((snapshot) => {
        firebase
          .storage()
          .ref(`Classroom/${this.state.id}/chatroom/` + msgId + "/" + fileName)
          .getDownloadURL()
          .then((url) => {
            firebase
              .database()
              .ref(`Classroom/${this.state.id}/chatroom/` + msgId)
              .set({
                msg_content: fileName,
                msg_download_url: url,
                msg_sender_email: this.state.userData.email,
                msg_sender_name: this.state.userData.username,
                msg_time: msgSendTime,
                msg_id: msgId,
                msg_type: fileType,
                msg_sender_uid: this.state.user_id,
              });
          });
      });
  };
  setCropFunction = (newcrop) => {
    this.setState({
      crop: newcrop,
    });
  };
  setZoomFunction = (newzoom) => {
    this.setState({
      zoom: newzoom,
    });
  };
  onCropCompleteFunction = (croppedArea, croppedAreaPixels) => {
    this.setState({
      croppedAreaPixels: croppedAreaPixels,
    });
  };
  uploadNewProfilePic = () => {
    getCroppedImg(
      this.state.inputFileData,
      this.state.croppedAreaPixels,
      0
    ).then((result) => {
      var img = this.state.inputFileObject;
      var fileName = img.name;
      var fileType = img.type;
      this.setState({
        inputFileData: null,
        inputData: result,
      });
      var daySec = "am";
      var d = new Date();
      var h = d.getHours();
      var m = d.getMinutes();
      var day = d.getDay();
      var month = d.getMonth();
      if (h >= 12) {
        h -= 12;
        daySec = "pm";
      }
      if (m < 10) {
        m = "0" + m;
      }

      if (day < 10) {
        day = "0" + day;
      }

      if (month < 10) {
        month = "0" + month;
      }
      var msgSendTime = h + ":" + m + daySec + "  " + day + "/" + month;
      var msgId = firebase.database().ref().push().key;

      firebase
        .storage()
        .ref(`Classroom/${this.state.id}/chatroom/` + msgId + "/" + fileName)
        .putString(result, "data_url")
        .then((snapshot) => {
          firebase
            .storage()
            .ref(`Classroom/${this.state.id}/chatroom/` + msgId + "/" + fileName)
            .getDownloadURL()
            .then((url) => {
              this.setState({
                msgInputValue: "",
              });
              firebase
                .database()
                .ref(`Classroom/${this.state.id}/chatroom/` + msgId)
                .set({
                  msg_content: url,
                  msg_sender_email: this.state.userData.email,
                  msg_sender_name: this.state.userData.username,
                  msg_time: msgSendTime,
                  msg_file_name: fileName,
                  msg_id: msgId,
                  msg_type: fileType,
                  msg_sender_uid: this.state.user_id,
                })
                .then(() => {
                  var elem = document.getElementById("chatMainDivId");
                  elem.scrollTop = elem.scrollHeight;
                });
            });
        });
    });
  };
  changeStyle = () => {
    this.setState({
      style: {
        marginBottom: "100px",
      }
    })
  }
  // toggle = () => {
  //   this.setState((prevState) => ({ modal: !prevState.modal }));
  // };
  render() {
    const meta = {
      title: "Chatroom",
      description: "TDPVista",
      canonical: "https://tiles.tdpvista.in",
      meta: {
        charset: "utf-8",
        name: {
          keywords:
            "tdpvista,support,contact,form,registration,learning,education,call,helpline,helpdesk,query",
        },
      },
    };
    return (
      <>
      <DocumentMeta {...meta} />

        {this.state.Modal ? (
          <>
            <Modal isOpen={this.state.Modal} toggle={this.toggle}>
              <Card className="cropperCard" style={{ width: '700px', height: "80vh", alignItems: "center", marginRight: "100px" }}>
                {/* <CardHeader> */}
                <Button size="lg" onClick={this.toggle} style={{ position: "absolute", top: "0", left: "0", margin: "5px" }}>
                  <FontAwesomeIcon
                    icon={faWindowClose}
                    style={{
                      color: "rgb(185, 185, 185)",
                      marginLeft: "auto",
                      cursor: "pointer",
                      fontSize: "20px"
                    }}
                  />
                </Button>
                {/* </CardHeader> */}
                <div className="imgCropperParentDiv" style={{ maxWidth: '75%', width: '70%', height: "500px", marginTop: "60px", marginLeft: "100px", alignSelf: "center" }}>
                  {this.state.type === "image" ? 
                  <img src={this.state.url} alt="not available" style={{
                    // maxWidth: '75%',
                    width: '345px', 
                    // height: "500px", 
                    // marginTop: "60px", 
                    // marginLeft: "100px", 
                    alignSelf: "center"
                  }} />
                  : 
                  <video controls src={this.state.url} style={{
                    // maxWidth: '75%',
                    width: '450px', 
                    // height: "500px", 
                    // marginTop: "60px", 
                    // marginLeft: "100px", 
                    alignSelf: "center"
                  }}></video>
                  }
                </div>
                {/* <CardFooter> */}
                <a href={this.state.url} download="filename">
                  <Button style={{ position: "absolute", top: "89%", left: "44%", backgroundColor: "#35075c", color: "white" }}>
                    Download
                  </Button>
                </a>

                {/* </CardFooter> */}
              </Card>
            </Modal>
          </>
        ) : null}
        {this.state.inputFileData ? (
          <>
            <Modal isOpen={this.state.mentorModal} toggle={this.toggleMentor}>
              <Card className="cropperCard" style={{ width: '700px', height: "80vh", alignItems: "center", marginRight: "100px" }}>
                {/* <CardHeader> */}
                <Button size="lg" onClick={this.toggleMentor} style={{ position: "absolute", top: "0", left: "0", margin: "5px" }}>
                  <FontAwesomeIcon
                    icon={faWindowClose}
                    style={{
                      color: "rgb(185, 185, 185)",
                      marginLeft: "auto",
                      cursor: "pointer",
                      fontSize: "20px"
                    }}
                  />
                </Button>
                {/* </CardHeader> */}
                <div className="imgCropperParentDiv" style={{ maxWidth: '75%', width: '70%', height: "500px", marginTop: "60px", marginLeft: "100px", alignSelf: "center" }}>
                  <Cropper
                    className="cropperClass"
                    image={this.state.inputFileData}
                    crop={this.state.crop}
                    zoom={this.state.zoom}
                    aspect={1 / 1}
                    onCropChange={this.setCropFunction}
                    onCropComplete={this.onCropCompleteFunction}
                    onZoomChange={this.setZoomFunction}
                  />
                </div>
                {/* <CardFooter> */}
                <Button onClick={this.uploadNewProfilePic} style={{ position: "absolute", top: "89%", left: "44%", backgroundColor: "#35075c", color: "white" }}>
                  Upload
                </Button>

                {/* </CardFooter> */}
              </Card>
            </Modal>
          </>
        ) : null}
        <Header />
        {/* <Button onClick={this.fetchNextChat}>Load More</Button> */}
        {/* <div >
          <Modal isOpen={this.state.mentorModal} toggle={this.toggleMentor}>
            <ModalHeader toggle={this.toggleMentor}>Modal title</ModalHeader>
            <ModalBody>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea
            </ModalBody>
            <ModalFooter>
              <Button color="primary" onClick={this.toggleMentor}>
                Do Something
              </Button>
              <Button color="secondary" onClick={this.toggleMentor}>
                Cancel
              </Button>
            </ModalFooter>
          </Modal>
        </div> */}
        <div className="chatRoomMainDiv" style={{ overflow: "hidden" }}>
          <div className="chatMainDiv" id="chatMainDivId">

            {this.state.chatMsgsData.map((item, key) =>
              <Suspense fallback={<div>Loading.......</div>}>
                {this.displayMsgs(item, key)}
              </Suspense>
            )}

          </div>
          <div className="chatSendMainDiv" >

            <div className="chatSendAttachDiv d-flex justify-content-center align-items-center">
              <div className="image-upload">
                <label>
                  <FontAwesomeIcon
                    icon={faPaperclip}
                    style={{
                      fontSize: "20px",
                      color: "#D5D9DC",
                      cursor: "pointer",
                    }}
                    className="mx-4 mt-3 fontBtnIcon"
                  />
                  <input
                    id="file-input"
                    type="file"
                    style={{ display: "none" }}
                    onChange={this.handleChatFile}
                    accept=".png,.jpg,.jpeg,.html,.js,.css,.txt,.mp4"
                  />
                </label>
              </div>
              <Button size="sm" onClick={this.toggleEmojiBar} color="#240048ee"><FontAwesomeIcon
                icon={faSmile}
                style={{ fontSize: "20px", color: "#D5D9DC", cursor: "pointer", zIndex: "100" }}
                className="mx-1 mt-1 fontBtnIcon"
                onClick={this.toggleEmojiBar}
              /></Button>
              <div style={{ position: "relative", width: "fit-content" }}>
                {this.state.showEmoji ? (
                  <Picker
                    onSelect={(emoji) => this.onEmojiClick(emoji)}
                    style={{
                      paddingTop: "0",
                      marginBottom: "500px",
                      height: "450px",
                      position: "absolute",
                      top: "-500px",
                      left: "0",
                      border: "1px solid black",
                      boxShadow: "none"
                    }}
                  />
                ) : null}

              </div>
            </div>
            <div className="chatSendInputDiv" style={{ position: "relative" }}>
              {this.state.showReplyMsgObj ? (
                <>
                  <FontAwesomeIcon
                    icon={faTimes}
                    className="replyChatShowDivClose"
                    onClick={this.closeReplyMsg}
                  />
                  {this.state.showReplyMsgObj.msg_type === "image/jpg" ||
                    this.state.showReplyMsgObj.msg_type === "image/jpeg" ||
                    this.state.showReplyMsgObj.msg_type === "image/png" ? (
                    <div className="replyImgChatShowDiv">
                      <p
                        className="mx-3 mt-2 mb-1"
                        style={{ fontSize: "12px", color: "#fff" }}
                      >
                        Reply To - {this.state.replyUsername}
                      </p>
                      <img
                        src={this.state.showReplyMsgObj.msg_content}
                        className="my-0 mx-3"
                        style={{
                          width: "90px",
                          height: "90px",
                          borderRadius: "10px",
                        }}
                        alt="..."
                      />
                    </div>
                  ) : (
                    <div className="replyChatShowDiv">
                      <p
                        className="mx-3 mt-2 mb-1"
                        style={{ fontSize: "12px", color: "#fff" }}
                      >
                        Reply To - {this.state.replyUsername}
                      </p>
                      <p
                        className="my-0 mx-3"
                        style={{
                          fontSize: "16px",
                          color: "#fff",
                        }}
                      >
                        {this.state.replyContent}
                      </p>
                    </div>
                  )}
                </>
              ) : null}
              <textarea
                type="text"
                name="msgContent"
                className="mt-2 mx-2 w-100 form-control"
                rows="1"
                style={{ height: "45px" }}
                id="msgContentId"
                value={
                  this.state.checkReplyInput
                    ? this.state.replyInput
                    : this.state.msgInputValue
                }
                onChange={
                  this.state.checkReplyInput
                    ? this.handleInput
                    : this.handleMsgInputChange
                }
                onKeyDown={this.handleEnterKeyPress}
                placeholder="Type here"
              ></textarea>
            </div>
            <div className="chatSendBtnDiv d-flex justify-content-center align-items-center">
              <Button
                size="sm"
                id="msgSendBtnId"
                className="msgSendBtnClass"
                style={{
                  backgroundColor: "transparent",
                  border: "none",
                  width: "fit-content",
                }}
                onClick={
                  this.state.checkReplyInput
                    ? this.handleReplyMsgSend
                    : this.handleMsgSend
                }
              >
                <FontAwesomeIcon
                  icon={faPaperPlane}
                  style={{ fontSize: "20px", color: "#fff" }}
                  className="mx-4 fontBtnIcon"
                />
              </Button>
            </div>
          </div>
        </div>
      </>
    );
  }
}
Chatroom.layout = MentorClassroom;
export default Chatroom;