//routes->recipes.js
const express = require("express");
const { getAllRecipes, getRecipeById, createRecipe, updateRecipe, deleteRecipe, getRecipesByCategory, createManyRecipes } = require("../controllers/recipeController");
const authMiddleware = require("../middleware/authMiddleware");
const multer = require("multer");

const upload = multer({ dest: "uploads/" });

const router = express.Router();

router.get("/", getAllRecipes);
router.get("/:id", getRecipeById);
router.get("/category/:category", getRecipesByCategory);

router.post("/", authMiddleware, upload.single("image"), createRecipe);
router.post("/many", authMiddleware, createManyRecipes); // New route for bulk insert
router.put("/:id", authMiddleware, upload.single("image"), updateRecipe);
router.delete("/:id", authMiddleware, deleteRecipe);

module.exports = router;
