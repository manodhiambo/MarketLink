import { registerUser, loginUser } from "../../services/authService";
export const LOGIN_REQUEST = "LOGIN_REQUEST";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";
export const LOGOUT = "LOGOUT";

export const REGISTER_REQUEST = "REGISTER_REQUEST";
export const REGISTER_SUCCESS = "REGISTER_SUCCESS";
export const REGISTER_FAILURE = "REGISTER_FAILURE";

// Register action
export const register = (userData) => async (dispatch) => {
	  dispatch({ type: REGISTER_REQUEST });
	  try {
		      const data = await registerUser(userData);
		      dispatch({ type: REGISTER_SUCCESS, payload: data });
		    } catch (error) {
			        dispatch({ type: REGISTER_FAILURE, payload: error.message });
			      }
};

// Login action (async version)
export const login = (credentials) => async (dispatch) => {
	  dispatch({ type: LOGIN_REQUEST });
	  try {
		      const data = await loginUser(credentials);
		      localStorage.setItem("authToken", data.token); // Save token
		      dispatch({ type: LOGIN_SUCCESS, payload: data });
		    } catch (error) {
			        dispatch({ type: LOGIN_FAILURE, payload: error.message });
			      }
};

// Synchronous actions for login
export const loginRequest = (credentials) => ({
	  type: LOGIN_REQUEST,
	  payload: credentials,
});

export const loginSuccess = (user) => ({
	  type: LOGIN_SUCCESS,
	  payload: user,
});

export const loginFailure = (error) => ({
	  type: LOGIN_FAILURE,
	  payload: error,
});

// Logout action
export const logout = () => ({
	  type: LOGOUT,
});

// Register success/failure actions (synchronous)
export const registerSuccess = (user) => ({
	  type: REGISTER_SUCCESS,
	  payload: user,
});

export const registerFailure = (error) => ({
	  type: REGISTER_FAILURE,
	  payload: error,
});
