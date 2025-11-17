import React from "react";
import { useRecipeStore } from "./recipeStore";

const FavoritesList = () => {
  const recipes = useRecipeStore((state) => state.recipes);
  const favorites = useRecipeStore((state) => state.favorites);
  const removeFavorite = useRecipeStore((state) => state.removeFavorite);

  // Convert favorite IDs to recipe objects
  const favoriteRecipes = favorites
    .map((id) => recipes.find((r) => r.id === id))
    .filter(Boolean); // Remove undefined values

  if (favoriteRecipes.length === 0) {
    return <p>No favorite recipes yet.</p>;
  }

  return (
    <div style={{ padding: "20px" }}>
      <h2>My Favorites</h2>

      {favoriteRecipes.map((recipe) => (
        <div
          key={recipe.id}
          style={{
            border: "1px solid #ddd",
            borderRadius: "10px",
            padding: "10px",
            margin: "10px 0",
          }}
        >
          <h3>{recipe.title}</h3>
          <p>{recipe.description}</p>

          <button onClick={() => removeFavorite(recipe.id)} style={{ color: "red" }}>
            Remove from Favorites
          </button>
        </div>
      ))}
    </div>
  );
};

export default FavoritesList;
