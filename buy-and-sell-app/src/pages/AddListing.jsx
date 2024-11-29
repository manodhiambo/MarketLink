import React, { useState } from 'react';
import { addListing } from '../services/api';

function AddListing() {
	  const [formData, setFormData] = useState({
		      title: '',
		      description: '',
		      price: '',
		      image: null,
		    });

	  const handleChange = (e) => {
		      const { name, value } = e.target;
		      setFormData({ ...formData, [name]: value });
		    };

	  const handleImageChange = (e) => {
		      setFormData({ ...formData, image: e.target.files[0] });
		    };
	const handleSubmit = (e) => {
		    e.preventDefault();
		    addListing(formData)
		      .then((newListing) => {
			              alert('Listing added successfully!');
			              console.log(newListing);
			            })
		      .catch((err) => console.error(err));
		  };

	  return (
		      <div className="add-listing">
		        <h2>Add a New Listing</h2>
		        <form onSubmit={handleSubmit}>
		          <input type="text" name="title" placeholder="Title" onChange={handleChange} required />
		          <textarea name="description" placeholder="Description" onChange={handleChange} required />
		          <input type="number" name="price" placeholder="Price" onChange={handleChange} required />
		          <input type="file" name="image" onChange={handleImageChange} required />
		          <button type="submit">Add Listing</button>
		        </form>
		      </div>
		    );
}

export default AddListing;
