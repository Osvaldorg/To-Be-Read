import React from "react";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../../context";
import { FaBookmark, FaRegBookmark } from "react-icons/fa";
import "./BookList.css";

const Book = (book) => {
  const { toggleSaveBook, isBookSaved } = useGlobalContext();
  const saved = isBookSaved(book.id);

  const handleBookmarkClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    toggleSaveBook(book);
  };

  return (
    <div className="book-item flex flex-column fade-in">
      <div className="book-item-img-wrapper">
        <img src={book.cover_img} alt={`Portada de ${book.title}`} className="book-cover-img" />
        <button
          type="button"
          className={`bookmark-btn ${saved ? "saved" : ""}`}
          onClick={handleBookmarkClick}
          aria-label={saved ? "Quitar de Mi Lista TBR" : "Guardar en Mi Lista TBR"}
          title={saved ? "Quitar de Mi Lista TBR" : "Guardar en Mi Lista TBR"}
        >
          {saved ? <FaBookmark size={16} /> : <FaRegBookmark size={16} />}
        </button>
      </div>

      <div className="book-item-info flex flex-column flex-sb text-center">
        <Link to={`/book/${book.id}`} className="book-title-link">
          <h3 className="book-title">{book.title}</h3>
        </Link>

        <div className="book-author">
          <span className="author-label">Por: </span>
          <span className="author-name">
            {book.author && book.author.length > 0
              ? book.author.join(", ")
              : "Autor Desconocido"}
          </span>
        </div>

        <div className="book-meta flex flex-sb">
          {book.first_publish_year && (
            <span className="meta-badge">
              {book.first_publish_year}
            </span>
          )}
          {book.edition_count && (
            <span className="meta-badge subtle">
              {book.edition_count} edic.
            </span>
          )}
        </div>

        <Link to={`/book/${book.id}`} className="view-details-btn">
          Ver Detalles
        </Link>
      </div>
    </div>
  );
};

export default Book;

