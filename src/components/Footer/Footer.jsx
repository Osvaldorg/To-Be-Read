import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import tbrWhiteLogo from "../../images/tbr-white.png";

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-container grid">
        <div className="footer-about">
          <div className="footer-brand flex">
            <img src={tbrWhiteLogo} alt="To Be Read Logo" className="footer-brand-logo" />
          </div>
          <p>
            Explora millones de obras literarias y guarda tus próximas lecturas favoritas. Impulsado con datos abiertos de Open Library.
          </p>
        </div>

        <div className="footer-links">
          <h4>Navegación</h4>
          <ul>
            <li>
              <Link to="/">Inicio</Link>
            </li>
            <li>
              <Link to="/tbr">Mi Lista TBR</Link>
            </li>
            <li>
              <Link to="/about">Sobre Nosotros</Link>
            </li>
          </ul>
        </div>

        <div className="footer-info">
          <h4>Tecnologías</h4>
          <ul>
            <li>React 18 + Vite</li>
            <li>React Router v6</li>
            <li>Open Library REST API</li>
            <li>LocalStorage Web Storage</li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom text-center">
        <div className="container">
          <p>&copy; {new Date().getFullYear()} To Be Read. Creado para amantes de la lectura.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

