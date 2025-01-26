import api from "./api";

export const placeOrder = async (orderData) => {
	  const response = await api.post("/orders", orderData);
	  return response.data;
};

export const fetchOrders = async () => {
	  const response = await api.get("/orders");
	  return response.data;
};

export const trackOrder = async (orderId) => {
	  const response = await api.get(`/orders/${orderId}`);
	  return response.data;
};
