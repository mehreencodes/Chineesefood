import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footerUltra">

      <div className="footerBox">
        <h3>DragonBite 🍜</h3>
        <p>Authentic Chinese Culinary Experience</p>
      </div>

      <div className="footerBox">
        <h4>Quick Links</h4>
         {/* <p>Home</p>
        <p>Recipes</p>
        <p>About</p>
          <p>Contact</p>  */}
        <Link to="/" className="footerLink">Home</Link>
<Link to="/recipes" className="footerLink">Recipes</Link>
<Link to="/about" className="footerLink">About</Link>
<Link to="/contact" className="footerLink">Contact</Link>
      </div>

      <div className="footerBox">
        <h4>Follow Us</h4>

        <div className="socialImgs">
          <img src="https://cdn-icons-png.flaticon.com/512/174/174855.png" />
          <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" />
          <img src="https://cdn-icons-png.flaticon.com/512/174/174883.png" />
        </div>
      </div>

      <div className="footerBottom">
        © 2026 DragonBite. All rights reserved.
      </div>

    </footer>
  );
}