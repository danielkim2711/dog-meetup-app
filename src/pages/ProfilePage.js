import React from 'react';

// Components
import Profile from '../components/Profile';

const ProfilePage = ({ loadedLoggedInUser, loadedProfile }) => {
  return (
    <div>
      <h1>My Profile</h1>
      <Profile
        loadedLoggedInUser={loadedLoggedInUser}
        loadedProfile={loadedProfile}
      />
    </div>
  );
};

export default ProfilePage;
