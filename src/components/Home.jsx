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
          <Typography>Hello I'm</Typography>
          <Typography variant="h1">Joban Dhindsa</Typography>
          <Typography variant="subtitle1">I am a software developer</Typography>
          <Typography>
            Random text about myself. Include things I like what I'm experienced
            in, what kind of developer I am etc...
          </Typography>
        </div>
        <Paper variant="outlined">
          <img src="/src/assets/navProfile.JPG" className="profile-image" />
        </Paper>
      </div>
      <Divider flexItem="true" sx={{ borderBottomWidth: 5 }} />
      <Skills />
      <Divider flexItem="true" sx={{ borderBottomWidth: 5 }} />
      <Projects />
      <Divider flexItem="true" sx={{ borderBottomWidth: 5 }} />
      <Contact />
    </div>
  );
}
