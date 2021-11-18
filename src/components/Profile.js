import React from 'react';

const Profile = ({ loadedLoggedInUser, loadedProfile }) => {
  return (
    <div>
      <div>
        {console.log(loadedProfile.picture)}
        <img src={loadedProfile.picture} alt='Test' />
        <h1>Username:</h1>
        <p>{loadedLoggedInUser.user_username}</p>
      </div>
      <div>
        <h1>First Name:</h1>
        <p>{loadedProfile.first_name}</p>
      </div>
      <div>
        <h1>Last Name:</h1>
        <p>{loadedProfile.last_name}</p>
      </div>
      <div>
        <h1>Gender:</h1>
        <p>{loadedProfile.gender === 'M' ? 'Male' : 'Female'}</p>
      </div>
      <div>
        <h1>Email:</h1>
        <p>{loadedProfile.email}</p>
      </div>
      <div>
        <h1>Address:</h1>
        <p>{loadedProfile.address}</p>
      </div>
    </div>
  );
};

export default Profile;
