import React from "react";
import imageSrc from "../images/about-img.svg";

export default function About() {
  return (
    <section className="about" id="about">
      <div className="content">
        <h3>best quality Repair services</h3>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim
          laboriosam quidem eaque, ex qui fugit velit veniam veritatis a nostrum
          amet perspiciatis pariatur ducimus ipsam officiis quae cumque maiores
          voluptates!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus
          iste ab eos ea rerum obcaecati illo ex recusandae expedita aspernatur?
        </p>
        <a href="#services" className="btn">
          read more
        </a>
      </div>

      <div className="image">
        <img src={imageSrc} alt="" />
      </div>
    </section>
  );
}
