import React, { Component } from "react";
import githubIcon from "./../resources/Icons/GitHub.png";

export default class Sidebar extends Component {
  render() {
    return (
      <div>
        <nav
          href="#"
          className="js-colorlib-nav-toggle colorlib-nav-toggle"
          data-toggle="collapse"
          data-target="#navbar"
          aria-expanded="false"
          aria-controls="navbar"
          >
          <i />
        </nav>
        <aside
          id="colorlib-aside"
          role="complementary"
          className="border js-fullheight"
          >
          <div className="text-center">
            <div
              className="author-img"
              style={{ backgroundImage: "url(images/about.png)" }}
              ></div>
            <h1 id="colorlib-logo">
              <a href="index.html">Andrew Keymolen</a>
            </h1>
            <span className="position">SCRUM Master/Project Manager/Full Stack Dev</span>
          </div>
          <nav id="colorlib-main-menu" role="navigation" className="navbar">
            <div id="navbar" className="collapse">
              <ul>
                <li className="active">
                  <a href="#" data-nav-section="home">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" data-nav-section="about">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" data-nav-section="services">
                    Services
                  </a>
                </li>
                <li>
                  <a href="#" data-nav-section="skills">
                    Skills
                  </a>
                </li>
                <li>
                  <a href="#" data-nav-section="education">
                    Education
                  </a>
                </li>
                <li>
                  <a href="#" data-nav-section="experience">
                    Experience
                  </a>
                </li>
                <li>
                  <a href="#" data-nav-section="work">
                    Achievements
                  </a>
                </li>
                <li>
                  <a href="#" data-nav-section="photo">
                    Photography
                  </a>
                </li>
                <li>
                  <a href="#" data-nav-section="contact">
                    Contact
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/andrewkeymolen/"
                    target="_blank"
                    rel="noopener noreferrer"
                    >
                    <i className="icon-linkedin22" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/andrewkeymolen"
                    target="_blank"
                    rel="noopener noreferrer"
                    >
                    <img src={githubIcon} width="12" height="12" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.flickr.com/people/andrewkeymolen/"
                    target="_blank"
                    rel="noopener noreferrer"
                    >
                    <i className="icon-flickr2" />
                  </a>
                </li>
                <li>
                  <div className="colorlib-footer">
                    <div>
                      <p>
                        <small>
                          © {new Date().getFullYear()} Andrew Keymolen
                        </small>
                      </p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </nav>
        </aside>
      </div>
    );
  }
}
