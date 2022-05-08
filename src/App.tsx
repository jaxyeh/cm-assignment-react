import React from 'react';
import { Routes, Route, Link } from "react-router-dom";
import './App.css';
import HomeView from './views/HomeView';
import RecipeView from './views/RecipeView';
import RecipesView from './views/RecipesView';

function App() {
  return (
    <div className="app">
      <nav className="nav">
        <Link className="nav__link" to="/">Home</Link>
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
