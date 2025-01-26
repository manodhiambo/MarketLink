import api from "./api";

// Register a new user
export const registerUser = async (userData) => {
	  try {
		      const response = await api.post("/auth/register", userData);
		      return response.data;
		    } catch (error) {
			        console.error("Error registering user:", error.response?.data || error.message);
			        throw error.response?.data || { message: "Registration failed." };
			      }
};

// Login a user
export const loginUser = async (credentials) => {
	  try {
		      const response = await api.post("/auth/login", credentials);
		      return response.data;
		    } catch (error) {
			        console.error("Error logging in user:", error.response?.data || error.message);
			        throw error.response?.data || { message: "Login failed." };
			      }
};

// Verify authentication token
export const verifyToken = async () => {
	  try {
		      const response = await api.get("/auth/verify");
		      return response.data;
		    } catch (error) {
			        console.error("Error verifying token:", error.response?.data || error.message);
			        throw error.response?.data || { message: "Token verification failed." };
			      }
};
