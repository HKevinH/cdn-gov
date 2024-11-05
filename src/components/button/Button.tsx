import React, { ButtonHTMLAttributes } from "react";

export interface CustomButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  onClick: () => void;
  variant: "content" | "contour" | "inverted content" | "inverted contour";
}

const Button: React.FC<CustomButtonProps> = ({
  label,
  variant,
  onClick,
  ...props
}) => {
  const variantClass = {
    content: "fill-btn-govco",
    contour: "outline-btn-govco",
    "inverted content": "fill-secundary-btn-govco",
    "inverted contour": "outline-secundary-btn-govco",
  }[variant];

  const className = `btn-govco ${variantClass}`;

  return (
    <button className={className} {...props} onClick={onClick}>
      {label}
    </button>
  );
};

export default Button;
