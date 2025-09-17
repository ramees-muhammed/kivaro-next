import "./Consultation.css";

const Consultation = () => {
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
          <button>Book a Free Consultation</button>
          <button>Share Your Requirements</button>
        </div>
      </div>

      <div className="consultation_wrapper_mobile d-md-none">
        <h1>Got an Idea?</h1>
        <button className="banner-btn primary-btn">
          <a className="banner-btn mobile-btn">Let’s Talk</a>
        </button>
      </div>
    </section>
  );
};

export default Consultation;
