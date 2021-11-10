import React from 'react';

const Registration = () => {
  return (
    <div className='form__card'>
      <form className='form'>
        <h1 className='form__title'>Create Account</h1>
        <div className='control'>
          <label htmlFor='username'>Username</label>
          <input type='text' required id='username' />
        </div>
        <div className='control'>
          <label htmlFor='firstName'>First Name</label>
          <input type='text' required id='firstName' />
        </div>
        <div className='control'>
          <label htmlFor='lastName'>Last Name</label>
          <input type='text' required id='lastName' />
        </div>
        <div className='control control__radio'>
          <label htmlFor='male'>Male</label>
          <input type='radio' required id='male' name='gender' />
          <label htmlFor='female'>Female</label>
          <input type='radio' required id='female' name='gender' />
        </div>
        <div className='control'>
          <label htmlFor='email'>Email</label>
          <input type='text' required id='email' />
        </div>
        <div className='control'>
          <label htmlFor='password'>Password</label>
          <input type='password' required id='password' />
        </div>
        <div className='control'>
          <label htmlFor='address'>Address</label>
          <input type='text' required id='address' />
        </div>
        <div className='actions'>
          <button>Sign Up</button>
        </div>
      </form>
    </div>
  );
};

export default Registration;
