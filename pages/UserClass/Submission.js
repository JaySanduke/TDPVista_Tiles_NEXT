import React, { useEffect } from 'react'


function Submission() {
    useEffect(() => {
        var currenturl = window.location.search;
        var currenturlsearch = new URLSearchParams(currenturl);
        var j = currenturlsearch.get("j");
        for (let i = 0; i < j; i++) {
           localStorage.removeItem(i);
        }
        localStorage.removeItem("sd");
    }, [])
    
  return (
    <div style={{display:"flex",justifyContent:"center",alignItems:"center",height:"100vh",flexDirection:"column"}}>
      <h1>!!Submitted!!</h1>
      <div style={{border:"var(--default) 1px solid",borderRadius:"4px",padding:"5px"}}>
    <a href={`/UserClass/dashboard`}>Go to dashboard</a>
      </div>
    </div>
  )
}

export default Submission