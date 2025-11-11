import { create } from "zustand";

export const useRecipeStore = create((set, get) => ({
  recipes: [],
  favorites: [],
  recommendations: [],

  // Recipe CRUD
  addRecipe: (newRecipe) =>
    set((state) => ({
      recipes: [...state.recipes, newRecipe],
    })),

  deleteRecipe: (id) =>
    set((state) => ({
      recipes: state.recipes.filter((r) => r.id !== id),
      favorites: state.favorites.filter((fid) => fid !== id),
    })),

  updateRecipe: (updatedRecipe) =>
    set((state) => ({
      recipes: state.recipes.map((r) =>
        r.id === updatedRecipe.id ? updatedRecipe : r
      ),
    })),

  // Favorites management
  addFavorite: (recipeId) => {
    const favorites = get().favorites;
    if (!favorites.includes(recipeId)) {
      set({ favorites: [...favorites, recipeId] });
    }
  },

  removeFavorite: (recipeId) =>
    set({
      favorites: get().favorites.filter((id) => id !== recipeId),
    }),

  // Generate simple recommendations based on favorites
  generateRecommendations: () => {
    const { recipes, favorites } = get();
    const recommended = recipes.filter(
      (recipe) => !favorites.includes(recipe.id) && Math.random() > 0.5
    );
    set({ recommendations: recommended });
  },
}));
