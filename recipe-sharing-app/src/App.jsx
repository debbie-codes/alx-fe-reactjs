import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RecipeList from "./components/RecipeList";
import AddRecipeForm from "./components/AddRecipeForm";
import RecipeDetails from "./components/RecipeDetails";
import EditRecipeForm from "./components/EditRecipeForm";

function App() {
  return (
    <Router>
      <div style={{ padding: 20, fontFamily: "Arial, sans-serif" }}>
        <h1>🍽️ Recipe Sharing App</h1>

        {/* AddRecipe + list both visible on home page */}
        <Routes>
          <Route
            path="/"
            element={
              <div>
                <AddRecipeForm />
                <RecipeList />
              </div>
            }
          />

          {/* details route */}
          <Route path="/recipes/:id" element={<RecipeDetails />} />

          {/* edit route */}
          <Route path="/recipes/:id/edit" element={<EditRecipeForm />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
