import React from "react"
import Img from "gatsby-image"

import "./index.css"

const Post = ({ image, title, url }) => (
  <a className="post-container" href={url}>
    <div className="post-cover">
      <Img fluid={image} />
    </div>
    <h3 className="post-title">{title}</h3>
  </a>
)

export default Post
