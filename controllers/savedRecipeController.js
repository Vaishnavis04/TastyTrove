
//controllers->savedRecipeController.js
const SavedRecipe = require("../models/SavedRecipe");

// Save a recipe
const saveRecipe = async (req, res) => {
    try {
        const { recipeId } = req.body;
        const userId = req.user.id;

        // Check if already saved
        const existingSavedRecipe = await SavedRecipe.findOne({ user: userId, recipe: recipeId });
        if (existingSavedRecipe) {
            return res.status(400).json({ message: "Recipe already saved" });
        }

        const savedRecipe = await SavedRecipe.create({ user: userId, recipe: recipeId });
        res.status(201).json(savedRecipe);
    } catch (error) {
        res.status(500).json({ message: "Error saving recipe" });
    }
};

// Get saved recipes for a user
const getSavedRecipes = async (req, res) => {
    try {
        const savedRecipes = await SavedRecipe.find({ user: req.user.id }).populate("recipe");
        res.json(savedRecipes);
    } catch (error) {
        res.status(500).json({ message: "Error fetching saved recipes" });
    }
};

// Remove a saved recipe
const removeSavedRecipe = async (req, res) => {
    try {
        await SavedRecipe.findOneAndDelete({ user: req.user.id, recipe: req.params.id });
        res.json({ message: "Recipe removed from saved recipes" });
    } catch (error) {
        res.status(500).json({ message: "Error removing saved recipe" });
    }
};

module.exports = { saveRecipe, getSavedRecipes, removeSavedRecipe };
