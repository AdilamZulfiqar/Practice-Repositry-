import React from "react";
import "./About.css";
import PbImg from "./Pb_img.jpg";
const About = () => {
  return (
    <div>
      <h2 className="page-head">ABOUT US</h2>
      <section id="about">
        <div className="abt-container">
          <div className="abt-img">
            <img src={PbImg} alt="" />
          </div>
          <div className="abt-detail">
            <h1>Who We Are?</h1>
            <p>
              Aasalamualikum Everyone. Any one who wants to buy plot, a new
              house, used house or plaza contact us.
            </p>
            <br />
            <br />
            <abbr title="">
              Create stunning images with as much or as little control as you
              like thanks to a choice of basic and creative modes
            </abbr>
            <br />
            <br />
            <marquee
              style={{ backgroundColor: "#5EA51D" }}
              loop="-1"
              scrollamount="5"
              width="100%"
            >
              Create stunning images with as much or as little control as you
              like thanks to a choice of basic and creative modes.
            </marquee>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
