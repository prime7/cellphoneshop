import React from "react";
import { headerContent } from "../content/constants";

export default function Footer() {
  return (
    <section className="footer">
      <div className="box-container">
        <div className="box">
          <h3>quick links</h3>
          <a className="link" href="#home">
            <i className="fas fa-angle-right"></i> home
          </a>
          <a className="link" href="#about">
            <i className="fas fa-angle-right"></i> about
          </a>
          <a className="link" href="#services">
            <i className="fas fa-angle-right"></i> services
          </a>
          <a className="link" href="#gallery">
            <i className="fas fa-angle-right"></i> gallery
          </a>
          <a className="link" href="#team">
            <i className="fas fa-angle-right"></i> team
          </a>
          <a className="link" href="#reviews">
            <i className="fas fa-angle-right"></i> reviews
          </a>
          <a className="link" href="#contact">
            <i className="fas fa-angle-right"></i> contact
          </a>
        </div>

        <div className="box">
          <h3>opening hours</h3>
          <p>
            <span>monday :</span> 10:00am to 00:09pm{" "}
          </p>
          <p>
            <span>tuesday :</span> 10:00am to 00:09pm{" "}
          </p>
          <p>
            <span>wednesday :</span> 10:00am to 00:09pm{" "}
          </p>
          <p>
            <span>thursday :</span> 10:00am to 00:09pm{" "}
          </p>
          <p>
            <span>friday :</span> 10:00am to 00:09pm{" "}
          </p>
          <p>
            <span>saturday :</span> 10:00am to 00:09pm{" "}
          </p>
          <p>
            <span>sunday :</span> closed{" "}
          </p>
        </div>

        <div className="box">
          <h3>contact info</h3>
          <a href="#" className="link">
            <i className="fas fa-phone"></i> {headerContent.phone}
          </a>
          <a href="#" className="link">
            <i className="fas fa-envelope"></i> {headerContent.email}
          </a>
          <a href="#" className="link">
            <i className="fas fa-map"></i> {headerContent.address}
          </a>
        </div>

        {/* <div className="box">
          <h3>newsletter</h3>
          <p>subscribe for latest updates</p>
          <form action="">
            <input
              type="email"
              name=""
              placeholder="enter your email"
              id=""
              className="email"
            />
            <input type="submit" value="subscribe" className="btn" />
          </form>
          <div className="share">
            <a href="#" className="fab fa-facebook-f"></a>
            <a href="#" className="fab fa-twitter"></a>
            <a href="#" className="fab fa-instagram"></a>
            <a href="#" className="fab fa-linkedin"></a>
          </div>
        </div> */}
      </div>

      <div className="credit">
        created by <span>mr. web designer</span> | all rights reserved!{" "}
      </div>
    </section>
  );
}
