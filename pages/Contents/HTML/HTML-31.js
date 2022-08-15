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


import Content from "layouts/Content.js";

import './index.css';
import Html_img51 from "../../../assets/img/html/Html_img51.jpeg";




class Header extends React.Component {
  render() {
    return (

      <div className="header bg-gradient-info pb-8 pt-5 pt-md-8">
        <Container fluid>
          <div className="header-body">
            <Row>
              <Col xl="6">
              <h1 style={{fontSize:"200%",color:"#fff",fontFamily:"Roboto"}}>HTML Encoding (Character Sets)</h1>
              
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
                      <h2 className="text-white mb-0"> HTML Encoding (Character Sets)</h2>
                    </div>
                    <div className="col">
                     
                    </div>
                  </Row>
                </CardHeader>
                <CardBody className="text-white" style={{  textAlign: "left" }}>
              To display an HTML page correctly, a web browser must know which character set to use.<br /><br />

              <h1 className="text-white"><strong>What is Character Encoding?</strong></h1>
              ASCII was the first <strong>character encoding standard  </strong>(also called character set).<br /> 
              ASCII defined 128 different alphanumeric characters that could be used on the internet: numbers (0-9), <br />
              English letters (A-Z), and some special characters like ! $ + - ( ) @ &lt; &gt; .<br /><br />
              ISO-8859-1 was the default character set for HTML 4. <br />
              This character set supported 256 different character codes.<br /><br />
              ANSI (Windows-1252) was the original Windows character set. <br />
              ANSI is identical to ISO-8859-1, except that ANSI has 32 extra characters.<br />
              Because ANSI and ISO-8859-1 were so limited, HTML 4 also supported UTF-8.<br /><br />
              UTF-8 (Unicode) covers almost all of the characters and symbols in the world.<br /><br />
              The default character set for HTML5 is UTF-8.<br /><br />


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
What is Character Encoding?
                  </Button>
                  <Button outline
                    color="warning"
                    href="#tdp"
                    className="d-block w-100 text-left my-1 mx-0"
                    size="sm"
                  >
The HTML charset Attribute
                  </Button>
                  <Button outline
                    color="warning"
                    href="#tdp"
                    className="d-block w-100 text-left my-1 mx-0"
                    size="sm"
                  >
Differences Between Character Sets
                  </Button>
                  <Button outline
                    color="warning"
                    href="#tdp"
                    className="d-block w-100 text-left my-1 mx-0"
                    size="sm"
                  >
The ASCII Character Set
                  </Button>
                  <Button outline
                    color="warning"
                    href="#tdp"
                    className="d-block w-100 text-left my-1 mx-0"
                    size="sm"
                  >
The ANSI Character Set (Windows-1252)
                  </Button>
                  <Button outline
                    color="warning"
                    href="#tdp"
                    className="d-block w-100 text-left my-1 mx-0"
                    size="sm"
                  >
The ISO-8859-1 Character Set
                  </Button>
                  <Button outline
                    color="warning"
                    href="#tdp"
                    className="d-block w-100 text-left my-1 mx-0"
                    size="sm"
                  >
The UTF-8 Character Set
                  </Button>
                  <Button outline
                    color="warning"
                    href="#tdp"
                    className="d-block w-100 text-left my-1 mx-0"
                    size="sm"
                  >
The @charset CSS Rule
                  </Button>
                  </CardBody>
              </Card>
            </Col>
          </Row>
          <Row className="mt-5">
            <Col className="mb-5 mb-xl-0" xl="9" >
            <h1><strong>The HTML charset Attribute</strong></h1>
              To display an HTML page correctly, a web browser must know the character set used in the page.<br />
              This is specified in the <span className="text-danger"><strong>&lt;meta &gt;</strong></span>tag:<br />
              <span className="text-primary"><strong>&lt; </strong></span>
              <span className="text-warning"><strong>meta</strong></span>
              <span className="text-danger"><strong> charset</strong></span>
              <span className="text-primary"><strong>="UTF-8"&gt;</strong></span><br />
              If a browser detects ISO-8859-1 in a web page, it defaults to ANSI.<br /><br />


              <h1><strong>Differences Between Character Sets</strong></h1>
              The following table displays the differences between the character sets described above:<br /><br />

              <table class="table table-striped w-50">
            <thead>
              <tr>
                <th scope="col"><strong> Numb</strong></th>
                <th scope="col"><strong>	ASCII</strong></th>
                <th scope="col"><strong>ANSI</strong></th>
                <th scope="col"><strong>8859</strong></th>
                <th scope="col"><strong>UTF-8	</strong></th>
                <th scope="col"><strong>Description</strong></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="col"><strong> 32</strong></th>
                <th scope="col"><strong> </strong></th>
                <th scope="col"><strong> </strong></th>
                <th scope="col"><strong> </strong></th>
                <th scope="col"><strong> </strong></th>
                <th scope="col"><strong>space</strong></th>       
              </tr>
              <tr>
                <th scope="col"><strong> 33</strong></th>
                <th scope="col"><strong>!</strong></th>
                <th scope="col"><strong>!</strong></th>
                <th scope="col"><strong>!</strong></th>
                <th scope="col"><strong>!</strong></th>
                <th scope="col"><strong>exclamation mark</strong></th>       
              </tr>
              <tr>
                <th scope="col"><strong> 34</strong></th>
                <th scope="col"><strong>"</strong></th>
                <th scope="col"><strong>"</strong></th>
                <th scope="col"><strong>"</strong></th>
                <th scope="col"><strong>"</strong></th>
                <th scope="col"><strong>	quotation mark</strong></th>       
              </tr>
              <tr>
                <th scope="col"><strong> 35</strong></th>
                <th scope="col"><strong>#</strong></th>
                <th scope="col"><strong>#</strong></th>
                <th scope="col"><strong>#</strong></th>
                <th scope="col"><strong>#</strong></th>
                <th scope="col"><strong>number sign</strong></th>       
              </tr>
              <tr>
                <th scope="col"><strong>36</strong></th>
                <th scope="col"><strong>$</strong></th>
                <th scope="col"><strong>$</strong></th>
                <th scope="col"><strong>$</strong></th>
                <th scope="col"><strong>$</strong></th>
                <th scope="col"><strong>dollar sign</strong></th>       
              </tr>
              <tr>
                <th scope="col"><strong>37</strong></th>
                <th scope="col"><strong>%</strong></th>
                <th scope="col"><strong>%</strong></th>
                <th scope="col"><strong>%</strong></th>
                <th scope="col"><strong>%</strong></th>
                <th scope="col"><strong>percent sign</strong></th>       
              </tr>
              <tr>
                <th scope="col"><strong>38</strong></th>
                <th scope="col"><strong>&#38;</strong></th>
                <th scope="col"><strong>&#38;</strong></th>
                <th scope="col"><strong>&#38;</strong></th>
                <th scope="col"><strong>&#38;</strong></th>
                <th scope="col"><strong>percent sign</strong></th>       
              </tr>
              <tr>
                <th scope="col"><strong>39</strong></th>
                <th scope="col"><strong>'</strong></th>
                <th scope="col"><strong>'</strong></th>
                <th scope="col"><strong>'</strong></th>
                <th scope="col"><strong>'</strong></th>
                <th scope="col"><strong>	apostrophe</strong></th>       
              </tr>
              <tr>
                <th scope="col"><strong>40</strong></th>
                <th scope="col"><strong>(</strong></th>
                <th scope="col"><strong>(</strong></th>
                <th scope="col"><strong>(</strong></th>
                <th scope="col"><strong>(</strong></th>
                <th scope="col"><strong>left parenthesis</strong></th>       
              </tr>
              <tr>
                <th scope="col"><strong>41</strong></th>
                <th scope="col"><strong>)</strong></th>
                <th scope="col"><strong>)</strong></th>
                <th scope="col"><strong>)</strong></th>
                <th scope="col"><strong>)</strong></th>
                <th scope="col"><strong>right parenthesis</strong></th>       
              </tr>
              <tr>
                <th scope="col"><strong>42</strong></th>
                <th scope="col"><strong>*</strong></th>
                <th scope="col"><strong>*</strong></th>
                <th scope="col"><strong>*</strong></th>
                <th scope="col"><strong>*</strong></th>
                <th scope="col"><strong>asterisk</strong></th>       
              </tr>
              <tr>
                <th scope="col"><strong>43</strong></th>
                <th scope="col"><strong>+</strong></th>
                <th scope="col"><strong>+</strong></th>
                <th scope="col"><strong>+</strong></th>
                <th scope="col"><strong>+</strong></th>
                <th scope="col"><strong>plus sign</strong></th>       
              </tr>
              <tr>
                <th scope="col"><strong>44</strong></th>
                <th scope="col"><strong>,</strong></th>
                <th scope="col"><strong>,</strong></th>
                <th scope="col"><strong>,</strong></th>
                <th scope="col"><strong>,</strong></th>
                <th scope="col"><strong>comma</strong></th>       
              </tr>
              <tr>
                <th scope="col"><strong>45</strong></th>
                <th scope="col"><strong>-</strong></th>
                <th scope="col"><strong>-</strong></th>
                <th scope="col"><strong>-</strong></th>
                <th scope="col"><strong>-</strong></th>
                <th scope="col"><strong>hyphen-minus</strong></th>       
              </tr>
              <tr>
                <th scope="col"><strong>46</strong></th>
                <th scope="col"><strong>.</strong></th>
                <th scope="col"><strong>.</strong></th>
                <th scope="col"><strong>.</strong></th>
                <th scope="col"><strong>.</strong></th>
                <th scope="col"><strong>full stop</strong></th>       
              </tr>
              <tr>
                <th scope="col"><strong>47</strong></th>
                <th scope="col"><strong>/</strong></th>
                <th scope="col"><strong>/</strong></th>
                <th scope="col"><strong>/</strong></th>
                <th scope="col"><strong>/</strong></th>
                <th scope="col"><strong>solidus</strong></th>       
              </tr>
              <tr>
                <th scope="col"><strong>48</strong></th>
                <th scope="col"><strong>0</strong></th>
                <th scope="col"><strong>0</strong></th>
                <th scope="col"><strong>0</strong></th>
                <th scope="col"><strong>0</strong></th>
                <th scope="col"><strong>digit zero</strong></th>       
              </tr>
              <tr>
                <th scope="col"><strong>49</strong></th>
                <th scope="col"><strong>1</strong></th>
                <th scope="col"><strong>1</strong></th>
                <th scope="col"><strong>1</strong></th>
                <th scope="col"><strong>1</strong></th>
                <th scope="col"><strong>digit one</strong></th>       
              </tr>     
              <tr>
                <th scope="col"><strong>50</strong></th>
                <th scope="col"><strong>2</strong></th>
                <th scope="col"><strong>2</strong></th>
                <th scope="col"><strong>2</strong></th>
                <th scope="col"><strong>2</strong></th>
                <th scope="col"><strong>digit two</strong></th>       
              </tr>     
              <tr>
                <th scope="col"><strong>51</strong></th>
                <th scope="col"><strong>3</strong></th>
                <th scope="col"><strong>3</strong></th>
                <th scope="col"><strong>3</strong></th>
                <th scope="col"><strong>3</strong></th>
                <th scope="col"><strong>digit three</strong></th>       
              </tr>    
              <tr>
                <th scope="col"><strong>52</strong></th>
                <th scope="col"><strong>4</strong></th>
                <th scope="col"><strong>4</strong></th>
                <th scope="col"><strong>4</strong></th>
                <th scope="col"><strong>4</strong></th>
                <th scope="col"><strong>digit four</strong></th>       
              </tr>        
              <tr>
                <th scope="col"><strong>53</strong></th>
                <th scope="col"><strong>5</strong></th>
                <th scope="col"><strong>5</strong></th>
                <th scope="col"><strong>5</strong></th>
                <th scope="col"><strong>5</strong></th>
                <th scope="col"><strong>digit five</strong></th>       
              </tr>      
              <tr>
                <th scope="col"><strong>54</strong></th>
                <th scope="col"><strong>6</strong></th>
                <th scope="col"><strong>6</strong></th>
                <th scope="col"><strong>6</strong></th>
                <th scope="col"><strong>6</strong></th>
                <th scope="col"><strong>digit six</strong></th>       
              </tr>       
              <tr>
                <th scope="col"><strong>55</strong></th>
                <th scope="col"><strong>7</strong></th>
                <th scope="col"><strong>7</strong></th>
                <th scope="col"><strong>7</strong></th>
                <th scope="col"><strong>7</strong></th>
                <th scope="col"><strong>digit seven</strong></th>       
              </tr>       
              <tr>
                <th scope="col"><strong>56</strong></th>
                <th scope="col"><strong>8</strong></th>
                <th scope="col"><strong>8</strong></th>
                <th scope="col"><strong>8</strong></th>
                <th scope="col"><strong>8</strong></th>
                <th scope="col"><strong>digit eight</strong></th>       
              </tr>       
              <tr>
                <th scope="col"><strong>57</strong></th>
                <th scope="col"><strong>9</strong></th>
                <th scope="col"><strong>9</strong></th>
                <th scope="col"><strong>9</strong></th>
                <th scope="col"><strong>9</strong></th>
                <th scope="col"><strong>digit nine</strong></th>       
              </tr>    
              <tr>
                <th scope="col"><strong>58</strong></th>
                <th scope="col"><strong>:</strong></th>
                <th scope="col"><strong>:</strong></th>
                <th scope="col"><strong>:</strong></th>
                <th scope="col"><strong>:</strong></th>
                <th scope="col"><strong>	colon</strong></th>       
              </tr>          
              <tr>
                <th scope="col"><strong>59</strong></th>
                <th scope="col"><strong>;</strong></th>
                <th scope="col"><strong>;</strong></th>
                <th scope="col"><strong>;</strong></th>
                <th scope="col"><strong>;</strong></th>
                <th scope="col"><strong>semicolon</strong></th>       
              </tr>     
              <tr>
                <th scope="col"><strong>60</strong></th>
                <th scope="col"><strong>&lt;</strong></th>
                <th scope="col"><strong>&lt;</strong></th>
                <th scope="col"><strong>&lt;</strong></th>
                <th scope="col"><strong>&lt;</strong></th>
                <th scope="col"><strong>less-than sign</strong></th>       
              </tr>    
              <tr>
                <th scope="col"><strong>61</strong></th>
                <th scope="col"><strong>=</strong></th>
                <th scope="col"><strong>=</strong></th>
                <th scope="col"><strong>=</strong></th>
                <th scope="col"><strong>=</strong></th>
                <th scope="col"><strong>equals sign</strong></th>       
              </tr>      
              <tr>
                <th scope="col"><strong>62</strong></th>
                <th scope="col"><strong>&gt;</strong></th>
                <th scope="col"><strong>&gt;</strong></th>
                <th scope="col"><strong>&gt;</strong></th>
                <th scope="col"><strong>&gt;</strong></th>
                <th scope="col"><strong>greater-than sign</strong></th>       
              </tr>   
              <tr>
                <th scope="col"><strong>63</strong></th>
                <th scope="col"><strong>?</strong></th>
                <th scope="col"><strong>?</strong></th>
                <th scope="col"><strong>?</strong></th>
                <th scope="col"><strong>?</strong></th>
                <th scope="col"><strong>question mark</strong></th>       
              </tr>    
              <tr>
                <th scope="col"><strong>64</strong></th>
                <th scope="col"><strong>@</strong></th>
                <th scope="col"><strong>@</strong></th>
                <th scope="col"><strong>@</strong></th>
                <th scope="col"><strong>@</strong></th>
                <th scope="col"><strong>commercial at</strong></th>       
              </tr>     
              <tr>
                <th scope="col"><strong>65</strong></th>
                <th scope="col"><strong>A</strong></th>
                <th scope="col"><strong>A</strong></th>
                <th scope="col"><strong>A</strong></th>
                <th scope="col"><strong>A</strong></th>
                <th scope="col"><strong>Latin capital letter A</strong></th>       
              </tr>      
              <tr>
                <th scope="col"><strong>66</strong></th>
                <th scope="col"><strong>B</strong></th>
                <th scope="col"><strong>B</strong></th>
                <th scope="col"><strong>B</strong></th>
                <th scope="col"><strong>B</strong></th>
                <th scope="col"><strong>Latin capital letter B</strong></th>       
              </tr>      
              <tr>
                <th scope="col"><strong>67</strong></th>
                <th scope="col"><strong>C</strong></th>
                <th scope="col"><strong>C</strong></th>
                <th scope="col"><strong>C</strong></th>
                <th scope="col"><strong>C</strong></th>
                <th scope="col"><strong>Latin capital letter C</strong></th>       
              </tr>     
              <tr>
                <th scope="col"><strong>68</strong></th>
                <th scope="col"><strong>D</strong></th>
                <th scope="col"><strong>D</strong></th>
                <th scope="col"><strong>D</strong></th>
                <th scope="col"><strong>D</strong></th>
                <th scope="col"><strong>Latin capital letter D</strong></th>       
              </tr>    
                <tr>
                <th scope="col"><strong>69</strong></th>
                <th scope="col"><strong>E</strong></th>
                <th scope="col"><strong>E</strong></th>
                <th scope="col"><strong>E</strong></th>
                <th scope="col"><strong>E</strong></th>
                <th scope="col"><strong>Latin capital letter E</strong></th>       
              </tr>     
               <tr>
                <th scope="col"><strong>70</strong></th>
                <th scope="col"><strong>F</strong></th>
                <th scope="col"><strong>F</strong></th>
                <th scope="col"><strong>F</strong></th>
                <th scope="col"><strong>F</strong></th>
                <th scope="col"><strong>Latin capital letter F</strong></th>       
              </tr>     
               <tr>
                <th scope="col"><strong>71</strong></th>
                <th scope="col"><strong>G</strong></th>
                <th scope="col"><strong>G</strong></th>
                <th scope="col"><strong>G</strong></th>
                <th scope="col"><strong>G</strong></th>
                <th scope="col"><strong>Latin capital letter G</strong></th>       
              </tr>     
              <tr>
                <th scope="col"><strong>72</strong></th>
                <th scope="col"><strong>H</strong></th>
                <th scope="col"><strong>H</strong></th>
                <th scope="col"><strong>H</strong></th>
                <th scope="col"><strong>H</strong></th>
                <th scope="col"><strong>Latin capital letter H</strong></th>       
              </tr>     
              <tr>
                <th scope="col"><strong>73</strong></th>
                <th scope="col"><strong>I</strong></th>
                <th scope="col"><strong>I</strong></th>
                <th scope="col"><strong>I</strong></th>
                <th scope="col"><strong>I</strong></th>
                <th scope="col"><strong>Latin capital letter I</strong></th>       
              </tr>     
              <tr>
                <th scope="col"><strong>74</strong></th>
                <th scope="col"><strong>J</strong></th>
                <th scope="col"><strong>J</strong></th>
                <th scope="col"><strong>J</strong></th>
                <th scope="col"><strong>J</strong></th>
                <th scope="col"><strong>Latin capital letter J</strong></th>       
              </tr>     
              <tr>
                <th scope="col"><strong>75</strong></th>
                <th scope="col"><strong>K</strong></th>
                <th scope="col"><strong>K</strong></th>
                <th scope="col"><strong>K</strong></th>
                <th scope="col"><strong>K</strong></th>
                <th scope="col"><strong>Latin capital letter K</strong></th>       
              </tr>     
              <tr>
                <th scope="col"><strong>76</strong></th>
                <th scope="col"><strong>L</strong></th>
                <th scope="col"><strong>L</strong></th>
                <th scope="col"><strong>L</strong></th>
                <th scope="col"><strong>L</strong></th>
                <th scope="col"><strong>Latin capital letter L</strong></th>       
              </tr>     
              <tr>
                <th scope="col"><strong>77</strong></th>
                <th scope="col"><strong>M</strong></th>
                <th scope="col"><strong>M</strong></th>
                <th scope="col"><strong>M</strong></th>
                <th scope="col"><strong>M</strong></th>
                <th scope="col"><strong>Latin capital letter M</strong></th>       
              </tr>     
              <tr>
                <th scope="col"><strong>78</strong></th>
                <th scope="col"><strong>N</strong></th>
                <th scope="col"><strong>N</strong></th>
                <th scope="col"><strong>N</strong></th>
                <th scope="col"><strong>N</strong></th>
                <th scope="col"><strong>Latin capital letter N</strong></th>       
              </tr>     
              <tr>
                <th scope="col"><strong>79</strong></th>
                <th scope="col"><strong>O</strong></th>
                <th scope="col"><strong>O</strong></th>
                <th scope="col"><strong>O</strong></th>
                <th scope="col"><strong>O</strong></th>
                <th scope="col"><strong>Latin capital letter O</strong></th>       
              </tr>     
              <tr>
                <th scope="col"><strong>80</strong></th>
                <th scope="col"><strong>P</strong></th>
                <th scope="col"><strong>P</strong></th>
                <th scope="col"><strong>P</strong></th>
                <th scope="col"><strong>P</strong></th>
                <th scope="col"><strong>Latin capital letter P</strong></th>       
              </tr>     
              <tr>
                <th scope="col"><strong>81</strong></th>
                <th scope="col"><strong>Q</strong></th>
                <th scope="col"><strong>Q</strong></th>
                <th scope="col"><strong>Q</strong></th>
                <th scope="col"><strong>Q</strong></th>
                <th scope="col"><strong>Latin capital letter Q</strong></th>       
              </tr>     
              <tr>
                <th scope="col"><strong>82</strong></th>
                <th scope="col"><strong>R</strong></th>
                <th scope="col"><strong>R</strong></th>
                <th scope="col"><strong>R</strong></th>
                <th scope="col"><strong>R</strong></th>
                <th scope="col"><strong>Latin capital letter R</strong></th>       
              </tr>     
              <tr>
                <th scope="col"><strong>83</strong></th>
                <th scope="col"><strong>S</strong></th>
                <th scope="col"><strong>S</strong></th>
                <th scope="col"><strong>S</strong></th>
                <th scope="col"><strong>S</strong></th>
                <th scope="col"><strong>Latin capital letter S</strong></th>       
              </tr>   
              <tr>
                <th scope="col"><strong>84</strong></th>
                <th scope="col"><strong>T</strong></th>
                <th scope="col"><strong>T</strong></th>
                <th scope="col"><strong>T</strong></th>
                <th scope="col"><strong>T</strong></th>
                <th scope="col"><strong>Latin capital letter T</strong></th>       
              </tr>   
              <tr>
                <th scope="col"><strong>85</strong></th>
                <th scope="col"><strong>U</strong></th>
                <th scope="col"><strong>U</strong></th>
                <th scope="col"><strong>U</strong></th>
                <th scope="col"><strong>U</strong></th>
                <th scope="col"><strong>Latin capital letter U</strong></th>       
              </tr>   
              <tr>
                <th scope="col"><strong>86</strong></th>
                <th scope="col"><strong>V</strong></th>
                <th scope="col"><strong>V</strong></th>
                <th scope="col"><strong>V</strong></th>
                <th scope="col"><strong>V</strong></th>
                <th scope="col"><strong>Latin capital letter V</strong></th>       
              </tr>   
              <tr>
                <th scope="col"><strong>87</strong></th>
                <th scope="col"><strong>W</strong></th>
                <th scope="col"><strong>W</strong></th>
                <th scope="col"><strong>W</strong></th>
                <th scope="col"><strong>W</strong></th>
                <th scope="col"><strong>Latin capital letter W</strong></th>       
              </tr>   
              <tr>
                <th scope="col"><strong>88</strong></th>
                <th scope="col"><strong>X</strong></th>
                <th scope="col"><strong>X</strong></th>
                <th scope="col"><strong>X</strong></th>
                <th scope="col"><strong>X</strong></th>
                <th scope="col"><strong>Latin capital letter X</strong></th>       
              </tr>   
              <tr>
                <th scope="col"><strong>89</strong></th>
                <th scope="col"><strong>Y</strong></th>
                <th scope="col"><strong>Y</strong></th>
                <th scope="col"><strong>Y</strong></th>
                <th scope="col"><strong>Y</strong></th>
                <th scope="col"><strong>Latin capital letter Y</strong></th>       
              </tr>   
              <tr>
                <th scope="col"><strong>90</strong></th>
                <th scope="col"><strong>Z</strong></th>
                <th scope="col"><strong>Z</strong></th>
                <th scope="col"><strong>Z</strong></th>
                <th scope="col"><strong>Z</strong></th>
                <th scope="col"><strong>Latin capital letter Z</strong></th>       
              </tr>   
              <tr>
                <th scope="col"><strong>91</strong></th>
                <th scope="col"><strong>[</strong></th>
                <th scope="col"><strong>[</strong></th>
                <th scope="col"><strong>[</strong></th>
                <th scope="col"><strong>[</strong></th>
                <th scope="col"><strong>left square bracket</strong></th>       
              </tr>   
              <tr>
                <th scope="col"><strong>92</strong></th>
                <th scope="col"><strong>\</strong></th>
                <th scope="col"><strong>\</strong></th>
                <th scope="col"><strong>\</strong></th>
                <th scope="col"><strong>\</strong></th>
                <th scope="col"><strong>reverse solidus</strong></th>       
              </tr>   
              <tr>
                <th scope="col"><strong>93</strong></th>
                <th scope="col"><strong>]</strong></th>
                <th scope="col"><strong>]</strong></th>
                <th scope="col"><strong>]</strong></th>
                <th scope="col"><strong>]</strong></th>
                <th scope="col"><strong>right square bracket</strong></th>       
              </tr>   
              <tr>
                <th scope="col"><strong>94</strong></th>
                <th scope="col"><strong>^</strong></th>
                <th scope="col"><strong>^</strong></th>
                <th scope="col"><strong>^</strong></th>
                <th scope="col"><strong>^</strong></th>
                <th scope="col"><strong>circumflex accent</strong></th>       
              </tr>   
              <tr>
                <th scope="col"><strong>95</strong></th>
                <th scope="col"><strong>_</strong></th>
                <th scope="col"><strong>_</strong></th>
                <th scope="col"><strong>_</strong></th>
                <th scope="col"><strong>_</strong></th>
                <th scope="col"><strong>low line</strong></th>       
              </tr>   
              <tr>
                <th scope="col"><strong>96</strong></th>
                <th scope="col"><strong>`</strong></th>
                <th scope="col"><strong>`</strong></th>
                <th scope="col"><strong>`</strong></th>
                <th scope="col"><strong>`</strong></th>
                <th scope="col"><strong>	grave accent</strong></th>       
              </tr>   
              <tr>
                <th scope="col"><strong>97</strong></th>
                <th scope="col"><strong>a</strong></th>
                <th scope="col"><strong>a</strong></th>
                <th scope="col"><strong>a</strong></th>
                <th scope="col"><strong>a</strong></th>
                <th scope="col"><strong>Latin small letter a</strong></th>       
              </tr>   
              <tr>
                <th scope="col"><strong>98</strong></th>
                <th scope="col"><strong>b</strong></th>
                <th scope="col"><strong>b</strong></th>
                <th scope="col"><strong>b</strong></th>
                <th scope="col"><strong>b</strong></th>
                <th scope="col"><strong>Latin small letter b</strong></th>       
              </tr>   
              <tr>
                <th scope="col"><strong>99</strong></th>
                <th scope="col"><strong>c</strong></th>
                <th scope="col"><strong>c</strong></th>
                <th scope="col"><strong>c</strong></th>
                <th scope="col"><strong>c</strong></th>
                <th scope="col"><strong>Latin small letter c</strong></th>       
              </tr>   
              <tr>
                <th scope="col"><strong>100</strong></th>
                <th scope="col"><strong>d</strong></th>
                <th scope="col"><strong>d</strong></th>
                <th scope="col"><strong>d</strong></th>
                <th scope="col"><strong>d</strong></th>
                <th scope="col"><strong>Latin small letter d</strong></th>       
              </tr>   
              <tr>
                <th scope="col"><strong>101</strong></th>
                <th scope="col"><strong>e</strong></th>
                <th scope="col"><strong>e</strong></th>
                <th scope="col"><strong>e</strong></th>
                <th scope="col"><strong>e</strong></th>
                <th scope="col"><strong>Latin small letter e</strong></th>       
              </tr>   
              <tr>
                <th scope="col"><strong>101</strong></th>
                <th scope="col"><strong>e</strong></th>
                <th scope="col"><strong>e</strong></th>
                <th scope="col"><strong>e</strong></th>
                <th scope="col"><strong>e</strong></th>
                <th scope="col"><strong>Latin small letter e</strong></th>       
              </tr>   
              <tr>
                <th scope="col"><strong>102</strong></th>
                <th scope="col"><strong>f</strong></th>
                <th scope="col"><strong>f</strong></th>
                <th scope="col"><strong>f</strong></th>
                <th scope="col"><strong>f</strong></th>
                <th scope="col"><strong>Latin small letter f</strong></th>       
              </tr>   
              <tr>
                <th scope="col"><strong>103</strong></th>
                <th scope="col"><strong>g</strong></th>
                <th scope="col"><strong>g</strong></th>
                <th scope="col"><strong>g</strong></th>
                <th scope="col"><strong>g</strong></th>
                <th scope="col"><strong>Latin small letter g</strong></th>       
              </tr>   
              <tr>
                <th scope="col"><strong>104</strong></th>
                <th scope="col"><strong>h</strong></th>
                <th scope="col"><strong>h</strong></th>
                <th scope="col"><strong>h</strong></th>
                <th scope="col"><strong>h</strong></th>
                <th scope="col"><strong>Latin small letter h</strong></th>       
              </tr>   
              <tr>
                <th scope="col"><strong>105</strong></th>
                <th scope="col"><strong>i</strong></th>
                <th scope="col"><strong>i</strong></th>
                <th scope="col"><strong>i</strong></th>
                <th scope="col"><strong>i</strong></th>
                <th scope="col"><strong>Latin small letter i</strong></th>       
              </tr>   
              <tr>
                <th scope="col"><strong>106</strong></th>
                <th scope="col"><strong>j</strong></th>
                <th scope="col"><strong>j</strong></th>
                <th scope="col"><strong>j</strong></th>
                <th scope="col"><strong>j</strong></th>
                <th scope="col"><strong>Latin small letter j</strong></th>       
              </tr>   
              <tr>
                <th scope="col"><strong>107</strong></th>
                <th scope="col"><strong>k</strong></th>
                <th scope="col"><strong>k</strong></th>
                <th scope="col"><strong>k</strong></th>
                <th scope="col"><strong>k</strong></th>
                <th scope="col"><strong>Latin small letter k</strong></th>       
              </tr>  
              <tr>
                <th scope="col"><strong>108</strong></th>
                <th scope="col"><strong>l</strong></th>
                <th scope="col"><strong>l</strong></th>
                <th scope="col"><strong>l</strong></th>
                <th scope="col"><strong>l</strong></th>
                <th scope="col"><strong>Latin small letter l</strong></th>       
              </tr>   
              <tr>
                <th scope="col"><strong>109</strong></th>
                <th scope="col"><strong>m</strong></th>
                <th scope="col"><strong>m</strong></th>
                <th scope="col"><strong>m</strong></th>
                <th scope="col"><strong>m</strong></th>
                <th scope="col"><strong>Latin small letter m</strong></th>       
              </tr>   
              <tr>
                <th scope="col"><strong>110</strong></th>
                <th scope="col"><strong>n</strong></th>
                <th scope="col"><strong>n</strong></th>
                <th scope="col"><strong>n</strong></th>
                <th scope="col"><strong>n</strong></th>
                <th scope="col"><strong>Latin small letter n</strong></th>       
              </tr>   
              <tr>
                <th scope="col"><strong>111</strong></th>
                <th scope="col"><strong>o</strong></th>
                <th scope="col"><strong>o</strong></th>
                <th scope="col"><strong>o</strong></th>
                <th scope="col"><strong>o</strong></th>
                <th scope="col"><strong>Latin small letter o</strong></th>       
              </tr>   
              <tr>
                <th scope="col"><strong>112</strong></th>
                <th scope="col"><strong>p</strong></th>
                <th scope="col"><strong>p</strong></th>
                <th scope="col"><strong>p</strong></th>
                <th scope="col"><strong>p</strong></th>
                <th scope="col"><strong>Latin small letter p</strong></th>       
              </tr>   
              <tr>
                <th scope="col"><strong>113</strong></th>
                <th scope="col"><strong>q</strong></th>
                <th scope="col"><strong>q</strong></th>
                <th scope="col"><strong>q</strong></th>
                <th scope="col"><strong>q</strong></th>
                <th scope="col"><strong>Latin small letter q</strong></th>       
              </tr>   
              <tr>
                <th scope="col"><strong>114</strong></th>
                <th scope="col"><strong>r</strong></th>
                <th scope="col"><strong>r</strong></th>
                <th scope="col"><strong>r</strong></th>
                <th scope="col"><strong>r</strong></th>
                <th scope="col"><strong>Latin small letter r</strong></th>       
              </tr>   
              <tr>
                <th scope="col"><strong>115</strong></th>
                <th scope="col"><strong>s</strong></th>
                <th scope="col"><strong>s</strong></th>
                <th scope="col"><strong>s</strong></th>
                <th scope="col"><strong>s</strong></th>
                <th scope="col"><strong>Latin small letter s</strong></th>       
              </tr>   
              <tr>
                <th scope="col"><strong>116</strong></th>
                <th scope="col"><strong>t</strong></th>
                <th scope="col"><strong>t</strong></th>
                <th scope="col"><strong>t</strong></th>
                <th scope="col"><strong>t</strong></th>
                <th scope="col"><strong>Latin small letter t</strong></th>       
              </tr>   
              <tr>
                <th scope="col"><strong>117</strong></th>
                <th scope="col"><strong>u</strong></th>
                <th scope="col"><strong>u</strong></th>
                <th scope="col"><strong>u</strong></th>
                <th scope="col"><strong>u</strong></th>
                <th scope="col"><strong>Latin small letter u</strong></th>       
              </tr>   
              <tr>
                <th scope="col"><strong>118</strong></th>
                <th scope="col"><strong>v</strong></th>
                <th scope="col"><strong>v</strong></th>
                <th scope="col"><strong>v</strong></th>
                <th scope="col"><strong>v</strong></th>
                <th scope="col"><strong>Latin small letter v</strong></th>       
              </tr>   
              <tr>
                <th scope="col"><strong>119</strong></th>
                <th scope="col"><strong>w</strong></th>
                <th scope="col"><strong>w</strong></th>
                <th scope="col"><strong>w</strong></th>
                <th scope="col"><strong>w</strong></th>
                <th scope="col"><strong>Latin small letter w</strong></th>       
              </tr>   
              <tr>
                <th scope="col"><strong>120</strong></th>
                <th scope="col"><strong>x</strong></th>
                <th scope="col"><strong>x</strong></th>
                <th scope="col"><strong>x</strong></th>
                <th scope="col"><strong>x</strong></th>
                <th scope="col"><strong>Latin small letter x</strong></th>       
              </tr>   
              <tr>
                <th scope="col"><strong>121</strong></th>
                <th scope="col"><strong>y</strong></th>
                <th scope="col"><strong>y</strong></th>
                <th scope="col"><strong>y</strong></th>
                <th scope="col"><strong>y</strong></th>
                <th scope="col"><strong>Latin small letter y</strong></th>       
              </tr>   
              <tr>
                <th scope="col"><strong>122</strong></th>
                <th scope="col"><strong>z</strong></th>
                <th scope="col"><strong>z</strong></th>
                <th scope="col"><strong>z</strong></th>
                <th scope="col"><strong>z</strong></th>
                <th scope="col"><strong>Latin small letter z</strong></th>       
              </tr>   
              <tr>
                <th scope="col"><strong>123</strong></th>
                <th scope="col"><strong>&#123;</strong></th>
                <th scope="col"><strong>&#123;</strong></th>
                <th scope="col"><strong>&#123;</strong></th>
                <th scope="col"><strong>&#123;</strong></th>
                <th scope="col"><strong>left curly bracket</strong></th>       
              </tr>   
              <tr>
                <th scope="col"><strong>124</strong></th>
                <th scope="col"><strong>&#124;</strong></th>
                <th scope="col"><strong>&#124;</strong></th>
                <th scope="col"><strong>&#124;</strong></th>
                <th scope="col"><strong>&#124;</strong></th>
                <th scope="col"><strong>vertical line</strong></th>       
              </tr>   
              <tr>
                <th scope="col"><strong>125</strong></th>
                <th scope="col"><strong>&#125;</strong></th>
                <th scope="col"><strong>&#125;</strong></th>
                <th scope="col"><strong>&#125;</strong></th>
                <th scope="col"><strong>&#125;</strong></th>
                <th scope="col"><strong>right curly bracket</strong></th>       
              </tr>   
              <tr>
                <th scope="col"><strong>126</strong></th>
                <th scope="col"><strong>&#126;</strong></th>
                <th scope="col"><strong>&#126;</strong></th>
                <th scope="col"><strong>&#126;</strong></th>
                <th scope="col"><strong>&#126;</strong></th>
                <th scope="col"><strong>tilde</strong></th>       
              </tr>   
              <tr>
                <th scope="col"><strong>127</strong></th>
                <th scope="col"><strong>DEL</strong></th>
                <th scope="col"><strong> </strong></th>
                <th scope="col"><strong> </strong></th>
                <th scope="col"><strong> </strong></th>
                <th scope="col"><strong> </strong></th>       
              </tr>  
              <tr>
                <th scope="col"><strong>128</strong></th>
                <th scope="col"><strong> </strong></th>
                <th scope="col"><strong>€</strong></th>
                <th scope="col"><strong> </strong></th>
                <th scope="col"><strong> </strong></th>
                <th scope="col"><strong>euro sign </strong></th>       
              </tr>    
              <tr>
                <th scope="col"><strong>129</strong></th>
                <th scope="col"><strong> </strong></th>
                <th scope="col"><strong></strong></th>
                <th scope="col"><strong></strong></th>
                <th scope="col"><strong></strong></th>
                <th scope="col"><strong>NOT USED</strong></th>       
              </tr>   
              <tr>
                <th scope="col"><strong>130</strong></th>
                <th scope="col"><strong> </strong></th>
                <th scope="col"><strong>‚</strong></th>
                <th scope="col"><strong></strong></th>
                <th scope="col"><strong></strong></th>
                <th scope="col"><strong>single low-9 quotation mark</strong></th>       
              </tr>    
              <tr>
                <th scope="col"><strong>131</strong></th>
                <th scope="col"><strong> </strong></th>
                <th scope="col"><strong>	ƒ</strong></th>
                <th scope="col"><strong></strong></th>
                <th scope="col"><strong></strong></th>
                <th scope="col"><strong>Latin small letter f with hook</strong></th>       
              </tr>    
              <tr>
                <th scope="col"><strong>132</strong></th>
                <th scope="col"><strong> </strong></th>
                <th scope="col"><strong>„</strong></th>
                <th scope="col"><strong></strong></th>
                <th scope="col"><strong></strong></th>
                <th scope="col"><strong>double low-9 quotation mark</strong></th>       
              </tr>   
              <tr>
                <th scope="col"><strong>133</strong></th>
                <th scope="col"><strong> </strong></th>
                <th scope="col"><strong>…</strong></th>
                <th scope="col"><strong></strong></th>
                <th scope="col"><strong></strong></th>
                <th scope="col"><strong>	horizontal ellipsis</strong></th>       
              </tr>    
              <tr>
                <th scope="col"><strong>134</strong></th>
                <th scope="col"><strong> </strong></th>
                <th scope="col"><strong>†</strong></th>
                <th scope="col"><strong></strong></th>
                <th scope="col"><strong></strong></th>
                <th scope="col"><strong>dagger</strong></th>       
              </tr>    
              <tr>
                <th scope="col"><strong>135</strong></th>
                <th scope="col"><strong> </strong></th>
                <th scope="col"><strong>‡</strong></th>
                <th scope="col"><strong></strong></th>
                <th scope="col"><strong></strong></th>
                <th scope="col"><strong>	double dagger</strong></th>       
              </tr>    
              <tr>
                <th scope="col"><strong>136</strong></th>
                <th scope="col"><strong> </strong></th>
                <th scope="col"><strong>ˆ</strong></th>
                <th scope="col"><strong></strong></th>
                <th scope="col"><strong></strong></th>
                <th scope="col"><strong>modifier letter circumflex accent</strong></th>       
              </tr>    
              <tr>
                <th scope="col"><strong>137</strong></th>
                <th scope="col"><strong> </strong></th>
                <th scope="col"><strong>	‰</strong></th>
                <th scope="col"><strong></strong></th>
                <th scope="col"><strong></strong></th>
                <th scope="col"><strong>	per mille sign</strong></th>       
              </tr>    
              <tr>
                <th scope="col"><strong>138</strong></th>
                <th scope="col"><strong> </strong></th>
                <th scope="col"><strong>Š</strong></th>
                <th scope="col"><strong></strong></th>
                <th scope="col"><strong></strong></th>
                <th scope="col"><strong>Latin capital letter S with caron</strong></th>       
              </tr>    
              <tr>
                <th scope="col"><strong>139</strong></th>
                <th scope="col"><strong> </strong></th>
                <th scope="col"><strong>‹</strong></th>
                <th scope="col"><strong></strong></th>
                <th scope="col"><strong></strong></th>
                <th scope="col"><strong>single left-pointing angle quotation mark</strong></th>       
              </tr>  
              <tr>
                <th scope="col"><strong>140</strong></th>
                <th scope="col"><strong> </strong></th>
                <th scope="col"><strong>Œ</strong></th>
                <th scope="col"><strong></strong></th>
                <th scope="col"><strong></strong></th>
                <th scope="col"><strong>Latin capital ligature OE</strong></th>       
              </tr>    
              <tr>
                <th scope="col"><strong>141</strong></th>
                <th scope="col"><strong> </strong></th>
                <th scope="col"><strong></strong></th>
                <th scope="col"><strong></strong></th>
                <th scope="col"><strong></strong></th>
                <th scope="col"><strong>NOT USED</strong></th>       
              </tr>    
              <tr>
                <th scope="col"><strong>142</strong></th>
                <th scope="col"><strong> </strong></th>
                <th scope="col"><strong>Ž</strong></th>
                <th scope="col"><strong></strong></th>
                <th scope="col"><strong></strong></th>
                <th scope="col"><strong>Latin capital letter Z with caron</strong></th>       
              </tr>  
              <tr>
                <th scope="col"><strong>143</strong></th>
                <th scope="col"><strong> </strong></th>
                <th scope="col"><strong></strong></th>
                <th scope="col"><strong></strong></th>
                <th scope="col"><strong></strong></th>
                <th scope="col"><strong>NOT USED</strong></th>       
              </tr>   
              <tr>
                <th scope="col"><strong>144</strong></th>
                <th scope="col"><strong> </strong></th>
                <th scope="col"><strong></strong></th>
                <th scope="col"><strong></strong></th>
                <th scope="col"><strong></strong></th>
                <th scope="col"><strong>NOT USED</strong></th>       
              </tr>   
              <tr>
                <th scope="col"><strong>145</strong></th>
                <th scope="col"><strong> </strong></th>
                <th scope="col"><strong>‘</strong></th>
                <th scope="col"><strong></strong></th>
                <th scope="col"><strong></strong></th>
                <th scope="col"><strong>left single quotation mark</strong></th>       
              </tr>   
              <tr>
                <th scope="col"><strong>146</strong></th>
                <th scope="col"><strong> </strong></th>
                <th scope="col"><strong>’</strong></th>
                <th scope="col"><strong></strong></th>
                <th scope="col"><strong></strong></th>
                <th scope="col"><strong>right single quotation mark</strong></th>       
              </tr>   
              <tr>
                <th scope="col"><strong>147</strong></th>
                <th scope="col"><strong> </strong></th>
                <th scope="col"><strong>“</strong></th>
                <th scope="col"><strong></strong></th>
                <th scope="col"><strong></strong></th>
                <th scope="col"><strong>left double quotation mark</strong></th>       
              </tr>   
              <tr>
                <th scope="col"><strong>148</strong></th>
                <th scope="col"><strong> </strong></th>
                <th scope="col"><strong>”</strong></th>
                <th scope="col"><strong></strong></th>
                <th scope="col"><strong></strong></th>
                <th scope="col"><strong>	right double quotation mark</strong></th>       
              </tr>   
              <tr>
                <th scope="col"><strong>149</strong></th>
                <th scope="col"><strong> </strong></th>
                <th scope="col"><strong>•</strong></th>
                <th scope="col"><strong></strong></th>
                <th scope="col"><strong></strong></th>
                <th scope="col"><strong>bullet</strong></th>       
              </tr>   
              <tr>
                <th scope="col"><strong>150</strong></th>
                <th scope="col"><strong> </strong></th>
                <th scope="col"><strong>–</strong></th>
                <th scope="col"><strong></strong></th>
                <th scope="col"><strong></strong></th>
                <th scope="col"><strong>en dash</strong></th>       
              </tr>   
              <tr>
                <th scope="col"><strong>151</strong></th>
                <th scope="col"><strong> </strong></th>
                <th scope="col"><strong>—</strong></th>
                <th scope="col"><strong></strong></th>
                <th scope="col"><strong></strong></th>
                <th scope="col"><strong>em dash</strong></th>       
              </tr>   
              <tr>
                <th scope="col"><strong>152</strong></th>
                <th scope="col"><strong> </strong></th>
                <th scope="col"><strong>˜</strong></th>
                <th scope="col"><strong></strong></th>
                <th scope="col"><strong></strong></th>
                <th scope="col"><strong>small tilde</strong></th>       
              </tr>   
              <tr>
                <th scope="col"><strong>153</strong></th>
                <th scope="col"><strong> </strong></th>
                <th scope="col"><strong>™</strong></th>
                <th scope="col"><strong></strong></th>
                <th scope="col"><strong></strong></th>
                <th scope="col"><strong>trade mark sign</strong></th>       
              </tr>   
              <tr>
                <th scope="col"><strong>154</strong></th>
                <th scope="col"><strong> </strong></th>
                <th scope="col"><strong>š</strong></th>
                <th scope="col"><strong></strong></th>
                <th scope="col"><strong></strong></th>
                <th scope="col"><strong>Latin small letter s with caron</strong></th>       
              </tr>   
              <tr>
                <th scope="col"><strong>155</strong></th>
                <th scope="col"><strong> </strong></th>
                <th scope="col"><strong>›</strong></th>
                <th scope="col"><strong></strong></th>
                <th scope="col"><strong></strong></th>
                <th scope="col"><strong>single right-pointing angle quotation mark</strong></th>       
              </tr>   
              <tr>
                <th scope="col"><strong>156</strong></th>
                <th scope="col"><strong> </strong></th>
                <th scope="col"><strong>œ</strong></th>
                <th scope="col"><strong></strong></th>
                <th scope="col"><strong></strong></th>
                <th scope="col"><strong>Latin small ligature oe</strong></th>       
              </tr>   
              <tr>
                <th scope="col"><strong>157</strong></th>
                <th scope="col"><strong> </strong></th>
                <th scope="col"><strong></strong></th>
                <th scope="col"><strong></strong></th>
                <th scope="col"><strong></strong></th>
                <th scope="col"><strong>NOT USED</strong></th>       
              </tr>   
              <tr>
                <th scope="col"><strong>158</strong></th>
                <th scope="col"><strong> </strong></th>
                <th scope="col"><strong>ž</strong></th>
                <th scope="col"><strong></strong></th>
                <th scope="col"><strong></strong></th>
                <th scope="col"><strong>Latin small letter z with caron</strong></th>       
              </tr>   
              <tr>
                <th scope="col"><strong>159</strong></th>
                <th scope="col"><strong> </strong></th>
                <th scope="col"><strong>Ÿ</strong></th>
                <th scope="col"><strong></strong></th>
                <th scope="col"><strong></strong></th>
                <th scope="col"><strong>Latin capital letter Y with diaeresis</strong></th>       
              </tr>   
              <tr>
                <th scope="col"><strong>160</strong></th>
                <th scope="col"><strong> </strong></th>
                <th scope="col"><strong> </strong></th>
                <th scope="col"><strong> </strong></th>
                <th scope="col"><strong> </strong></th>
                <th scope="col"><strong>no-break space</strong></th>       
              </tr>   
              <tr>
                <th scope="col"><strong>161</strong></th>
                <th scope="col"><strong> </strong></th>
                <th scope="col"><strong>¡</strong></th>
                <th scope="col"><strong>¡</strong></th>
                <th scope="col"><strong>¡</strong></th>
                <th scope="col"><strong>inverted exclamation mark</strong></th>       
              </tr>   
              <tr>
                <th scope="col"><strong>162</strong></th>
                <th scope="col"><strong> </strong></th>
                <th scope="col"><strong>¢</strong></th>
                <th scope="col"><strong>¢</strong></th>
                <th scope="col"><strong>¢</strong></th>
                <th scope="col"><strong>cent sign</strong></th>       
              </tr>   
              <tr>
                <th scope="col"><strong>163</strong></th>
                <th scope="col"><strong> </strong></th>
                <th scope="col"><strong>£</strong></th>
                <th scope="col"><strong>£</strong></th>
                <th scope="col"><strong>£</strong></th>
                <th scope="col"><strong>pound sign</strong></th>       
              </tr>   
              <tr>
                <th scope="col"><strong>164</strong></th>
                <th scope="col"><strong> </strong></th>
                <th scope="col"><strong>¤</strong></th>
                <th scope="col"><strong>¤</strong></th>
                <th scope="col"><strong>¤</strong></th>
                <th scope="col"><strong>currency sign</strong></th>       
              </tr>   
              <tr>
                <th scope="col"><strong>165</strong></th>
                <th scope="col"><strong> </strong></th>
                <th scope="col"><strong>¥</strong></th>
                <th scope="col"><strong>¥</strong></th>
                <th scope="col"><strong>¥</strong></th>
                <th scope="col"><strong>yen sign</strong></th>       
              </tr>   
              <tr>
                <th scope="col"><strong>166</strong></th>
                <th scope="col"><strong> </strong></th>
                <th scope="col"><strong>¦</strong></th>
                <th scope="col"><strong>¦</strong></th>
                <th scope="col"><strong>¦</strong></th>
                <th scope="col"><strong>broken bar</strong></th>       
              </tr>   
              <tr>
                <th scope="col"><strong>167</strong></th>
                <th scope="col"><strong> </strong></th>
                <th scope="col"><strong>§</strong></th>
                <th scope="col"><strong>§</strong></th>
                <th scope="col"><strong>§</strong></th>
                <th scope="col"><strong>section sign</strong></th>       
              </tr>   
              <tr>
                <th scope="col"><strong>168</strong></th>
                <th scope="col"><strong> </strong></th>
                <th scope="col"><strong>¨</strong></th>
                <th scope="col"><strong>¨</strong></th>
                <th scope="col"><strong>¨</strong></th>
                <th scope="col"><strong>diaeresis</strong></th>       
              </tr>   
              <tr>
                <th scope="col"><strong>169</strong></th>
                <th scope="col"><strong> </strong></th>
                <th scope="col"><strong>©</strong></th>
                <th scope="col"><strong>©</strong></th>
                <th scope="col"><strong>©</strong></th>
                <th scope="col"><strong>copyright sign</strong></th>       
              </tr>  
              <tr>
                <th scope="col"><strong>170</strong></th>
                <th scope="col"><strong> </strong></th>
                <th scope="col"><strong>ª</strong></th>
                <th scope="col"><strong>ª</strong></th>
                <th scope="col"><strong>ª</strong></th>
                <th scope="col"><strong>feminine ordinal indicator</strong></th>       
              </tr>    
              <tr>
                <th scope="col"><strong>171</strong></th>
                <th scope="col"><strong> </strong></th>
                <th scope="col"><strong>«</strong></th>
                <th scope="col"><strong>«</strong></th>
                <th scope="col"><strong>«</strong></th>
                <th scope="col"><strong>left-pointing double angle quotation mark</strong></th>       
              </tr>    
              <tr>
                <th scope="col"><strong>172</strong></th>
                <th scope="col"><strong> </strong></th>
                <th scope="col"><strong>¬</strong></th>
                <th scope="col"><strong>¬</strong></th>
                <th scope="col"><strong>¬</strong></th>
                <th scope="col"><strong>not sign</strong></th>       
              </tr>    
              <tr>
                <th scope="col"><strong>173</strong></th>
                <th scope="col"><strong> </strong></th>
                <th scope="col"><strong>¬</strong></th>
                <th scope="col"><strong>¬</strong></th>
                <th scope="col"><strong>¬</strong></th>
                <th scope="col"><strong>soft hyphen</strong></th>       
              </tr>    
              <tr>
                <th scope="col"><strong>174</strong></th>
                <th scope="col"><strong> </strong></th>
                <th scope="col"><strong>®</strong></th>
                <th scope="col"><strong>®</strong></th>
                <th scope="col"><strong>®</strong></th>
                <th scope="col"><strong>registered sign</strong></th>       
              </tr>    
              <tr>
                <th scope="col"><strong>175</strong></th>
                <th scope="col"><strong> </strong></th>
                <th scope="col"><strong>¯</strong></th>
                <th scope="col"><strong>¯</strong></th>
                <th scope="col"><strong>¯</strong></th>
                <th scope="col"><strong>macron</strong></th>       
              </tr>    
              <tr>
                <th scope="col"><strong>176</strong></th>
                <th scope="col"><strong> </strong></th>
                <th scope="col"><strong>°</strong></th>
                <th scope="col"><strong>°</strong></th>
                <th scope="col"><strong>°</strong></th>
                <th scope="col"><strong>degree sign</strong></th>       
              </tr>    
              <tr>
                <th scope="col"><strong>177</strong></th>
                <th scope="col"><strong> </strong></th>
                <th scope="col"><strong>±</strong></th>
                <th scope="col"><strong>±</strong></th>
                <th scope="col"><strong>±</strong></th>
                <th scope="col"><strong>plus-minus sign</strong></th>       
              </tr>    
              <tr>
                <th scope="col"><strong>178</strong></th>
                <th scope="col"><strong> </strong></th>
                <th scope="col"><strong>²</strong></th>
                <th scope="col"><strong>²</strong></th>
                <th scope="col"><strong>²</strong></th>
                <th scope="col"><strong>superscript two</strong></th>       
              </tr>    
              <tr>
                <th scope="col"><strong>179</strong></th>
                <th scope="col"><strong> </strong></th>
                <th scope="col"><strong>³</strong></th>
                <th scope="col"><strong>³</strong></th>
                <th scope="col"><strong>³</strong></th>
                <th scope="col"><strong>superscript three</strong></th>       
              </tr>    
              <tr>
                <th scope="col"><strong>180</strong></th>
                <th scope="col"><strong> </strong></th>
                <th scope="col"><strong>´</strong></th>
                <th scope="col"><strong>´</strong></th>
                <th scope="col"><strong>´</strong></th>
                <th scope="col"><strong>acute accent</strong></th>       
              </tr>    
              <tr>
                <th scope="col"><strong>181</strong></th>
                <th scope="col"><strong> </strong></th>
                <th scope="col"><strong>µ</strong></th>
                <th scope="col"><strong>µ</strong></th>
                <th scope="col"><strong>µ</strong></th>
                <th scope="col"><strong>micro sign</strong></th>       
              </tr>    
              <tr>
                <th scope="col"><strong>182</strong></th>
                <th scope="col"><strong> </strong></th>
                <th scope="col"><strong>¶</strong></th>
                <th scope="col"><strong>¶</strong></th>
                <th scope="col"><strong>¶</strong></th>
                <th scope="col"><strong>pilcrow sign</strong></th>       
              </tr>    
              <tr>
                <th scope="col"><strong>183</strong></th>
                <th scope="col"><strong> </strong></th>
                <th scope="col"><strong>·</strong></th>
                <th scope="col"><strong>·</strong></th>
                <th scope="col"><strong>·</strong></th>
                <th scope="col"><strong>middle dot</strong></th>       
              </tr>    
              <tr>
                <th scope="col"><strong>184</strong></th>
                <th scope="col"><strong> </strong></th>
                <th scope="col"><strong>¸</strong></th>
                <th scope="col"><strong>¸</strong></th>
                <th scope="col"><strong>¸</strong></th>
                <th scope="col"><strong>cedilla</strong></th>       
              </tr>    
              <tr>
                <th scope="col"><strong>185</strong></th>
                <th scope="col"><strong> </strong></th>
                <th scope="col"><strong>¹</strong></th>
                <th scope="col"><strong>¹</strong></th>
                <th scope="col"><strong>¹</strong></th>
                <th scope="col"><strong>superscript one</strong></th>       
              </tr>   
              <tr>
                <th scope="col"><strong>186</strong></th>
                <th scope="col"><strong> </strong></th>
                <th scope="col"><strong>º</strong></th>
                <th scope="col"><strong>º</strong></th>
                <th scope="col"><strong>º</strong></th>
                <th scope="col"><strong>masculine ordinal indicator</strong></th>       
              </tr>     
              <tr>
                <th scope="col"><strong>187</strong></th>
                <th scope="col"><strong> </strong></th>
                <th scope="col"><strong>»</strong></th>
                <th scope="col"><strong>»</strong></th>
                <th scope="col"><strong>»</strong></th>
                <th scope="col"><strong>right-pointing double angle quotation mark</strong></th>       
              </tr>   
              <tr>
                <th scope="col"><strong>188</strong></th>
                <th scope="col"><strong> </strong></th>
                <th scope="col"><strong>¼</strong></th>
                <th scope="col"><strong>¼</strong></th>
                <th scope="col"><strong>¼</strong></th>
                <th scope="col"><strong>vulgar fraction one quarter</strong></th>       
              </tr>     
              <tr>
                <th scope="col"><strong>189</strong></th>
                <th scope="col"><strong> </strong></th>
                <th scope="col"><strong>½</strong></th>
                <th scope="col"><strong>½</strong></th>
                <th scope="col"><strong>½</strong></th>
                <th scope="col"><strong>vulgar fraction one half</strong></th>       
              </tr>     
              <tr>
                <th scope="col"><strong>190</strong></th>
                <th scope="col"><strong> </strong></th>
                <th scope="col"><strong>¾</strong></th>
                <th scope="col"><strong>¾</strong></th>
                <th scope="col"><strong>¾</strong></th>
                <th scope="col"><strong>vulgar fraction three quarters</strong></th>       
              </tr>     
              <tr>
                <th scope="col"><strong>191</strong></th>
                <th scope="col"><strong> </strong></th>
                <th scope="col"><strong>¿</strong></th>
                <th scope="col"><strong>¿</strong></th>
                <th scope="col"><strong>¿</strong></th>
                <th scope="col"><strong>inverted question mark</strong></th>       
              </tr>     
              <tr>
                <th scope="col"><strong>192</strong></th>
                <th scope="col"><strong> </strong></th>
                <th scope="col"><strong>À</strong></th>
                <th scope="col"><strong>À</strong></th>
                <th scope="col"><strong>À</strong></th>
                <th scope="col"><strong>Latin capital letter A with grave</strong></th>       
              </tr>     
              <tr>
                <th scope="col"><strong>193</strong></th>
                <th scope="col"><strong> </strong></th>
                <th scope="col"><strong>Á</strong></th>
                <th scope="col"><strong>Á</strong></th>
                <th scope="col"><strong>Á</strong></th>
                <th scope="col"><strong>Latin capital letter A with acute</strong></th>       
              </tr>     
              <tr>
                <th scope="col"><strong>194</strong></th>
                <th scope="col"><strong> </strong></th>
                <th scope="col"><strong>Â</strong></th>
                <th scope="col"><strong>Â</strong></th>
                <th scope="col"><strong>Â</strong></th>
                <th scope="col"><strong>Latin capital letter A with circumflex</strong></th>       
              </tr>     
              <tr>
                <th scope="col"><strong>195</strong></th>
                <th scope="col"><strong> </strong></th>
                <th scope="col"><strong>Ã</strong></th>
                <th scope="col"><strong>Ã</strong></th>
                <th scope="col"><strong>Ã</strong></th>
                <th scope="col"><strong>Latin capital letter A with tilde</strong></th>       
              </tr>     
              <tr>
                <th scope="col"><strong>196</strong></th>
                <th scope="col"><strong> </strong></th>
                <th scope="col"><strong>Ä</strong></th>
                <th scope="col"><strong>Ä</strong></th>
                <th scope="col"><strong>Ä</strong></th>
                <th scope="col"><strong>Latin capital letter A with diaeresis</strong></th>       
              </tr>     
              <tr>
                <th scope="col"><strong>197</strong></th>
                <th scope="col"><strong> </strong></th>
                <th scope="col"><strong>Å</strong></th>
                <th scope="col"><strong>Å</strong></th>
                <th scope="col"><strong>Å</strong></th>
                <th scope="col"><strong>Latin capital letter A with ring above</strong></th>       
              </tr>     
              <tr>
                <th scope="col"><strong>198</strong></th>
                <th scope="col"><strong> </strong></th>
                <th scope="col"><strong>Æ</strong></th>
                <th scope="col"><strong>Æ</strong></th>
                <th scope="col"><strong>Æ</strong></th>
                <th scope="col"><strong>Latin capital letter AE</strong></th>       
              </tr>     
              <tr>
                <th scope="col"><strong>199</strong></th>
                <th scope="col"><strong> </strong></th>
                <th scope="col"><strong>Ç</strong></th>
                <th scope="col"><strong>Ç</strong></th>
                <th scope="col"><strong>Ç</strong></th>
                <th scope="col"><strong>Latin capital letter C with cedilla</strong></th>       
              </tr>     
              <tr>
                <th scope="col"><strong>200</strong></th>
                <th scope="col"><strong> </strong></th>
                <th scope="col"><strong>È</strong></th>
                <th scope="col"><strong>È</strong></th>
                <th scope="col"><strong>È</strong></th>
                <th scope="col"><strong>Latin capital letter E with grave</strong></th>       
              </tr>    
              <tr>
                <th scope="col"><strong>201</strong></th>
                <th scope="col"><strong> </strong></th>
                <th scope="col"><strong>É</strong></th>
                <th scope="col"><strong>É</strong></th>
                <th scope="col"><strong>É</strong></th>
                <th scope="col"><strong>Latin capital letter E with acute</strong></th>       
              </tr>    
              <tr>
                <th scope="col"><strong>202</strong></th>
                <th scope="col"><strong> </strong></th>
                <th scope="col"><strong>Ê</strong></th>
                <th scope="col"><strong>Ê</strong></th>
                <th scope="col"><strong>Ê</strong></th>
                <th scope="col"><strong>Latin capital letter E with circumflex</strong></th>       
              </tr>     
              <tr>
                <th scope="col"><strong>203</strong></th>
                <th scope="col"><strong> </strong></th>
                <th scope="col"><strong>Ë</strong></th>
                <th scope="col"><strong>Ë</strong></th>
                <th scope="col"><strong>Ë</strong></th>
                <th scope="col"><strong>Latin capital letter E with diaeresis</strong></th>       
              </tr>     
              <tr>
                <th scope="col"><strong>204</strong></th>
                <th scope="col"><strong> </strong></th>
                <th scope="col"><strong>Ì</strong></th>
                <th scope="col"><strong>Ì</strong></th>
                <th scope="col"><strong>Ì</strong></th>
                <th scope="col"><strong>Latin capital letter I with grave</strong></th>       
              </tr>     
              <tr>
                <th scope="col"><strong>205</strong></th>
                <th scope="col"><strong> </strong></th>
                <th scope="col"><strong>Í</strong></th>
                <th scope="col"><strong>Í</strong></th>
                <th scope="col"><strong>Í</strong></th>
                <th scope="col"><strong>Latin capital letter I with acute</strong></th>       
              </tr>     
              <tr>
                <th scope="col"><strong>206</strong></th>
                <th scope="col"><strong> </strong></th>
                <th scope="col"><strong>Î</strong></th>
                <th scope="col"><strong>Î</strong></th>
                <th scope="col"><strong>Î</strong></th>
                <th scope="col"><strong>Latin capital letter I with circumflex</strong></th>       
              </tr>     
              <tr>
                <th scope="col"><strong>207</strong></th>
                <th scope="col"><strong> </strong></th>
                <th scope="col"><strong>Ï</strong></th>
                <th scope="col"><strong>Ï</strong></th>
                <th scope="col"><strong>Ï</strong></th>
                <th scope="col"><strong>Latin capital letter I with diaeresis</strong></th>       
              </tr>     
              <tr>
                <th scope="col"><strong>208</strong></th>
                <th scope="col"><strong> </strong></th>
                <th scope="col"><strong>Ð</strong></th>
                <th scope="col"><strong>Ð</strong></th>
                <th scope="col"><strong>Ð</strong></th>
                <th scope="col"><strong>Latin capital letter Eth</strong></th>       
              </tr>     
              <tr>
                <th scope="col"><strong>209</strong></th>
                <th scope="col"><strong> </strong></th>
                <th scope="col"><strong>Ñ</strong></th>
                <th scope="col"><strong>Ñ</strong></th>
                <th scope="col"><strong>Ñ</strong></th>
                <th scope="col"><strong>Latin capital letter N with tilde</strong></th>       
              </tr>    
              <tr>
                <th scope="col"><strong>210</strong></th>
                <th scope="col"><strong> </strong></th>
                <th scope="col"><strong>Ò</strong></th>
                <th scope="col"><strong>Ò</strong></th>
                <th scope="col"><strong>Ò</strong></th>
                <th scope="col"><strong>Latin capital letter O with grave</strong></th>       
              </tr>      
              <tr>
                <th scope="col"><strong>211</strong></th>
                <th scope="col"><strong> </strong></th>
                <th scope="col"><strong>Ó</strong></th>
                <th scope="col"><strong>Ó</strong></th>
                <th scope="col"><strong>Ó</strong></th>
                <th scope="col"><strong>Latin capital letter O with acute</strong></th>       
              </tr>     
              <tr>
                <th scope="col"><strong>212</strong></th>
                <th scope="col"><strong> </strong></th>
                <th scope="col"><strong>Ô</strong></th>
                <th scope="col"><strong>Ô</strong></th>
                <th scope="col"><strong>Ô</strong></th>
                <th scope="col"><strong>Latin capital letter O with circumflex</strong></th>       
              </tr>     
              <tr>
                <th scope="col"><strong>213</strong></th>
                <th scope="col"><strong> </strong></th>
                <th scope="col"><strong>Õ</strong></th>
                <th scope="col"><strong>Õ</strong></th>
                <th scope="col"><strong>Õ</strong></th>
                <th scope="col"><strong>Latin capital letter O with tilde</strong></th>       
              </tr>     
              <tr>
                <th scope="col"><strong>214</strong></th>
                <th scope="col"><strong> </strong></th>
                <th scope="col"><strong>Ö</strong></th>
                <th scope="col"><strong>Ö</strong></th>
                <th scope="col"><strong>Ö</strong></th>
                <th scope="col"><strong>Latin capital letter O with diaeresis</strong></th>       
              </tr>     
              <tr>
                <th scope="col"><strong>215</strong></th>
                <th scope="col"><strong> </strong></th>
                <th scope="col"><strong>×</strong></th>
                <th scope="col"><strong>×</strong></th>
                <th scope="col"><strong>×</strong></th>
                <th scope="col"><strong>multiplication sign</strong></th>       
              </tr>     
              <tr>
                <th scope="col"><strong>216</strong></th>
                <th scope="col"><strong> </strong></th>
                <th scope="col"><strong>Ø</strong></th>
                <th scope="col"><strong>Ø</strong></th>
                <th scope="col"><strong>Ø</strong></th>
                <th scope="col"><strong>Latin capital letter O with stroke</strong></th>       
              </tr>     
              <tr>
                <th scope="col"><strong>217</strong></th>
                <th scope="col"><strong> </strong></th>
                <th scope="col"><strong>Ù</strong></th>
                <th scope="col"><strong>Ù</strong></th>
                <th scope="col"><strong>Ù</strong></th>
                <th scope="col"><strong>Latin capital letter U with grave</strong></th>       
              </tr>     
              <tr>
                <th scope="col"><strong>218</strong></th>
                <th scope="col"><strong> </strong></th>
                <th scope="col"><strong>Ú</strong></th>
                <th scope="col"><strong>Ú</strong></th>
                <th scope="col"><strong>Ú</strong></th>
                <th scope="col"><strong>Latin capital letter U with acute</strong></th>       
              </tr>     
              <tr>
                <th scope="col"><strong>219</strong></th>
                <th scope="col"><strong> </strong></th>
                <th scope="col"><strong>Û</strong></th>
                <th scope="col"><strong>Û</strong></th>
                <th scope="col"><strong>Û</strong></th>
                <th scope="col"><strong>Latin capital letter U with circumflex</strong></th>       
              </tr>     
              <tr>
                <th scope="col"><strong>220</strong></th>
                <th scope="col"><strong> </strong></th>
                <th scope="col"><strong>Ü</strong></th>
                <th scope="col"><strong>Ü</strong></th>
                <th scope="col"><strong>Ü</strong></th>
                <th scope="col"><strong>Latin capital letter U with diaeresis</strong></th>       
              </tr>    
              <tr>
                <th scope="col"><strong>221</strong></th>
                <th scope="col"><strong> </strong></th>
                <th scope="col"><strong>Ý</strong></th>
                <th scope="col"><strong>Ý</strong></th>
                <th scope="col"><strong>Ý</strong></th>
                <th scope="col"><strong>Latin capital letter Y with acute</strong></th>       
              </tr>      
              <tr>
                <th scope="col"><strong>222</strong></th>
                <th scope="col"><strong> </strong></th>
                <th scope="col"><strong>Þ</strong></th>
                <th scope="col"><strong>Þ</strong></th>
                <th scope="col"><strong>Þ</strong></th>
                <th scope="col"><strong>Latin capital letter Thorn</strong></th>       
              </tr>     
              <tr>
                <th scope="col"><strong>223</strong></th>
                <th scope="col"><strong> </strong></th>
                <th scope="col"><strong>ß</strong></th>
                <th scope="col"><strong>ß</strong></th>
                <th scope="col"><strong>ß</strong></th>
                <th scope="col"><strong>Latin small letter sharp s</strong></th>       
              </tr>     
              <tr>
                <th scope="col"><strong>224</strong></th>
                <th scope="col"><strong> </strong></th>
                <th scope="col"><strong>à</strong></th>
                <th scope="col"><strong>à</strong></th>
                <th scope="col"><strong>à</strong></th>
                <th scope="col"><strong>Latin small letter a with grave</strong></th>       
              </tr>     
              <tr>
                <th scope="col"><strong>225</strong></th>
                <th scope="col"><strong> </strong></th>
                <th scope="col"><strong>á</strong></th>
                <th scope="col"><strong>á</strong></th>
                <th scope="col"><strong>á</strong></th>
                <th scope="col"><strong>Latin small letter a with acute</strong></th>       
              </tr>     
              <tr>
                <th scope="col"><strong>226</strong></th>
                <th scope="col"><strong> </strong></th>
                <th scope="col"><strong>â</strong></th>
                <th scope="col"><strong>â</strong></th>
                <th scope="col"><strong>â</strong></th>
                <th scope="col"><strong>Latin small letter a with circumflex</strong></th>       
              </tr>     
              <tr>
                <th scope="col"><strong>227</strong></th>
                <th scope="col"><strong> </strong></th>
                <th scope="col"><strong>ã</strong></th>
                <th scope="col"><strong>ã</strong></th>
                <th scope="col"><strong>ã</strong></th>
                <th scope="col"><strong>Latin small letter a with tilde</strong></th>       
              </tr>     
              <tr>
                <th scope="col"><strong>228</strong></th>
                <th scope="col"><strong> </strong></th>
                <th scope="col"><strong>ä</strong></th>
                <th scope="col"><strong>ä</strong></th>
                <th scope="col"><strong>ä</strong></th>
                <th scope="col"><strong>Latin small letter a with diaeresis</strong></th>       
              </tr>   
              <tr>
                <th scope="col"><strong>229</strong></th>
                <th scope="col"><strong> </strong></th>
                <th scope="col"><strong>å</strong></th>
                <th scope="col"><strong>å</strong></th>
                <th scope="col"><strong>å</strong></th>
                <th scope="col"><strong>Latin small letter a with ring above</strong></th>       
              </tr>    
              <tr>
                <th scope="col"><strong>230</strong></th>
                <th scope="col"><strong> </strong></th>
                <th scope="col"><strong>æ</strong></th>
                <th scope="col"><strong>æ</strong></th>
                <th scope="col"><strong>æ</strong></th>
                <th scope="col"><strong>Latin small letter ae</strong></th>       
              </tr>  
              <tr>
                <th scope="col"><strong>231</strong></th>
                <th scope="col"><strong> </strong></th>
                <th scope="col"><strong>ç</strong></th>
                <th scope="col"><strong>ç</strong></th>
                <th scope="col"><strong>ç</strong></th>
                <th scope="col"><strong>Latin small letter c with cedilla</strong></th>       
              </tr>  
              <tr>
                <th scope="col"><strong>232</strong></th>
                <th scope="col"><strong> </strong></th>
                <th scope="col"><strong>è</strong></th>
                <th scope="col"><strong>è</strong></th>
                <th scope="col"><strong>è</strong></th>
                <th scope="col"><strong>Latin small letter e with grave</strong></th> 
                </tr>
              <tr>
                <th scope="col"><strong>233</strong></th>
                <th scope="col"><strong> </strong></th>
                <th scope="col"><strong>é</strong></th>
                <th scope="col"><strong>é</strong></th>
                <th scope="col"><strong>é</strong></th>
                <th scope="col"><strong>small letter e with acute</strong></th>       
              </tr>  
              <tr>
                <th scope="col"><strong>234</strong></th>
                <th scope="col"><strong> </strong></th>
                <th scope="col"><strong>ê</strong></th>
                <th scope="col"><strong>ê</strong></th>
                <th scope="col"><strong>ê</strong></th>
                <th scope="col"><strong>Latin small letter e with circumflex</strong></th>       
              </tr>  
              <tr>
                <th scope="col"><strong>235</strong></th>
                <th scope="col"><strong> </strong></th>
                <th scope="col"><strong>ë</strong></th>
                <th scope="col"><strong>ë</strong></th>
                <th scope="col"><strong>ë</strong></th>
                <th scope="col"><strong>Latin small letter e with diaeresis</strong></th>       
              </tr>  
              <tr>
                <th scope="col"><strong>236</strong></th>
                <th scope="col"><strong> </strong></th>
                <th scope="col"><strong>ì</strong></th>
                <th scope="col"><strong>ì</strong></th>
                <th scope="col"><strong>ì</strong></th>
                <th scope="col"><strong>Latin small letter i with grave</strong></th>       
              </tr>  
              <tr>
                <th scope="col"><strong>237</strong></th>
                <th scope="col"><strong> </strong></th>
                <th scope="col"><strong>í</strong></th>
                <th scope="col"><strong>í</strong></th>
                <th scope="col"><strong>í</strong></th>
                <th scope="col"><strong>Latin small letter i with acute</strong></th>       
              </tr>  
              <tr>
                <th scope="col"><strong>238</strong></th>
                <th scope="col"><strong> </strong></th>
                <th scope="col"><strong>î</strong></th>
                <th scope="col"><strong>î</strong></th>
                <th scope="col"><strong>î</strong></th>
                <th scope="col"><strong>Latin small letter i with circumflex</strong></th>       
              </tr>  
              <tr>
                <th scope="col"><strong>239</strong></th>
                <th scope="col"><strong> </strong></th>
                <th scope="col"><strong>ï</strong></th>
                <th scope="col"><strong>ï</strong></th>
                <th scope="col"><strong>ï</strong></th>
                <th scope="col"><strong>Latin small letter i with diaeresis</strong></th>       
              </tr>  
              <tr>
                <th scope="col"><strong>240</strong></th>
                <th scope="col"><strong> </strong></th>
                <th scope="col"><strong>ð</strong></th>
                <th scope="col"><strong>ð</strong></th>
                <th scope="col"><strong>ð</strong></th>
                <th scope="col"><strong>Latin small letter eth</strong></th>       
              </tr>  
              <tr>
                <th scope="col"><strong>241</strong></th>
                <th scope="col"><strong> </strong></th>
                <th scope="col"><strong>ñ</strong></th>
                <th scope="col"><strong>ñ</strong></th>
                <th scope="col"><strong>ñ</strong></th>
                <th scope="col"><strong>Latin small letter n with tilde</strong></th>       
              </tr>  
              <tr>
                <th scope="col"><strong>242</strong></th>
                <th scope="col"><strong> </strong></th>
                <th scope="col"><strong>ò</strong></th>
                <th scope="col"><strong>ò</strong></th>
                <th scope="col"><strong>ò</strong></th>
                <th scope="col"><strong>Latin small letter o with grave</strong></th>       
              </tr>  
              <tr>
                <th scope="col"><strong>243</strong></th>
                <th scope="col"><strong> </strong></th>
                <th scope="col"><strong>ó</strong></th>
                <th scope="col"><strong>ó</strong></th>
                <th scope="col"><strong>ó</strong></th>
                <th scope="col"><strong>Latin small letter o with acute</strong></th>       
              </tr>  
              <tr>
                <th scope="col"><strong>244</strong></th>
                <th scope="col"><strong> </strong></th>
                <th scope="col"><strong>ô</strong></th>
                <th scope="col"><strong>ô</strong></th>
                <th scope="col"><strong>ô</strong></th>
                <th scope="col"><strong>Latin small letter o with circumflex</strong></th>       
              </tr>  
              <tr>
                <th scope="col"><strong>245</strong></th>
                <th scope="col"><strong> </strong></th>
                <th scope="col"><strong>õ</strong></th>
                <th scope="col"><strong>õ</strong></th>
                <th scope="col"><strong>õ</strong></th>
                <th scope="col"><strong>Latin small letter o with tilde</strong></th>       
              </tr>  
              <tr>
                <th scope="col"><strong>246</strong></th>
                <th scope="col"><strong> </strong></th>
                <th scope="col"><strong>ö</strong></th>
                <th scope="col"><strong>ö</strong></th>
                <th scope="col"><strong>ö</strong></th>
                <th scope="col"><strong>Latin small letter o with diaeresis</strong></th>       
              </tr>  
              <tr>
                <th scope="col"><strong>247</strong></th>
                <th scope="col"><strong> </strong></th>
                <th scope="col"><strong>÷</strong></th>
                <th scope="col"><strong>÷</strong></th>
                <th scope="col"><strong>÷</strong></th>
                <th scope="col"><strong>division sign</strong></th>       
              </tr>  
              <tr>
                <th scope="col"><strong>248</strong></th>
                <th scope="col"><strong> </strong></th>
                <th scope="col"><strong>ø</strong></th>
                <th scope="col"><strong>ø</strong></th>
                <th scope="col"><strong>ø</strong></th>
                <th scope="col"><strong>Latin small letter o with stroke</strong></th>       
              </tr>  
              <tr>
                <th scope="col"><strong>249</strong></th>
                <th scope="col"><strong> </strong></th>
                <th scope="col"><strong>ù</strong></th>
                <th scope="col"><strong>ù</strong></th>
                <th scope="col"><strong>ù</strong></th>
                <th scope="col"><strong>Latin small letter u with grave</strong></th>       
              </tr>  
              <tr>
                <th scope="col"><strong>250</strong></th>
                <th scope="col"><strong> </strong></th>
                <th scope="col"><strong>ú</strong></th>
                <th scope="col"><strong>ú</strong></th>
                <th scope="col"><strong>ú</strong></th>
                <th scope="col"><strong>Latin small letter u with acute</strong></th>       
              </tr>  
              <tr>
                <th scope="col"><strong>251</strong></th>
                <th scope="col"><strong> </strong></th>
                <th scope="col"><strong>û</strong></th>
                <th scope="col"><strong>û</strong></th>
                <th scope="col"><strong>û</strong></th>
                <th scope="col"><strong>small letter with circumflex</strong></th>       
              </tr>  
              <tr>
                <th scope="col"><strong>252</strong></th>
                <th scope="col"><strong> </strong></th>
                <th scope="col"><strong>ü</strong></th>
                <th scope="col"><strong>ü</strong></th>
                <th scope="col"><strong>ü</strong></th>
                <th scope="col"><strong>Latin small letter u with diaeresis</strong></th>       
              </tr>  
              <tr>
                <th scope="col"><strong>253</strong></th>
                <th scope="col"><strong> </strong></th>
                <th scope="col"><strong>ý</strong></th>
                <th scope="col"><strong>ý</strong></th>
                <th scope="col"><strong>ý</strong></th>
                <th scope="col"><strong>Latin small letter y with acute</strong></th>       
              </tr>  
              <tr>
                <th scope="col"><strong>254</strong></th>
                <th scope="col"><strong> </strong></th>
                <th scope="col"><strong>þ</strong></th>
                <th scope="col"><strong>þ</strong></th>
                <th scope="col"><strong>þ</strong></th>
                <th scope="col"><strong>Latin small letter thorn</strong></th>       
              </tr>  
              <tr>
                <th scope="col"><strong>255</strong></th>
                <th scope="col"><strong> </strong></th>
                <th scope="col"><strong>ÿ</strong></th>
                <th scope="col"><strong>ÿ</strong></th>
                <th scope="col"><strong>ÿ</strong></th>
                <th scope="col"><strong>Latin small letter y with diaeresis</strong></th>       
              </tr>  
            </tbody>
            </table><br />

            <h1><strong>The ASCII Character Set</strong></h1>
            ASCII uses the values from 0 to 31 (and 127) for control characters.<br />
            ASCII uses the values from 32 to 126 for letters, digits, and symbols.<br />
            ASCII does not use the values from 128 to 255.<br /><br />


            <h1><strong>The ANSI Character Set (Windows-1252)</strong></h1>
            ANSI is identical to ASCII for the values from 0 to 127.<br />
            ANSI has a proprietary set of characters for the values from 128 to 159.<br />
            ANSI is identical to UTF-8 for the values from 160 to 255.<br /><br />

            <h1><strong>The ISO-8859-1 Character Set</strong></h1>
            8859-1 is identical to ASCII for the values from 0 to 127.<br />
            8859-1 does not use the values from 128 to 159.<br />
            8859-1 is identical to UTF-8 for the values from 160 to 255.<br /><br />


            <h1><strong>The UTF-8 Character Set</strong></h1>
            UTF-8 is identical to ASCII for the values from 0 to 127.<br />
            UTF-8 does not use the values from 128 to 159. <br />
            UTF-8 is identical to both ANSI and 8859-1 for the values from 160 to 255.<br />
            UTF-8 continues from the value 256 with more than 10 000 different characters.<br /><br />


            <h1><strong>The @charset CSS Rule</strong></h1>
            You can use the CSS<span className="text-danger"><strong>@charset</strong></span>rule to specify the character encoding used in a style sheet:<br />
            Example<br />
            Set the encoding of the style sheet to Unicode UTF-8:<br />
            <span className="text-warning"><strong>@charset "UTF-8";</strong></span> <br /><br />

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
