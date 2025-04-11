//models->SavedRecipe.js
const mongoose = require("mongoose");

const SavedRecipeSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    recipe: { type: mongoose.Schema.Types.ObjectId, ref: "Recipe", required: true },
}, { timestamps: true });

module.exports = mongoose.model("SavedRecipe", SavedRecipeSchema);
