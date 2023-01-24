import React from "react";
import {
  About,
  Contact,
  Facilities,
  Footer,
  Fun,
  Gallery,
  Header,
  Home,
  Reviews,
  Brands,
  Services,
  Issues,
} from "../components";
import "../css/style.css";

export default function index() {
  return (
    <div>
      <Header />
      <Home />
      <Fun />
      <About />
      <Services />
      <Gallery />
      <Facilities />
      <Brands />
      <Issues />
      <Reviews />
      <Contact />
      <Footer />
    </div>
  );
}

export const Head = () => (
  <title>
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
    />
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/lightgallery-js/1.4.0/css/lightgallery.min.css"
    />
    Mobile Phone Repair Shop
  </title>
);
