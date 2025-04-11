import React from "react";
import { Link } from "react-router-dom";
import api from "../services/recipeService";
import "./RecipeCard.css"; // Import the external CSS file

const RecipeCard = ({ recipe, onSave, onDelete }) => {
    if (!recipe) return null;

    const backendURL = process.env.REACT_APP_BACKEND_URL || "http://localhost:5000";
    const imageUrl = recipe.image
        ? (recipe.image.startsWith("http") ? recipe.image : `${backendURL}/${recipe.image}`)
        : "/default-image.jpg";

    const handleDelete = async () => {
        if (window.confirm("Are you sure you want to delete this recipe?")) {
            try {
                await api.deleteRecipe(recipe._id);
                onDelete(recipe._id);
            } catch (error) {
                console.error("Failed to delete recipe:", error);
            }
        }
    };

    return (
        <div className="recipe-card">
            <img
                src={imageUrl}
                alt={recipe.title}
                className="recipe-image"
                onError={(e) => (e.target.src = "/default-image.jpg")}
            />
            <h2 className="recipe-title">{recipe.title}</h2>
            <p className="recipe-cuisine">Cuisine: {recipe.cuisine}</p>

            <button onClick={() => onSave(recipe._id)} className="save-recipe-button">
                Save Recipe
            </button>

            <Link to={`/recipe/${recipe._id}`} className="view-recipe-button">
                View Recipe
            </Link>

            <Link to={`/edit-recipe/${recipe._id}`} className="edit-recipe-button">
                Edit Recipe
            </Link>

            <button onClick={handleDelete} className="delete-recipe-button">
                Delete Recipe
            </button>
        </div>
    );
};

export default RecipeCard;
