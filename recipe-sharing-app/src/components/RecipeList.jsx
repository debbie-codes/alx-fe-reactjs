import React from "react";
import { Link } from "react-router-dom";
import { useRecipeStore } from "./recipeStore";

const RecipeList = () => {
  const recipes = useRecipeStore((s) => s.recipes);

  return (
    <div style={{ marginTop: 20 }}>
      <h2>Recipe List</h2>
      {recipes.length === 0 ? (
        <p>No recipes yet. Add one!</p>
      ) : (
        recipes.map((recipe) => (
          <div
            key={recipe.id}
            style={{
              border: "1px solid #ccc",
              padding: 12,
              marginBottom: 12,
              borderRadius: 6,
            }}
          >
            <h3>{recipe.title}</h3>
            <p style={{ color: "#555" }}>
              {recipe.description?.slice(0, 120)}
              {recipe.description?.length > 120 ? "…" : ""}
            </p>
            <Link to={`/recipes/${recipe.id}`}>View details</Link>
          </div>
        ))
      )}
    </div>
  );
};

export default RecipeList;
