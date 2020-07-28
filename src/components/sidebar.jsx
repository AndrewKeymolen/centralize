import React, { Component } from "react";

export default class Sidebar extends Component {
  render() {
    return (
      <div>
        <nav
          href="#"
          class="js-colorlib-nav-toggle colorlib-nav-toggle"
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
          class="border js-fullheight"
        >
          <div class="text-center">
            <div
              class="author-img"
              style={{ backgroundImage: "url(images/about.png)" }}
            ></div>
            <h1 id="colorlib-logo">
              <a href="index.html">Andrew Keymolen</a>
            </h1>
            <span class="position">SCRUM Master and Full Stack Developer</span>
          </div>
          <nav id="colorlib-main-menu" role="navigation" class="navbar">
            <div id="navbar" class="collapse">
              <ul>
                <li class="active">
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
              </ul>
            </div>
          </nav>

          <nav id="colorlib-main-menu">
            <ul>
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
                  <i className="icon-social-github"></i>
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
            </ul>
          </nav>

          <div class="colorlib-footer">
            <div>
              <p>
                <small>© {new Date().getFullYear()} Andrew Keymolen</small>
              </p>
            </div>
          </div>
        </aside>
      </div>
    );
  }
}
