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
import Content from "layouts/Content.js";

// core components
import {
  chartOptions,
  parseOptions,
  chartExample1,
  chartExample2
} from "variables/charts.js";



import './index.css';
import Html_img24 from "../../../assets/img/html/Html_img24.jpeg";

class Header extends React.Component {
  render() {
    return (

      <div className="header bg-gradient-info pb-8 pt-5 pt-md-8">
        <Container fluid>
          <div className="header-body">
            <Row>
              <Col xl="6">
              <h1 style={{fontSize:"200%",color:"#fff",fontFamily:"Roboto"}}>HTML draggable</h1>
              
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
                      <h2 className="text-white mb-0">Making Elements Draggable</h2>
                    </div>
                    <div className="col">
                    
                    </div>
                  </Row>
                </CardHeader>
                <CardBody className="text-white " style={{  textAlign: "left" }}>
                The drag and drop feature lets you "grab" an object and drag it to a different location.<br /><br />
                To make an element draggable, just set the draggable attribute to true:&lt;img draggable="true" /&gt;<br /><br />
                The API for HTML5 drag and drop is event-based.<br /><br />
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
  What to Drag
                  </Button>
                  <Button outline
                    color="warning"
                    href="#tdp"
                    className="d-block w-100 text-left my-1 mx-0"
                    size="sm"
                  >
         Where to Drop
                  </Button>
                  <Button outline
                    color="warning"
                    href="#tdp"
                    className="d-block w-100 text-left my-1 mx-0"
                    size="sm"
                  >
       Do the Drop
                  </Button>
                 
                  
                  </CardBody>
              </Card>
            </Col>
          </Row>
          <Row className="mt-5">
            <Col className="mb-5 mb-xl-0" xl="9" >
            <Card className="text-primary w-50 p-2" style={{ backgroundColor: "#EEEEEE", textAlign: "left" }}>  
            &lt;!DOCTYPE HTML&gt;<br />
                &lt;html&gt;<br />
                &lt;head&gt;<br />
                &lt;script&gt;<br />
                function allowDrop&#40;ev&#41; &#123; <br />
                ev &#46; preventDefault&#40;&#41;&#59;<br />
                &#125;<br /><br />

                function drag(ev) &#123;<br />
                ev.dataTransfer.setData("text", ev.target.id);<br />
                &#125;<br /><br />

                function drop(ev) &#123;<br />
                ev.preventDefault();<br />
                var data = ev.dataTransfer.getData("text");<br />
                ev.target.appendChild(document.getElementById(data));<br />
                &#125;<br />
                &lt;/script&gt;<br />
                &lt;/head&gt;<br />
                &lt;body&gt;<br /><br />

                &lt;div id="box" <strong>ondrop </strong>="drop(event)"<br />
          <strong>ondragover </strong>="allowDrop(event)"<br />
                style="border:1px solid black; <br />
                width:200px; height:200px"&gt;&lt;/div&gt;<br /><br />


                &lt;img id="image" src="sample.jpg" <strong> draggable</strong>="true"<br />
          <strong> ondragstart</strong>="drag(event)" width="150" height="50" alt="" /&gt;<br /><br />

                &lt;/body&gt;<br />
                &lt;/html&gt;<br /><br />
</Card><br />
          <h1><strong>What to Drag</strong></h1><br />
                When the element is dragged, the <strong> ondragstart </strong>attribute calls a function, drag(event), which specifies what data is to be dragged.<br />
                The dataTransfer.setData() method sets the data type and the value of the dragged data:<br />
                function drag(ev) &#123;<br />
                ev.<strong> dataTransfer.setData</strong>("text", ev.target.id);<br />
                &#125;<br />
                In our example, the data type is "text" and the value is the ID of the draggable element ("image").<br /><br />

          <h1><strong>Where to Drop</strong></h1><br />
                The<strong> ondragover</strong>  event specifies where the dragged data can be dropped. <br />
                By default, data and elements cannot be dropped in other elements. <br />
                To allow a drop, we must prevent the default handling of the element.<br />
                This is done by calling the event.<strong> preventDefault()</strong> method for the <strong>ondragover </strong> event.<br />ondragover<br />

                <h1><strong>Do the Drop</strong></h1><br />
                When the dragged data is dropped, a drop event occurs.<br />
                In the example above, the <strong> ondrop </strong>attribute calls a function, drop(event):<br />
                function drop(ev) &#123;<br />
                ev.preventDefault();<br />
                var data = ev.dataTransfer.getData("text");<br />
                ev.target.appendChild(document.getElementById(data));<br />
                &#125;<br />

                The<strong>preventDefault() </strong>method prevents the browser's default handling of the data(default is open as link on drop).<br />
                The dragged data can be accessed with the <strong> dataTransfer.getData()</strong> method.<br />
                This method will return any data that was set to the same type in the setData() method.<br />
                The dragged data is the ID of the dragged element ("image").<br /><br />

                At the end, the dragged element is appended into the drop element, using the appendChild() function. <br /><br />


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
