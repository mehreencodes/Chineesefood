import { useEffect } from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  useEffect(() => {
    const previous = document.title;
    document.title = "Page not found | DragonBite";
    return () => {
      document.title = previous;
    };
  }, []);

  return (
    <div className="nfPage">
      <div className="nfBox">
        <span className="nfCode" aria-hidden="true">404</span>

        <h1 className="nfTitle">
          This page is <span>off the menu</span>
        </h1>

        <p className="nfText">
          The page you are looking for may have been moved, or the link is
          not correct.
        </p>

        <div className="nfActions">
          <Link to="/" className="nfBtn">Back to Home</Link>
          <Link to="/recipes" className="nfBtnGhost">Browse Recipes</Link>
        </div>
      </div>
    </div>
  );
}