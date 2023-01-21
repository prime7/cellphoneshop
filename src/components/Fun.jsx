import React from "react";
import icon1 from "../images/fun-fact-icon-1.svg";
import icon2 from "../images/fun-fact-icon-2.svg";
import icon3 from "../images/fun-fact-icon-3.svg";
import icon4 from "../images/fun-fact-icon-4.svg";

export default function Fun() {
  return (
    <section className="fun-fact">
      <div className="box">
        <img src={icon1} alt="" />
        <div className="info">
          <h3>2890</h3>
          <p>repairs done</p>
        </div>
      </div>

      <div className="box">
        <img src={icon2} alt="" />
        <div className="info">
          <h3>25</h3>
          <p>awards won</p>
        </div>
      </div>

      <div className="box">
        <img src={icon3} alt="" />
        <div className="info">
          <h3>3585</h3>
          <p>happy clients</p>
        </div>
      </div>

      <div className="box">
        <img src={icon4} alt="" />
        <div className="info">
          <h3>45</h3>
          <p>active workers</p>
        </div>
      </div>
    </section>
  );
}
