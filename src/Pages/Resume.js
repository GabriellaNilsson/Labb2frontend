import React from "react";
import DisplayResumeData from "../Components/DisplayResumeData";
import resume from "../css/resume.css";

function Resume() {
    return(
        <div>
            <header>
                <h1>My Resume</h1>
            </header>
            <div className="personal-info">
        <h2>Name: Gabriella Nilsson</h2>
        <h3>Personal number: 1998-10-28</h3>
        <h3>Phone number: +46 70 393 60 03</h3>
        <h3>Email: gabriella.nilsson.9898@gmail.com</h3>
        <h3><a className="linkedln" href="https://www.linkedin.com/in/gabriella-nilsson-022b88297/">LinkedIn</a></h3>
        <div id="json-data" className="resume-text-border">
        <DisplayResumeData/>
        </div>
      </div>
      </div>
    );
}
export default Resume;
      
