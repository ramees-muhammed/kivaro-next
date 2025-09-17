// src/app/contact/page.tsx
"use client";

import Image from "next/image";
import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

// ✅ Safe wrapper components to avoid hydration mismatch
type InputProps = React.InputHTMLAttributes<HTMLInputElement>;
const SafeInput = (props: InputProps) => (
  <input {...props} suppressHydrationWarning />
);

type TextAreaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement>;
const SafeTextarea = (props: TextAreaProps) => (
  <textarea {...props} suppressHydrationWarning />
);

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;
const SafeButton = (props: ButtonProps) => (
  <button {...props} suppressHydrationWarning />
);

const Contact = () => {
  // ✅ Yup validation schema
  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    phone: Yup.string()
      .matches(/^[0-9]+$/, "Phone must be numeric")
      .min(10, "Phone must be at least 10 digits")
      .nullable(),
    message: Yup.string().required("Message is required"),
  });

  // ✅ Formik setup
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
    validationSchema,
    onSubmit: (values, { resetForm }) => {
      console.log("Form Data:", values);

      // 👉 send data to backend API here
      // await fetch("/api/contact", { method: "POST", body: JSON.stringify(values) });

      alert("Thank you! Your message has been submitted.");
      resetForm();
    },
  });

  return (
    <section id="contactForm" className="contact-form-section wrapper-section">
      {/* Banner part */}
      <div className="contact-banner-wrapper">
        <div>
          <h1>Discuss with us</h1>
          <p className="mt-2">
            Whether you’ve got a challenge, an idea, or a roadmap, we’d love to
            hear from you.
          </p>
        </div>

        <div className="contact-list-container">
          {/* address */}
          <div>
            <svg
              width="30"
              height="30"
              viewBox="0 0 30 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15.0001 2.5C9.48635 2.5 5.0001 6.98625 5.0001 12.4937C4.96385 20.55 14.6201 27.23 15.0001 27.5C15.0001 27.5 25.0364 20.55 25.0001 12.5C25.0001 6.98625 20.5139 2.5 15.0001 2.5ZM15.0001 17.5C12.2376 17.5 10.0001 15.2625 10.0001 12.5C10.0001 9.7375 12.2376 7.5 15.0001 7.5C17.7626 7.5 20.0001 9.7375 20.0001 12.5C20.0001 15.2625 17.7626 17.5 15.0001 17.5Z"
                fill="black"
              />
            </svg>
            <a href="https://maps.app.goo.gl/7TBfdsNjewn3fKLt7">
              Kochi, Kerala (Global Clients)
            </a>
          </div>

          {/* phone */}
          <div>
            <svg
              width="30"
              height="30"
              viewBox="0 0 30 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M24.9969 13.7487H27.4969C27.4969 7.33625 22.6556 2.5 16.2344 2.5V5C21.3119 5 24.9969 8.67875 24.9969 13.7487Z"
                fill="black"
              />
              <path
                d="M16.2504 10.0008C18.8791 10.0008 20.0004 11.122 20.0004 13.7508H22.5004C22.5004 9.71954 20.2816 7.50079 16.2504 7.50079V10.0008ZM20.5279 16.8045C20.2877 16.5862 19.972 16.4698 19.6476 16.4798C19.3232 16.4899 19.0154 16.6256 18.7891 16.8583L15.7979 19.9345C15.0779 19.797 13.6304 19.3458 12.1404 17.8595C10.6504 16.3683 10.1991 14.917 10.0654 14.202L13.1391 11.2095C13.3721 10.9834 13.508 10.6756 13.5181 10.351C13.5281 10.0265 13.4115 9.71084 13.1929 9.47079L8.5741 4.39204C8.35541 4.15123 8.05145 4.00517 7.72679 3.98486C7.40214 3.96456 7.08235 4.07161 6.83535 4.28329L4.12285 6.60954C3.90674 6.82643 3.77775 7.1151 3.76035 7.42079C3.7416 7.73329 3.3841 15.1358 9.1241 20.8783C14.1316 25.8845 20.4041 26.2508 22.1316 26.2508C22.3841 26.2508 22.5391 26.2433 22.5804 26.2408C22.886 26.2237 23.1745 26.0941 23.3904 25.877L25.7154 23.1633C25.9272 22.9164 26.0345 22.5968 26.0144 22.2721C25.9943 21.9474 25.8485 21.6434 25.6079 21.4245L20.5279 16.8045Z"
                fill="black"
              />
            </svg>
            <span className="phone-numbers">
              <a href="tel:+917736277001">+91-7736277001</a>
              <span>, </span>
              <a href="tel:+919876543210">+91-9876543210</a>
            </span>
          </div>

          {/* email */}
          <div>
            <svg
              width="30"
              height="30"
              viewBox="0 0 30 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M23.4107 6.76238L21.8107 8.01238L14.9982 13.0749L8.18573 7.96238L6.58573 6.71238C6.2088 6.40056 5.74867 6.20618 5.26234 6.15331C4.77601 6.10045 4.28487 6.19143 3.84974 6.41498C3.41462 6.63853 3.05464 6.98483 2.81441 7.41097C2.57417 7.83711 2.46424 8.32437 2.49823 8.81238V23.2999C2.49823 23.7507 2.67734 24.1831 2.99615 24.502C3.31496 24.8208 3.74736 24.9999 4.19823 24.9999H8.18573V15.3499L14.9982 20.4624L21.8107 15.3499V24.9999H25.7982C26.2491 24.9999 26.6815 24.8208 27.0003 24.502C27.3191 24.1831 27.4982 23.7507 27.4982 23.2999V8.81238C27.5217 8.32858 27.4041 7.84838 27.1598 7.43015C26.9155 7.01193 26.5549 6.67368 26.1219 6.45654C25.689 6.23939 25.2022 6.1527 24.7209 6.20699C24.2396 6.26129 23.7844 6.45423 23.4107 6.76238Z"
                fill="black"
              />
            </svg>
            <a href="mailto:support@kivarolabs.com">support@kivarolabs.com</a>
          </div>
        </div>

        <div className="contact-banner-img">
          <Image
            src="/images/contact-banner.png"
            alt="contact-banner"
            width={400}
            height={400}
            priority
          />
        </div>
      </div>

      {/* mobile-------------- */}
        <div className="contact-banner-wrapper-mobile d-md-none">
          <h1>Get in Touch</h1>

          <p className="mt-4">Let’s talk about your next project.</p>
        </div>
{/* mobile-------------- */}

      {/* Form area */}
      <div className="conatct-form-container">
        <form
          onSubmit={formik.handleSubmit}
          className="row form-wrapper"
          noValidate
        >
          {/* Name */}
          <div className="col-12 mt-3">
            <label htmlFor="name" className="form-label">
              Name*
            </label>
            <SafeInput
              type="text"
              id="name"
              className="form-control"
              placeholder="Enter fullname"
              {...formik.getFieldProps("name")}
            />
            {formik.touched.name && formik.errors.name && (
              <div className="text-danger">{formik.errors.name}</div>
            )}
          </div>

          {/* Email */}
          <div className="col-12 mt-3">
            <label htmlFor="email" className="form-label">
              Email*
            </label>
            <SafeInput
              type="email"
              id="email"
              className="form-control"
              placeholder="Enter email address"
              {...formik.getFieldProps("email")}
            />
            {formik.touched.email && formik.errors.email && (
              <div className="text-danger">{formik.errors.email}</div>
            )}
          </div>

          {/* Phone */}
          <div className="col-12 mt-3">
            <label htmlFor="phone" className="form-label">
              Phone number
            </label>
            <SafeInput
              type="text"
              id="phone"
              className="form-control"
              placeholder="Enter phone number"
              {...formik.getFieldProps("phone")}
            />
            {formik.touched.phone && formik.errors.phone && (
              <div className="text-danger">{formik.errors.phone}</div>
            )}
          </div>

          {/* Message */}
          <div className="col-12 mt-3">
            <label htmlFor="message" className="form-label">
              Message
            </label>
            <SafeTextarea
              id="message"
              rows={5}
              className="form-control"
              placeholder="How we can help you?"
              {...formik.getFieldProps("message")}
            />
            {formik.touched.message && formik.errors.message && (
              <div className="text-danger">{formik.errors.message}</div>
            )}
          </div>

          {/* Submit button */}
          <div className="col-12 banner-btns d-flex mt-5">
            <SafeButton type="submit" className="banner-btn primary-btn">
              Submit
            </SafeButton>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;


