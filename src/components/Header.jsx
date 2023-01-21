import React from "react";
import { headerContent } from "../content/constants";

export default function Header() {
  return (
    <header className="header">
      <div className="contact-info">
        <p>
          <i className="fas fa-map"></i> {headerContent.address}
        </p>
        <p>
          <i className="fas fa-envelope"></i> {headerContent.email}
        </p>
        <p>
          <i className="fas fa-phone"></i> {headerContent.phone}
        </p>
      </div>

      <nav className="navbar">
        <a href="#" className="logo">
          <i className="fas fa-tools"></i> fixpro
        </a>

        <div className="links">
          <a href="#home">home</a>
          <a href="#about">about</a>
          <a href="#services">services</a>
          <a href="#gallery">gallery</a>
          <a href="#team">team</a>
          <a href="#reviews">reviews</a>
          <a href="#contact">contact</a>
        </div>

        <div id="menu-btn" className="fa fa-bars"></div>
      </nav>
    </header>
  );
}
