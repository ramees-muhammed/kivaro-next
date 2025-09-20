"use client";

import React from "react";
import "./HomeBanner.css";
import Image from "next/image";
import Button from "@/components/ui/Button";
import { useRouter } from "next/navigation";
import { useTheme } from "@/app/context/ThemeProvider";

const HomeBanner = () => {
  const router = useRouter();
    const { theme } = useTheme();

  const whatsappNumber = "917736277001";
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=Hi%20Kivaro%20Labs,%20I%20would%20like%20to%20discuss%20a%20project.`;

  return (
    <section id="home" className="wrapper-section home-banner-section">
      <div className="banner-container">
        <div className="banner-image-wrapper">
          {theme === "dark" ? (
            <Image
              src="/images/home/home-banner.svg"
              alt="home-banner"
              width={652}
              height={652}
              priority
            />
          ) : (
            <Image
              src="/images/home/lightTheme/home_banner_light.svg"
              alt="home-banner"
              width={652}
              height={652}
              priority
            />
          )}
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

          <div className="banner-btns mt-5">
            <Button
              variant="primary"
              onClick={() => router.push("/contact")}
              data-action="start"
            >
              Start Your Project
            </Button>
            <Button
              onClick={() => window.open(whatsappLink, "_blank")}
              data-action="talk"
            >
              Talk to Our Experts
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeBanner;
