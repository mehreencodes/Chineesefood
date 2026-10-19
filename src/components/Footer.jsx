import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

export default function Footer() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="footerUltra">

      {/* CTA CARD */}
      <div className="footerCta">
        <div>
          <h3>Ready to cook something amazing?</h3>
          <p>Pick a recipe and bring real Chinese flavors to your kitchen.</p>
        </div>
        <Link to="/recipes" className="footerCtaBtn">Browse Recipes</Link>
      </div>

      {/* MAIN */}
      <div className="footerMain">

        <div className="footerBrand">
          <Link to="/" className="footerLogo">
            <span aria-hidden="true">🍜</span> DragonBite
          </Link>
          <p>
            Authentic Chinese recipes, explained step by step so you can cook
            them at home with confidence.
          </p>

          <div className="footerSocial">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <FaFacebookF />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <FaInstagram />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <FaTwitter />
            </a>
          </div>
        </div>

        <nav className="footerCol" aria-label="Quick links">
          <h4>Quick Links</h4>
          <Link to="/" className="footerLink">Home</Link>
          <Link to="/recipes" className="footerLink">Recipes</Link>
          <Link to="/about" className="footerLink">About</Link>
          <Link to="/contact" className="footerLink">Contact</Link>
        </nav>

        <nav className="footerCol" aria-label="Explore">
          <h4>Explore</h4>
          <Link to="/recipes" className="footerLink">Noodles</Link>
          <Link to="/recipes" className="footerLink">Rice Dishes</Link>
          <Link to="/recipes" className="footerLink">Chicken</Link>
          <Link to="/recipes" className="footerLink">Dim Sum</Link>
        </nav>

      </div>

      {/* BOTTOM BAR */}
      <div className="footerBottom">
        <span>© {new Date().getFullYear()} DragonBite. All rights reserved.</span>
        <button type="button" className="toTop" onClick={scrollTop} aria-label="Back to top">
          ↑ Back to top
        </button>
      </div>

    </footer>
  );
}