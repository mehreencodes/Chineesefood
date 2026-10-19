import { FiHeart } from "react-icons/fi";
import { FaHeart } from "react-icons/fa";
import { useFavorites } from "../context/FavoritesContext";

export default function FavButton({ id, title, className = "" }) {
  const { isFav, toggle } = useFavorites();
  const saved = isFav(id);

  return (
    <button
      type="button"
      className={`favBtn ${saved ? "saved" : ""} ${className}`}
      aria-pressed={saved}
      aria-label={saved ? `Remove ${title} from saved recipes` : `Save ${title}`}
      onClick={(e) => {
        // the card is a link, so stop the click from opening the recipe
        e.preventDefault();
        e.stopPropagation();
        toggle(id);
      }}
    >
      {saved ? <FaHeart aria-hidden="true" /> : <FiHeart aria-hidden="true" />}
    </button>
  );
}