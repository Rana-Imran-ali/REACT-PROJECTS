import React from "react";
import { createRoot } from "react-dom/client";
import Portfolio from "./Portfolio.jsx";
import index from "./index.css";
import Home from "./Home.jsx";
import About from "./About.jsx";
import contact from "./contact.jsx";
import Hero from "./Hero.jsx";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Portfolio />
  </React.StrictMode>
);
