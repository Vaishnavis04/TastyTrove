//routes->savedRecipes.js
const express = require("express");
const { saveRecipe, getSavedRecipes, removeSavedRecipe } = require("../controllers/savedRecipeController");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/", authMiddleware, saveRecipe);
router.get("/", authMiddleware, getSavedRecipes);
router.delete("/:id", authMiddleware, removeSavedRecipe);

module.exports = router;
