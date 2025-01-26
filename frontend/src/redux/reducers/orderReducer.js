import {
	  PLACE_ORDER_REQUEST,
	  PLACE_ORDER_SUCCESS,
	  PLACE_ORDER_FAILURE,
	  FETCH_ORDERS_REQUEST,
	  FETCH_ORDERS_SUCCESS,
	  FETCH_ORDERS_FAILURE,
} from "../actions/orderActions";

const initialState = {
	  orders: [],
	  loading: false,
	  error: null,
};

export const orderReducer = (state = initialState, action) => {
	  switch (action.type) {
		      case PLACE_ORDER_REQUEST:
			      case FETCH_ORDERS_REQUEST:
			        return { ...state, loading: true, error: null };
			      case PLACE_ORDER_SUCCESS:
			        return { ...state, loading: false, orders: [...state.orders, action.payload] };
			      case FETCH_ORDERS_SUCCESS:
			        return { ...state, loading: false, orders: action.payload };
			      case PLACE_ORDER_FAILURE:
			      case FETCH_ORDERS_FAILURE:
			        return { ...state, loading: false, error: action.payload };
			      default:
			        return state;
			    }
};
