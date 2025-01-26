import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
	  return (
		      <div className="sidebar">
		        <ul>
		          <li><Link to="/home">Home</Link></li>
		          <li><Link to="/products">Products</Link></li>
		          <li><Link to="/profile">Profile</Link></li>
		          <li><Link to="/admin">Admin Panel</Link></li>
		        </ul>
		      </div>
		    );
};

export default Sidebar;
