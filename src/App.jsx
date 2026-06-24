import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import ErrorBoundary from "./components/ErrorBoundary/ErrorBoundary.jsx";
import MenuItemDetails from "./components/MenuItem/MenuItemDetails.jsx";
import RestaurantView from "./views/RestaurantView.jsx";

import "./App.css";
import Wishlist from "./components/Wishlist/Wishlist.jsx";
import FavoriteContextProvider from "./store/FavoriteContext/FavoriteContext.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route index element={<RestaurantView />} />
        <Route path="/meals/:id" element={<MenuItemDetails />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/*" element={<p>404 Page not found</p>} />
      </Routes>
    </Router>
  );
}

// Wrap App in an ErrorBoundary to help us with development bugs

export default function WrappedApp() {
  return (
    <FavoriteContextProvider>
      {import.meta.env.MODE === "development" ? (
        <ErrorBoundary>
          <App />
        </ErrorBoundary>
      ) : (
        <App />
      )}
    </FavoriteContextProvider>
  );
}
