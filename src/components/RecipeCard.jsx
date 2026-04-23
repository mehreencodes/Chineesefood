import { Link } from "react-router-dom";

export default function RecipeCard({ item }) {
  return (
    <Link to={`/recipe/${item.id}`} className="card">

      <img src={item.image} alt={item.title} />

      <h3>{item.title}</h3>

      <p>{item.desc}</p>

    </Link>
  );
}