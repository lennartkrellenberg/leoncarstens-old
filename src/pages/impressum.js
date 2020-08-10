import React from "react"
import "../styles/global.css"
import "../styles/impressum.css"
import { Navbar, Nav } from "react-bootstrap"
import { Link } from "gatsby"
import "../styles/global.css"
import "../styles/header.css"




export default ({ data }) => {
  // Set up the array of image data and `media` keys.
  // You can have as many entries as you'd like.
  

  return (
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
             <div className="wrapper">

     <h1 className="topic">Impressum</h1>

<h2>Angaben gem&auml;&szlig; &sect; 5 TMG</h2>
<p>Leon Theodor Carstens<br />
Moorkehre 5<br />
25451 Quickborn</p>

<h2>Kontakt</h2>
<p>Telefon: 01716887746<br />
E-Mail: heyhey@leoncarstens.de</p>

<h2>Verantwortlich f&uuml;r den Inhalt nach &sect; 55 Abs. 2 RStV</h2>
<p>Leon Theodor Carstens</p>

<p>Quelle: <a href="https://www.e-recht24.de/impressum-generator.html">https://www.e-recht24.de/impressum-generator.html</a></p>
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
}


