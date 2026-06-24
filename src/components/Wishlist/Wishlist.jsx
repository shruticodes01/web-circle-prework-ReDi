import { ArrowLeft } from "lucide-react";
import { useFavorites } from "../../store/FavoriteContext/useFavorites";
import MenuItem from "../MenuItem/MenuItem";
import { useNavigate } from "react-router-dom";
export default function Wishlist() {
  const { favorites } = useFavorites();
  const navigate = useNavigate();
  return (
    <section className="flex flex-col gap-4 max-md:px-2 max-md:py-4 md:py-10 md:px-10">
      <button className="cursor-pointer" onClick={() => navigate("/")}>
        <ArrowLeft />
      </button>
      <ul className="w-full flex flex-wrap list-none">
        {favorites.map((favDish) => (
          <li key={favDish.idMeal}>
            <MenuItem dish={favDish} />
          </li>
        ))}
      </ul>
    </section>
  );
}
