import React from "react"
import { Navbar, Nav } from "react-bootstrap"
import { Link } from "gatsby"
import 'bootstrap/dist/css/bootstrap.min.css';
import "../styles/global.css"

export default function Header() {
    return (

        <div className="sticky-top">
            <div className="wrapper">
            <Navbar expand="md" variant="dark">
                <Navbar.Brand href="#">Leon Carstens</Navbar.Brand>
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
                            <Link className="nav-link" activeClassName="active" to="/produkte">Produkte</Link>
                        </Nav.Item>
                    </Nav>



                </Navbar.Collapse>

            </Navbar>
            </div>
            


        </div>



    )
}