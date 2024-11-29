const API_BASE_URL = 'http://localhost:5000/api';
export const fetchListings = async () => {
	  try {
		      const response = await fetch(`${API_BASE_URL}/listings`);
		  if (!response.ok) {
			        throw new Error(`Error fetching listings: ${response.statusText}`);
			      }

		      return await response.json();
		    } catch (error) {
			        console.error(error);
			        throw new Error('Failed to fetch listings');
			      }
};

export const addListing = async (data) => {
	  try {
		      const response = await fetch(`${API_BASE_URL}/listings`, {
			            method: 'POST',
			            headers: { 'Content-Type': 'application/json' },
			            body: JSON.stringify(data),
			          });

		  if (!response.ok) {
			        throw new Error(`Error adding listing: ${response.statusText}`);
			      }

		      return await response.json();
		    } catch (error) {
			        console.error(error);
			        throw new Error('Failed to add listing');
			      }
};
