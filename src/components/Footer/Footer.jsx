import React from "react";
import "./Footer.css";
import { FaFacebook, FaTwitter } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-about">
          <h3>Sobre Nosotros</h3>
          <p>
            Exploramos y compartimos los mejores libros para tu próxima lectura.
            Inspírate y encuentra tus próximos favoritos. lorem
          </p>
        </div>
        <div className="footer-links">
          <h3>Enlaces Rápidos</h3>
          <ul>
            <li>
              <a href="#home">Inicio</a>
            </li>
            <li>
              <a href="#about">Nosotros</a>
            </li>
            <li>
              <a href="#contact">Contacto</a>
            </li>
            <li>
              <a href="#privacy">Política de Privacidad</a>
            </li>
          </ul>
        </div>
        <div className="footer-social">
          <h3>Síguenos</h3>
          <div className="social-icons">
            <a href="#" target="_blank">
              <span className="facebook">
                <FaFacebook />
              </span>
            </a>
            <a href="#" target="_blank">
              <span className="twitter">
                <FaTwitter />
              </span>
            </a>
            <a href="#" target="_blank">
              <span className="instagram">
                <FaInstagramSquare />
              </span>
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 To Be Read. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}

export default Footer;
