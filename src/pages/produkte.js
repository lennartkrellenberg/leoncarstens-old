import React from 'react'
import { graphql } from 'gatsby'
import Header from "../components/header"
import BackgroundImage from 'gatsby-background-image'
import "../styles/global.css"
import "../styles/background-image.css"
import "../styles/gallery.css"
import Footer from "../components/footer.js"





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

    <div className="gallery-section">

    <div className="gallery">
      <div className="gallery-item fourxtwo one">One</div>
      <div className="gallery-item threeXtwo two">Two</div>
      <div className="gallery-item twoxthree two">Three</div>
      <div className="gallery-item tall four">Four</div>
      <div className="gallery-item fourxone five">Five</div>
      <div className="gallery-item wide six">Six</div>
    



    </div>

    

    </div>

    <Footer></Footer>

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




