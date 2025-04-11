// src/services/api.js

import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000/api',  // Adjust to your server's base URL
  headers: {
    'Content-Type': 'multipart/form-data', // Ensure that we send data in the correct format
  },
});

export default api;
