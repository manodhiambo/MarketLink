import {
	  LOGIN_REQUEST,
	  LOGIN_SUCCESS,
	  LOGIN_FAILURE,
	  LOGOUT,
	  REGISTER_REQUEST,
	  REGISTER_SUCCESS,
	  REGISTER_FAILURE,
} from "../actions/authActions";

const initialState = {
	  isAuthenticated: false,
	  user: null,
	  loading: false,
	  error: null,
};

export const authReducer = (state = initialState, action) => {
	  switch (action.type) {
		      case LOGIN_REQUEST:
			      case REGISTER_REQUEST:
			        return { ...state, loading: true, error: null };
			      case LOGIN_SUCCESS:
			      case REGISTER_SUCCESS:
			        return { ...state, loading: false, isAuthenticated: true, user: action.payload };
			      case LOGIN_FAILURE:
			      case REGISTER_FAILURE:
			        return { ...state, loading: false, error: action.payload };
			      case LOGOUT:
			        return { ...state, isAuthenticated: false, user: null };
			      default:
			        return state;
			    }
};
