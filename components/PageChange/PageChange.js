import React from "react";
  // import Lottie from 'react-lottie';
  // //  import rocket  from '../../assets/lottie/72284-rocket-animation.json'
  //  import rocket  from '../../assets/lottie/66298-sandclock-violet.json'




// reactstrap components
// import { Spinner } from "reactstrap";

// core components

// const defaultOptions = {
//       loop: true,
//       autoplay: true, 
//       animationData: rocket,
//       rendererSettings: {
//         preserveAspectRatio: 'xMidYMid slice'
//       }
//     };
 

export default function PageChange(props) {
  return (
    <div>
      <div className="page-transition-wrapper-div">
        <div className="page-transition-icon-wrapper mb-3">
          {/* <Spinner
            color="white"
            style={{ width: "6rem", height: "6rem", borderWidth: ".3rem" }}
          /> */}
        
     
        {/* <Lottie options={defaultOptions}
              height={300}
              width={300}></Lottie>  */}
        
        </div>
        {/* <h4 className="title text-white">
          Loading page contents for: {props.path}
        </h4> */}
      </div>
    </div>
  );
}
