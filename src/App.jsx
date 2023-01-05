import { useState } from "react";
import "./css/App.css";
import Nav from "./components/Nav";
import Home from "./components/Home";
import Footer from "./components/Footer";
import { createTheme, ThemeProvider } from "@mui/material";

export default function App() {
  const theme = createTheme({
    typography: {
      fontFamily: [
        "Merriweather",
        "Karla",
        "-apple-system",
        "BlinkMacSystemFont",
        "Segoe UI",
        "Roboto",
        "Oxygen",
        "Ubuntu",
        "Cantarell",
        "Fira Sans",
        "Droid Sans",
        "Helvetica Neue",
        "sans-serif",
      ].join(","),
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <div className="app-container">
        <Nav />
        <Home />
        <Footer />
      </div>
    </ThemeProvider>
  );
}
