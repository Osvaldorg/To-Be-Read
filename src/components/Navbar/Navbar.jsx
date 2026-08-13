import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { useGlobalContext } from "../../context";
import "./Navbar.css";
import logo from "../../images/logo-icon.png";
import { HiOutlineMenuAlt3, HiOutlineX } from "react-icons/hi";
import { FaBookmark } from "react-icons/fa";

/**
 * Extracted Links component to share between Desktop Nav and Mobile Overlay
 */
const NavLinksList = ({ closeMenu }) => {
  const { savedBooks } = useGlobalContext();

  return (
    <ul className="nav-links-list" role="list">
      <li role="listitem">
        <NavLink
          to="/"
          end
          className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
          onClick={closeMenu}
        >
          Inicio
        </NavLink>
      </li>
      <li role="listitem">
        <NavLink
          to="/tbr"
          className={({ isActive }) =>
            isActive ? "nav-link active tbr-link" : "nav-link tbr-link"
          }
          onClick={closeMenu}
        >
          <FaBookmark className="tbr-icon" aria-hidden="true" />
          <span>Mi Lista TBR</span>
          {savedBooks.length > 0 && (
            <span className="tbr-badge" aria-label={`${savedBooks.length} guardados`}>
              {savedBooks.length}
            </span>
          )}
        </NavLink>
      </li>
      <li role="listitem">
        <NavLink
          to="/about"
          className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
          onClick={closeMenu}
        >
          Nosotros
        </NavLink>
      </li>
    </ul>
  );
};

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Accessible scroll lock when mobile overlay is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  // Close on Escape key
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") setIsMenuOpen(false);
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  const closeMenu = () => setIsMenuOpen(false);
  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  return (
    <nav className="navbar glass-effect" id="navbar">
      <div className="container navbar-container">

        {/* Brand / Logo */}
        <Link to="/" className="navbar-brand" onClick={closeMenu}>
          <img src={logo} alt="To Be Read logo" className="brand-logo" />
          <span className="brand-title">
            To<span className="brand-highlight">Be</span>Read
          </span>
        </Link>

        {/* ── DESKTOP NAV (Hidden on Mobile) ── */}
        <div className="desktop-nav">
          <NavLinksList closeMenu={closeMenu} />
        </div>

        {/* ── MOBILE TOGGLE BUTTON (Hidden on Desktop) ── */}
        <button
          type="button"
          className="mobile-toggle-btn"
          onClick={toggleMenu}
          aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? (
            <HiOutlineX size={28} aria-hidden="true" />
          ) : (
            <HiOutlineMenuAlt3 size={28} aria-hidden="true" />
          )}
        </button>
      </div>

      {/* ── MOBILE OVERLAY MENU (Hidden on Desktop & when closed) ── */}
      {isMenuOpen && (
        <div className="mobile-overlay-nav">
          <div className="mobile-overlay-content">
            <NavLinksList closeMenu={closeMenu} />
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
