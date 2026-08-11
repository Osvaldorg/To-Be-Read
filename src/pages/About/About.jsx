import React from "react";
import "./About.css";
import aboutImg from "../../images/about-img.jpg";
import { FaBookOpen, FaHeart, FaGlobe, FaLightbulb } from "react-icons/fa";

function About() {
  return (
    <section className="about fade-in" id="about">
      <div className="container">
        <div className="section-title">
          <h2>Sobre To Be Read</h2>
          <p>Tu espacio personal para explorar, guardar y conectar con la literatura mundial</p>
        </div>

        <div className="about-content grid">
          <div className="about-img-container">
            <img src={aboutImg} alt="Biblioteca y libros" className="about-img" />
          </div>
          <div className="about-text">
            <h3 className="about-title">Nuestra Historia</h3>
            <p>
              <strong>To Be Read</strong> nació como un proyecto impulsado por la pasión hacia los libros y el deseo de simplificar el descubrimiento literario. Inspirados por la infinidad de obras disponibles en el catálogo libre de <em>Open Library</em>, creamos una plataforma intuitiva y elegante diseñada para cualquier lector que busque organizar sus próximas lecturas sin complicaciones.
            </p>
            <p>
              Lo que comenzó como una idea académica para explorar el consumo de APIs web, se ha convertido en un buscador moderno con listas personalizadas TBR (<em>To Be Read</em>), permitiéndote llevar el control de tus lecturas desde cualquier dispositivo.
            </p>
          </div>
        </div>

        <div className="features-grid grid">
          <div className="feature-card">
            <div className="feature-icon-wrapper">
              <FaBookOpen size={24} />
            </div>
            <h4>Catálogo Abierto</h4>
            <p>Acceso instantáneo a millones de obras, autores y ediciones mediante Open Library API.</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon-wrapper">
              <FaHeart size={24} />
            </div>
            <h4>Lista TBR Personal</h4>
            <p>Guarda tus títulos favoritos en tu lista personal con persistencia local automática.</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon-wrapper">
              <FaLightbulb size={24} />
            </div>
            <h4>Búsqueda Inteligente</h4>
            <p>Filtra por categorías sugeridas o busca por cualquier tema, autor o título que desees.</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon-wrapper">
              <FaGlobe size={24} />
            </div>
            <h4>100% Gratuito y Libre</h4>
            <p>Una herramienta diseñada sin anuncios ni registros requeridos para tu comodidad.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;

