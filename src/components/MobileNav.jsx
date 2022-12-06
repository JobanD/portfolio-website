import React, { useState } from "react";
import "../css/mobileNav.css";
import AvatarNav from "./AvatarNav";
import { SvgIcon } from "@mui/material";

export default function MobileNav() {
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  const handleClick = () => {
    setIsNavExpanded((prevExpanded) => !prevExpanded);
  };

  return (
    <header>
      <div className="mobile-nav-container">
        <AvatarNav />
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
          <ul>
            <li>
              <a href="#" onClick={handleClick}>
                Home
              </a>
            </li>
            <li>
              <a href="#skills" onClick={handleClick}>
                Skills
              </a>
            </li>
            <li>
              <a href="#projects" onClick={handleClick}>
                Projects
              </a>
            </li>
            <li>
              <a href="#contact" onClick={handleClick}>
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
