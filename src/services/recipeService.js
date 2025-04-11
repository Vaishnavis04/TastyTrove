
// src/services/recipeService.js
// import api from "./api";

// const recipeService = {
//   // Get all recipes
//   getRecipes: () => api.get("/recipes"),

//   // Get a single recipe by ID
//   getRecipeById: (id) => api.get(`/recipes/${id}`),

//   // Get recipes by category
//   getRecipesByCategory: (category) => api.get(`/recipes/category/${category}`),

//   // Create a new recipe
//   createRecipe: (recipeData) =>
//     api.post("/recipes", recipeData, {
//       headers: {
//         Authorization: `Bearer ${localStorage.getItem("token")}`,
//         "Content-Type": "multipart/form-data",
//       },
//     }),

//   // Update a recipe by ID
//   updateRecipe: (id, recipeData) =>
//     api.put(`/recipes/${id}`, recipeData, {
//       headers: {
//         Authorization: `Bearer ${localStorage.getItem("token")}`,
//       },
//     }),

//   // Delete a recipe by ID
//   deleteRecipe: (id) =>
//     api.delete(`/recipes/${id}`, {
//       headers: {
//         Authorization: `Bearer ${localStorage.getItem("token")}`,
//       },
//     }),
// };

// export default recipeService;

import api from "./api";

const recipeService = {
  // Get all recipes
  getRecipes: () => api.get("/recipes"),

  // Get a single recipe by ID
  getRecipeById: (id) => api.get(`/recipes/${id}`),

  // Get recipes by category
  getRecipesByCategory: (category) => api.get(`/recipes/category/${category}`),

  // Create a new recipe
  createRecipe: (recipeData) =>
    api.post("/recipes", recipeData, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
        "Content-Type": "multipart/form-data",
      },
    }),

  // Create multiple recipes (Bulk insert)
  createManyRecipes: (recipesData) =>
    api.post("/recipes/many", recipesData, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
        "Content-Type": "application/json", // Since it's an array of JSON objects
      },
    }),

  // Update a recipe by ID
  updateRecipe: (id, recipeData) =>
    api.put(`/recipes/${id}`, recipeData, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    }),

  // Delete a recipe by ID
  deleteRecipe: (id) =>
    api.delete(`/recipes/${id}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    }),
};

export default recipeService;
