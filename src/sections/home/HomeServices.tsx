
"use client";
import { useState, useEffect } from "react";
import "./HomeServices.css";
import { serviceData } from "@/utils/gridCardServices";

const HomeServices = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  // Detect window size
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    handleResize(); // run on mount
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleAccordion = (index: number) => {
    if (!isMobile) return; // disable accordion on desktop
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section  id="services" className="services_section wrapper-section theme-bg-section">
      <div>
        <h1>What we do</h1>
      </div>

      <div className="list_services">
        {serviceData.map((service, index) => (
          <div
            key={index}
            className={`service ${activeIndex === index ? "active" : ""}`}
          >
            <div
              className="service_head"
              onClick={() => toggleAccordion(index)}
            >
              <div className="icon_box">{service.icon}</div>
             <h2><b><strong>{service.title}</strong></b></h2>

              {isMobile && (
                <div
                  className={`service_arrow ${
                    activeIndex === index ? "open" : ""
                  }`}
                >
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2.33464 4.90958L6.17682 8.75182C6.39656 8.96842 6.69272 9.08984 7.0013 9.08984C7.30989 9.08984 7.60604 8.96842 7.82579 8.75182L11.668 4.90958"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              )}
            </div>

            {/* Service body (accordion) */}
            <div
              className="service_body"
              style={{
                display: isMobile
                  ? activeIndex === index
                    ? "block"
                    : "none"
                  : "block",
              }}
            >
              <p>{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HomeServices;
