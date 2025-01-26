import {
	  FETCH_USER_DETAILS_REQUEST,
	  FETCH_USER_DETAILS_SUCCESS,
	  FETCH_USER_DETAILS_FAILURE,
	  UPDATE_PROFILE_REQUEST,
	  UPDATE_PROFILE_SUCCESS,
	  UPDATE_PROFILE_FAILURE,
} from "../actions/userActions";

const initialState = {
	  userDetails: null,
	  loading: false,
	  error: null,
};

export const userReducer = (state = initialState, action) => {
	  switch (action.type) {
		      case FETCH_USER_DETAILS_REQUEST:
			      case UPDATE_PROFILE_REQUEST:
			        return { ...state, loading: true, error: null };
			      case FETCH_USER_DETAILS_SUCCESS:
			      case UPDATE_PROFILE_SUCCESS:
			        return { ...state, loading: false, userDetails: action.payload };
			      case FETCH_USER_DETAILS_FAILURE:
			      case UPDATE_PROFILE_FAILURE:
			        return { ...state, loading: false, error: action.payload };
			      default:
			        return state;
			    }
};
