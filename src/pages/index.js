import React from "react"
import Footer from "../components/footer.js"
import Header from "../components/header.js"
import { graphql } from "gatsby"
import "../styles/global.css"
import "../styles/main-page.css"
import BackgroundImage from 'gatsby-background-image';
import "../styles/background-image.css"









export default ({ data }) => {

  return (
   
    <div>
              <Header/>
      <section className="hero">
        <div className="wrapper">
          <div className="hero-items">
            <h1>Leon Carstens</h1>
            <a href="#Potraits" className="scroll-down">
              <div className="mouse">
                <span></span>
              </div>

              <div className="arrow">
                <span></span>
              </div>
            </a>

            
          </div>
        </div>
      </section>



      <section className="Potraits" id="Potraits">

        <div className="potraits-image">
          <a href="/potraits" aria-label="potraitsLink" className="mainlink">
          <BackgroundImage
      className="mainBackgroundImage"
      fluid={data.image.childImageSharp.fluid}
    >
      <div className="blackwhite-overlay">
        <h1>Potraits</h1>
      </div>
    </BackgroundImage></a>
        </div>
      </section>

      <section className="Events">
        <div className="trenner">
        </div>

        <div className="events-image">
          <a href="/events" aria-label="eventsLink" className="mainlink">
          <BackgroundImage
      className="mainBackgroundImage"
      fluid={data.image2.childImageSharp.fluid}
    >
      <div className="blackwhite-overlay">
        <h1>Events</h1>
      </div>
    </BackgroundImage></a>
        </div>
      </section>

      <section className="Produkte">
        <div className="trenner">
        </div>

        <div className="produkte-image">
        <a href="/produkte" aria-label="produkteLink" className="mainlink">
          <BackgroundImage
      className="mainBackgroundImage"
      fluid={data.image3.childImageSharp.fluid}
    >
      <div className="blackwhite-overlay">
        <h1>Produkte</h1>
      </div>
    </BackgroundImage></a>
        </div>
      </section>

      <Footer />
    </div>
  )
}



export const query = graphql`
query  {
  image: file(relativePath: {eq: "potraits.jpeg"}) {
    childImageSharp {
      fluid(maxWidth: 3080, quality: 75) {
        ...GatsbyImageSharpFluid
      }
    }
  }

  image2: file(relativePath: {eq: "events.jpeg"}) {
    childImageSharp {
      fluid(maxWidth: 3080, quality: 75) {
        ...GatsbyImageSharpFluid
      }
    }
  }

  image3: file(relativePath: {eq: "produkte.jpeg"}) {
    childImageSharp {
      fluid(maxWidth: 3080, quality: 75) {
        ...GatsbyImageSharpFluid
      }
    }
  }

}
`





