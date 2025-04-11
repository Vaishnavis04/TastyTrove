import React, { useEffect, useState } from "react";
import axios from "axios";
import RecipeCard from "../components/RecipeCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Link } from "react-router-dom";
import "./Home.css"; // Import external CSS

const Home = () => {
    const [recipes, setRecipes] = useState([]);

    // Hero section images
    const heroImages = [
        "https://anjapparoc.com/wp-content/uploads/2024/03/Chicken-biryani.jpg",
        "https://missvickie.com/wp-content/uploads/2022/02/substitute-for-yogurt-in-tandoori-chicken.jpg",
        "https://th.bing.com/th/id/OIP.KHoZRd7FmPIY6uOuSuHLwAHaEJ?rs=1&pid=ImgDetMain",
        "https://www.cubesnjuliennes.com/wp-content/uploads/2020/02/Matar-Paneer-1.jpg",
        "https://www.licious.in/blog/wp-content/uploads/2022/06/chicken-hyderabadi-biryani-01.jpg",
    ];

    const categories = [
        { name: "Pasta", image: "https://thumbs.dreamstime.com/b/traditional-italian-rigate-con-salsiccia-spicy-sausage-balls-penne-parmesan-cheese-rustic-design-traditional-italian-263651942.jpg", link: "/categories/pasta" },
        { name: "Pizza", image: "https://images5.alphacoders.com/381/381504.jpg", link: "/categories/pizza" },
        { name: "Vegan", image: "https://th.bing.com/th/id/OIP.73Ubq32GW_0XjFGQMjJPeQHaNM?rs=1&pid=ImgDetMain", link: "/categories/vegan" },
        { name: "Desserts", image: "https://images8.alphacoders.com/107/thumb-1920-1072808.jpg", link: "/categories/desserts" },
        { name: "Smoothies", image: "https://www.dinneratthezoo.com/wp-content/uploads/2018/05/blueberry-smoothie-5.jpg", link: "/categories/smoothies" },
        { name: "Breakfast", image: "https://w0.peakpx.com/wallpaper/205/314/HD-wallpaper-food-breakfast.jpg", link: "/categories/breakfast" },
        { name: "Biryani", image: "https://www.licious.in/blog/wp-content/uploads/2022/06/chicken-hyderabadi-biryani-01.jpg", link: "/categories/biryani" }
    ];

    useEffect(() => {
        axios.get("http://localhost:5000/api/recipes")
            .then(response => setRecipes(response.data))
            .catch(error => console.error("Error fetching recipes:", error));
    }, []);

    const handleSaveRecipe = async (recipeId) => {
        const token = localStorage.getItem('token'); // Retrieve token from localStorage
        if (!token) {
            console.error("No token found, please log in.");
            alert("You need to log in to save a recipe.");
            return; // Prevent the request if there's no token
        }

        try {
            await axios.post(
                "http://localhost:5000/api/saved-recipes", 
                { recipeId },
                {
                    headers: {
                        'Authorization': `Bearer ${token}`, // Add the token to the request header
                    },
                }
            );
            console.log("Recipe saved successfully!");
            alert("Recipe saved successfully!");
        } catch (error) {
            console.error("Error saving recipe:", error.response?.data || error.message);
            alert("Error saving the recipe. Please try again.");
        }
    };



    return (
        <div className="home-container">
        {/* Hero Section with Swiper */}
        <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={10}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            loop={true}
            className="hero-slider"
        >
            {heroImages.map((image, index) => (
                <SwiperSlide key={index}>
                    <div className="hero-slide">
                        <img src={image} alt={`Slide ${index + 1}`} className="hero-image" />
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>

        {/* Popular Categories */}
        <h2 className="section-title">Popular Categories</h2>
        <div className="categories-container">
            {categories.map((category, index) => (
                <div key={index} className="category-item">
                    <Link to={category.link}>
                        <img src={category.image} alt={category.name} className="category-image" />
                        <span className="category-name">{category.name}</span>
                    </Link>
                </div>
            ))}
        </div>

        {/* Super Delicious Recipes */}
        <h2 className="section-title">Super Delicious</h2>
        <div className="recipes-grid">
            {recipes.map(recipe => (
                <RecipeCard 
                    key={recipe._id} 
                    recipe={recipe} 
                    onSave={handleSaveRecipe} // Passing handleSaveRecipe as a prop to RecipeCard
                />
            ))}
        </div>
    </div>
);
};

export default Home;
