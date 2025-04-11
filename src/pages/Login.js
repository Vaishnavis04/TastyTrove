
// src/pages/Login.js
// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { login } from '../services/authService'; // Correct import

// const Login = () => {
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const navigate = useNavigate();

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         try {
//             const response = await login({ email, password }); // Use login instead of authService.login
//             localStorage.setItem('token', response.token);
//             navigate('/');
//         } catch (error) {
//             console.error("Error logging in:", error.response?.data || error.message);
//             alert(error.response?.data?.error || "Login failed");
//         }
//     };

//     return (
//         <div className="login-container">
//             <h2 className="login-title">Login</h2>
//             <form onSubmit={handleSubmit} className="login-form">
//                 <input 
//                     type="email" 
//                     value={email} 
//                     onChange={(e) => setEmail(e.target.value)} 
//                     placeholder="Email" 
//                     required
//                     className="login-input"
//                 />
//                 <input 
//                     type="password" 
//                     value={password} 
//                     onChange={(e) => setPassword(e.target.value)} 
//                     placeholder="Password" 
//                     required
//                     className="login-input"
//                 />
//                 <button type="submit" className="login-button">Login</button>
//             </form>

//             <style jsx>{`
//                 .login-container {
//                     display: flex;
//                     flex-direction: column;
//                     align-items: center;
//                     justify-content: center;
//                     min-height: 100vh;
//                     background-color: #f7fafc;
//                     padding: 2rem;
//                 }

//                 .login-title {
//                     font-size: 2rem;
//                     font-weight: bold;
//                     margin-bottom: 1rem;
//                     color: #2d3748;
//                 }

//                 .login-form {
//                     display: flex;
//                     flex-direction: column;
//                     width: 100%;
//                     max-width: 400px;
//                     background-color: white;
//                     padding: 2rem;
//                     border-radius: 8px;
//                     box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
//                 }

//                 .login-input {
//                     padding: 0.75rem;
//                     margin-bottom: 1rem;
//                     border: 1px solid #e2e8f0;
//                     border-radius: 4px;
//                     font-size: 1rem;
//                     width: 100%;
//                 }

//                 .login-input:focus {
//                     border-color: #3182ce;
//                     outline: none;
//                 }

//                 .login-button {
//                     padding: 0.75rem;
//                     background-color: #3182ce;
//                     color: white;
//                     border: none;
//                     border-radius: 4px;
//                     font-size: 1rem;
//                     cursor: pointer;
//                     transition: background-color 0.3s;
//                 }

//                 .login-button:hover {
//                     background-color: #2b6cb0;
//                 }
//             `}</style>
//         </div>
//     );
// };

// export default Login;
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { login } from '../services/authService';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await login({ email, password });
            localStorage.setItem('token', response.token);
            navigate('/');
        } catch (error) {
            console.error("Error logging in:", error.response?.data || error.message);
            alert(error.response?.data?.error || "Login failed");
        }
    };

    return (
        <div className="login-container">
            <div className="login-box">
                <h2 className="login-title">Welcome Back</h2>
                <form onSubmit={handleSubmit} className="login-form">
                    <input 
                        type="email" 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)} 
                        placeholder="Email" 
                        required
                        className="login-input"
                    />
                    <input 
                        type="password" 
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)} 
                        placeholder="Password" 
                        required
                        className="login-input"
                    />
                    <button type="submit" className="login-button">Login</button>
                </form>
                <p className="register-link">
                    Don't have an account? <a href="/register">Sign up</a>
                </p>
            </div>
            <style jsx>{`
    /* Gradient Background */
    .login-container {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
        background: linear-gradient(135deg, #fdf6ec, #f5d7bd); /* Double shaded background */
    }

    /* White Box with Gradient Border */
    .login-box {
        background: #ffffff;
        padding: 2.5rem 2rem;
        border-radius: 12px;
        box-shadow: 0 6px 15px rgba(0, 0, 0, 0.1);
        text-align: left; /* Align text to the left */
        max-width: 400px;
        width: 100%;
        border: 2px solid transparent;
        background-image: linear-gradient(white, white), linear-gradient(135deg, #d47f6a, #f5d7bd);
        background-origin: border-box;
        background-clip: content-box, border-box;
    }

    /* Title */
    .login-title {
        font-size: 1.8rem;
        color: #d47f6a; /* Orange-brown */
        font-weight: bold;
        margin-bottom: 1.5rem;
        text-align: center; /* Center the title */
    }

    /* Input Fields */
   .login-input {
    width: 95%; /* Reduce width to fit inside the box */
    max-width: 450px; /* Set a max-width to prevent overflow */
    padding: 0.30rem;
    margin-bottom: 1rem;
    border: 1px solid transparent;
    align-left:10px;
    border-radius: 8px;
    font-size: 1rem;
    background: linear-gradient(135deg, #fdf6ec, #f5d7bd);
    color: #333;
    outline: none;
    transition: all 0.3s ease;
}


    /* Input Labels (optional if needed) */
    label {
        font-size: 1rem;
        font-weight: 500;
        color: #334155;
        margin-bottom: 0.5rem;
        display: block;
    }

    /* Input Focus */
    .login-input:focus {
        border: 2px solid #d47f6a;
        background: linear-gradient(135deg, #fcebd7, #f5d7bd);
        box-shadow: 0 0 8px rgba(212, 127, 106, 0.6);
    }

    /* Button */
    .login-button {
        padding: 0.75rem;
        background: linear-gradient(135deg, #d47f6a, #f5d7bd); /* Gradient button */
        color: white;
        border: none;
        border-radius: 8px;
        font-size: 1rem;
        cursor: pointer;
        transition: background 0.3s ease;
        width: 98%;
    }

    /* Button Hover */
    .login-button:hover {
        background: linear-gradient(135deg, #b66753, #f5a793); /* Darker gradient on hover */
    }

    /* Register Link */
    .register-link {
        margin-top: 1rem;
        font-size: 1rem;
        color: #555;
        text-align: center; /* Center the register link */
    }

    .register-link a {
        color: #d47f6a;
        text-decoration: none;
    }

    .register-link a:hover {
        text-decoration: underline;
    }
`}</style>

        </div>
    );
};

export default Login;

            