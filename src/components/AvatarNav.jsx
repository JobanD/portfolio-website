import React, { useState } from "react";
import {
  IconButton,
  Avatar,
  Menu,
  MenuItem,
  Tooltip,
  Link,
} from "@mui/material/";

export default function AvatarNav() {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div>
      <Tooltip title="Click to view links">
        <IconButton
          onClick={handleClick}
          size="medium"
          sx={{ ml: 2 }}
          aria-controls={open ? "account-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
        >
          <Avatar sx={{ bgcolor: "#DD6E0F" }}>J</Avatar>
        </IconButton>
      </Tooltip>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: "visible",
            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
            mt: 1.5,
            "& .MuiAvatar-root": {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            "&:before": {
              content: '""',
              display: "block",
              position: "absolute",
              top: 0,
              left: 30,
              width: 10,
              height: 10,
              bgcolor: "background.paper",
              transform: "translateY(-50%) rotate(45deg)",
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        {/* ICONS FOR GITHUB AND LINKED IN FROM icons8 */}
        <MenuItem
          component={Link}
          href="https://github.com/JobanD"
          target="_blank"
        >
          <Avatar src="/src/assets/github.png" alt="GitHub" /> GitHub
        </MenuItem>
        <MenuItem
          component={Link}
          href="https://www.linkedin.com/in/jobandhindsa/"
          target="_blank"
        >
          <Avatar src="/src/assets/linkedin.png" alt="LinkedIn" /> LinkedIn
        </MenuItem>
      </Menu>
    </div>
  );
}
