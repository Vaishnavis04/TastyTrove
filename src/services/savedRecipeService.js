// import api from './apis';

// const savedRecipeService = {
//   // Get all saved recipes
//   getSavedRecipes: () => api.get('/saved-recipes', {
//     headers: {
//       Authorization: `Bearer ${localStorage.getItem('token')}`,
//     },
//   }),

//   // Save a recipe
//   saveRecipe: (recipeId) => api.post('/saved-recipes', { recipeId }, {
//     headers: {
//       Authorization: `Bearer ${localStorage.getItem('token')}`,
//     },
//   }),

//   // Remove a saved recipe
//   removeSavedRecipe: (recipeId) => api.delete(`/saved-recipes/${recipeId}`, {
//     headers: {
//       Authorization: `Bearer ${localStorage.getItem('token')}`,
//     },
//   }),
// };

// export default savedRecipeService;
// src/services/savedRecipeService.js
import axios from '../services/apis'; // Use the API configuration (which includes the token)

const savedRecipeService = {
    getSavedRecipes: () => axios.get('/saved-recipes'),
    saveRecipe: (recipeId) => axios.post('/saved-recipes', { recipeId }),
    removeSavedRecipe: (recipeId) => axios.delete(`/saved-recipes/${recipeId}`),
};

export default savedRecipeService;
