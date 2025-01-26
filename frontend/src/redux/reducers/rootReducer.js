import { combineReducers } from "redux";
import { authReducer } from "./authReducer";
import { productReducer } from "./productReducer";
import { cartReducer } from "./cartReducer";
import { orderReducer } from "./orderReducer";
import { notificationReducer } from "./notificationReducer";
import { userReducer } from "./userReducer";
import { adminReducer } from "./adminReducer";

const rootReducer = combineReducers({
	  auth: authReducer, // Manages authentication state
	  products: productReducer, // Manages product listing and details
	  cart: cartReducer, // Manages cart items
	  orders: orderReducer, // Manages orders and order history
	  notifications: notificationReducer, // Manages alerts and notifications
	  user: userReducer, // Manages user profiles and details
	  admin: adminReducer, // Manages admin functionalities
});

export default rootReducer;
