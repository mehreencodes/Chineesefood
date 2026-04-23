export default function About() {
  return (
    <div className="aboutPage">

      {/* HERO */}
      <section className="aboutHero">
        <h1>About DragonBite 🍜</h1>
        <p>
          Authentic Chinese home cooking made simple, fresh, and full of flavor.
        </p>
      </section>

      {/* STORY + IMAGE */}
      <section className="aboutStory">

        <div className="aboutText">
          <h2>Our Story</h2>
          <p>
         <p>
DragonBite brings authentic Chinese cooking into your home with
simple methods, real ingredients, and traditional techniques.
</p>
          </p>

          <p>
            We focus on real flavors, balanced spices, and techniques that
            anyone can learn — even beginners.
          </p>
        </div>

        <div className="aboutImg">
          <img
            src="https://plus.unsplash.com/premium_photo-1664392391115-44d93afb1a34"
            alt="Chef cooking"
          />
        </div>

      </section>
      

{/* CHEF QUOTE */}
<section className="chefQuote">

  <div className="quoteBox">
    <p>
     <p>
“Great food isn’t complicated — it’s about balance, heat, and
respect for ingredients.”
</p>
    </p>

    <h4>— DragonBite Kitchen</h4>
  </div>

</section>



      {/* FEATURES */}
      <section className="aboutGrid">

        <div className="aboutCard">
          <h3>🥢 Authentic Recipes</h3>
          <p>Traditional dishes inspired by real Chinese kitchens.</p>
        </div>

        <div className="aboutCard">
          <h3>👨‍🍳 Easy Cooking</h3>
          <p>Simple step-by-step guides for everyone.</p>
        </div>

        <div className="aboutCard">
          <h3>🔥 Real Flavor</h3>
          <p>Balanced spices and restaurant-style taste at home.</p>
        </div>

      </section>

{/* TESTIMONIALS */}
<section className="testimonials">

  <h2>What People Say 🍜</h2>

  <div className="testGrid">

    <div className="testCard">
      <p>
        “The recipes are so easy to follow. I made my first Chinese dish at home!”
      </p>
      <h4>— Ayesha</h4>
    </div>

    <div className="testCard">
      <p>
        “Feels like restaurant-quality food. The flavors are amazing!”
      </p>
      <h4>— Ali</h4>
    </div>

    <div className="testCard">
      <p>
        “Simple, clean, and very helpful for beginners like me.”
      </p>
      <h4>— Sara</h4>
    </div>

  </div>

</section>

{/* WHY CHOOSE US */}
<section className="aboutWhy">

  <h2>Why DragonBite?</h2>

  <div className="whyGrid">

    <div className="whyCard">
      <h3>50+</h3>
      <p>Authentic Recipes</p>
    </div>

    <div className="whyCard">
      <h3>10K+</h3>
      <p>Happy Food Lovers</p>
    </div>

    <div className="whyCard">
      <h3>100%</h3>
      <p>Homestyle Cooking</p>
    </div>

    <div className="whyCard">
      <h3>Easy</h3>
      <p>Beginner Friendly</p>
    </div>

  </div>

</section>

      {/* CTA */}
      <section className="aboutCTA">
        <h2>Start Your Cooking Journey 🍜</h2>
        <p>Explore recipes and bring authentic taste to your kitchen.</p>
      </section>

    </div>
  );
}