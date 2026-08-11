import React from "react";
import SearchForm from "../SearchForm/SearchForm";
import "./Header.css";
import { FaBookReader } from "react-icons/fa";

function Header() {
  return (
    <header className="hero-header">
      <div className="hero-overlay"></div>
      <div className="container hero-content text-center fade-in">
        <div className="hero-badge flex flex-c">
          <FaBookReader className="hero-badge-icon" />
          <span>Descubre & Organiza tus Lecturas</span>
        </div>

        <h1 className="hero-title">
          Encuentra tu próxima <br />
          <span className="hero-title-highlight">gran aventura literaria</span>
        </h1>

        <p className="hero-text">
          Explora millones de títulos, consulta detalles, y construye tu lista personalizada de libros por leer (TBR) en un solo lugar.
        </p>

        <SearchForm />
      </div>
    </header>
  );
}

export default Header;

