// // src/pages/RecipeDetails.js
// import React, { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';
// import api from '../services/recipeService';

// const RecipeDetails = () => {
//     const { id } = useParams();
//     const [recipe, setRecipe] = useState(null);

//     useEffect(() => {
//         const fetchRecipe = async () => {
//             const response = await api.get(`/recipes/${id}`);
//             setRecipe(response.data);
//         };
//         fetchRecipe();
//     }, [id]);

//     if (!recipe) return <p>Loading...</p>;

//     return (
//         <div>
//             <h2>{recipe.title}</h2>
//             <img src={recipe.image} alt={recipe.title} />
//             <p>Cuisine: {recipe.cuisine}</p>
//             <p>Ingredients: {recipe.ingredients}</p>
//             <p>Instructions: {recipe.instructions}</p>
//         </div>
//     );
// };

// export default RecipeDetails;
//pages->RecipeDetails.js
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import recipeService from "../services/recipeService";

const RecipeDetails = () => {
    const { id } = useParams();
    const [recipe, setRecipe] = useState(null);

    useEffect(() => {
        const fetchRecipe = async () => {
            try {
                const response = await recipeService.getRecipeById(id);
                console.log(response.data); // Check API response structure
                setRecipe(response.data);
            } catch (error) {
                console.error("Failed to load recipe:", error);
            }
        };
        fetchRecipe();
    }, [id]);

    if (!recipe) return <p>Loading...</p>;

    // Base URL for backend images
    const backendURL = process.env.REACT_APP_BACKEND_URL || "http://localhost:5000";

    // Check if recipe.image exists and if it's not an absolute URL
    const imageUrl = recipe.image
        ? (recipe.image.startsWith("http") ? recipe.image : `${backendURL}/${recipe.image}`)
        : "/default-image.jpg"; // Fallback image if no image is found

    return (
        <div className="recipe-details-container">
            <h2 className="recipe-title">{recipe.title}</h2>
            {recipe.image && (
                <img
                    src={imageUrl}
                    alt={recipe.title}
                    className="recipe-image"
                />
            )}
            <p className="recipe-cuisine">Cuisine: {recipe.cuisine ? recipe.cuisine : "Unknown"}</p>
            <p className="recipe-ingredients">Ingredients: {recipe.ingredients.join(", ")}</p>
            <p className="recipe-instructions">Instructions: {recipe.instructions}</p>
        </div>
    );
};

export default RecipeDetails;

<style jsx>{`
  .recipe-details-container {
    font-family: 'Arial', sans-serif;
    margin: 20px;
    padding: 20px;
    border: 1px solid #ffcc80;
    border-radius: 8px;
    background-color: #fff9db; /* Light yellow background */
    max-width: 800px;
    margin-left: auto;
    margin-right: auto;
    box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);
  }

  .recipe-title {
    font-size: 2rem;
    color: #ff8800; /* Deep orange title */
    margin-bottom: 15px;
    text-align: center;
  }

  .recipe-image {
    width: 100%;
    height: 400px;
    object-fit: cover;
    border-radius: 10px;
    margin-bottom: 20px;
    border: 2px solid #ffcc80;
  }

  .recipe-cuisine, .recipe-ingredients, .recipe-instructions {
    font-size: 1.1rem;
    color: #333; /* Dark grey for readability */
    line-height: 1.6;
    padding: 10px;
    background: #ffeb99;
    border-radius: 5px;
  }

  .recipe-cuisine {
    margin-top: 10px;
    font-weight: bold;
  }

  .recipe-ingredients {
    margin-top: 10px;
  }

  .recipe-instructions {
    margin-top: 10px;
  }
`}</style>
