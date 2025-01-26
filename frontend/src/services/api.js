import axios from 'axios';

// Create an Axios instance with a base URL
const api = axios.create({
	  baseURL: 'http://localhost:5000/api',  // Backend API base URL
	  headers: {
		      'Content-Type': 'application/json',  // Content type for API requests
		    },
});

// Register a new user
export const registerUser = async (userData) => {
	  try {
		      const response = await api.post('/auth/register', userData);  // Using the Axios instance
		      return response.data;
		    } catch (error) {
			        throw error.response?.data || { message: 'Error during registration.' };
			      }
};

// Login a user
export const loginUser = async (credentials) => {
	  try {
		      const response = await api.post('/auth/login', credentials);  // Using the Axios instance
		      return response.data;
		    } catch (error) {
			        throw error.response?.data || { message: 'Error during login.' };
			      }
};

// Export the api instance to be used in other files
export default api;
