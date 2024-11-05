import React from "react";

export interface HeaderProps {
  onLoginClick?: () => void;
  onSearch?: (query: string) => void;
}

const Header: React.FC<HeaderProps> = ({ onLoginClick, onSearch }) => {
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (onSearch) {
      onSearch(e.target.value);
    }
  };

  return (
    <div className="logo-aut-header-govco">
      <a href="#" className="link-login-header-govco" onClick={onLoginClick}>
        Iniciar sesión
      </a>
      <div className="container-logo-header-govco">
        <span className="logo-header-govco"></span>
        <div className="container-search-header-govco">
          <div className="search-govco">
            <div className="bar-search-govco">
              <input
                type="text"
                placeholder="Buscar por componente"
                className="input-search-govco"
                aria-label="Buscador"
                onChange={handleSearch}
              />
              <button
                className="icon-search-govco icon-close-search-govco"
                aria-label="Limpiar"
              ></button>
              <div
                className="icon-search-govco search-icon-search-govco"
                aria-hidden="true"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
