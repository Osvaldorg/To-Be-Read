import React, { useState, useEffect, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useGlobalContext } from "../../context";
import SkeletonLoader from "../Loader/SkeletonLoader";
import coverImg from "../../images/no-cover-book.jpg";
import "./BookDetails.css";
import { FaArrowLeft, FaBookmark, FaRegBookmark } from "react-icons/fa";

const URL = "https://openlibrary.org/works/";

const BookDetails = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [book, setBook] = useState(null);
  const [fetchError, setFetchError] = useState(false);
  const navigate = useNavigate();
  const detailsRef = useRef(null);

  const { toggleSaveBook, isBookSaved } = useGlobalContext();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });

    setLoading(true);
    setFetchError(false);

    async function getBookDetails() {
      try {
        const response = await fetch(`${URL}${id}.json`);
        if (!response.ok) {
          throw new Error("No se pudo obtener el detalle del libro.");
        }
        const data = await response.json();

        if (data) {
          const {
            description,
            title,
            covers,
            subject_places,
            subject_times,
            subjects,
          } = data;

          let parsedDescription = "No hay descripción disponible para este título en Open Library.";
          if (typeof description === "string") {
            parsedDescription = description;
          } else if (description && typeof description.value === "string") {
            parsedDescription = description.value;
          }

          const newBook = {
            id: id,
            description: parsedDescription,
            title: title || "Sin Título",
            cover_img: covers && covers.length > 0
              ? `https://covers.openlibrary.org/b/id/${covers[0]}-L.jpg`
              : coverImg,
            subject_places: subject_places
              ? subject_places.slice(0, 5).join(", ")
              : "No especificado",
            subject_times: subject_times
              ? subject_times.slice(0, 5).join(", ")
              : "No especificado",
            subjects: subjects
              ? subjects.slice(0, 8)
              : [],
          };
          setBook(newBook);
        } else {
          setBook(null);
        }
        setLoading(false);
      } catch (error) {
        console.error("Error al cargar detalles:", error);
        setFetchError(true);
        setLoading(false);
      }
    }
    getBookDetails();
  }, [id]);

  if (loading) {
    return (
      <section className="book-details" ref={detailsRef}>
        <div className="container">
          <SkeletonLoader count={1} />
        </div>
      </section>
    );
  }

  if (fetchError || !book) {
    return (
      <section className="book-details container text-center" style={{ padding: "8rem 2rem" }}>
        <h2>Libro no encontrado</h2>
        <p>No se pudo cargar la información de este libro.</p>
        <button
          type="button"
          className="back-btn flex flex-c"
          style={{ margin: "2rem auto 0 auto" }}
          onClick={() => navigate(-1)}
        >
          <FaArrowLeft size={16} />
          <span>Volver a la lista</span>
        </button>
      </section>
    );
  }

  const isSaved = isBookSaved(book.id);

  return (
    <section className="book-details fade-in" ref={detailsRef}>
      <div className="container">
        <button
          type="button"
          className="back-btn flex"
          onClick={() => navigate(-1)}
        >
          <FaArrowLeft size={16} />
          <span>Volver atras</span>
        </button>

        <div className="book-details-content grid">
          <div className="book-details-img-container">
            <img src={book.cover_img} alt={`Portada de ${book.title}`} className="book-details-img" />
          </div>

          <div className="book-details-info">
            <div className="book-details-header flex flex-sb">
              <h1 className="book-details-title">{book.title}</h1>
              <button
                type="button"
                className={`detail-bookmark-btn ${isSaved ? "saved" : ""}`}
                onClick={() => toggleSaveBook(book)}
              >
                {isSaved ? (
                  <>
                    <FaBookmark /> <span>Guardado en TBR</span>
                  </>
                ) : (
                  <>
                    <FaRegBookmark /> <span>Guardar en Mi Lista</span>
                  </>
                )}
              </button>
            </div>

            <div className="book-details-block">
              <h3 className="block-label">Sinopsis / Descripción</h3>
              <p className="book-description-text">{book.description}</p>
            </div>

            {book.subjects && book.subjects.length > 0 && (
              <div className="book-details-block">
                <h3 className="block-label">Temas y Categorías</h3>
                <div className="subject-tags flex">
                  {book.subjects.map((subj, idx) => (
                    <span key={idx} className="subject-tag">
                      {subj}
                    </span>
                  ))}
                </div>
              </div>
            )}

            <div className="book-details-meta grid">
              <div className="meta-item">
                <span className="meta-label">Lugares relacionados:</span>
                <span className="meta-value">{book.subject_places}</span>
              </div>
              <div className="meta-item">
                <span className="meta-label">Época / Tiempo:</span>
                <span className="meta-value">{book.subject_times}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookDetails;

