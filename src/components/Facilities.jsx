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
          <h3>24/7 support</h3>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat
            eveniet illum eum cumque tempore. Quo nobis mollitia quis libero
            ipsa?
          </p>
        </div>

        <div className="box">
          <img src="images/why-choose-icon-2.svg" alt="" />
          <h3>quality service</h3>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat
            eveniet illum eum cumque tempore. Quo nobis mollitia quis libero
            ipsa?
          </p>
        </div>

        <div className="box">
          <img src="images/why-choose-icon-3.svg" alt="" />
          <h3>quick repair</h3>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat
            eveniet illum eum cumque tempore. Quo nobis mollitia quis libero
            ipsa?
          </p>
        </div>
      </div>
    </section>
  );
}
