import React from 'react'
import "../styles/global.css"
import "../styles/aboutme.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import "../styles/global.css"
import { graphql } from "gatsby";
import Img from "gatsby-image"
import { Navbar, Nav } from "react-bootstrap"
import { Link } from "gatsby"
import "../styles/global.css"
import "../styles/header.css"






const AboutMePage = (props) => (
    <div>

<div className="sticky-top">
                


                <Navbar expand="md" variant="light" className="" >
                    <Navbar.Brand href="/" className="brand"></Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarReponsive" />
                    <Navbar.Collapse id="navbarReponsive">
                        <Nav className="ml-auto" as="ul">
                            <Nav.Item as="li" >
                                <Link className="nav-link" activeClassName="active" to="/potraits">Potraits</Link>
                            </Nav.Item>

                            <Nav.Item as="li" >
                                <Link className="nav-link" activeClassName="active" to="/events">Events</Link>
                            </Nav.Item>

                          

                            <Nav.Item as="li" >
                                <Link className="nav-link" activeClassName="active" to="/aboutme">Über Mich</Link>
                            </Nav.Item>
                        </Nav>



                    </Navbar.Collapse>

                </Navbar>

                



            </div>

        <div className="aboutme-section">

        <div className="aboutme">
            <h1 className="item1">moin.</h1>
            <p className="item2">Ich bin Leon Carstens, Fotograf und Schüler aus Hamburg. Ich bin buchbar für Portraitshootings und Events deutschlandweit. Du hast Interesse an Fotos jeglicher Art? Schreib mir eine Mail oder ruf einfach an!</p>
            <div className="item3">
                <a href="www.Google.de" className="aboutme-link">&frasl;&frasl;mail</a>
                <a href="www.Google.de" className="aboutme-link margin-left">&frasl;&frasl;instagram</a>
                <a href="www.Google.de" className="aboutme-link margin-left">&frasl;&frasl;telefon</a>


            </div>

            <Img fixed={props.data.me.childImageSharp.fixed} className="leoncarstens"></Img>
        </div>
        </div>








        <div className="footer fixed-bottom">
            <div className="wrapper">
                <div className="footer-left">
                    <p><Link className="link" to="/impressum">Impressum </Link>| <Link className="link" to="/datenschutz">Datenschutz</Link></p>
                </div>

                <div className="footer-right">
                    <p><a className="link" href="https://instagram.com/leoncarstens/">Instagram</a> | <a className="link" href="mailto:heyhey@leoncarstens.de">Mail</a></p>
                </div>

                

            </div>
            
        </div>
    </div>



)

export default AboutMePage


export const aboutmequery = graphql`
query  {
  me: file(relativePath: {eq: "about/Kiel-200713-42.jpg"}) {
    childImageSharp {
      fixed(height: 250, quality: 100) {
        ...GatsbyImageSharpFixed
      }
    }
  }



}
`
