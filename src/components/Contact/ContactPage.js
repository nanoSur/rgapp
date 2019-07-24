import React, { Component } from "react"

export default class ContactPage extends Component {
  render() {
    return (
      <section className="py-3">
        <div className="container">
          <form>
            <div className="form-group row">
              <label
                for="staticEmail"
                class="control-label col-sm-2 text-secondary"
              >
                Email
              </label>
              <div className="col-sm-10">
                <input
                  type="text"
                  className="form-control-plaintext"
                  action="/new.php"
                  placeholder="drop email here"
                />
              </div>
              <div className="col-sm-offset-2 col-sm-10 justify-content my-3 d-flex ">
                <button type="submit" class="btn btn-info">
                  Contact us
                </button>
              </div>
            </div>
          </form>
        </div>
      </section>
    )
  }
}
