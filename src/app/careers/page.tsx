import React from "react";
import { Image } from "react-bootstrap";

const Careers = () => {
  return (
    <>
      <section className="wrapper-section career_section_banner">
        <div className="career_section_banner_right">
          <div>
            <h1>
              Build the Future <br />
              with Us
            </h1>
            <p className="mt-5 text-start">
              If you’re driven by creativity, fueled by purpose, and <br />
              obsessed with problem-solving, we’d love to work with you.
            </p>

            <div className="banner-btns mt-5">
              <button className="banner-btn primary-btn">Send your CV</button>
              <button className="banner-btn">Follow us on Linkedin</button>
            </div>
          </div>
        </div>

        <div className="career_section_banner_left">
          <Image
            src={"/images/career-banner.png"}
            alt="career-banner-img"
          />
        </div>
      </section>

      {/* career connect section---------------------------------------------------------> */}
      <section className="career_connect_container wrapper-section">
        <div className="career_connect_wrapper">
          <h1>
            Let’s Build What’s Next <br />
            Together
          </h1>

          <p className="mt-3">
            Apply to an open role or just reach out. We’re always <br />
            looking for talented people.
          </p>

          <div className="banner-btns d-flex justify-content-center mt-5">
            <button className="banner-btn primary-btn">Send your CV</button>
            <button className="banner-btn">Follow us on Linkedin</button>
          </div>
        </div>
      </section>
      {/* career connect section---------------------------------------------------------> */}

      {/*   career connect section mobileeeee------------------------------------------------------> */}
      <div className="career_connect_wrapper_mobile d-md-none wrapper-section">
        <h1>Let’s Work Together</h1>
        <p>
          If you’re driven by creativity, purpose, and <br />
          problem-solving, we’d love to work with you.
        </p>

        <div className="banner-btns d-flex justify-content-center mt-5">
          <button className="banner-btn primary-btn" data-action="cv">
            Send your CV
          </button>
          <button className="banner-btn" data-action="linkedin">
            Follow us on Linkedin
          </button>
        </div>
      </div>
      {/*   career connect section mobileeeee------------------------------------------------------> */}
    </>
  );
};

export default Careers;
