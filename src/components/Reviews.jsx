import React from "react";
import img1 from "../images/pic-1.png";
import img2 from "../images/pic-2.png";
import img3 from "../images/pic-3.png";

export default function Reviews() {
  return (
    <section className="reviews" id="reviews">
      <h1 className="heading">
        {" "}
        clients <span>reviews</span>{" "}
      </h1>

      <div className="box-container">
        <div className="box">
          <div className="star">
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
          </div>
          <div className="text">
            <i className="fas fa-quote-right"></i>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi
              animi alias consequatur sint doloribus illo vitae mollitia, iusto
              excepturi nobis.
            </p>
          </div>
          <div className="user">
            <img src={img1} alt="" />
            <h3>john deo</h3>
          </div>
        </div>

        <div className="box">
          <div className="star">
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
          </div>
          <div className="text">
            <i className="fas fa-quote-right"></i>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi
              animi alias consequatur sint doloribus illo vitae mollitia, iusto
              excepturi nobis.
            </p>
          </div>
          <div className="user">
            <img src={img2} alt="" />
            <h3>john deo</h3>
          </div>
        </div>

        <div className="box">
          <div className="star">
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
          </div>
          <div className="text">
            <i className="fas fa-quote-right"></i>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi
              animi alias consequatur sint doloribus illo vitae mollitia, iusto
              excepturi nobis.
            </p>
          </div>
          <div className="user">
            <img src={img3} alt="" />
            <h3>john deo</h3>
          </div>
        </div>
      </div>
    </section>
  );
}
