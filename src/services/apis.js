// src/utils/apis.js
import axios from 'axios';

// Set default base URL for your API
axios.defaults.baseURL = 'http://localhost:5000/api';

// Axios request interceptor to include the token
axios.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('token');  // Get token from localStorage
        if (token) {
            config.headers['Authorization'] = `Bearer ${token}`;  // Attach token to request
        }
        return config;
    },
    (error) => Promise.reject(error)
);

export default axios;
