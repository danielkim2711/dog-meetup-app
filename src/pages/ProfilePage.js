import React from 'react';
import Cookies from 'universal-cookie';

// Components
import Profile from '../components/Profile';

const ProfilePage = ({ loadedLoggedInUser, loadedProfile }) => {
  const cookies = new Cookies();

  return (
    <section className='profile__section'>
      <h1>My Profile</h1>
      {cookies.get('myToken') === undefined ? (
        <h1>Please sign in to edit your profile</h1>
      ) : (
        <Profile
          loadedLoggedInUser={loadedLoggedInUser}
          loadedProfile={loadedProfile}
        />
      )}
    </section>
  );
};

export default ProfilePage;
