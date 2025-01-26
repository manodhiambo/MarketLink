import React from 'react';

const AdminUserCard = ({ user }) => {
	  return (
		      <div className="admin-user-card">
		        <h3>{user.name}</h3>
		        <p>Email: {user.email}</p>
		        <p>Phone: {user.phone}</p>
		        <button>Delete User</button>
		      </div>
		    );
};

export default AdminUserCard;
