import React from 'react';
import { useHistory } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import axios from 'axios';

const Profile = ({ loadedLoggedInUser, loadedProfile }) => {
  const history = useHistory();

  const [token, setToken, removeToken] = useCookies(['myToken']);

  const deleteAccount = () => {
    axios
      .delete(
        `http://127.0.0.1:8000/api/users/${loadedLoggedInUser.user_id}/`,
        {
          headers: {
            Authorization: `Token ${token['myToken']}`,
          },
        }
      )
      .then((res) => {
        console.log(res);
        removeToken(['myToken']);
        history.push('/');
        alert('Account deleted successfully.');
      })
      .catch((err) => console.log(err));
  };

  return (
    <ul className='profile__list'>
      <li className='profile__item'>
        <div className='profile__card'>
          <div className='profile__content'>
            <img src={loadedProfile.picture} alt='Test' />
          </div>
          <div className='profile__content'>
            <h3>Username:</h3>
            <p>{loadedLoggedInUser.user_username}</p>
          </div>
          <div className='profile__content'>
            <h3>First Name:</h3>
            <p>{loadedProfile.first_name}</p>
          </div>
          <div className='profile__content'>
            <h3>Last Name:</h3>
            <p>{loadedProfile.last_name}</p>
          </div>
          <div className='profile__content'>
            <h3>Gender:</h3>
            <p>{loadedProfile.gender === 'M' ? 'Male' : 'Female'}</p>
          </div>
          <div className='profile__content'>
            <h3>Email:</h3>
            <p>{loadedProfile.email}</p>
          </div>
          <div className='profile__content'>
            <h3>Address:</h3>
            <p>{loadedProfile.address}</p>
          </div>
          <div className='profile__actions'>
            <button>Update Profile</button>
            <button onClick={deleteAccount}>Delete Account</button>
          </div>
        </div>
      </li>
    </ul>
  );
};

export default Profile;
