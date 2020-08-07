import React, { Component } from "react";
import resume from "./../resources/Resume/Resume_Andrew_KEYMOLEN.pdf";

export default class Home extends Component {
  render() {
    return (
      <div>
        <section id="colorlib-hero" class="js-fullheight" data-section="home">
          <div class="flexslider js-fullheight">
            <ul class="slides">
              <li style={{ backgroundImage: "url(images/img_b g_1.jpg)" }}>
                <div class="overlay"></div>
                <div class="container-fluid">
                  <div class="row">
                    <div class="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
                      <div class="slider-text-inner js-fullheight">
                        <div class="desc">
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
                              class="btn btn-primary btn-learn"
                              href={resume}
                              download
                            >
                              Download my resume <i class="icon-download4"></i>
                            </a>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li style={{ backgroundImage: "url(images/img_b g_1.jpg)" }}>
                <div class="overlay"></div>
                <div class="container-fluid">
                  <div class="row">
                    <div class="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
                      <div class="slider-text-inner js-fullheight">
                        <div class="desc">
                          <h1>
                            Want to <br />
                            know more about me?
                          </h1>
                          <h2>Please, go ahead!</h2>
                          <p>
                            <a class="btn btn-primary btn-learn" href="#about">
                              About <i class="icon-download4"></i>
                            </a>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              {/*
              <li style={{ backgroundImage: "url(images/img_bg_2.jpg)" }}>
                <div class="overlay"></div>
                <div class="container-fluid">
                  <div class="row">
                    <div class="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
                      <div class="slider-text-inner">
                        <div class="desc">
                          <h1>
                            That's <br />
                            not all.
                          </h1>
                          <h2>I'm many other things as well.</h2>
                          <p>
                            <a
                              class="btn btn-primary btn-learn"
                              href="#"
                              data-nav-section="work"
                            >
                              View Portfolio <i class="icon-briefcase3"></i>
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
