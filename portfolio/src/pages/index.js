import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

import "./fonts.css"
import "./index.css"
import Title from "../components/Title"
import Name from "../components/Name"
import SocialMedia from "../components/SocialMedia"
import Project from "../components/Project"
import contentData from "../data"
import Post from "../components/Post"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      avatarImage: file(relativePath: { eq: "photo.jpg" }) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 220) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      twitter: file(relativePath: { eq: "twitter.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      linkedin: file(relativePath: { eq: "linkedin.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      lattes: file(relativePath: { eq: "lattes.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      googleplay: file(relativePath: { eq: "google-play.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      libraslens: file(relativePath: { eq: "libraslens.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      footerImage: file(relativePath: { eq: "footer.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      scrapy: file(relativePath: { eq: "scrapy.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      got: file(relativePath: { eq: "got.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      itunes: file(relativePath: { eq: "itunes.png" }) {
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
      <SEO title="Portfolio" />

      <div className="header-container">
        <Img className="photo" fluid={data.avatarImage.childImageSharp.fluid} />
        <div className="content-container">
          <Title color="#fff975">it’s</Title>
          <Name color="#67b6ff" className="name">
            vinícius
          </Name>
          <Name color="#67b6ff">veríssimo</Name>
          <p className="description">{contentData.selfDescription}</p>
          <div className="social-logo-container">
            <SocialMedia
              href="https://twitter.com/devnicius"
              alt="twitter"
              image={data.twitter.childImageSharp.fluid}
            />
            <SocialMedia
              href="https://www.linkedin.com/in/vinicius-matheus/"
              alt="LinkedIn"
              image={data.linkedin.childImageSharp.fluid}
            />
            <SocialMedia
              href="http://lattes.cnpq.br/9948718867356003"
              alt="Lattes"
              image={data.lattes.childImageSharp.fluid}
            />
            <SocialMedia
              href="https://play.google.com/store/apps/dev?id=8650227152591752627"
              alt="Google Play"
              image={data.googleplay.childImageSharp.fluid}
            />
          </div>
        </div>
      </div>
      <div className="content-section">
        <Title color="#FF7676">projetos</Title>
        <div className="projects-container">
          <Project
            image={data.libraslens.childImageSharp.fluid}
            name={contentData.projects[0].name}
            googlePlayURL={contentData.projects[0].googlePlayURL}
            description={contentData.projects[0].description}
          />
        </div>
      </div>
      <div className="content-section">
        <Title color="#9AFF76">posts</Title>
        <div className="posts-layout">
          <div className="posts-background" />
          <div className="posts-container">
            <Post
              title={contentData.post[0].title}
              url={contentData.post[0].url}
              image={data.scrapy.childImageSharp.fluid}
            />
            <Post
              title={contentData.post[1].title}
              url={contentData.post[1].url}
              image={data.got.childImageSharp.fluid}
            />
            <Post
              title={contentData.post[2].title}
              url={contentData.post[2].url}
              image={data.itunes.childImageSharp.fluid}
            />
          </div>
        </div>
      </div>
      <footer
        className="content-section"
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginLeft: "0px",
          marginRight: "0px",
        }}
      >
        <Img
          className="footer-image"
          fluid={data.footerImage.childImageSharp.fluid}
        />
      </footer>
    </Layout>
  )
}

export default IndexPage
