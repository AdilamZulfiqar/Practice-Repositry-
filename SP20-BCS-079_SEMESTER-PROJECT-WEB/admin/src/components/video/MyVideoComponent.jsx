import React from "react";
import "./MyVideoComponent.css";
import MyVideo from "../images/myvid.mp4";

const MyVideoComponent = () => {
  return (
    <div className="myvideo">
      <video src={MyVideo} autoPlay loop muted />
    </div>
  );
};

export default MyVideoComponent;
