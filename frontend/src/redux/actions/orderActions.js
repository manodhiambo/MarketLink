export const PLACE_ORDER_REQUEST = "PLACE_ORDER_REQUEST";
export const PLACE_ORDER_SUCCESS = "PLACE_ORDER_SUCCESS";
export const PLACE_ORDER_FAILURE = "PLACE_ORDER_FAILURE";

export const FETCH_ORDERS_REQUEST = "FETCH_ORDERS_REQUEST";
export const FETCH_ORDERS_SUCCESS = "FETCH_ORDERS_SUCCESS";
export const FETCH_ORDERS_FAILURE = "FETCH_ORDERS_FAILURE";

export const placeOrder = (orderDetails) => ({
	  type: PLACE_ORDER_REQUEST,
	  payload: orderDetails,
});

export const placeOrderSuccess = (order) => ({
	  type: PLACE_ORDER_SUCCESS,
	  payload: order,
});

export const placeOrderFailure = (error) => ({
	  type: PLACE_ORDER_FAILURE,
	  payload: error,
});

export const fetchOrders = () => ({
	  type: FETCH_ORDERS_REQUEST,
});

export const fetchOrdersSuccess = (orders) => ({
	  type: FETCH_ORDERS_SUCCESS,
	  payload: orders,
});

export const fetchOrdersFailure = (error) => ({
	  type: FETCH_ORDERS_FAILURE,
	  payload: error,
});
