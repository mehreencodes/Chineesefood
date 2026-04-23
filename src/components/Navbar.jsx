
import { Link } from "react-router-dom";
import { FiSearch } from "react-icons/fi";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import { FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";

export default function Navbar() {
  const [search, setSearch] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);


  const handleSearch = (e) => {
    setSearch(e.target.value);
    console.log("Searching:", e.target.value);
  };

  return (


  <header className="header">

      {/* LOGO */}
      <div className="logo">
        <span>DragonBite</span>
      </div>

     
      {/* NAV LINKS */}
      <nav className={`mainNav ${menuOpen ? "active" : ""}`}>
        {/* className="mainNav" */}
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/recipes">Recipes</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
         {/* SOCIAL (inside mobile menu) */}
        <div className="socialIcons mobileSocial">
         <FaFacebookF />
<FaInstagram />
<FaTwitter />
        </div>
      </nav>

      {/* RIGHT SIDE */}
      <div className="navIcons">
 {/* TOGGLE BUTTON */}
      <div className="menuToggle" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>
        {/* SEARCH */}
        <div className="searchBox">
          <FiSearch />
          <input
            type="text"
            placeholder="Search..."
            value={search}
            onChange={handleSearch}
          />
        </div>

        {/* SOCIAL */}
        <div className="socialIcons desktopSocial">
          <FaFacebookF />
          <FaInstagram />
          <FaTwitter />
        </div>

      </div>

    </header>
  );
}