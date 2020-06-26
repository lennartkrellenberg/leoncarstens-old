import React from "react"
import Footer from "../components/footer.js"
import Header from "../components/header.js"
import Img from "gatsby-image"
import { graphql } from "gatsby"
import "../styles/global.css"
import "../styles/main-page.css"
import { Link } from "gatsby";






export default ({ data }) => {

  return (
   
    <div>
      <Header />

      <section className="hero">
        <div className="wrapper">
          <div className="hero-items">
            <h3>Leon Carstens</h3>
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
        <div className="title">
          <h2><Link className="link" to="/potraits">Potraits</Link></h2>
        </div>

        <div className="potraits-image">
          <Img fluid={data.image.childImageSharp.fluid}></Img>
        </div>
      </section>

      <section className="Events">
        <div className="title">
          <h2><Link className="link" to="/events">Events</Link></h2>
        </div>

        <div className="events-image">
          <Img fluid={data.image2.childImageSharp.fluid}></Img>
        </div>
      </section>

      <section className="Produkte">
        <div className="title">
          <h2><Link className="link" to="/produkte">Produkte</Link></h2>
        </div>

        <div className="produkte-image">
          <Img href="" fluid={data.image3.childImageSharp.fluid}></Img>
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





