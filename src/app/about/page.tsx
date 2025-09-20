import Accordion, { AccordionItem } from "@/components/ui/Accordion";
import Blob from "@/components/ui/Blob";
import { coreValuesData } from "@/utils/coreValuesData";
import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <>
    <Blob/>
      <section className="about_banner_section wrapper-section">
        <div className="about_banner">
          <Image
            src="/images/banner-background.svg"
            alt="about-banner"
            width={796}
            height={796}
            priority
          />

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
                early-stage startups to global enterprises, we deliver
                intuitive, AI-driven, and domain-specific solutions that
                transform bold ideas into reality
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

      <section className="mission-section">
        <div className="mission_vision_list">
          <div className="about_mission_vision">
            <div className="about_mission_content">
              <div className="dot"></div>
              <h2>Mission</h2>
            </div>
            <div>
              <p>
                To design and deliver future-proof software platforms that
                empower businesses to grow and lead through technology
              </p>
            </div>
          </div>

          <div className="about_mission_vision">
            <div className="about_mission_content">
              <div className="dot"></div>
              <h2>Vision</h2>
            </div>
            <div>
              <p>
                Shaping a future where smart, trustworthy technology drives
                business growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* about banner section mobile-------------------- */}

      <section className="d-md-none wrapper-section">
        <div className="about-banner-wrapper-mobile">
          <h1>Who we are</h1>
          <p>
            Kivarolabs builds products and custom software that help businesses
            of all sizes embrace the digital future.
          </p>
        </div>

        <div className="about-banner-contents-wrapper-mobile">
          <div className="about-banner-content-mobile">
            <div className="about-banner-content-list-mobile">
              <div className="dot"></div>
              <p>Mission</p>
            </div>
            <p>
              To design and deliver future-proof software platforms that empower
              businesses to grow and lead through technology.
            </p>
          </div>

          <div className="about-banner-content-mobile">
            <div className="about-banner-content-list-mobile">
              <div className="dot"></div>
              <p>Vision</p>
            </div>
            <p>
              Shaping a future where smart, trustworthy technology drives
              business growth.
            </p>
          </div>
        </div>
      </section>
      {/* about banner section mobile-------------------- */}

      {/* Core Values desktop------------------------------------------ */}
      <section className="core_values_section wrapper-section">
        <div className="core_values_list_wrapper">
          <h1 className="text-center">Our Core Values</h1>
          {coreValuesData.map((value, i) => (
            <div key={i} className="core_values_content mt-5">
              <div className="dot"></div>
              <div className="d-flex">
                <p>
                  <b>
                    <strong style={{ color: "var(--white)" }}>
                      {value?.title}{" "}
                    </strong>
                  </b>
                  – {value?.content}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
      {/* Core Values desktop------------------------------------------ */}

      {/*  Core Values mobile------------------------------- */}
      <section className="d-md-none wrapper-section">
        <h1 className="text-center">What we stand for</h1>
        <div className="about-core-value-mobile mt-4">
          <Accordion items={coreValuesData as AccordionItem[]} />
        </div>
      </section>
      {/*  Core Values mobile------------------------------- */}

      {/* How we work section-------------------- */}
      <section className="wrapper-section theme-bg-section How-we-work-wrapper">
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div>
            <h1 className="text-center">How we work</h1>
          </div>

          <div className="circle-container">
            <Image
              src="/images/about_circle_light_theme.svg"
              alt="circle-img"
              width={796}
              height={796}
              priority
            />
          </div>
        </div>
      </section>

      {/* How we work section-------------------- */}
    </>
  );
};

export default About;
