import React from "react";
import { homeContent } from "../content/constants";
import imageSrc from "../images/home-img.svg";

export default function Home() {
  return (
    <section className="home" id="home">
      <div className="image">
        <img src={imageSrc} alt="" />
      </div>

      <div className="content">
        <h3>{homeContent.title}</h3>
        <p>{homeContent.text}</p>
        <a href="#about" className="btn">
          {homeContent.actionButton}
        </a>
      </div>
    </section>
  );
}
