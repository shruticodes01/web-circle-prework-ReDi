import { createContext, useState } from "react";

export const FavoriteContext = createContext({});

export default function FavoriteContextProvider({ children }) {
  const [favorites, setFavorites] = useState([]);
  const toggleFavorite = (dish) => {
    setFavorites((prevFav) =>
      prevFav.some((favDish) => favDish.idMeal === dish.idMeal)
        ? favorites.filter((favDish) => favDish.idMeal !== dish.idMeal)
        : [dish, ...prevFav],
    );
  };

  const isFavorite = (id) => {
    return favorites.some((fav) => fav.idMeal === id);
  };

  const favCtx = {
    favorites: favorites,
    onFavorite: toggleFavorite,
    isFavorite: isFavorite,
  };
  return (
    <FavoriteContext.Provider value={favCtx}>
      {children}
    </FavoriteContext.Provider>
  );
}
