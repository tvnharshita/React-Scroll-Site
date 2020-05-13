import React, { Component } from "react";
import "./introduction.css";
import IntroImage from ".././images/IntroImage.jpg";
import { Link, animateScroll as scroll } from "react-scroll";

const menuItems = ["Home", "About", "Contact", "Questions"];
const navStyle = {
  background: `url(${IntroImage})`,
  width: "100%",
  marginTop: "0px",
  backgroundRepeat: "repeat",
  backgroundPosition: "center",
  backgroundSize: "cover",
  backgroundAttachment: "initial",
  backgroundClip: "border-box",
  backgroundColor: "initial",
};

class Introduction extends Component {
  render() {
    return (
      <div>
        <nav style={navStyle}>
          {/* <ul>
            {menuItems.map((item) => {
              return (
                <li key={item.toLowerCase}>
                  <Link
                    to={item.toLowerCase}
                    activeClass="active"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                  >
                    {item}
                  </Link>
                </li>
              );
            })} 
            
          </ul>*/}
          <div className="basket" id="someId">
            <h3>Nature's Basket</h3>
            <p>Self-exploration ideas by Harshita TVN</p>
          </div>
        </nav>
      </div>
    );
  }
}

export default Introduction;
