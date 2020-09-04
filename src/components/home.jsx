import React, { Component } from "react";
import resume from "./../resources/Resume/Resume_Andrew_KEYMOLEN.pdf";

export default class Home extends Component {
  render() {
    return (
      <div>
        <section
          id="colorlib-hero"
          className="js-fullheight"
          data-section="home"
        >
          <div className="flexslider js-fullheight">
            <ul className="slides">
              <li style={{ backgroundImage: "url(images/img_b g_1.jpg)" }}>
                <div className="overlay"></div>
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
                      <div className="slider-text-inner js-fullheight">
                        <div className="desc">
                          <h1>
                            Hi, <br />
                            I'm Andrew!
                          </h1>
                          <h2>
                            I'm originally a Full Stack Analyst Developer, but
                            I'm on my way to become a Project Manager.
                          </h2>
                          <p>
                            <a
                              className="btn btn-primary btn-learn"
                              href={resume}
                              download
                            >
                              Download my resume{" "}
                              <i className="icon-download4"></i>
                            </a>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li style={{ backgroundImage: "url(images/img_b g_1.jpg)" }}>
                <div className="overlay"></div>
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
                      <div className="slider-text-inner js-fullheight">
                        <div className="desc">
                          <h1>
                            Want to <br />
                            know more about me?
                          </h1>
                          <h2>Please, go ahead!</h2>

                          <div id="navbar">
                            <a
                              className="btn btn-primary btn-learn"
                              href=""
                              data-nav-section="about"
                            >
                              About
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              {/*
              <li style={{ backgroundImage: "url(images/img_bg_2.jpg)" }}>
                <div className="overlay"></div>
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
                      <div className="slider-text-inner">
                        <div className="desc">
                          <h1>
                            That's <br />
                            not all.
                          </h1>
                          <h2>I'm many other things as well.</h2>
                          <p>
                            <a
                              className="btn btn-primary btn-learn"
                              href="#"
                              data-nav-section="work"
                            >
                              View Portfolio <i className="icon-briefcase3"></i>
                            </a>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              */}
            </ul>
          </div>
        </section>
      </div>
    );
  }
}
