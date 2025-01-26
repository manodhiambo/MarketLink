import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Public Pages
import HomePage from './pages/HomePage';
import AboutUsPage from './pages/AboutUsPage';
import ContactUsPage from './pages/ContactUsPage';
import ProductPage from './pages/ProductPage';
import ProductDetailPage from './pages/ProductDetailPage';
import CartPage from './pages/CartPage';
import CheckoutPage from './pages/CheckoutPage';
import OrderHistoryPage from './pages/OrderHistoryPage';
import WishlistPage from './pages/WishlistPage';
import HelpCenterPage from './pages/HelpCenterPage';
import RefundPolicyPage from './pages/RefundPolicyPage';
import ShippingInfoPage from './pages/ShippingInfoPage';
import TermsAndConditionsPage from './pages/TermsAndConditionsPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import ForgotPasswordPage from './pages/ForgotPasswordPage';
import ResetPasswordPage from './pages/ResetPasswordPage';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';

// Admin Pages
import AdminPage from './pages/AdminPage';
import AdminUserManagementPage from './pages/AdminUserManagementPage';
import AdminProductManagementPage from './pages/AdminProductManagementPage';
import AdminOrderManagementPage from './pages/AdminOrderManagementPage';
import AdminReportsPage from './pages/AdminReportsPage';
import AdminSettingsPage from './pages/AdminSettingsPage';
import AdminDashboardPage from './pages/AdminDashboardPage';

// Other User Pages
import ProfilePage from './pages/ProfilePage';
import EditProfilePage from './pages/EditProfilePage';
import MessageCenterPage from './pages/MessageCenterPage';
import ReviewPage from './pages/ReviewPage';
import FAQPage from './pages/FAQPage';
import NotificationsPage from './pages/NotificationsPage';
import SearchResultsPage from './pages/SearchResultsPage';

import './styles/App.css'; // Import global styles

function App() {
	  return (
		      <div className="App">
		        {/* Navbar */}
		        <Navbar />

		        {/* Routes */}
		        <Routes>
		          {/* Public Pages */}
		          <Route path="/" element={<HomePage />} />
		          <Route path="/about" element={<AboutUsPage />} />
		          <Route path="/contact" element={<ContactUsPage />} />
		          <Route path="/products" element={<ProductPage />} />
		          <Route path="/product/:id" element={<ProductDetailPage />} />
		          <Route path="/cart" element={<CartPage />} />
		          <Route path="/checkout" element={<CheckoutPage />} />
		          <Route path="/order-history" element={<OrderHistoryPage />} />
		          <Route path="/wishlist" element={<WishlistPage />} />
		          <Route path="/help" element={<HelpCenterPage />} />
		          <Route path="/refund-policy" element={<RefundPolicyPage />} />
		          <Route path="/shipping-info" element={<ShippingInfoPage />} />
		          <Route path="/terms" element={<TermsAndConditionsPage />} />
		          <Route path="/privacy" element={<PrivacyPolicyPage />} />
		          <Route path="/forgot-password" element={<ForgotPasswordPage />} />
		          <Route path="/reset-password" element={<ResetPasswordPage />} />
		          <Route path="/register" element={<RegisterPage />} />
		          <Route path="/login" element={<LoginPage />} />

		          {/* Admin Pages */}
		          <Route path="/admin" element={<AdminPage />} />
		          <Route path="/admin/dashboard" element={<AdminDashboardPage />} />
		          <Route path="/admin/users" element={<AdminUserManagementPage />} />
		          <Route path="/admin/products" element={<AdminProductManagementPage />} />
		          <Route path="/admin/orders" element={<AdminOrderManagementPage />} />
		          <Route path="/admin/reports" element={<AdminReportsPage />} />
		          <Route path="/admin/settings" element={<AdminSettingsPage />} />

		          {/* Other User Pages */}
		          <Route path="/profile" element={<ProfilePage />} />
		          <Route path="/profile/edit" element={<EditProfilePage />} />
		          <Route path="/messages" element={<MessageCenterPage />} />
		          <Route path="/reviews" element={<ReviewPage />} />
		          <Route path="/faq" element={<FAQPage />} />
		          <Route path="/notifications" element={<NotificationsPage />} />
		          <Route path="/search" element={<SearchResultsPage />} />
		        </Routes>

		        {/* Footer */}
		        <Footer />
		      </div>
		    );
}

export default App;
