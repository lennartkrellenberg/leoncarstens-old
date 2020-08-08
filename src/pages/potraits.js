import React from 'react'
import { graphql } from 'gatsby'
import Header from "../components/header"
import BackgroundImage from 'gatsby-background-image'
import "../styles/global.css"
import "../styles/background-image.css"
import "../styles/gallery.css"
import Footer from "../components/footer.js"
import Img from "gatsby-image"  




const PotraitPage = (props) => (
  <div>
    <Header/>
    <BackgroundImage
      className="backgroundImage"
      fluid={props.data.indexImage.childImageSharp.fluid}
    >
      <div className="black-overlay">
        <h1>Potraits</h1>
      </div>
    </BackgroundImage>

    <div className="gallery-section">

    <div className="gallery">
      <Img fluid={props.data.potrait1.childImageSharp.fluid} className="gallery-item fourxtwo"></Img>
      <Img fluid={props.data.potrait2.childImageSharp.fluid} className="gallery-item threeXtwo"></Img>
      <Img fluid={props.data.potrait3.childImageSharp.fluid} className="gallery-item twoxthree"></Img>
      <Img fluid={props.data.potrait4.childImageSharp.fluid} className="gallery-item tall"></Img>
      <Img fluid={props.data.potrait5.childImageSharp.fluid} className="gallery-item fourxone"></Img>
      <Img fluid={props.data.potrait6.childImageSharp.fluid} className="gallery-item wide"></Img>
    </div>

    </div>

    

    

    <Footer></Footer>
    
   </div>

   

)

export default PotraitPage

export const pageQuery = graphql`
query {
  indexImage: file(relativePath: { eq: "potraits.jpg"}) {
    childImageSharp {
      fluid(maxWidth: 1800, quality: 75) {
        ...GatsbyImageSharpFluid

      }
    }
  }

  potrait1: file(relativePath: {eq: "gallery-potraits/4.jpeg"}) {
    childImageSharp {
      fluid(maxWidth: 3080, quality: 75) {
        ...GatsbyImageSharpFluid
      }
    }
  }

  potrait2: file(relativePath: {eq: "gallery-potraits/200521_MaiHH-4.jpg"}) {
    childImageSharp {
      fluid(maxWidth: 3080, quality: 75) {
        ...GatsbyImageSharpFluid
      }
    }
  }

  potrait3: file(relativePath: {eq: "gallery-potraits/emmi-200722-5.jpg"}) {
    childImageSharp {
      fluid(maxWidth: 3080, quality: 75) {
        ...GatsbyImageSharpFluid
      }
    }
  }

  potrait4: file(relativePath: {eq: "gallery-potraits/felix-200723-9.jpg"}) {
    childImageSharp {
      fluid(maxWidth: 3080, quality: 75) {
        ...GatsbyImageSharpFluid
      }
    }
  }

  potrait5: file(relativePath: {eq: "gallery-potraits/Sylt-200712-26.jpg"}) {
    childImageSharp {
      fluid(maxWidth: 3080, quality: 75) {
        ...GatsbyImageSharpFluid
      }
    }
  }

  potrait6: file(relativePath: {eq: "gallery-potraits/Sylt-200712-51.jpg"}) {
    childImageSharp {
      fluid(maxWidth: 3080, quality: 75) {
        ...GatsbyImageSharpFluid
      }
    }
  }

  



}`




