//header.js

import React from "react"
import { Navbar, Nav } from "react-bootstrap"
import { Link } from "gatsby"
import 'bootstrap/dist/css/bootstrap.min.css';
import "../styles/global.css"
import "../styles/header.css"
import "../styles/scroll-down.css"





export default function Header() {
    return (
            
            <div className="sticky-top">
                


                <Navbar expand="md" variant="light" className="nav" >
                    <Navbar.Brand href="#">Leon Carstens</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarReponsive" />
                    <Navbar.Collapse id="navbarReponsive">
                        <Nav className="ml-auto navbar" as="ul">
                            <Nav.Item as="li" >
                                <Link className="nav-link" activeClassName="active" to="/potraits">Potraits</Link>
                            </Nav.Item>

                            <Nav.Item as="li" >
                                <Link className="nav-link" activeClassName="active" to="/events">Events</Link>
                            </Nav.Item>

                            <Nav.Item as="li" >
                                <Link className="nav-link" activeClassName="active" to="/produkte">Produkte</Link>
                            </Nav.Item>
                        </Nav>



                    </Navbar.Collapse>

                </Navbar>



            </div>





    )
}






