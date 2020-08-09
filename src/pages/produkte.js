import React from 'react'
import { graphql } from 'gatsby'
import Header from "../components/header"
import BackgroundImage from 'gatsby-background-image'
import "../styles/global.css"
import "../styles/background-image.css"
import "../styles/gallery.css"
import Footer from "../components/footer.js"
import Img from "gatsby-image"  





const ProduktePage = (props) => (
  <div>
    <Header/>
    <BackgroundImage
      className="backgroundImage"
      fluid={props.data.indexImage.childImageSharp.fluid}
    >
      <div className="black-overlay">
        <h1>Produkte</h1>
      </div>
    </BackgroundImage>

    <div className="gallery-section">

<div className="gallery">
  <Img fluid={props.data.produkte1.childImageSharp.fluid} className="gallery-item fourxtwo"></Img>
  <Img fluid={props.data.produkte2.childImageSharp.fluid} className="gallery-item threeXtwo"></Img>
  <Img fluid={props.data.produkte3.childImageSharp.fluid} className="gallery-item twoxthree"></Img>
  <Img fluid={props.data.produkte4.childImageSharp.fluid} className="gallery-item tall"></Img>
  <Img fluid={props.data.produkte5.childImageSharp.fluid} className="gallery-item fourxone"></Img>
  <Img fluid={props.data.produkte6.childImageSharp.fluid} className="gallery-item wide"></Img>
</div>

</div>





<Footer></Footer>

</div>



)

export default ProduktePage

export const pageQuery = graphql`
query {
indexImage: file(relativePath: { eq: "produkte.jpeg"}) {
childImageSharp {
  fluid(maxWidth: 1800, quality: 75) {
    ...GatsbyImageSharpFluid

  }
}
}

produkte1: file(relativePath: {eq: "gallery-produkte/alisa-anton-MbVn7iA9Z08-unsplash.jpg"}) {
childImageSharp {
  fluid(maxWidth: 3080, quality: 75) {
    ...GatsbyImageSharpFluid
  }
}
}

produkte2: file(relativePath: {eq: "gallery-produkte/amirali-mirhashemian-sc5sTPMrVfk-unsplash.jpg"}) {
childImageSharp {
  fluid(maxWidth: 3080, quality: 75) {
    ...GatsbyImageSharpFluid
  }
}
}

produkte3: file(relativePath: {eq: "gallery-produkte/alexander-mils-lCPhGxs7pww-unsplash.jpg"}) {
childImageSharp {
  fluid(maxWidth: 3080, quality: 75) {
    ...GatsbyImageSharpFluid
  }
}
}

produkte4: file(relativePath: {eq: "gallery-produkte/anton-jansson-hG3t7bP86KE-unsplash.jpg"}) {
childImageSharp {
  fluid(maxWidth: 3080, quality: 75) {
    ...GatsbyImageSharpFluid
  }
}
}

produkte5: file(relativePath: {eq: "gallery-produkte/brooke-cagle-CcTm3JMAURE-unsplash.jpg"}) {
childImageSharp {
  fluid(maxWidth: 3080, quality: 75) {
    ...GatsbyImageSharpFluid
  }
}
}

produkte6: file(relativePath: {eq: "gallery-produkte/brooke-cagle-LCcFI_26diA-unsplash.jpg"}) {
childImageSharp {
  fluid(maxWidth: 3080, quality: 75) {
    ...GatsbyImageSharpFluid
  }
}
}





}`


