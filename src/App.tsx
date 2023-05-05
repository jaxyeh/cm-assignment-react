import React, { useContext } from "react";
import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import HomeView from "./views/HomeView";
import RecipeView from "./views/RecipeView";
import RecipesView from "./views/RecipesView";
import { useQuery } from "@tanstack/react-query";
import getUser from "./api/getUser";
import { AppContext } from "./store/app";
import "./i18n";

function App() {
  const { setUser } = useContext(AppContext);

  const { isLoading } = useQuery({
    queryKey: ["user"],
    queryFn: getUser,
    onSuccess: setUser,
  });

  if (isLoading) return <div>User Loading...</div>;

  return (
    <div className="app">
      <nav className="nav">
        <Link className="nav__link" to="/">
          Home
        </Link>
        <Link to="/recipes">Recipes</Link>
      </nav>
      <Routes>
        <Route path="/" element={<HomeView />} />
        <Route path="recipes" element={<RecipesView />} />
        <Route path="recipe/:id" element={<RecipeView />} />
      </Routes>
    </div>
  );
}

export default App;
