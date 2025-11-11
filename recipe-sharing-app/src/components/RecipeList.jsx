import React from "react";
import { useRecipeStore } from "../recipeStore";
import { Link } from "react-router-dom";

const RecipeList = () => {
  const recipes = useRecipeStore((state) => state.recipes);
  const favorites = useRecipeStore((state) => state.favorites);
  const addFavorite = useRecipeStore((state) => state.addFavorite);
  const removeFavorite = useRecipeStore((state) => state.removeFavorite);

  return (
    <div style={{ padding: "20px" }}>
      <h2>All Recipes</h2>
      {recipes.map((recipe) => (
        <div
          key={recipe.id}
          style={{
            border: "1px solid #ddd",
            borderRadius: "10px",
            padding: "10px",
            margin: "10px 0",
          }}
        >
          <h3>
            <Link to={`/recipe/${recipe.id}`}>{recipe.title}</Link>
          </h3>
          <p>{recipe.description}</p>
          {favorites.includes(recipe.id) ? (
            <button onClick={() => removeFavorite(recipe.id)}>
              Remove from Favorites
            </button>
          ) : (
            <button onClick={() => addFavorite(recipe.id)}>
              Add to Favorites
            </button>
          )}
        </div>
      ))}
    </div>
  );
};

export default RecipeList;
