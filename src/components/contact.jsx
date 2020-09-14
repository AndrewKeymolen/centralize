import React, { Component } from "react";
import axios from "axios";

const API_PATH = "https://centralize-contact-form-php.herokuapp.com/";

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
      url: API_PATH,
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
        <section className="colorlib-contact" data-section="contact">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div
                className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box"
                data-animate-effect="fadeInLeft"
                >
                {/*<span className="heading-meta">Get in Touch</span>*/}
                <h2 className="colorlib-heading">Get in touch</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-5">
                <div
                  className="colorlib-feature colorlib-feature-sm animate-box"
                  data-animate-effect="fadeInLeft"
                  >
                  <div className="colorlib-icon">
                    <i className="icon-globe-outline"></i>
                  </div>
                  <div className="colorlib-text">
                    <p>
                      <a href="mailto: andrewkeymolen@gmail.com">
                        andrewkeymolen@gmail.com
                      </a>
                    </p>
                  </div>
                </div>

                <div
                  className="colorlib-feature colorlib-feature-sm animate-box"
                  data-animate-effect="fadeInLeft"
                  >
                  <div className="colorlib-icon">
                    <i className="icon-map"></i>
                  </div>
                  <div className="colorlib-text">
                    <p>Available on demand</p>
                  </div>
                </div>

                <div
                  className="colorlib-feature colorlib-feature-sm animate-box"
                  data-animate-effect="fadeInLeft"
                  >
                  <div className="colorlib-icon">
                    <i className="icon-phone"></i>
                  </div>
                  <div className="colorlib-text">
                    <p>Available on demand</p>
                  </div>
                </div>
              </div>
              <div className="col-md-7 col-md-push-1">
                <div className="row">
                  <div
                    className="col-md-10 col-md-offset-1 col-md-pull-1 animate-box"
                    data-animate-effect="fadeInRight"
                    >
                    <form
                      id="contact-form"
                      onSubmit={this.handleSubmit.bind(this)}
                      method="POST"
                      >
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Name"
                          name="Name"
                          id="name"
                          value={this.state.name}
                          onChange={this.onNameChange.bind(this)}
                          />
                      </div>
                      <div className="form-group">
                        <input
                          type="email"
                          className="form-control"
                          placeholder="Email"
                          name="Email"
                          id="email"
                          aria-describedby="emailHelp"
                          value={this.state.email}
                          onChange={this.onEmailChange.bind(this)}
                          />
                      </div>
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Subject"
                          name="Subject"
                          id="subject"
                          value={this.state.subject}
                          onChange={this.onSubjectChange.bind(this)}
                          />
                      </div>
                      <div className="form-group">
                        <textarea
                          name=""
                          cols="30"
                          rows="7"
                          className="form-control"
                          placeholder="Message"
                          name="Message"
                          id="message"
                          value={this.state.message}
                          onChange={this.onMessageChange.bind(this)}
                          ></textarea>
                      </div>
                      <div className="form-group">
                        <input
                          type="submit"
                          className="btn btn-primary btn-send-message"
                          value="Send Message"
                          onClick={(e) => this.handleSubmit(e)}
                          />
                        <div>
                          {this.state.mailSent && (
                            <div className="success">
                              Your message has been sent successfully! You should also have received a copy. Please check your SPAMS folder if you can't find it.
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
