import { useEffect } from "react";
import { Link } from "react-router-dom";
import { FiBookOpen, FiList, FiZap } from "react-icons/fi";
import recipes from "../data/recipes";
import { unsplash, unsplashSet } from "../utils/img";

const chefImg = "https://plus.unsplash.com/premium_photo-1664392391115-44d93afb1a34";
const values = [
  {
    icon: FiBookOpen,
    title: "Authentic Recipes",
    text: "Traditional dishes inspired by real Chinese kitchens.",
  },
  {
    icon: FiList,
    title: "Easy Cooking",
    text: "Simple step-by-step guides for everyone.",
  },
  {
    icon: FiZap,
    title: "Real Flavor",
    text: "Balanced spices and restaurant-style taste at home.",
  },
];

// real numbers from your own data
const categoryCount = new Set(
  recipes.map((r) => r.category).filter(Boolean)
).size;

const stats = [
  { value: recipes.length, label: "Authentic recipes" },
  ...(categoryCount ? [{ value: categoryCount, label: "Dish categories" }] : []),
  { value: "Easy", label: "Beginner friendly" },
];

export default function About() {
  useEffect(() => {
    const previous = document.title;
    document.title = "About | DragonBite";
    return () => {
      document.title = previous;
    };
  }, []);

  return (
    <div className="abPage">
      <div className="abWrap">

        {/* HERO */}
        <header className="abHead">
          <span className="abLabel">About Us</span>
          <h1 className="abTitle">
            About <span>DragonBite</span>
          </h1>
          <p className="abSub">
            Authentic Chinese home cooking made simple, fresh, and full of flavor.
          </p>
          <div className="abOrnament" aria-hidden="true">
            <i></i>
          </div>
        </header>

        {/* STORY */}
        <section className="abStory">
          <div className="abStoryText">
            <h2>Our Story</h2>

            <p>
              DragonBite brings authentic Chinese cooking into your home with
              simple methods, real ingredients, and traditional techniques.
            </p>
            <p>
              We focus on real flavors, balanced spices, and techniques that
              anyone can learn — even beginners.
            </p>

            <blockquote className="abQuote">
              <p>
                “Great food isn’t complicated — it’s about balance, heat, and
                respect for ingredients.”
              </p>
              <cite>DragonBite Kitchen</cite>
            </blockquote>

            <div className="abActions">
              <Link to="/recipes" className="abBtn">Browse Recipes</Link>
              <Link to="/contact" className="abBtnGhost">Get in touch</Link>
            </div>
          </div>

          <figure className="abStoryImg">
            {/* <img
              src="https://plus.unsplash.com/premium_photo-1664392391115-44d93afb1a34"
              alt="Chef cooking in a wok"
              loading="lazy"
            /> */}
            <img
  src={unsplash(chefImg, 840)}
  srcSet={unsplashSet(chefImg, [420, 840])}
  sizes="(max-width: 900px) 100vw, 420px"
  alt="Chef cooking in a wok"
  loading="lazy"
/>
          </figure>
        </section>

        {/* STATS */}
        <section className="abStats" aria-label="DragonBite at a glance">
          {stats.map((s) => (
            <div className="abStat" key={s.label}>
              <strong>{s.value}</strong>
              <span>{s.label}</span>
            </div>
          ))}
        </section>

        {/* VALUES */}
        <section className="abValues">
          <div className="abHead compact">
            <span className="abLabel">Why DragonBite</span>
            <h2 className="abTitle">
              What We <span>Stand For</span>
            </h2>
            <div className="abOrnament" aria-hidden="true">
              <i></i>
            </div>
          </div>

          <div className="abGrid">
            {values.map((v) => {
              const Icon = v.icon;
              return (
                <article className="abCard" key={v.title}>
                  <span className="abIcon" aria-hidden="true">
                    <Icon />
                  </span>
                  <h3>{v.title}</h3>
                  <p>{v.text}</p>
                </article>
              );
            })}
          </div>
        </section>

      </div>
    </div>
  );
}