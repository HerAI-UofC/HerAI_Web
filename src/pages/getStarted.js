import React from "react";
import { NavLink } from "react-router-dom";
import img from "../img/triangle1.png";
import img2 from "../img/triangle2.png";
import "../styles/getStarted.css";

const getStarted = () => {
  
    return (
      <div class="mainContent">
        <h1 class ="largeHeading"> Get Started </h1>
        <div class = "sideWaysContainer">
          <div class="triangletext">
            <img src={img} alt="x" id="icon"></img>
            <div class="text">
              <h3> Fill in the form </h3>
              <p>
                {" "}
                Complete the questionnaire so we know some basic details about
                you, and get a general sense of what you're looking for.{" "}
              </p>
            </div>
          </div>
          <div class="triangletext">
            <img src={img2} alt="x" id="icon"></img>
            <div class="text">
              <h3> Get a customized study plan </h3>
              <p>
                {" "}
                Using AI, we will create a plan that works with your interests,
                learning styles, and schedule. .{" "}
              </p>
            </div>
          </div>
        </div>
        <div class = "button">
        <NavLink className="about-btn" to="/about">
                    Begin
                </NavLink>
        </div>
      </div>
    );
};

export default getStarted;