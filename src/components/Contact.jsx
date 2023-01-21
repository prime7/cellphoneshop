import React from "react";

export default function Contact() {
  return (
    <section className="contact" id="contact">
      <h1 className="heading">
        {" "}
        <span>contact</span> us{" "}
      </h1>

      <div className="row">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4741.5256135445015!2d-113.49566627338885!3d53.5441492610701!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x53a022502b98dd2b%3A0xf3aca321b0f07acb!2sRoyal%20Alberta%20Museum!5e0!3m2!1sen!2sca!4v1674339128740!5m2!1sen!2sca"
          className="map"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>

        <form action="">
          <h3>get in touch</h3>
          <div className="inputBox">
            <input type="text" placeholder="name" />
            <input type="email" placeholder="email" />
          </div>
          <div className="inputBox">
            <input type="number" placeholder="phone" />
            <input type="text" placeholder="subject" />
          </div>
          <textarea
            name=""
            placeholder="message"
            id=""
            cols="30"
            rows="10"
          ></textarea>
          <input type="submit" value="send message" className="btn" />
        </form>
      </div>
    </section>
  );
}
