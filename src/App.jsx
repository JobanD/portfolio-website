import { useState } from "react";
import "./css/App.css";
import Nav from "./components/Nav";
import Home from "./components/Home";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="app-container">
      <Nav />
      <Home />
      <Footer />
    </div>
  );
}
