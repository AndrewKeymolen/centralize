import React, { Component } from "react";

export default class Home extends Component {
  render() {
    return (
      <div>
        <section id="colorlib-hero" class="js-fullheight" data-section="home">
          <div class="flexslider js-fullheight">
            <ul class="slides">
              <li style={{ backgroundImage: "url(images/img_bg_1.jpg)" }}>
                <div class="overlay"></div>
                <div class="container-fluid">
                  <div class="row">
                    <div class="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
                      <div class="slider-text-inner js-fullheight">
                        <div class="desc">
                          <h1>
                            Hi! <br />
                            I'm Andrew.
                          </h1>
                          <h2>I'm a Full Stack Dev.</h2>
                          <p>
                            <a class="btn btn-primary btn-learn">
                              Download CV <i class="icon-download4"></i>
                            </a>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
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
                            <a class="btn btn-primary btn-learn">
                              View Portfolio <i class="icon-briefcase3"></i>
                            </a>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </section>
      </div>
    );
  }
}
