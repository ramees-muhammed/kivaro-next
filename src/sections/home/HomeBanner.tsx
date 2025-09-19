import React from "react";
import "./HomeBanner.css";
import Image from "next/image";

const HomeBanner = () => {
  return (
    <section id="home" className="wrapper-section home-banner-section">
      <div className="banner-container">
        <div className="banner-image-wrapper">
          <Image
            src="/images/home/home-banner.svg"
            alt="home-banner"
            width={652}
            height={652}
            priority
          />
        </div>

        <div className="banner-contents-wrapper">
          <div>
            <h1>
              Code the Future. <br /> Lead the Change.
            </h1>
            <p className="desktop-home-banner-content text-md-start">
              Kivarolabs creates smart software solutions for businesses by
              simplifying complex challenges, enabling your business to grow
              faster.
            </p>
            <p className="mobile-home-banner-content d-md-none text-start">
              We build smart, scalable software that helps your business grow
              fast and stay ahead.
            </p>
          </div>

          <div>
            <h1>butttt</h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeBanner;
