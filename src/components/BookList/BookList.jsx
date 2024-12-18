import React, { useEffect } from "react";
import { useGlobalContext } from "../../context";
import Book from "../BookList/Book";
import Loading from "../Loader/Loader";
import coverImg from "../../images/no-cover-book.jpg";
import "./BookList.css";

//https://covers.openlibrary.org/b/id/240727-S.jpg

function BookList() {
  const { books, loading, resultTitle } = useGlobalContext();
  const booksWithCovers = books.map((singleBook) => {
    return {
      ...singleBook,

      id: singleBook.id.replace("/works/", ""),
      cover_img: singleBook.cover_id
        ? `https://covers.openlibrary.org/b/id/${singleBook.cover_id}-L.jpg`
        : coverImg,
    };
  });

  //console.log(booksWithCovers);

  // Desplazarse al loader cuando loading es true
  useEffect(() => {
    if (loading) {
      const loaderElement = document.getElementById("loader"); // Buscar el elemento con id "loader"
      if (loaderElement) {
        loaderElement.scrollIntoView({ behavior: "smooth", block: "center" });
      }
    }
  }, [loading]); // Ejecutar este efecto solo cuando `loading` cambie

  if (loading) return <Loading />;

  return (
    <section className="booklist">
      <div className="container">
        <div className="section-title">
          <h2>{resultTitle}</h2>
        </div>
        <div className="booklist-content grid">
          {booksWithCovers.slice(0, 30).map((item, index) => {
            return <Book key={index} {...item} />;
          })}
        </div>
      </div>
    </section>
  );
}

export default BookList;
