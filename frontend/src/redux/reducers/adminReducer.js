import {
	  FETCH_USERS_REQUEST,
	  FETCH_USERS_SUCCESS,
	  FETCH_USERS_FAILURE,
	  FETCH_ANALYTICS_REQUEST,
	  FETCH_ANALYTICS_SUCCESS,
	  FETCH_ANALYTICS_FAILURE,
} from "../actions/adminActions";

const initialState = {
	  users: [],
	  analytics: null,
	  loading: false,
	  error: null,
};

export const adminReducer = (state = initialState, action) => {
	  switch (action.type) {
		      case FETCH_USERS_REQUEST:
			      case FETCH_ANALYTICS_REQUEST:
			        return { ...state, loading: true, error: null };
			      case FETCH_USERS_SUCCESS:
			        return { ...state, loading: false, users: action.payload };
			      case FETCH_ANALYTICS_SUCCESS:
			        return { ...state, loading: false, analytics: action.payload };
			      case FETCH_USERS_FAILURE:
			      case FETCH_ANALYTICS_FAILURE:
			        return { ...state, loading: false, error: action.payload };
			      default:
			        return state;
			    }
};
