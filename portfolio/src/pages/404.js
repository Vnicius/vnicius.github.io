import React from "react"

import Layout from "../components/layout"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import SEO from "../components/seo"
import Title from "../components/Title"

import "./index.css"

const NotFoundPage = () => {
  const data = useStaticQuery(graphql`
    query {
      footerImage: file(relativePath: { eq: "footer.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <SEO title="404: Not found" />
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Title>404: Not Found</Title>
        <footer
          className="content-section"
          style={{
            width: "100%",
            margin: "0px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Img
            className="footer-image"
            fluid={data.footerImage.childImageSharp.fluid}
          />
        </footer>
      </div>
    </Layout>
  )
}

export default NotFoundPage
