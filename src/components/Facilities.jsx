import React from "react";

export default function Facilities() {
  return (
    <section className="facilities">
      <h1 className="heading">
        {" "}
        why <span>choose us?</span>{" "}
      </h1>

      <div className="box-container">
        <div className="box">
          <img src="images/why-choose-icon-1.svg" alt="" />
          <h3>Quick & convenient</h3>
          <p>
            We make repairs easy, we know how important your device is to you,
            so we promise to return your device as early as possible.
          </p>
        </div>

        <div className="box">
          <img src="images/why-choose-icon-2.svg" alt="" />
          <h3>Free diagnostics</h3>
          <p>If you know the problem, we give clear upfront pricing.</p>
          <p>
            If you don’t know the problem, we will diagnose and give a flat rate
            quote.
          </p>
        </div>

        <div className="box">
          <img src="images/why-choose-icon-3.svg" alt="" />
          <h3>Lifetime warranty</h3>
          <p>
            Hassle free warranty claims for qualified repairs, we stand pro of
            our warranties we offer.
          </p>
        </div>
      </div>
    </section>
  );
}
