import React, { Component } from "react";

function PageSyntax({ heading, subText, imageUrl, id, order }) {
  const divStyle = {
    background: `url(${imageUrl})`,
    backgroundRepeat: "repeat",
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundAttachment: "initial",
    backgroundClip: "border-box",
    backgroundColor: "initial",
    opacity: "0.7",
    height: "70vh",
    marginTop: "0px",
  };

  if (order === "1") {
    return (
      <div style={{ height: "70vh", display: "flex" }}>
        <img src={imageUrl} alt={heading} />
        <div id={id}>
          <h4 style={{ margin: "0 auto", padding: "10px" }}>{heading}</h4>
          <p>{subText}</p>
        </div>
      </div>
    );
  } else {
    return (
      <div style={{ height: "70vh", display: "flex" }}>
        <div id={id}>
          <h4 style={{ margin: "0 auto", padding: "10px" }}>{heading}</h4>
          <p>{subText}</p>
        </div>
        <img src={imageUrl} alt={heading} />
      </div>
    );
  }
}

export default PageSyntax;
