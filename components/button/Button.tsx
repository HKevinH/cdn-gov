import React, { ButtonHTMLAttributes } from "react";

interface CustomButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
}

const Button: React.FC<CustomButtonProps> = ({ label, ...props }) => {
  return <button {...props}>{label}</button>;
};

export default Button;
