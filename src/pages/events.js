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
  indexImage: file(relativePath: { eq: "events.jpeg"}) {
    childImageSharp {
      fluid(maxWidth: 1800, quality: 75) {
        ...GatsbyImageSharpFluid

      }
    }
  }

  potrait1: file(relativePath: {eq: "gallery-events/3.jpg"}) {
    childImageSharp {
      fluid(maxWidth: 3080, quality: 75) {
        ...GatsbyImageSharpFluid
      }
    }
  }

  potrait2: file(relativePath: {eq: "gallery-events/6.jpg"}) {
    childImageSharp {
      fluid(maxWidth: 3080, quality: 75) {
        ...GatsbyImageSharpFluid
      }
    }
  }

  potrait3: file(relativePath: {eq: "gallery-events/190810_name_078.jpg"}) {
    childImageSharp {
      fluid(maxWidth: 3080, quality: 75) {
        ...GatsbyImageSharpFluid
      }
    }
  }

  potrait4: file(relativePath: {eq: "gallery-events/190810_name_101.jpg"}) {
    childImageSharp {
      fluid(maxWidth: 3080, quality: 75) {
        ...GatsbyImageSharpFluid
      }
    }
  }

  potrait5: file(relativePath: {eq: "gallery-events/190810_name_112.jpg"}) {
    childImageSharp {
      fluid(maxWidth: 3080, quality: 75) {
        ...GatsbyImageSharpFluid
      }
    }
  }

  potrait6: file(relativePath: {eq: "gallery-events/200229_Workshop_ApplicAid_Grips-87.jpg"}) {
    childImageSharp {
      fluid(maxWidth: 3080, quality: 75) {
        ...GatsbyImageSharpFluid
      }
    }
  }

  



}`


