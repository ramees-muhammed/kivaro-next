"use client";
import "./Sectors.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { sectorsData } from "@/utils/sectorsData";

const Sectors = () => {
  return (
    <section id="sectors" className="solutions wrapper-section theme-bg-section">
      <div className="sectors_wrapper">
        {/* Desktop Header */}
        <div className="solution_header text-center d-none d-md-block">
          <h1>Solutions That Fit Your Industry</h1>
          <p>
            We work with many industries to build tailored solutions that
            deliver real results — from digitizing workflows to improving
            efficiency and automating systems.
          </p>
        </div>

        {/* Mobile Header */}
        <div className="solution_header_mobile d-md-none text-center">
          <h1>Industries We Serve</h1>
        </div>

        {/* Desktop Grid */}
        <div className="sectors_container d-none d-md-flex">
          <div className="solutions_wrapper">
            {sectorsData.map((sector, index) => (
              <div className="solution_card" key={index}>
                <img src={sector.img} alt={sector.label} />
                <p>{sector.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Carousel */}
        <div className="d-md-none relative">
          <Swiper
            modules={[Pagination, Autoplay]}
            pagination={{
              clickable: true,
              el: ".custom-pagination",
              bulletClass: "custom-bullet",
              bulletActiveClass: "custom-bullet-active",
            }}
            spaceBetween={30}
            slidesPerView={1}
            loop
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            className="mobile-carousel"
          >
            {sectorsData.map((sector, index) => (
              <SwiperSlide key={index}>
                <div className="carousel-item">
                    <div>
                          <img
                    src={sector.img}
                    alt={sector.label}
                    className="carousel-img"
                  />
                    </div>
                  <div>
                    <p className="carousel-caption">{sector.label}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom pagination dots */}
          <div className="custom-pagination"></div>
        </div>
      </div>
    </section>
  );
};

export default Sectors;
