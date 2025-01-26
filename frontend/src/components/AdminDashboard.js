import React, { useState } from 'react';
import AdminUserManagement from './AdminUserManagement';
import AdminAnalytics from './AdminAnalytics';

const AdminDashboard = () => {
	  const [activeTab, setActiveTab] = useState('users');

	  const renderTabContent = () => {
		      switch (activeTab) {
			            case 'users':
				              return <AdminUserManagement />;
				            case 'analytics':
				              return <AdminAnalytics />;
				            default:
				              return <AdminUserManagement />;
				          }
		    };

	  return (
		      <div className="admin-dashboard">
		        <div className="tabs">
		          <button onClick={() => setActiveTab('users')}>User Management</button>
		          <button onClick={() => setActiveTab('analytics')}>Analytics</button>
		        </div>
		        <div className="tab-content">
		          {renderTabContent()}
		        </div>
		      </div>
		    );
};

export default AdminDashboard;
