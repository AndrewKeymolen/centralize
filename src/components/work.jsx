import React, { Component } from "react";

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
                <a data-toggle="tab" href="#other" className="inverted">
                  <b>OTHER</b>
                </a>
              </li>
            </ul>

            <div className="tab-content" style={{ paddingTop: 20 }}>
              <div id="dev" className="tab-pane fade in active">
                <div className="row">
                  <div
                    className="col-md-4 col-sm-6 animate-box"
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
                      <div className="desc">
                        <span>
                          <small>April 14, 2018 </small> |{" "}
                          <small> Web Design </small> |{" "}
                          <small>
                            {" "}
                            <i className="icon-bubble3" /> 4
                          </small>
                        </span>
                        <h3>
                          <a href="blog.html">Renovating National Gallery</a>
                        </h3>
                        <p>
                          Separated they live in Bookmarksgrove right at the
                          coast of the Semantics, a large language ocean.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div
                    className="col-md-4 col-sm-6 animate-box"
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
                      <div className="desc">
                        <span>
                          <small>April 14, 2018 </small> |{" "}
                          <small> Web Design </small> |{" "}
                          <small>
                            {" "}
                            <i className="icon-bubble3" /> 4
                          </small>
                        </span>
                        <h3>
                          <a href="blog.html">Renovating National Gallery</a>
                        </h3>
                        <p>
                          Separated they live in Bookmarksgrove right at the
                          coast of the Semantics, a large language ocean.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div
                    className="col-md-4 col-sm-6 animate-box"
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
                      <div className="desc">
                        <span>
                          <small>April 14, 2018 </small> |{" "}
                          <small> Web Design </small> |{" "}
                          <small>
                            {" "}
                            <i className="icon-bubble3" /> 4
                          </small>
                        </span>
                        <h3>
                          <a href="blog.html">Renovating National Gallery</a>
                        </h3>
                        <p>
                          Separated they live in Bookmarksgrove right at the
                          coast of the Semantics, a large language ocean.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div
                    className="col-md-4 col-sm-6 animate-box"
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
                      <div className="desc">
                        <span>
                          <small>April 14, 2018 </small> |{" "}
                          <small> Web Design </small> |{" "}
                          <small>
                            {" "}
                            <i className="icon-bubble3" /> 4
                          </small>
                        </span>
                        <h3>
                          <a href="blog.html">Renovating National Gallery</a>
                        </h3>
                        <p>
                          Separated they live in Bookmarksgrove right at the
                          coast of the Semantics, a large language ocean.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12 animate-box">
                    <p>
                      <a
                        href="#"
                        className="btn btn-primary btn-lg btn-load-more"
                      >
                        Load more <i className="icon-reload"></i>
                      </a>
                    </p>
                  </div>
                </div>
              </div>
              <div id="multimedia" className="tab-pane fade">
                <div className="row "></div>
                <div className="row">
                  <div className="col-md-12 animate-box">
                    <p>
                      <a
                        href="#"
                        className="btn btn-primary btn-lg btn-load-more"
                      >
                        Load more <i className="icon-reload"></i>
                      </a>
                    </p>
                  </div>
                </div>
              </div>
              <div id="other" className="tab-pane fade">
                <div className="row">
                  <div
                    className="col-md-6 animate-box"
                    data-animate-effect="fadeInLeft"
                  >
                    <div
                      className="project"
                      style={{ backgroundImage: "url(images/img-1.jpg)" }}
                    >
                      <div className="desc">
                        <div className="con">
                          <h3>
                            <a href="work.html">Work 01</a>
                          </h3>
                          <span>Website</span>
                          <p className="icon">
                            <span>
                              <a href="#">
                                <i className="icon-share3"></i>
                              </a>
                            </span>
                            <span>
                              <a href="#">
                                <i className="icon-eye"></i> 100
                              </a>
                            </span>
                            <span>
                              <a href="#">
                                <i className="icon-heart"></i> 49
                              </a>
                            </span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="col-md-6 animate-box"
                    data-animate-effect="fadeInRight"
                  >
                    <div
                      className="project"
                      style={{ backgroundImage: "url(images/img-2.jpg)" }}
                    >
                      <div className="desc">
                        <div className="con">
                          <h3>
                            <a href="work.html">Work 02</a>
                          </h3>
                          <span>Animation</span>
                          <p className="icon">
                            <span>
                              <a href="#">
                                <i className="icon-share3"></i>
                              </a>
                            </span>
                            <span>
                              <a href="#">
                                <i className="icon-eye"></i> 100
                              </a>
                            </span>
                            <span>
                              <a href="#">
                                <i className="icon-heart"></i> 49
                              </a>
                            </span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="col-md-6 animate-box"
                    data-animate-effect="fadeInTop"
                  >
                    <div
                      className="project"
                      style={{ backgroundImage: "url(images/img-3.jpg)" }}
                    >
                      <div className="desc">
                        <div className="con">
                          <h3>
                            <a href="work.html">Work 03</a>
                          </h3>
                          <span>Illustration</span>
                          <p className="icon">
                            <span>
                              <a href="#">
                                <i className="icon-share3"></i>
                              </a>
                            </span>
                            <span>
                              <a href="#">
                                <i className="icon-eye"></i> 100
                              </a>
                            </span>
                            <span>
                              <a href="#">
                                <i className="icon-heart"></i> 49
                              </a>
                            </span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="col-md-6 animate-box"
                    data-animate-effect="fadeInBottom"
                  >
                    <div
                      className="project"
                      style={{ backgroundImage: "url(images/img-4.jpg)" }}
                    >
                      <div className="desc">
                        <div className="con">
                          <h3>
                            <a href="work.html">Work 04</a>
                          </h3>
                          <span>Application</span>
                          <p className="icon">
                            <span>
                              <a href="#">
                                <i className="icon-share3"></i>
                              </a>
                            </span>
                            <span>
                              <a href="#">
                                <i className="icon-eye"></i> 100
                              </a>
                            </span>
                            <span>
                              <a href="#">
                                <i className="icon-heart"></i> 49
                              </a>
                            </span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="col-md-6 animate-box"
                    data-animate-effect="fadeInLeft"
                  >
                    <div
                      className="project"
                      style={{ backgroundImage: "url(images/img-5.jpg)" }}
                    >
                      <div className="desc">
                        <div className="con">
                          <h3>
                            <a href="work.html">Work 05</a>
                          </h3>
                          <span>Graphic, Logo</span>
                          <p className="icon">
                            <span>
                              <a href="#">
                                <i className="icon-share3"></i>
                              </a>
                            </span>
                            <span>
                              <a href="#">
                                <i className="icon-eye"></i> 100
                              </a>
                            </span>
                            <span>
                              <a href="#">
                                <i className="icon-heart"></i> 49
                              </a>
                            </span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="col-md-6 animate-box"
                    data-animate-effect="fadeInRight"
                  >
                    <div
                      className="project"
                      style={{ backgroundImage: "url(images/img-6.jpg)" }}
                    >
                      <div className="desc">
                        <div className="con">
                          <h3>
                            <a href="work.html">Work 06</a>
                          </h3>
                          <span>Web Design</span>
                          <p className="icon">
                            <span>
                              <a href="#">
                                <i className="icon-share3"></i>
                              </a>
                            </span>
                            <span>
                              <a href="#">
                                <i className="icon-eye"></i> 100
                              </a>
                            </span>
                            <span>
                              <a href="#">
                                <i className="icon-heart"></i> 49
                              </a>
                            </span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12 animate-box">
                    <p>
                      <a
                        href="#"
                        className="btn btn-primary btn-lg btn-load-more"
                      >
                        Load more <i className="icon-reload"></i>
                      </a>
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
