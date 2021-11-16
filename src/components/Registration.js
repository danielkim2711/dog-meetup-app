import React, { useState, useRef } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

const Registration = () => {
  const history = useHistory();

  const [emailError, setEmailError] = useState(false);
  const [errorMessage, setErrorMessage] = useState();

  const userNameInputRef = useRef();
  const passwordInputRef = useRef();
  const firstNameInputRef = useRef();
  const lastNameInputRef = useRef();
  const [gender, setGender] = useState();
  const emailInputRef = useRef();
  const addressInputRef = useRef();

  const handleGender = (e) => {
    setGender(e.currentTarget.value);
  };

  // Use async await fetch AJAX

  // const createUserDetail = async (userDetail) => {
  //   await fetch('http://127.0.0.1:8000/api/users/', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify(userDetail),
  //   });
  //   history.replace('/');
  // };

  // Use Axios AJAX (POST)

  const createUserLogin = (userLogin) => {
    axios
      .post('http://127.0.0.1:8000/api/users/', userLogin)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  const createUserDetail = (userDetail) => {
    axios
      .post('http://127.0.0.1:8000/api/profiles/', userDetail)
      .then((res) =>
        alert('Thank You. Your account created successfully.', console.log(res))
      )
      .catch((err) =>
        alert(
          'Sorry, there was a problem. Please try again later',
          console.log(err)
        )
      );
    history.replace('/');
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const enteredUserName = userNameInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;
    const enteredFirstName = firstNameInputRef.current.value;
    const enteredLastName = lastNameInputRef.current.value;
    const enteredGender = gender;
    const enteredEmail = emailInputRef.current.value;
    const enteredAddress = addressInputRef.current.value;

    const userLogin = {
      username: enteredUserName,
      password: enteredPassword,
    };

    const userDetail = {
      first_name: enteredFirstName,
      last_name: enteredLastName,
      gender: enteredGender,
      email: enteredEmail,
      address: enteredAddress,
    };

    // Form Validation

    // Email Input Validation

    const email = userDetail.email;
    const atpos = email.indexOf('@');
    const dotpos = email.lastIndexOf('.');

    if (atpos < 1 || dotpos - atpos < 2) {
      setEmailError(true);
      emailInputRef.current.value = '';
      setErrorMessage('Please type a valid email ID.');
      return false;
    }
    setEmailError(false);
    setErrorMessage();

    createUserLogin(userLogin);
    createUserDetail(userDetail);
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
          <label htmlFor='password'>Password *</label>
          <input
            type='password'
            required
            id='password'
            ref={passwordInputRef}
          />
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
