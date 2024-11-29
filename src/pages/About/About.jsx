import React from "react";
import "./About.css";
import aboutImg from "../../images/about-Img.jpg";
import member from "../../images/team-member-1.jpg";

function About() {
  return (
    <section className="about" id="about">
      <div className="container">
        <div className="section-title">
          <h2>Sobre Nosotros</h2>
        </div>

        <div className="about-content grid">
          <div className="about-img">
            <img src={aboutImg} alt="Nuestro equipo trabajando" />
          </div>
          <div className="about-text">
            <h3 className="about-title">Nuestra Historia</h3>
            <p>
              Todo comenzó con una simple pregunta: ¿Cómo podemos marcar la
              diferencia? Inspirados por nuestra pasión por crear soluciones
              únicas y significativas, fundamos [Nombre de tu Empresa] en [año].
              Desde el principio, nuestro objetivo ha sido claro: ofrecer algo
              más que un producto o servicio, crear experiencias que realmente
              conecten con las personas. Lo que comenzó como un pequeño equipo
              con grandes sueños, pronto se convirtió en una comunidad de
              profesionales dedicados a transformar ideas en realidades. Cada
              paso en nuestro camino ha estado guiado por la creatividad, el
              compromiso y la búsqueda constante de excelencia. Hoy, estamos
              orgullosos de ser reconocidos no solo por lo que hacemos, sino por
              cómo lo hacemos.
            </p>
          </div>
        </div>

        <div className="mission-section">
          <h3 className="section-subtitle">Nuestra Misión</h3>
          <p>
            En To Be Read, nuestra misión es crear un espacio donde los amantes
            de los libros puedan descubrir, compartir y enamorarse de nuevas
            historias. Queremos:
          </p>
          <ul className="values-list">
            <li>
              Inspirar la lectura: Ofrecer recomendaciones personalizadas que
              conecten a cada lector con su próxima gran aventura literaria.
            </li>
            <li>
              Construir comunidad: Ser un lugar donde lectores de todo el mundo
              puedan intercambiar ideas, reseñas y pasiones.
            </li>
            <li>
              Fomentar el conocimiento: Ampliar horizontes al presentar obras de
              autores consagrados y voces emergentes.
            </li>
            <li>
              Hacerlo accesible: Simplificar el acceso a los libros mediante
              herramientas innovadoras, desde rankings hasta bibliotecas
              personales virtuales.
            </li>
          </ul>
        </div>

        <div className="values-section">
          <h3 className="section-subtitle">Nuestros Valores</h3>
          <ul className="values-list">
            <li>
              Innovación: Buscamos constantemente nuevas formas de mejorar y
              crecer.
            </li>
            <li>
              Integridad: Mantenemos los más altos estándares éticos en todas
              nuestras operaciones.
            </li>
            <li>
              Colaboración: Creemos en el poder del trabajo en equipo y las
              asociaciones sólidas.
            </li>
            <li>
              Excelencia: Nos esforzamos por la excelencia en todo lo que
              hacemos.
            </li>
          </ul>
        </div>

        <div className="team-section">
          <h3 className="section-subtitle">Nuestro Equipo</h3>
          <div className="team-grid">
            <div className="team-member">
              <img src={member} alt="Nombre del Miembro del Equipo 1" />
              <h4>Nombre del Miembro</h4>
              <p>Cargo / Posición</p>
            </div>
            <div className="team-member">
              <img src={member} alt="Nombre del Miembro del Equipo 2" />
              <h4>Nombre del Miembro</h4>
              <p>Cargo / Posición</p>
            </div>
            <div className="team-member">
              <img src={member} alt="Nombre del Miembro del Equipo 3" />
              <h4>Nombre del Miembro</h4>
              <p>Cargo / Posición</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
