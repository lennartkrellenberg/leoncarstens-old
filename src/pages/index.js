import React from "react"
import Header from "../components/header.js"
import Footer from "../components/footer.js"
import Img from "gatsby-image"
import { graphql } from "gatsby"
import "../styles/global.css"
import { Container } from "react-bootstrap"





export default ({ data }) => {
  // Set up the array of image data and `media` keys.
  // You can have as many entries as you'd like.


  return (
    <div>
      <Header />
      <Container>
        <div className="gallery">{data.potraitimages.nodes.map(image => (<p><Img className="gallery-image" key={image.id} fluid={image.childImageSharp.fluid}></Img></p>))}</div>
      </Container>
      <Footer></Footer>
    </div>
  )
}

export const query = graphql`
query PotraitsQuery {
 potraitimages: allFile(filter: {relativeDirectory: {eq: "gallery-potraits"}}) {
    nodes {
      id
      childImageSharp {
        fluid{
           ...GatsbyImageSharpFluid
        }
      }
    }
  }
}
`
