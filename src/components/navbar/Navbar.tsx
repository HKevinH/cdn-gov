import React from "react";

export interface NavbarProps {
  onLanguageChange?: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onLanguageChange }) => (
  <nav
    className="navbar navbar-expand-lg barra-superior-govco"
    aria-label="Barra superior"
  >
    <a
      href="https://www.gov.co/"
      target="_blank"
      aria-label="Portal del Estado Colombiano - GOV.CO"
      rel="noopener noreferrer"
    ></a>
    <button
      className="idioma-icon-barra-superior-govco float-right"
      aria-label="Cambiar idioma"
      onClick={onLanguageChange}
    ></button>
  </nav>
);

export default Navbar;
