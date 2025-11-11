import React from "react";
import { useParams, Link } from "react-router-dom";
import { useRecipeStore } from "../recipeStore";
import DeleteRecipeButton from "./DeleteRecipeButton";

const RecipeDetails = () => {
  const { id } = useParams();
  const recipe = useRecipeStore((s) => s.recipes.find((r) => r.id === id));

  if (!recipe) {
    return (
      <div style={{ padding: 20 }}>
        <h2>Recipe not found</h2>
        <p>
          The recipe you are looking for doesn't exist. <Link to="/">Back to list</Link>
        </p>
      </div>
    );
  }

  return (
    <div style={{ padding: 20 }}>
      <h1>{recipe.title}</h1>
      <p style={{ whiteSpace: "pre-wrap" }}>{recipe.description}</p>

      <div style={{ marginTop: 16, display: "flex", gap: 12 }}>
        <Link to={`/recipes/${id}/edit`}>
          <button>Edit</button>
        </Link>

        <DeleteRecipeButton recipeId={id} />
        <Link to="/">
          <button>Back</button>
        </Link>
      </div>
    </div>
  );
};

export default RecipeDetails;

