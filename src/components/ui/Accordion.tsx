"use client";
import { useState } from "react";
import "./Accordion.css";

export interface AccordionItem {
  title: string;
  content: string;
}

interface AccordionProps {
  items: AccordionItem[];
}

const Accordion = ({ items }: AccordionProps) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="accordion-container">
      {items.map((item, index) => (
        <div key={index} className="accordion-item">
          {/* Header */}
          <div
            className="accordion-header"
            onClick={() => toggleAccordion(index)}
          >
            <div className="dot"></div>
            <p>
              <strong>{item.title}</strong>
            </p>
            <span className="arrow">
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className={openIndex === index ? "open" : ""}
              >
                <path
                  d="M2.33464 4.90958L6.17682 8.75182C6.39656 8.96842 6.69272 9.08984 7.0013 9.08984C7.30989 9.08984 7.60604 8.96842 7.82579 8.75182L11.668 4.90958"
                  stroke="var(--heading-color)"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </div>

          {/* Body */}
          <div
            className={`accordion-body ${
              openIndex === index ? "open" : ""
            }`}
          >
            <p>{item.content}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
