import { useRef } from "react";
import recipes from "../data/recipes";
import { Link } from "react-router-dom";
import heroImg from "../assets/home.png";

export default function Home() {
  return (
    <div className="home">

      {/* HERO SECTION */}
      <section className="hero">
        <div className="heroContainer">

          <div className="heroLeft">
           <div className="brand">
  <span className="brandIcon">🍜</span>
  <span className="brandName">DragonBite Kitchen</span>
</div>

            <h1>Experience Real Chinese Flavors</h1>

            <p>
              Authentic dim sum and traditional dishes made with high-quality ingredients.
            </p>

            
            <button onClick={() => document.getElementById("menu").scrollIntoView({ behavior: "smooth" })}>
  View Our Menu
</button>
          </div>

          <div className="heroRight">
            <img src={heroImg} alt="Chinese Food" />
          </div>

        </div>
      </section>


      {/* FEATURED SLIDER */}
      <Featured recipes={recipes} />

      {/* GRID SECTION */}
      <section className="gridSection" id="menu">
        <h2>🍜 Popular Recipes</h2>

        <div className="bigGrid">
          {recipes.map((item) => (
            <Link to={`/recipe/${item.id}`} className="cardAnim" key={item.id}>
              <div className="imgBox">
                <img src={item.image} />
              </div>

              <div className="cardContent">
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
                <span className="tag">Authentic Chinese</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

     {/* <section className="categoriesUltra">
  <h2>🍱 Explore Categories</h2>

  <div className="catGrid">
    <div>Noodles 🍜</div>
    <div>Rice Dishes 🍚</div>
    <div>Chicken Specials 🍗</div>
    <div>Beef Recipes 🥩</div>
    <div>Vegetarian 🥬</div>
    <div>Soups & Broths 🍲</div>
    <div>Dim Sum 🥟</div>
    <div>Sichuan Spicy 🔥</div>
    <div>Street Food 🛒</div>
    <div>Stir Fry 🍳</div>
  </div>
</section> */}
<section className="categoriesUltra">
  <h2>🍱 Explore Categories</h2>

  <div className="catRow">

    <div className="catCard">
      <div className="catImg">
        <img src="https://images.unsplash.com/photo-1637241612435-afd8c1a91801?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
      </div>
      <p>Noodles 🍜</p>
    </div>

    <div className="catCard">
      <div className="catImg">
        <img src="https://images.unsplash.com/photo-1644131447497-8723db691320?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
      </div>
      <p>Rice 🍚</p>
    </div>

    <div className="catCard">
      <div className="catImg">
        <img src="https://images.unsplash.com/photo-1643886027883-1a23fe41ee2a?q=80&w=580&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
      </div>
      <p>Chicken 🍗</p>
    </div>

    <div className="catCard">
      <div className="catImg">
        <img src="https://images.unsplash.com/photo-1619719015339-133a130520f6?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
      </div>
      <p>Beef 🥩</p>
    </div>

    <div className="catCard">
      <div className="catImg">
        <img src="https://images.unsplash.com/photo-1653193245257-2548509f562f?q=80&w=949&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
      </div>
      <p>Veg 🥬</p>
    </div>

    <div className="catCard">
      <div className="catImg">
        <img src="https://images.unsplash.com/photo-1603208614668-b35c95647eaf?q=80&w=872&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
      </div>
      <p>Soups 🍲</p>
    </div>

    <div className="catCard">
      <div className="catImg">
        <img src="https://images.unsplash.com/photo-1545809278-56c8739d74e1?q=80&w=830&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
      </div>
      <p>Dim Sum 🥟</p>
    </div>

  </div>
</section>
      
<section className="coursesUltra">
  <h2>🎓 Master Chinese Cooking Skills</h2>

  <div className="courseGrid">

    <div className="courseCard">
      <img src="https://images.unsplash.com/photo-1595515307144-38cbcca434b9?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
      <h3>🔥 Wok Heat Mastery</h3>
      <p>Control heat like a professional Cantonese chef for perfect results.</p>
    </div>

    <div className="courseCard">
      <img src="https://images.unsplash.com/photo-1690944254380-c97a2881d940?q=80&w=869&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
      <h3>🔪 Knife Cutting Skills</h3>
      <p>Learn precise cutting techniques used in authentic Chinese kitchens.</p>
    </div>

    <div className="courseCard">
      <img src="https://images.unsplash.com/photo-1649750100659-9e96b0703a08?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
      <h3>🥢 Texture & Flavor Control</h3>
      <p>Master crunch, softness, and restaurant-style textures easily.</p>
    </div>

  </div>
</section>
{/* FLAVOR STORY SECTION */}
<section className="flavorStory">

  <h2>How Real Chinese Flavor is Built</h2>

  <div className="storyLine">

    <div className="storyItem">
      <span>01</span>
      <div>
        <h3>Fresh Market Selection</h3>
        <p>Every dish starts with hand-picked fresh ingredients from trusted sources.</p>
      </div>
    </div>

    <div className="storyItem">
      <span>02</span>
      <div>
        <h3>High Heat Wok Cooking</h3>
        <p>Authentic wok technique locks in aroma and deep flavor instantly.</p>
      </div>
    </div>

    <div className="storyItem">
      <span>03</span>
      <div>
        <h3>Flavor Balance</h3>
        <p>Sweet, salty, spicy, and umami blended in perfect harmony.</p>
      </div>
    </div>

    <div className="storyItem">
      <span>04</span>
      <div>
        <h3>Served With Precision</h3>
        <p>Timing matters — every dish is served fresh and hot instantly.</p>
      </div>
    </div>

  </div>

</section>
 <section className="collectionUltra">
  <h2>📚 Recipe Collections</h2>

  <div className="collectionGrid">

    {/* CARD 1 */}
    <div className="collectionCard">
      <div className="videoCard">
        <iframe
          src="https://www.youtube.com/embed/OTAwvdRJn6M?autoplay=1&mute=1&loop=1&playlist=OTAwvdRJn6M"
          title="video1"
          allow="autoplay; encrypted-media"
        ></iframe>

        <div className="overlay">
          <h3>Easy Weeknight Meals</h3>
        </div>
      </div>
    </div>

    {/* CARD 2 */}
    <div className="collectionCard">
      <div className="videoCard">
        <iframe
          src="https://www.youtube.com/embed/ExNnwP1fIhY"
          title="video2"
          allow="autoplay; encrypted-media"
        ></iframe>

        <div className="overlay">
          <h3>Noodle Recipes</h3>
        </div>
      </div>
    </div>

    {/* CARD 3 */}
    <div className="collectionCard">
      <div className="videoCard">
        <iframe
          src="https://www.youtube.com/embed/8-iD2mr_7zU"
          title="video3"
          allow="autoplay; encrypted-media"
        ></iframe>

        <div className="overlay">
          <h3>Street Cooking Experience</h3>
        </div>
      </div>
    </div>

  </div>
</section>
      <section className="chefUltra">
        <div className="chefBox">

          <div className="chefText">
            <h2>👨‍🍳 Meet the Chef</h2>
            <p>
  DragonBite is inspired by generations of authentic Chinese cooking passed
  down through family kitchens. Our recipes are built on tradition, real
  cooking experience, and the simple idea of making authentic Chinese food
  easy for everyone at home.
  <br /><br />
  From hand-pulled noodles to perfectly balanced stir-fries, every dish
  reflects years of practice, culture, and passion for real food. We believe
  cooking is not just a skill — it’s a way to connect families, memories, and
  flavors together.
</p>
            <button className="chefBtn">Explore Recipes</button>
          </div>

          <div className="chefImg">
            <img src="https://plus.unsplash.com/premium_photo-1664392391115-44d93afb1a34" />
          </div>

        </div>
      </section>
<section className="blogUltra">
  <h2>📰 Customer Experience Stories</h2>

  <div className="blogShortGrid">

    <div className="blogCard">
      <img src="https://images.unsplash.com/photo-1765582870011-ff3cfdb06700?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />

      <div className="blogText">
        <h4>“A Beautiful Family Dinner Experience”</h4>
        <p>
          We visited DragonBite and had an amazing evening. The food was
          authentic, fresh, and full of flavor. The chef even came to greet us.
        </p>

        <span className="tagLine">⭐ “Feels like home in China”</span>
      </div>
    </div>

    <div className="blogCard">
      <img src="https://plus.unsplash.com/premium_photo-1661766983546-c923002564a5?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />

      <div className="blogText">
        <h4>“Street Food Vibes Inside the Restaurant”</h4>
        <p>
          The atmosphere reminded us of Chinese street food markets. Every dish
          was perfectly cooked and beautifully presented.
        </p>

        <span className="tagLine">🔥 “Authentic and unforgettable”</span>
      </div>
    </div>

    <div className="blogCard">
      <img src="https://images.unsplash.com/photo-1762792809262-938b146e98bb?q=80&w=1031&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />

      <div className="blogText">
        <h4>“Chef Interaction Made It Special”</h4>
        <p>
          Meeting the chef was the highlight of our visit. He explained the
          dishes and shared the story behind traditional recipes.
        </p>

        <span className="tagLine">🍜 “Best dining experience ever”</span>
      </div>
    </div>

  </div>
</section>
    </div>
  );
}

/* 🔥 FEATURED COMPONENT (CORRECT PLACE) */
function Featured({ recipes }) {
  const sliderRef = useRef(null);

  const scrollLeft = () => {
    sliderRef.current.scrollBy({ left: -260, behavior: "smooth" });
  };

  const scrollRight = () => {
    sliderRef.current.scrollBy({ left: 260, behavior: "smooth" });
  };

  return (
    <section className="featuredRow">
  <h2>🍜 Our Recipes</h2>

  {/* WRAPPER ADDED */}
  <div className="sliderWrapper">

    {/* LEFT BUTTON */}
    <button className="slideBtn left" onClick={scrollLeft}>
      ‹
    </button>

    {/* SCROLL AREA */}
    <div className="scrollRow" ref={sliderRef}>
      {recipes.map((item) => (
        <Link to={`/recipe/${item.id}`} className="smallCard" key={item.id}>
          <img src={item.image} alt={item.title} />
          <p>{item.title}</p>
        </Link>
      ))}
    </div>

    {/* RIGHT BUTTON */}
    <button className="slideBtn right" onClick={scrollRight}>
      ›
    </button>

  </div>
</section>
  );
}