import { Typography } from "@mui/material";
import React from "react";
import Pdf from "../assets/Joban_CV.pdf";
import "../css/about.css";

export default function About() {
  return (
    <div className="about-me-container" id="about" flexItem>
      <Typography variant="h2">About Me</Typography>
      <div className="about-me-description">
        <Typography>
          Hello, my name is Joban Dhindsa I am a software developer who
          graduated from the University of Windsor with a Honours Bachelor
          Degree in Business Administration and Computer Science.
        </Typography>
        <Typography>
          Here is a link to my{" "}
          <a href={Pdf} target="_blank">
            Resume
          </a>
        </Typography>
      </div>
    </div>
  );
}
