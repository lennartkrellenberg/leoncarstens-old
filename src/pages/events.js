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
    <Header />
    <BackgroundImage
      className="backgroundImage"
      fluid={props.data.indexImage.childImageSharp.fluid}
    >
      <div className="black-overlay">
        <h1>Events</h1>
      </div>
    </BackgroundImage>



    <div className="gallery-section">

      <div className="gallery">
        <BackgroundImage
          className="gallery-item fourxtwo"
          fluid={props.data.indexImage.childImageSharp.fluid}
        >
          <div className="black-overlay">
            <h1>Events</h1>
          </div>
        </BackgroundImage>      
        <BackgroundImage
          className="gallery-item threextwo"
          fluid={props.data.indexImage.childImageSharp.fluid}
        >
        </BackgroundImage>
        <BackgroundImage
          className="gallery-item twoxthree"
          fluid={props.data.indexImage.childImageSharp.fluid}
        >
        
        </BackgroundImage>       
        
        <BackgroundImage
          className="gallery-item tall"
          fluid={props.data.indexImage.childImageSharp.fluid}
        >
        </BackgroundImage>
        <BackgroundImage
          className=" gallery-item fourxone"
          fluid={props.data.indexImage.childImageSharp.fluid}
        >
          
        </BackgroundImage>

        <BackgroundImage
          className=" gallery-item wide"
          fluid={props.data.indexImage.childImageSharp.fluid}
        >
          
        </BackgroundImage>




      </div>



    </div>

    <Footer></Footer>





  </div>

)

export default PotraitPage

export const pageQuery = graphql`
query {
  indexImage: file(relativePath: { eq: "7.jpg"}) {
    childImageSharp {
      fluid(maxWidth: 1800, quality: 75) {
        ...GatsbyImageSharpFluid

      }
    }
  }



}`