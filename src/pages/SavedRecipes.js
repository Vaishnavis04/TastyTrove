
// // src/pages/SavedRecipes.js
// import React, { useEffect, useState } from "react";
// import SavedRecipeCard from '../components/SavedRecipeCard';
// import savedRecipeService from "../services/savedRecipeService";

// const SavedRecipes = () => {
//     const [savedRecipes, setSavedRecipes] = useState([]);

//     useEffect(() => {
//         const fetchSavedRecipes = async () => {
//             const token = localStorage.getItem("token");
//             if (!token) {
//                 alert("You need to log in to view saved recipes.");
//                 return;
//             }

//             try {
//                 const response = await savedRecipeService.getSavedRecipes(token);
//                 setSavedRecipes(response.data);
//             } catch (error) {
//                 console.error("Error fetching saved recipes:", error.response?.data || error.message);
//                 alert("Error fetching saved recipes.");
//             }
//         };

//         fetchSavedRecipes();
//     }, []);
//     const handleUnsaveRecipe = async (recipeId) => {
//         const token = localStorage.getItem("token");
//         if (!token) {
//             alert("You need to log in to unsave recipes.");
//             return;
//         }
    
//         try {
//             await savedRecipeService.removeSavedRecipe(recipeId, token);
//             // Immediately update the UI by removing the recipe
//             setSavedRecipes(prev => prev.filter(({ recipe }) => recipe._id !== recipeId));
//             alert("Recipe successfully removed from your saved list.");
//         } catch (error) {
//             console.error("Error unsaving recipe:", error.response?.data || error.message);
//             alert("Error removing recipe. Please try again.");
//         }
//     };

//     return (
//         <div>
//             <h2>Saved Recipes</h2>
//             {savedRecipes.length > 0 ? (
//                 savedRecipes.map(({ recipe }) => (
//                     <SavedRecipeCard
//                         key={recipe._id}
//                         recipe={recipe}
//                         onUnsave={handleUnsaveRecipe}
//                     />
//                 ))
//             ) : (
//                 <p>No saved recipes yet.</p>
//             )}
//         </div>
//     );
// };

// export default SavedRecipes;
import React, { useEffect, useState } from "react";
import SavedRecipeCard from '../components/SavedRecipeCard';
import savedRecipeService from "../services/savedRecipeService";
// import "./SavedRecipes.css"; // Optional: For styling the message

const SavedRecipes = () => {
    const [savedRecipes, setSavedRecipes] = useState([]);
    const [message, setMessage] = useState(""); // State for temporary messages

    useEffect(() => {
        const fetchSavedRecipes = async () => {
            const token = localStorage.getItem("token");
            if (!token) {
                setMessage("You need to log in to view saved recipes.");
                clearMessage();
                return;
            }

            try {
                const response = await savedRecipeService.getSavedRecipes(token);
                setSavedRecipes(response.data);
            } catch (error) {
                console.error("Error fetching saved recipes:", error.response?.data || error.message);
                setMessage("Error fetching saved recipes.");
                clearMessage();
            }
        };

        fetchSavedRecipes();
    }, []);

    const clearMessage = () => {
        setTimeout(() => setMessage(""), 3000); // Clear after 3 seconds
    };

    const handleUnsaveRecipe = async (recipeId) => {
        const token = localStorage.getItem("token");
        if (!token) {
            alert("You need to log in to unsave recipes.");
            return;
        }
    
        try {
            await savedRecipeService.removeSavedRecipe(recipeId, token);
            setSavedRecipes(prev => prev.filter(({ recipe }) => recipe._id !== recipeId));
            
            // Success alert
            alert("Recipe successfully removed from your saved list.");
        } catch (error) {
            console.error("Error unsaving recipe:", error.response?.data || error.message);
            
            // Error alert
            alert("Error removing recipe. Please try again.");
        }
    };
    

    return (
        <div className="saved-recipes-container">
            <h2>Saved Recipes</h2>
            {message && <div className="alert-message">{message}</div>} {/* Temporary message display */}

            {savedRecipes.length > 0 ? (
                savedRecipes.map(({ recipe }) => (
                    <SavedRecipeCard
                        key={recipe._id}
                        recipe={recipe}
                        onUnsave={handleUnsaveRecipe}
                    />
                ))
            ) : (
                <p>No saved recipes yet.</p>
            )}
        </div>
    );
};

export default SavedRecipes;
