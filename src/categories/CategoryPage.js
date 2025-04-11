import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import recipeService from "../services/recipeService";
import RecipeCard from "../components/RecipeCard";

const CategoryPage = () => {
  const { category } = useParams();
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    recipeService
      .getRecipesByCategory(category)
      .then((response) => {
        setRecipes(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching recipes:", error);
        setLoading(false);
      });
  }, [category]);

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">{category} Recipes</h2>
      {loading ? (
        <p>Loading recipes...</p>
      ) : recipes.length === 0 ? (
        <p>No recipes found in this category.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {recipes.map((recipe) => (
            <RecipeCard key={recipe._id} recipe={recipe} />
          ))}
        </div>
      )}
    </div>
  );
};

export default CategoryPage;
