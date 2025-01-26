import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AdminUserManagement = () => {
	  const [users, setUsers] = useState([]);

	  useEffect(() => {
		  axios.get('/api/users').then(response => setUsers(response.data));
		    }, []);

	const handleDeleteUser = (userId) => {
		axios.delete(`/api/users/${userId}`).then(() => {
			      setUsers(users.filter(user => user.id !== userId));
			    });
		  };

	  return (
		      <div className="admin-user-management">
		        <h2>Manage Users</h2>
		        <table>
		          <thead>
		            <tr>
		              <th>Name</th>
		              <th>Email</th>
		              <th>Actions</th>
		            </tr>
		          </thead>
		          <tbody>
		            {users.map(user => (
				                <tr key={user.id}>
				                  <td>{user.name}</td>
				                  <td>{user.email}</td>
				                  <td>
				                    <button onClick={() => handleDeleteUser(user.id)}>Delete</button>
				                  </td>
				                </tr>
				              ))}
		          </tbody>
		        </table>
		      </div>
		    );
};

export default AdminUserManagement;
