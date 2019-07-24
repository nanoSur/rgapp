import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"
import HeroSection from "../components/Reuseable/HeroSection"
import InfoBlock from "../components/Reuseable/InfoBlock"
import DualInfoBlock from "../components/Reuseable/DualInfoBlock"
import ServiceCourse from "../components/Services/ServiceCourse"

const ServicesPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />

    <HeroSection
      img={data.img.childImageSharp.fluid}
      title="I write Code"
      subtitle=""
      heroclass="about-background"
    />
    <InfoBlock heading="Services" />

    <ServiceCourse />
  </Layout>
)

export const query = graphql`
  {
    img: file(relativePath: { eq: "service.png" }) {
      childImageSharp {
        fluid(maxWidth: 400, maxHeight: 250) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`

export default ServicesPage
