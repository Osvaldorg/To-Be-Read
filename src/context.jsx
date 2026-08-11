import React, { useState, useContext, useEffect, useCallback, useMemo } from "react";

const API_URL = "https://openlibrary.org/search.json?title=";
const BOOKS_PER_PAGE = 12;

/**
 * Available sort options — exported so components can reference the
 * same constant without repeating the array.
 */
export const SORT_OPTIONS = [
  { value: "relevance", label: "Más relevantes" },
  { value: "year_desc", label: "Año: reciente primero" },
  { value: "year_asc", label: "Año: antiguo primero" },
  { value: "editions_desc", label: "Más ediciones" },
];

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [searchTerm, setSearchTerm] = useState("the lost world");

  // Full list from the API before any client-side processing
  const [rawBooks, setRawBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [resultTitle, setResultTitle] = useState("");

  // Sort & Filter controls
  const [sortOrder, setSortOrder] = useState("relevance");
  const [filterYear, setFilterYear] = useState(""); // minimum publish year filter

  // How many books to show (pagination via "load more")
  const [visibleCount, setVisibleCount] = useState(BOOKS_PER_PAGE);

  // ── TBR List ─────────────────────────────────────────────────────────────
  const [savedBooks, setSavedBooks] = useState(() => {
    try {
      const data = localStorage.getItem("tbr_books");
      return data ? JSON.parse(data) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem("tbr_books", JSON.stringify(savedBooks));
    } catch (e) {
      console.error("Failed to persist TBR list:", e);
    }
  }, [savedBooks]);

  const toggleSaveBook = (book) => {
    setSavedBooks((prev) => {
      const exists = prev.some((b) => b.id === book.id);
      return exists ? prev.filter((b) => b.id !== book.id) : [...prev, book];
    });
  };

  const isBookSaved = (bookId) => savedBooks.some((b) => b.id === bookId);

  // ── Fetch ─────────────────────────────────────────────────────────────────
  // Request up to 100 results so we have data to sort & filter client-side
  const fetchBooks = useCallback(async () => {
    setLoading(true);
    setError(null);
    setVisibleCount(BOOKS_PER_PAGE); // reset pagination on every new search
    try {
      const response = await fetch(
        `${API_URL}${encodeURIComponent(searchTerm)}&limit=100`
      );
      if (!response.ok) throw new Error("No se pudo contactar con Open Library.");

      const { docs } = await response.json();

      if (docs && docs.length > 0) {
        const mapped = docs.map((b) => ({
          id: b.key,
          author: b.author_name,
          cover_id: b.cover_i,
          edition_count: b.edition_count ?? 0,
          first_publish_year: b.first_publish_year ?? null,
          title: b.title,
        }));
        setRawBooks(mapped);
        setResultTitle(`Resultados para "${searchTerm}"`);
      } else {
        setRawBooks([]);
        setResultTitle("Sin resultados para tu búsqueda");
      }
    } catch (err) {
      console.error(err);
      setError("Ocurrió un error al buscar libros. Inténtalo de nuevo.");
      setRawBooks([]);
    } finally {
      setLoading(false);
    }
  }, [searchTerm]);

  useEffect(() => {
    fetchBooks();
  }, [fetchBooks]);

  // ── Derived state (filter → sort → paginate) ──────────────────────────────
  // useMemo avoids re-computing on every render
  const books = useMemo(() => {
    let list = [...rawBooks];

    // 1. Filter by minimum publish year
    if (filterYear) {
      const yr = parseInt(filterYear, 10);
      list = list.filter(
        (b) => b.first_publish_year != null && b.first_publish_year >= yr
      );
    }

    // 2. Sort
    switch (sortOrder) {
      case "year_desc":
        list.sort((a, b) => (b.first_publish_year ?? 0) - (a.first_publish_year ?? 0));
        break;
      case "year_asc":
        list.sort(
          (a, b) => (a.first_publish_year ?? 9999) - (b.first_publish_year ?? 9999)
        );
        break;
      case "editions_desc":
        list.sort((a, b) => (b.edition_count ?? 0) - (a.edition_count ?? 0));
        break;
      default:
        break; // "relevance" → keep API order
    }

    // 3. Paginate
    return list.slice(0, visibleCount);
  }, [rawBooks, filterYear, sortOrder, visibleCount]);

  // Total count after filter only (for the "X of Y" counter)
  const totalFiltered = useMemo(() => {
    if (!filterYear) return rawBooks.length;
    const yr = parseInt(filterYear, 10);
    return rawBooks.filter(
      (b) => b.first_publish_year != null && b.first_publish_year >= yr
    ).length;
  }, [rawBooks, filterYear]);

  const hasMore = books.length < totalFiltered;

  const loadMore = () => setVisibleCount((prev) => prev + BOOKS_PER_PAGE);

  // Reset pagination when filter or sort changes (so we restart from page 1)
  useEffect(() => {
    setVisibleCount(BOOKS_PER_PAGE);
  }, [sortOrder, filterYear]);

  return (
    <AppContext.Provider
      value={{
        loading,
        error,
        books,
        rawBooks,
        totalFiltered,
        hasMore,
        loadMore,
        searchTerm,
        setSearchTerm,
        resultTitle,
        sortOrder,
        setSortOrder,
        filterYear,
        setFilterYear,
        savedBooks,
        toggleSaveBook,
        isBookSaved,
        SORT_OPTIONS,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => useContext(AppContext);

export { AppContext, AppProvider };
