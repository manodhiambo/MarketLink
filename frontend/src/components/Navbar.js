import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../redux/actions/authActions';

const Navbar = () => {
	  const dispatch = useDispatch();
	  const { isAuthenticated } = useSelector((state) => state.auth);

	const handleLogout = () => {
		    dispatch(logout());
		  };

	  return (
		      <nav className="navbar bg-gray-800 text-white p-4">
		        <div className="container mx-auto flex justify-between items-center">
		          {/* Logo */}
		          <Link to="/" className="text-2xl font-bold">
		            MarketLink
		          </Link>

		          {/* Navigation Links */}
		          <div className="flex items-center space-x-4">
		            <Link to="/" className="hover:text-yellow-400 focus:text-yellow-400">Home</Link>
		            <Link to="/products" className="hover:text-yellow-400 focus:text-yellow-400">Products</Link>
		            <Link to="/contact" className="hover:text-yellow-400 focus:text-yellow-400">Contact Us</Link>

		            {/* Conditional Links */}
		            {isAuthenticated ? (
				                <>
				                  <Link to="/profile" className="hover:text-yellow-400 focus:text-yellow-400">My Profile</Link>
				                  <button
				                    onClick={handleLogout}
				                    className="bg-yellow-500 text-black px-3 py-1 rounded hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-300"
				                  >
				                    Logout
				                  </button>
				                </>
				              ) : (
						                  <>
						                    <Link to="/login" className="hover:text-yellow-400 focus:text-yellow-400">Login</Link>
						                    <Link to="/register" className="hover:text-yellow-400 focus:text-yellow-400">Register</Link>
						                  </>
						                )}
		          </div>
		        </div>
		      </nav>
		    );
};

export default Navbar;
