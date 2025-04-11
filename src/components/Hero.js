import React from "react";
import { Routes, Route } from "react-router-dom";
import Pasta from "../categories/Pasta";
import Pizza from "../categories/Pizza";
import Vegan from "../categories/Vegan";
import Desserts from "../categories/Desserts";
import Smoothies from "../categories/Smoothies";
import Breakfast from "../categories/Breakfast";
import Biryani from "../categories/Biryani";
function Hero() {
  return (
    <Routes>
      <Route path="/categories/pasta" element={<Pasta />} />
      <Route path="/categories/pizza" element={<Pizza />} />
      <Route path="/categories/vegan" element={<Vegan />} />
      <Route path="/categories/desserts" element={<Desserts />} />
      <Route path="/categories/smoothies" element={<Smoothies />} />
      <Route path="/categories/breakfast" element={<Breakfast />} />
      <Route path="/categories/biryani" element={<Biryani />} />
    </Routes>
  );
}

export default Hero;
