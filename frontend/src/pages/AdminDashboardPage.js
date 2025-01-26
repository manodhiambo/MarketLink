import React, { useState, useEffect } from 'react';
import AdminUserManagement from '../components/AdminUserManagement';
import AdminAnalytics from '../components/AdminAnalytics';

const AdminDashboard = () => {
	  const [activeTab, setActiveTab] = useState('users');
	  const [dashboardData, setDashboardData] = useState(null);

	useEffect(() => {
		const fetchDashboardData = async () => {
			const response = await fetch('/api/dashboard-data');
			      const data = await response.json();
			      setDashboardData(data);
		};

		fetchDashboardData();
		  }, []);

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
		        <h1>Admin Dashboard</h1>
		        {/* Optionally display loading state while data is being fetched */}
		        {!dashboardData ? (
				        <p>Loading dashboard data...</p>
				      ) : (
					              <div>
					                {/* Tabs for navigating between sections */}
					                <div className="tabs">
					                  <button onClick={() => setActiveTab('users')}>User Management</button>
					                  <button onClick={() => setActiveTab('analytics')}>Analytics</button>
					                </div>

					                {/* Render active tab content */}
					                <div className="tab-content">
					                  {renderTabContent()}
					                </div>
					              </div>
					            )}
		      </div>
		    );
};

export default AdminDashboard;
