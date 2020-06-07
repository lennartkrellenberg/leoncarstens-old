import React from "react"
import Header from "../components/header.js"
import Footer from "../components/footer.js"
import { Container } from "react-bootstrap"
import Img from "gatsby-image"
import { graphql } from "gatsby"




export default ({ data }) => {
  // Set up the array of image data and `media` keys.
  // You can have as many entries as you'd like.
  

  return (
    <div>
      <Header />
      <Container>     
  <div className="gallery">{data.eventimages.nodes.map(image => (<p><Img   key={image.id} fluid={image.childImageSharp.fluid}></Img></p>))}</div>
        </Container>
      <Footer></Footer>
    </div>
  )
}

export const query = graphql`
query EventQuery {
 eventimages: allFile(filter: {relativeDirectory: {eq: "gallery-events"}}) {
    nodes {
      id
      childImageSharp {
        fluid {
           ...GatsbyImageSharpFluid
        }
      }
    }
  }
}
`