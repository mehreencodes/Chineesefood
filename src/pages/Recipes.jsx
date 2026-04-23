import recipes from "../data/recipes";
import RecipeCard from "../components/RecipeCard";
import "../styles/app.css";

export default function Recipes() {
  return (
    <div className="menuPage">

      {/* HEADER */}
      <header className="menuHeader">
        <h1>Our Signature Menu 🍜</h1>
        <p>Authentic Chinese dishes crafted with tradition & taste</p>
      </header>

      {/* GRID */}
      <section className="menuSection">
        <div className="menuGrid">

          {recipes.map((item) => (
            <RecipeCard key={item.id} item={item} />
          ))}

        </div>
      </section>

    </div>
  );
}