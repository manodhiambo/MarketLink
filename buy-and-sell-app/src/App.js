import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ErrorBoundary from './components/ErrorBoundary';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import ProductDetails from './pages/ProductDetails';
import AddListing from './pages/AddListing';
import Header from './components/Header';
import Footer from './components/Footer';
import './styles/styles.css';

function App() {
	  return (
		      <ErrorBoundary>  {/* Wrap the entire app or specific components */}
		        <Router>
		          <Header />
		          <Routes>
		            <Route path="/" element={<Home />} />
		            <Route path="/login" element={<Login />} />
		            <Route path="/register" element={<Register />} />
		            <Route path="/product/:id" element={<ProductDetails />} />
		            <Route path="/add-listing" element={<AddListing />} />
		          </Routes>
		          <Footer />
		        </Router>
		      </ErrorBoundary>
		    );
}

export default App;
