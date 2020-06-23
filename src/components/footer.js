import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import "../styles/global.css"
import { Link } from "gatsby";

export default function Footer() {
    return (

        <div>
            <div className="main-footer">
                <div className="wrapper">
                    <div className="row">

                        <div className="col-md-3 col-sm-6">
                            <h4>Copyright</h4>
                            <ul className="list-unstyled">
                                <li>©2020 <a className="link" href="https://leoncarstens.de">leoncarstens.de</a></li>
                                <li><Link className="link">Impressum</Link></li>

                            </ul>
                        </div>

                        <div className="col-md-3 col-sm-6">
                            <h4>Schreib mir!</h4>
                            <ul className="list-unstyled">
                                <li><a href="mailto:heyhey@leoncarstens.de" className="link">heyhey@leoncarstens.de</a></li>
                                <li>Hamburg, Germany</li>
                            </ul>
                        </div>

                        <div className="col-md-3 col-sm-6">
                            <h4>Social Media</h4>
                            <ul className="list-unstyled">
                                <li><a className="link" href="https://instagram.com/leoncarstens/">Instagram</a></li>
                                <li><a className="link" href="https://youtube.com/channel/UCRUm8VTd1xHjlMCAUDqEFZg?">Youtube</a></li>
                                <li><a className="link" href="mailto:heyhey@leoncarstens.de">Mail</a></li>
                                <li><a className="link" href="tel:+491716887764">Telefon</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="footer-bottom">
                        <p className="text-xs-center">Created with <span role="img" aria-label="hundred">💯</span> by <a href="https://lennartkrellenberg.com" className="link">Lennart Krellenberg</a></p>
                    </div>
                </div>
            </div>
        </div>
    )
}