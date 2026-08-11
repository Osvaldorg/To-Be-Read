import React from "react";
import { useGlobalContext } from "../../context";
import { FaSortAmountDown, FaCalendarAlt, FaUndo } from "react-icons/fa";
import "./SortFilterBar.css";

/**
 * SortFilterBar
 * Renders sort dropdown + year filter input + reset button.
 * All state lives in AppContext to keep components decoupled.
 */
function SortFilterBar({ totalFiltered, showing }) {
  const {
    sortOrder,
    setSortOrder,
    filterYear,
    setFilterYear,
    SORT_OPTIONS,
    rawBooks,
  } = useGlobalContext();

  const hasActiveFilters = sortOrder !== "relevance" || filterYear !== "";

  const handleReset = () => {
    setSortOrder("relevance");
    setFilterYear("");
  };

  return (
    <div className="sort-filter-bar flex flex-sb">
      {/* Results counter */}
      <p className="results-count">
        Mostrando <strong>{showing}</strong> de{" "}
        <strong>{totalFiltered}</strong> resultados
        {rawBooks.length > totalFiltered && (
          <span className="filter-note"> (filtrado de {rawBooks.length})</span>
        )}
      </p>

      <div className="filter-controls flex">
        {/* Sort selector */}
        <div className="control-group flex">
          <FaSortAmountDown className="control-icon" aria-hidden="true" />
          <label htmlFor="sort-select" className="control-label">
            Ordenar:
          </label>
          <select
            id="sort-select"
            className="control-select"
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
          >
            {SORT_OPTIONS.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
        </div>

        {/* Year filter */}
        <div className="control-group flex">
          <FaCalendarAlt className="control-icon" aria-hidden="true" />
          <label htmlFor="year-filter" className="control-label">
            Desde:
          </label>
          <input
            id="year-filter"
            type="number"
            className="control-input"
            placeholder="ej. 1990"
            min="1000"
            max={new Date().getFullYear()}
            value={filterYear}
            onChange={(e) => setFilterYear(e.target.value)}
          />
        </div>

        {/* Reset button — only visible when a filter is active */}
        {hasActiveFilters && (
          <button
            type="button"
            className="reset-btn flex flex-c"
            onClick={handleReset}
            title="Restablecer filtros"
            aria-label="Restablecer ordenamiento y filtros"
          >
            <FaUndo size={13} />
            <span>Restablecer</span>
          </button>
        )}
      </div>
    </div>
  );
}

export default SortFilterBar;
