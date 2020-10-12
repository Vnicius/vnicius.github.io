import React from "react"
import Img from "gatsby-image"

import "./index.css"

const SocialMedia = ({ href, alt = "", image }) => (
  <a href={href} className="social-logo" alt={alt}>
    <Img fluid={image} />
  </a>
)

export default SocialMedia
