import React, { useState } from "react";
import "../css/mobileNav.css";
import Pdf from "../assets/Joban_CV.pdf";
import { SvgIcon, Typography, Avatar } from "@mui/material";

export default function MobileNav() {
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  const handleClick = () => {
    setIsNavExpanded((prevExpanded) => !prevExpanded);
  };

  return (
    <header>
      <div className="mobile-nav-container">
        {/* <AvatarNav /> */}
        <button className="hamburger" onClick={handleClick}>
          {/* icon from heroicons.com */}
          <SvgIcon
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            htmlColor="white"
            titleAccess="Menu"
          >
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
              clipRule="evenodd"
            />
          </SvgIcon>
        </button>
        <div
          className={
            isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
          }
        >
          <div className="nav-menu-items">
            <ul className="nav-menu-list">
              <li>
                <a href="#" onClick={handleClick}>
                  <Typography variant="h4">Home</Typography>
                </a>
              </li>
              <li>
                <a href="#skills" onClick={handleClick}>
                  <Typography variant="h4">Skills</Typography>
                </a>
              </li>
              <li>
                <a href="#projects" onClick={handleClick}>
                  <Typography variant="h4">Projects</Typography>
                </a>
              </li>
              <li>
                <a href="#contact" onClick={handleClick}>
                  <Typography variant="h4">Contact</Typography>
                </a>
              </li>
            </ul>
            <div className="socialBox">
              <ul>
                <li>
                  <a href="https://github.com/JobanD" target="_blank">
                    <Avatar src="/src/assets/github.png" alt="GitHub" />
                    Github
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/jobandhindsa/"
                    target="_blank"
                  >
                    <Avatar src="/src/assets/linkedin.png" alt="LinkedIn" />
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a href={Pdf} target="_blank">
                    <Avatar src="/src/assets/resume.png" alt="Resume" />
                    Resume
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
