import { useNavigate } from "react-router-dom";
import styles from "./MenuItem.module.css";
import { Heart } from "lucide-react";
import { useFavorites } from "../../store/FavoriteContext/useFavorites";
import Button from "../Button/Button";

const MenuItem = ({ dish }) => {
  const { strMeal: name, strMealThumb: image } = dish;
  const navigate = useNavigate();
  const { isFavorite, onFavorite } = useFavorites();
  return (
    <div className={styles.menuItem}>
      <div className="flex justify-between items-center">
        <h3>{name}</h3>
        <button
          className="inline-flex cursor-pointer pr-4"
          onClick={() => onFavorite(dish)}
        >
          <Heart
            className={`${isFavorite(dish.idMeal) ? "fill-red-600" : "fill-white"}`}
          />
        </button>
      </div>
      <img src={image} alt={name} />
      <div className={styles.menuItemBtnContainer}>
        <Button onClick={() => navigate(`/meals/${dish.idMeal}`)}>
          Details
        </Button>
      </div>
    </div>
  );
};

export default MenuItem;
