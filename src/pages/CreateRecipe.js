//pages->CreateRecipe.js
import React, { useState } from "react";
import recipeService from "../services/recipeService";

const CreateRecipe = () => {
  const [recipe, setRecipe] = useState({
    title: "",
    category: "",
    ingredients: "",
    instructions: "",
    image: null,
  });

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
    formData.append("title", recipe.title);
    formData.append("category", recipe.category.toLowerCase());
    formData.append("instructions", recipe.instructions);
    formData.append("image", recipe.image);
    
    recipe.ingredients
      .split(",")
      .map((ing) => ing.trim())
      .forEach((ing) => formData.append("ingredients", ing));

    try {
      const response = await recipeService.createRecipe(formData);
      console.log("✅ Recipe created:", response.data);
      alert("Recipe Created Successfully!");
    } catch (error) {
      console.error("❌ Error creating recipe:", error.response ? error.response.data : error.message);
      alert(error.response?.data?.message || "Failed to create recipe!");
    }
  };

  return (
    <div className="create-recipe-container">
<style>{`
  /* Create Recipe Container */
  .create-recipe-container {
    max-width: 480px;
    margin: 40px auto;
    padding: 20px;
    border-radius: 10px;
    background-color: #fdfaf6; /* Light pastel background */
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.08);
    border: 1px solid #e7d9c8;
  }

  /* Title */
  .create-recipe-container h2 {
    text-align: center;
    color: #5a4f3d;
    margin-bottom: 16px;
    font-size: 1.4rem;
  }

  /* Form */
  .recipe-form {
    display: flex;
    flex-direction: column;
  }

  /* Input Fields */
  .recipe-form input[type="text"],
  .recipe-form select,
  .recipe-form textarea,
  .recipe-form input[type="file"] {
    margin-bottom: 12px;
    padding: 10px;
    border: 1px solid #d6c4af;
    border-radius: 8px;
    font-size: 14px;
    background: #fefaf4;
    color: #5a4f3d;
  }

  /* Focus Effect */
  .recipe-form input:focus,
  .recipe-form select:focus,
  .recipe-form textarea:focus {
    border-color: #a68a6f;
    outline: none;
    box-shadow: 0 0 6px rgba(166, 138, 111, 0.3);
  }

  /* Textarea */
  .recipe-form textarea {
    resize: vertical;
    min-height: 90px;
  }

  /* Submit Button */
  .recipe-form button {
    padding: 10px;
    background-color: #e6c7a7;
    color: #5a4f3d;
    border: none;
    border-radius: 8px;
    font-size: 15px;
    cursor: pointer;
    transition: background-color 0.3s ease, transform 0.2s ease;
  }

  /* Hover Effect */
  .recipe-form button:hover {
    background-color: #d6b898;
    transform: scale(1.03);
  }

  /* Responsive Design */
  @media (max-width: 500px) {
    .create-recipe-container {
      width: 90%;
      padding: 16px;
    }

    .recipe-form button {
      font-size: 14px;
    }
  }
`}</style>


      <h2>Create Recipe</h2>
      <form onSubmit={handleSubmit} className="recipe-form">
        <input
          type="text"
          name="title"
          placeholder="Title"
          onChange={handleChange}
          required
        />
        <select name="category" onChange={handleChange} required>
          <option value="">Select Category</option>
          <option value="breakfast">Breakfast</option>
          <option value="desserts">Desserts</option>
          <option value="pasta">Pasta</option>
          <option value="pizza">Pizza</option>
          <option value="smoothies">Smoothies</option>
          <option value="vegan">Vegan</option>
          <option value="biryani">Biryani</option>
        </select>
        <textarea
          name="ingredients"
          placeholder="Ingredients (comma-separated)"
          onChange={handleChange}
          required
        ></textarea>
        <textarea
          name="instructions"
          placeholder="Instructions"
          onChange={handleChange}
          required
        ></textarea>
        <input type="file" name="image" onChange={handleChange} required />
        <button type="submit">Create</button>
      </form>
    </div>
  );
};

export default CreateRecipe;
