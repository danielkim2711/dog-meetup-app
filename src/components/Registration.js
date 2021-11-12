import React, { useRef, useHistory } from 'react';

const Registration = () => {
  // const history = useHistory();

  const firstNameInputRef = useRef();
  const lastNameInputRef = useRef();
  // const genderInputRef = useRef();
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const addressInputRef = useRef();

  const createUser = async (userData) => {
    await fetch('http://127.0.0.1:8000/api/users/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });
    // history.replace('/');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const enteredFirstName = firstNameInputRef.current.value;
    const enteredLastName = lastNameInputRef.current.value;
    // const enteredGender = genderInputRef.current.value;
    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;
    const enteredAddress = addressInputRef.current.value;

    const userData = {
      first_name: enteredFirstName,
      last_name: enteredLastName,
      // gender: enteredGender,
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
        {/* <div className='control'>
          <label htmlFor='username'>Username *</label>
          <input type='text' required id='username' />
        </div> */}
        <div className='control'>
          <label htmlFor='firstName'>First Name *</label>
          <input type='text' required id='firstName' ref={firstNameInputRef} />
        </div>
        <div className='control'>
          <label htmlFor='lastName'>Last Name *</label>
          <input type='text' required id='lastName' ref={lastNameInputRef} />
        </div>
        {/* <div className='control control__radio'>
          <label htmlFor='male'>Male</label>
          <input
            type='radio'
            required
            id='male'
            name='gender'
            ref={genderInputRef}
          />
          <label htmlFor='female'>Female</label>
          <input
            type='radio'
            required
            id='female'
            name='gender'
            ref={genderInputRef}
          />
        </div> */}
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
        {/* <h1 className='form__title'>Dog Details</h1>
        <div className='control'>
          <label htmlFor='dogName'>Dog Name *</label>
          <input type='text' required id='dogName' />
        </div>
        <div className='control'>
          <label htmlFor='dogBreed'>Dog Breed *</label>
          <input type='text' required id='dogBreed' />
        </div> */}
        <div className='actions'>
          <button>Sign Up</button>
        </div>
      </form>
    </div>
  );
};

export default Registration;
