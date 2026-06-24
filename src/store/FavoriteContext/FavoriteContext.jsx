import { createContext, useEffect, useState } from "react";

export const FavoriteContext = createContext({});

export default function FavoriteContextProvider({ children }) {
  const [favorites, setFavorites] = useState(() => {
    const stored = localStorage.getItem("favorites");
    return stored ? JSON.parse(stored) : [];
  });

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  const toggleFavorite = (dish) => {
    setFavorites((prevFav) =>
      prevFav.some((favDish) => favDish.idMeal === dish.idMeal)
        ? prevFav.filter((favDish) => favDish.idMeal !== dish.idMeal)
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
