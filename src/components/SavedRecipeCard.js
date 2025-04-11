// src/components/SavedRecipeCard.js
import React from "react";
import { Link } from "react-router-dom";
const SavedRecipeCard = ({ recipe, onUnsave }) => {
    if (!recipe) return null; // Prevent errors if recipe is undefined

    const backendURL = process.env.REACT_APP_BACKEND_URL || "http://localhost:5000";
    const imageUrl = recipe.image
        ? (recipe.image.startsWith("http") ? recipe.image : `${backendURL}/${recipe.image}`)
        : "/default-image.jpg"; // Fallback image

    return (
        <div className="recipe-card">
            <img
                src={imageUrl}
                alt={recipe.title}
                className="recipe-image"
                onError={(e) => (e.target.src = "/default-image.jpg")} // Fallback if image fails
            />
            <h2 className="recipe-title">{recipe.title}</h2>
            <p className="recipe-cuisine">Cuisine: {recipe.cuisine}</p>
            <button onClick={() => onUnsave(recipe._id)} className="unsave-button">
                Unsave Recipe
            </button>

            <Link to={`/recipe/${recipe._id}`} className="view-recipe-button">
                View Recipe
            </Link>
        </div>
    );
};
const styles = {
    card: {
        background: '#fff',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        borderRadius: '8px',
        overflow: 'hidden',
        padding: '16px',
        textAlign: 'center',
        border: '1px solid #ddd'
    },
    image: {
        width: '100%',
        height: '200px',
        objectFit: 'cover',
        borderRadius: '8px'
    },
    title: {
        fontSize: '1.2rem',
        fontWeight: 'bold',
        color: '#333',
        marginTop: '10px'
    },
    cuisine: {
        color: '#666',
        fontSize: '0.9rem'
    },
    buttonContainer: {
        marginTop: '10px',
        display: 'flex',
        justifyContent: 'center',
        gap: '10px'
    },
    unsaveButton: {
        backgroundColor: '#e74c3c',
        color: 'white',
        padding: '8px 16px',
        borderRadius: '5px',
        border: 'none',
        cursor: 'pointer',
        transition: 'background 0.3s'
    },
    viewButton: {
        backgroundColor: '#3498db',
        color: 'white',
        padding: '8px 16px',
        borderRadius: '5px',
        textDecoration: 'none',
        transition: 'background 0.3s'
    }
};

export default SavedRecipeCard;
