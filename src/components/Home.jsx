import React from "react";
import "../css/home.css";
import { Typography, Divider, Paper } from "@mui/material";
import Skills from "./Skills";
import Projects from "./Projects";
import Contact from "./Contact";

export default function Home() {
  return (
    <div className="home-container">
      <div className="main-content" id="">
        <div className="main-content-text">
          <Typography variant="h1">Joban Dhindsa</Typography>
          <Typography variant="subtitle1">
            I love to code and design things!
          </Typography>
        </div>
        <div className="profile-image-container">
          <img src="/src/assets/headshot.JPEG" className="profile-image" />
        </div>
      </div>
      <Divider flexItem="true" sx={{ borderBottomWidth: 5 }} />
      <Skills />
      <Divider flexItem="true" sx={{ borderBottomWidth: 5 }} />
      <div className="project-main-container">
        <Projects />
      </div>
      <Divider flexItem="true" sx={{ borderBottomWidth: 5 }} />
      <Contact />
    </div>
  );
}
