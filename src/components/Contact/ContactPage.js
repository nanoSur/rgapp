import React, { Component } from "react"
import Heading from "../Reuseable/Heading"

export default class ContactPage extends Component {
  render() {
    return (
      <section className="py-3">
        <Heading title="Contact us" />
        <div className="col-10 col-sm-8 mx-auto">
          <form
            action="https://formspree.io/sunaina2roy@gmail.com"
            method="POST"
          >
            <div className="form-group">
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Your Name"
                className="form-control"
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Your E-Mail"
                className="form-control"
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                name="mobile"
                id="mobile"
                placeholder="Your Phone"
                className="form-control"
              />
            </div>
            <div className="form-group">
              <textarea
                type="text"
                name="description"
                id="description"
                placeholder="Your message"
                className="form-control"
              />
            </div>
            <button type="submit" className="btn btn-outline-info btn-block">
              submit
            </button>
          </form>
        </div>
      </section>
    )
  }
}
