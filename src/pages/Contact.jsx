export default function Contact() {
  return (
    <div className="contactPage">

      {/* HERO */}
      <section className="contactHero">
        <h1>Get in Touch 🍜</h1>
        <p>
          We’d love to hear your feedback, suggestions, or collaboration ideas.
        </p>
      </section>

      {/* CONTENT */}
      <section className="contactBox">

        {/* FORM */}
        <form className="contactForm">

          <h2>Send a Message</h2>

          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="Your Email" />
          <textarea placeholder="Your Message"></textarea>

          <button type="submit">Send Message</button>
        </form>

        
<div className="contactInfo">

  <h2>Restaurant Info 🍜</h2>

  <div className="infoItem">
    <span>📍</span>
    <div>
      <h4>Location</h4>
      <p>Lahore, Pakistan</p>
    </div>
  </div>

  <div className="infoItem">
    <span>📞</span>
    <div>
      <h4>Phone</h4>
      <p>+92 300 0000000</p>
    </div>
  </div>

  <div className="infoItem">
    <span>✉️</span>
    <div>
      <h4>Email</h4>
      <p>dragonbite@gmail.com</p>
    </div>
  </div>

  <div className="infoItem">
    <span>⏰</span>
    <div>
      <h4>Opening Hours</h4>
      <p>Mon - Sun: 10:00 AM - 11:00 PM</p>
    </div>
  </div>

  <div className="contactNote">
    <p>
      We respond within 24 hours. For urgent orders or catering,
      please call directly.
    </p>
  </div>

</div>
      </section>
{/* MAP */}
<section className="contactMap">

  <h2>📍 Find Us on Map</h2>

  
 
<div className="mapBox">
  <iframe
    src="https://www.google.com/maps?q=Jhelum+Pakistan&output=embed"
    className="mapFrame"
    loading="lazy"
  ></iframe>
</div>

 

</section>
    </div>
  );
}