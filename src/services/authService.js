// src/services/authService.js
import api from './apiu'; // Import the axios instance

// Function for user login
const login = async (userData) => {
  try {
    const response = await api.post('/auth/login', userData);
    return response.data; // Returns the token and user info
  } catch (error) {
    throw error; // Propagate error to be handled by the caller
  }
};

// Function for user registration
const register = async (userData) => {
  try {
    const response = await api.post('/auth/register', userData);
    return response.data; // Returns the success message
  } catch (error) {
    throw error; // Propagate error to be handled by the caller
  }
};

// Export the login and register functions to be used in other parts of the app
export { login, register };
