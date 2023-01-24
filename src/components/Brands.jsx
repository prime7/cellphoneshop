import React from "react";
import img1 from "../images/phones/1.png";
import img2 from "../images/phones/2.png";
import img3 from "../images/phones/3.png";
import img4 from "../images/phones/4.png";
import img5 from "../images/phones/5.png";
import img6 from "../images/phones/6.png";
import img7 from "../images/phones/7.png";
import img8 from "../images/phones/8.png";

export default function Brands() {
  return (
    <section className="team" id="team">
      <h1 className="heading">
        All Cell Phone Brands <span>We Are Repairing</span>
      </h1>

      <div className="box-container">
        <img src={img1} alt="" className="box" />
        <img src={img2} alt="" className="box" />
        <img src={img3} alt="" className="box" />
        <img src={img4} alt="" className="box" />
        <img src={img5} alt="" className="box" />
        <img src={img6} alt="" className="box" />
        <img src={img7} alt="" className="box" />
        <img src={img8} alt="" className="box" />
      </div>
    </section>
  );
}
