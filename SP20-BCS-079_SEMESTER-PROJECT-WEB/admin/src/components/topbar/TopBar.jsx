import React from "react";
import "./TopBar.css";
import { BsArrowRight } from "react-icons/bs";

const TopBar = () => {
  return (
    <div className="topbar">
      <div className="topbarText">
        <h3>
          A small river named Duden flows by their Place supplies Regelialia
        </h3>
        <p>
          Learn about paradisematic country, in which roasted parts of sentences
          fly into your mouth.
        </p>
      </div>

      <div className="btn">
        <button>
          Property Bazar <BsArrowRight />
        </button>
      </div>
    </div>
  );
};

export default TopBar;
