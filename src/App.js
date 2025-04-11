import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Categories from "./components/Categories";
import CategoryPage from "./categories/CategoryPage";
import CreateRecipe from "./pages/CreateRecipe";
import EditRecipe from "./pages/EditRecipe";
import Login from "./pages/Login";
import RecipeDetails from "./pages/RecipeDetails";
import Register from "./pages/Register";
import SavedRecipes from "./pages/SavedRecipes";
import Navbar from "./components/Navbar";
import Pasta from "./categories/Pasta";
import Pizza from "./categories/Pizza";
import Vegan from "./categories/Vegan";
import Desserts from "./categories/Desserts";
import Smoothies from "./categories/Smoothies";
import Breakfast from "./categories/Breakfast";
import Biryani from "./categories/Biryani";
import Footer from "./components/Footer";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/category/:category" element={<CategoryPage />} />
        <Route path="/categories/pasta" element={<Pasta />} />
        <Route path="/categories/pizza" element={<Pizza />} />
        <Route path="/categories/vegan" element={<Vegan />} />
        <Route path="/categories/desserts" element={<Desserts />} />
        <Route path="/categories/smoothies" element={<Smoothies />} />
        <Route path="/categories/breakfast" element={<Breakfast />} />
        <Route path="/categories/biryani" element={<Biryani />} />
        <Route path="/create-recipe" element={<CreateRecipe />} />
        <Route path="/edit-recipe/:id" element={<EditRecipe />} />
        <Route path="/recipe/:id" element={<RecipeDetails />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/saved-recipes" element={<SavedRecipes />} />
      </Routes>
      <Footer/>
    </Router>
  );
};

export default App;
