"use client";

import Button from "@/components/ui/Button";
import "./Consultation.css";
import { useRouter } from "next/navigation";

const Consultation = () => {
  const router = useRouter();

  const whatsappNumber = "917736277001";
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=Hi%20Kivaro%20Labs,%20I%20would%20like%20to%20discuss%20a%20project.`;
  return (
    <section className="consultation wrapper-section">
      <div className="consultation_wrapper">
        <div>
          <h1>
            Have a Vision? <br />
            Let’s Turn It Into Software..
          </h1>

          <p className="mt-3">
            We’ll help you validate, prototype, build, launch, and scale <br />
            with a team that truly understands your goals.
          </p>
        </div>

        <div className="banner-btns d-flex justify-content-center mt-5">
          <Button
            variant="primary"
            onClick={() => router.push("/contact")}
            data-action="book"
          >
            Book a Free Consultation
          </Button>
          <Button onClick={()=> window.open(whatsappLink, "_blank")} data-action="requirements">Share Your Requirements</Button>
        </div>
      </div>

      <div className="consultation_wrapper_mobile d-md-none">
        <h1>Got an Idea?</h1>
        <Button variant="primary"  onClick={() => router.push("/contact")} data-action="talk" className="mobile-btn">
          Let’s Talk
        </Button>
      </div>
    </section>
  );
};

export default Consultation;
