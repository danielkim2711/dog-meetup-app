import React, { useState, useRef } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

const Registration = () => {
  const history = useHistory();

  const userNameInputRef = useRef();
  const firstNameInputRef = useRef();
  const lastNameInputRef = useRef();
  const [gender, setGender] = useState();
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const addressInputRef = useRef();

  const handleGender = (e) => {
    setGender(e.currentTarget.value);
    console.log(gender);
  };

  // Use async await fetch AJAX

  // const createUser = async (userData) => {
  //   await fetch('http://127.0.0.1:8000/api/users/', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify(userData),
  //   });
  //   history.replace('/');
  // };

  // Use Axios AJAX (POST)

  const createUser = (userData) => {
    axios
      .post('http://127.0.0.1:8000/api/users/', userData)
      .then((res) => {
        alert('Thank You. Account created successfully.', res);
      })
      .catch((err) => {
        alert('Sorry, there was a problem. Please try again later', err);
      });
    history.replace('/');
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const enteredUserName = userNameInputRef.current.value;
    const enteredFirstName = firstNameInputRef.current.value;
    const enteredLastName = lastNameInputRef.current.value;
    const enteredGender = gender;
    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;
    const enteredAddress = addressInputRef.current.value;

    const userData = {
      user_name: enteredUserName,
      first_name: enteredFirstName,
      last_name: enteredLastName,
      gender: enteredGender,
      email: enteredEmail,
      password: enteredPassword,
      address: enteredAddress,
    };

    createUser(userData);
  };

  return (
    <div className='form__card'>
      <form className='form' onSubmit={handleSubmit}>
        <h1 className='form__title'>Create Account</h1>
        <div className='control'>
          <label htmlFor='username'>Username *</label>
          <input type='text' required id='username' ref={userNameInputRef} />
        </div>
        <div className='control'>
          <label htmlFor='firstName'>First Name *</label>
          <input type='text' required id='firstName' ref={firstNameInputRef} />
        </div>
        <div className='control'>
          <label htmlFor='lastName'>Last Name *</label>
          <input type='text' required id='lastName' ref={lastNameInputRef} />
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
          <label htmlFor='email'>Email *</label>
          <input type='text' required id='email' ref={emailInputRef} />
        </div>
        <div className='control'>
          <label htmlFor='password'>Password *</label>
          <input
            type='password'
            required
            id='password'
            ref={passwordInputRef}
          />
        </div>
        <div className='control'>
          <label htmlFor='address'>Address *</label>
          <input type='text' required id='address' ref={addressInputRef} />
        </div>
        <div className='actions'>
          <button>Sign Up</button>
        </div>
      </form>
    </div>
  );
};

export default Registration;
