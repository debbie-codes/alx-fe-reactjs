import React from "react";
import { useNavigate } from "react-router-dom";
import { useRecipeStore } from "./recipeStore";

const DeleteRecipeButton = ({ recipeId }) => {
  const deleteRecipe = useRecipeStore((s) => s.deleteRecipe);
  const navigate = useNavigate();

  const handleDelete = () => {
    if (!window.confirm("Are you sure you want to delete this recipe?")) return;
    deleteRecipe(recipeId);
    navigate("/"); // go back to list after delete
  };

  return (
    <button onClick={handleDelete} style={{ backgroundColor: "#e53935", color: "white" }}>
      Delete
    </button>
  );
};

export default DeleteRecipeButton;
