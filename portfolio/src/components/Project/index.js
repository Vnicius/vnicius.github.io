import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import "./index.css"

const Project = ({ image, name, description, googlePlayURL }) => {
  const data = useStaticQuery(graphql`
    query {
      googleplay: file(relativePath: { eq: "google-play.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <div className="project-container">
      <Img className="project-image" fluid={image} />
      <div className="project-description-container">
        <h2
          className="project-title"
          style={{
            color: "#B5CFFF",
          }}
        >
          {name}
        </h2>
        <p className="project-description">{description}</p>
        <a href={googlePlayURL} alt="Google Play">
          <Img
            className="project-source-logo"
            fluid={data.googleplay.childImageSharp.fluid}
          />
        </a>
      </div>
    </div>
  )
}

export default Project
