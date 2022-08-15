import React from "react";
// node.js library that concatenates classes (strings)
import classnames from "classnames";
// javascipt plugin for creating charts
import Chart from "chart.js";
// react plugin used to create charts
import { Line, Bar } from "react-chartjs-2";
// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  NavItem,
  NavLink,
  Nav,
  Progress,
  Table,
  Container,
  Row,
  Col
} from "reactstrap";

// core components
import {
  chartOptions,
  parseOptions,
  chartExample1,
  chartExample2
} from "variables/charts.js";



import './index.css';
import Content from "layouts/Content.js";

import Html_img24 from "../../../assets/img/html/Html_img24.jpeg";

class Header extends React.Component {
  render() {
    return (

      <div className="header bg-gradient-info pb-8 pt-5 pt-md-8">
        <Container fluid>
          <div className="header-body">
            <Row>
              <Col xl="6">
              <h1 style={{fontSize:"200%",color:"#fff",fontFamily:"Roboto"}}>Audio and Video</h1>
              
              </Col>
             
             
            </Row>
           
          </div>
        </Container>
      </div>
    )
  }
}


class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeNav: 1,
      chartExample1Data: "data1"
    };
    if (window.Chart) {
      parseOptions(Chart, chartOptions());
    }
  }
  toggleNavs = (e, index) => {
    e.preventDefault();
    this.setState({
      activeNav: index,
      chartExample1Data:
        this.state.chartExample1Data === "data1" ? "data2" : "data1"
    });
  };
  render() {
    return (
      <>
        <Header />
        {/* Page content */}
        <Container className="mt--7" fluid>
          <Row>
            <Col className="mb-5 mb-xl-0" xl="8">
              <Card className="bg-gradient-default shadow">
                <CardHeader className="bg-transparent">
                  <Row className="align-items-center">
                    <div className="col">
                      <h6 className="text-uppercase text-light ls-1 mb-1">
                        Overview
                      </h6>
                      <h2 className="text-white mb-0">Audio on the Web</h2>
                    </div>
                    <div className="col">
                      
                    </div>
                  </Row>
                </CardHeader>
                <CardBody className="text-white " style={{  textAlign: "left" }}>
                Before HTML5, there was no standard for playing audio files on a web page.<br />
              The HTML5 <span className="text-info"><strong> &lt;audio&gt;</strong></span> element specifies a standard for embedding audio in a web page.<br /><br />
              There are two different ways to specify the audio source file's URL. <br />
                </CardBody>
              </Card>
            </Col>
            <Col xl="4">
              <Card className="shadow">
                <CardHeader className="bg-transparent">
                  <Row className="align-items-center">
                    <div className="col">
                      <h6 className="text-uppercase text-muted ls-1 mb-1">
                        Course
                      </h6>
                      <h2 className="mb-0">Modern Web Design</h2>
                    </div>
                  </Row>
                </CardHeader>
                <CardBody>
                  <Button outline
                    color="warning"
                    href="#tdp"
                    className="d-block w-100 text-left my-1 mx-0"
                    size="sm"
                  >
   Audio on the Web
                  </Button>
                  <Button outline
                    color="warning"
                    href="#tdp"
                    className="d-block w-100 text-left my-1 mx-0"
                    size="sm"
                  >
            Attributes of &lt;audio&gt;
                  </Button>
                  <Button outline
                    color="warning"
                    href="#tdp"
                    className="d-block w-100 text-left my-1 mx-0"
                    size="sm"
                  >
   Videos in HTML
                  </Button>
                  <Button outline
                    color="warning"
                    href="#tdp"
                    className="d-block w-100 text-left my-1 mx-0"
                    size="sm"
                  >
   Attributes of &lt;video&gt;
                  </Button>
                 
                  
                  </CardBody>
              </Card>
            </Col>
          </Row>
          <Row className="mt-5">
            <Col className="mb-5 mb-xl-0" xl="9" >
          The first uses the source attribute:<br /><br />
            <Card className="text-primary w-50 p-2" style={{ backgroundColor: "#EEEEEE", textAlign: "left" }}>  
          <strong> &lt;audio</strong> src="audio.mp3" controls&gt;<br />
              Audio element not supported by your browser<br />
          <strong> &lt;/audio&gt;</strong> <br />
          </Card><br />
              The second way uses the <span className="text-info"><strong> &lt;source&gt;</strong></span> element inside the <span className="text-info"><strong> &lt;audio&gt;</strong></span> element:<br /><br />
              <Card className="text-primary w-50 p-2" style={{ backgroundColor: "#EEEEEE", textAlign: "left" }}>  
          <strong> &lt;audio controls&gt;</strong>
              &lt;source src="audio.mp3" type="audio/mpeg"&gt;<br />
              &lt;source src="audio.ogg" type="audio/ogg"&gt;<br />
          <strong> &lt;/audio&gt;</strong>
          </Card><br />
          <Card className="text-white w-50 bg-info">
            Multiple &lt;source&gt; elements can be linked to different audio files.
            The browser will use the first recognized format.
               </Card><br />



          <h1><strong>Audio on the Web</strong></h1>

                The <span className="text-info"><strong> &lt;audio&gt;</strong></span> element creates an audio player inside the browser.<br /><br />
                <Card className="text-primary w-50 p-2" style={{ backgroundColor: "#EEEEEE", textAlign: "left" }}>  
                &lt;audio controls&gt;<br />
                &lt;source src="audio.mp3" type="audio/mpeg"&gt;<br />
                &lt;source src="audio.ogg" type="audio/ogg"&gt;<br />
                Audio element not supported by your browser. <br />
                &lt;/audio&gt; <br />
                </Card><br />
          <h2><strong>Result:</strong></h2><br />
          <Card className="imgclasss w-50">
            <img src={Html_img24}></img>
          </Card><br /><br />
          <Card className="text-white w-50 bg-info">
            The text between the &lt;audio&gt; and &lt;/audio&gt; tags will display in browsers that do not support the&lt;audio&gt; element.
                 </Card><br />

                 <h1><strong>Attributes of &lt;audio&gt;</strong></h1>
               
               <strong>controls </strong> <br /> 
Specifies that audio controls should be displayed (such as a play/pause button, etc.)<br /><br />

<strong>autoplay </strong>
When this attribute is defined, audio starts playing as soon as it is ready,<br />
without asking for the visitor's permission.<br /><br />

&lt;audio controls <strong> autoplay </strong> &gt;<br /><br />

<strong>loop </strong><br />
This attribute is used to have the audio replay every time it is finished.<br /><br />
&lt;audio controls autoplay <strong>loop </strong> &gt;<br /><br />
<Card className="text-white w-50 bg-info">
Currently, there are three supported file formats for the &lt;audio&gt; element: MP3, WAV, and OGG.
</Card><br />
        

<h1><strong>Videos in HTML</strong></h1><br />

The video element is similar to the audio element.<br />
You can specify the video source URL using an attribute in a video element,<br />
 or using source elements inside the video element:<br /><br />
 <Card className="text-primary w-50 p-2" style={{ backgroundColor: "#EEEEEE", textAlign: "left" }}>  
                &lt;video controls &gt;<br />
                &lt;source src="video.mp4" type="video/mp4"&gt; <br />
                &lt;source src="video.ogg" type="video/ogg"&gt; <br />
                Video is not supported by your browser <br />
                &lt;/video&gt; <br />
                </Card><br />

Another aspect that the audio and video elements have in common is that<br />
 the major browsers do not all support the same file types. <br />
If the browser does not support the first video type, it will try the next one.<br /><br />


          <h1><strong>Attributes of &lt;video&gt;</strong></h1>

                Another aspect shared by both the audio and the video elements is that each  <br />
                has <strong> controls</strong>, <strong>autoplay</strong> and <strong> loop</strong> attributes. <br /> <br />

                In this example, the video will replay after it finishes playing: <br /> <br />
                <Card className="text-primary w-50 p-2" style={{ backgroundColor: "#EEEEEE", textAlign: "left" }}>  
                &lt;video controls autoplay loop &gt;<br />
                &lt;source src="video.mp4" type="video/mp4"&gt; <br />
                &lt;source src="video.ogg" type="video/ogg"&gt; <br />
                Video is not supported by your browser <br />
                &lt;/video&gt; <br />
                </Card><br />
          <Card className="text-white w-50 bg-info">
            Currently, there are three supported video formats for the &lt;video&gt; element: MP4, WebM, and OGG.
                </Card>


                </Col>
            <Col xl="3">
            </Col>
          </Row><br /><br />
          <div className="col">
                      
                    </div>
        </Container>
      </>
    );
  }
}
Index.layout = Content;
export default Index;
