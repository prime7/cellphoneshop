import React from "react";
import imageSrc from "../images/about-img.svg";

export default function About() {
  return (
    <section className="about" id="about">
      <div className="content">
        <h3>best quality Repair services</h3>
        <p>
          Welcome to Prime Cell Repair, the best cellphone repair shop in
          Vancouver. We offer a range of services for phones, iPads, laptops,
          tablets, and MacBooks, as well as all the necessary accessories. Our
          top priority is meeting the needs of our customers, which is why we
          offer affordable pricing and do our best to help them out when their
          devices are broken. We have a proven track record of providing the
          best service to our customers and retaining them through our use of
          OEM parts, ability to handle even the worst situations, and our
          recommendation of the right solutions. Whether you need to fix a
          broken phone, purchase a new one, or find the best pre/postpaid plans,
          we've got you covered. Plus, we offer a price match guarantee,
          lifetime warranty, and quick turnaround time with premium quality
          parts. Visit us today and see for yourself why we're the best!"
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
