import React from "react";
import { useGlobalContext } from "../../context";
import Book from "../../components/BookList/Book";
import { FaBookmark } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./TbrList.css";

function TbrList() {
  const { savedBooks } = useGlobalContext();

  return (
    <section className="tbr-page fade-in">
      <div className="container">
        <div className="section-title">
          <h2>Mi Lista "To Be Read"</h2>
          <p>Tus lecturas guardadas y pendientes por descubrir</p>
        </div>

        {savedBooks.length === 0 ? (
          <div className="tbr-empty-container text-center">
            <FaBookmark size={64} className="tbr-empty-icon" />
            <h3>Tu lista está vacía</h3>
            <p>
              Explora nuestro catálogo y haz clic en el ícono de marcador en cualquier libro para guardarlo aquí.
            </p>
            <Link to="/book" className="explore-btn">
              Explorar Libros
            </Link>
          </div>
        ) : (
          <div className="booklist-content grid">
            {savedBooks.map((book) => (
              <Book key={book.id} {...book} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default TbrList;
