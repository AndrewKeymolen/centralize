import React, { Component } from "react";

export default class Services extends Component {
  render() {
    return (
      <div>
        <section class="colorlib-services" data-section="services">
          <div class="colorlib-narrow-content">
            <div class="row">
              <div
                class="col-md-6 col-md-offset-3 col-md-pull-3 animate-box"
                data-animate-effect="fadeInLeft"
              >
                {/*<span class="heading-meta">What I do?</span>*/}
                <h2 class="colorlib-heading">Here are some of my expertise</h2>
              </div>
            </div>
            <div class="row row-pt-md">
              <div class="col-md-4 text-center animate-box">
                <div class="services color-1">
                  <span class="icon">
                    <i class="icon-data"></i>
                  </span>
                  <div class="desc">
                    <h3>Full Stack Dev</h3>
                    <p>
                      Analysing existing projects, developing new features,
                      debugging, testing, production follow-up, incidents
                      handling, etc. Thats what I do!
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-md-4 text-center animate-box">
                <div class="services color-2">
                  <span class="icon">
                    <i class="icon-bulb"></i>
                  </span>
                  <div class="desc">
                    <h3>SCRUM Master</h3>
                    <p>
                      I've managed small projects in the past. Now a certified
                      SCRUM Master, I'm eager to take on the management of new
                      exciting ones.
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-md-4 text-center animate-box">
                <div class="services color-4">
                  <span class="icon">
                    <i class="icon-globe-outline"></i>
                  </span>
                  <div class="desc">
                    <h3>Web & Design</h3>
                    <p>
                      A few personal projects involved web development and/or
                      app design, which I eagerly learned about in order to
                      obtain results I'd be satisfied with.
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-md-4 text-center animate-box">
                <div class="services color-3">
                  <span class="icon">
                    <i class="icon-study"></i>
                  </span>
                  <div class="desc">
                    <h3>Coaching</h3>
                    <p>
                      Taking part in different communities at my company, I've
                      organized workshops, taught Android dev and was asked to
                      validate skills.
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-md-4 text-center animate-box">
                <div class="services color-5">
                  <span class="icon">
                    <i class="icon-camera-outline"></i>
                  </span>
                  <div class="desc">
                    <h3>Multimedia</h3>
                    <p>
                      Having a passion for photography, I taught myself image
                      editing and, by extention, the basics of video editing.
                      Those skills got useful more than once.
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-md-4 text-center animate-box">
                <div class="services color-6">
                  <span class="icon">
                    <i class="icon-phone3"></i>
                  </span>
                  <div class="desc">
                    <h3>Writing</h3>
                    <p>
                      Writing technical documentation and analyses has been a
                      big part of my career so far, but I do also enjoy writing
                      as a hobby.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
