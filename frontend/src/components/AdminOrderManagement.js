import React from 'react';
import AdminOrderCard from './AdminOrderCard';

const AdminOrderManagement = ({ orders }) => {
	  return (
		      <div className="admin-order-management">
		        <h2>Manage Orders</h2>
		        <div className="order-list">
		          {orders.map((order) => (
				            <AdminOrderCard key={order.id} order={order} />
				          ))}
		        </div>
		      </div>
		    );
};

export default AdminOrderManagement;
