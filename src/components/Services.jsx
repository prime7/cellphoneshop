import React from "react";
import { getSrc, StaticImage } from "gatsby-plugin-image";
import { serviceContent } from "../content/constants";

export default function Services() {
  const images = [
    <StaticImage src="../images/service-1.svg" alt="asd" />,
    <StaticImage src="../images/service-2.svg" alt="asd" />,
    <StaticImage src="../images/service-3.svg" alt="asd" />,
    <StaticImage src="../images/service-4.svg" alt="asd" />,
    <StaticImage src="../images/service-5.svg" alt="asd" />,
    <StaticImage src="../images/service-6.svg" alt="asd" />,
  ];
  return (
    <section className="services" id="services">
      <h1 className="heading">
        our <span>services</span>
      </h1>

      <div className="box-container">
        {serviceContent.map((service, idx) => (
          <div className="box">
            {images[idx]}
            <h3>{service.name}</h3>
            <p>{service.detail}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
