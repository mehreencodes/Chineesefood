import { useParams, Link } from "react-router-dom";
import recipes from "../data/recipeDetails";

export default function RecipeDetail() {
  const { id } = useParams();

  const recipe = recipes.find((r) => r.id === Number(id));

  if (!recipe) return <h2>Not found</h2>;

  return (
    <div className="recipePage">

      <Link to="/recipes" className="closeBtn">✖</Link>

      <div className="heroImg">
        <img src={recipe.image} alt={recipe.title} />
      </div>

      <div className="contentBox">
        <h1>{recipe.title}</h1>
        <p>{recipe.desc}</p>

        {/* 2 COLUMNS */}
        <div className="twoCol">

          <div>
            <h3>Ingredients</h3>
            <ul>
              {recipe.ingredients?.map((i, index) => (
                <li key={index}>{i}</li>
              ))}
            </ul>
          </div>

          <div>
            <h3>Steps</h3>
            <ol>
              {recipe.steps?.map((s, index) => (
                <li key={index}>{s}</li>
              ))}
            </ol>
          </div>

        </div>

        {/* 👇 NEW FULL DESCRIPTION SECTION */}
        <div className="fullDescBox">
          <h3>🍜 How to Cook This Dish</h3>
          <p>{recipe.fullDesc}</p>
        </div>

      </div>
    </div>
  );
}