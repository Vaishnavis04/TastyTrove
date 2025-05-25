// // src/pages/Register.js
// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { register } from '../services/authService'; // Correct import

// const Register = () => {
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const [confirmPassword, setConfirmPassword] = useState('');
//     const [error, setError] = useState(null);
//     const navigate = useNavigate();

//     const handleSubmit = async (e) => {
//         e.preventDefault();

//         if (password !== confirmPassword) {
//             setError("Passwords do not match");
//             return;
//         }

//         console.log('Data being sent to the backend:', { email, password, confirmPassword });

//         try {
//             const response = await register({ email, password }); // Use register instead of authService.register
//             console.log('Registration Successful:', response.message);
//             navigate('/login');
//         } catch (err) {
//             setError(err.response?.data?.message || "An error occurred while registering.");
//             console.error('Registration Error:', err);
//         }
//     };

//     return (
//         <div className="register-container">
//             <h2 className="register-title">Register</h2>
//             {error && <p className="error-message">{error}</p>}
//             <form onSubmit={handleSubmit} className="register-form">
//                 <input 
//                     type="email" 
//                     value={email} 
//                     onChange={(e) => setEmail(e.target.value)} 
//                     placeholder="Email" 
//                     required 
//                     className="register-input"
//                 />
//                 <input 
//                     type="password" 
//                     value={password} 
//                     onChange={(e) => setPassword(e.target.value)} 
//                     placeholder="Password" 
//                     required 
//                     className="register-input"
//                 />
//                 <input 
//                     type="password" 
//                     value={confirmPassword} 
//                     onChange={(e) => setConfirmPassword(e.target.value)} 
//                     placeholder="Confirm Password" 
//                     required 
//                     className="register-input"
//                 />
//                 <button type="submit" className="register-button">Register</button>
//             </form>
//             <p className="login-link">
//                 Already have an account? <a href="/login">Login here</a>
//             </p>

//             <style jsx>{`
//                 .register-container {
//                     display: flex;
//                     flex-direction: column;
//                     align-items: center;
//                     justify-content: center;
//                     min-height: 100vh;
//                     background-color: #f7fafc;
//                     padding: 2rem;
//                 }

//                 .register-title {
//                     font-size: 2rem;
//                     font-weight: bold;
//                     margin-bottom: 1rem;
//                     color: #2d3748;
//                 }

//                 .register-form {
//                     display: flex;
//                     flex-direction: column;
//                     width: 100%;
//                     max-width: 400px;
//                     background-color: white;
//                     padding: 2rem;
//                     border-radius: 8px;
//                     box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
//                 }

//                 .register-input {
//                     padding: 0.75rem;
//                     margin-bottom: 1rem;
//                     border: 1px solid #e2e8f0;
//                     border-radius: 4px;
//                     font-size: 1rem;
//                     width: 100%;
//                 }

//                 .register-input:focus {
//                     border-color: #3182ce;
//                     outline: none;
//                 }

//                 .register-button {
//                     padding: 0.75rem;
//                     background-color: #3182ce;
//                     color: white;
//                     border: none;
//                     border-radius: 4px;
//                     font-size: 1rem;
//                     cursor: pointer;
//                     transition: background-color 0.3s;
//                 }

//                 .register-button:hover {
//                     background-color: #2b6cb0;
//                 }

//                 .error-message {
//                     color: red;
//                     font-size: 1rem;
//                     margin-bottom: 1rem;
//                 }

//                 .login-link {
//                     margin-top: 1rem;
//                     font-size: 1rem;
//                     color: #2d3748;
//                 }

//                 .login-link a {
//                     color: #3182ce;
//                     text-decoration: none;
//                 }

//                 .login-link a:hover {
//                     text-decoration: underline;
//                 }
//             `}</style>
//         </div>
//     );
// };

// export default Register;
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { register } from '../services/authService';

const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            setError("Passwords do not match");
            return;
        }

        try {
            const response = await register({ email, password });
            console.log('Registration Successful:', response.message);
            navigate('/login');
        } catch (err) {
            setError(err.response?.data?.message || "An error occurred while registering.");
        }
    };

    return (
        <div className="register-container">
            <div className="register-box">
                <h2 className="register-title">Create an Account</h2>
                {error && <p className="error-message">{error}</p>}
                <form onSubmit={handleSubmit} className="register-form">
                    <input 
                        type="email" 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)} 
                        placeholder="Email" 
                        required 
                        className="register-input"
                    />
                    <input 
                        type="password" 
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)} 
                        placeholder="Password" 
                        required 
                        className="register-input"
                    />
                    <input 
                        type="password" 
                        value={confirmPassword} 
                        onChange={(e) => setConfirmPassword(e.target.value)} 
                        placeholder="Confirm Password" 
                        required 
                        className="register-input"
                    />
                    <button type="submit" className="register-button">Sign Up</button>
                </form>
                <p className="login-link">
                    Already have an account? <a href="/login">Login here</a>
                </p>
            </div>

            <style jsx>{`
    /* Full-screen container */
    .register-container {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
        background: linear-gradient(135deg, #fdf6ec, #f5d7bd); /* Cream to pastel gradient */
    }

    /* Form box with gradient border */
    .register-box {
        background: #ffffff;
        padding: 2rem 2.5rem;
        border-radius: 12px;
        box-shadow: 0 6px 15px rgba(0, 0, 0, 0.1);
        text-align: left;
        max-width: 400px;
        width: 100%;
        border: 2px solid transparent;
        background-image: linear-gradient(white, white), linear-gradient(135deg, #d47f6a, #f5d7bd);
        background-origin: border-box;
        background-clip: content-box, border-box;
    }

    /* Title */
    .register-title {
        font-size: 1.8rem;
        color: #d47f6a; /* Orange-brown matching navbar */
        font-weight: bold;
        text-align: center;
        margin-bottom: 1.5rem;
    }

    /* Error message */
    .error-message {
        color: #ef4444; /* Red for errors */
        font-size: 1rem;
        margin-bottom: 1rem;
        text-align: center;
    }

    /* Form inputs */
    .register-input {
        padding: 1rem;
        margin-bottom: 1rem;
        border: 1px solid transparent;
        border-radius: 4px;
        font-size: 1rem;
        width: 88%;
        background: linear-gradient(135deg, #fdf6ec, #f5d7bd); /* Double shaded input */
        color: #333;
        outline: none;
        transition: all 0.3s ease;
    }

    .register-input::placeholder {
        color: #a8a8a8; /* Light gray placeholder */
    }

    /* Input focus */
    .register-input:focus {
        border: 2px solid #d47f6a;
        background: linear-gradient(135deg, #fcebd7, #f5d7bd);
        box-shadow: 0 0 8px rgba(212, 127, 106, 0.6);
    }

   /* Submit button */
   .register-button {
    padding: 0.5rem 1rem; /* Reduced padding */
    background: linear-gradient(135deg, #d47f6a, #f5d7bd); /* Gradient background */
    color: white;
    border: none;
    border-radius: 6px; /* Slightly smaller corners */
    font-size: 0.95rem; /* Slightly smaller text */
    cursor: pointer;
    transition: background 0.3s ease;
    width: 85%; /* Slightly smaller width */
    display: block;
    margin: 0 auto; /* Center the button */
}


    .register-button:hover {
        background: linear-gradient(135deg, #b66753, #f5a793); /* Darker hover effect */
    }

    /* Login link */
    .login-link {
        text-align: center;
        margin-top: 1rem;
        font-size: 1rem;
        color: #555;
    }

    .login-link a {
        color: #d47f6a;
        text-decoration: none;
    }

    .login-link a:hover {
        text-decoration: underline;
    }
`}</style>


        </div>
    );
};

export default Register;
