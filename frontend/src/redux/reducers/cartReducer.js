import { ADD_TO_CART, REMOVE_FROM_CART, CLEAR_CART } from "../actions/cartActions";

const initialState = {
	  cartItems: [],
};

export const cartReducer = (state = initialState, action) => {
	  switch (action.type) {
		      case ADD_TO_CART:
			        return { ...state, cartItems: [...state.cartItems, action.payload] };
			      case REMOVE_FROM_CART:
			        return {
					        ...state,
					        cartItems: state.cartItems.filter((item) => item.id !== action.payload),
					      };
			      case CLEAR_CART:
			        return { ...state, cartItems: [] };
			      default:
			        return state;
			    }
};
