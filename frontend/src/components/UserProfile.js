import React from 'react';
import ProfileEditForm from './ProfileEditForm';

const UserProfile = ({ user }) => {
	  return (
		      <div className="user-profile">
		        <h2>Your Profile</h2>
		        <p>Name: {user.name}</p>
		        <p>Email: {user.email}</p>
		        <ProfileEditForm user={user} />
		      </div>
		    );
};

export default UserProfile;
