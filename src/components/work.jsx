import React, { Component } from "react";
import andrewkeymolenphotography from "./../resources/Projects/andrewkeymolenphotography.jpg";

export default class Work extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-work" data-section="work">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div
                className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box"
                data-animate-effect="fadeInLeft"
              >
                {/*<span className="heading-meta">My Work</span>*/}
                <h2 className="colorlib-heading animate-box">Recent Work</h2>
              </div>
            </div>
            <p>I've worked on many projects in the last few years and here are a few of them. They're only personal achievements since I explain everything about the projects I've been involved with professionally in the{" "}
              <span id="navbar">
                                        <a
                                          href=""
                                          data-nav-section="experience"
                                        >
                                          Work Experience
                                        </a>
                                      </span> section.</p>
            <ul className="nav nav-tabs">
              <li className="active">
                <a data-toggle="tab" href="#dev" className="inverted">
                  <b>DEV</b>
                </a>
              </li>
              <li>
                <a data-toggle="tab" href="#multimedia" className="inverted">
                  <b>MULTIMEDIA</b>
                </a>
              </li>
              <li>
                <a data-toggle="tab" href="#writings" className="inverted">
                  <b>WRITINGS</b>
                </a>
              </li>
            </ul>

            <div className="tab-content">
              <div id="dev" className="tab-pane fade in active tabphoto2">
                <div className="row grid2 ">
                  <div className="grid-sizer2"></div>
                  <div className="gutter-sizer2"></div>
                  <div
                    className="col-md-4 grid-item2"
                    data-animate-effect="fadeInLeft"
                  >
                    <div className="blog-entry">
                      <a href="blog.html" className="blog-img">
                        <img
                          src="images/blog-1.jpg"
                          className="img-responsive"
                          alt="HTML5 Bootstrap Template by colorlib.com"
                        />
                      </a>
                      <div className="desc blog-text">
                        <span>
                          <small>Summer 2020 </small> |{" "}
                          <small> Web Dev </small> |{" "}
                          <small>
                            {" "}
                            <i className="icon-globe-outline" />
                          </small>
                        </span>
                        <h3>
                          <a href="blog.html">This very website, aka Centralize</a>
                        </h3>
                        <p>
                          I'm always busy doing something, usually photography or programming related. It was high time I centralize everything, learning some new skils doing so. I used an existing Bootstrap-ready HTML theme that I converted to React and heavily modified. Some PHP was involved for the contact form but the main work was in JavaScript & HTML/CSS.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div
                    className="col-md-4 grid-item2"
                    data-animate-effect="fadeInLeft"
                  >
                    <div className="blog-entry">
                      <a href="blog.html" className="blog-img">
                        <img
                          src="images/blog-1.jpg"
                          className="img-responsive"
                          alt="HTML5 Bootstrap Template by colorlib.com"
                        />
                      </a>
                      <div className="desc blog-text">
                        <span>
                          <small>Summer 2018 </small> |{" "}
                          <small> Android Dev </small> |{" "}
                          <small>
                            {" "}
                            <i className="icon-phone3" />
                          </small>
                        </span>
                        <h3>
                          <a href="blog.html">Lovely Day, Horoscope</a>
                        </h3>
                        <p>Lovely Day, Horoscope is a beautiful, minimalist and ad-free horoscope app. It’s quick and easy to use! Download it now on Android and access your horoscope with daily, weekly and monthly predictions in literally just one click!</p>
                      </div>
                    </div>
                  </div>
                  <div
                    className="col-md-4 grid-item2"
                    data-animate-effect="fadeInLeft"
                  >
                    <div className="blog-entry">
                      <a href="blog.html" className="blog-img">
                        <img
                          src="images/blog-1.jpg"
                          className="img-responsive"
                          alt="HTML5 Bootstrap Template by colorlib.com"
                        />
                      </a>
                      <div className="desc blog-text">
                        <span>
                          <small>Summer 2018 </small> |{" "}
                          <small> Web Dev </small> |{" "}
                          <small>
                            {" "}
                            <i className="icon-globe-outline" />
                          </small>
                        </span>
                        <h3>
                          <a href="blog.html">EverydayManga</a>
                        </h3>
                        <p>
                          EverydayManga is a Node.js Twitter bot. Every day, discover a gorgeous new - carefully picked - manga panel.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div
                    className="col-md-4 grid-item2"
                    data-animate-effect="fadeInLeft"
                  >
                    <div className="blog-entry">
                      <a href="blog.html" className="blog-img">
                        <img
                          src={andrewkeymolenphotography}
                          className="img-responsive"
                          alt="HTML5 Bootstrap Template by colorlib.com"
                        />
                      </a>
                      <div className="desc blog-text">
                        <span>
                          <small>Spring 2020 </small> |{" "}
                          <small> Web Dev </small> |{" "}
                          <small>
                            {" "}
                            <i className="icon-globe-outline" />
                          </small>
                        </span>
                        <h3>
                          <a href="blog.html">Andrew Keymolen Photography</a>
                        </h3>
                        <p>
                          I eventually made a website dedicated solely to my passion for photography. It's actually a heavily modified (HTML/CSS & JavaScript) Tumblr theme but no one needs to know. There you'll find a compilation of my best work, the same you can find here.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div
                    className="col-md-4 grid-item2"
                    data-animate-effect="fadeInLeft"
                  >
                    <div className="blog-entry">
                      <a href="blog.html" className="blog-img">
                        <img
                          src="images/blog-1.jpg"
                          className="img-responsive"
                          alt="HTML5 Bootstrap Template by colorlib.com"
                        />
                      </a>
                      <div className="desc blog-text">
                        <span>
                          <small>Fall 2017 </small> |{" "}
                          <small> Android Dev </small> |{" "}
                          <small>
                            {" "}
                            <i className="icon-phone3" />
                          </small>
                        </span>
                        <h3>
                          <a href="blog.html">Bug Master</a>
                        </h3>
                        <p>
                          Bug Master was developed as part of my exam to become an Associate Android Developer. It is a simple database about various insects that uses basic Android features.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div
                    className="col-md-4 grid-item2"
                    data-animate-effect="fadeInLeft"
                  >
                    <div className="blog-entry">
                      <a href="blog.html" className="blog-img">
                        <img
                          src="images/blog-1.jpg"
                          className="img-responsive"
                          alt="HTML5 Bootstrap Template by colorlib.com"
                        />
                      </a>
                      <div className="desc blog-text">
                        <span>
                          <small>Fall 2017 </small> |{" "}
                          <small> Android Dev </small> |{" "}
                          <small>
                            {" "}
                            <i className="icon-phone3" />
                          </small>
                        </span>
                        <h3>
                          <a href="blog.html">Task Maker</a>
                        </h3>
                        <p>
                          Task Maker was developed as part of my exam to become an Associate Android Developer. It is a simple To Do app that uses basic Android features.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div id="multimedia" className="tab-pane fade tabphoto2">
                <div className="row grid2 ">
                  <div className="grid-sizer2"></div>
                  <div className="gutter-sizer2"></div>
                  <div
                    className="col-md-4 grid-item2"
                    data-animate-effect="fadeInLeft"
                  >
                    <div className="blog-entry">
                      <a href="blog.html" className="blog-img">
                        <img
                          src={andrewkeymolenphotography}
                          className="img-responsive"
                          alt="HTML5 Bootstrap Template by colorlib.com"
                        />
                      </a>
                      <div className="desc blog-text">
                        <span>
                          <small>Spring 2020 </small> |{" "}
                          <small> Web Dev </small> |{" "}
                          <small>
                            {" "}
                            <i className="icon-globe-outline" />
                          </small>
                        </span>
                        <h3>
                          <a href="blog.html">Wedding Picture</a>
                        </h3>
                        <p>
                          I eventually made a website dedicated solely to my passion for photography. It's actually a heavily modified (HTML/CSS & JavaScript) Tumblr theme but no one needs to know. There you'll find a compilation of my best work, the same you can find here.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div
                    className="col-md-4 grid-item2"
                    data-animate-effect="fadeInLeft"
                  >
                    <div className="blog-entry">
                      <a href="blog.html" className="blog-img">
                        <img
                          src={andrewkeymolenphotography}
                          className="img-responsive"
                          alt="HTML5 Bootstrap Template by colorlib.com"
                        />
                      </a>
                      <div className="desc blog-text">
                        <span>
                          <small>Spring 2020 </small> |{" "}
                          <small> Web Dev </small> |{" "}
                          <small>
                            {" "}
                            <i className="icon-globe-outline" />
                          </small>
                        </span>
                        <h3>
                          <a href="blog.html">Photobook</a>
                        </h3>
                        <p>
                          I eventually made a website dedicated solely to my passion for photography. It's actually a heavily modified (HTML/CSS & JavaScript) Tumblr theme but no one needs to know. There you'll find a compilation of my best work, the same you can find here.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div
                    className="col-md-4 grid-item2"
                    data-animate-effect="fadeInLeft"
                  >
                    <div className="blog-entry">
                      <a href="blog.html" className="blog-img">
                        <img
                          src={andrewkeymolenphotography}
                          className="img-responsive"
                          alt="HTML5 Bootstrap Template by colorlib.com"
                        />
                      </a>
                      <div className="desc blog-text">
                        <span>
                          <small>Spring 2020 </small> |{" "}
                          <small> Web Dev </small> |{" "}
                          <small>
                            {" "}
                            <i className="icon-globe-outline" />
                          </small>
                        </span>
                        <h3>
                          <a href="blog.html">The Emerald Isle</a>
                        </h3>
                        <p>
                          I eventually made a website dedicated solely to my passion for photography. It's actually a heavily modified (HTML/CSS & JavaScript) Tumblr theme but no one needs to know. There you'll find a compilation of my best work, the same you can find here.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div
                    className="col-md-4 grid-item2"
                    data-animate-effect="fadeInLeft"
                  >
                    <div className="blog-entry">
                      <a href="blog.html" className="blog-img">
                        <img
                          src={andrewkeymolenphotography}
                          className="img-responsive"
                          alt="HTML5 Bootstrap Template by colorlib.com"
                        />
                      </a>
                      <div className="desc blog-text">
                        <span>
                          <small>Spring 2020 </small> |{" "}
                          <small> Web Dev </small> |{" "}
                          <small>
                            {" "}
                            <i className="icon-globe-outline" />
                          </small>
                        </span>
                        <h3>
                          <a href="blog.html">Zen</a>
                        </h3>
                        <p>
                          I eventually made a website dedicated solely to my passion for photography. It's actually a heavily modified (HTML/CSS & JavaScript) Tumblr theme but no one needs to know. There you'll find a compilation of my best work, the same you can find here.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
              <div id="writings" className="tab-pane fade tabphoto2">
                <div className="row grid2 ">
                  <div className="grid-sizer2"></div>
                  <div className="gutter-sizer2"></div>
                  <div
                    className="col-md-4 grid-item2"
                    data-animate-effect="fadeInLeft"
                  >
                    <div className="blog-entry">
                      <a href="blog.html" className="blog-img">
                        <img
                          src={andrewkeymolenphotography}
                          className="img-responsive"
                          alt="HTML5 Bootstrap Template by colorlib.com"
                        />
                      </a>
                      <div className="desc blog-text">
                        <span>
                          <small>Spring 2020 </small> |{" "}
                          <small> Web Dev </small> |{" "}
                          <small>
                            {" "}
                            <i className="icon-globe-outline" />
                          </small>
                        </span>
                        <h3>
                          <a href="blog.html">An introduction to the Android paradigm and to Google’s Associate Android Developer Certification</a>
                        </h3>
                        <p>
                          I eventually made a website dedicated solely to my passion for photography. It's actually a heavily modified (HTML/CSS & JavaScript) Tumblr theme but no one needs to know. There you'll find a compilation of my best work, the same you can find here.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div
                    className="col-md-4 grid-item2"
                    data-animate-effect="fadeInLeft"
                  >
                    <div className="blog-entry">
                      <a href="blog.html" className="blog-img">
                        <img
                          src={andrewkeymolenphotography}
                          className="img-responsive"
                          alt="HTML5 Bootstrap Template by colorlib.com"
                        />
                      </a>
                      <div className="desc blog-text">
                        <span>
                          <small>Spring 2020 </small> |{" "}
                          <small> Web Dev </small> |{" "}
                          <small>
                            {" "}
                            <i className="icon-globe-outline" />
                          </small>
                        </span>
                        <h3>
                          <a href="blog.html">My Positive Day</a>
                        </h3>
                        <p>
                          I eventually made a website dedicated solely to my passion for photography. It's actually a heavily modified (HTML/CSS & JavaScript) Tumblr theme but no one needs to know. There you'll find a compilation of my best work, the same you can find here.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div
                    className="col-md-4 grid-item2"
                    data-animate-effect="fadeInLeft"
                  >
                    <div className="blog-entry">
                      <a href="blog.html" className="blog-img">
                        <img
                          src={andrewkeymolenphotography}
                          className="img-responsive"
                          alt="HTML5 Bootstrap Template by colorlib.com"
                        />
                      </a>
                      <div className="desc blog-text">
                        <span>
                          <small>Spring 2020 </small> |{" "}
                          <small> Web Dev </small> |{" "}
                          <small>
                            {" "}
                            <i className="icon-globe-outline" />
                          </small>
                        </span>
                        <h3>
                          <a href="blog.html">Zen</a>
                        </h3>
                        <p>
                          I eventually made a website dedicated solely to my passion for photography. It's actually a heavily modified (HTML/CSS & JavaScript) Tumblr theme but no one needs to know. There you'll find a compilation of my best work, the same you can find here.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div
                    className="col-md-4 grid-item2"
                    data-animate-effect="fadeInLeft"
                  >
                    <div className="blog-entry">
                      <a href="blog.html" className="blog-img">
                        <img
                          src={andrewkeymolenphotography}
                          className="img-responsive"
                          alt="HTML5 Bootstrap Template by colorlib.com"
                        />
                      </a>
                      <div className="desc blog-text">
                        <span>
                          <small>Spring 2020 </small> |{" "}
                          <small> Web Dev </small> |{" "}
                          <small>
                            {" "}
                            <i className="icon-globe-outline" />
                          </small>
                        </span>
                        <h3>
                          <a href="blog.html">A Review of The Righteous Mind</a>
                        </h3>
                        <p>
                          I eventually made a website dedicated solely to my passion for photography. It's actually a heavily modified (HTML/CSS & JavaScript) Tumblr theme but no one needs to know. There you'll find a compilation of my best work, the same you can find here.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div
                    className="col-md-4 grid-item2"
                    data-animate-effect="fadeInLeft"
                  >
                    <div className="blog-entry">
                      <a href="blog.html" className="blog-img">
                        <img
                          src={andrewkeymolenphotography}
                          className="img-responsive"
                          alt="HTML5 Bootstrap Template by colorlib.com"
                        />
                      </a>
                      <div className="desc blog-text">
                        <span>
                          <small>Spring 2020 </small> |{" "}
                          <small> Web Dev </small> |{" "}
                          <small>
                            {" "}
                            <i className="icon-globe-outline" />
                          </small>
                        </span>
                        <h3>
                          <a href="blog.html">The Hard Problem of A Universal Basic Income</a>
                        </h3>
                        <p>
                          I eventually made a website dedicated solely to my passion for photography. It's actually a heavily modified (HTML/CSS & JavaScript) Tumblr theme but no one needs to know. There you'll find a compilation of my best work, the same you can find here.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div
                    className="col-md-4 grid-item2"
                    data-animate-effect="fadeInLeft"
                  >
                    <div className="blog-entry">
                      <a href="blog.html" className="blog-img">
                        <img
                          src={andrewkeymolenphotography}
                          className="img-responsive"
                          alt="HTML5 Bootstrap Template by colorlib.com"
                        />
                      </a>
                      <div className="desc blog-text">
                        <span>
                          <small>Spring 2020 </small> |{" "}
                          <small> Web Dev </small> |{" "}
                          <small>
                            {" "}
                            <i className="icon-globe-outline" />
                          </small>
                        </span>
                        <h3>
                          <a href="blog.html">Thesis</a>
                        </h3>
                        <p>
                          I eventually made a website dedicated solely to my passion for photography. It's actually a heavily modified (HTML/CSS & JavaScript) Tumblr theme but no one needs to know. There you'll find a compilation of my best work, the same you can find here.
                        </p>
                      </div>
                    </div>
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
