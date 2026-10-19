import { useState } from "react";
import recipes from "../data/recipes";
import { Link } from "react-router-dom";
// import heroImg from "../assets/home.png";
import heroImg from "../assets/home.webp";
import { FiClock, FiPlay } from "react-icons/fi";
import { unsplash, unsplashSet } from "../utils/img";
import { recipePath } from "../utils/slug";
import FavButton from "../components/FavButton";
import details from "../data/recipeDetails";
const stories = [
  {
    image:
      "https://images.unsplash.com/photo-1765582870011-ff3cfdb06700?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "A Beautiful Family Dinner Experience",
    text: "We visited DragonBite and had an amazing evening. The food was authentic, fresh, and full of flavor. The chef even came to greet us.",
    tag: "Feels like home in China",
    name: "Guest Name",
    role: "Family dinner",
    rating: 5,
  },
  {
    image:
      "https://plus.unsplash.com/premium_photo-1661766983546-c923002564a5?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Street Food Vibes Inside the Restaurant",
    text: "The atmosphere reminded us of Chinese street food markets. Every dish was perfectly cooked and beautifully presented.",
    tag: "Authentic and unforgettable",
    name: "Guest Name",
    role: "Friends night out",
    rating: 5,
  },
  {
    image:
      "https://images.unsplash.com/photo-1762792809262-938b146e98bb?q=80&w=1031&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Chef Interaction Made It Special",
    text: "Meeting the chef was the highlight of our visit. He explained the dishes and shared the story behind traditional recipes.",
    tag: "Best dining experience ever",
    name: "Guest Name",
    role: "Dinner with the chef",
    rating: 5,
  },
];
const chefPhoto = "https://plus.unsplash.com/premium_photo-1664392391115-44d93afb1a34";
const times = details.map((d) => d.time).filter(Boolean);
const avgTime = times.length
  ? Math.round(times.reduce((a, b) => a + b, 0) / times.length)
  : null;
const categoryCount = new Set(recipes.map((r) => r.category).filter(Boolean)).size;
export default function Home() {
   const handleMove = (e) => {
    const r = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--x", `${e.clientX - r.left}px`);
    e.currentTarget.style.setProperty("--y", `${e.clientY - r.top}px`);
  };
const categories = [
  {
    name: "Noodles",
    image: "https://images.unsplash.com/photo-1637241612435-afd8c1a91801?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Rice",
    image: "https://images.unsplash.com/photo-1644131447497-8723db691320?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Chicken",
    image: "https://images.unsplash.com/photo-1643886027883-1a23fe41ee2a?q=80&w=580&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Beef",
    image: "https://images.unsplash.com/photo-1619719015339-133a130520f6?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Veg",
    image: "https://images.unsplash.com/photo-1653193245257-2548509f562f?q=80&w=949&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Soups",
    image: "https://images.unsplash.com/photo-1603208614668-b35c95647eaf?q=80&w=872&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Dim Sum",
    image: "https://images.unsplash.com/photo-1545809278-56c8739d74e1?q=80&w=830&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];
const skills = [
  {
    title: "Wok Heat Mastery",
    desc: "Control heat like a professional Cantonese chef for perfect results.",
    image: "https://images.unsplash.com/photo-1595515307144-38cbcca434b9?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    level: "Beginner",
    time: "15 min",
  },
  {
    title: "Knife Cutting Skills",
    desc: "Learn precise cutting techniques used in authentic Chinese kitchens.",
    image: "https://images.unsplash.com/photo-1690944254380-c97a2881d940?q=80&w=869&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    level: "Beginner",
    time: "20 min",
  },
  {
    title: "Texture & Flavor Control",
    desc: "Master crunch, softness, and restaurant-style textures easily.",
    image: "https://images.unsplash.com/photo-1649750100659-9e96b0703a08?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    level: "Intermediate",
    time: "25 min",
  },
];
// const videos = [
//   {
//     title: "Easy Weeknight Meals",
//     src: "https://www.youtube.com/embed/OTAwvdRJn6M?autoplay=1&mute=1&loop=1&playlist=OTAwvdRJn6M",
//   },
//   {
//     title: "Noodle Recipes",
//     src: "https://www.youtube.com/embed/ExNnwP1fIhY",
//   },
//   {
//     title: "Street Cooking Experience",
//     src: "https://www.youtube.com/embed/8-iD2mr_7zU",
//   },

// ];
const videos = [
  { id: "OTAwvdRJn6M", title: "Easy Weeknight Meals" },
  { id: "ExNnwP1fIhY", title: "Noodle Recipes" },
  { id: "8-iD2mr_7zU", title: "Street Cooking Experience" },
];
const handleTilt = (e) => {
  const r = e.currentTarget.getBoundingClientRect();
  const x = (e.clientX - r.left) / r.width - 0.5;
  const y = (e.clientY - r.top) / r.height - 0.5;
  e.currentTarget.style.setProperty("--ry", `${x * 12}deg`);
  e.currentTarget.style.setProperty("--rx", `${-y * 10}deg`);
};

const resetTilt = (e) => {
  e.currentTarget.style.setProperty("--ry", "0deg");
  e.currentTarget.style.setProperty("--rx", "0deg");
};
  return (
    <div className="home">

    
      {/* HERO SECTION */}
<section className="hero">
  <div className="heroContainer">

    <div className="heroLeft">
      <span className="heroBadge">Authentic Recipes · Step by Step</span>

      <h1>
        Experience Real <span className="accent">Chinese Flavors</span>
      </h1>

      <p>
        Authentic dim sum and traditional dishes, explained step by step
        so you can cook them at home with confidence.
      </p>

      <div className="heroActions">
        <button
          className="btnPrimary"
          onClick={() =>
            document.getElementById("menu").scrollIntoView({ behavior: "smooth" })
          }
        >
          View Our Menu
        </button>

        {/* change "/recipes" to the same path your navbar "Recipes" link uses */}
        <Link to="/recipes" className="btnGhost">
          Explore Recipes
        </Link> 
       
      </div>

      {/* <div className="heroStats">
        <div>
          <strong>{recipes.length}</strong>
          <span>Recipes</span>
        </div>
        <div>
          <strong>4.9★</strong>
          <span>Average rating</span>
        </div>
        <div>
          <strong>30 min</strong>
          <span>Avg. cook time</span>
        </div>
      </div> */}
      
<div className="heroStats">
  <div>
    <strong>{recipes.length}</strong>
    <span>Recipes</span>
  </div>
  <div>
    <strong>{categoryCount}</strong>
    <span>Categories</span>
  </div>
  {avgTime && (
    <div>
      <strong>{avgTime} min</strong>
      <span>Avg. cook time</span>
    </div>
  )}
</div>
    </div>

    <div className="heroRight">
      <div className="heroGlow"></div>
      <img
  src={heroImg}
  alt="Steaming bowl of Chinese noodles with egg and spring onion"
  width="1000"
  height="800"
  fetchPriority="high"
/>
    </div>

  </div>
</section>

      {/* FEATURED SLIDER */}
      <Featured recipes={recipes} />

      
 <section className="gridSection" id="menu">
<div className="sectionHead">
  <span className="sectionLabel">Our Menu</span>
  <h2 className="sectionTitle">
    Popular <span>Recipes</span>
  </h2>
  <p className="sectionSub">
    Hand-picked Chinese favorites, from street-style noodles to comforting soups.
  </p>
  <div className="sectionOrnament" aria-hidden="true">
    <i></i>
  </div>
</div>

  <div className="bigGrid">
    {recipes.map((item, i) => (
      <Link
        // to={`/recipe/${item.id}`}
        to={recipePath(item)}
        className="cardAnim"
        key={item.id}
        style={{ "--i": i }}
        onMouseMove={handleMove}
      >
   <div className="imgBox">
  <img
    src={unsplash(item.image, 800)}
    srcSet={unsplashSet(item.image, [400, 800])}
    sizes="(max-width: 600px) 100vw, 380px"
    alt={item.title}
    loading="lazy"
  />
</div>

        <span className="index">{String(i + 1).padStart(2, "0")}</span>
        <span className="goBtn">→</span>
        <FavButton id={item.id} title={item.title} className="onCard" />

        <div className="cardContent">
          <h3>{item.title}</h3>
          <p>{item.desc}</p>
        </div>
      </Link>
    ))}
  </div>

  <div className="sectionCta">
    <Link to="/recipes" className="outlineBtn">View All Recipes</Link>
  </div>
</section>

     
<section className="categoriesUltra">
  <div className="catHead">
 <span className="catLabel">Browse By Type</span>
  <h2 className="catTitle">
    Explore <span>Categories</span>
  </h2>
  <p className="catSub">Pick what you are craving and start cooking.</p>
  <div className="catOrnament" aria-hidden="true">
    <i></i>
  </div>  
</div>

<div className="catRow">
  {categories.map((cat) => {
    const count = recipes.filter(
      (r) => r.category?.toLowerCase() === cat.name.toLowerCase()
    ).length;

    return (
      <Link
        to={`/recipes?category=${encodeURIComponent(cat.name)}`}
        className="catCard"
        key={cat.name}
        aria-label={`Browse ${cat.name} recipes (${count})`}
      >
        <div className="catImg">
          <img
            src={unsplash(cat.image, 240)}
            srcSet={unsplashSet(cat.image, [120, 240])}
            sizes="116px"
            alt=""
            loading="lazy"
          />
        </div>
        <p>{cat.name}</p>
        <span className="catCount">
          {count} {count === 1 ? "recipe" : "recipes"}
        </span>
      </Link>
    );
  })}
</div>
</section>
      
<section className="coursesUltra">
  <h2 className="courseTitle">
    Master Chinese <span>Cooking Skills</span>
  </h2>

  <div className="courseGrid">
    {skills.map((s, i) => (
  <article className="courseCard" key={s.title} style={{ "--i": i }}>
  <div className="courseImg">
    {/* <img src={s.image} alt={s.title} loading="lazy" /> */}
<img
  src={unsplash(s.image, 800)}
  srcSet={unsplashSet(s.image, [400, 800])}
  sizes="(max-width: 600px) 100vw, 380px"
  alt={s.title}
  loading="lazy"
/>
    <div className="courseChips">
      <span className="courseChip level">{s.level}</span>
      <span className="courseChip">
        <FiClock aria-hidden="true" /> {s.time}
      </span>
    </div>
  </div>

  <div className="courseBody">
    <h3>{s.title}</h3>
    <p>{s.desc}</p>
    <span className="courseLine" aria-hidden="true"></span>
  </div>
</article>
    ))}
  </div>
</section>
{/* FLAVOR STORY SECTION */}
<section className="flavorStory">

<h2>How Real <span>Chinese Flavor</span> is Built</h2>
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
  <h2 className="collectionTitle">
    Recipe <span>Collections</span>
  </h2>

  <div className="collectionGrid">
    {videos.map((v, i) => (
     <article className="collectionCard" key={v.title} style={{ "--i": i }}>
  <VideoPlayer video={v} />

  <div className="collectionCaption">
    <span className="collNum">{String(i + 1).padStart(2, "0")}</span>
    <h3>{v.title}</h3>
  </div>
</article>
    ))}
  </div>
</section>
<section className="chefUltra">
  <div className="chefBox">

    <div className="chefText">
      <span className="chefEyebrow">The Story Behind DragonBite</span>

      <h2>
        Meet the <span>Chef</span>
      </h2>

      <p className="chefLead">
        DragonBite is inspired by generations of authentic Chinese cooking
        passed down through family kitchens. Our recipes are built on
        tradition, real cooking experience, and the simple idea of making
        authentic Chinese food easy for everyone at home.
      </p>

      <p>
        From hand-pulled noodles to perfectly balanced stir-fries, every dish
        reflects years of practice, culture, and passion for real food. We
        believe cooking is not just a skill — it’s a way to connect families,
        memories, and flavors together.
      </p>

    
       <Link to="/about" className="chefBtn">
  <span>Read Our Story</span>
  <i className="chefArrow">→</i>
</Link>
  
    </div>

    <div className="chefImg">
      <div
        className="chefFrame"
        onMouseMove={handleTilt}
        onMouseLeave={resetTilt}
      >
        <div className="chefPhoto">
          {/* <img
            src="https://plus.unsplash.com/premium_photo-1664392391115-44d93afb1a34"
            alt="Chef preparing authentic Chinese food"
            loading="lazy"
          /> */}
          <img
  src={unsplash(chefPhoto, 800)}
  srcSet={unsplashSet(chefPhoto, [400, 800])}
  sizes="(max-width: 900px) 100vw, 520px"
  alt="Chef preparing authentic Chinese food"
  loading="lazy"
/>
        </div>

        <div className="chefSeal" aria-hidden="true">
          <svg viewBox="0 0 120 120">
            <defs>
              <path
                id="sealPath"
                d="M60,60 m-46,0 a46,46 0 1,1 92,0 a46,46 0 1,1 -92,0"
              />
            </defs>
            <text>
              <textPath
                href="#sealPath"
                textLength="283"
                lengthAdjust="spacing"
              >
                DRAGONBITE • AUTHENTIC CHINESE •
              </textPath>
            </text>
          </svg>
          <b>龍</b>
        </div>

        <span className="chefBadge">Generations of Tradition</span>
      </div>
    </div>

  </div>
</section>
<section className="blogUltra">
  <div className="storiesHead">
    <span className="storiesLabel">Reviews</span>
    <h2 className="storiesTitle">
      Loved by <span>Food Lovers</span>
    </h2>
    <p className="storiesSub">
      Real moments, shared meals, and flavors people remember.
    </p>
    <div className="storiesOrnament" aria-hidden="true">
      <i></i>
    </div>
  </div>

  <div className="blogShortGrid">
    {stories.map((s) => (
      <article className="blogCard" key={s.title}>
        <div className="storyImg">
          {/* <img src={s.image} alt={s.title} loading="lazy" /> */}
          <img
  src={unsplash(s.image, 800)}
  srcSet={unsplashSet(s.image, [400, 800])}
  sizes="(max-width: 600px) 100vw, 380px"
  alt={s.title}
  loading="lazy"
/>
          <span className="storyTag">{s.tag}</span>
        </div>

        <div className="storyBody">
          <div
            className="storyStars"
            role="img"
            aria-label={`${s.rating} out of 5 stars`}
          >
            {"★".repeat(s.rating)}
          </div>

          <h3>{s.title}</h3>
          <p>{s.text}</p>

          <div className="storyAuthor">
            <span className="storyAvatar">{s.name.charAt(0)}</span>
            <div>
              <strong>{s.name}</strong>
              <span>{s.role}</span>
            </div>
          </div>
        </div>
      </article>
    ))}
  </div>
</section>
    </div>
  );
}

function Featured({ recipes }) {
  return (
    <section className="featuredRow">
     <div className="featuredHead">
  <span className="featuredLabel">Chef's Picks</span>
  <h2 className="featuredTitle">
    Our <span>Recipes</span>
  </h2>
  <p className="featuredSub">
    Hand-picked favorites from our kitchen, ready to cook at home.
  </p>
  <div className="featuredOrnament" aria-hidden="true">
    <i></i>
  </div>
</div>

      <div className="marquee">
        <div
          className="marqueeTrack"
          style={{ "--duration": `${recipes.length * 4}s` }}
        >
          {[0, 1].map((copy) => (
            <div className="marqueeGroup" key={copy} aria-hidden={copy === 1}>
              {recipes.map((item) => (
                <Link
                  // to={`/recipe/${item.id}`}
                  to={recipePath(item)}
                  className="archCard"
                  key={`${copy}-${item.id}`}
                  tabIndex={copy === 1 ? -1 : undefined}
                >
                 <div className="archImg">
  <img
    src={unsplash(item.image, 400)}
    srcSet={unsplashSet(item.image, [200, 400])}
    sizes="200px"
    alt={item.title}
    loading="lazy"
  />
</div>
                  <p>{item.title}</p>
                </Link>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>

  );
}
function VideoPlayer({ video }) {
  const [playing, setPlaying] = useState(false);

  if (playing) {
    return (
      <div className="videoCard">
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${video.id}?autoplay=1&rel=0`}
          title={video.title}
          allow="autoplay; encrypted-media; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    );
  }

  return (
    <button
      type="button"
      className="videoCard videoThumb"
      onClick={() => setPlaying(true)}
      aria-label={`Play video: ${video.title}`}
    >
      <img
        src={`https://img.youtube.com/vi/${video.id}/hqdefault.jpg`}
        alt=""
        loading="lazy"
        width="480"
        height="360"
      />
      <span className="videoPlay" aria-hidden="true">
        <FiPlay />
      </span>
    </button>
  );
}