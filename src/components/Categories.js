// //components->Categories.js
// import React from "react";
// import { Link } from "react-router-dom";
// // import "./Categories.css"; // Create this file for styles

// const categories = [
//     { name: "Pasta", path: "/categories/pasta", image: "https://thumbs.dreamstime.com/b/traditional-italian-rigate-con-salsiccia-spicy-sausage-balls-penne-parmesan-cheese-rustic-design-traditional-italian-263651942.jpg" },
//     { name: "Pizza", path: "/categories/pizza", image: "https://images5.alphacoders.com/381/381504.jpg" },
//     { name: "Vegan", path: "/categories/vegan", image: "https://th.bing.com/th/id/OIP.73Ubq32GW_0XjFGQMjJPeQHaNM?rs=1&pid=ImgDetMain" },
//     { name: "Desserts", path: "/categories/desserts", image: "https://images8.alphacoders.com/107/thumb-1920-1072808.jpg" },
//     { name: "Smoothies", path: "/categories/smoothies", image: "https://www.dinneratthezoo.com/wp-content/uploads/2018/05/blueberry-smoothie-5.jpg" },
//     { name: "Breakfast", path: "/categories/breakfast", image: "https://w0.peakpx.com/wallpaper/205/314/HD-wallpaper-food-breakfast.jpg" },
//     { name: "Biryani", path: "/categories/biryani", image: "https://upload.wikimedia.org/wikipedia/commons/4/4e/Chicken_biryani_dish.jpg" }  
// ];

// const Categories = () => {
//     return (
//         <div className="categories-container">
//             <h2 className="section-title">Popular Categories</h2>
//             <div className="category-grid">
//                 {categories.map((category, index) => (
//                     <Link to={category.path} key={index} className="category-card">
//                         <img src={category.image} alt={category.name} className="category-image" />
//                         <span className="category-name">{category.name}</span>
//                     </Link>
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default Categories;
import React from "react";
import { Link } from "react-router-dom";

const categories = [
    { name: "Pasta", path: "/categories/pasta", image: "https://thumbs.dreamstime.com/b/traditional-italian-rigate-con-salsiccia-spicy-sausage-balls-penne-parmesan-cheese-rustic-design-traditional-italian-263651942.jpg" },
    { name: "Pizza", path: "/categories/pizza", image: "https://images5.alphacoders.com/381/381504.jpg" },
    { name: "Vegan", path: "/categories/vegan", image: "https://th.bing.com/th/id/OIP.73Ubq32GW_0XjFGQMjJPeQHaNM?rs=1&pid=ImgDetMain" },
    { name: "Desserts", path: "/categories/desserts", image: "https://images8.alphacoders.com/107/thumb-1920-1072808.jpg" },
    { name: "Smoothies", path: "/categories/smoothies", image: "https://www.dinneratthezoo.com/wp-content/uploads/2018/05/blueberry-smoothie-5.jpg" },
    { name: "Breakfast", path: "/categories/breakfast", image: "https://w0.peakpx.com/wallpaper/205/314/HD-wallpaper-food-breakfast.jpg" },
    { name: "Biryani", path: "/categories/biryani", image: "https://upload.wikimedia.org/wikipedia/commons/4/4e/Chicken_biryani_dish.jpg" }  
];

const Categories = () => {
    return (
        <div className="text-center p-6 bg-gray-100">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Popular Categories</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
                {categories.map((category, index) => (
                    <Link to={category.path} key={index} className="block bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition">
                        <img src={category.image} alt={category.name} className="w-full h-32 object-cover rounded-md mb-2" />
                        <span className="text-lg font-semibold text-gray-700">{category.name}</span>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Categories;
