import React from "react"
import Heading from "./Heading"
import { Link } from "gatsby"

export default function DualInfoBlock({ heading }) {
  return (
    <section className="my-4 py-4 bg-theme">
      <div className="container">
        <Heading title={heading} />
        <div className="row">
          <div className="col-8 mx-auto">
            <p className="lead text-white mb-5 justify">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit
              amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim
              veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
              ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur
              adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat
            </p>
          </div>

          <div className="col-4">
            <div className="card bg-light">
              <img
                className="card-img-top"
                src="https://lh3.googleusercontent.com/ekjNrKPTvAditxi32MgmJ1k33wy93KxwiiOrC5JBlgBQDqRgafs1t2xtRXSngngwgJCQLo82Z2gJfXLSLjQHg8LPc2jd8mrxACmlDSVc0bB7Z9IZ8gwVGL4miKr9q2Wk_cNdmztxMMqkPwDWP8jrOOx44brzV1Zf2zQjKvYfYoSrRFmYIgkPd8Rvvh1K-lOEAdVZ_58JuOyQbeLvt-htGy7GRn1Z21YSNBEtmr2qJGHxvWWpyzBTeCdY1jYo1E1-3v7RsOb61mZnRXVczr3n9EpBQvYCXdbD6zjwbnJm7X0RHNHZJtBgo4RnBiVWQhmM-mu81Ki15SyETDrj54vSs8YfhWzX6VrS3lv0rAJBKNJWIVaRlb2JbzJfwu5kt6SsS8RJk-dn2ztX6akxy6Gh7g2qTT1G-pfHCDdBz86OcBBE1ZGWb0z1EiafDxovictxQ2a5wq6U9szfcJH94Vzom2h9wgOpp30SRZ3o37WSSh4tN8QH76kmjRU4Ccbc-U5r2kfVP-9Hw1eFfk_JrIezhJqXvAYKv9DrovZwBrYJt6dXI_m5C-dQtZL1C2O2Mj85d4g9JlPzTjo8xl8sMUcTsmsVAZYhh_hcem5uzoFAoZpjpFPLwCENOZdGK2gnrCv0_ZaBFaf-ELXdIv86r2lALXdk5fJ8ur1vZiMAdp8sF1WVZ4Ayj_77jp3EPMA7ybg_d3Stj0poDEGkzciJCRSoIbxm=w758-h379-no"
                alt="Card image cap"
              />
              <div className="card-body">
                <h5 className="card-title text-success">Just click photos</h5>
                <p className="card-text text-muted">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <Link to="/team" className="btn btn-info btn-block team">
                  {heading}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
