// src/components/Footer.js
import React from 'react';

const Footer = () => {
    return (
        <footer className="footer" style={styles.footer}>
            &copy; {new Date().getFullYear()} Recipe App. All rights reserved.
        </footer>
    );
};

const styles = {
    footer: {
        background: '#fdf6ec', // Soft cream
        color: '#555',
        textAlign: 'center',
        padding: '1.5rem',
        fontSize: '0.9rem',
        fontFamily: "'Poppins', sans-serif",
        boxShadow: '0 -4px 10px rgba(0, 0, 0, 0.05)',
        borderTop: '2px solid #f5d7bd' // Light pastel border
    }
};

export default Footer;
