import React from "react"

import "./index.css"

const Name = ({ color = "white", children }) => (
  <h2
    className="name"
    style={{
      color: color,
    }}
  >
    {children}
  </h2>
)

export default Name
