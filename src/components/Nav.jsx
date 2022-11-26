import React from "react";
import { ButtonGroup, Button } from "@mui/material/";
import { Home, Lightbulb, Build, ContactPage } from "@mui/icons-material";
import "../css/nav.css";
import AvatarNav from "./AvatarNav";

export default function Nav() {
  return (
    <header>
      <div className="nav-container">
        {/* Custom Component: Turns Avatar in navbar into a button with a drop down menu */}
        <AvatarNav />
        <ButtonGroup variant="contained" className="button-group">
          <Button startIcon={<Home />} href="/">
            Home
          </Button>
          <Button startIcon={<Lightbulb />} href="#skills">
            Skills
          </Button>
          <Button startIcon={<Build />} href="#projects">
            Projects
          </Button>
          <Button startIcon={<ContactPage />} href="#contact">
            Contact
          </Button>
        </ButtonGroup>
      </div>
    </header>
  );
}
