import React from "react";
import { BsFillHouseDoorFill } from "react-icons/bs";

import "./MainMenu.css";
import { Link } from "react-router-dom";
const MainMenu = () => {
  return (
    <div className="navbar">
      <div className="navbarMenu">
        <ul className="navbarText">
          <li>
            <Link to="/">
              <BsFillHouseDoorFill className="houseIcon" />
            </Link>
          </li>
          <li>
            {" "}
            <Link to="/">Home</Link>
          </li>
          <li>
            {" "}
            <Link to="/about">About</Link>
          </li>
          <li>
            {" "}
            <Link to="/blogs">Blogs</Link>
          </li>
          <li>
            <Link to="/blogs/new">New Blog</Link>
          </li>

          <li>
            {" "}
            <Link to="/contact-us">Contact Us</Link>
          </li>

          <li>
            {" "}
            <Link to="/login">Login</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MainMenu;
