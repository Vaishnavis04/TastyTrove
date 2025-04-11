// // src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav style={styles.navbar}>
            <h1 style={styles.title}>Recipe App</h1>
            <div style={styles.links}>
                <Link to="/" style={styles.link}>Home</Link>
                <Link to="/saved-recipes" style={styles.link}>Saved Recipes</Link>
                <Link to="/create-recipe" style={styles.link}>Create Recipe</Link>
                <Link to="/login" style={styles.link}>Login</Link>
            </div>
        </nav>
    );
};

const styles = {
    navbar: {
        background: '#fdf6ec', // Soft cream background
        color: '#333', // Dark gray text
        display: 'flex',
        justifyContent: 'space-between',
        padding: '0.5rem 2rem', // Reduce vertical padding
        alignItems: 'center',
        fontFamily: "'Poppins', sans-serif",
        boxShadow: '0 4px 10px rgba(0, 0, 0, 0.05)',
        borderBottom: '2px solid #f5d7bd', // Light pastel border
        height: '50px' // Reduce overall height
    },
    title: {
        fontSize: '1.5rem',
        fontWeight: 'bold',
        letterSpacing: '1px',
        color: '#d47f6a' // Subtle orange-brown
    },
    links: {
        display: 'flex',
        gap: '1rem'
    },
    link: {
        color: '#555', // Medium gray
        textDecoration: 'none',
        fontWeight: '500',
        fontSize: '1rem',
        padding: '0.3rem 0.8rem', // Reduced padding for links
        borderRadius: '6px',
        transition: 'all 0.3s ease-in-out',
        cursor: 'pointer'
    }
};


export default Navbar;
