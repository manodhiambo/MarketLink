import React, { useState } from 'react';

const ProfileEditForm = ({ user }) => {
	  const [formData, setFormData] = useState({
		      name: user.name,
		      email: user.email,
		      phone: user.phone
		    });

	  const handleInputChange = (e) => {
		      setFormData({
			            ...formData,
			            [e.target.name]: e.target.value
			          });
		    };

	  const handleSubmit = (e) => {
		      e.preventDefault();
	  };
	return (
		    <form onSubmit={handleSubmit}>
		      <label>Name</label>
		      <input
		        type="text"
		        name="name"
		        value={formData.name}
		        onChange={handleInputChange}
		      />
		      <label>Email</label>
		      <input
		        type="email"
		        name="email"
		        value={formData.email}
		        onChange={handleInputChange}
		      />
		      <label>Phone</label>
		      <input
		        type="text"
		        name="phone"
		        value={formData.phone}
		        onChange={handleInputChange}
		      />
		      <button type="submit">Save Changes</button>
		    </form>
		  );
};

export default ProfileEditForm;
