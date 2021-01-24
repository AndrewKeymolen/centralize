import React, { Component } from "react";
import AndrewKeymolenPhotography from "./../resources/Projects/AndrewKeymolenPhotography.png";
import TheEmeraldIsle from "./../resources/Projects/TheEmeraldIsle.jpg";
import BugMaster from "./../resources/Projects/BugMaster.png";
import CentralizeProject from "./../resources/Projects/CentralizeProject.jpg";
import EverydayManga from "./../resources/Projects/EverydayManga.png";
import LovelyDay from "./../resources/Projects/LovelyDay.png";
import Photobook from "./../resources/Projects/Photobook.png";
import TaskMaker from "./../resources/Projects/TaskMaker.png";
import WeddingPicture from "./../resources/Projects/WeddingPicture.png";
import Zen from "./../resources/Projects/Zen.jpg";
import PdfPhotobook from "./../resources/Projects/PdfPhotobook.pdf";
import PdfPhotobookCover from "./../resources/Projects/PdfPhotobookCover.pdf";
import Android from "./../resources/Projects/Android.png";
import french from "./../resources/TFE/FR_TFE_Andrew_Keymolen_3IG_2015_2016.pdf";
import english from "./../resources/TFE/EN_TFE_Andrew_Keymolen_3IG_2015_2016.pdf";
import defense from "./../resources/TFE/Project_presentation_Andrew_Keymolen.pdf";

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
            <p className="animate-box" data-animate-effect="fadeInRight">
              I've worked on many projects in the last few years and here are a
              few of them. They're only personal achievements since I explain
              everything about the projects I've been involved with
              professionally in the{" "}
              <span id="navbar">
                <a href="" data-nav-section="experience">
                  Work Experience
                </a>
              </span>{" "}
              section.
            </p>
            <div className="animate-box" data-animate-effect="fadeInBottom">
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
                        <a href="" className="blog-img">
                          <img
                            src={CentralizeProject}
                            className="img-responsive"
                            alt="CentralizeProject"
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
                            <a href="">This very website, aka Centralize</a>
                          </h3>
                          <p>
                            I'm always busy doing something, usually photography
                            or programming related. It was high time I
                            centralize everything, learning some new skills
                            doing so. I used an existing Bootstrap-ready HTML
                            theme that I converted to React and heavily
                            modified. Some{" "}
                            <a href="https://github.com/AndrewKeymolen/Centralize-Contact-Form">
                              PHP
                            </a>{" "}
                            was involved for the contact form but the main work
                            was in JavaScript & HTML/CSS.
                            <br />
                            <br />
                            <a href="https://github.com/AndrewKeymolen/Centralize">
                              <i className="icon-social-github-circular"></i>{" "}
                              &nbsp;GitHub
                            </a>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div
                      className="col-md-4 grid-item2"
                      data-animate-effect="fadeInLeft"
                    >
                      <div className="blog-entry">
                        <a
                          href="https://play.google.com/store/apps/details?id=xyz.skrawlr.lovelyday"
                          className="blog-img"
                        >
                          <img
                            src={LovelyDay}
                            className="img-responsive"
                            alt="LovelyDay"
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
                            <a href="https://play.google.com/store/apps/details?id=xyz.skrawlr.lovelyday">
                              Lovely Day, Horoscope
                            </a>
                          </h3>
                          <p>
                            Lovely Day, Horoscope is a beautiful, minimalist and
                            ad-free horoscope app. It’s quick and easy to use!
                            Download it now on Android and access your horoscope
                            with daily, weekly and monthly predictions in
                            literally just one click!
                            <br />
                            <br />
                            <a href="https://github.com/AndrewKeymolen/LovelyDay">
                              <i className="icon-social-github-circular"></i>{" "}
                              &nbsp;GitHub
                            </a>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div
                      className="col-md-4 grid-item2"
                      data-animate-effect="fadeInLeft"
                    >
                      <div className="blog-entry">
                        <a
                          href="https://twitter.com/EverydayManga"
                          className="blog-img"
                        >
                          <img
                            src={EverydayManga}
                            className="img-responsive"
                            alt="EverydayManga"
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
                            <a href="https://twitter.com/EverydayManga">
                              EverydayManga
                            </a>
                          </h3>
                          <p>
                            EverydayManga is a Node.js Twitter bot. Every day,
                            discover a gorgeous new - carefully picked - manga
                            panel.
                            <br />
                            <br />
                            <a href="https://github.com/AndrewKeymolen/EverydayManga">
                              <i className="icon-social-github-circular"></i>{" "}
                              &nbsp;GitHub
                            </a>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div
                      className="col-md-4 grid-item2"
                      data-animate-effect="fadeInLeft"
                    >
                      <div className="blog-entry">
                        <a
                          href="https://github.com/AndrewKeymolen/aad-BugMasterExam"
                          className="blog-img"
                        >
                          <img
                            src={BugMaster}
                            className="img-responsive"
                            alt="BugMaster"
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
                            <a href="https://github.com/AndrewKeymolen/aad-BugMasterExam">
                              Bug Master
                            </a>
                          </h3>
                          <p>
                            Bug Master was developed as part of my exam to
                            become an Associate Android Developer. It is a
                            simple database about various insects that uses
                            basic Android features.
                            <br />
                            <br />
                            <a href="https://github.com/AndrewKeymolen/aad-BugMasterExam">
                              <i className="icon-social-github-circular"></i>{" "}
                              &nbsp;GitHub
                            </a>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div
                      className="col-md-4 grid-item2"
                      data-animate-effect="fadeInLeft"
                    >
                      <div className="blog-entry">
                        <a
                          href="https://AndrewKeymolenPhotography.com"
                          className="blog-img"
                        >
                          <img
                            src={AndrewKeymolenPhotography}
                            className="img-responsive"
                            alt="AndrewKeymolenPhotography"
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
                            <a href="https://AndrewKeymolenPhotography.com">
                              Andrew Keymolen Photography
                            </a>
                          </h3>
                          <p>
                            I eventually made a website dedicated solely to my
                            passion for photography. It's actually a heavily
                            modified (HTML/CSS & JavaScript) Tumblr theme but no
                            one needs to know. There you'll find a compilation
                            of my best work, the same you can find here.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div
                      className="col-md-4 grid-item2"
                      data-animate-effect="fadeInLeft"
                    >
                      <div className="blog-entry">
                        <a
                          href="https://github.com/AndrewKeymolen/aad-TaskMakerExam"
                          className="blog-img"
                        >
                          <img
                            src={TaskMaker}
                            className="img-responsive"
                            alt="TaskMaker"
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
                            <a href="https://github.com/AndrewKeymolen/aad-TaskMakerExam">
                              Task Maker
                            </a>
                          </h3>
                          <p>
                            Task Maker was developed as part of my exam to
                            become an Associate Android Developer. It is a
                            simple To Do app that uses basic Android features.
                            <br />
                            <br />
                            <a href="https://github.com/AndrewKeymolen/aad-TaskMakerExam">
                              <i className="icon-social-github-circular"></i>{" "}
                              &nbsp;GitHub
                            </a>
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
                        <a
                          href={WeddingPicture}
                          data-toggle="lightbox"
                          className="blog-img"
                        >
                          <img
                            src={WeddingPicture}
                            className="img-responsive"
                          />
                        </a>
                        <div className="desc blog-text">
                          <span>
                            <small>Spring 2019 </small> | <small> Photo </small>{" "}
                            |{" "}
                            <small>
                              {" "}
                              <i className="icon-camera-outline" />
                            </small>
                          </span>
                          <h3>
                            <a
                              href={WeddingPicture}
                              data-toggle="lightbox"
                              className="blog-img"
                            >
                              Wedding Picture
                            </a>
                          </h3>
                          <p>
                            I got invited to my friend's wedding in Spring 2019.
                            I worked on this montage using some pictures I had
                            taken of her and her fiancé in order to print it on
                            glass and give her as a present.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div
                      className="col-md-4 grid-item2"
                      data-animate-effect="fadeInLeft"
                    >
                      <div className="blog-entry">
                        <a
                          href={Photobook}
                          data-toggle="lightbox"
                          className="blog-img"
                        >
                          <img
                            src={Photobook}
                            className="img-responsive"
                            alt="Photobook"
                          />
                        </a>
                        <div className="desc blog-text">
                          <span>
                            <small>Spring 2020 </small> | <small> Photo </small>{" "}
                            |{" "}
                            <small>
                              {" "}
                              <i className="icon-camera-outline" />
                            </small>
                          </span>
                          <h3>
                            <a href={PdfPhotobook} download>
                              Photobook <i className="icon-download4"></i>
                            </a>
                          </h3>
                          <p>
                            I recently decided I would compile my best travel
                            pictures in a photobook. I originally wanted to
                            enter it in a contest but I quickly realized I
                            wouldn't stand a chance. Anyway, it was a fun
                            exercice and I'm still pretty happy with the result.
                            <br />
                            <br />
                            <a href={PdfPhotobook} download>
                              The book&nbsp;<i className="icon-download4"></i>
                            </a>
                            <br />
                            <a href={PdfPhotobookCover} download>
                              The book's cover&nbsp;
                              <i className="icon-download4"></i>
                            </a>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div
                      className="col-md-4 grid-item2"
                      data-animate-effect="fadeInLeft"
                    >
                      <div className="blog-entry">
                        <a
                          href="https://www.youtube.com/watch?v=whF_-5ki3wY"
                          data-toggle="lightbox"
                          className="blog-img"
                        >
                          <img
                            src={TheEmeraldIsle}
                            className="img-responsive"
                            alt="TheEmeraldIsle"
                          />
                        </a>
                        <div className="desc blog-text">
                          <span>
                            <small>Spring 2017 </small> | <small> Video </small>{" "}
                            |{" "}
                            <small>
                              {" "}
                              <i className="icon-video-outline" />
                            </small>
                          </span>
                          <h3>
                            <a
                              href="https://www.youtube.com/watch?v=whF_-5ki3wY"
                              data-toggle="lightbox"
                            >
                              The Emerald Isle
                            </a>
                          </h3>
                          <p>
                            Having a lot of experience in Photography, I decide
                            I would try expressing myself through video for a
                            change. I filmed a few things during a stay in
                            Ireland and this is what I eventually ended up
                            making. It looks very amateurish, my camera is
                            definitiely not the best for filming and also I was
                            far from being the best cameraman/video editor at
                            the time. I learned a lot working on that video
                            though.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div
                      className="col-md-4 grid-item2"
                      data-animate-effect="fadeInLeft"
                    >
                      <div className="blog-entry">
                        <a
                          href="https://soundcloud.com/andrewkeymolen/2016-08-27-4am-buddhist-ceremony-at-dobongjeongsa-temple-1"
                          className="blog-img"
                        >
                          <img src={Zen} className="img-responsive" alt="Zen" />
                        </a>
                        <div className="desc blog-text">
                          <span>
                            <small>Summer 2016 </small> | <small> Audio </small>{" "}
                            |{" "}
                            <small>
                              {" "}
                              <i className="icon-microphone2" />
                            </small>
                          </span>
                          <h3>
                            <a href="https://soundcloud.com/andrewkeymolen/2016-08-27-4am-buddhist-ceremony-at-dobongjeongsa-temple-1">
                              Zen
                            </a>
                          </h3>
                          <p>
                            I got the chance to visit a cosy neighbourhood
                            temple multiple times during my first visit in
                            Seoul. After attending several ceremonies, I asked
                            if I could record the early morning one. Here is
                            what came out of that!
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
                        <a
                          href="https://www.adneom.com/googles-associate-android-developer-certification/"
                          className="blog-img"
                        >
                          <img
                            src={Android}
                            className="img-responsive"
                            alt="Android"
                          />
                        </a>
                        <div className="desc blog-text">
                          <span>
                            <small>Spring 2020 </small> |{" "}
                            <small> Writing </small> |{" "}
                            <small>
                              {" "}
                              <i className="icon-pen2" />
                            </small>
                          </span>
                          <h3>
                            <a href="https://www.adneom.com/googles-associate-android-developer-certification/">
                              An introduction to the Android paradigm and to
                              Google’s Associate Android Developer Certification
                            </a>
                          </h3>
                          <p>
                            In this article, I explain everything about the most
                            notorious certification in Android development.
                            Thinking about adding another string to your bow?
                            Then this article is for you as it will tell you
                            about an official Google certification, what it’s
                            about and how to get it.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div
                      className="col-md-4 grid-item2"
                      data-animate-effect="fadeInLeft"
                    >
                      <div className="blog-entry">
                        <a href={english} download className="blog-img">
                          <img
                            src={Android}
                            className="img-responsive"
                            alt="Android"
                          />
                        </a>
                        <div className="desc blog-text">
                          <span>
                            <small>Spring 2016 </small> |{" "}
                            <small> Writing </small> |{" "}
                            <small>
                              {" "}
                              <i className="icon-pen2" />
                            </small>
                          </span>
                          <h3>
                            <a href={english} download>
                              Thesis - development of an Android support app for
                              field agents <i className="icon-download4"></i>
                            </a>
                          </h3>
                          <p>
                            My thesis about the development of an Android
                            support app for field agents, written in both{" "}
                            <a href={french} download>
                              French&nbsp;<i className="icon-download4"></i>
                            </a>{" "}
                            and{" "}
                            <a href={english} download>
                              English&nbsp;<i className="icon-download4"></i>
                            </a>
                            , and{" "}
                            <a href={defense} download>
                              defended in English&nbsp;
                              <i className="icon-download4"></i>
                            </a>
                            .
                          </p>
                        </div>
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
