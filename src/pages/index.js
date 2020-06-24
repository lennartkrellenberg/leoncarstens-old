import React from "react"
import Footer from "../components/footer.js"
import Img from "gatsby-image"
import { graphql } from "gatsby"
import "../styles/global.css"





export default ({ data }) => {
  // Set up the array of image data and `media` keys.
  // You can have as many entries as you'd like.


  return (
 //   <div>
//      <Header />
//      <div className="wrapper">
//       <div className="gallery">{data.potraitimages.nodes.map(image => (<p><Img className="gallery-image" key={image.id} fluid={image.childImageSharp.fluid}></Img></p>))}</div>
//      </div>
//      <Footer></Footer>
//    </div>

<div>
  <section className="hero">
    <div className="wrapper">
      <div className="hero-items">
      <h3>Leon Carstens</h3>
      </div>
    </div>
  </section>


  <section className="Potraits">
    <div className="title">
        <h2>Potraits</h2>
    </div>

    <div className="potraits-image">
      <Img fluid={data.image.childImageSharp.fluid}></Img>
    </div>
  </section>

  <section className="Events">
    <div className="title">
        <h2>Events</h2>
    </div>

    <div className="events-image">
      <Img fluid={data.image2.childImageSharp.fluid}></Img>
    </div>
  </section>

  <section className="Produkte">
    <div className="title">
        <h2>Produkte</h2>
    </div>

    <div className="produkte-image">
      <Img fluid={data.image3.childImageSharp.fluid}></Img>
    </div>
  </section>

  <Footer/>
</div>
  )
}



export const query = graphql`
query  {
  image: file(relativePath: {eq: "potraits.jpeg"}) {
    childImageSharp {
      fluid(maxWidth: 3080, quality: 100) {
        ...GatsbyImageSharpFluid
      }
    }
  }

  image2: file(relativePath: {eq: "events.jpeg"}) {
    childImageSharp {
      fluid(maxWidth: 3080, quality: 100) {
        ...GatsbyImageSharpFluid
      }
    }
  }

  image3: file(relativePath: {eq: "produkte.jpeg"}) {
    childImageSharp {
      fluid(maxWidth: 3080, quality: 100) {
        ...GatsbyImageSharpFluid
      }
    }
  }

}
`
