import logo from "../../images/logo.png";
import facebookLogo from "../../images/facebook.png";
import instagramLogo from "../../images/instagram.png";
import linkedinLogo from "../../images/linkedin.png";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Navbar() {
    const [toggle, setToggleState] = useState(false);

    const toggleMenu = () =>
        setToggleState((prevToggleState) => !prevToggleState);

    const toggleMenuOpen = () => {
        if (toggle) {
            setToggleState((prevToggleState) => !prevToggleState);
        }
    };

    return (
        <>
            <div
                onClick={toggleMenu}
                className={toggle ? "menu-burger open" : "menu-burger"}
            >
                <div className="bar"></div>
            </div>

            <nav className={toggle ? "navbar open" : "navbar"}>
                <img className="navbar--logo" src={logo} alt="" />
                <ul className="navbar--list">
                    <li className="navbar--item">
                        <Link
                            className="navbar--link"
                            onClick={toggleMenuOpen}
                            to="/"
                        >
                            home
                        </Link>
                    </li>
                    <li className="navbar--item">
                        <Link
                            className="navbar--link"
                            onClick={toggleMenuOpen}
                            to="/about-us"
                        >
                            about us
                        </Link>
                    </li>
                    <li className="navbar--item">
                        <Link
                            className="navbar--link"
                            onClick={toggleMenuOpen}
                            to="/portfolio"
                        >
                            portfolio
                        </Link>
                    </li>
                    <li className="navbar--item">
                        <Link
                            className="navbar--link"
                            onClick={toggleMenuOpen}
                            to="/feedback"
                        >
                            feedback
                        </Link>
                    </li>
                    <li className="navbar--item">
                        <Link
                            className="navbar--link"
                            onClick={toggleMenuOpen}
                            to="/contact-us"
                        >
                            contacts
                        </Link>
                    </li>
                    <li className="navbar--item">
                        <a className="navbar--link" href="/">
                            <img
                                className="navbar--social-media"
                                src={facebookLogo}
                                alt="facebook link"
                            />
                        </a>
                        <a className="navbar--link" href="/">
                            <img
                                className="navbar--social-media"
                                src={instagramLogo}
                                alt="intagram link"
                            />
                        </a>
                        <a className="navbar--link" href="/">
                            <img
                                className="navbar--social-media"
                                src={linkedinLogo}
                                alt="linkedin link"
                            />
                        </a>
                    </li>
                </ul>
            </nav>
        </>
    );
}
