// src/categories/Pasta.js
import React, { useEffect, useState } from "react";
import RecipeCard from "../components/RecipeCard";
import recipeService from "../services/recipeService";

const Pasta = () => {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPastaRecipes = async () => {
      try {
        const response = await recipeService.getRecipesByCategory("pasta");
        setRecipes(response.data);
      } catch (err) {
        console.error("Error fetching pasta recipes:", err);
        setError("Failed to load pasta recipes. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchPastaRecipes();
  }, []);

  if (loading) return <p>Loading pasta recipes...</p>;
  if (error) return <p className="error">{error}</p>;

  return (
    <div className="pasta-container">
      <h2 className="section-title">Pasta Recipes</h2>
      <p>Explore a variety of delicious pasta recipes!</p>

      <div className="recipes-grid">
        {recipes.length > 0 ? (
          recipes.map((recipe) => (
            <RecipeCard key={recipe._id} recipe={recipe} onSave={() => {}} />
          ))
        ) : (
          <p>No pasta recipes found.</p>
        )}
      </div>
    </div>
  );
};

export default Pasta;
<style jsx>{`
  .category-container {
    font-family: 'Arial', sans-serif;
    background-color: #f9f9f9; /* Light background */
    color: #333; /* Dark text for contrast */
    max-width: 900px;
    margin: 20px auto;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  }

  h2 {
    font-size: 2rem;
    color: #2c3e50;
    margin-bottom: 10px;
    text-align: center;
  }

  p {
    font-size: 1.1rem;
    color: #555;
    text-align: center;
  }

  .recipes-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 20px;
    margin-top: 20px;
  }

  .recipes-grid p {
    grid-column: span 2;
    text-align: center;
    font-style: italic;
    color: #777;
  }
`}</style>