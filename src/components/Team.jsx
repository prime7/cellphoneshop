import React from "react";
import img1 from "../images/team-1.jpg";
import img2 from "../images/team-2.jpg";
import img3 from "../images/team-3.jpg";
import img4 from "../images/team-4.jpg";

export default function Team() {
  return (
    <section className="team" id="team">
      <h1 className="heading">
        {" "}
        our expert <span>team</span>{" "}
      </h1>

      <div className="box-container">
        <div className="box">
          <img src={img1} alt="" />
          <div className="content">
            <h3>john deo</h3>
            <p>electronic expert</p>
            <div className="share">
              <a href="#" className="fab fa-facebook-f"></a>
              <a href="#" className="fab fa-twitter"></a>
              <a href="#" className="fab fa-instagram"></a>
              <a href="#" className="fab fa-linkedin"></a>
            </div>
          </div>
        </div>

        <div className="box">
          <img src={img2} alt="" />
          <div className="content">
            <h3>john deo</h3>
            <p>electronic expert</p>
            <div className="share">
              <a href="#" className="fab fa-facebook-f"></a>
              <a href="#" className="fab fa-twitter"></a>
              <a href="#" className="fab fa-instagram"></a>
              <a href="#" className="fab fa-linkedin"></a>
            </div>
          </div>
        </div>

        <div className="box">
          <img src={img3} alt="" />
          <div className="content">
            <h3>john deo</h3>
            <p>electronic expert</p>
            <div className="share">
              <a href="#" className="fab fa-facebook-f"></a>
              <a href="#" className="fab fa-twitter"></a>
              <a href="#" className="fab fa-instagram"></a>
              <a href="#" className="fab fa-linkedin"></a>
            </div>
          </div>
        </div>

        <div className="box">
          <img src={img4} alt="" />
          <div className="content">
            <h3>john deo</h3>
            <p>electronic expert</p>
            <div className="share">
              <a href="#" className="fab fa-facebook-f"></a>
              <a href="#" className="fab fa-twitter"></a>
              <a href="#" className="fab fa-instagram"></a>
              <a href="#" className="fab fa-linkedin"></a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
