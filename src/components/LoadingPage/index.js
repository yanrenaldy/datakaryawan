import React from "react";
import ClockLoader from "react-spinners/ClockLoader";

function LoadingPage() {
  return (
    <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', height:'50vh'}}>
      <ClockLoader size="120px"/>
    </div>
  );
}

export default LoadingPage;