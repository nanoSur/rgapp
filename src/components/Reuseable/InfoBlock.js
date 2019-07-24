import React from "react"
import Heading from "./Heading"
import { Link } from "gatsby"

export default function InfoBlock({ heading }) {
  return (
    <section className="bg-theme my-5 py-4 text-white">
      <div className="container">
        <Heading title={heading} />
        <div className="row">
          <div className="col-10 col-sm-8 mx-auto text-center">
            <p className="lead text-white mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Justo
              laoreet sit amet cursus sit amet dictum sit. Et netus et malesuada
              fames ac. Vel pharetra vel turpis nunc eget. Elit at imperdiet dui
              accumsan. Venenatis lectus magna fringilla urna porttitor rhoncus
              dolor. Habitant morbi tristique senectus et netus et malesuada
              fames ac. Ac placerat vestibulum lectus mauris ultrices. Sed
              vulputate odio ut enim. Viverra vitae congue eu consequat ac felis
              donec et. Ultricies lacus sed turpis tincidunt id aliquet risus
              feugiat in.
            </p>
            <Link to="/about">
              <button className="btn btn-warning btn-lg">{heading}</button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
