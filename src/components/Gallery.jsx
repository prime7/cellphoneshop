import { StaticImage } from "gatsby-plugin-image";
import React from "react";

export default function Gallery() {
  return (
    <section className="gallery" id="gallery">
      <h1 className="heading">
        our <span>gallery</span>
      </h1>

      <div className="gallery-container">
        <div className="box">
          <StaticImage src="../images/g-img-1.jpg" alt="" />
        </div>
        <div className="box">
          <StaticImage src="../images/g-img-2.jpg" alt="" />
        </div>
        <div className="box">
          <StaticImage src="../images/g-img-3.jpg" alt="" />
        </div>
        <div className="box">
          <StaticImage src="../images/g-img-4.jpg" alt="" />
        </div>
        <div className="box">
          <StaticImage src="../images/g-img-5.jpg" alt="" />
        </div>
        <div className="box">
          <StaticImage src="../images/g-img-6.jpg" alt="" />
        </div>
      </div>
    </section>
  );
}
