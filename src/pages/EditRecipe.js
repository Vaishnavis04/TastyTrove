// // src/pages/EditRecipe.js
// import React, { useState, useEffect } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import api from '../services/recipeService';

// const EditRecipe = () => {
//     const { id } = useParams();
//     const navigate = useNavigate();
//     const [recipe, setRecipe] = useState({ title: '', cuisine: '', ingredients: '', instructions: '', image: '' });

//     useEffect(() => {
//         const fetchRecipe = async () => {
//             const response = await api.get(`/recipes/${id}`);
//             setRecipe(response.data);
//         };
//         fetchRecipe();
//     }, [id]);

//     const handleChange = (e) => {
//         if (e.target.name === "image") {
//             setRecipe({ ...recipe, image: e.target.files[0] });
//         } else {
//             setRecipe({ ...recipe, [e.target.name]: e.target.value });
//         }
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         const formData = new FormData();
//         Object.keys(recipe).forEach(key => formData.append(key, recipe[key]));
        
//         try {
//             await api.put(`/recipes/${id}`, formData, {
//                 headers: {
//                     'Content-Type': 'multipart/form-data', // Ensure the image is handled
//                 },
//             });
//             navigate('/');
//         } catch (error) {
//             console.error('Error updating recipe:', error);
//         }
//     };

//     return (
//         <div>
//             <h2>Edit Recipe</h2>
//             <form onSubmit={handleSubmit}>
//                 <input type="text" name="title" value={recipe.title} onChange={handleChange} />
//                 <input type="text" name="cuisine" value={recipe.cuisine} onChange={handleChange} />
//                 <textarea name="ingredients" value={recipe.ingredients} onChange={handleChange}></textarea>
//                 <textarea name="instructions" value={recipe.instructions} onChange={handleChange}></textarea>
//                 <input type="file" name="image" onChange={handleChange} />
//                 <button type="submit">Update</button>
//             </form>
//         </div>
//     );
// };

// export default EditRecipe;
//pages->EditRecipe.js
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import recipeService from '../services/recipeService'; // Corrected import

const EditRecipe = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [recipe, setRecipe] = useState({
        title: '',
        cuisine: '',
        ingredients: '',
        instructions: '',
        image: ''
    });

    useEffect(() => {
        const fetchRecipe = async () => {
            try {
                const response = await recipeService.getRecipeById(id); // Using recipeService correctly
                setRecipe(response.data);
            } catch (error) {
                console.error('Error fetching recipe:', error);
            }
        };
        fetchRecipe();
    }, [id]);

    const handleChange = (e) => {
        if (e.target.name === "image") {
            setRecipe({ ...recipe, image: e.target.files[0] });
        } else {
            setRecipe({ ...recipe, [e.target.name]: e.target.value });
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        Object.keys(recipe).forEach(key => formData.append(key, recipe[key]));

        try {
            await recipeService.updateRecipe(id, formData); // Corrected API call
            navigate('/');
        } catch (error) {
            console.error('Error updating recipe:', error);
        }
    };

    return (
        <div className="edit-recipe-container">
            <h2>Edit Recipe</h2>
            <form onSubmit={handleSubmit} className="recipe-form">
                <input type="text" name="title" value={recipe.title} onChange={handleChange} className="form-input" />
                <input type="text" name="cuisine" value={recipe.cuisine} onChange={handleChange} className="form-input" />
                <textarea name="ingredients" value={recipe.ingredients} onChange={handleChange} className="form-textarea"></textarea>
                <textarea name="instructions" value={recipe.instructions} onChange={handleChange} className="form-textarea"></textarea>
                <input type="file" name="image" onChange={handleChange} className="form-input" />
                <button type="submit" className="form-button">Update</button>
            </form>

            <style>{`
  /* Edit Recipe Container */
  .edit-recipe-container {
    width: 100%;
    max-width: 500px;
    margin: 40px auto;
    padding: 20px;
    background-color: #fdfaf6; /* Light pastel background */
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.08);
    border: 1px solid #e7d9c8;
  }

  /* Heading */
  h2 {
    text-align: center;
    color: #5a4f3d;
    font-size: 1.4rem;
    margin-bottom: 16px;
  }

  /* Form */
  .recipe-form {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }

  /* Input Fields */
  .form-input,
  .form-textarea {
    padding: 10px;
    font-size: 14px;
    border: 1px solid #d6c4af;
    border-radius: 8px;
    background: #fefaf4;
    color: #5a4f3d;
  }

  /* Focus Effect */
  .form-input:focus,
  .form-textarea:focus {
    border-color: #a68a6f;
    outline: none;
    box-shadow: 0 0 6px rgba(166, 138, 111, 0.3);
  }

  /* Textarea */
  .form-textarea {
    resize: vertical;
    min-height: 90px;
  }

  /* Submit Button */
  .form-button {
    padding: 10px;
    font-size: 15px;
    background-color: #e6c7a7;
    color: #5a4f3d;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    transition: background-color 0.3s ease, transform 0.2s ease;
  }

  /* Hover Effect */
  .form-button:hover {
    background-color: #d6b898;
    transform: scale(1.03);
  }

  /* Responsive Design */
  @media (max-width: 500px) {
    .edit-recipe-container {
      width: 90%;
      padding: 16px;
    }

    .form-button {
      font-size: 14px;
    }
  }
`}</style>

        </div>
    );
};

export default EditRecipe;
