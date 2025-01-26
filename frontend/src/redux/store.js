import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import logger from "redux-logger";
import rootReducer from "./reducers/rootReducer";  // Ensure correct path

const middleware = [thunk];

if (process.env.NODE_ENV === "development") {
	  middleware.push(logger); // Only add logger in development mode
}

const store = createStore(
	  rootReducer,
	  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
