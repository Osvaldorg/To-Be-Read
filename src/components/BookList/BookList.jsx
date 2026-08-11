import React from "react";
import { useGlobalContext } from "../../context";
import Book from "../BookList/Book";
import SkeletonLoader from "../Loader/SkeletonLoader";
import SortFilterBar from "../SortFilterBar/SortFilterBar";
import coverImg from "../../images/no-cover-book.jpg";
import { FaBookOpen, FaChevronDown } from "react-icons/fa";
import "./BookList.css";

function BookList() {
  const {
    books,
    loading,
    error,
    resultTitle,
    totalFiltered,
    hasMore,
    loadMore,
  } = useGlobalContext();

  // Enrich each book with its cover URL
  const booksWithCovers = books.map((b) => ({
    ...b,
    id: b.id.replace("/works/", ""),
    cover_img: b.cover_id
      ? `https://covers.openlibrary.org/b/id/${b.cover_id}-L.jpg`
      : coverImg,
  }));

  // ── Loading state ──────────────────────────────────────────────────────────
  if (loading) {
    return (
      <section className="booklist" id="booklist">
        <div className="container">
          <div className="section-title">
            <h2>Buscando libros...</h2>
            <p>Conectando con Open Library</p>
          </div>
          <SkeletonLoader count={12} />
        </div>
      </section>
    );
  }

  // ── Error state ────────────────────────────────────────────────────────────
  if (error) {
    return (
      <section className="booklist" id="booklist">
        <div className="container text-center empty-state">
          <FaBookOpen size={64} className="empty-icon text-muted" />
          <h2>Algo salió mal</h2>
          <p>{error}</p>
        </div>
      </section>
    );
  }

  // ── Empty state ────────────────────────────────────────────────────────────
  if (books.length === 0) {
    return (
      <section className="booklist" id="booklist">
        <div className="container">
          <SortFilterBar showing={0} totalFiltered={totalFiltered} />
          <div className="text-center empty-state">
            <FaBookOpen size={64} className="empty-icon text-muted" />
            <h2>Sin Resultados</h2>
            <p>
              Prueba con otras palabras clave, o ajusta el filtro de año.
            </p>
          </div>
        </div>
      </section>
    );
  }

  // ── Main list ──────────────────────────────────────────────────────────────
  return (
    <section className="booklist" id="booklist">
      <div className="container">
        <div className="section-title">
          <h2>{resultTitle}</h2>
        </div>

        {/* Sort / Filter bar */}
        <SortFilterBar
          showing={booksWithCovers.length}
          totalFiltered={totalFiltered}
        />

        {/* Book grid */}
        <div className="booklist-content grid">
          {booksWithCovers.map((item, index) => (
            <Book key={item.id || index} {...item} />
          ))}
        </div>

        {/* Load more pagination */}
        {hasMore && (
          <div className="load-more-wrapper text-center">
            <button
              type="button"
              className="btn load-more-btn flex flex-c"
              onClick={loadMore}
              id="load-more-btn"
            >
              <FaChevronDown size={14} />
              <span>Cargar más libros</span>
            </button>
          </div>
        )}

        {/* End-of-results message */}
        {!hasMore && booksWithCovers.length > 0 && (
          <p className="end-of-results text-center text-muted">
            Has visto todos los {totalFiltered} resultados disponibles.
          </p>
        )}
      </div>
    </section>
  );
}

export default BookList;
