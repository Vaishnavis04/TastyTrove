//controllers->recipeController.js
const Recipe = require("../models/Recipe");

const validCategories = ["breakfast", "desserts", "pasta", "pizza", "smoothies", "vegan", "biryani" ];

const getAllRecipes = async (req, res) => {
    try {
        const recipes = await Recipe.find();
        res.json(recipes);
    } catch (error) {
        res.status(500).json({ message: "Error fetching recipes", error: error.message });
    }
};

const getRecipeById = async (req, res) => {
    try {
        const recipe = await Recipe.findById(req.params.id);
        if (!recipe) return res.status(404).json({ message: "Recipe not found" });
        res.json(recipe);
    } catch (error) {
        res.status(500).json({ message: "Error fetching recipe", error: error.message });
    }
};

const createRecipe = async (req, res) => {
    try {
        const { title, category, ingredients, instructions } = req.body;

        if (!validCategories.includes(category.toLowerCase())) {
            return res.status(400).json({ message: "Invalid category" });
        }

        if (!req.file) {
            return res.status(400).json({ message: "Image is required" });
        }

        const imageUrl = `${req.protocol}://${req.get("host")}/uploads/${req.file.filename}`;

        const recipe = await Recipe.create({
            title,
            category: category.toLowerCase(),
            image: imageUrl,
            ingredients,
            instructions,
            user: req.user.id
        });

        res.status(201).json(recipe);
    } catch (error) {
        res.status(500).json({ message: "Error creating recipe", error: error.message });
    }
};

const createManyRecipes = async (req, res) => {
    try {
        const recipes = req.body;

        // Validate each recipe object
        for (const recipe of recipes) {
            if (!validCategories.includes(recipe.category.toLowerCase())) {
                return res.status(400).json({ message: `Invalid category for recipe: ${recipe.title}` });
            }

            if (!recipe.image || !recipe.ingredients || !recipe.instructions || !recipe.title) {
                return res.status(400).json({ message: `Missing required fields for recipe: ${recipe.title}` });
            }
        }

        // Insert the recipes
        const createdRecipes = await Recipe.insertMany(recipes.map(recipe => ({
            ...recipe,
            category: recipe.category.toLowerCase(),
            user: req.user.id,  // Assuming each recipe is linked to the user making the request
        })));

        res.status(201).json(createdRecipes);
    } catch (error) {
        res.status(500).json({ message: "Error creating multiple recipes", error: error.message });
    }
};

const updateRecipe = async (req, res) => {
    try {
        const updateData = { ...req.body };

        if (updateData.category && !validCategories.includes(updateData.category.toLowerCase())) {
            return res.status(400).json({ message: "Invalid category" });
        }

        if (req.file) {
            updateData.image = `${req.protocol}://${req.get("host")}/uploads/${req.file.filename}`;
        }

        const updatedRecipe = await Recipe.findByIdAndUpdate(req.params.id, updateData, { new: true });

        if (!updatedRecipe) {
            return res.status(404).json({ message: "Recipe not found" });
        }

        res.json(updatedRecipe);
    } catch (error) {
        res.status(500).json({ message: "Error updating recipe", error: error.message });
    }
};

const deleteRecipe = async (req, res) => {
    try {
        await Recipe.findByIdAndDelete(req.params.id);
        res.json({ message: "Recipe deleted" });
    } catch (error) {
        res.status(500).json({ message: "Error deleting recipe", error: error.message });
    }
};

const getRecipesByCategory = async (req, res) => {
    try {
        const category = req.params.category.toLowerCase();

        if (!validCategories.includes(category)) {
            return res.status(400).json({ message: "Invalid category" });
        }

        const recipes = await Recipe.find({ category });
        res.json(recipes);
    } catch (error) {
        res.status(500).json({ message: "Error fetching recipes by category", error: error.message });
    }
};

module.exports = { getAllRecipes, getRecipeById, createRecipe, updateRecipe, deleteRecipe, getRecipesByCategory, createManyRecipes };
