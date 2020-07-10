import React from 'react'
import { graphql } from 'gatsby'
import Header from "../components/header"
import BackgroundImage from 'gatsby-background-image'
import Img from "gatsby-image"
import "../styles/global.css"
import "../styles/background-image.css"
import "../styles/gallery.css"




const PotraitPage = (props) => (
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

    <div className="gallery">
      <div className="gallery-item medium"><Img fluid={props.data.image1.childImageSharp.fluid}></Img></div>
      <div className="gallery-item large"><Img fluid={props.data.image2.childImageSharp.fluid}></Img></div>
      <div className="gallery-item medium"><Img fluid={props.data.image3.childImageSharp.fluid}></Img></div>
      <div className="gallery-item small"><Img fluid={props.data.image4.childImageSharp.fluid}></Img></div>
      <div className="gallery-item tall"><Img fluid={props.data.image5.childImageSharp.fluid}></Img></div>
      <div className="gallery-item wide"><Img fluid={props.data.image6.childImageSharp.fluid}></Img></div>


    </div>

    



  </div>

)

export default PotraitPage

export const pageQuery = graphql`
query {
  indexImage: file(relativePath: { eq: "5.jpg"}) {
    childImageSharp {
      fluid(maxWidth: 1800, quality: 75) {
        ...GatsbyImageSharpFluid

      }
    }
  }

  
  image1: file(relativePath: {eq: "gallery-potraits/allec-gomes-on-feed-Vl26HXL7_ZM-unsplash.jpg"}) {
    childImageSharp {
      fluid(maxWidth: 3080, quality: 75) {
        ...GatsbyImageSharpFluid
      }
    }
  }


  
  image2: file(relativePath: {eq: "gallery-potraits/colin-watts-2NuiAmcCLP8-unsplash.jpg"}) {
    childImageSharp {
      fluid(maxWidth: 3080, quality: 75) {
        ...GatsbyImageSharpFluid
      }
    }
  }



  
  image3: file(relativePath: {eq: "gallery-potraits/gaurav-kumar-Gh9ciJSwx7o-unsplash.jpg"}) {
    childImageSharp {
      fluid(maxWidth: 3080, quality: 75) {
        ...GatsbyImageSharpFluid
      }
    }
  }


  
  image4: file(relativePath: {eq: "gallery-potraits/gaurav-kumar-Y_kQwNfTsAs-unsplash.jpg"}) {
    childImageSharp {
      fluid(maxWidth: 3080, quality: 75) {
        ...GatsbyImageSharpFluid
      }
    }
  }


  
  image5: file(relativePath: {eq: "gallery-potraits/ivan-rohovchenko-5ldx53UNdGg-unsplash.jpg"}) {
    childImageSharp {
      fluid(maxWidth: 3080, quality: 75) {
        ...GatsbyImageSharpFluid
      }
    }
  }

  image6: file(relativePath: {eq: "gallery-potraits/ivan-rohovchenko-5ldx53UNdGg-unsplash.jpg"}) {
    childImageSharp {
      fluid(maxWidth: 3080, quality: 75) {
        ...GatsbyImageSharpFluid
      }
    }
  }




}`




