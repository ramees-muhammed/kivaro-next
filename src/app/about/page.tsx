import React from "react";

const About = () => {
  return (
    <section className="about_banner_section wrapper-section">
      <div className="about_banner">
        <img src="/images/banner-background.png" alt="about-banner" />

        <div className="about_banner_content">
          <h1>Who we are</h1>
          <div style={{ textAlign: "justify" }}>
            <p>
              Kivarolabs Integrated Technologies is a full-spectrum software
              company that builds both products and services to drive business
              success. We blend strategy, design, and engineering to create
              powerful, scalable solutions — whether it’s our own platforms or
              custom systems built for clients.
            </p>
            <br />
            <p>
              As passionate technologists and problem-solvers, we help
              organizations embrace the digital future with confidence. From
              early-stage startups to global enterprises, we deliver intuitive,
              AI-driven, and domain-specific solutions that transform bold ideas
              into reality
            </p>
          </div>

          <div className="about-banner-ring">
            <svg
              width="682"
              height="354"
              viewBox="0 0 682 354"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M562.666 2.63702C620.234 -2.74239 659.267 4.44623 667.609 25.7203C685.766 72.025 551.648 167.526 368.047 239.028C184.446 310.53 20.8892 330.956 2.73231 284.651C-5.79855 262.896 19.2858 230.279 67.325 194.394"
                stroke="white"
                strokeWidth="0.669851"
                strokeMiterlimit="10"
              />
              <path
                d="M576.859 45.9177C633.236 40.7791 671.397 47.9896 679.595 69.0352C697.619 115.306 563.988 210.931 381.121 282.62C198.253 354.309 35.3989 374.914 17.3749 328.644C9.06706 307.318 32.9757 275.507 79.0727 240.389C79.9681 239.707 82.5174 237.665 83.4297 236.981"
                stroke="white"
                strokeWidth="0.669851"
                strokeMiterlimit="10"
              />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
