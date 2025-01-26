import React from 'react';
import AdminProductList from './AdminProductList';

const AdminProductManagement = ({ products }) => {
	  return (
		      <div className="admin-product-management">
		        <h2>Manage Products</h2>
		        <AdminProductList products={products} />
		      </div>
		    );
};

export default AdminProductManagement;
