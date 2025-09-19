import Image from "next/image";
import React from "react";

const NotFound = () => {
  return (
    <section className="error-page-container wrapper-section">
      <div className="error-page-wrapper">
        <Image
          src="/images/404 Error-banner.svg"
          alt="Page not found illustration"
          width={328}
          height={328}
          priority
        />
        <div className="error-contents">
          <h1>Page not found!</h1>
          <button className="banner-btn primary-btn">Back</button>
        </div>
      </div>
    </section>
  );
};

export default NotFound;
