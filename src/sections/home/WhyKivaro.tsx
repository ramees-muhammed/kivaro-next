"use client";
import Accordion from "@/components/ui/Accordion";
import "./HomeBanner.css";
import { developmentData } from "@/utils/developmentData";
import Image from "next/image";

const WhyKivaro = () => {
  return (
    <>
      {/* Desktop Section */}
      <section className="wrapper-section d-none d-md-block">
        <div className="development-container">
          <div className="development-content-container">
            <h1>Why Kivarolabs?</h1>

            <div className="development-content-wrapper">
              {developmentData.map((item, index) => (
                <div key={index} className="development-content-list mt-3">
                  <div className="dot"></div>
                  <div>
                    <p style={{ color: "var(--white)" }}>
                      <strong>{item.title}</strong>
                    </p>
                    <p>{item.content}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="development-img-section">
            <Image
              src="/images/home/development-bg.svg"
              alt="development-img"
              width={644}
              height={644}
              priority
            />
          </div>
        </div>
      </section>

      {/* Mobile Accordion Section */}
      <section className="d-md-none wrapper-section">
        <div className="development-container-mobile">
          <h1 className="text-center">Why us?</h1>
          <Accordion items={developmentData} />
        </div>
      </section>
    </>
  );
};

export default WhyKivaro;
