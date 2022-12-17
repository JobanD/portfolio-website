import React from "react";
import "../css/projects.css";
import ProjectCard from "./ProjectCard";
import { Typography } from "@mui/material";

export default function Projects() {
  return (
    <div className="projects-container" id="projects">
      <Typography variant="h2">Projects</Typography>
      <div className="projects-cards-container">
        <ProjectCard
          imageSource="/src/assets/basketball-stock.jpg"
          alt="Preview image of basketball project website"
          title="Basketball Project"
          description="This project projects future player statistics for any
          basketball player in the NBA"
          webUrl="http://www.google.com/"
          githubUrl="http://www.google.com/"
        />
        <ProjectCard
          imageSource="/src/assets/basketball-stock.jpg"
          alt="basketball net"
          title="Basketball Project"
          description="This project projects future player statistics for any
          basketball player in the NBA"
          webUrl="http://www.google.com/"
          githubUrl="http://www.google.com/"
        />
      </div>
    </div>
  );
}
