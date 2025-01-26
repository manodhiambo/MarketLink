import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AdminAnalytics = () => {
	  const [analyticsData, setAnalyticsData] = useState([]);

	  useEffect(() => {
		      axios.get('/api/admin/analytics').then(response => setAnalyticsData(response.data));
		    }, []);

	  return (
		      <div className="admin-analytics">
		        <h2>Admin Analytics</h2>
		        <ul>
		          {analyticsData.map((data, index) => (
				            <li key={index}>{data}</li>
				          ))}
		        </ul>
		      </div>
		    );
};

export default AdminAnalytics;
