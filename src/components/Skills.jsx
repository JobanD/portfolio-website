import React from "react";
import "../css/skills.css";
import Pdf from "../assets/Joban_CV.pdf";
import { Typography, SvgIcon, List, ListItem, Divider } from "@mui/material";
import { ReactComponent as CssLogo } from "../assets/icons/css3_logo.svg";
import { ReactComponent as HtmlLogo } from "../assets/icons/html5_logo.svg";
import { ReactComponent as JsLogo } from "../assets/icons/javascript_logo.svg";
import { ReactComponent as ReactLogo } from "../assets/icons/react_logo.svg";
import { ReactComponent as PythonLogo } from "../assets/icons/python_logo.svg";
import { ReactComponent as DjangoLogo } from "../assets/icons/django_logo.svg";
import { ReactComponent as GithubLogo } from "../assets/icons/github_logo.svg";

export default function Skills() {
  return (
    <div className="skills-container" id="skills">
      <div className="about-me-container" flexItem>
        <Typography variant="h3">About Me</Typography>
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
      <Divider
        orientation="vertical"
        variant="middle"
        flexItem
        sx={{ borderWidth: 2 }}
        className="skills-divider"
      />
      <div flexItem>
        <Typography variant="h3">My Toolkit</Typography>
        <div className="skills-sections-container">
          <div>
            <div className="skills-lists-container">
              <List className="skills-list" flexItem>
                <ListItem>
                  <SvgIcon viewBox="0 0 50 50" fontSize="large">
                    <JsLogo />
                  </SvgIcon>
                  Javascript
                </ListItem>
                <ListItem>
                  <SvgIcon fontSize="large">
                    <HtmlLogo />
                  </SvgIcon>
                  HTML5
                </ListItem>
                <ListItem>
                  <SvgIcon fontSize="large">
                    <CssLogo />
                  </SvgIcon>
                  CSS3
                </ListItem>
                <ListItem>
                  <SvgIcon viewBox="0 0 28 28" fontSize="large">
                    <ReactLogo />
                  </SvgIcon>
                  React
                </ListItem>
                <ListItem>
                  <SvgIcon viewBox="0 0 28 28" fontSize="large">
                    <PythonLogo />
                  </SvgIcon>
                  Python
                </ListItem>
                <ListItem>
                  <SvgIcon viewBox="0 0 50 30" fontSize="large">
                    <DjangoLogo />
                  </SvgIcon>
                  Django
                </ListItem>
                <ListItem>
                  <SvgIcon fontSize="large">
                    <GithubLogo />
                  </SvgIcon>
                  Github
                </ListItem>
                <ListItem>
                  <SvgIcon fontSize="large">
                    <CssLogo />
                  </SvgIcon>
                  Accessibility
                </ListItem>
              </List>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
