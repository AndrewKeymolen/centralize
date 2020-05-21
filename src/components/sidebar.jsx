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
              style={{ backgroundImage: "url(images/about.jpg)" }}
            ></div>
            <h1 id="colorlib-logo">
              <a href="index.html">Andrew Keymolen</a>
            </h1>
            <span class="position">
              <a href="#">Full Stack Dev </a>
              in Belgium, Luxembourg, and soon in Australia
            </span>
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
                    Work
                  </a>
                </li>
                <li>
                  <a href="#" data-nav-section="blog">
                    Blog
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

          <div class="colorlib-footer">
            <div>
              <p>
                <small>© {new Date().getFullYear()} Andrew Keymolen</small>
              </p>
            </div>
            <ul>
              <li>
                <a href="#">
                  <i class="icon-facebook2"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i class="icon-twitter2"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i class="icon-instagram"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i class="icon-linkedin2"></i>
                </a>
              </li>
            </ul>
          </div>
        </aside>
      </div>
    );
  }
}
