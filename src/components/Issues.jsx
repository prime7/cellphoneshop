import React from "react";
import { StaticImage } from "gatsby-plugin-image";

export default function Issues() {
  return (
    <div>
      <h1 style={{ fontSize: "3rem", color: "orange", textAlign: "center" }}>
        How Do We Restore These 3 Frequent Cell Phone Issues
      </h1>
      <section className="about">
        <div className="content">
          <h3>Cell Phone Screen Repair and replacements:</h3>
          <p>
            The most distinct and usual issue for any cell phone buyer is
            possibly a damaged or broken screen. Cell phone screen damage can
            introduce itself in innovative ways. Including cracks on the glass
            or stained areas, blemish, or other display issues, for
            illustration, dead pixels or, indeed, total darkness, is the result
            of the damaged screen to the hidden display that each mobile phone
            customer has endured. In this case, we’ve hired some of the
            best-certified technicians in our shops to repair and replace your
            cell phone’s screen in Canada.
          </p>

          <p>
            After greetings your appearance in the shop, they will diagnose the
            cell phone’s screen repair and enlighten you about the exact issue
            on your phone. If it’s fixable, let me know about it, and I will
            repair it in under 30 to 40 twinkles, and it’ll also bring you lower
            than replacing. However, our technician will guide you about the new
            screen’s quality and price, letting you know which one will be
            perfect for your phone If it’s not fixable and the screen needs to
            be replaced. Utmost of our cell phone repairs and replacements are
            done in 30 to 40 minutes.
          </p>
        </div>

        <StaticImage src="../images/issue-1.png" alt="" />
      </section>

      <section className="about">
        <StaticImage src="../images/issue-2.png" alt="" />
        <div className="content" style={{ textAlign: "right" }}>
          <h3>Battery Replacement:</h3>

          <p>
            Cell phone batteries or any other batteries are substantially not
            repairable. A cell phone’s battery in Canada only ends when it’s
            entirely dead or enlarged, and that’s when it gets inclined off.
            These batteries aren’t repairable, and indeed if there would- be a
            technician that repaired them but they won’t give you any guarantee
            or surety on how long it’ll last. That’s why our professionals who
            are cell phone repair technicians recommend consumers replace their
            batteries in mobile phones and also give them a 6 – month satisfying
            guarantee on it.
          </p>

          <p>
            A unique service that Fast Cell Repair provides customers is booking
            an appointment (Book a Repair) with the technicians in the shop. You
            can easily book any repair online, and our calling department will
            guide you and make it easier for you to get your smartphone repaired
            and save time for our customers.
          </p>
        </div>
      </section>

      <section className="about">
        <StaticImage src="../images/issue-3.png" alt="" />
        <div className="content">
          <h3>Charging Port Replacement:</h3>

          <p>
            Is your phone not detecting any signs of charging? Or do you feel a
            little bit of floppiness when you are plugging your charger into the
            charging port? Then It may be a good time to repair your phone’s
            charging port. In case if you’re experiencing trouble charging your
            phone, we can assume that there could be an issue causing it to do
            that. For instance, it is possible that either liquid came into
            contact with your cell phone’s charging port or it might be dust
            particles or lint, or one of the pins can also be broken. Different
            side effects of a bad dock connector can include not recognizing
            your phone when it’s connected to the PC.
          </p>

          <p>
            When you will book a repair regarding your charging port issue
            online from us, our first priority will be to clean the port of your
            phone cause sometimes there is a little bit of dirt stuck into the
            phone’s charging port. Our expert technicians will gently and
            carefully scrape out that dirt and this service will save you a lot
            of money and we will also let you know about it. Other technicians
            or smartphone service providers will never let you know about the
            exact issue, on which they will try to charge you a lot of money.
            Many times there is only a small problem on your phone and only the
            technicians know about it. What separates us from them is that we
            repair your mobile phone in front of you so that you can observe
            what’s the issue with your phone and all of it will be done in just
            30 to 40 minutes. If the worst-case scenario comes, which could be
            the replacement of your charging port our technician will definitely
            let you know about it and will replace it on your confirmation.
          </p>
        </div>
      </section>
    </div>
  );
}
