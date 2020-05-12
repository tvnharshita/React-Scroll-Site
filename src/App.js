import React from "react";
// import logo from "./logo.svg";
import "./App.css";
import Introduction from "./components/introduction";
import PageSyntax from "./components/pageSyntax";
import innerText from "./components/texter";
import HomeImage from "./images/HomePageImage.jpg";
import Navigator from "./components/navigator";
import art from "./images/Art.jpg";
import travel from "./images/Travel3.jpg";
import cook from "./images/Cooking1.jpg";
import needs from "./images/needs.jpg";
import sharing from "./images/share.jpg";

function App() {
  return (
    <div className="App">
      <Navigator />
      <Introduction />
      <PageSyntax
        heading="Travel"
        subText={innerText}
        imageUrl={travel}
        id="travel"
        order="0"
      />
      <PageSyntax
        heading="Exploring Art within"
        subText={innerText}
        imageUrl={art}
        id="art"
        order="1"
      />
      <PageSyntax
        heading="Cooking"
        subText={innerText}
        imageUrl={cook}
        id="cook"
        order="0"
      />

      <PageSyntax
        heading="Find what your body needs"
        subText={innerText}
        imageUrl={needs}
        id="needs"
        order="1"
      />
      <PageSyntax
        heading="Contact"
        subText={innerText}
        imageUrl={sharing}
        id="contact"
        order="0"
      />
    </div>
  );
}

export default App;
