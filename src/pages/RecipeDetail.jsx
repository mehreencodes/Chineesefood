import { useEffect, useMemo, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import {
  FiArrowLeft,
   FiBarChart2,
   FiCheck,
   FiClock,
     FiHeart,
   FiList,
   FiShoppingBag,
 } from "react-icons/fi";

import recipes from "../data/recipeDetails";
import baseRecipes from "../data/recipes";
import { unsplash, unsplashSet } from "../utils/img";
import { slugify, recipePath } from "../utils/slug";
import { FaHeart } from "react-icons/fa";
import { useFavorites } from "../context/FavoritesContext";
import FavButton from "../components/FavButton";


const TICKED_KEY = "dragonbite-ticked";

export default function RecipeDetail() {
  // the route stays /recipe/:id, but the value is now a slug
  const { id: slug } = useParams();
  const navigate = useNavigate();
  const { isFav, toggle: toggleFav } = useFavorites();


  // new links use the slug, old links use the number (/recipe/3)
  const base = baseRecipes.find(
    (r) => slugify(r.title) === slug || String(r.id) === slug
  );
  const saved = base ? isFav(base.id) : false;
  const recipe = base && recipes.find((r) => r.id === base.id);
  const category = base?.category;
  const title = recipe?.title;

  // ticked ingredients live for this browser tab session
  const [doneMap, setDoneMap] = useState(() => {
    try {
      return JSON.parse(sessionStorage.getItem(TICKED_KEY)) || {};
    } catch {
      return {};
    }
  });

  useEffect(() => {
    try {
      sessionStorage.setItem(TICKED_KEY, JSON.stringify(doneMap));
    } catch {
      /* storage not available, ignore */
    }
  }, [doneMap]);

  const done = doneMap[base?.id] || [];

  // old number links redirect to the clean URL
  useEffect(() => {
    if (base && slug !== slugify(base.title)) {
      navigate(recipePath(base), { replace: true });
    }
  }, [base, slug, navigate]);

  // browser tab title
  useEffect(() => {
    if (!title) return;
    const previous = document.title;
    document.title = `${title} | DragonBite`;
    return () => {
      document.title = previous;
    };
  }, [title]);

  // same category first, then the rest
  const related = useMemo(() => {
    if (!base) return [];
    const others = baseRecipes.filter((r) => r.id !== base.id);
    const same = others.filter((r) => r.category === base.category);
    const rest = others.filter((r) => r.category !== base.category);
    return [...same, ...rest].slice(0, 3);
  }, [base]);

  if (!recipe) {
    return (
      <div className="recipePage notFound">
        <h1>Recipe not found</h1>
        <p>This recipe may have been moved or removed.</p>
        <Link to="/recipes" className="rdBtn">Browse all recipes</Link>
      </div>
    );
  }

  const ingredients = recipe.ingredients || [];
  const steps = recipe.steps || [];
  const pct = ingredients.length
    ? Math.round((done.length / ingredients.length) * 100)
    : 0;

  // go back to the previous page (keeps recipe filters), or to /recipes
  const goBack = () => {
    if (window.history.state?.idx > 0) navigate(-1);
    else navigate("/recipes");
  };

  const toggle = (index) =>
    setDoneMap((m) => {
      const current = m[base.id] || [];
      return {
        ...m,
        [base.id]: current.includes(index)
          ? current.filter((x) => x !== index)
          : [...current, index],
      };
    });

  return (
    <div className="recipePage">
      <div className="rdWrap">

        {/* <button type="button" className="rdBack" onClick={goBack}>
          <FiArrowLeft aria-hidden="true" /> Back to recipes
        </button> */}
        <div className="rdTop">
  <button type="button" className="rdBack" onClick={goBack}>
    <FiArrowLeft aria-hidden="true" /> Back to recipes
  </button>

  <button
    type="button"
    className={`rdSave ${saved ? "saved" : ""}`}
    aria-pressed={saved}
    onClick={() => toggleFav(base.id)}
  >
    {saved ? <FaHeart aria-hidden="true" /> : <FiHeart aria-hidden="true" />}
    {saved ? "Saved" : "Save recipe"}
  </button>
</div>

        {/* HERO */}
        <header className="rdHero">
          <img
            src={unsplash(recipe.image, 1400)}
            srcSet={unsplashSet(recipe.image, [700, 1400])}
            sizes="(max-width: 1200px) 100vw, 1200px"
            alt={recipe.title}
            fetchPriority="high"
            decoding="async"
          />

          <div className="rdHeroText">
            {category && <span className="rdLabel">{category}</span>}
            <h1>{recipe.title}</h1>
            <p>{recipe.desc}</p>

            <div className="rdMeta">
              {recipe.time && (
                <span><FiClock aria-hidden="true" /> {recipe.time} min</span>
              )}
              {recipe.difficulty && (
                <span><FiBarChart2 aria-hidden="true" /> {recipe.difficulty}</span>
              )}
              {ingredients.length > 0 && (
                <span><FiShoppingBag aria-hidden="true" /> {ingredients.length} ingredients</span>
              )}
              {steps.length > 0 && (
                <span><FiList aria-hidden="true" /> {steps.length} steps</span>
              )}
            </div>
          </div>
        </header>

        {/* INGREDIENTS + METHOD */}
        <div className="rdLayout">

          <aside className="rdIngredients">
            <div className="rdPanelHead">
              <h2>Ingredients</h2>
              <span>{done.length}/{ingredients.length}</span>
            </div>

            <div
              className="rdProgress"
              role="progressbar"
              aria-label="Ingredients ready"
              aria-valuemin={0}
              aria-valuemax={100}
              aria-valuenow={pct}
            >
              <i style={{ width: `${pct}%` }}></i>
            </div>

            <ul>
              {ingredients.map((item, index) => (
                <li key={index}>
                  <label className={done.includes(index) ? "checked" : ""}>
                    <input
                      type="checkbox"
                      checked={done.includes(index)}
                      onChange={() => toggle(index)}
                    />
                    <span className="rdBox"><FiCheck aria-hidden="true" /></span>
                    <span className="rdText">{item}</span>
                  </label>
                </li>
              ))}
            </ul>

            <p className="rdHint">Tick ingredients off as you gather them.</p>
          </aside>

          {/* <div className="rdSteps">
            <h2>Method</h2>
            <ol> */}
            <div className="rdSteps">
  <h2>Method</h2>
  <ol>
              {steps.map((s, index) => (
                <li key={index}>
                  <span className="rdStepNum">{index + 1}</span>
                  <p>{s}</p>
                </li>
              ))}
            </ol>
          </div>

        </div>

        {/* FULL DESCRIPTION */}
        {recipe.fullDesc && (
          <div className="rdNotes">
            <h2>How to Cook This Dish</h2>
            <p>{recipe.fullDesc}</p>
          </div>
        )}

        {/* RELATED */}
        {related.length > 0 && (
          <div className="rdRelated">
            <h2>You might also like</h2>

            <div className="relatedGrid">
              {related.map((r, i) => (
                <Link
                  to={recipePath(r)}
                  className="cardAnim"
                  key={r.id}
                  style={{ "--i": i }}
                >
                  <div className="imgBox">
                    <img
                      src={unsplash(r.image, 800)}
                      srcSet={unsplashSet(r.image, [400, 800])}
                      sizes="(max-width: 600px) 100vw, 380px"
                      alt={r.title}
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                  <span className="goBtn" aria-hidden="true">→</span>
                  <FavButton id={r.id} title={r.title} className="onCard" />
                  <div className="cardContent">
                    <h3>{r.title}</h3>
                    <p>{r.desc}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

      </div>
    
    </div>
  );
}