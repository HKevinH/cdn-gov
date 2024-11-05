import { React, BaseButtonProps } from "react";

interface BaseButtonProps {
  children: React.ReactNode;
}

const Button: React.FC<BaseButtonProps> = ({ children, ...props }) => {
  return <button {...props}>{children}</button>;
};

export default Button;
