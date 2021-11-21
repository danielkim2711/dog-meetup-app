import React, { useState, useRef } from 'react';
import { useHistory } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import axios from 'axios';

const Profile = ({ loadedLoggedInUser, loadedProfile }) => {
  const history = useHistory();

  const [emailError, setEmailError] = useState(false);
  const [errorMessage, setErrorMessage] = useState();

  const [token, setToken, removeToken] = useCookies(['myToken']);
  const [isUpdating, setIsUpdating] = useState(false);

  const [image, setImage] = useState('');
  const firstNameInputRef = useRef();
  const lastNameInputRef = useRef();
  const [gender, setGender] = useState();
  const emailInputRef = useRef();
  const addressInputRef = useRef();

  const handleGender = (e) => {
    setGender(e.currentTarget.value);
  };

  const uploadImage = (e) => {
    const files = e.target.files[0];
    const formData = new FormData();
    formData.append('upload_preset', 'ml_default');
    formData.append('file', files);

    axios
      .post('https://api.cloudinary.com/v1_1/dluiyrdmg/image/upload', formData)
      .then((res) => {
        console.log(res);
        setImage(res.data.secure_url);
      })
      .catch((err) => console.log(err));
  };

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

  const handleSubmit = (e) => {
    e.preventDefault();

    const enteredPicture = image;
    const enteredFirstName = firstNameInputRef.current.value;
    const enteredLastName = lastNameInputRef.current.value;
    const enteredGender = gender;
    const enteredEmail = emailInputRef.current.value;
    const enteredAddress = addressInputRef.current.value;

    const profileDetail = {
      picture: enteredPicture,
      first_name: enteredFirstName,
      last_name: enteredLastName,
      gender: enteredGender,
      email: enteredEmail,
      address: enteredAddress,
      user: loadedLoggedInUser.user_id,
    };

    // Form Validation

    // Email Input Validation

    const atpos = profileDetail.email.indexOf('@');
    const dotpos = profileDetail.email.lastIndexOf('.');

    if (atpos < 1 || dotpos - atpos < 2) {
      setEmailError(true);
      emailInputRef.current.value = '';
      setErrorMessage('Please type a valid email ID.');
      return false;
    }
    setEmailError(false);
    setErrorMessage();

    axios
      .put(
        `http://127.0.0.1:8000/api/profiles/${loadedLoggedInUser.user_id}/`,
        profileDetail,
        {
          headers: {
            Authorization: `Token ${token['myToken']}`,
          },
        }
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        alert('Sorry, there was a problem. Please try again later');
        console.log(err);
      });
    history.push('/');
  };

  return (
    <ul className='profile__list'>
      <li className='profile__item'>
        <div className='profile__card'>
          <div className={isUpdating ? 'hide' : 'profile__content'}>
            <img
              className='profile__image'
              src={
                loadedProfile.picture === null
                  ? 'https://res.cloudinary.com/dluiyrdmg/image/upload/v1637453115/default_tbqndi.png'
                  : loadedProfile.picture
              }
              alt='User Profile'
            />
          </div>
          <div className={isUpdating ? 'hide' : 'profile__content'}>
            <h3>Username:</h3>
            <p>{loadedLoggedInUser.user_username}</p>
          </div>
          <div className={isUpdating ? 'hide' : 'profile__content'}>
            <h3>First Name:</h3>
            <p>{loadedProfile.first_name}</p>
          </div>
          <div className={isUpdating ? 'hide' : 'profile__content'}>
            <h3>Last Name:</h3>
            <p>{loadedProfile.last_name}</p>
          </div>
          <div className={isUpdating ? 'hide' : 'profile__content'}>
            <h3>Gender:</h3>
            <p>{loadedProfile.gender === 'M' ? 'Male' : 'Female'}</p>
          </div>
          <div className={isUpdating ? 'hide' : 'profile__content'}>
            <h3>Email:</h3>
            <p>{loadedProfile.email}</p>
          </div>
          <div className={isUpdating ? 'hide' : 'profile__content'}>
            <h3>Address:</h3>
            <p>{loadedProfile.address}</p>
          </div>
          <div className={isUpdating || 'hide'}>
            <form className='form' onSubmit={handleSubmit}>
              <h2 className='form__title'>Update Profile</h2>
              <div className='control'>
                <input type='file' name='file' onChange={uploadImage} />
              </div>
              <div className='control'>
                <label htmlFor='firstName'>First Name</label>
                <input
                  type='text'
                  required
                  id='firstName'
                  ref={firstNameInputRef}
                />
              </div>
              <div className='control'>
                <label htmlFor='lastName'>Last Name</label>
                <input
                  type='text'
                  required
                  id='lastName'
                  ref={lastNameInputRef}
                />
              </div>
              <div className='control control__radio'>
                <label htmlFor='male'>Male</label>
                <input
                  type='radio'
                  required
                  id='male'
                  name='gender'
                  value='M'
                  onClick={handleGender}
                />
                <label htmlFor='female'>Female</label>
                <input
                  type='radio'
                  required
                  id='female'
                  name='gender'
                  value='F'
                  onClick={handleGender}
                />
              </div>
              <div className='control'>
                <label htmlFor='email'>Email</label>
                <input
                  className={emailError === true ? 'error' : ''}
                  placeholder={emailError === true ? errorMessage : ''}
                  type='text'
                  required
                  id='email'
                  ref={emailInputRef}
                />
              </div>
              <div className='control'>
                <label htmlFor='address'>Address</label>
                <input
                  type='text'
                  required
                  id='address'
                  ref={addressInputRef}
                />
              </div>
              <div className='actions'>
                <button>Submit</button>
              </div>
            </form>
            <div className='actions actions--center'>
              <button onClick={() => setIsUpdating(false)}>Cancel</button>
            </div>
          </div>
          <div className={isUpdating ? 'hide' : 'profile__actions'}>
            <button onClick={() => setIsUpdating(true)}>Update Profile</button>
            <button onClick={deleteAccount}>Delete Account</button>
          </div>
        </div>
      </li>
    </ul>
  );
};

export default Profile;
