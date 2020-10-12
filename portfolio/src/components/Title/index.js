import React from "react"

import "./index.css"

const Title = ({ color = "white", children }) => {
  return (
    <h1
      className="title"
      style={{
        color: color,
      }}
    >
      {children}
    </h1>
  )
}

export default Title
