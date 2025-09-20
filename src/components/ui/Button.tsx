// components/ui/Button.tsx
"use client";

import React from "react";
import classNames from "classnames";


interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary"; // different button styles
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = "secondary",
  className,
  ...props
}) => {
  return (
    <button
      className={classNames("banner-btn", className, {
        "primary-btn": variant === "primary",
      })}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;

