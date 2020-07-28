import React, { Component } from "react";
import "./App.css";
import Home from "./components/home";
import Sidebar from "./components/sidebar";
import About from "./components/about";
import Experience from "./components/experience";
import Services from "./components/services";
import Skills from "./components/skills";
import Education from "./components/education";
import Work from "./components/work";
import Photo from "./components/photo";
import Contact from "./components/contact";

class App extends Component {
  render() {
    return (
      <div id="colorlib-page">
        <div id="container-wrap">
          <Sidebar></Sidebar>
          <div id="colorlib-main">
            <Home></Home>
            <About></About>
            <Services></Services>
            <Skills></Skills>
            <Education></Education>
            <Experience></Experience>
            <Work></Work>
            <Photo></Photo>
            <Contact></Contact>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
