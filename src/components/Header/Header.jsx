import React from "react";
import Navbar from "../Navbar/Navbar";
import SearchForm from "../SearchForm/SearchForm";
import "./Header.css";

function Header() {
  return (
    <div className="holder">
      <header className="header">
        <Navbar />
        <div className="header-content flex flex-c text-center text-white">
          <h2 className="header-title text-capitalize">
            Adentrate a una nueva aventura
          </h2>
          <br />
          <p className="header-text fs-18 fw-3">
            "Bienvenido a To Be Read, tu espacio ideal para descubrir nuevos
            libros. Explora nuestra extensa colección, encuentra tus lecturas
            favoritas, y mantén un seguimiento de los libros que deseas leer.
            ¡Empecemos tu próxima aventura literaria hoy mismo!"
          </p>
          <SearchForm />
        </div>
      </header>
    </div>
  );
}

export default Header;
