import React from "react";
import "../css/home.css";
import { Typography, Divider } from "@mui/material";
import Skills from "./Skills";
import Projects from "./Projects";
import Contact from "./Contact";

export default function Home() {
  return (
    <div className="home-container">
      <div className="main-content" id="#main">
        <Typography variant="h1">Joban Dhindsa</Typography>
        <Typography variant="subtitle1">I am a software developer</Typography>
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
