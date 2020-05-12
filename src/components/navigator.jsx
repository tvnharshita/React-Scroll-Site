import React, { Component } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import logo from "../images/Logo.png";

class Navigator extends Component {
  scrollToTop = () => {
    scroll.scrollToTop();
  };
  render() {
    return (
      <nav className="nav">
        <div className="nav-content">
          <img
            title="Click to scroll to top"
            src={logo}
            className="nav-logo"
            alt="Logo"
            onClick={this.scrollToTop}
          />
          <ul className="nav-items">
            <li className="nav-item">
              <Link
                activeClass="active"
                to="travel"
                spy={true}
                smooth={true}
                offset={-70}
                duration={1000}
              >
                Travel
              </Link>
            </li>
            <li className="nav-item">
              <Link
                activeClass="active"
                to="art"
                spy={true}
                smooth={true}
                offset={-70}
                duration={1000}
              >
                Exploring Art within
              </Link>
            </li>
            <li className="nav-item">
              <Link
                activeClass="active"
                to="cook"
                spy={true}
                smooth={true}
                offset={-70}
                duration={1000}
              >
                Cooking
              </Link>
            </li>
            <li className="nav-item">
              <Link
                activeClass="active"
                to="needs"
                spy={true}
                smooth={true}
                offset={-70}
                duration={1000}
              >
                Find what your body needs
              </Link>
            </li>
            <li className="nav-item">
              <Link
                activeClass="active"
                to="contact"
                spy={true}
                smooth={true}
                offset={-70}
                duration={1000}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navigator;
