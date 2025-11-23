import React, { useState } from "react";
import { useRecipeStore } from "./recipeStore";

const AddRecipeForm = () => {
  const addRecipe = useRecipeStore((s) => s.addRecipe);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim() || !description.trim()) {
      alert("Please fill in both fields");
      return;
    }
    addRecipe({ id: Date.now().toString(), title, description });
    setTitle("");
    setDescription("");
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginTop: 20 }}>
      <h2>Add a New Recipe</h2>
      <input
        type="text"
        placeholder="Recipe title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        style={{ display: "block", margin: "8px 0", padding: 8, width: 320 }}
      />
      <textarea
        placeholder="Recipe description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        style={{ display: "block", margin: "8px 0", padding: 8, width: 320, height: 100 }}
      />
      <button type="submit">Add Recipe</button>
    </form>
  );
};

export default AddRecipeForm;
