import { useMemo } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { FiHeart, FiClock, FiSearch, FiX } from "react-icons/fi";
import recipes from "../data/recipes";
import details from "../data/recipeDetails";
import { unsplash, unsplashSet } from "../utils/img";
import "../styles/app.css";
import { recipePath } from "../utils/slug";
import { useFavorites } from "../context/FavoritesContext";
import FavButton from "../components/FavButton";
  

// detail data se asli values (ingredients, time, difficulty)
const info = Object.fromEntries(
  details.map((d) => [
    d.id,
    {
      ingredients: d.ingredients?.length || 0,
      time: d.time,
      difficulty: d.difficulty,
    },
  ])
);

const hasTimes = details.some((d) => d.time);


export default function Recipes() {
  const [params, setParams] = useSearchParams();
  const { ids: savedIds, count: savedCount } = useFavorites();
const savedOnly = params.get("saved") === "1";

  const q = params.get("q") || "";
  const sort = params.get("sort") || "default";
  const category = params.get("category") || "All";
  const difficulty = params.get("difficulty") || "All";
  const maxTime = params.get("time") || "any";

  const categories = useMemo(() => {
    const set = new Set(recipes.map((r) => r.category).filter(Boolean));
    return ["All", ...set];
  }, []);

  const activeCat =
    categories.find((c) => c.toLowerCase() === category.toLowerCase()) || "All";

  const update = (key, value, emptyValue = "") => {
    const next = new URLSearchParams(params);
    if (!value || value === emptyValue) next.delete(key);
    else next.set(key, value);
    setParams(next, { replace: true });
  };

  const clearAll = () => setParams({}, { replace: true });

  const list = useMemo(() => {
    const term = q.trim().toLowerCase();

    let out = recipes.filter((r) => {
      const text = `${r.title || ""} ${r.desc || ""}`.toLowerCase();
      const matchText = !term || text.includes(term);
      const matchCat =
        activeCat === "All" ||
        (r.category || "").toLowerCase() === activeCat.toLowerCase();

      const c = info[r.id] || {};
      const matchDiff = difficulty === "All" || c.difficulty === difficulty;
      const matchTime =
        maxTime === "any" || (c.time && c.time <= Number(maxTime));

      // return matchText && matchCat && matchDiff && matchTime;
      const matchSaved = !savedOnly || savedIds.includes(r.id);
return matchText && matchCat && matchDiff && matchTime && matchSaved;dependency
    });

    if (sort === "az") out = [...out].sort((a, b) => a.title.localeCompare(b.title));
    if (sort === "za") out = [...out].sort((a, b) => b.title.localeCompare(a.title));
    if (sort === "fewest")
      out = [...out].sort(
        (a, b) => (info[a.id]?.ingredients ?? 99) - (info[b.id]?.ingredients ?? 99)
      );

    return out;
  // }, [q, sort, activeCat, difficulty, maxTime]);
  }, [q, sort, activeCat, difficulty, maxTime, savedOnly, savedIds]);

  const hasFilters =
    q ||
    sort !== "default" ||
    activeCat !== "All" ||
    difficulty !== "All" ||
    maxTime !== "any";

  return (
    <div className="menuPage">

      {/* HEADER */}
      <header className="menuHeader">
        <span className="menuLabel">Full Menu</span>
        <h1 className="menuTitle">
          Our Signature <span>Menu</span>
        </h1>
        <p className="menuSub">
          Authentic Chinese dishes crafted with tradition &amp; taste
        </p>
        <div className="menuOrnament" aria-hidden="true">
          <i></i>
        </div>
      </header>

      {/* TOOLBAR */}
      <div className="menuToolbar">
        <div className="menuSearch">
          <FiSearch aria-hidden="true" />
          <input
            type="search"
            placeholder="Search recipes..."
            aria-label="Search recipes"
            value={q}
            onChange={(e) => update("q", e.target.value)}
          />
          {q && (
            <button
              type="button"
              aria-label="Clear search"
              onClick={() => update("q", "")}
            >
              <FiX />
            </button>
          )}
        </div>

        <label className="menuSort">
          <span>Sort</span>
          <select
            value={sort}
            onChange={(e) => update("sort", e.target.value, "default")}
          >
            <option value="default">Featured</option>
            <option value="az">Name A–Z</option>
            <option value="za">Name Z–A</option>
            <option value="fewest">Fewest ingredients</option>
          </select>
        </label>

        {hasTimes && (
          <label className="menuSort">
            <span>Time</span>
            <select
              value={maxTime}
              onChange={(e) => update("time", e.target.value, "any")}
            >
              <option value="any">Any</option>
              <option value="20">Under 20 min</option>
              <option value="30">Under 30 min</option>
              <option value="45">Under 45 min</option>
            </select>
          </label>
        )}
      </div>

      {/* CATEGORY CHIPS */}
      <div className="menuChips" role="group" aria-label="Filter recipes">
  <button
    type="button"
    className={`menuChip savedChip ${savedOnly ? "active" : ""}`}
    aria-pressed={savedOnly}
    onClick={() => update("saved", savedOnly ? "" : "1")}
  >
    <FiHeart aria-hidden="true" /> Saved{savedCount > 0 && ` (${savedCount})`}
  </button>

  {categories.length > 1 &&
    categories.map((c) => (
      <button
        key={c}
        type="button"
        className={`menuChip ${c === activeCat ? "active" : ""}`}
        aria-pressed={c === activeCat}
        onClick={() => update("category", c, "All")}
      >
        {c}
      </button>
    ))}
</div>
      {/* {categories.length > 1 && (
        <div className="menuChips" role="group" aria-label="Filter by category">
          {categories.map((c) => (
            <button
              key={c}
              type="button"
              className={`menuChip ${c === activeCat ? "active" : ""}`}
              aria-pressed={c === activeCat}
              onClick={() => update("category", c, "All")}
            >
              {c}
            </button>
          ))}
        </div>
      )} */}

    

    <p className="menuCount" aria-live="polite">
  <span>
    Showing <b>{list.length}</b> of {recipes.length} recipes
  </span>
  {hasFilters && (
    <button type="button" className="menuReset" onClick={clearAll}>
      Reset filters
    </button>
  )}
</p>

      {/* GRID or EMPTY STATE */}
      {list.length > 0 ? (
        <div className="menuGrid">
          {list.map((item, i) => {
            const c = info[item.id];
            return (
          <Link
  // to={`/recipe/${item.id}`}
  to={recipePath(item)}
  className="cardAnim"
  key={item.id}
  style={{ "--i": i }}
>
  <div className="imgBox">
    <img
      src={unsplash(item.image, 800)}
      srcSet={unsplashSet(item.image, [400, 800])}
      sizes="(max-width: 600px) 100vw, 380px"
      alt={item.title}
      loading="lazy"
      decoding="async"
    />
  </div>

  {item.category && <span className="index">{item.category}</span>}
  <span className="goBtn" aria-hidden="true">→</span>
<FavButton id={item.id} title={item.title} className="onCard" />

  <div className="cardContent">
    <h3>{item.title}</h3>
    <p>{item.desc}</p>

    {c && (
      <div className="cardMeta">
        {c.time && (
          <span>
            <FiClock aria-hidden="true" /> {c.time} min
          </span>
        )}
        {c.difficulty && <span>{c.difficulty}</span>}
        {sort === "fewest" && <span>{c.ingredients} ingredients</span>}
      </div>
    )}
  </div>
</Link>
            );
          })}
        </div>
      ) : (
        // <div className="menuEmpty">
        //   <h3>No recipes found</h3>
        //   <p>
        //     {q
        //       ? `Nothing matches "${q}". Try a shorter word or a different category.`
        //       : "Nothing matches these filters."}
        //   </p>
        //   <button type="button" className="menuEmptyBtn" onClick={clearAll}>
        //     Show all recipes
        //   </button>
        // </div>
        <div className="menuEmpty">
  <h3>{savedOnly && !q ? "No saved recipes yet" : "No recipes found"}</h3>
  <p>
    {savedOnly && !q
      ? "Tap the heart on any recipe to save it here."
      : q
      ? `Nothing matches "${q}". Try a shorter word or a different category.`
      : "Nothing matches these filters."}
  </p>
  <button type="button" className="menuEmptyBtn" onClick={clearAll}>
    Show all recipes
  </button>
</div>
      )}

    </div>
  );
}