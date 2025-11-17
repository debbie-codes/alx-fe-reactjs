import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import RecipeList from "./components/RecipeList";
import AddRecipeForm from "./components/AddRecipeForm";
import RecipeDetails from "./components/RecipeDetails";
import FavoritesList from "./components/FavoritesList";
import RecommendationsList from "./components/RecommendationsList";

function App() {
  return (
    <Router>
      <div style={{ fontFamily: "Arial, sans-serif", margin: "20px" }}>
        <h1 style={{ textAlign: "center" }}>🍳 Recipe Sharing App</h1>

        {/* Navigation */}
        <nav style={{ display: "flex", gap: "20px", justifyContent: "center", marginBottom: "20px" }}>
          <Link to="/">All Recipes</Link>
          <Link to="/favorites">Favorites</Link>
          <Link to="/recommendations">Recommendations</Link>
          <Link to="/add">Add Recipe</Link>
        </nav>

        <Routes>
          <Route path="/" element={<RecipeList />} />
          <Route path="/add" element={<AddRecipeForm />} />
          <Route path="/recipe/:id" element={<RecipeDetails />} />
          <Route path="/favorites" element={<FavoritesList />} />
          <Route path="/recommendations" element={<RecommendationsList />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
