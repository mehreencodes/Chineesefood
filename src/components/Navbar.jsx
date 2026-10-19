import { useEffect, useRef, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { FiHeart, FiSearch, FiX } from "react-icons/fi";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import { useFavorites } from "../context/FavoritesContext";

const links = [
  { to: "/", label: "Home", end: true },
  { to: "/recipes", label: "Recipes" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [scrolled, setScrolled] = useState(false);
  const inputRef = useRef(null);
  const navigate = useNavigate();

  const closeMenu = () => setMenuOpen(false);
  const { count } = useFavorites();

  // header gets a blurred background after scrolling
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // stop the page scrolling behind the open menu
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  // Escape closes menu and search
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") {
        setMenuOpen(false);
        setSearchOpen(false);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // close the mobile menu if the window becomes desktop-sized
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth > 900) setMenuOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  // focus the input when search opens
  useEffect(() => {
    if (searchOpen) inputRef.current?.focus();
  }, [searchOpen]);

  const submitSearch = (e) => {
    e.preventDefault();
    const q = query.trim();
    if (!q) return;
    navigate(`/recipes?q=${encodeURIComponent(q)}`);
    setSearchOpen(false);
    setMenuOpen(false);
  };

  return (
    <header className={`siteHeader ${scrolled ? "scrolled" : ""}`}>

      {/* LOGO */}
      <Link to="/" className="navLogo" aria-label="DragonBite home" onClick={closeMenu}>
        <span className="navLogoMark" aria-hidden="true">🍜</span>
        <span className="navLogoText">
          <b>Dragon<em>Bite</em></b>
          <small>Chinese Kitchen</small>
        </span>
      </Link>

      {/* NAV LINKS (drawer on mobile) */}
      <nav id="primary-nav" className={`navLinks ${menuOpen ? "open" : ""}`} aria-label="Main">
        <ul>
          {links.map((l) => (
            <li key={l.to}>
              <NavLink to={l.to} end={l.end} onClick={closeMenu}>
                {l.label}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="navSocial">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><FaFacebookF /></a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><FaInstagram /></a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter"><FaTwitter /></a>
        </div>
      </nav>

      {/* RIGHT SIDE */}
      <div className="navActions">
        <form
          className={`navSearch ${searchOpen ? "open" : ""}`}
          onSubmit={submitSearch}
          role="search"
        >
          <button
            type="button"
            className="navSearchBtn"
            aria-label={searchOpen ? "Close search" : "Open search"}
            aria-expanded={searchOpen}
            onClick={() => setSearchOpen((o) => !o)}
          >
            {searchOpen ? <FiX /> : <FiSearch />}
          </button>
          <input
            ref={inputRef}
            type="search"
            placeholder="Search recipes..."
            aria-label="Search recipes"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            tabIndex={searchOpen ? 0 : -1}
          />
        </form>
<Link
  to="/recipes?saved=1"
  className="navSaved"
  aria-label={`Saved recipes (${count})`}
>
  <FiHeart aria-hidden="true" />
  {count > 0 && <span className="navSavedCount">{count}</span>}
</Link>
        <Link to="/recipes" className="navCta">Browse Recipes</Link>

        <button
          type="button"
          className="navToggle"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="primary-nav"
          onClick={() => setMenuOpen((o) => !o)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* dark overlay behind the mobile drawer */}
      <div className={`navBackdrop ${menuOpen ? "show" : ""}`} onClick={closeMenu} />
    </header>
  );
}