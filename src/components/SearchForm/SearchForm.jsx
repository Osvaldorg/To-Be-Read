import React, { useRef, useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useGlobalContext } from "../../context";
import "./SearchForm.css";

const CATEGORIES = [
  { name: "Fantasía", query: "fantasy" },
  { name: "Ciencia Ficción", query: "science fiction" },
  { name: "Historia", query: "history" },
  { name: "Misterio", query: "mystery" },
  { name: "Romance", query: "romance" },
  { name: "Desarrollo", query: "self help" },
];

function SearchForm() {
  const { setSearchTerm, searchTerm } = useGlobalContext();
  const searchText = useRef("");
  const navigate = useNavigate();

  useEffect(() => {
    if (searchText.current) {
      searchText.current.value = searchTerm || "";
    }
  }, [searchTerm]);

  const handleSubmit = (e) => {
    e.preventDefault();
    let tempSearchTerm = searchText.current.value.trim();
    if (tempSearchTerm.replace(/[^\w\s]/gi, "").length === 0) {
      setSearchTerm("the lost world");
    } else {
      setSearchTerm(tempSearchTerm);
    }
    navigate("/book");
  };

  const handleCategoryClick = (categoryQuery) => {
    setSearchTerm(categoryQuery);
    if (searchText.current) {
      searchText.current.value = categoryQuery;
    }
    navigate("/book");
  };

  return (
    <div className="search-form-wrapper">
      <form className="search-form" onSubmit={handleSubmit}>
        <div className="search-form-elem flex">
          <input
            type="text"
            className="form-control"
            placeholder="Busca por título, autor o tema (ej. El Principito)..."
            ref={searchText}
          />
          <button type="submit" className="search-btn flex flex-c" aria-label="Buscar">
            <FaSearch size={18} />
            <span className="search-btn-text">Buscar</span>
          </button>
        </div>
      </form>

      <div className="search-categories flex flex-c">
        <span className="categories-label">Sugerencias:</span>
        <div className="category-chips flex">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.query}
              type="button"
              className="chip-btn"
              onClick={() => handleCategoryClick(cat.query)}
            >
              {cat.name}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SearchForm;

