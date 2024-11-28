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
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas,
            consequatur. Porro perferendis atque accusamus mollitia autem
            sapiente officia commodi. Eaque unde iusto libero neque sint minima
            voluptas corporis, quibusdam praesentium?
          </p>
          <SearchForm />
        </div>
      </header>
    </div>
  );
}

export default Header;
