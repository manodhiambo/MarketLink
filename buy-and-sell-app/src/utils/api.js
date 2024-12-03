import axios from 'axios';

const api = axios.create({
	          baseURL: 'http://localhost:5000/api',
	});

export const registerUser = async (userData) => {
	const response = await api.post('/users/register', userData);
	return response.data;

};

export const loginUser = async (credentials) => {
	const response = await api.post('/users/login', credentials);
	return response.data;

};

export const fetchListings = async () => {
	const response = await api.get('/listings');
	return response.data;

};

export const addListing = async (listingData) =>{
	const response = await api.post('/listings', listingData);
return response.data;
 };

export default api;
