import React, { Component } from "react";
import axios from "axios";

const API_PATH = "http://localhost:3000/centralize/src/index.php";

export default class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      subject: "",
      message: "",
      mailSent: false,
      error: "",
      fatalError: false,
    };
  }

  onNameChange(event) {
    this.setState({ name: event.target.value });
  }

  onEmailChange(event) {
    this.setState({ email: event.target.value });
  }

  onMessageChange(event) {
    this.setState({ message: event.target.value });
  }

  onSubjectChange(event) {
    this.setState({ subject: event.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    axios({
      method: "post",
      url: "http://localhost/contact/index.php",
      headers: { "content-type": "application/json" },
      data: this.state,
    })
      .then((result) => {
        this.setState({ mailSent: result.data.sent });
        this.setState({ error: result.data.message });
        this.setState({ fatalError: result.data.fatalError });
        if (result.data.sent) {
          this.resetForm();
        }
      })
      .catch((error) => {
        this.setState({ mailSent: false });
        this.setState({ error: error.message });
        this.setState({ Fatalerror: true });
      });
  }

  resetForm() {
    this.setState({
      name: "",
      email: "",
      message: "",
      subject: "",
      error: "",
      fatalError: false,
    });
  }

  render() {
    return (
      <div>
        <section class="colorlib-contact" data-section="contact">
          <div class="colorlib-narrow-content">
            <div class="row">
              <div
                class="col-md-6 col-md-offset-3 col-md-pull-3 animate-box"
                data-animate-effect="fadeInLeft"
              >
                {/*<span class="heading-meta">Get in Touch</span>*/}
                <h2 class="colorlib-heading">Get in touch</h2>
              </div>
            </div>
            <div class="row">
              <div class="col-md-5">
                <div
                  class="colorlib-feature colorlib-feature-sm animate-box"
                  data-animate-effect="fadeInLeft"
                >
                  <div class="colorlib-icon">
                    <i class="icon-globe-outline"></i>
                  </div>
                  <div class="colorlib-text">
                    <p>
                      <a href="mailto: andrewkeymolen@gmail.com">
                        andrewkeymolen@gmail.com
                      </a>
                    </p>
                  </div>
                </div>

                <div
                  class="colorlib-feature colorlib-feature-sm animate-box"
                  data-animate-effect="fadeInLeft"
                >
                  <div class="colorlib-icon">
                    <i class="icon-map"></i>
                  </div>
                  <div class="colorlib-text">
                    <p>Available on demand</p>
                  </div>
                </div>

                <div
                  class="colorlib-feature colorlib-feature-sm animate-box"
                  data-animate-effect="fadeInLeft"
                >
                  <div class="colorlib-icon">
                    <i class="icon-phone"></i>
                  </div>
                  <div class="colorlib-text">
                    <p>Available on demand</p>
                  </div>
                </div>
              </div>
              <div class="col-md-7 col-md-push-1">
                <div class="row">
                  <div
                    class="col-md-10 col-md-offset-1 col-md-pull-1 animate-box"
                    data-animate-effect="fadeInRight"
                  >
                    <form
                      id="contact-form"
                      onSubmit={this.handleSubmit.bind(this)}
                      method="POST"
                    >
                      <div class="form-group">
                        <input
                          type="text"
                          class="form-control"
                          placeholder="Name"
                          name="Name"
                          id="name"
                          value={this.state.name}
                          onChange={this.onNameChange.bind(this)}
                        />
                      </div>
                      <div class="form-group">
                        <input
                          type="email"
                          class="form-control"
                          placeholder="Email"
                          name="Email"
                          id="email"
                          aria-describedby="emailHelp"
                          value={this.state.email}
                          onChange={this.onEmailChange.bind(this)}
                        />
                      </div>
                      <div class="form-group">
                        <input
                          type="text"
                          class="form-control"
                          placeholder="Subject"
                          name="Subject"
                          id="subject"
                          value={this.state.subject}
                          onChange={this.onSubjectChange.bind(this)}
                        />
                      </div>
                      <div class="form-group">
                        <textarea
                          name=""
                          cols="30"
                          rows="7"
                          class="form-control"
                          placeholder="Message"
                          name="Message"
                          id="message"
                          value={this.state.message}
                          onChange={this.onMessageChange.bind(this)}
                        ></textarea>
                      </div>
                      <div class="form-group">
                        <input
                          type="submit"
                          class="btn btn-primary btn-send-message"
                          value="Send Message"
                          onClick={(e) => this.handleSubmit(e)}
                        />
                        <div>
                          {this.state.mailSent && (
                            <div className="success">
                              Your message has been sent successfully!
                            </div>
                          )}
                          {this.state.error && !this.state.mailSent && (
                            <div className="error" style={{ color: "red" }}>
                              {this.state.error}
                            </div>
                          )}
                          {this.state.fatalError && (
                            <div
                              className="FatalError"
                              style={{ color: "red" }}
                            >
                              Please, try sending an email directly at{" "}
                              <a href="mailto: andrewkeymolen@gmail.com">
                                andrewkeymolen@gmail.com
                              </a>
                            </div>
                          )}
                        </div>
                      </div>
                    </form>
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
