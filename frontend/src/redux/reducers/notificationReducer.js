import { SHOW_NOTIFICATION, HIDE_NOTIFICATION } from "../actions/notificationActions";

const initialState = {
	  message: null,
	  type: null,
};
export const notificationReducer = (state = initialState, action) => {
	  switch (action.type) {
		      case SHOW_NOTIFICATION:
			        return { ...state, message: action.payload.message, type: action.payload.notificationType };
			      case HIDE_NOTIFICATION:
			        return { ...state, message: null, type: null };
			      default:
			        return state;
			    }
};
